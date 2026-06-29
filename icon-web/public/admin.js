let icons = [];

const els = {
  token: document.querySelector("#adminToken"),
  saveToken: document.querySelector("#saveToken"),
  load: document.querySelector("#loadIcons"),
  list: document.querySelector("#iconList"),
  saveAll: document.querySelector("#saveAll"),
  status: document.querySelector("#statusText"),
  reset: document.querySelector("#resetForm"),
  saveIcon: document.querySelector("#saveIcon"),
  id: document.querySelector("#iconId"),
  title: document.querySelector("#title"),
  titleZh: document.querySelector("#titleZh"),
  category: document.querySelector("#category"),
  tags: document.querySelector("#tags"),
  tagsZh: document.querySelector("#tagsZh"),
  description: document.querySelector("#description"),
  descriptionZh: document.querySelector("#descriptionZh"),
  sort: document.querySelector("#sort"),
  iconStatus: document.querySelector("#status"),
  file: document.querySelector("#iconFile")
};

els.token.value = localStorage.getItem("ICON_ADMIN_TOKEN") || "";

function setStatus(message) {
  els.status.textContent = message;
}

function headers() {
  return {
    "content-type": "application/json",
    "x-admin-token": els.token.value
  };
}

function splitTags(value) {
  return String(value || "")
    .split(",")
    .map((item) => item.trim())
    .filter(Boolean);
}

function slug(value) {
  return String(value || "")
    .trim()
    .toLowerCase()
    .replace(/[^a-z0-9-]/g, "-")
    .replace(/-+/g, "-")
    .replace(/^-|-$/g, "");
}

async function loadIcons() {
  setStatus("正在读取 EdgeOne Blob 数据...");
  const response = await fetch("/api/icons?all=1", { headers: headers() });
  const payload = await response.json();
  if (!response.ok) throw new Error(payload.error || "读取失败");
  icons = payload.icons || [];
  renderList();
  setStatus(`已读取 ${icons.length} 个 icon`);
}

async function saveIcons() {
  setStatus("正在保存 icon 列表...");
  const response = await fetch("/api/icons", {
    method: "POST",
    headers: headers(),
    body: JSON.stringify({ icons })
  });
  const payload = await response.json();
  if (!response.ok) throw new Error(payload.error || "保存失败");
  icons = payload.icons || icons;
  renderList();
  setStatus(`已保存 ${payload.count} 个 icon`);
}

async function uploadFile(id, file) {
  const response = await fetch("/api/upload-url", {
    method: "POST",
    headers: headers(),
    body: JSON.stringify({ id, contentType: file.type || "image/png" })
  });
  const payload = await response.json();
  if (!response.ok) throw new Error(payload.error || "获取上传地址失败");

  const upload = await fetch(payload.url, {
    method: "PUT",
    body: file,
    headers: { "content-type": payload.contentType }
  });
  if (!upload.ok) throw new Error("图片上传失败");
  return payload.assetUrl;
}

function formToIcon(existing = {}) {
  const id = slug(els.id.value);
  return {
    ...existing,
    id,
    title: els.title.value.trim() || id,
    titleZh: els.titleZh.value.trim() || els.title.value.trim() || id,
    category: els.category.value.trim() || "tennis",
    tags: splitTags(els.tags.value),
    tagsZh: splitTags(els.tagsZh.value),
    description: els.description.value.trim(),
    descriptionZh: els.descriptionZh.value.trim(),
    sort: Number(els.sort.value || 9999),
    status: els.iconStatus.value
  };
}

function fillForm(icon) {
  els.id.value = icon.id || "";
  els.title.value = icon.title || "";
  els.titleZh.value = icon.titleZh || "";
  els.category.value = icon.category || "tennis";
  els.tags.value = (icon.tags || []).join(",");
  els.tagsZh.value = (icon.tagsZh || []).join(",");
  els.description.value = icon.description || "";
  els.descriptionZh.value = icon.descriptionZh || "";
  els.sort.value = icon.sort ?? 100;
  els.iconStatus.value = icon.status || "active";
  els.file.value = "";
}

function resetForm() {
  fillForm({ category: "tennis", status: "active", sort: (icons.length + 1) * 10 });
}

function renderList() {
  const sorted = [...icons].sort((a, b) => Number(a.sort || 0) - Number(b.sort || 0));
  els.list.innerHTML = sorted.map((icon) => `
    <article class="icon-card">
      ${icon.thumb || icon.image ? `<img src="${icon.thumb || icon.image}" alt="">` : `<div class="icon-thumb"></div>`}
      <strong>${icon.titleZh || icon.title || icon.id}</strong>
      <small>${icon.id} · ${icon.status || "active"}</small>
      <div class="card-actions">
        <button type="button" data-edit="${icon.id}" class="secondary">编辑</button>
        <button type="button" data-hide="${icon.id}" class="secondary">${icon.status === "hidden" ? "上架" : "隐藏"}</button>
      </div>
    </article>
  `).join("");

  els.list.querySelectorAll("[data-edit]").forEach((button) => {
    button.addEventListener("click", () => fillForm(icons.find((icon) => icon.id === button.dataset.edit) || {}));
  });

  els.list.querySelectorAll("[data-hide]").forEach((button) => {
    button.addEventListener("click", async () => {
      const icon = icons.find((item) => item.id === button.dataset.hide);
      if (!icon) return;
      icon.status = icon.status === "hidden" ? "active" : "hidden";
      await saveIcons().catch((error) => setStatus(error.message));
    });
  });
}

els.saveToken.addEventListener("click", () => {
  localStorage.setItem("ICON_ADMIN_TOKEN", els.token.value);
  setStatus("Token 已保存到当前浏览器");
});

els.load.addEventListener("click", () => {
  loadIcons().catch((error) => setStatus(error.message));
});

els.saveAll.addEventListener("click", () => {
  saveIcons().catch((error) => setStatus(error.message));
});

els.reset.addEventListener("click", resetForm);

els.saveIcon.addEventListener("click", async () => {
  try {
    const existing = icons.find((icon) => icon.id === slug(els.id.value)) || {};
    const icon = formToIcon(existing);
    if (!icon.id) throw new Error("请先填写 ID");

    const file = els.file.files?.[0];
    if (file) {
      setStatus("正在上传图片...");
      const assetUrl = await uploadFile(icon.id, file);
      icon.image = assetUrl;
      icon.thumb = assetUrl;
    } else {
      icon.image = icon.image || `/api/assets?key=icons/${icon.id}.png`;
      icon.thumb = icon.thumb || icon.image;
    }

    const index = icons.findIndex((item) => item.id === icon.id);
    if (index >= 0) icons[index] = icon;
    else icons.push(icon);

    await saveIcons();
    resetForm();
  } catch (error) {
    setStatus(error.message);
  }
});

resetForm();
loadIcons().catch((error) => setStatus(error.message));
