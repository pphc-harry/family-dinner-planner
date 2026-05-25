const mainDishes = [
  item("炆排骨", "主菜", ["豬", "炆餸"], ["柱侯", "韓汁", "梅菜"]),
  item("蒸排骨", "主菜", ["豬", "蒸餸"], ["蒜頭豆豉", "酸梅麵豉"]),
  item("煎水𦟌/梅頭豬扒", "主菜", ["豬", "煎香"]),
  item("豬肉碎炒蛋", "主菜", ["豬", "蛋"], ["粟米"]),
  item("牛肉碎炒蛋", "主菜", ["牛", "蛋"], ["粟米"]),
  item("蒸豬肉餅", "主菜", ["豬", "蒸餸"], ["咸蛋", "梅菜"]),
  item("雞片炒菜", "主菜", ["雞", "蔬菜"]),
  item("煎免治豬肉餅", "主菜", ["豬", "煎香"], ["多塊", "全塊"]),
  item("叉燒", "主菜", ["豬", "焗/燒"]),
  item("雞翼", "主菜", ["雞", "煎香"], ["蠔油煎", "豉油浸"]),
  item("豉油王雞下脾", "主菜", ["雞", "豉油"]),
  item("菠蘿單骨雞翼", "主菜", ["雞", "酸甜"]),
  item("南乳腐乳雞", "主菜", ["雞", "香口"], ["雞扒", "雞翼", "雞下脾"]),
  item("豉油雞＆蛋", "主菜", ["雞", "蛋"]),
  item("燒雞", "主菜", ["雞", "焗/燒"]),
  item("咸雞", "主菜", ["雞", "清爽"]),
  item("日式咖哩雞扒", "主菜", ["雞", "咖哩"], ["洋蔥", "薯仔", "甘筍"]),
  item("蠔油南瓜雞扒", "主菜", ["雞", "蔬菜"], ["洋蔥", "甘筍"]),
  item("梅菜炆豬肉", "主菜", ["豬", "炆餸"]),
  item("焗金沙骨", "主菜", ["豬", "焗/燒"]),
  item("焗咸豬手", "主菜", ["豬", "焗/燒"]),
  item("炒豬梅肉片", "主菜", ["豬", "快手"], ["韓汁", "蠔油"]),
  item("南乳豬𦟌", "主菜", ["豬", "香口"]),
  item("洋蔥爆熟豬手", "主菜", ["豬", "快手"]),
  item("甜醋薑豬手蛋", "主菜", ["豬", "蛋"]),
  item("豬肉碎蒸雞蛋咸蛋", "主菜", ["豬", "蒸餸", "蛋"]),
  item("蕃茄碎牛炒蛋", "主菜", ["牛", "蛋"]),
  item("蕃茄碎豬炒蛋", "主菜", ["豬", "蛋"]),
  item("陳皮碎蒸牛肉餅", "主菜", ["牛", "蒸餸"]),
  item("炆牛腩", "主菜", ["牛", "炆餸"]),
  item("洋蔥炒肥牛", "主菜", ["牛", "快手"]),
  item("韓汁牛仔骨", "主菜", ["牛", "炆餸"], ["洋蔥", "薯仔"]),
  item("時菜肉片", "主菜", ["豬", "蔬菜"]),
  item("時菜肥牛", "主菜", ["牛", "蔬菜"]),
  item("時菜雞肉", "主菜", ["雞", "蔬菜"]),
  item("炒肉碎蒸茄子", "主菜", ["豬", "蒸餸", "蔬菜"]),
  item("午餐肉炒蛋", "主菜", ["蛋", "快手"], [], true),
  item("蒸紅鮪", "主菜", ["魚/海鮮", "蒸餸"]),
  item("煎三文魚", "主菜", ["魚/海鮮", "煎香"]),
  item("煎比目魚", "主菜", ["魚/海鮮", "煎香"]),
  item("煎銀雪魚", "主菜", ["魚/海鮮", "煎香"]),
  item("豉汁帶子蒸豆腐", "主菜", ["魚/海鮮", "豆腐", "蒸餸"]),
  item("冬菇肉絲炆節瓜", "主菜", ["豬", "蔬菜", "炆餸"]),
  item("節瓜粉絲蝦干", "主菜", ["魚/海鮮", "蔬菜"]),
  item("鰻魚", "主菜", ["魚/海鮮", "即食"], [], true),
  item("炸雞", "主菜", ["雞", "即食"], [], true),
  item("火腿丸", "主菜", ["雜項", "即食"], [], true),
  item("一品鍋", "主菜", ["分享", "快煮"], ["娃娃菜/生菜", "豆腐", "貢丸", "肥牛", "粉絲"], true),
  item("炒粒粒", "主菜", ["蔬菜", "快手"], ["西蘭花", "菜莆", "粟米", "雞粒/豬肉粒", "午餐肉"], true),
];

