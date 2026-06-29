import { getStore } from "@edgeone/pages-blob";

const fallbackIcons = [
  {
    id: "tennis-ball",
    title: "Tennis Ball",
    titleZh: "网球",
    tags: ["tennis", "equipment"],
    tagsZh: ["网球", "器材"],
    description: "A clean 3D tennis ball placeholder, ready to be replaced by your final icon.",
    descriptionZh: "一个预留的 3D 网球图标站位，后续可以直接替换成你的正式素材。",
    image: "/icons/tennis-ball.png",
    thumb: "/icons/tennis-ball.png",
    category: "tennis"
  },
  {
    id: "racket",
    title: "Racket",
    titleZh: "网球拍",
    tags: ["tennis", "racket"],
    tagsZh: ["网球", "球拍"],
    description: "A reserved slot for a racket icon with copy and download actions already wired.",
    descriptionZh: "网球拍图标站位，复制和下载逻辑已经接好。",
    image: "/icons/racket.png",
    thumb: "/icons/racket.png",
    category: "tennis"
  }
];

const headers = {
  "content-type": "application/json; charset=utf-8",
  "cache-control": "no-store",
  "access-control-allow-origin": "*",
  "access-control-allow-methods": "GET,POST,OPTIONS",
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

function normalizeIcon(icon, index) {
  const id = String(icon.id || "").trim().toLowerCase().replace(/[^a-z0-9-]/g, "-").replace(/-+/g, "-").replace(/^-|-$/g, "");
  return {
    id,
    title: String(icon.title || id),
    titleZh: String(icon.titleZh || icon.title_zh || icon.title || id),
    tags: Array.isArray(icon.tags) ? icon.tags.map(String) : [],
    tagsZh: Array.isArray(icon.tagsZh) ? icon.tagsZh.map(String) : Array.isArray(icon.tags_zh) ? icon.tags_zh.map(String) : [],
    description: String(icon.description || ""),
    descriptionZh: String(icon.descriptionZh || icon.description_zh || icon.description || ""),
    image: String(icon.image || icon.image_url || `/api/assets?key=icons/${id}.png`),
    thumb: String(icon.thumb || icon.thumb_url || icon.image || icon.image_url || `/api/assets?key=icons/${id}.png`),
    category: String(icon.category || "tennis"),
    status: icon.status === "hidden" ? "hidden" : "active",
    sort: Number.isFinite(Number(icon.sort)) ? Number(icon.sort) : index * 10
  };
}

export async function onRequest({ request }) {
  if (request.method === "OPTIONS") return new Response(null, { headers });

  const store = getStore("icon-data");

  if (request.method === "GET") {
    const url = new URL(request.url);
    const saved = await store.get("icons/index.json", {
      type: "json",
      consistency: "strong"
    });
    const icons = saved || fallbackIcons;
    const includeAll = url.searchParams.get("all") === "1";
    if (includeAll && !isAuthorized(request)) {
      return json({ error: "Unauthorized or ICON_ADMIN_TOKEN is not configured" }, { status: 401 });
    }
    return json({
      source: saved ? "edgeone" : "fallback",
      icons: includeAll ? icons : icons.filter((icon) => icon.status !== "hidden")
    });
  }

  if (request.method === "POST") {
    if (!isAuthorized(request)) {
      return json({ error: "Unauthorized or ICON_ADMIN_TOKEN is not configured" }, { status: 401 });
    }
    const payload = await request.json();
    if (!Array.isArray(payload.icons)) {
      return json({ error: "Expected { icons: [...] }" }, { status: 400 });
    }
    const icons = payload.icons.map(normalizeIcon).filter((icon) => icon.id);
    await store.setJSON("icons/index.json", icons);
    return json({ ok: true, count: icons.length, icons });
  }

  return json({ error: "Method not allowed" }, { status: 405 });
}
