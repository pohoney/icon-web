import { getStore } from "@edgeone/pages-blob";

function contentTypeFromKey(key) {
  if (key.endsWith(".webp")) return "image/webp";
  if (key.endsWith(".jpg") || key.endsWith(".jpeg")) return "image/jpeg";
  if (key.endsWith(".svg")) return "image/svg+xml; charset=utf-8";
  return "image/png";
}

export async function onRequest({ request }) {
  if (request.method !== "GET") {
    return new Response("Method not allowed", { status: 405 });
  }

  const url = new URL(request.url);
  const key = url.searchParams.get("key") || "";
  if (!key.startsWith("icons/") || key.includes("..")) {
    return new Response("Invalid asset key", { status: 400 });
  }

  const store = getStore("icon-assets");
  const body = await store.get(key, {
    type: "arrayBuffer",
    consistency: "eventual"
  });

  if (!body) return new Response("Not found", { status: 404 });

  return new Response(body, {
    headers: {
      "content-type": contentTypeFromKey(key),
      "cache-control": "public,max-age=31536000,immutable"
    }
  });
}
