const fallbackIconData = [
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
  },
  {
    id: "serve",
    title: "Serve",
    titleZh: "发球",
    tags: ["tennis", "motion"],
    tagsZh: ["网球", "动作"],
    description: "A motion icon slot for serve-related visuals.",
    descriptionZh: "发球动作相关的图标预留位。",
    image: "/icons/serve.png",
    thumb: "/icons/serve.png",
    category: "tennis"
  },
  {
    id: "baseline",
    title: "Baseline",
    titleZh: "底线",
    tags: ["tennis", "court"],
    tagsZh: ["网球", "球场"],
    description: "A court-line placeholder for baseline and layout assets.",
    descriptionZh: "底线与球场结构类素材的占位图标。",
    image: "/icons/baseline.png",
    thumb: "/icons/baseline.png",
    category: "tennis"
  },
  {
    id: "net",
    title: "Net",
    titleZh: "球网",
    tags: ["tennis", "court"],
    tagsZh: ["网球", "球场"],
    description: "Reserved for a tennis net icon.",
    descriptionZh: "网球球网图标的预留位置。",
    image: "/icons/net.png",
    thumb: "/icons/net.png",
    category: "tennis"
  },
  {
    id: "court",
    title: "Court",
    titleZh: "网球场",
    tags: ["tennis", "place"],
    tagsZh: ["网球", "场地"],
    description: "A slot for court or venue illustrations.",
    descriptionZh: "球场或场地类图标插画的站位。",
    image: "/icons/court.png",
    thumb: "/icons/court.png",
    category: "tennis"
  },
  {
    id: "trophy",
    title: "Trophy",
    titleZh: "奖杯",
    tags: ["tennis", "award"],
    tagsZh: ["网球", "奖项"],
    description: "Competition and achievement icon placeholder.",
    descriptionZh: "赛事奖项与成就类图标站位。",
    image: "/icons/trophy.png",
    thumb: "/icons/trophy.png",
    category: "tennis"
  },
  {
    id: "sneaker",
    title: "Court Shoe",
    titleZh: "网球鞋",
    tags: ["tennis", "gear"],
    tagsZh: ["网球", "装备"],
    description: "Footwear and gear placeholder slot.",
    descriptionZh: "鞋履装备类图标站位。",
    image: "/icons/sneaker.png",
    thumb: "/icons/sneaker.png",
    category: "tennis"
  },
  {
    id: "wristband",
    title: "Wristband",
    titleZh: "护腕",
    tags: ["tennis", "gear"],
    tagsZh: ["网球", "装备"],
    description: "Small accessory icon placeholder.",
    descriptionZh: "小型配件类图标预留位。",
    image: "/icons/wristband.png",
    thumb: "/icons/wristband.png",
    category: "tennis"
  },
  {
    id: "scoreboard",
    title: "Scoreboard",
    titleZh: "记分牌",
    tags: ["tennis", "score"],
    tagsZh: ["网球", "比分"],
    description: "Score and match data icon placeholder.",
    descriptionZh: "比分与赛事数据类图标站位。",
    image: "/icons/scoreboard.png",
    thumb: "/icons/scoreboard.png",
    category: "tennis"
  },
  {
    id: "ball-can",
    title: "Ball Can",
    titleZh: "网球筒",
    tags: ["tennis", "equipment"],
    tagsZh: ["网球", "器材"],
    description: "Packaging and object icon placeholder.",
    descriptionZh: "包装与物件类图标站位。",
    image: "/icons/ball-can.png",
    thumb: "/icons/ball-can.png",
    category: "tennis"
  },
  {
    id: "umpire-chair",
    title: "Umpire Chair",
    titleZh: "裁判椅",
    tags: ["tennis", "match"],
    tagsZh: ["网球", "比赛"],
    description: "Match environment icon placeholder.",
    descriptionZh: "比赛环境类图标预留位。",
    image: "/icons/umpire-chair.png",
    thumb: "/icons/umpire-chair.png",
    category: "tennis"
  },
  {
    id: "forehand",
    title: "Forehand",
    titleZh: "正手",
    tags: ["tennis", "stroke"],
    tagsZh: ["网球", "击球"],
    description: "Stroke action placeholder for a forehand icon.",
    descriptionZh: "正手击球动作图标站位。",
    image: "/icons/forehand.png",
    thumb: "/icons/forehand.png",
    category: "tennis"
  },
  {
    id: "backhand",
    title: "Backhand",
    titleZh: "反手",
    tags: ["tennis", "stroke"],
    tagsZh: ["网球", "击球"],
    description: "Stroke action placeholder for a backhand icon.",
    descriptionZh: "反手击球动作图标站位。",
    image: "/icons/backhand.png",
    thumb: "/icons/backhand.png",
    category: "tennis"
  },
  {
    id: "volley",
    title: "Volley",
    titleZh: "截击",
    tags: ["tennis", "stroke"],
    tagsZh: ["网球", "击球"],
    description: "A net-play placeholder for volley icon assets.",
    descriptionZh: "网前截击类图标素材站位。",
    image: "/icons/volley.png",
    thumb: "/icons/volley.png",
    category: "tennis"
  },
  {
    id: "string-bed",
    title: "String Bed",
    titleZh: "拍线",
    tags: ["tennis", "detail"],
    tagsZh: ["网球", "细节"],
    description: "Detail icon placeholder for racket strings.",
    descriptionZh: "球拍拍线细节图标站位。",
    image: "/icons/string-bed.png",
    thumb: "/icons/string-bed.png",
    category: "tennis"
  },
  {
    id: "practice-cone",
    title: "Practice Cone",
    titleZh: "训练标志桶",
    tags: ["tennis", "training"],
    tagsZh: ["网球", "训练"],
    description: "Training equipment icon placeholder.",
    descriptionZh: "训练器材类图标站位。",
    image: "/icons/practice-cone.png",
    thumb: "/icons/practice-cone.png",
    category: "tennis"
  },
  {
    id: "ball-machine",
    title: "Ball Machine",
    titleZh: "发球机",
    tags: ["tennis", "training"],
    tagsZh: ["网球", "训练"],
    description: "Training machine icon placeholder.",
    descriptionZh: "训练机器类图标站位。",
    image: "/icons/ball-machine.png",
    thumb: "/icons/ball-machine.png",
    category: "tennis"
  },
  {
    id: "cap",
    title: "Cap",
    titleZh: "运动帽",
    tags: ["tennis", "gear"],
    tagsZh: ["网球", "装备"],
    description: "Apparel and gear icon placeholder.",
    descriptionZh: "服装装备类图标站位。",
    image: "/icons/cap.png",
    thumb: "/icons/cap.png",
    category: "tennis"
  },
  {
    id: "water-bottle",
    title: "Water Bottle",
    titleZh: "水壶",
    tags: ["tennis", "gear"],
    tagsZh: ["网球", "装备"],
    description: "A hydration object placeholder slot.",
    descriptionZh: "补水物件类图标站位。",
    image: "/icons/water-bottle.png",
    thumb: "/icons/water-bottle.png",
    category: "tennis"
  },
  {
    id: "match-clock",
    title: "Match Clock",
    titleZh: "比赛计时",
    tags: ["tennis", "match"],
    tagsZh: ["网球", "比赛"],
    description: "Match timing icon placeholder.",
    descriptionZh: "比赛计时相关图标站位。",
    image: "/icons/match-clock.png",
    thumb: "/icons/match-clock.png",
    category: "tennis"
  },
  {
    id: "line-judge",
    title: "Line Judge",
    titleZh: "司线员",
    tags: ["tennis", "match"],
    tagsZh: ["网球", "比赛"],
    description: "Official and tournament operations placeholder.",
    descriptionZh: "裁判与赛事执行类图标站位。",
    image: "/icons/line-judge.png",
    thumb: "/icons/line-judge.png",
    category: "tennis"
  },
  {
    id: "grass-court",
    title: "Grass Court",
    titleZh: "草地球场",
    tags: ["tennis", "court"],
    tagsZh: ["网球", "球场"],
    description: "Surface and venue placeholder.",
    descriptionZh: "场地材质类图标站位。",
    image: "/icons/grass-court.png",
    thumb: "/icons/grass-court.png",
    category: "tennis"
  },
  {
    id: "clay-court",
    title: "Clay Court",
    titleZh: "红土球场",
    tags: ["tennis", "court"],
    tagsZh: ["网球", "球场"],
    description: "Clay surface icon placeholder.",
    descriptionZh: "红土场地类图标站位。",
    image: "/icons/clay-court.png",
    thumb: "/icons/clay-court.png",
    category: "tennis"
  }
];

