import { getStore } from "@edgeone/pages-blob";

const ADMIN_TOKEN_SHA256 = "aa0c737a779259530fc7aefea499fec39bb0fb30b44d4553717b568777cc1e73";

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

function getAdminToken(context) {
  return context?.env?.ICON_ADMIN_TOKEN || globalThis.process?.env?.ICON_ADMIN_TOKEN || "";
}

async function sha256(value) {
  const bytes = new TextEncoder().encode(value);
  const digest = await crypto.subtle.digest("SHA-256", bytes);
  return [...new Uint8Array(digest)].map((byte) => byte.toString(16).padStart(2, "0")).join("");
}

async function isAuthorized(request, context) {
  const providedToken = request.headers.get("x-admin-token") || "";
  const adminToken = getAdminToken(context);
  if (adminToken) return providedToken === adminToken;
  return providedToken ? await sha256(providedToken) === ADMIN_TOKEN_SHA256 : false;
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

export async function onRequest(context) {
  const { request } = context;
  if (request.method === "OPTIONS") return new Response(null, { headers });
  if (request.method !== "POST") return json({ error: "Method not allowed" }, { status: 405 });
  if (!(await isAuthorized(request, context))) {
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
