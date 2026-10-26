// Fő Alkalmazás Vezérlő – Letisztult Light-First UX, Kategória-léptető és Ideológiai Sáv-vetítés
import { AXES, CATEGORIES } from './data-axes.js';
import { PRESETS } from './data-presets.js';
import { QUIZ_QUESTIONS } from './data-quiz.js';
import { rankPresets, computeCategoryStats, extractDominantTraits, evaluateAxisMatch } from './matcher.js';
import { DynamicCompass } from './compass.js';

const I18N = {
  hu: {
    appTitle: 'AXIOM <span class="text-sky-600 dark:text-sky-400 font-semibold">// Értékrend Iránytű</span>',
    appSubtitle: 'Fedezd fel, melyik értékrend áll hozzád a legközelebb 30 ellentétpár mentén.',
    tabSliders: 'Értékcsúszkák',
    tabCompass: '2D Iránytű',
    tabQuiz: 'Kérdőív',
    btnReset: 'Alaphelyzet',
    btnRandom: 'Véletlen teszt',
    btnShare: 'Megosztás',
    presetHeader: 'Összehasonlított Ideológia',
    statInRange: 'Zónán belül',
    statNearRange: 'Határeset',
    statOutRange: 'Eltérés',
    btnLoadPreset: 'Ideológia értékeinek betöltése a csúszkákra',
    btnHideOverlay: 'Sávok: BE',
    btnShowOverlay: 'Sávok: KI',
    rankingHeader: 'Legközelebbi Értékrendek',
    showAllRanks: '▼ Összes (16) irányzat megjelenítése',
    showTopRanks: '▲ Csak a Top 5 megjelenítése',
    traitsHeader: 'Domináns Érték-Módosítóid',
    noDominantTraits: 'Húzd el a csúszkákat (±25 fölé), hogy megjelenjenek a domináns jellemzőid!',
    catSummaryTitle: '6 Fő Dimenzió Összesítése',
    filterAll: 'Összes (30)',
    chkShowDetails: 'Hatás-címkék (EU5)',
    filterOutliersOnly: 'Csak az eltérések',
    legendUser: 'Saját értéked',
    legendRange: 'Kiválasztott ideológia sávja [Min..Max]',
    legendTip: 'Kattints bármelyik végpontra a teljes (-100 / +100) kitoláshoz, vagy a 0-ra a középponthoz!',
    btnPrevCat: 'Előző kategória',
    btnNextCat: 'Következő kategória',
    btnGoCompass: 'Tovább a 2D Iránytűre 🧭',
    compassTitle: 'Dinamikus 2D Érték- és Ideológia Iránytű',
    compassSubtitle: 'Válaszd ki szabadon az X és Y tengelyt, vagy használd a kész sablonokat!',
    labelXAxis: 'X-Tengely (Vízszintes: Bal -100 ↔ Jobb +100)',
    labelYAxis: 'Y-Tengely (Függőleges: Alsó -100 ↔ Felső +100)',
    chkShowAllZones: 'Összes ideológia értékhatár-zónájának megjelenítése',
    compassClickHint: '💡 Kattints bármelyik pontra a térképen az összevetéshez!',
    quizTitle: 'Értékrend-Kalibráló Kérdőív (30 Állítás)',
    quizSubtitle: 'Válaszolj az állításokra, és a csúszkák automatikusan beállnak a válaszaid alapján!',
    btnViewCompass: 'Iránytű megtekintése',
    inRangeBadge: '✓ Zónán belül',
    nearRangeBadge: '⚠ Határeset',
    outRangeBadge: '✕ Eltérés',
    neutralLabel: 'Semleges',
    detailsBtn: 'Részletek',
    toastCopied: '🔗 Megosztható profil-link a vágólapra másolva!',
    toastPresetLoaded: '📥 Ideológia típusértékei betöltve a csúszkákra!',
    quizOptStronglyDisagree: 'Teljesen elutasítom',
    quizOptDisagree: 'Inkább nem',
    quizOptNeutral: 'Semleges',
    quizOptAgree: 'Inkább igen',
    quizOptStronglyAgree: 'Teljesen egyetértek',
    optGroupCategories: '── 6 Összesített Fő Dimenzió ──',
    optGroupAxes: '── 30 Konkrét Értékpár ──',
    compassPresetPolitical: 'Politikai (Gazdaság × Hatalom)',
    compassPresetEU5: 'EU5 (Centralizáció × Tradíció)',
    compassPresetSocCul: 'Társadalom × Kultúra',
    compassPresetEthPsy: 'Erkölcs × Életfilozófia'
  },
  en: {
    appTitle: 'AXIOM <span class="text-sky-600 dark:text-sky-400 font-semibold">// Value Compass</span>',
    appSubtitle: 'Discover which ideology and value system matches you across 30 core dichotomies.',
    tabSliders: 'Value Sliders',
    tabCompass: '2D Compass',
    tabQuiz: 'Quiz',
    btnReset: 'Reset',
    btnRandom: 'Randomize',
    btnShare: 'Share',
    presetHeader: 'Compared Ideology',
    statInRange: 'In Zone',
    statNearRange: 'Borderline',
    statOutRange: 'Outside',
    btnLoadPreset: 'Load ideology values into sliders',
    btnHideOverlay: 'Zones: ON',
    btnShowOverlay: 'Zones: OFF',
    rankingHeader: 'Closest Value Systems',
    showAllRanks: '▼ Show all (16) archetypes',
    showTopRanks: '▲ Show Top 5 only',
    traitsHeader: 'Your Dominant Value Modifiers',
    noDominantTraits: 'Move sliders beyond ±25 to reveal your dominant traits!',
    catSummaryTitle: '6 Core Dimensions Balance',
    filterAll: 'All (30)',
    chkShowDetails: 'Trait badges (EU5)',
    filterOutliersOnly: 'Outliers only',
    legendUser: 'Your setting',
    legendRange: 'Selected ideology zone [Min..Max]',
    legendTip: 'Click either pole to snap to the full edge (-100 / +100), or 0 to center!',
    btnPrevCat: 'Previous category',
    btnNextCat: 'Next category',
    btnGoCompass: 'View on 2D Compass 🧭',
    compassTitle: 'Dynamic 2D Value & Political Compass',
    compassSubtitle: 'Freely choose the X and Y axes or pick one of the quick templates!',
    labelXAxis: 'X-Axis (Horizontal: Left -100 ↔ Right +100)',
    labelYAxis: 'Y-Axis (Vertical: Bottom -100 ↔ Top +100)',
    chkShowAllZones: 'Show range ellipses for all ideologies',
    compassClickHint: '💡 Click any ideology dot on the map to select and compare it!',
    quizTitle: 'Value Calibration Quiz (30 Statements)',
    quizSubtitle: 'Answer the statements below to automatically calibrate your sliders!',
    btnViewCompass: 'View 2D Compass',
    inRangeBadge: '✓ In Zone',
    nearRangeBadge: '⚠ Borderline',
    outRangeBadge: '✕ Outside',
    neutralLabel: 'Neutral',
    detailsBtn: 'Details',
    toastCopied: '🔗 Shareable profile link copied to clipboard!',
    toastPresetLoaded: '📥 Ideology ideal values loaded into sliders!',
    quizOptStronglyDisagree: 'Strongly Disagree',
    quizOptDisagree: 'Disagree',
    quizOptNeutral: 'Neutral',
    quizOptAgree: 'Agree',
    quizOptStronglyAgree: 'Strongly Agree',
    optGroupCategories: '── 6 Aggregated Core Dimensions ──',
    optGroupAxes: '── 30 Specific Value Pairs ──',
    compassPresetPolitical: 'Political (Economy × Power)',
    compassPresetEU5: 'EU5 (Centralization × Tradition)',
    compassPresetSocCul: 'Society × Culture',
    compassPresetEthPsy: 'Ethics × Life Philosophy'
  }
};