const EFFECT_SETTINGS_VERSION = 3;
const EFFECT_SIZE_MAX = 375;
const DEFAULT_EFFECT_SETTINGS = { gap: 74, size: 150, perspective: 0, stretch: 150 };

const i18n = {
  zh: {
    all: "全部",
    tennis: "网球",
    search: "搜索图标...",
    switch: "EN",
    hint: "向下滚动，网格会从垂落状态逐渐拉平",
    icons: "个图标",
    results: "个结果",
    empty: "没有找到图标",
    clear: "清除筛选",
    copy: "复制图片",
    copying: "正在复制",
    copied: "已复制图片",
    copyFail: "复制失败，已为你准备下载",
    download: "下载 PNG",
    downloaded: "已下载图标"
  },
  en: {
    all: "All",
    tennis: "Tennis",
    search: "Search icons...",
    switch: "简",
    hint: "Scroll down to flatten the hanging icon net",
    icons: "icons",
    results: "results",
    empty: "No icons found",
    clear: "Clear filters",
    copy: "Copy image",
    copying: "Copying",
    copied: "Image copied",
    copyFail: "Copy failed, download is ready",
    download: "Download PNG",
    downloaded: "Icon downloaded"
  }
};

const state = {
  lang: "zh",
  category: "all",
  query: "",
  selected: null,
  loading: true,
  source: "local",
  effect: loadEffectSettings(),
  sphere: {
    x: 0,
    y: 0,
    vx: 0,
    vy: 0,
    dragging: false,
    moved: 0,
    downIconId: null,
    suppressClick: false,
    lastX: 0,
    lastY: 0,
    lastTime: 0,
    raf: null
  },
  imageStatus: new Map()
};

