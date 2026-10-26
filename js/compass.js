// Interaktív Dinamikus 2D Érték-Iránytű (Canvas) – Light-First & Dark Mode támogatással
import { AXES, CATEGORIES } from './data-axes.js';
import { PRESETS } from './data-presets.js';
import { computeCategoryStats } from './matcher.js';

export function resolveCompassDimension(selector, userValues, lang = 'hu') {
  if (selector.startsWith('cat:')) {
    const catId = selector.replace('cat:', '');
    const cat = CATEGORIES.find((c) => c.id === catId) || CATEGORIES[0];
    const userCatStats = computeCategoryStats(userValues, false);

    return {
      id: selector,
      isCategory: true,
      title: cat.name[lang],
      leftLabel: cat.leftPoleLabel[lang],
      rightLabel: cat.rightPoleLabel[lang],
      userVal: userCatStats[cat.id].avg,
      getPresetCoords: (preset) => {
        const pStats = computeCategoryStats(preset, true);
        return {
          ideal: pStats[cat.id].avg,
          range: pStats[cat.id].range
        };
      }
    };
  } else {
    const axis = AXES.find((a) => a.id === selector) || AXES[0];
    return {
      id: selector,
      isCategory: false,
      title: axis.name[lang],
      leftLabel: axis.left.label[lang],
      rightLabel: axis.right.label[lang],
      userVal: userValues[axis.id] ?? 0,
      getPresetCoords: (preset) => {
        const pAxis = preset.axes[axis.id] || { range: [-25, 25], ideal: 0 };
        return {
          ideal: pAxis.ideal,
          range: pAxis.range
        };
      }
    };
  }
}

export class DynamicCompass {
  constructor(canvasEl, onSelectPreset) {
    this.canvas = canvasEl;
    this.ctx = canvasEl.getContext('2d');
    this.onSelectPreset = onSelectPreset;
    this.hitTargets = [];
    this.hoveredPresetId = null;

    this.bindEvents();
  }

  bindEvents() {
    this.canvas.addEventListener('mousemove', (e) => {
      const rect = this.canvas.getBoundingClientRect();
      const mx = e.clientX - rect.left;
      const my = e.clientY - rect.top;

      let found = null;
      for (const t of this.hitTargets) {
        const dx = mx - t.x;
        const dy = my - t.y;
        if (Math.sqrt(dx * dx + dy * dy) <= t.r + 5) {
          found = t.id;
          break;
        }
      }

      if (found !== this.hoveredPresetId) {
        this.hoveredPresetId = found;
        this.canvas.style.cursor = found ? 'pointer' : 'default';
        if (this.lastRenderArgs) {
          this.render(...this.lastRenderArgs);
        }
      }
    });

    this.canvas.addEventListener('click', () => {
      if (this.hoveredPresetId && this.onSelectPreset) {
        this.onSelectPreset(this.hoveredPresetId);
      }
    });
  }