// Alkalmazás Állapot (State) – Alapértelmezett: Angol nyelv + Light Mode + 1. kategória
const state = {
  lang: 'en',
  isDark: false,
  activeTab: 'sliders',
  selectedPresetId: 'soc_dem',
  showPresetOverlay: true,
  selectedCategory: 'society', // Alapból csak az 1. kategória 5 csúszkája látszik!
  showDetailsGlobal: false,
  expandedAxes: {},
  onlyOutliers: false,
  showAllRanks: false,
  compassX: 'cat:economy',
  compassY: 'cat:power',
  compassAllZones: true,
  userValues: {},
  quizAnswered: {}
};

for (const axis of AXES) {
  state.userValues[axis.id] = 0;
}

let compassInstance = null;

// ============================================================================
// URL HASH MENTÉS ÉS VISSZATÖLTÉS
// ============================================================================
function loadStateFromHash() {
  const hash = window.location.hash;
  if (!hash || !hash.startsWith('#v=')) return false;
  try {
    const raw = hash.replace('#v=', '');
    const parts = raw.split(',');
    if (parts.length === AXES.length) {
      AXES.forEach((axis, idx) => {
        const num = parseInt(parts[idx], 10);
        if (!Number.isNaN(num)) {
          state.userValues[axis.id] = Math.max(-100, Math.min(100, num));
        }
      });
      return true;
    }
  } catch (e) {
    console.warn('Invalid URL hash state:', e);
  }
  return false;
}

function encodeStateToHash() {
  const arr = AXES.map((a) => Math.round(state.userValues[a.id] ?? 0));
  const hash = `#v=${arr.join(',')}`;
  history.replaceState(null, '', hash);
  return window.location.href;
}

// ============================================================================
// SEGÉDFÜGGVÉNYEK
// ============================================================================
function getActivePreset() {
  return PRESETS.find((p) => p.id === state.selectedPresetId) || PRESETS[0];
}

function showToast(msg) {
  const toast = document.getElementById('toast-notification');
  if (!toast) return;
  toast.textContent = msg;
  toast.classList.remove('hidden');
  clearTimeout(showToast._timer);
  showToast._timer = setTimeout(() => {
    toast.classList.add('hidden');
  }, 3000);
}

function formatSigned(val) {
  if (val > 0) return `+${val}`;
  return `${val}`;
}

function applyTheme() {
  if (state.isDark) {
    document.documentElement.classList.add('dark');
    document.getElementById('theme-icon').textContent = '☀️';
  } else {
    document.documentElement.classList.remove('dark');
    document.getElementById('theme-icon').textContent = '🌙';
  }
}

// ============================================================================
// STATIKUS FELIRATOK ÉS DROPDOWNOK
// ============================================================================
function applyStaticTranslations() {
  const t = I18N[state.lang];
  document.getElementById('ui-app-title').innerHTML = t.appTitle;
  document.getElementById('ui-app-subtitle').textContent = t.appSubtitle;

  document.querySelectorAll('[data-i18n]').forEach((el) => {
    const key = el.getAttribute('data-i18n');
    if (t[key]) {
      el.textContent = t[key];
    }
  });

  const overlayBtn = document.getElementById('overlay-btn-label');
  if (overlayBtn) {
    overlayBtn.textContent = state.showPresetOverlay ? t.btnHideOverlay : t.btnShowOverlay;
  }

  const toggleRanksBtn = document.getElementById('btn-toggle-all-ranks');
  if (toggleRanksBtn) {
    toggleRanksBtn.textContent = state.showAllRanks ? t.showTopRanks : t.showAllRanks;
  }
}

function populatePresetDropdown() {
  const select = document.getElementById('select-preset');
  select.innerHTML = '';
  for (const preset of PRESETS) {
    const opt = document.createElement('option');
    opt.value = preset.id;
    opt.textContent = `${preset.icon} ${preset.name[state.lang]}`;
    if (preset.id === state.selectedPresetId) opt.selected = true;
    select.appendChild(opt);
  }
}

