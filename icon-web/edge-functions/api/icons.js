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
  "access-control-allow-headers": "content-type"
};

function json(data, init = {}) {
  return new Response(JSON.stringify(data), {
    ...init,
    headers: { ...headers, ...(init.headers || {}) }
  });
}

export async function onRequest({ request }) {
  if (request.method === "OPTIONS") return new Response(null, { headers });

  const store = getStore("icon-data");

  if (request.method === "GET") {
    const saved = await store.get("icons/index.json", {
      type: "json",
      consistency: "strong"
    });
    return json({ source: saved ? "edgeone" : "fallback", icons: saved || fallbackIcons });
  }

  if (request.method === "POST") {
    const payload = await request.json();
    if (!Array.isArray(payload.icons)) {
      return json({ error: "Expected { icons: [...] }" }, { status: 400 });
    }
    await store.setJSON("icons/index.json", payload.icons);
    return json({ ok: true, count: payload.icons.length });
  }

  return json({ error: "Method not allowed" }, { status: 405 });
}
