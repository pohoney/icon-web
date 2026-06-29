import { getStore } from "@edgeone/pages-blob";

const headers = {
  "content-type": "application/json; charset=utf-8",
  "cache-control": "no-store",
  "access-control-allow-origin": "*",
  "access-control-allow-methods": "POST,OPTIONS",
  "access-control-allow-headers": "content-type,x-admin-token"
};

function json(data, init = {}) {
  return new Response(JSON.stringify(data), {
    ...init,
    headers: { ...headers, ...(init.headers || {}) }
  });
}

function getAdminToken() {
  return globalThis.process?.env?.ICON_ADMIN_TOKEN || "";
}

function isAuthorized(request) {
  const adminToken = getAdminToken();
  if (!adminToken) return false;
  return request.headers.get("x-admin-token") === adminToken;
}

function slug(value) {
  return String(value || "")
    .trim()
    .toLowerCase()
    .replace(/[^a-z0-9-]/g, "-")
    .replace(/-+/g, "-")
    .replace(/^-|-$/g, "");
}

function extensionFromType(contentType) {
  if (contentType === "image/webp") return "webp";
  if (contentType === "image/jpeg") return "jpg";
  if (contentType === "image/svg+xml") return "svg";
  return "png";
}

export async function onRequest({ request }) {
  if (request.method === "OPTIONS") return new Response(null, { headers });
  if (request.method !== "POST") return json({ error: "Method not allowed" }, { status: 405 });
  if (!isAuthorized(request)) {
    return json({ error: "Unauthorized or ICON_ADMIN_TOKEN is not configured" }, { status: 401 });
  }

  const body = await request.json();
  const id = slug(body.id);
  const contentType = String(body.contentType || "image/png");
  if (!id) return json({ error: "Missing icon id" }, { status: 400 });
  if (!contentType.startsWith("image/")) return json({ error: "Only image uploads are allowed" }, { status: 400 });

  const key = `icons/${id}.${extensionFromType(contentType)}`;
  const store = getStore("icon-assets");
  const upload = await store.createUploadUrl(key, {
    expireSeconds: 900,
    contentType
  });

  return json({
    ...upload,
    assetUrl: `/api/assets?key=${encodeURIComponent(key)}`,
    contentType
  });
}