function populateCompassDropdowns() {
  const t = I18N[state.lang];
  const selX = document.getElementById('compass-select-x');
  const selY = document.getElementById('compass-select-y');

  const buildOptions = (selectedVal) => {
    let html = `<optgroup label="${t.optGroupCategories}">`;
    for (const cat of CATEGORIES) {
      const val = `cat:${cat.id}`;
      const sel = val === selectedVal ? 'selected' : '';
      html += `<option value="${val}" ${sel}>${cat.icon} ${cat.name[state.lang]}</option>`;
    }
    html += `</optgroup><optgroup label="${t.optGroupAxes}">`;
    for (const axis of AXES) {
      const sel = axis.id === selectedVal ? 'selected' : '';
      html += `<option value="${axis.id}" ${sel}>${axis.name[state.lang]}</option>`;
    }
    html += `</optgroup>`;
    return html;
  };

  selX.innerHTML = buildOptions(state.compassX);
  selY.innerHTML = buildOptions(state.compassY);
}

function buildCategoryFilterPills() {
  const container = document.getElementById('category-filter-pills');
  const t = I18N[state.lang];
  container.innerHTML = '';

  CATEGORIES.forEach((cat, idx) => {
    const btn = document.createElement('button');
    const isActive = state.selectedCategory === cat.id;
    btn.className = `px-3 py-1.5 rounded-xl text-xs font-semibold transition flex items-center gap-1.5 ${
      isActive
        ? 'bg-sky-600 text-white shadow-sm'
        : 'bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-300'
    }`;
    const shortName = cat.name[state.lang].replace(/^[IVX]+\.\s*/, '');
    btn.innerHTML = `<span>${idx + 1}. ${shortName}</span>`;
    btn.addEventListener('click', () => {
      state.selectedCategory = cat.id;
      buildCategoryFilterPills();
      buildSlidersDOM();
      updateAllVisuals();
    });
    container.appendChild(btn);
  });

  // "Összes (30)" gomb a végén
  const allBtn = document.createElement('button');
  const isAll = state.selectedCategory === 'all';
  allBtn.className = `px-3 py-1.5 rounded-xl text-xs font-semibold transition ${
    isAll
      ? 'bg-sky-600 text-white shadow-sm'
      : 'bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-600 dark:text-slate-400'
  }`;
  allBtn.textContent = t.filterAll;
  allBtn.addEventListener('click', () => {
    state.selectedCategory = 'all';
    buildCategoryFilterPills();
    buildSlidersDOM();
    updateAllVisuals();
  });
  container.appendChild(allBtn);

  updateCategoryStepperFooter();
}

function updateCategoryStepperFooter() {
  const footer = document.getElementById('category-stepper-footer');
  if (!footer) return;
  const t = I18N[state.lang];

  if (state.selectedCategory === 'all') {
    footer.classList.add('hidden');
    return;
  }

  footer.classList.remove('hidden');
  const idx = CATEGORIES.findIndex((c) => c.id === state.selectedCategory);
  const prevBtn = document.getElementById('btn-prev-cat');
  const nextBtn = document.getElementById('btn-next-cat');
  const indicator = document.getElementById('stepper-indicator');

  prevBtn.disabled = idx <= 0;
  prevBtn.style.opacity = idx <= 0 ? '0.4' : '1';
  indicator.textContent = `${idx + 1} / ${CATEGORIES.length} — ${CATEGORIES[idx].name[state.lang].replace(/^[IVX]+\.\s*/, '')}`;

  if (idx === CATEGORIES.length - 1) {
    nextBtn.innerHTML = `${t.btnGoCompass}`;
  } else {
    const nextCatName = CATEGORIES[idx + 1].name[state.lang].replace(/^[IVX]+\.\s*/, '');
    nextBtn.innerHTML = `${t.btnNextCat}: ${nextCatName} →`;
  }
}