let iconData = [...fallbackIconData];

const els = {
  search: document.querySelector("#searchInput"),
  lang: document.querySelector("#languageButton"),
  categories: [...document.querySelectorAll(".category-button")],
  netStage: document.querySelector("#netStage"),
  iconNet: document.querySelector("#iconNet"),
  resultCount: document.querySelector("#resultCount"),
  viewHint: document.querySelector("#viewHint"),
  empty: document.querySelector("#emptyState"),
  emptyTitle: document.querySelector("#emptyState h1"),
  clear: document.querySelector("#clearFilters"),
  dialog: document.querySelector("#detailDialog"),
  close: document.querySelector("#closeDetail"),
  detailPreview: document.querySelector("#detailPreview"),
  detailTitle: document.querySelector("#detailTitle"),
  detailDescription: document.querySelector("#detailDescription"),
  copy: document.querySelector("#copyImage"),
  download: document.querySelector("#downloadImage"),
  toast: document.querySelector("#toast"),
  home: document.querySelector("#homeButton"),
  effectPanel: document.querySelector(".effect-panel"),
  effectSliders: [...document.querySelectorAll(".effect-slider")],
  effectValues: [...document.querySelectorAll("[data-effect-value]")],
  toggleEffect: document.querySelector("#toggleEffect"),
  resetEffect: document.querySelector("#resetEffect")
};

function loadEffectSettings() {
  const defaults = DEFAULT_EFFECT_SETTINGS;
  try {
    const raw = JSON.parse(localStorage.getItem("ICON_EFFECT_SETTINGS") || "{}");
    if (raw.__version !== EFFECT_SETTINGS_VERSION) return { ...defaults };
    const saved = {
      ...defaults,
      ...raw,
      gap: raw.gap ?? (Number.isFinite(Number(raw.spread)) ? Math.round(Number(raw.spread) * 0.5) : defaults.gap),
      size: raw.size ?? raw.scale ?? defaults.size,
      perspective: raw.perspective ?? raw.depth ?? defaults.perspective,
      stretch: raw.stretch ?? defaults.stretch
    };
    return {
      gap: clampNumber(saved.gap, 0, 120, defaults.gap),
      size: clampNumber(saved.size, 70, EFFECT_SIZE_MAX, defaults.size),
      perspective: clampNumber(saved.perspective, 0, 180, defaults.perspective),
      stretch: clampNumber(saved.stretch, 60, 150, defaults.stretch)
    };
  } catch {
    return defaults;
  }
}

function clampNumber(value, min, max, fallback) {
  const number = Number(value);
  if (!Number.isFinite(number)) return fallback;
  return Math.min(max, Math.max(min, number));
}

function saveEffectSettings() {
  localStorage.setItem("ICON_EFFECT_SETTINGS", JSON.stringify({ __version: EFFECT_SETTINGS_VERSION, ...state.effect }));
}

function updateEffectValueLabels() {
  els.effectValues.forEach((value) => {
    const key = value.dataset.effectValue;
    if (!key) return;
    value.textContent = String(state.effect[key] ?? "");
  });
}