const vegetableDishes = [
  item("蒜蓉炒菜心", "青菜", ["青菜", "快手"]),
  item("蒜蓉炒生菜", "青菜", ["青菜", "快手"]),
  item("上湯娃娃菜", "青菜", ["青菜"]),
  item("蒜蓉蒸勝瓜", "青菜", ["青菜", "蒸餸"]),
  item("冬菇炆節瓜", "青菜", ["青菜", "炆餸"]),
  item("節瓜粉絲蝦干", "青菜", ["青菜", "魚/海鮮"]),
  item("南乳炆齋", "青菜", ["青菜", "豆腐"]),
  item("煎豆腐", "青菜", ["豆腐", "快手"], [], true),
  item("蕃茄炒蛋", "青菜", ["蛋", "快手"], [], true),
  item("蒸水蛋", "青菜", ["蛋", "蒸餸", "快手"], [], true),
  item("煎荷包蛋", "青菜", ["蛋", "快手"], [], true),
  item("菜莆炒蛋", "青菜", ["蛋", "快手"], [], true),
];

const storageKey = "familyDinnerPlanner:v2";
const oldStorageKey = "familyDinnerPlanner:v1";
const dateFormatter = new Intl.DateTimeFormat("zh-Hant-HK", {
  weekday: "short",
  month: "numeric",
  day: "numeric",
});

const state = loadState();
const elements = {
  todayDate: document.querySelector("#todayDate"),
  mealTitle: document.querySelector("#mealTitle"),
  mealSubtitle: document.querySelector("#mealSubtitle"),
  mealCards: document.querySelector("#mealCards"),
  mealCardTemplate: document.querySelector("#mealCardTemplate"),
  drawDinnerButton: document.querySelector("#drawDinnerButton"),
  redrawButton: document.querySelector("#redrawButton"),
  saveDinnerButton: document.querySelector("#saveDinnerButton"),
  copyDinnerButton: document.querySelector("#copyDinnerButton"),
  avoidRecent: document.querySelector("#avoidRecent"),
  preferQuick: document.querySelector("#preferQuick"),
  historyList: document.querySelector("#historyList"),
  clearHistoryButton: document.querySelector("#clearHistoryButton"),
  dishSearch: document.querySelector("#dishSearch"),
  categoryTabs: document.querySelector("#categoryTabs"),
  dishList: document.querySelector("#dishList"),
  customDishForm: document.querySelector("#customDishForm"),
  customDishName: document.querySelector("#customDishName"),
  customDishType: document.querySelector("#customDishType"),
  formNote: document.querySelector("#formNote"),
  shareText: document.querySelector("#shareText"),
};

const categories = ["全部", "主菜", "青菜", "快煮"];
let activeCategory = "全部";

init();

function init() {
  elements.todayDate.textContent = dateFormatter.format(new Date());
  elements.avoidRecent.checked = state.settings.avoidRecent;
  elements.preferQuick.checked = state.settings.preferQuick;

  document.querySelectorAll(".tab-button").forEach((button) => {
    button.addEventListener("click", () => showScreen(button.dataset.screen));
  });

  document.querySelectorAll(".combo-button").forEach((button) => {
    button.classList.toggle("is-active", button.dataset.combo === state.combo);
    button.addEventListener("click", () => setCombo(button.dataset.combo));
  });

  elements.drawDinnerButton.addEventListener("click", drawDinner);
  elements.redrawButton.addEventListener("click", drawDinner);
  elements.saveDinnerButton.addEventListener("click", saveTonight);
  elements.copyDinnerButton.addEventListener("click", copyTonight);
  elements.clearHistoryButton.addEventListener("click", clearHistory);
  elements.avoidRecent.addEventListener("change", persistSettings);
  elements.preferQuick.addEventListener("change", persistSettings);
  elements.dishSearch.addEventListener("input", renderMenu);
  elements.customDishForm.addEventListener("submit", addCustomDish);

  renderCategories();
  ensureDinner();
  renderAll();
  registerServiceWorker();
}