// ============================================================================
// LETISZTULT CSÚSZKA KÁRTYÁK FELÉPÍTÉSE
// ============================================================================
function buildSlidersDOM() {
  const container = document.getElementById('axes-sliders-container');
  const t = I18N[state.lang];
  container.innerHTML = '';

  const visibleCategories =
    state.selectedCategory === 'all'
      ? CATEGORIES
      : CATEGORIES.filter((c) => c.id === state.selectedCategory);

  for (const cat of visibleCategories) {
    const catSection = document.createElement('div');
    catSection.className = 'space-y-3';

    // Kategória Fejléc
    catSection.innerHTML = `
      <div class="flex flex-wrap items-center justify-between gap-2 px-1 pt-1">
        <div class="flex items-center gap-2">
          <span class="text-lg">${cat.icon}</span>
          <div>
            <h2 class="text-sm sm:text-base font-extrabold text-slate-900 dark:text-white">${cat.name[state.lang]}</h2>
            <p class="text-xs text-slate-500 dark:text-slate-400">${cat.desc[state.lang]}</p>
          </div>
        </div>
      </div>
    `;

    const axesList = document.createElement('div');
    axesList.className = 'space-y-2.5';

    const catAxes = AXES.filter((a) => a.category === cat.id);

    for (const axis of catAxes) {
      const card = document.createElement('div');
      card.id = `axis-card-${axis.id}`;
      card.className = 'axis-card rounded-2xl p-4 sm:p-5 space-y-3';

      const showTraits = state.showDetailsGlobal;

      const leftTraitsHtml = axis.left.traits[state.lang]
        .map((tr) => `<span class="inline-block text-[10px] font-semibold px-2 py-0.5 rounded-md bg-sky-50 dark:bg-sky-900/30 text-sky-700 dark:text-sky-300 border border-sky-200/80 dark:border-sky-800">${tr}</span>`)
        .join(' ');

      const rightTraitsHtml = axis.right.traits[state.lang]
        .map((tr) => `<span class="inline-block text-[10px] font-semibold px-2 py-0.5 rounded-md bg-indigo-50 dark:bg-indigo-900/30 text-indigo-700 dark:text-indigo-300 border border-indigo-200/80 dark:border-indigo-800">${tr}</span>`)
        .join(' ');

      card.innerHTML = `
        <!-- 1. SOR: Tengely neve + Rövid kérdés/leírás + Zóna visszajelzés + Saját érték -->
        <div class="flex flex-wrap items-start justify-between gap-2">
          <div class="space-y-0.5 max-w-xl">
            <h3 class="text-sm sm:text-base font-bold text-slate-900 dark:text-white">${axis.name[state.lang]}</h3>
            <p class="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">${axis.desc[state.lang]}</p>
          </div>

          <div class="flex items-center gap-2 shrink-0">
            <span id="axis-zone-badge-${axis.id}" class="text-[11px] font-semibold px-2.5 py-0.5 rounded-full border"></span>
            <span id="axis-val-badge-${axis.id}" class="text-xs font-extrabold px-2.5 py-0.5 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-200 min-w-[64px] text-center">
              0
            </span>
          </div>
        </div>

        <!-- 2. SOR: TELJES SZÉLESSÉGŰ, ÁTLÁTHATÓ CSÚSZKA SÁV -->
        <div class="pt-1">
          <div class="value-track-wrapper">
            <div class="value-track-bg"></div>
            <div class="value-track-ticks">
              <div class="tick-quarter" style="left: 25%"></div>
              <div class="tick-center"></div>
              <div class="tick-quarter" style="left: 75%"></div>
            </div>

            <!-- Ideológia [min, max] tartomány sáv -->
            <div id="range-bar-${axis.id}" class="value-preset-range"></div>
            <!-- Ideológia ideáltípus jelölő -->
            <div id="ideal-pin-${axis.id}" class="value-preset-ideal"></div>

            <!-- Felhasználói aktív kitöltés 0-tól -->
            <div id="user-fill-${axis.id}" class="value-user-fill"></div>

            <!-- Valódi HTML5 Range Input -->
            <input
              type="range"
              id="slider-${axis.id}"
              min="-100"
              max="100"
              step="5"
              value="${state.userValues[axis.id] ?? 0}"
              class="dual-slider"
            />
          </div>
        </div>

        <!-- 3. SOR: KÉT VÉGPONT (MINDIG LÁTHATÓ, TISZTA LEÍRÁSSAL ÉS -100/+100 GYORSKATTINTÁSSAL) -->
        <div class="grid grid-cols-1 sm:grid-cols-11 gap-2 items-start pt-0.5">
          <!-- Bal pólus (-100) -->
          <div
            id="pole-left-${axis.id}"
            class="pole-pill sm:col-span-5 cursor-pointer rounded-xl p-2.5 bg-slate-50/80 hover:bg-sky-50/80 dark:bg-slate-800/50 dark:hover:bg-sky-900/25 border border-slate-200/70 dark:border-slate-800 transition space-y-1"
            title="Kattints a -100 beállításához"
          >
            <div class="flex items-center justify-between gap-1">
              <span class="text-xs font-bold text-sky-700 dark:text-sky-400">◄ ${axis.left.label[state.lang]}</span>
              <span class="text-[10px] font-mono font-semibold text-slate-400">-100</span>
            </div>
            <p class="text-[11.5px] text-slate-600 dark:text-slate-300 leading-snug">${axis.left.desc[state.lang]}</p>
            ${showTraits ? `<div class="flex flex-wrap gap-1 pt-1">${leftTraitsHtml}</div>` : ''}
          </div>

          <!-- Középső 0 (Semleges) gomb -->
          <div class="sm:col-span-1 flex justify-center pt-1">
            <button
              type="button"
              id="pole-zero-${axis.id}"
              class="px-2 py-1 rounded-lg text-[11px] font-mono font-bold text-slate-400 hover:text-slate-700 hover:bg-slate-100 dark:hover:text-white dark:hover:bg-slate-800 transition"
              title="Középállás (0)"
            >
              0
            </button>
          </div>

          <!-- Jobb pólus (+100) -->
          <div
            id="pole-right-${axis.id}"
            class="pole-pill sm:col-span-5 cursor-pointer rounded-xl p-2.5 bg-slate-50/80 hover:bg-indigo-50/80 dark:bg-slate-800/50 dark:hover:bg-indigo-900/25 border border-slate-200/70 dark:border-slate-800 transition space-y-1 sm:text-right"
            title="Kattints a +100 beállításához"
          >
            <div class="flex items-center justify-between sm:flex-row-reverse gap-1">
              <span class="text-xs font-bold text-indigo-700 dark:text-indigo-400">${axis.right.label[state.lang]} ►</span>
              <span class="text-[10px] font-mono font-semibold text-slate-400">+100</span>
            </div>
            <p class="text-[11.5px] text-slate-600 dark:text-slate-300 leading-snug">${axis.right.desc[state.lang]}</p>
            ${showTraits ? `<div class="flex flex-wrap gap-1 sm:justify-end pt-1">${rightTraitsHtml}</div>` : ''}
          </div>
        </div>
      `;

      axesList.appendChild(card);

      // Eseménykezelők
      const sliderEl = card.querySelector(`#slider-${axis.id}`);
      sliderEl.addEventListener('input', (e) => {
        state.userValues[axis.id] = parseInt(e.target.value, 10);
        updateAllVisuals();
      });

      card.querySelector(`#pole-left-${axis.id}`).addEventListener('click', () => {
        state.userValues[axis.id] = -100;
        sliderEl.value = -100;
        updateAllVisuals();
      });

      card.querySelector(`#pole-zero-${axis.id}`).addEventListener('click', () => {
        state.userValues[axis.id] = 0;
        sliderEl.value = 0;
        updateAllVisuals();
      });

      card.querySelector(`#pole-right-${axis.id}`).addEventListener('click', () => {
        state.userValues[axis.id] = 100;
        sliderEl.value = 100;
        updateAllVisuals();
      });
    }

    catSection.appendChild(axesList);
    container.appendChild(catSection);
  }
}