function setupEffectControls() {
  const syncToggleState = () => {
    if (!els.toggleEffect || !els.effectPanel) return;
    const collapsed = els.effectPanel.classList.contains("collapsed");
    els.toggleEffect.textContent = collapsed ? "‹" : "›";
    els.toggleEffect.setAttribute("aria-label", collapsed ? "向左展开" : "向右收起");
    els.toggleEffect.setAttribute("title", collapsed ? "向左展开" : "向右收起");
    els.toggleEffect.setAttribute("aria-expanded", String(!collapsed));
  };

  els.effectSliders.forEach((slider) => {
    const key = slider.dataset.effect;
    if (!key) return;
    slider.value = state.effect[key] ?? slider.value;
    slider.addEventListener("input", () => {
      state.effect[key] = Number(slider.value);
      updateEffectValueLabels();
      saveEffectSettings();
      renderNet();
    });
  });
  updateEffectValueLabels();

  els.resetEffect?.addEventListener("click", () => {
    state.effect = { ...DEFAULT_EFFECT_SETTINGS };
    saveEffectSettings();
    els.effectSliders.forEach((slider) => {
      const key = slider.dataset.effect;
      if (key) slider.value = state.effect[key];
    });
    updateEffectValueLabels();
    renderNet();
  });

  els.toggleEffect?.addEventListener("click", () => {
    els.effectPanel.classList.toggle("collapsed");
    syncToggleState();
  });

  syncToggleState();
}

function label(icon, key) {
  if (state.lang === "zh") return icon[`${key}Zh`] || icon[key];
  return icon[key] || icon[`${key}Zh`];
}

function getTags(icon) {
  return state.lang === "zh" ? icon.tagsZh : icon.tags;
}

function normalize(value) {
  return String(value || "").trim().toLowerCase();
}

function matchesQuery(icon) {
  const query = normalize(state.query);
  if (!query) return true;
  const haystack = [
    icon.id,
    icon.title,
    icon.titleZh,
    icon.description,
    icon.descriptionZh,
    icon.category,
    ...(icon.tags || []),
    ...(icon.tagsZh || [])
  ].map(normalize).join(" ");
  return haystack.includes(query);
}

function getFilteredIcons() {
  return iconData.filter((icon) => {
    const categoryMatch = state.category === "all" || icon.category === state.category;
    return categoryMatch && matchesQuery(icon);
  }).sort((a, b) => {
    const sortA = Number.isFinite(Number(a.sort)) ? Number(a.sort) : 9999;
    const sortB = Number.isFinite(Number(b.sort)) ? Number(b.sort) : 9999;
    return sortA - sortB;
  });
}

function getSupabaseConfig() {
  const config = window.TENNIS_ICON_CONFIG || {};
  const supabaseUrl = String(config.supabaseUrl || "").replace(/\/+$/, "");
  const anonKey = String(config.anonKey || "");
  return { supabaseUrl, anonKey, enabled: Boolean(supabaseUrl && anonKey) };
}

function getApiUrl(path) {
  const config = window.TENNIS_ICON_CONFIG || {};
  const apiBaseUrl = String(config.apiBaseUrl || "").replace(/\/+$/, "");
  return `${apiBaseUrl}${path}`;
}

function resolveBackendAssetUrl(value) {
  const url = String(value || "");
  if (!url || /^(https?:|data:|blob:)/i.test(url)) return url;
  return getApiUrl(url.startsWith("/") ? url : `/${url}`);
}

function mapApiIcon(icon) {
  return {
    ...icon,
    image: resolveBackendAssetUrl(icon.image || icon.thumb),
    thumb: resolveBackendAssetUrl(icon.thumb || icon.image)
  };
}

function mapDbIcon(row) {
  return {
    id: row.id,
    title: row.title || row.id,
    titleZh: row.title_zh || row.title || row.id,
    tags: row.tags || [],
    tagsZh: row.tags_zh || row.tags || [],
    description: row.description || "",
    descriptionZh: row.description_zh || row.description || "",
    image: row.image_url || `/icons/${row.id}.png`,
    thumb: row.thumb_url || row.image_url || `/icons/${row.id}.png`,
    category: row.category || "tennis"
  };
}

