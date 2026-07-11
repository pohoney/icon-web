let savedIcons = [];
let tableRows = [];
let fileMap = new Map();

const els = {
  token: document.querySelector("#adminToken"),
  saveToken: document.querySelector("#saveToken"),
  load: document.querySelector("#loadIcons"),
  table: document.querySelector("#iconTable"),
  uploadSelected: document.querySelector("#uploadSelected"),
  resetTable: document.querySelector("#resetTable"),
  folder: document.querySelector("#folderInput"),
  status: document.querySelector("#statusText")
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

function escapeHtml(value) {
  return String(value || "")
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;");
}

function slug(value) {
  return String(value || "")
    .trim()
    .toLowerCase()
    .replace(/[^a-z0-9-]/g, "-")
    .replace(/-+/g, "-")
    .replace(/^-|-$/g, "");
}

function fileNameFromPath(path) {
  return String(path || "").split(/[\\/]/).pop();
}

function normalizeExisting(icon) {
  return {
    ...icon,
    id: slug(icon.id),
    sort: Number.isFinite(Number(icon.sort)) ? Number(icon.sort) : 9999,
    status: icon.status === "hidden" ? "hidden" : "active"
  };
}

async function loadManifest() {
  const response = await fetch("./icon-upload-manifest.json", { cache: "no-store" });
  if (!response.ok) throw new Error("无法读取 icon-upload-manifest.json");
  const manifest = await response.json();
  return Array.isArray(manifest.rows) ? manifest.rows : [];
}

async function loadIcons() {
  setStatus("正在读取 EdgeOne Blob 数据...");
  const response = await fetch("/api/icons?all=1", { headers: headers() });
  const payload = await response.json();
  if (!response.ok) throw new Error(payload.error || "读取失败");
  savedIcons = (payload.icons || []).map(normalizeExisting);
  await buildTable();
  setStatus(`已读取 ${savedIcons.length} 个线上 icon，表格 ${tableRows.length} 行`);
}

async function buildTable() {
  const manifestRows = await loadManifest();
  const savedById = new Map(savedIcons.map((icon) => [icon.id, icon]));
  const extraRows = savedIcons
    .filter((icon) => !manifestRows.some((row) => slug(row.id) === icon.id))
    .sort((a, b) => a.sort - b.sort)
    .map((icon, index) => ({
      order: manifestRows.length + index + 1,
      id: icon.id,
      title: icon.title || icon.id,
      titleZh: icon.titleZh || icon.title || icon.id,
      prompt: icon.description || icon.descriptionZh || "",
      fileName: fileNameFromPath(icon.image || icon.thumb),
      category: icon.category || "tennis",
      tags: icon.tags || ["tennis", "gesture"],
      tagsZh: icon.tagsZh || ["网球", "动作"],
      sort: icon.sort,
      status: icon.status || "active"
    }));

  tableRows = [...manifestRows, ...extraRows].map((row, index) => {
    const id = slug(row.id);
    const saved = savedById.get(id) || {};
    const fileName = row.fileName || fileNameFromPath(row.iconPath) || `${id}.png`;
    return {
      order: index + 1,
      id,
      title: saved.title || row.title || id,
      titleZh: saved.titleZh || row.titleZh || row.title || id,
      prompt: saved.description || saved.descriptionZh || row.prompt || "",
      fileName,
      category: saved.category || row.category || "tennis",
      tags: saved.tags || row.tags || ["tennis", "gesture"],
      tagsZh: saved.tagsZh || row.tagsZh || ["网球", "动作"],
      sort: (index + 1) * 10,
      status: saved.status || row.status || "active",
      image: saved.image || "",
      thumb: saved.thumb || saved.image || "",
      file: fileMap.get(fileName.toLowerCase()) || fileMap.get(`${id}.png`)
    };
  });
  renderTable();
}

function rowToIcon(row) {
  return {
    id: row.id,
    title: row.title,
    titleZh: row.titleZh,
    tags: row.tags,
    tagsZh: row.tagsZh,
    description: row.prompt,
    descriptionZh: row.prompt,
    image: row.image,
    thumb: row.thumb || row.image,
    category: row.category,
    status: row.status,
    sort: row.sort
  };
}

async function saveIcons() {
  const icons = tableRows.map(rowToIcon);
  const response = await fetch("/api/icons", {
    method: "POST",
    headers: headers(),
    body: JSON.stringify({ icons })
  });
  const payload = await response.json();
  if (!response.ok) throw new Error(payload.error || "保存失败");
  savedIcons = (payload.icons || icons).map(normalizeExisting);
  setStatus(`已保存 ${payload.count} 个 icon，前台会按当前表格顺序展示`);
}

async function uploadFile(row) {
  if (!row.file) return row.image || "";
  const response = await fetch("/api/upload-url", {
    method: "POST",
    headers: headers(),
    body: JSON.stringify({ id: row.id, contentType: row.file.type || "image/png" })
  });
  const payload = await response.json();
  if (!response.ok) throw new Error(payload.error || "获取上传地址失败");

  const upload = await fetch(payload.url, {
    method: "PUT",
    body: row.file,
    headers: { "content-type": payload.contentType }
  });
  if (!upload.ok) throw new Error(`${row.id} 图片上传失败`);
  row.image = payload.assetUrl;
  row.thumb = payload.assetUrl;
  return payload.assetUrl;
}

function previewFor(row) {
  if (row.file) return URL.createObjectURL(row.file);
  return row.thumb || row.image || "";
}

function renderTable() {
  els.table.innerHTML = tableRows.map((row, index) => {
    const preview = previewFor(row);
    return `
      <tr data-index="${index}">
        <td class="order-cell">${row.order}</td>
        <td class="preview-cell">${preview ? `<img src="${preview}" alt="">` : `<span></span>`}</td>
        <td><input data-field="id" value="${escapeHtml(row.id)}"></td>
        <td><input data-field="titleZh" value="${escapeHtml(row.titleZh)}"></td>
        <td><input data-field="title" value="${escapeHtml(row.title)}"></td>
        <td><textarea data-field="prompt" rows="3">${escapeHtml(row.prompt)}</textarea></td>
        <td class="file-name">${escapeHtml(row.fileName)}</td>
        <td>
          <input class="row-file" type="file" accept="image/png,image/jpeg,image/webp,image/svg+xml">
          <button type="button" class="secondary row-upload" data-upload="${index}">上传行</button>
        </td>
        <td>
          <select data-field="status">
            <option value="active"${row.status !== "hidden" ? " selected" : ""}>上架</option>
            <option value="hidden"${row.status === "hidden" ? " selected" : ""}>隐藏</option>
          </select>
        </td>
      </tr>
    `;
  }).join("");

  els.table.querySelectorAll("[data-field]").forEach((field) => {
    field.addEventListener("input", () => {
      const tr = field.closest("tr");
      const row = tableRows[Number(tr.dataset.index)];
      const key = field.dataset.field;
      row[key] = key === "id" ? slug(field.value) : field.value;
    });
  });

  els.table.querySelectorAll(".row-file").forEach((input) => {
    input.addEventListener("change", () => {
      const tr = input.closest("tr");
      const row = tableRows[Number(tr.dataset.index)];
      row.file = input.files?.[0];
      if (row.file) row.fileName = row.file.name;
      renderTable();
    });
  });

  els.table.querySelectorAll("[data-upload]").forEach((button) => {
    button.addEventListener("click", async () => {
      try {
        const row = tableRows[Number(button.dataset.upload)];
        setStatus(`正在上传 ${row.id}...`);
        await uploadFile(row);
        await saveIcons();
        renderTable();
      } catch (error) {
        setStatus(error.message);
      }
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

els.resetTable.addEventListener("click", () => {
  buildTable().catch((error) => setStatus(error.message));
});

els.folder.addEventListener("change", async () => {
  fileMap = new Map();
  [...els.folder.files].forEach((file) => fileMap.set(file.name.toLowerCase(), file));
  await buildTable();
  const matched = tableRows.filter((row) => row.file).length;
  setStatus(`已匹配 ${matched}/${tableRows.length} 个文件`);
});

els.uploadSelected.addEventListener("click", async () => {
  try {
    const rowsWithFiles = tableRows.filter((row) => row.file);
    if (!rowsWithFiles.length) throw new Error("请先选择 icon 文件夹，或在表格行内选择图片");
    for (const row of rowsWithFiles) {
      setStatus(`正在上传 ${row.order}/${tableRows.length}: ${row.id}`);
      await uploadFile(row);
    }
    await saveIcons();
    renderTable();
    setStatus(`已上传 ${rowsWithFiles.length} 个图片，并保存 ${tableRows.length} 行表格数据`);
  } catch (error) {
    setStatus(error.message);
  }
});

buildTable()
  .then(() => loadIcons())
  .catch((error) => setStatus(error.message));