// ============================================================================
// 30 KÉRDÉSES KALIBRÁLÓ TESZT DOM
// ============================================================================
function buildQuizDOM() {
  const container = document.getElementById('quiz-questions-container');
  const t = I18N[state.lang];
  container.innerHTML = '';

  const options = [
    { label: t.quizOptStronglyDisagree, mult: -85, cls: 'border-rose-300 dark:border-rose-700 hover:bg-rose-50 dark:hover:bg-rose-900/30 text-rose-700 dark:text-rose-300' },
    { label: t.quizOptDisagree, mult: -45, cls: 'border-orange-300 dark:border-orange-700 hover:bg-orange-50 dark:hover:bg-orange-900/30 text-orange-700 dark:text-orange-300' },
    { label: t.quizOptNeutral, mult: 0, cls: 'border-slate-300 dark:border-slate-700 hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-300' },
    { label: t.quizOptAgree, mult: 45, cls: 'border-sky-300 dark:border-sky-700 hover:bg-sky-50 dark:hover:bg-sky-900/30 text-sky-700 dark:text-sky-300' },
    { label: t.quizOptStronglyAgree, mult: 85, cls: 'border-emerald-300 dark:border-emerald-700 hover:bg-emerald-50 dark:hover:bg-emerald-900/30 text-emerald-700 dark:text-emerald-300' }
  ];

  QUIZ_QUESTIONS.forEach((q, idx) => {
    const axis = AXES.find((a) => a.id === q.axisId);
    const card = document.createElement('div');
    card.className = 'subtle-box rounded-xl p-4 space-y-2.5';

    card.innerHTML = `
      <div class="flex items-center justify-between gap-2 text-xs text-slate-500 dark:text-slate-400">
        <span class="font-bold text-sky-600 dark:text-sky-400">#${idx + 1} / ${QUIZ_QUESTIONS.length} — ${axis ? axis.name[state.lang] : ''}</span>
        <span class="text-[11px] hidden sm:inline">${q.hint[state.lang]}</span>
      </div>
      <p class="text-sm font-semibold text-slate-900 dark:text-white leading-relaxed">${q.text[state.lang]}</p>
      <div class="grid grid-cols-2 sm:grid-cols-5 gap-2 pt-1">
        ${options
          .map((opt) => {
            const targetVal = opt.mult * q.direction;
            const isSelected = state.quizAnswered[q.id] !== undefined && state.userValues[q.axisId] === targetVal;
            return `
              <button
                type="button"
                data-val="${targetVal}"
                class="quiz-opt-btn px-2.5 py-2 rounded-lg text-xs font-semibold border transition ${opt.cls} ${
              isSelected ? 'ring-2 ring-sky-500 bg-sky-50 dark:bg-slate-800' : 'bg-white dark:bg-slate-900'
            }"
              >
                ${opt.label}
              </button>
            `;
          })
          .join('')}
      </div>
    `;

    const btns = card.querySelectorAll('.quiz-opt-btn');
    btns.forEach((btn) => {
      btn.addEventListener('click', () => {
        const targetVal = parseInt(btn.getAttribute('data-val'), 10);
        state.userValues[q.axisId] = targetVal;
        state.quizAnswered[q.id] = targetVal;

        const sliderEl = document.getElementById(`slider-${q.axisId}`);
        if (sliderEl) sliderEl.value = targetVal;

        btns.forEach((b) => b.classList.remove('ring-2', 'ring-sky-500', 'bg-sky-50', 'dark:bg-slate-800'));
        btn.classList.add('ring-2', 'ring-sky-500', 'bg-sky-50', 'dark:bg-slate-800');

        updateQuizProgressBadge();
        updateAllVisuals();
      });
    });

    container.appendChild(card);
  });

  updateQuizProgressBadge();
}

function updateQuizProgressBadge() {
  const badge = document.getElementById('quiz-progress-badge');
  if (!badge) return;
  const count = Object.keys(state.quizAnswered).length;
  badge.textContent = `${count} / ${QUIZ_QUESTIONS.length}`;
}