async function loadIconsFromDatabase() {
  try {
    const response = await fetch(getApiUrl("/api/icons"), { headers: { accept: "application/json" } });
    if (response.ok) {
      const payload = await response.json();
      if (Array.isArray(payload.icons)) {
        iconData = payload.icons.length ? payload.icons.map(mapApiIcon) : [...fallbackIconData];
        state.source = payload.source || "edgeone";
        state.loading = false;
        return;
      }
    }
  } catch {
    // Static local preview does not have EdgeOne Functions; fall back below.
  }

  const { supabaseUrl, anonKey, enabled } = getSupabaseConfig();
  if (!enabled) {
    state.loading = false;
    iconData = [...fallbackIconData];
    return;
  }

  const endpoint = `${supabaseUrl}/rest/v1/icons?select=*&status=eq.active&order=sort.asc`;
  try {
    const response = await fetch(endpoint, {
      headers: {
        apikey: anonKey,
        Authorization: `Bearer ${anonKey}`
      }
    });
    if (!response.ok) throw new Error(`Database returned ${response.status}`);
    const rows = await response.json();
    iconData = rows.length ? rows.map(mapDbIcon) : [...fallbackIconData];
    state.source = rows.length ? "database" : "local";
  } catch (error) {
    console.warn("Icon database unavailable, using local placeholders.", error);
    iconData = [...fallbackIconData];
    state.source = "local";
  } finally {
    state.loading = false;
  }
}

function updateChrome() {
  const t = i18n[state.lang];
  document.documentElement.lang = state.lang === "zh" ? "zh-CN" : "en";
  els.search.placeholder = t.search;
  els.lang.textContent = t.switch;
  els.viewHint.textContent = t.hint;
  els.clear.textContent = t.clear;
  els.copy.textContent = t.copy;
  els.download.textContent = t.download;

  els.categories.forEach((button) => {
    const category = button.dataset.category;
    button.textContent = category === "all" ? t.all : t.tennis;
    button.classList.toggle("active", state.category === category);
  });
}