function item(name, type, tags = [], variants = [], quick = false) {
  return {
    id: slugify(`${type}-${name}`),
    name,
    type,
    tags,
    variants,
    quick,
  };
}

function loadState() {
  const defaults = {
    combo: "main-veg",
    tonight: null,
    history: [],
    custom: [],
    settings: {
      avoidRecent: true,
      preferQuick: false,
    },
  };

  try {
    const parsed = JSON.parse(localStorage.getItem(storageKey));
    if (parsed) {
      return normalizeState({ ...defaults, ...parsed, settings: { ...defaults.settings, ...parsed.settings } });
    }
  } catch {}

  try {
    const old = JSON.parse(localStorage.getItem(oldStorageKey));
    return normalizeState({
      ...defaults,
      history: (old?.recent || []).map((dish) => ({
        title: dish.name,
        date: dish.cookedDate || "",
        dishes: [dish],
      })),
      custom: (old?.customDishes || []).map((dish) => ({
        ...dish,
        type: "主菜",
      })),
    });
  } catch {
    return defaults;
  }
}

function normalizeState(value) {
  return {
    ...value,
    combo: ["main-veg", "quick"].includes(value.combo) ? value.combo : "main-veg",
    history: Array.isArray(value.history) ? value.history : [],
    custom: Array.isArray(value.custom) ? value.custom.map(normalizeDish).filter(Boolean) : [],
    settings: {
      avoidRecent: value.settings?.avoidRecent !== false,
      preferQuick: Boolean(value.settings?.preferQuick),
    },
  };
}

function normalizeDish(dish) {
  if (!dish?.name) return null;
  return {
    id: dish.id || slugify(`${dish.type || "主菜"}-${dish.name}`),
    name: dish.name,
    type: dish.type || "主菜",
    tags: Array.isArray(dish.tags) ? dish.tags : [dish.protein || "自訂"],
    variants: Array.isArray(dish.variants) ? dish.variants : Array.isArray(dish.options) ? dish.options : [],
    quick: Boolean(dish.quick),
  };
}

function saveState() {
  localStorage.setItem(storageKey, JSON.stringify(state));
}

function allItems() {
  const custom = Array.isArray(state.custom) ? state.custom : [];
  return [...mainDishes, ...vegetableDishes, ...custom]
    .map(normalizeDish)
    .filter((dish) => dish && dish.type !== "湯");
}

function ensureDinner() {
  if (!state.tonight) {
    state.tonight = makeDinner();
    saveState();
  }
}

function setCombo(combo) {
  state.combo = combo;
  document.querySelectorAll(".combo-button").forEach((button) => {
    button.classList.toggle("is-active", button.dataset.combo === combo);
  });
  state.tonight = makeDinner();
  saveState();
  renderTonight("已轉組合");
}

function persistSettings() {
  state.settings = {
    avoidRecent: elements.avoidRecent.checked,
    preferQuick: elements.preferQuick.checked,
  };
  saveState();
}

function drawDinner() {
  state.tonight = makeDinner();
  saveState();
  renderTonight("今晚有着落");
}

function makeDinner() {
  const recentNames = state.settings.avoidRecent
    ? state.history.slice(0, 3).flatMap((entry) => (entry.dishes || []).map((dish) => dish.name))
    : [];
  const picked = [];

  if (state.combo === "quick") {
    picked.push(pickQuick("主菜", picked, recentNames));
    picked.push(pickQuick("青菜", picked, recentNames));
  } else {
    picked.push(pickFrom("主菜", picked, recentNames));
    picked.push(pickFrom("青菜", picked, recentNames));
  }

  return {
    title: comboTitle(state.combo),
    date: dateFormatter.format(new Date()),
    dishes: picked.map(materialize),
  };
}

function pickFrom(type, picked, recentNames) {
  const pool = allItems().filter((dish) => dish.type === type);
  return bestDish(pool, picked, recentNames);
}

function pickQuick(type, picked, recentNames) {
  const quickPool = allItems().filter((dish) => dish.type === type && (dish.quick || dish.tags.includes("快手")));
  return bestDish(quickPool.length ? quickPool : allItems().filter((dish) => dish.type === type), picked, recentNames);
}