// ============================================================================
// VALÓS IDEJŰ VIZUÁLIS FRISSÍTÉS
// ============================================================================
function updateAllVisuals() {
  const t = I18N[state.lang];
  const activePreset = getActivePreset();
  const rankings = rankPresets(state.userValues);
  const activeRankItem = rankings.find((r) => r.preset.id === activePreset.id) || rankings[0];

  // 1. Összehasonlított Ideológia kártya frissítése
  document.getElementById('preset-detail-icon').textContent = activePreset.icon;
  document.getElementById('preset-detail-name').textContent = activePreset.name[state.lang];
  document.getElementById('preset-detail-tagline').textContent = activePreset.tagline[state.lang];
  document.getElementById('preset-detail-desc').textContent = activePreset.desc[state.lang];

  const matchEl = document.getElementById('preset-detail-match');
  matchEl.textContent = `${activeRankItem.matchPercent}%`;
  matchEl.className = `text-lg font-extrabold shrink-0 ${
    activeRankItem.matchPercent >= 75
      ? 'text-emerald-600 dark:text-emerald-400'
      : activeRankItem.matchPercent >= 55
      ? 'text-amber-600 dark:text-amber-400'
      : 'text-rose-600 dark:text-rose-400'
  }`;

  document.getElementById('stat-in-range').textContent = `${activeRankItem.inRangeCount}/30`;
  document.getElementById('stat-near-range').textContent = `${activeRankItem.nearRangeCount}/30`;
  document.getElementById('stat-out-range').textContent = `${activeRankItem.outRangeCount}/30`;

  // 2. Élő Rangsor Lista (Alapból Top 5, vagy mind a 16)
  const rankListEl = document.getElementById('match-ranking-list');
  const visibleRankings = state.showAllRanks ? rankings : rankings.slice(0, 5);

  rankListEl.innerHTML = visibleRankings
    .map((item, idx) => {
      const isSelected = item.preset.id === state.selectedPresetId;
      const barColor = item.preset.color;
      return `
        <div
          data-rank-preset="${item.preset.id}"
          class="cursor-pointer rounded-xl p-2.5 border transition flex items-center justify-between gap-2.5 ${
            isSelected
              ? 'bg-amber-50/70 dark:bg-slate-800 border-amber-400 dark:border-amber-500/70 shadow-sm'
              : 'bg-slate-50/70 dark:bg-slate-900/60 border-slate-200/80 dark:border-slate-800 hover:bg-slate-100 dark:hover:bg-slate-800/60'
          }"
        >
          <div class="flex items-center gap-2 min-w-0 flex-1">
            <span class="text-xs font-bold text-slate-400 w-4">${idx + 1}.</span>
            <span class="text-base shrink-0">${item.preset.icon}</span>
            <div class="min-w-0 flex-1">
              <div class="flex items-center justify-between gap-2">
                <span class="text-xs font-bold text-slate-800 dark:text-white truncate">${item.preset.name[state.lang]}</span>
                <span class="text-xs font-extrabold" style="color: ${barColor}">${item.matchPercent}%</span>
              </div>
              <div class="w-full h-1.5 bg-slate-200 dark:bg-slate-800 rounded-full overflow-hidden mt-1">
                <div class="h-full rounded-full transition-all duration-200" style="width: ${item.matchPercent}%; background-color: ${barColor}"></div>
              </div>
            </div>
          </div>
        </div>
      `;
    })
    .join('');

  rankListEl.querySelectorAll('[data-rank-preset]').forEach((el) => {
    el.addEventListener('click', () => {
      state.selectedPresetId = el.getAttribute('data-rank-preset');
      document.getElementById('select-preset').value = state.selectedPresetId;
      updateAllVisuals();
    });
  });

  // 3. Domináns Jellemzők (Kompakt tagek)
  const traitsListEl = document.getElementById('dominant-traits-list');
  const domTraits = extractDominantTraits(state.userValues, state.lang, 5);
  if (domTraits.length === 0) {
    traitsListEl.innerHTML = `<p class="text-xs text-slate-400 italic">${t.noDominantTraits}</p>`;
  } else {
    traitsListEl.innerHTML = domTraits
      .map(
        (dt) => `
        <div class="subtle-box rounded-lg px-2.5 py-1.5 w-full flex items-center justify-between gap-2">
          <span class="text-xs font-bold ${dt.side === 'left' ? 'text-sky-700 dark:text-sky-400' : 'text-indigo-700 dark:text-indigo-400'}">
            ${dt.poleLabel} (${formatSigned(dt.val)})
          </span>
          <span class="text-[10px] font-medium text-emerald-700 dark:text-emerald-300 bg-emerald-50 dark:bg-emerald-900/30 border border-emerald-200 dark:border-emerald-800 px-1.5 py-0.5 rounded truncate">
            ${dt.traits[0]}
          </span>
        </div>
      `
      )
      .join('');
  }

  // 4. 6 Fő Dimenzió Kompakt Sávok
  const userCatStats = computeCategoryStats(state.userValues, false);
  const presetCatStats = computeCategoryStats(activePreset, true);
  document.getElementById('cat-summary-compare-label').textContent = state.showPresetOverlay
    ? `${activePreset.icon} ${activePreset.name[state.lang]}`
    : '';

  const catGrid = document.getElementById('category-summary-grid');
  catGrid.innerHTML = CATEGORIES.map((cat) => {
    const uAvg = userCatStats[cat.id].avg;
    const pRange = presetCatStats[cat.id].range;

    const uLeftPct = uAvg < 0 ? 50 + (uAvg / 100) * 50 : 50;
    const uWidthPct = (Math.abs(uAvg) / 100) * 50;

    const rLeftPct = ((pRange[0] + 100) / 200) * 100;
    const rWidthPct = Math.max(4, ((pRange[1] - pRange[0]) / 200) * 100);

    return `
      <div class="space-y-1">
        <div class="flex items-center justify-between text-xs">
          <span class="font-semibold text-slate-700 dark:text-slate-200 truncate">${cat.icon} ${cat.name[state.lang].replace(/^[IVX]+\.\s*/, '')}</span>
          <span class="font-mono text-[11px] font-bold ${uAvg < 0 ? 'text-sky-600 dark:text-sky-400' : uAvg > 0 ? 'text-indigo-600 dark:text-indigo-400' : 'text-slate-400'}">
            ${formatSigned(uAvg)}
          </span>
        </div>
        <div class="relative h-2.5 bg-slate-200 dark:bg-slate-800 rounded-full overflow-hidden">
          <div class="absolute left-1/2 top-0 bottom-0 w-0.5 bg-slate-400 dark:bg-slate-500 z-10"></div>
          ${
            state.showPresetOverlay
              ? `<div class="absolute top-0 bottom-0 bg-amber-500/25 border-x border-amber-600 dark:border-amber-400" style="left:${rLeftPct}%; width:${rWidthPct}%"></div>`
              : ''
          }
          <div class="absolute top-0.5 bottom-0.5 rounded-full ${uAvg < 0 ? 'bg-sky-600 dark:bg-sky-400' : 'bg-indigo-600 dark:bg-indigo-400'}" style="left:${uLeftPct}%; width:${uWidthPct}%"></div>
        </div>
      </div>
    `;
  }).join('');

  // 5. Csúszkák vizuális frissítése
  for (const axis of AXES) {
    const card = document.getElementById(`axis-card-${axis.id}`);
    if (!card) continue;

    const val = state.userValues[axis.id] ?? 0;
    const pAxis = activePreset.axes[axis.id] || { range: [-25, 25], ideal: 0, weight: 1.0 };
    const evalRes = evaluateAxisMatch(val, pAxis);

    if (state.onlyOutliers && evalRes.status === 'in_range') {
      card.classList.add('hidden');
    } else {
      card.classList.remove('hidden');
    }

    card.classList.remove('in-range-highlight', 'near-range-highlight', 'out-range-highlight');
    if (state.showPresetOverlay) {
      if (evalRes.status === 'in_range') card.classList.add('in-range-highlight');
      else if (evalRes.status === 'near_range') card.classList.add('near-range-highlight');
      else card.classList.add('out-range-highlight');
    }

    const valBadge = document.getElementById(`axis-val-badge-${axis.id}`);
    if (valBadge) {
      if (val === 0) {
        valBadge.textContent = `0 (${t.neutralLabel})`;
        valBadge.className = 'text-xs font-semibold px-2.5 py-0.5 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-500 dark:text-slate-400 min-w-[64px] text-center';
      } else if (val < 0) {
        valBadge.textContent = `${val}`;
        valBadge.className = 'text-xs font-extrabold px-2.5 py-0.5 rounded-lg bg-sky-50 dark:bg-sky-900/30 border border-sky-200 dark:border-sky-800 text-sky-700 dark:text-sky-300 min-w-[64px] text-center';
      } else {
        valBadge.textContent = `+${val}`;
        valBadge.className = 'text-xs font-extrabold px-2.5 py-0.5 rounded-lg bg-indigo-50 dark:bg-indigo-900/30 border border-indigo-200 dark:border-indigo-800 text-indigo-700 dark:text-indigo-300 min-w-[64px] text-center';
      }
    }

    const zoneBadge = document.getElementById(`axis-zone-badge-${axis.id}`);
    if (zoneBadge) {
      if (!state.showPresetOverlay) {
        zoneBadge.classList.add('hidden');
      } else {
        zoneBadge.classList.remove('hidden');
        const rangeStr = `[${formatSigned(pAxis.range[0])}..${formatSigned(pAxis.range[1])}]`;
        if (evalRes.status === 'in_range') {
          zoneBadge.textContent = `${t.inRangeBadge} ${rangeStr}`;
          zoneBadge.className = 'text-[11px] font-semibold px-2 py-0.5 rounded-full bg-emerald-50 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-800';
        } else if (evalRes.status === 'near_range') {
          zoneBadge.textContent = `${t.nearRangeBadge} ${rangeStr}`;
          zoneBadge.className = 'text-[11px] font-semibold px-2 py-0.5 rounded-full bg-amber-50 dark:bg-amber-900/30 text-amber-700 dark:text-amber-300 border border-amber-200 dark:border-amber-800';
        } else {
          zoneBadge.textContent = `${t.outRangeBadge} ${rangeStr}`;
          zoneBadge.className = 'text-[11px] font-semibold px-2 py-0.5 rounded-full bg-rose-50 dark:bg-rose-900/30 text-rose-700 dark:text-rose-300 border border-rose-200 dark:border-rose-800';
        }
      }
    }

    const userFill = document.getElementById(`user-fill-${axis.id}`);
    if (userFill) {
      if (val < 0) {
        const w = (Math.abs(val) / 200) * 100;
        userFill.style.left = `${50 - w}%`;
        userFill.style.width = `${w}%`;
        userFill.style.background = '#0284c7';
      } else if (val > 0) {
        const w = (val / 200) * 100;
        userFill.style.left = '50%';
        userFill.style.width = `${w}%`;
        userFill.style.background = '#4f46e5';
      } else {
        userFill.style.left = '50%';
        userFill.style.width = '0%';
      }
    }

    const rangeBar = document.getElementById(`range-bar-${axis.id}`);
    const idealPin = document.getElementById(`ideal-pin-${axis.id}`);
    if (rangeBar && idealPin) {
      if (!state.showPresetOverlay) {
        rangeBar.classList.add('hidden');
        idealPin.classList.add('hidden');
      } else {
        rangeBar.classList.remove('hidden');
        idealPin.classList.remove('hidden');

        const leftPct = ((pAxis.range[0] + 100) / 200) * 100;
        const widthPct = Math.max(2, ((pAxis.range[1] - pAxis.range[0]) / 200) * 100);
        const idealPct = ((pAxis.ideal + 100) / 200) * 100;

        rangeBar.style.left = `${leftPct}%`;
        rangeBar.style.width = `${widthPct}%`;
        idealPin.style.left = `${idealPct}%`;
      }
    }

    // Aktív pólus doboz finom kiemelése
    const leftPoleEl = document.getElementById(`pole-left-${axis.id}`);
    const rightPoleEl = document.getElementById(`pole-right-${axis.id}`);
    if (leftPoleEl && rightPoleEl) {
      if (val < -10) {
        leftPoleEl.classList.add('ring-1', 'ring-sky-400', 'bg-sky-50/70', 'dark:bg-sky-900/20');
        rightPoleEl.classList.remove('ring-1', 'ring-indigo-400', 'bg-indigo-50/70', 'dark:bg-indigo-900/20');
      } else if (val > 10) {
        rightPoleEl.classList.add('ring-1', 'ring-indigo-400', 'bg-indigo-50/70', 'dark:bg-indigo-900/20');
        leftPoleEl.classList.remove('ring-1', 'ring-sky-400', 'bg-sky-50/70', 'dark:bg-sky-900/20');
      } else {
        leftPoleEl.classList.remove('ring-1', 'ring-sky-400', 'bg-sky-50/70', 'dark:bg-sky-900/20');
        rightPoleEl.classList.remove('ring-1', 'ring-indigo-400', 'bg-indigo-50/70', 'dark:bg-indigo-900/20');
      }
    }
  }

  // 6. Dinamikus 2D Iránytű újrarajzolása
  if (compassInstance && state.activeTab === 'compass') {
    compassInstance.render(
      state.userValues,
      state.compassX,
      state.compassY,
      state.selectedPresetId,
      state.compassAllZones,
      state.lang,
      state.isDark
    );
  }

  encodeStateToHash();
}