function imageSlot(icon, size = "tile") {
  const status = state.imageStatus.get(icon.id);
  const title = label(icon, "title");
  const modifier = size === "detail" ? "placeholder-orb large" : "placeholder-orb";

  if (status === "loaded") {
    return `<img src="${icon.thumb || icon.image}" alt="${title}" draggable="false" />`;
  }

  const letters = title
    .split(/\s+/)
    .map((part) => part[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();
  return `<span class="${modifier}" aria-hidden="true"><span>${letters}</span></span>`;
}

function preloadIcon(icon) {
  if (state.imageStatus.has(icon.id)) return;
  if (!icon.thumb && !icon.image) {
    state.imageStatus.set(icon.id, "missing");
    return;
  }
  const image = new Image();
  image.onload = () => {
    state.imageStatus.set(icon.id, "loaded");
    updateIconArt(icon);
  };
  image.onerror = () => {
    state.imageStatus.set(icon.id, "missing");
  };
  image.src = icon.thumb || icon.image;
}

function updateIconArt(icon) {
  const tile = document.querySelector(`.icon-tile[data-id="${CSS.escape(icon.id)}"] .tile-art`);
  if (tile) tile.innerHTML = imageSlot(icon);
  if (state.selected?.id === icon.id && els.dialog.open) {
    els.detailPreview.innerHTML = imageSlot(icon, "detail");
  }
}

function renderNet() {
  const icons = getFilteredIcons();
  els.resultCount.textContent = `${icons.length.toLocaleString()} ${state.query || state.category !== "all" ? i18n[state.lang].results : i18n[state.lang].icons}`;
  els.empty.hidden = icons.length > 0;
  els.netStage.hidden = icons.length === 0;
  els.emptyTitle.textContent = i18n[state.lang].empty;

  icons.forEach(preloadIcon);

  const cells = buildSphereCells(icons);
  const displayCount = cells.length;
  els.resultCount.textContent = `${displayCount.toLocaleString()} ${state.query || state.category !== "all" ? i18n[state.lang].results : i18n[state.lang].icons}`;

  els.iconNet.innerHTML = cells.map(({ icon, gx, gy }, index) => {
    const title = label(icon, "title");

    return `
      <button
        class="icon-tile"
        type="button"
        data-id="${icon.id}"
        data-gx="${gx}"
        data-gy="${gy}"
        style="--i:${index}"
        aria-label="${title}"
      >
        <span class="tile-art">${imageSlot(icon)}</span>
      </button>
    `;
  }).join("");

  document.querySelectorAll(".icon-tile").forEach((tile) => {
    tile.addEventListener("click", () => {
      if (state.sphere.suppressClick) return;
      openDetail(tile.dataset.id);
    });
  });
  updateSphereLayout();
}

function buildSphereCells(icons) {
  if (!icons.length) return [];
  const count = icons.length;
  const cols = Math.max(1, Math.ceil(Math.sqrt(count * 1.25)));
  const rows = Math.max(1, Math.ceil(count / cols));
  return icons.map((icon, index) => {
    const x = index % cols;
    const y = Math.floor(index / cols);
    const rowCount = y === rows - 1 && count % cols ? count % cols : cols;
    const rowOffset = (cols - rowCount) / 2;
    return {
      icon,
      gx: x + rowOffset - (cols - 1) / 2,
      gy: y - (rows - 1) / 2
    };
  });
}

function updateSphereLayout() {
  const rect = els.netStage.getBoundingClientRect();
  if (!rect.width || !rect.height) return;

  const gapRatio = clampNumber(state.effect.gap, 0, 120, 50) / 100;
  const sizeEffect = clampNumber(state.effect.size, 70, EFFECT_SIZE_MAX, 100) / 100;
  const perspectiveEffect = clampNumber(state.effect.perspective, 0, 180, 100) / 100;
  const stretchEffect = clampNumber(state.effect.stretch, 60, 150, 100) / 100;
  const minSide = Math.min(rect.width, rect.height);
  const tileSize = Math.min(650, Math.max(116, minSide * 0.22 * sizeEffect));
  const safetyGap = 0.04 + perspectiveEffect * 0.04;
  const cellSize = tileSize * (1 + gapRatio + safetyGap);
  const radiusX = Math.max(tileSize * 2.8, rect.width * 0.48);
  const radiusY = Math.max(tileSize * 2.05, rect.height * 0.38 * stretchEffect);
  const lens = 0.78 + perspectiveEffect * 0.48;
  const cx = rect.width / 2;
  const cy = rect.height / 2;

  els.iconNet.style.setProperty("--sphere-cell", `${tileSize}px`);

  document.querySelectorAll(".icon-tile").forEach((tile) => {
    const gx = Number(tile.dataset.gx || 0);
    const gy = Number(tile.dataset.gy || 0);
    const rawX = gx * cellSize + state.sphere.x;
    const rawY = gy * cellSize + state.sphere.y;
    const normalizedX = rawX / radiusX;
    const normalizedY = rawY / radiusY;
    const distance = Math.hypot(normalizedX, normalizedY);

    if (distance > 2.25) {
      tile.style.visibility = "hidden";
      return;
    }

    tile.style.visibility = "visible";

    let projectedX = rawX;
    let projectedY = rawY;
    if (distance > 0.001) {
      const projection = Math.tanh(distance * lens) / distance;
      projectedX = rawX * projection;
      projectedY = rawY * projection;
    }

    const curve = Math.cosh(distance);
    const centerWeight = Math.max(0, 1 - distance / 0.92);
    const scale = Math.min(1.04, Math.max(0.22, (1.04 / (curve * curve)) * (1 + centerWeight * 0.08 * perspectiveEffect)));
    const opacity = Math.max(0.24, 1 / (curve * curve * 0.58 + 0.42));
    const z = Math.round((1 - distance) * 1000);
    const rotateX = (-projectedY / radiusY) * 12 * perspectiveEffect;
    const rotateY = (projectedX / radiusX) * 12 * perspectiveEffect;

    tile.style.opacity = opacity.toFixed(3);
    tile.style.zIndex = String(Math.max(1, z));
    tile.style.transform = `translate3d(${(cx + projectedX - tileSize / 2).toFixed(2)}px, ${(cy + projectedY - tileSize / 2).toFixed(2)}px, 0) rotateX(${rotateX.toFixed(2)}deg) rotateY(${rotateY.toFixed(2)}deg) scale(${scale.toFixed(3)})`;
  });
}

function startInertia() {
  if (state.sphere.raf) cancelAnimationFrame(state.sphere.raf);
  const step = () => {
    if (Math.hypot(state.sphere.vx, state.sphere.vy) < 0.06) {
      state.sphere.vx = 0;
      state.sphere.vy = 0;
      state.sphere.raf = null;
      return;
    }
    state.sphere.x += state.sphere.vx;
    state.sphere.y += state.sphere.vy;
    state.sphere.vx *= 0.94;
    state.sphere.vy *= 0.94;
    updateSphereLayout();
    state.sphere.raf = requestAnimationFrame(step);
  };
  state.sphere.raf = requestAnimationFrame(step);
}

function setupSphereInteraction() {
  els.netStage.addEventListener("pointerdown", (event) => {
    state.sphere.dragging = true;
    state.sphere.moved = 0;
    state.sphere.downIconId = event.target.closest(".icon-tile")?.dataset.id || null;
    state.sphere.lastX = event.clientX;
    state.sphere.lastY = event.clientY;
    state.sphere.lastTime = performance.now();
    state.sphere.vx = 0;
    state.sphere.vy = 0;
    if (state.sphere.raf) cancelAnimationFrame(state.sphere.raf);
    els.netStage.setPointerCapture?.(event.pointerId);
  });

  els.netStage.addEventListener("pointermove", (event) => {
    if (!state.sphere.dragging) return;
    const now = performance.now();
    const dx = event.clientX - state.sphere.lastX;
    const dy = event.clientY - state.sphere.lastY;
    const dt = Math.max(8, now - state.sphere.lastTime);
    state.sphere.x += dx;
    state.sphere.y += dy;
    state.sphere.vx = 0.72 * (dx / dt) * 16 + 0.28 * state.sphere.vx;
    state.sphere.vy = 0.72 * (dy / dt) * 16 + 0.28 * state.sphere.vy;
    state.sphere.moved += Math.abs(dx) + Math.abs(dy);
    state.sphere.lastX = event.clientX;
    state.sphere.lastY = event.clientY;
    state.sphere.lastTime = now;
    updateSphereLayout();
  });

  const endDrag = (event) => {
    if (!state.sphere.dragging) return;
    state.sphere.dragging = false;
    const clickedIconId = state.sphere.downIconId;
    state.sphere.downIconId = null;

    if (event.type === "pointerup" && state.sphere.moved <= 8 && clickedIconId) {
      state.sphere.suppressClick = true;
      openDetail(clickedIconId);
      window.setTimeout(() => {
        state.sphere.suppressClick = false;
      }, 0);
    } else if (state.sphere.moved > 8) {
      state.sphere.suppressClick = true;
      window.setTimeout(() => {
        state.sphere.suppressClick = false;
      }, 0);
    }
    els.netStage.releasePointerCapture?.(event.pointerId);
    startInertia();
  };

  els.netStage.addEventListener("pointerup", endDrag);
  els.netStage.addEventListener("pointerleave", endDrag);

  els.netStage.addEventListener("wheel", (event) => {
    event.preventDefault();
    state.sphere.x -= event.deltaX;
    state.sphere.y -= event.deltaY;
    state.sphere.vx = 0;
    state.sphere.vy = 0;
    updateSphereLayout();
  }, { passive: false });
}

function render() {
  updateChrome();
  renderNet();
}

function toTitleCase(value) {
  return String(value || "").replace(/\S+/g, (word) => {
    const first = word.match(/[A-Za-z]/)?.index;
    if (first === undefined) return word;
    return `${word.slice(0, first)}${word.charAt(first).toUpperCase()}${word.slice(first + 1).toLowerCase()}`;
  });
}

function openDetail(id) {
  const icon = iconData.find((item) => item.id === id);
  if (!icon) return;
  state.selected = icon;

  const title = icon.title || icon.titleZh || icon.id;
  const prompt = icon.description || icon.descriptionZh || `Generate a clean tennis icon for ${title}, centered in a simple yellow circular style.`;
  els.detailPreview.innerHTML = imageSlot(icon, "detail");
  els.detailTitle.textContent = toTitleCase(title);
  els.detailDescription.textContent = prompt;
  els.copy.textContent = i18n[state.lang].copy;
  els.download.textContent = i18n[state.lang].download;

  if (!els.dialog.open) els.dialog.showModal();
}

function closeDetail() {
  state.selected = null;
  els.dialog.close();
}

function drawPlaceholder(icon, size = 1024) {
  const canvas = document.createElement("canvas");
  canvas.width = size;
  canvas.height = size;
  const ctx = canvas.getContext("2d");
  const title = label(icon, "title");
  const tags = getTags(icon);

  ctx.fillStyle = "#f7f8f2";
  ctx.fillRect(0, 0, size, size);
  const grad = ctx.createRadialGradient(size * 0.34, size * 0.25, 10, size * 0.5, size * 0.5, size * 0.68);
  grad.addColorStop(0, "#ffffff");
  grad.addColorStop(0.45, "#dfff52");
  grad.addColorStop(1, "#5c6f1f");
  ctx.fillStyle = grad;
  ctx.beginPath();
  ctx.arc(size * 0.5, size * 0.44, size * 0.28, 0, Math.PI * 2);
  ctx.fill();

  ctx.strokeStyle = "rgba(20, 24, 18, 0.44)";
  ctx.lineWidth = size * 0.018;
  ctx.beginPath();
  ctx.arc(size * 0.4, size * 0.42, size * 0.22, -1.15, 1.15);
  ctx.stroke();
  ctx.beginPath();
  ctx.arc(size * 0.6, size * 0.42, size * 0.22, Math.PI - 1.15, Math.PI + 1.15);
  ctx.stroke();

  ctx.fillStyle = "#161811";
  ctx.textAlign = "center";
  ctx.font = `700 ${size * 0.072}px ui-sans-serif, system-ui`;
  ctx.fillText(title, size / 2, size * 0.78);
  ctx.fillStyle = "#707466";
  ctx.font = `500 ${size * 0.03}px ui-sans-serif, system-ui`;
  ctx.fillText(tags.join(" / "), size / 2, size * 0.84);
  return canvas;
}

function canvasToPngBlob(canvas) {
  return new Promise((resolve, reject) => {
    canvas.toBlob((blob) => {
      if (blob) resolve(blob);
      else reject(new Error("Failed to render PNG blob."));
    }, "image/png", 1);
  });
}

async function blobToPngBlob(blob) {
  if (blob.type === "image/png") return blob;

  const sourceUrl = URL.createObjectURL(blob);
  try {
    const image = new Image();
    image.decoding = "async";
    image.src = sourceUrl;
    await image.decode();

    const canvas = document.createElement("canvas");
    canvas.width = image.naturalWidth || image.width;
    canvas.height = image.naturalHeight || image.height;
    const ctx = canvas.getContext("2d");
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.drawImage(image, 0, 0);
    return await canvasToPngBlob(canvas);
  } finally {
    URL.revokeObjectURL(sourceUrl);
  }
}

async function getImageBlob(icon) {
  const src = icon.image || icon.thumb;
  if (src) {
    try {
      const response = await fetch(src, { cache: "no-store" });
      if (response.ok) {
        const blob = await response.blob();
        return await blobToPngBlob(blob).catch(() => blob);
      }
    } catch {
      // Placeholder fallback below keeps copy/download usable without assets.
    }
  }
  return canvasToPngBlob(drawPlaceholder(icon));
}

async function copySelected() {
  if (!state.selected) return;
  els.copy.textContent = i18n[state.lang].copying;
  const blob = await getImageBlob(state.selected);
  try {
    await navigator.clipboard.write([new ClipboardItem({ [blob.type]: blob })]);
    showToast(i18n[state.lang].copied);
  } catch {
    showToast(i18n[state.lang].copyFail);
    downloadSelected();
  } finally {
    els.copy.textContent = i18n[state.lang].copy;
  }
}

async function downloadSelected() {
  if (!state.selected) return;
  const blob = await getImageBlob(state.selected);
  const url = URL.createObjectURL(blob);
  const anchor = document.createElement("a");
  anchor.href = url;
  anchor.download = `${state.selected.id}.png`;
  anchor.click();
  URL.revokeObjectURL(url);
  showToast(i18n[state.lang].downloaded);
}

let toastTimer = null;
function showToast(message) {
  window.clearTimeout(toastTimer);
  els.toast.textContent = message;
  els.toast.classList.add("visible");
  toastTimer = window.setTimeout(() => els.toast.classList.remove("visible"), 1800);
}

els.search.addEventListener("input", (event) => {
  state.query = event.target.value;
  render();
});

els.categories.forEach((button) => {
  button.addEventListener("click", () => {
    state.category = button.dataset.category;
    render();
  });
});

els.lang.addEventListener("click", () => {
  state.lang = state.lang === "zh" ? "en" : "zh";
  render();
  if (state.selected) openDetail(state.selected.id);
});

els.clear.addEventListener("click", () => {
  state.query = "";
  state.category = "all";
  els.search.value = "";
  render();
});

els.close.addEventListener("click", closeDetail);
els.dialog.addEventListener("click", (event) => {
  if (event.target === els.dialog) closeDetail();
});
els.copy.addEventListener("click", copySelected);
els.download.addEventListener("click", downloadSelected);
els.home.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

window.addEventListener("resize", updateSphereLayout);

setupEffectControls();
setupSphereInteraction();
loadIconsFromDatabase().then(render);