function bestDish(pool, picked, recentNames) {
  const scored = pool.map((dish) => {
    let score = 10 + Math.random() * 8;
    if (recentNames.includes(dish.name)) score -= 9;
    if (picked.some((item) => item.name === dish.name)) score -= 10;
    if (state.settings.preferQuick && (dish.quick || dish.tags.includes("快手"))) score += 5;
    if (picked.at(-1)?.tags.some((tag) => dish.tags.includes(tag))) score -= 2;
    return { dish, score };
  });
  scored.sort((a, b) => b.score - a.score);
  return scored[0]?.dish || pool[0];
}

function materialize(dish) {
  const variants = Array.isArray(dish.variants) ? dish.variants : [];
  const variant = variants.length ? variants[Math.floor(Math.random() * variants.length)] : "";
  return {
    ...dish,
    variant,
    uid: `${dish.id}-${Date.now()}-${Math.round(Math.random() * 1000)}`,
  };
}

function renderAll() {
  renderTonight();
  renderMenu();
  renderHistory();
  updateShareText();
}

function renderTonight(status = "") {
  const dinner = state.tonight;
  elements.mealTitle.textContent = status || dinner.title;
  elements.mealSubtitle.textContent = dinner.dishes.map(displayName).join(" + ");
  elements.mealCards.replaceChildren();

  dinner.dishes.forEach((dish, index) => {
    const node = elements.mealCardTemplate.content.firstElementChild.cloneNode(true);
    node.querySelector(".meal-type").textContent = dish.type;
    node.querySelector("h3").textContent = displayName(dish);
    node.querySelector("p").textContent = [dish.tags.join(" / "), index === 0 ? "主力餸" : ""].filter(Boolean).join(" · ");
    elements.mealCards.append(node);
  });

  updateShareText();
}

function renderCategories() {
  elements.categoryTabs.replaceChildren();
  categories.forEach((category) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = "category-button";
    button.textContent = category;
    button.classList.toggle("is-active", category === activeCategory);
    button.addEventListener("click", () => {
      activeCategory = category;
      renderCategories();
      renderMenu();
    });
    elements.categoryTabs.append(button);
  });
}

function renderMenu() {
  const query = elements.dishSearch.value.trim().toLowerCase();
  const dishes = allItems().filter((dish) => {
    const categoryMatch =
      activeCategory === "全部" ||
      dish.type === activeCategory ||
      (activeCategory === "快煮" && (dish.quick || dish.tags.includes("快手")));
    const haystack = `${dish.name} ${dish.type} ${dish.tags.join(" ")} ${dish.variants.join(" ")}`.toLowerCase();
    return categoryMatch && (!query || haystack.includes(query));
  });

  elements.dishList.replaceChildren();
  if (!dishes.length) {
    const empty = document.createElement("article");
    empty.className = "dish-item dish-item-empty";
    empty.innerHTML = "<div><strong>沒有找到菜式</strong><span>試試用另一個字搜尋。</span></div>";
    elements.dishList.append(empty);
    return;
  }

  dishes.forEach((dish) => {
    const row = document.createElement("article");
    row.className = "dish-item";
    const thumb = document.createElement("img");
    const text = document.createElement("div");
    const title = document.createElement("strong");
    const meta = document.createElement("span");
    const button = document.createElement("button");
    thumb.className = "dish-thumb";
    thumb.src = generatedDishImage(dish);
    thumb.alt = `${dish.name}插圖`;
    thumb.loading = "lazy";
    title.textContent = dish.name;
    meta.textContent = `${dish.type} · ${dish.tags.slice(0, 3).join(" / ")}`;
    button.type = "button";
    button.className = "mini-button";
    button.textContent = "今晚";
    button.addEventListener("click", () => useDishTonight(dish));
    text.append(title, meta);
    row.append(thumb, text, button);
    elements.dishList.append(row);
  });
}

function renderHistory() {
  elements.historyList.replaceChildren();
  if (!state.history.length) {
    const empty = document.createElement("li");
    empty.innerHTML = "<strong>未有紀錄</strong><span>按「記低今晚」後會出現在這裡。</span>";
    elements.historyList.append(empty);
    return;
  }

  state.history.slice(0, 12).forEach((entry) => {
    const li = document.createElement("li");
    const strong = document.createElement("strong");
    const span = document.createElement("span");
    strong.textContent = entry.dishes.map(displayName).join(" + ");
    span.textContent = entry.date;
    li.append(strong, span);
    elements.historyList.append(li);
  });
}