  render(userValues, xSelector, ySelector, activePresetId, showAllZones, lang = 'hu', isDark = false) {
    this.lastRenderArgs = [userValues, xSelector, ySelector, activePresetId, showAllZones, lang, isDark];

    const dpr = window.devicePixelRatio || 1;
    const rect = this.canvas.getBoundingClientRect();
    const width = rect.width || 620;
    const height = rect.height || 520;

    if (this.canvas.width !== width * dpr || this.canvas.height !== height * dpr) {
      this.canvas.width = width * dpr;
      this.canvas.height = height * dpr;
    }

    const ctx = this.ctx;
    ctx.save();
    ctx.scale(dpr, dpr);

    const pad = 52;
    const plotW = width - pad * 2;
    const plotH = height - pad * 2;

    const toX = (val) => pad + ((val + 100) / 200) * plotW;
    const toY = (val) => pad + ((100 - val) / 200) * plotH;

    const xDim = resolveCompassDimension(xSelector, userValues, lang);
    const yDim = resolveCompassDimension(ySelector, userValues, lang);

    // Háttér (Light vs Dark)
    ctx.fillStyle = isDark ? '#0f172a' : '#ffffff';
    ctx.fillRect(0, 0, width, height);

    const midX = toX(0);
    const midY = toY(0);

    // 4 Kvadráns finom pasztell színezése
    const qAlpha = isDark ? 0.06 : 0.055;
    ctx.fillStyle = `rgba(239, 68, 68, ${qAlpha})`;
    ctx.fillRect(pad, pad, plotW / 2, plotH / 2);
    ctx.fillStyle = `rgba(59, 130, 246, ${qAlpha})`;
    ctx.fillRect(midX, pad, plotW / 2, plotH / 2);
    ctx.fillStyle = `rgba(16, 185, 129, ${qAlpha})`;
    ctx.fillRect(pad, midY, plotW / 2, plotH / 2);
    ctx.fillStyle = `rgba(245, 158, 11, ${qAlpha})`;
    ctx.fillRect(midX, midY, plotW / 2, plotH / 2);

    // Rácsvonalak
    for (let v = -100; v <= 100; v += 25) {
      const gx = toX(v);
      const gy = toY(v);
      if (v === 0) {
        ctx.strokeStyle = isDark ? 'rgba(148, 163, 184, 0.5)' : 'rgba(71, 85, 105, 0.45)';
        ctx.lineWidth = 1.8;
      } else {
        ctx.strokeStyle = isDark ? 'rgba(51, 65, 85, 0.5)' : 'rgba(203, 213, 225, 0.7)';
        ctx.lineWidth = 1;
      }

      ctx.beginPath();
      ctx.moveTo(gx, pad);
      ctx.lineTo(gx, pad + plotH);
      ctx.stroke();

      ctx.beginPath();
      ctx.moveTo(pad, gy);
      ctx.lineTo(pad + plotW, gy);
      ctx.stroke();
    }

    // Keret
    ctx.strokeStyle = isDark ? 'rgba(100, 116, 139, 0.5)' : '#cbd5e1';
    ctx.lineWidth = 1.5;
    ctx.strokeRect(pad, pad, plotW, plotH);

    // 1. Ideológiai Tartomány-Zónák (Range Ellipses)
    for (const preset of PRESETS) {
      const isSelected = preset.id === activePresetId;
      const isHovered = preset.id === this.hoveredPresetId;

      if (!showAllZones && !isSelected && !isHovered) continue;

      const xCoord = xDim.getPresetCoords(preset);
      const yCoord = yDim.getPresetCoords(preset);

      const x1 = toX(xCoord.range[0]);
      const x2 = toX(xCoord.range[1]);
      const y1 = toY(yCoord.range[1]);
      const y2 = toY(yCoord.range[0]);

      const rx = Math.max(8, (x2 - x1) / 2);
      const ry = Math.max(8, (y2 - y1) / 2);
      const cx = (x1 + x2) / 2;
      const cy = (y1 + y2) / 2;

      ctx.save();
      ctx.beginPath();
      ctx.ellipse(cx, cy, rx, ry, 0, 0, Math.PI * 2);

      if (isSelected || isHovered) {
        ctx.fillStyle = this.hexToRgba(preset.color, isDark ? 0.22 : 0.16);
        ctx.strokeStyle = this.hexToRgba(preset.color, 0.85);
        ctx.lineWidth = 2;
        ctx.setLineDash([5, 3]);
      } else {
        ctx.fillStyle = this.hexToRgba(preset.color, isDark ? 0.06 : 0.05);
        ctx.strokeStyle = this.hexToRgba(preset.color, isDark ? 0.24 : 0.28);
        ctx.lineWidth = 1;
      }

      ctx.fill();
      ctx.stroke();
      ctx.restore();
    }

    // 2. Ideológia középpontok (Ideal pontok)
    this.hitTargets = [];

    for (const preset of PRESETS) {
      const xCoord = xDim.getPresetCoords(preset);
      const yCoord = yDim.getPresetCoords(preset);

      const px = toX(xCoord.ideal);
      const py = toY(yCoord.ideal);
      const isSelected = preset.id === activePresetId;
      const isHovered = preset.id === this.hoveredPresetId;
      const radius = isSelected || isHovered ? 11 : 7.5;

      this.hitTargets.push({ id: preset.id, x: px, y: py, r: radius });

      if (isSelected || isHovered) {
        ctx.beginPath();
        ctx.arc(px, py, radius + 5, 0, Math.PI * 2);
        ctx.fillStyle = this.hexToRgba(preset.color, 0.25);
        ctx.fill();
      }

      ctx.beginPath();
      ctx.arc(px, py, radius, 0, Math.PI * 2);
      ctx.fillStyle = preset.color;
      ctx.fill();
      ctx.lineWidth = isSelected || isHovered ? 2.5 : 1.5;
      ctx.strokeStyle = '#ffffff';
      ctx.stroke();

      ctx.font = isSelected || isHovered ? '700 11.5px Inter, system-ui, sans-serif' : '500 10.5px Inter, system-ui, sans-serif';
      ctx.fillStyle = isDark
        ? isSelected || isHovered ? '#ffffff' : 'rgba(226, 232, 240, 0.88)'
        : isSelected || isHovered ? '#0f172a' : '#334155';
      ctx.textAlign = 'center';
      ctx.fillText(preset.name[lang], px, py - radius - 5);
    }

    // 3. FELHASZNÁLÓ SAJÁT POZÍCIÓJA
    const ux = toX(xDim.userVal);
    const uy = toY(yDim.userVal);

    ctx.save();
    ctx.strokeStyle = isDark ? 'rgba(56, 189, 248, 0.45)' : 'rgba(2, 132, 199, 0.4)';
    ctx.lineWidth = 1.2;
    ctx.setLineDash([4, 4]);
    ctx.beginPath();
    ctx.moveTo(ux, pad);
    ctx.lineTo(ux, pad + plotH);
    ctx.moveTo(pad, uy);
    ctx.lineTo(pad + plotW, uy);
    ctx.stroke();
    ctx.restore();

    ctx.beginPath();
    ctx.arc(ux, uy, 15, 0, Math.PI * 2);
    ctx.fillStyle = isDark ? 'rgba(56, 189, 248, 0.25)' : 'rgba(2, 132, 199, 0.2)';
    ctx.fill();

    ctx.beginPath();
    ctx.arc(ux, uy, 8.5, 0, Math.PI * 2);
    ctx.fillStyle = '#0284c7';
    ctx.fill();
    ctx.lineWidth = 2.5;
    ctx.strokeStyle = '#ffffff';
    ctx.stroke();

    const youLabel = lang === 'hu' ? `TE (${xDim.userVal}, ${yDim.userVal})` : `YOU (${xDim.userVal}, ${yDim.userVal})`;
    ctx.font = '700 11.5px Inter, system-ui, sans-serif';
    const textWidth = ctx.measureText(youLabel).width;
    ctx.fillStyle = isDark ? 'rgba(15, 23, 42, 0.92)' : 'rgba(255, 255, 255, 0.95)';
    ctx.fillRect(ux - textWidth / 2 - 6, uy + 12, textWidth + 12, 20);
    ctx.strokeStyle = '#0284c7';
    ctx.lineWidth = 1.2;
    ctx.strokeRect(ux - textWidth / 2 - 6, uy + 12, textWidth + 12, 20);

    ctx.fillStyle = isDark ? '#38bdf8' : '#0369a1';
    ctx.textAlign = 'center';
    ctx.fillText(youLabel, ux, uy + 26);

    // 4. Tengelyfeliratok a 4 oldalon
    ctx.font = '700 12px Inter, system-ui, sans-serif';
    ctx.fillStyle = isDark ? '#f8fafc' : '#0f172a';
    ctx.textAlign = 'center';
    ctx.fillText(`▲ +100: ${yDim.rightLabel}`, midX, 22);
    ctx.fillText(`▼ -100: ${yDim.leftLabel}`, midX, height - 14);

    ctx.save();
    ctx.translate(18, midY);
    ctx.rotate(-Math.PI / 2);
    ctx.fillText(`◄ -100: ${xDim.leftLabel}`, 0, 0);
    ctx.restore();

    ctx.save();
    ctx.translate(width - 18, midY);
    ctx.rotate(Math.PI / 2);
    ctx.fillText(`► +100: ${xDim.rightLabel}`, 0, 0);
    ctx.restore();

    ctx.restore();
  }

  hexToRgba(hex, alpha) {
    const clean = hex.replace('#', '');
    const r = parseInt(clean.substring(0, 2), 16) || 100;
    const g = parseInt(clean.substring(2, 4), 16) || 100;
    const b = parseInt(clean.substring(4, 6), 16) || 200;
    return `rgba(${r}, ${g}, ${b}, ${alpha})`;
  }
}