// ============================================================================
// TAB-VÁLTÁS ÉS ESEMÉNYKEZELŐK
// ============================================================================
function switchTab(tabId) {
  state.activeTab = tabId;
  const views = {
    sliders: document.getElementById('view-sliders'),
    compass: document.getElementById('view-compass'),
    quiz: document.getElementById('view-quiz')
  };

  Object.entries(views).forEach(([id, el]) => {
    if (id === tabId) el.classList.remove('hidden');
    else el.classList.add('hidden');
  });

  document.querySelectorAll('.tab-btn').forEach((btn) => {
    if (btn.dataset.tab === tabId) {
      btn.className = 'tab-btn px-3.5 py-1.5 rounded-lg text-xs sm:text-sm font-semibold transition-all bg-white dark:bg-slate-900 text-sky-600 dark:text-sky-400 shadow-sm';
    } else {
      btn.className = 'tab-btn px-3.5 py-1.5 rounded-lg text-xs sm:text-sm font-semibold transition-all text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white';
    }
  });

  if (tabId === 'compass') {
    setTimeout(() => updateAllVisuals(), 20);
  }
}

function initApp() {
  loadStateFromHash();
  applyTheme();

  const canvasEl = document.getElementById('compass-canvas');
  compassInstance = new DynamicCompass(canvasEl, (clickedPresetId) => {
    state.selectedPresetId = clickedPresetId;
    document.getElementById('select-preset').value = clickedPresetId;
    updateAllVisuals();
  });

  populatePresetDropdown();
  populateCompassDropdowns();
  buildCategoryFilterPills();
  buildSlidersDOM();
  buildQuizDOM();
  applyStaticTranslations();
  updateAllVisuals();

  // Fő tab gombok
  document.querySelectorAll('.tab-btn').forEach((btn) => {
    btn.addEventListener('click', () => switchTab(btn.dataset.tab));
  });

  // Téma váltó (Light / Dark)
  document.getElementById('btn-theme').addEventListener('click', () => {
    state.isDark = !state.isDark;
    applyTheme();
    updateAllVisuals();
  });

  // Kategória Előző / Következő gombok
  document.getElementById('btn-prev-cat').addEventListener('click', () => {
    const idx = CATEGORIES.findIndex((c) => c.id === state.selectedCategory);
    if (idx > 0) {
      state.selectedCategory = CATEGORIES[idx - 1].id;
      buildCategoryFilterPills();
      buildSlidersDOM();
      updateAllVisuals();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  });

  document.getElementById('btn-next-cat').addEventListener('click', () => {
    const idx = CATEGORIES.findIndex((c) => c.id === state.selectedCategory);
    if (idx >= 0 && idx < CATEGORIES.length - 1) {
      state.selectedCategory = CATEGORIES[idx + 1].id;
      buildCategoryFilterPills();
      buildSlidersDOM();
      updateAllVisuals();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      switchTab('compass');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  });

  // Részletes leírások globális kapcsoló
  document.getElementById('chk-show-details').addEventListener('change', (e) => {
    state.showDetailsGlobal = e.target.checked;
    buildSlidersDOM();
    updateAllVisuals();
  });

  // Top 5 vs Összes (16) rangsor kapcsoló
  document.getElementById('btn-toggle-all-ranks').addEventListener('click', () => {
    state.showAllRanks = !state.showAllRanks;
    applyStaticTranslations();
    updateAllVisuals();
  });

  // Ideológia legördülő
  document.getElementById('select-preset').addEventListener('change', (e) => {
    state.selectedPresetId = e.target.value;
    updateAllVisuals();
  });

  // Ideológia értékek betöltése a csúszkákra
  document.getElementById('btn-load-preset-values').addEventListener('click', () => {
    const preset = getActivePreset();
    for (const axis of AXES) {
      const pAxis = preset.axes[axis.id];
      const idealVal = pAxis ? pAxis.ideal : 0;
      state.userValues[axis.id] = idealVal;
      const sliderEl = document.getElementById(`slider-${axis.id}`);
      if (sliderEl) sliderEl.value = idealVal;
    }
    updateAllVisuals();
    showToast(I18N[state.lang].toastPresetLoaded);
  });

  // Sáv-vetítés KI/BE kapcsolása
  document.getElementById('btn-toggle-overlay').addEventListener('click', () => {
    state.showPresetOverlay = !state.showPresetOverlay;
    applyStaticTranslations();
    updateAllVisuals();
  });

  // Csak eltérések szűrő
  document.getElementById('chk-only-outliers').addEventListener('change', (e) => {
    state.onlyOutliers = e.target.checked;
    updateAllVisuals();
  });

  // Nullázás gomb
  document.getElementById('btn-reset').addEventListener('click', () => {
    for (const axis of AXES) {
      state.userValues[axis.id] = 0;
      const sliderEl = document.getElementById(`slider-${axis.id}`);
      if (sliderEl) sliderEl.value = 0;
    }
    state.quizAnswered = {};
    buildQuizDOM();
    updateAllVisuals();
  });

  // Véletlen profil gomb
  document.getElementById('btn-random').addEventListener('click', () => {
    for (const axis of AXES) {
      const rnd = Math.round((Math.random() * 180 - 90) / 5) * 5;
      state.userValues[axis.id] = rnd;
      const sliderEl = document.getElementById(`slider-${axis.id}`);
      if (sliderEl) sliderEl.value = rnd;
    }
    updateAllVisuals();
  });

  // Megosztás gomb
  document.getElementById('btn-share').addEventListener('click', () => {
    const url = encodeStateToHash();
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(url);
    }
    showToast(I18N[state.lang].toastCopied);
  });

  // Nyelvváltó gomb (HU / EN)
  document.getElementById('btn-lang').addEventListener('click', () => {
    state.lang = state.lang === 'hu' ? 'en' : 'hu';
    document.documentElement.lang = state.lang;
    populatePresetDropdown();
    populateCompassDropdowns();
    buildCategoryFilterPills();
    buildSlidersDOM();
    buildQuizDOM();
    applyStaticTranslations();
    updateAllVisuals();
  });

  // 2D Iránytű X/Y tengely választók
  document.getElementById('compass-select-x').addEventListener('change', (e) => {
    state.compassX = e.target.value;
    updateAllVisuals();
  });

  document.getElementById('compass-select-y').addEventListener('change', (e) => {
    state.compassY = e.target.value;
    updateAllVisuals();
  });

  document.getElementById('chk-compass-all-zones').addEventListener('change', (e) => {
    state.compassAllZones = e.target.checked;
    updateAllVisuals();
  });

  document.querySelectorAll('.compass-quick-btn').forEach((btn) => {
    btn.addEventListener('click', () => {
      state.compassX = btn.getAttribute('data-x');
      state.compassY = btn.getAttribute('data-y');
      document.getElementById('compass-select-x').value = state.compassX;
      document.getElementById('compass-select-y').value = state.compassY;
      updateAllVisuals();
    });
  });

  document.getElementById('btn-finish-quiz').addEventListener('click', () => {
    switchTab('compass');
  });

  window.addEventListener('resize', () => {
    if (state.activeTab === 'compass') {
      updateAllVisuals();
    }
  });
}

document.addEventListener('DOMContentLoaded', initApp);