function useDishTonight(dish) {
  const dinner = state.tonight || makeDinner();
  const materialized = materialize(dish);
  const index = dinner.dishes.findIndex((candidate) => candidate.type === dish.type);
  if (index >= 0) {
    dinner.dishes[index] = materialized;
  } else {
    dinner.dishes[0] = materialized;
  }
  state.tonight = dinner;
  saveState();
  showScreen("screenTonight");
  renderAll();
}

function addCustomDish(event) {
  event.preventDefault();
  const name = elements.customDishName.value.trim();
  if (!name) return;

  const typeMap = {
    main: "主菜",
    vegetable: "青菜",
    quick: "主菜",
  };
  const type = typeMap[elements.customDishType.value] || "主菜";
  const quick = elements.customDishType.value === "quick";
  const customDish = item(name, type, [quick ? "快煮" : "自訂"], [], quick);
  customDish.id = `custom-${slugify(name)}-${Date.now()}`;
  state.custom.push(normalizeDish(customDish));
  saveState();
  elements.customDishForm.reset();
  elements.formNote.textContent = `已加入：${name}`;
  renderMenu();
}

function saveTonight() {
  const dinner = state.tonight || makeDinner();
  state.history = [
    {
      ...dinner,
      savedAt: Date.now(),
      date: dateFormatter.format(new Date()),
    },
    ...state.history,
  ].slice(0, 30);
  saveState();
  renderHistory();
  elements.mealTitle.textContent = "已記低今晚";
}

function clearHistory() {
  state.history = [];
  saveState();
  renderHistory();
}

async function copyTonight() {
  updateShareText();
  try {
    await navigator.clipboard.writeText(elements.shareText.value);
    elements.copyDinnerButton.textContent = "已複製";
    window.setTimeout(() => {
      elements.copyDinnerButton.textContent = "複製今晚餐單";
    }, 1200);
  } catch {
    elements.shareText.style.display = "block";
    elements.shareText.focus();
    elements.shareText.select();
  }
}

function updateShareText() {
  if (!state.tonight) return;
  elements.shareText.value = [
    `今晚餐單：${state.tonight.title}`,
    ...state.tonight.dishes.map((dish) => `- ${dish.type}：${displayName(dish)}`),
  ].join("\n");
}

function showScreen(screenId) {
  document.querySelectorAll(".screen").forEach((screen) => {
    screen.classList.toggle("is-active", screen.id === screenId);
  });
  document.querySelectorAll(".tab-button").forEach((button) => {
    button.classList.toggle("is-active", button.dataset.screen === screenId);
  });
}

function comboTitle(combo) {
  if (combo === "quick") return "快煮一餸一菜";
  return "一餸一菜";
}

function displayName(dish) {
  return dish.variant ? `${dish.name} · ${dish.variant}` : dish.name;
}

