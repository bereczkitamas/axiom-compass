// Értékelő, Távolság- és Egyezésszámító Motor (Range-Aware Weighted Matcher)
import { AXES, CATEGORIES } from './data-axes.js';
import { PRESETS } from './data-presets.js';

/**
 * Kiszámítja egyetlen tengelyen a felhasználói érték és az ideológiai sáv illeszkedését.
 */
export function evaluateAxisMatch(userVal, axisDef) {
  const [min, max] = axisDef.range;
  const ideal = axisDef.ideal;
  const weight = axisDef.weight || 1.0;

  let status = 'in_range';
  let penalty = 0;
  let boundaryDelta = 0;

  if (userVal >= min && userVal <= max) {
    status = 'in_range';
    // Sávon belül csak minimális eltérés az ideáltípustól
    penalty = Math.abs(userVal - ideal) * 0.18;
    boundaryDelta = 0;
  } else {
    boundaryDelta = userVal < min ? (userVal - min) : (userVal - max);
    const absOut = Math.abs(boundaryDelta);
    const absIdeal = Math.abs(userVal - ideal);
    penalty = absOut * 0.85 + absIdeal * 0.22;
    status = absOut <= 22 ? 'near_range' : 'out_of_range';
  }

  const score = Math.max(0, Math.min(100, 100 - (penalty / 135) * 100));
  return {
    score,
    status,
    boundaryDelta,
    idealDelta: userVal - ideal,
    weight
  };
}

/**
 * Kiszámítja az összes előre definiált ideológiára az egyezési százalékot és részleteket.
 */
export function rankPresets(userValues) {
  const results = PRESETS.map((preset) => {
    let weightedScoreSum = 0;
    let totalWeight = 0;
    let inRangeCount = 0;
    let nearRangeCount = 0;
    let outRangeCount = 0;
    const axisBreakdown = {};

    for (const axis of AXES) {
      const userVal = userValues[axis.id] ?? 0;
      const presetAxis = preset.axes[axis.id] || { range: [-25, 25], ideal: 0, weight: 1.0 };
      const evalRes = evaluateAxisMatch(userVal, presetAxis);

      axisBreakdown[axis.id] = evalRes;
      weightedScoreSum += evalRes.score * evalRes.weight;
      totalWeight += evalRes.weight;

      if (evalRes.status === 'in_range') inRangeCount++;
      else if (evalRes.status === 'near_range') nearRangeCount++;
      else outRangeCount++;
    }

    const matchPercent = Math.round(weightedScoreSum / totalWeight);

    return {
      preset,
      matchPercent,
      inRangeCount,
      nearRangeCount,
      outRangeCount,
      axisBreakdown
    };
  });

  results.sort((a, b) => {
    if (b.matchPercent !== a.matchPercent) return b.matchPercent - a.matchPercent;
    return b.inRangeCount - a.inRangeCount;
  });

  return results;
}

/**
 * Kiszámítja a 6 fő dimenzió (kategória) átlagértékét (-100 és +100 között)
 * akár a felhasználó, akár egy preset számára.
 */
export function computeCategoryStats(valuesMapOrPreset, isPreset = false) {
  const stats = {};

  for (const cat of CATEGORIES) {
    const catAxes = AXES.filter((a) => a.category === cat.id);
    let sum = 0;
    let minSum = 0;
    let maxSum = 0;

    for (const axis of catAxes) {
      if (isPreset) {
        const pAxis = valuesMapOrPreset.axes[axis.id] || { range: [-20, 20], ideal: 0 };
        sum += pAxis.ideal;
        minSum += pAxis.range[0];
        maxSum += pAxis.range[1];
      } else {
        const val = valuesMapOrPreset[axis.id] ?? 0;
        sum += val;
        minSum += val;
        maxSum += val;
      }
    }

    const count = catAxes.length || 1;
    stats[cat.id] = {
      avg: Math.round(sum / count),
      range: [Math.round(minSum / count), Math.round(maxSum / count)]
    };
  }

  return stats;
}

/**
 * EU5 "Societal Values" stílusú aktív módosítók / jellemzők kinyerése
 * a felhasználó legkarakteresebb tengelyei alapján.
 */
export function extractDominantTraits(userValues, lang = 'hu', limit = 8) {
  const rankedAxes = AXES.map((axis) => {
    const val = userValues[axis.id] ?? 0;
    return {
      axis,
      val,
      absVal: Math.abs(val),
      side: val < 0 ? 'left' : 'right'
    };
  })
    .filter((item) => item.absVal >= 25)
    .sort((a, b) => b.absVal - a.absVal)
    .slice(0, limit);

  return rankedAxes.map((item) => {
    const pole = item.side === 'left' ? item.axis.left : item.axis.right;
    const intensity =
      item.absVal >= 75
        ? lang === 'hu' ? 'Fanatikus / Radikális' : 'Radical / Absolutist'
        : item.absVal >= 50
        ? lang === 'hu' ? 'Erős' : 'Strong'
        : lang === 'hu' ? 'Mérsékelt' : 'Moderate';

    return {
      axisId: item.axis.id,
      axisName: item.axis.name[lang],
      poleLabel: pole.label[lang],
      traits: pole.traits[lang],
      val: item.val,
      intensity,
      side: item.side
    };
  });
}