function generatedDishImage(dish) {
  const seed = hashString(`${dish.name}-${dish.type}-${dish.tags.join("-")}`);
  const palette = imagePalette(dish, seed);
  const steam = dish.tags.some((tag) => ["蒸餸", "炆餸", "豆腐", "青菜"].includes(tag));
  const pan = dish.tags.some((tag) => ["煎香", "快手", "即食"].includes(tag));
  const garnishA = 36 + (seed % 30);
  const garnishB = 96 + (seed % 34);
  const label = dish.name.replace(/[^\p{Script=Han}\p{Letter}\p{Number}]/gu, "").slice(0, 2) || dish.type;

  const svg = `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 160 160">
      <rect width="160" height="160" rx="34" fill="${palette.bg}"/>
      <circle cx="126" cy="28" r="22" fill="${palette.blob}" opacity=".62"/>
      <circle cx="35" cy="132" r="26" fill="${palette.blob}" opacity=".42"/>
      ${steam ? '<path d="M54 37c-12 12 10 18-1 31M80 31c-12 14 10 20-1 34M105 39c-10 10 7 17-2 28" fill="none" stroke="#fff7e8" stroke-width="8" stroke-linecap="round" opacity=".72"/>' : ""}
      ${pan ? '<path d="M34 104h88c16 0 24 10 23 20H31c-2-10 1-17 3-20Z" fill="#23211e" opacity=".18"/><path d="M126 109l23-12" stroke="#23211e" stroke-width="9" stroke-linecap="round" opacity=".18"/>' : ""}
      <ellipse cx="80" cy="91" rx="55" ry="38" fill="#fffaf2"/>
      <ellipse cx="80" cy="88" rx="43" ry="28" fill="${palette.plate}"/>
      <path d="M49 84c21-21 48-23 66-5-16 6-36 9-66 5Z" fill="${palette.food1}"/>
      <path d="M49 97c24 14 46 15 70 1-12 20-54 22-70-1Z" fill="${palette.food2}"/>
      <circle cx="${garnishA}" cy="80" r="6" fill="#4ea96f"/>
      <circle cx="${garnishB}" cy="74" r="5" fill="#d95643"/>
      <path d="M60 106c15 8 33 8 48 0" fill="none" stroke="#fff2c6" stroke-width="6" stroke-linecap="round" opacity=".82"/>
      <rect x="50" y="18" width="60" height="30" rx="15" fill="rgba(255,255,255,.72)"/>
      <text x="80" y="39" text-anchor="middle" font-family="PingFang TC, Noto Sans TC, sans-serif" font-size="18" font-weight="800" fill="${palette.text}">${escapeSvg(label)}</text>
    </svg>
  `;

  return `data:image/svg+xml;charset=UTF-8,${encodeURIComponent(svg)}`;
}

function imagePalette(dish, seed) {
  const palettes = {
    chicken: { bg: "#fff0bc", blob: "#ff8f4f", plate: "#ffd36f", food1: "#e7893d", food2: "#c05238", text: "#9a4b24" },
    pork: { bg: "#ffe1d8", blob: "#ffb341", plate: "#ffc0a9", food1: "#d7674e", food2: "#9f3d31", text: "#9f3d31" },
    beef: { bg: "#ead9c4", blob: "#ffb341", plate: "#d0a17b", food1: "#8b5642", food2: "#5a352b", text: "#5a352b" },
    seafood: { bg: "#dceef8", blob: "#55bd82", plate: "#a8d7ea", food1: "#4f91b8", food2: "#2d6f8e", text: "#2d6f8e" },
    veg: { bg: "#dff4e8", blob: "#ffb341", plate: "#b9e7c5", food1: "#55bd82", food2: "#2e8d58", text: "#2e8d58" },
    egg: { bg: "#fff2cf", blob: "#55bd82", plate: "#ffe08b", food1: "#f4b43f", food2: "#fff7d7", text: "#b87417" },
    quick: { bg: "#eee9ff", blob: "#ffb341", plate: "#cfc5f4", food1: "#8f7bd6", food2: "#5f4aa4", text: "#5f4aa4" },
  };

  const tags = [dish.type, ...dish.tags].join(" ");
  if (tags.includes("雞")) return palettes.chicken;
  if (tags.includes("豬")) return palettes.pork;
  if (tags.includes("牛")) return palettes.beef;
  if (tags.includes("魚") || tags.includes("海鮮")) return palettes.seafood;
  if (tags.includes("蛋")) return palettes.egg;
  if (dish.quick || tags.includes("快")) return palettes.quick;
  if (tags.includes("青菜") || tags.includes("蔬菜") || tags.includes("豆腐")) return palettes.veg;
  return Object.values(palettes)[seed % Object.keys(palettes).length];
}

function hashString(text) {
  let hash = 0;
  for (let index = 0; index < text.length; index += 1) {
    hash = (hash * 31 + text.charCodeAt(index)) >>> 0;
  }
  return hash;
}

function escapeSvg(text) {
  return text.replace(/[&<>"']/g, (char) => {
    const entities = { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&apos;" };
    return entities[char];
  });
}

function slugify(text) {
  return text
    .toLowerCase()
    .replace(/\s+/g, "-")
    .replace(/[^\p{Script=Han}\p{Letter}\p{Number}-]/gu, "")
    .slice(0, 44);
}

function registerServiceWorker() {
  if ("serviceWorker" in navigator && location.protocol !== "file:") {
    navigator.serviceWorker.register("./sw.js").catch(() => {});
  }
}
