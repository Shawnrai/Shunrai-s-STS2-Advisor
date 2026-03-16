const GRADE_VALS = {S:5,A:4,B:3,C:2,D:1,F:0};
const SCORE_GRADE = s => s>=4.5?'S':s>=3.5?'A':s>=2.5?'B':s>=1.5?'C':s>=0.5?'D':'F';

const SCALING_TAGS = new Set(['strength','scaling','focus','stellar','stars','soul','doom','infinite',
  'permanent_scaling','star_gain','poison_amplify','shiv_amplify','orb','claw']);


function ensureDbNames() {
  if (typeof DB !== 'object' || !DB || typeof DB.cards !== 'object') return;
  const seen = new Set();
  const names = [];
  for (const [char, cards] of Object.entries(DB.cards)) {
    if (!cards || typeof cards !== 'object') continue;
    for (const card of Object.values(cards)) {
      if (!card || !card.id) continue;
      const key = `${char}::${card.id}`;
      if (seen.has(key)) continue;
      seen.add(key);
      names.push({ n: card.id, c: char });
    }
  }
  names.sort((a, b) => a.c.localeCompare(b.c) || a.n.localeCompare(b.n));
  DB.names = names;
}

ensureDbNames();


function isStarter(cardName) {
  const n = cardName.toLowerCase();
  if (STARTER_NAMES.has(n)) return true;
  if ((n === 'strike' || n === 'strike+') && !n.includes(' ')) return true;
  if ((n === 'defend' || n === 'defend+') && !n.includes(' ')) return true;
  return false;
}

function analyzeDeck(char, deckCards) {
  const tagCounts = {};
  const mechCounts = {};

  // Starters and bare D-tier filler don't count toward archetype detection
  const meaningfulCards = deckCards.filter(card => {
    if (isStarter(card.name)) return false;
    const data = getCard(char, card.name);
    if (data && data.tier === 'D' && (data.builds||[]).length === 0) return false;
    return true;
  });

  for (const card of meaningfulCards) {
    const data = getCard(char, card.name);
    const tags = data ? data.syn : [];
    const mechs = data ? (data.mech || []) : [];
    for (const t of tags) tagCounts[t] = (tagCounts[t]||0) + 1;
    for (const m of mechs) mechCounts[m] = (mechCounts[m]||0) + 1;
  }

  const allTagCounts = {};
  const allMechCounts = {};
  for (const card of deckCards) {
    const data = getCard(char, card.name);
    const tags = data ? data.syn : [];
    const mechs = data ? (data.mech || []) : [];
    for (const t of tags) allTagCounts[t] = (allTagCounts[t]||0) + 1;
    for (const m of mechs) allMechCounts[m] = (allMechCounts[m]||0) + 1;
  }

  // Union count: each card contributes at most 1 per tag (no double-counting syn+mech overlap)
  const allUnionCounts = {};
  for (const card of meaningfulCards) {
    const data = getCard(char, card.name);
    const allTags = new Set([...(data?.syn||[]), ...(data?.mech||[])]);
    for (const t of allTags) allUnionCounts[t] = (allUnionCounts[t]||0) + 1;
  }

  const archs = (DB.archetypes[char] || []);
  const detected = [];
  for (const arch of archs) {
    let coreCount = 0, supportCount = 0;
    for (const t of arch.core) {
      coreCount += (tagCounts[t]||0) + (mechCounts[t]||0);
    }
    for (const t of arch.support) {
      supportCount += (tagCounts[t]||0) + (mechCounts[t]||0);
    }
    const coreThresh = arch.coreThresh ?? arch.threshold ?? 3;
    const supportThresh = arch.supportThresh ?? Math.max(1, Math.floor(coreThresh / 2));
    const meetsCore = coreCount >= coreThresh;
    const meetsPartial = coreCount >= Math.ceil(coreThresh * 0.6) && supportCount >= supportThresh;
    if (meetsCore || meetsPartial) {
      const strength = Math.min(1, (coreCount / arch.coreThresh) * 0.65 + (supportCount / Math.max(arch.supportThresh,1)) * 0.35);
      detected.push({arch, strength: Math.min(1, strength)});
    }
  }
  detected.sort((a,b) => b.strength - a.strength);

  return {detected, tagCounts: allTagCounts, mechCounts: allMechCounts, total: deckCards.length,
    meaningfulCount: meaningfulCards.length,
    isUndefined: detected.length === 0,
    hasTag: t => (allTagCounts[t]||0) > 0,
    hasMech: m => (allMechCounts[m]||0) > 0,
    tagCount: t => (allTagCounts[t]||0),
    mechCount: m => (allMechCounts[m]||0),
    unionCount: t => (allUnionCounts[t]||0),
  };
}

function scoreCard(cardName, char, da, floor, act, deckCards, encounter) {
  encounter = encounter || 'normal';
  const data = getCard(char, cardName);
  if (!data) {
    return {name:cardName, base:'C', finalScore:2, finalGrade:'C', notes:'Unknown card', synReasons:[], antiReasons:[], isBest:false};
  }

  const base = GRADE_VALS[data.tier] ?? 2;
  let score = base;
  const synR = [], antiR = [];

  // Synergy - graduated with diminishing returns + saturation
  const DIMN = [1.0, 0.6, 0.3];
  let matchCount = 0;
  for (const {arch, strength} of da.detected) {
    if (matchCount >= DIMN.length) break;
    for (const tag of data.syn) {
      if (arch.core.includes(tag) || arch.support.includes(tag) || arch.id === tag) {
        const satCount = da.unionCount(tag);
        const satMult = satCount >= 7 ? 0.35 : satCount >= 4 ? 0.65 : 1.0;
        const boost = (0.3 + strength * 0.5) * DIMN[matchCount] * satMult;
        score += boost;
        const satNote = satMult < 1 ? ` (saturated)` : '';
        synR.push(`+${boost.toFixed(1)} fits ${arch.name}${satNote}`);
        matchCount++;
        break;
      }
    }
  }

  // Anti-synergy - penalize cards that conflict with detected archetypes
  let antiDelta = 0;
  for (const {arch, strength} of da.detected) {
    for (const tag of (data.anti || [])) {
      if (arch.core.includes(tag) || arch.support.includes(tag)) {
        const pen = -(0.4 + strength * 0.5);
        score += pen; antiDelta += pen;
        antiR.push(`${pen.toFixed(1)} conflicts with ${arch.name} (has ${tag})`);
        break;
      }
    }
  }
  for (const tag of (data.anti || [])) {
    if (da.unionCount(tag) >= 2) {
      const pen = -0.7;
      score += pen; antiDelta += pen;
      antiR.push(`${pen.toFixed(1)} actively hurts your ${tag} cards`);
    }
  }
  if (antiDelta < -1.5) score += (-1.5 - antiDelta); // cap total anti penalty

  // Combo bonus
  const deckNameSet = new Set(deckCards.map(c => norm(c.name)));
  let comboBonusTotal = 0;
  for (const combo of DB.combos) {
    if (!deckNameSet.has(norm(combo.deckCard))) continue;
    if (norm(combo.offeredCard) === norm(cardName)) {
      score += combo.bonus; comboBonusTotal += combo.bonus;
      synR.push(`▲ +${combo.bonus.toFixed(1)} ${combo.reason}`);
    }
  }

  // Build fit bonus
  let gotFitBonus = false;
  if (data.builds && data.builds.length > 0 && da.detected.length > 0) {
    for (const {arch, strength} of da.detected) {
      if (data.builds.includes(arch.id)) {
        const fitBonus = 0.3 + strength * 0.5;
        score += fitBonus;
        synR.push(`+${fitBonus.toFixed(1)} core ${arch.name} card`);
        gotFitBonus = true;
        break;
      }
    }
  }

  // Archetype misfit penalty - card belongs to a different build
  if (!gotFitBonus && da.detected.length > 0 && data.builds && data.builds.length > 0) {
    const topArch = da.detected[0];
    if (topArch.strength >= 0.4) {
      const specificBuilds = data.builds.filter(b => b !== 'any');
      const fitsAnyDetected = specificBuilds.length === 0
        || specificBuilds.some(b => da.detected.some(d => d.arch.id === b));
      if (!fitsAnyDetected && specificBuilds.length > 0) {
        const pen = -(0.4 + topArch.strength * 0.5);
        score += pen;
        antiR.push(`${pen.toFixed(1)} ${specificBuilds[0]} card doesn't fit your ${topArch.arch.name} build`);
      }
    }
  }

  // Role balance (engine / generator / payoff)
  if (data.role && da.detected.length > 0) {
    const topArch = da.detected[0];
    const archId  = topArch.arch.id;

    const enginesInDeck = deckCards.filter(c => {
      const d = getCard(char, c.name);
      return d && d.role === 'engine' && (d.builds||[]).some(b => b===archId||b==='any');
    }).length;
    const generatorsInDeck = deckCards.filter(c => {
      const d = getCard(char, c.name);
      return d && d.role === 'generator' && (d.builds||[]).some(b => b===archId||b==='any');
    }).length;
    const payoffsInDeck = deckCards.filter(c => {
      const d = getCard(char, c.name);
      return d && d.role === 'payoff' && (d.builds||[]).some(b => b===archId||b==='any');
    }).length;

    const floorEarly = floor <= 8;
    const floorLate  = floor >= 20;

    // 2+ generators counts as a functional economy even without a dedicated engine card
    const effectiveEngines = enginesInDeck + (generatorsInDeck >= 2 ? 1 : 0);

    if (data.role === 'payoff') {
      if (effectiveEngines === 0) {
        score -= 1.5;
        antiR.push(`-1.5 no engine yet - payoff is a dead card without setup`);
      } else if (effectiveEngines === 1 && generatorsInDeck < 2) {
        score -= 0.7;
        antiR.push(`-0.7 engine exists but only ${generatorsInDeck} generators - payoff won't fire often`);
      } else if (effectiveEngines >= 1 && generatorsInDeck >= 2) {
        const bon = floorLate ? 0.5 : 0.2;
        score += bon;
        synR.push(`+${bon.toFixed(1)} engine and generators online - payoff fires consistently`);
      }
      if (payoffsInDeck >= 4) {
        score -= 0.4;
        antiR.push(`-0.4 already ${payoffsInDeck} payoffs - add more generators/engines`);
      }
    }

    if (data.role === 'engine') {
      if (enginesInDeck === 0) {
        const bon = floorEarly ? 0.6 : 0.3;
        score += bon;
        synR.push(`+${bon.toFixed(1)} first engine card - unlocks the whole build`);
      } else if (enginesInDeck === 1) {
        score += 0.1;
        synR.push(`+0.1 second engine adds consistency`);
      } else {
        score -= 0.4;
        antiR.push(`-0.4 already ${enginesInDeck} engines - extra engine is redundant`);
      }
    }

    if (data.role === 'generator') {
      if (enginesInDeck === 0 && generatorsInDeck === 0) {
        score -= 0.1;
        antiR.push(`-0.1 first generator - pick up payoffs soon`);
      } else if (enginesInDeck === 0 && generatorsInDeck >= 4) {
        score -= 0.5;
        antiR.push(`-0.5 already ${generatorsInDeck} generators with no engine - pick up payoffs instead`);
      } else if (generatorsInDeck >= 5) {
        score -= 0.5;
        antiR.push(`-0.5 already ${generatorsInDeck} generators - clogs hand`);
      } else if (generatorsInDeck >= 3 && payoffsInDeck === 0) {
        antiR.push(`(${generatorsInDeck} generators, 0 payoffs - look for payoff cards now)`);
      } else if (generatorsInDeck < 4) {
        score += 0.2;
        synR.push(`+0.2 adds to ${topArch.arch.name} generation`);
      }
    }
  }

  // Floor curve - continuous over 57 floors
  const hasSynScaling = data.syn.some(t => SCALING_TAGS.has(t));
  const hasMechScaling = (data.mech||[]).some(t => SCALING_TAGS.has(t));
  const isScaling = hasSynScaling || hasMechScaling;
  const hasDefense = data.syn.includes('block') || data.syn.includes('dexterity');
  const runProgress = Math.min(1.0, (floor - 1) / 56);
  const flexValue  = Math.max(0, 1.0 - runProgress * 3.5);
  const scaleValue = Math.max(0, (runProgress - 0.33) * 1.8);
  const defValue   = Math.sin(runProgress * Math.PI) * 0.8;
  if (da.isUndefined && data.syn.length >= 2) {
    const fb = +(flexValue * 0.4).toFixed(1);
    if (fb >= 0.1) { score += fb; synR.push(`+${fb} flexible pick (early run)`); }
  }
  if (isScaling && !data.role) {
    const sb = +(scaleValue * 0.5).toFixed(1);
    if (sb >= 0.1) { score += sb; synR.push(`+${sb} scaling card, late run`); }
  }
  if (!da.isUndefined && hasDefense) {
    const db_ = +(defValue * 0.25).toFixed(1);
    if (db_ >= 0.1) { score += db_; synR.push(`+${db_} defense matters mid-run`); }
  }

  // Act phase modifiers
  if (act === 1) {
    if ((data.builds||[]).includes('any') && da.isUndefined) {
      score += 0.2; synR.push('+0.2 flexible card, good for open Act 1');
    }
    if (data.role === 'engine') {
      score += 0.3; synR.push('+0.3 engine card - set up your build in Act 1');
    }
    if (data.role === 'payoff') {
      const enginesNow = deckCards.filter(c => { const d=getCard(char,c.name); return d&&d.role==='engine'; }).length;
      if (enginesNow === 0) { score -= 0.3; antiR.push('-0.3 payoff with no engine yet - risky Act 1 pick'); }
    }
  } else if (act === 2) {
    if (!da.isUndefined && da.detected[0].strength >= 0.5) {
      const fitsTop = (data.builds||[]).includes(da.detected[0].arch.id) || (data.builds||[]).includes('any');
      if (fitsTop) { score += 0.2; synR.push('+0.2 fits committed build (Act 2)'); }
    }
  } else if (act === 3) {
    if (data.role === 'payoff') {
      const eng3 = deckCards.filter(c => { const d=getCard(char,c.name); return d&&d.role==='engine'; }).length;
      const gen3 = deckCards.filter(c => { const d=getCard(char,c.name); return d&&d.role==='generator'; }).length;
      if (eng3 >= 1 && gen3 >= 2) { score += 0.4; synR.push('+0.4 payoff fires consistently - online by Act 3'); }
    }
    if (data.role === 'engine') {
      const eng3 = deckCards.filter(c => { const d=getCard(char,c.name); return d&&d.role==='engine'; }).length;
      if (eng3 >= 1) { score -= 0.3; antiR.push('-0.3 engine card - too late to pivot in Act 3'); }
    }
  } else if (act === 4) {
    if (data.role === 'payoff') {
      const eng4 = deckCards.filter(c => { const d=getCard(char,c.name); return d&&d.role==='engine'; }).length;
      const gen4 = deckCards.filter(c => { const d=getCard(char,c.name); return d&&d.role==='generator'; }).length;
      if (eng4 >= 1 && gen4 >= 2) { score += 0.5; synR.push('+0.5 payoff with full engine - needs to close fights now'); }
    }
    if (score < 3.0 && !data.role) { score -= 0.5; antiR.push('-0.5 Act 4 - only essential cards worth adding'); }
  }

  // Deck size selectivity
  const deckSize = da.total;
  if (deckSize <= 16 && score < 2.5) {
    score -= 0.3; antiR.push('-0.3 keep deck lean - only take impactful cards');
  } else if (deckSize >= 26 && score < 3.5) {
    score -= 0.4; antiR.push('-0.4 large deck - only worth adding strong cards');
  }

  // Duplicate penalty
  const owned = deckCards.filter(c => norm(c.name) === norm(cardName)).length;
  if (owned > 0) {
    const pen = DB.dupePenalties[cardName] ?? (data.syn.includes('permanent_scaling') ? -1.5 : -0.8);
    const scaled = pen * (owned >= 2 ? 1.4 : 1.0);
    score += scaled;
    const dupeMsg = pen <= -10
      ? `never take a 2nd copy - completely wasted`
      : `${scaled.toFixed(1)} already have ${owned} cop${owned>1?'ies':'y'}`;
    antiR.push(dupeMsg);
  }

  // Sly special handling - free-from-discard plays are fundamentally different from normal synergy
  const SLY_ENGINES = new Set(['tools of the trade','acrobatics','prepared','calculated gamble','serpent form']);
  const SLY_PAYOFFS = new Set(['reflex','tactician','untouchable','flick flack','ricochet','night terror','eviscerate']);
  const cardLower = cardName.toLowerCase();
  const deckLower = deckCards.map(c => c.name.toLowerCase());
  const slyEngineCount = deckLower.filter(n => SLY_ENGINES.has(n)).length;
  const slyPayoffCount = deckLower.filter(n => SLY_PAYOFFS.has(n)).length;
  const hasSlyArch = da.detected.some(d => d.arch.id === 'sly');

  if (SLY_PAYOFFS.has(cardLower) && slyEngineCount >= 1 && hasSlyArch) {
    const slyBonus = +(0.6 + Math.min(1.0, slyEngineCount * 0.3)).toFixed(1);
    score += slyBonus;
    synR.push(`+${slyBonus} Sly payoff - plays free every discard turn (${slyEngineCount} engine${slyEngineCount>1?'s':''})`);
  }

  // Acrobatics + Prepared infinite loop
  const SLY_LOOPERS = new Set(['acrobatics','prepared']);
  if (SLY_LOOPERS.has(cardLower)) {
    const otherLoopersInDeck = deckLower.filter(n => SLY_LOOPERS.has(n) && n !== cardLower).length;
    if (otherLoopersInDeck >= 1 && slyPayoffCount >= 2) {
      score += 0.8;
      synR.push(`+0.8 completes Sly infinite loop - discard cycle generates endless free plays`);
    }
  }

  if (SLY_ENGINES.has(cardLower) && slyPayoffCount >= 2 && hasSlyArch) {
    const engineBonus = +(0.4 + Math.min(0.6, slyPayoffCount * 0.15)).toFixed(1);
    score += engineBonus;
    synR.push(`+${engineBonus} Sly engine - ${slyPayoffCount} payoffs fire free on every discard`);
  }

  // Encounter context
  if (encounter === 'boss') {
    if ((data.syn||[]).includes('doom') && data.role === 'payoff') {
      score -= 0.4; antiR.push(`-0.4 Doom instakill unreliable vs bosses`);
    }
    if (hasDefense) {
      score += 0.3; synR.push(`+0.3 boss incoming - defense matters`);
    }
  } else if (encounter === 'elite') {
    if ((data.syn||[]).includes('doom') && data.role === 'payoff') {
      score += 0.3; synR.push(`+0.3 Doom payoff - elites accumulate Doom quickly`);
    }
    const hasSingleUseExhaust = data.role === 'payoff' && (data.mech||[]).includes('exhaust');
    if (hasSingleUseExhaust) {
      score -= 0.2; antiR.push(`-0.2 single-use exhaust payoff - elites have more HP`);
    }
  }

  // Doom context (Necrobinder) - payoffs require generators to get enemies to threshold
  if (char === 'necrobinder') {
    const doomGens = deckCards.filter(c => {
      const d = getCard(char, c.name);
      return d && d.role === 'generator' && (d.syn||[]).includes('doom');
    }).length;
    const doomPayoffs = deckCards.filter(c => {
      const d = getCard(char, c.name);
      return d && d.role === 'payoff' && (d.syn||[]).includes('doom');
    }).length;
    if ((data.syn||[]).includes('doom') && data.role === 'payoff') {
      if (doomGens < 2) {
        score -= 0.6;
        antiR.push(`-0.6 Doom payoff but only ${doomGens} Doom generator${doomGens!==1?'s':''} - enemies won't reach threshold`);
      } else if (doomGens >= 3 && act >= 2) {
        score += 0.4;
        synR.push(`+0.4 ${doomGens} Doom generators - enemies reliably reach threshold`);
      }
      if (act >= 2 && doomPayoffs >= 2) {
        antiR.push(`(Note: Doom instakill unreliable on bosses - maintain alternate damage sources)`);
      }
    }
  }

  score = Math.max(0, Math.min(6, score));
  return {name:cardName, base:data.tier, finalScore:score, finalGrade:SCORE_GRADE(score),
    notes:data.notes, synReasons:synR, antiReasons:antiR, isBest:false};
}

function scoreRemoval(cardName, char, da, deckCards) {
  const name = cardName.toLowerCase();
  const isStrike = name.includes('strike') && !name.includes('shining') && !name.includes('solar') && !name.includes('pommel') && !name.includes('perfected') && !name.includes('ashen');
  const isDefend = name === 'defend' || name === 'defend+';
  const isCurse = name.includes('curse') || name.includes('wound') || name.includes('burn') || name.includes('dazed') || name.includes('slimed') || name.includes('void');
  if (isCurse) return {name:cardName,score:5,grade:'S',reason:'Curse / Status - remove immediately',safeToRemove:true};

  const data = getCard(char, cardName);
  const baseGrade = data ? data.tier : 'C';
  const baseVal = GRADE_VALS[baseGrade] ?? 2;

  // Only remove ONE copy of this card, not all copies with the same name
  let removedOne = false;
  const otherCards = deckCards.filter(c => {
    if (!removedOne && c.name === cardName) { removedOne = true; return false; }
    return true;
  });
  const otherAttacks = otherCards.filter(c => {
    const d = getCard(char, c.name);
    const n = c.name.toLowerCase();
    const isBasicAtk = n.includes('strike') && !n.includes('shining') && !n.includes('solar') && !n.includes('pommel') && !n.includes('perfected') && !n.includes('ashen');
    return isBasicAtk || (d && d.mech && (d.mech.includes('damage') || d.mech.includes('multi_hit') || d.mech.includes('aoe')));
  }).length;
  const otherBlock = otherCards.filter(c => {
    const d = getCard(char, c.name);
    const n = c.name.toLowerCase();
    return n.includes('defend') || (d && d.syn && d.syn.includes('block'));
  }).length;

  const basicStrikesRemaining = otherCards.filter(c => {
    const n = c.name.toLowerCase();
    return n.includes('strike') && !n.includes('shining') && !n.includes('solar') && !n.includes('pommel') && !n.includes('perfected') && !n.includes('ashen');
  }).length;

  // Bash and character starters with real effects - cut after basic strikes, not before
  const isBash = name === 'bash' || name === 'bash+';
  const isUtilityStarter = isBash ||
    name === 'survivor' || name === 'survivor+' ||
    name === 'neutralize' || name === 'neutralize+' ||
    name === 'zap' || name === 'zap+' ||
    name === 'dualcast' || name === 'dualcast+' ||
    name === 'venerate' || name === 'venerate+' ||
    name === 'soul spark' || name === 'soul spark+';

  if (isUtilityStarter) {
    if (basicStrikesRemaining > 0) {
      return {name:cardName, score:2.0, grade:'C',
        reason:`Remove your basic Strikes first (${basicStrikesRemaining} remaining) - ${cardName} has a real effect (${isBash?'Vulnerable':'utility'}) and is more valuable than Strike`,
        safeToRemove:false};
    }
    return {name:cardName, score:3.0, grade:'B',
      reason:`Basic Strikes are gone - ${cardName} is now a reasonable cut to thin the deck further`,
      safeToRemove:true};
  }

  const thisIsAttack = isStrike || (data && data.mech && (data.mech.includes('damage') || data.mech.includes('multi_hit') || data.mech.includes('aoe')));
  const thisIsBlock = isDefend || (data && data.syn && data.syn.includes('block'));

  // Context-sensitive minimums - Sly/Doom archetypes need fewer traditional attacks/block
  const topArchR = da.detected.length > 0 ? da.detected[0] : null;
  const topArchIdR = topArchR ? topArchR.arch.id : null;
  const topStrengthR = topArchR ? topArchR.strength : 0;
  const atkMin = (topArchIdR === 'sly' && topStrengthR >= 0.5) ? 1
    : topArchIdR === 'doom' ? 0
    : Math.max(1, 3 - Math.round(topStrengthR * 2));
  const doomEngOnline = topArchIdR === 'doom' && deckCards.filter(c => {
    const d = getCard(char, c.name); return d && d.role === 'engine' && (d.syn||[]).includes('doom');
  }).length >= 1;
  const blkMin = doomEngOnline ? 0 : Math.max(1, 3 - Math.round(topStrengthR * 2));
  const wouldLeaveNoAttacks = thisIsAttack && otherAttacks < atkMin;
  const wouldLeaveNoBlock = thisIsBlock && otherBlock < blkMin;

  if (wouldLeaveNoAttacks) {
    return {name:cardName, score:0.5, grade:'D',
      reason:`Removing this leaves only ${otherAttacks} attacks - keep at least ${atkMin} damage source${atkMin!==1?'s':''}`,
      safeToRemove:false};
  }
  if (wouldLeaveNoBlock) {
    return {name:cardName, score:0.5, grade:'D',
      reason:`Removing this leaves only ${otherBlock} block cards - keep at least ${blkMin} defensive source${blkMin!==1?'s':''}`,
      safeToRemove:false};
  }

  if (isStrike) return {name:cardName,score:4,grade:'A',reason:'Basic Strike - thinning improves consistency',safeToRemove:true};
  if (isDefend) {
    if (otherBlock >= 4) return {name:cardName,score:3.5,grade:'A',reason:'Basic Defend - safe to cut now that you have real block cards',safeToRemove:true};
    return {name:cardName,score:2.5,grade:'B',reason:`Basic Defend - only cut once you have more real block sources (${otherBlock} currently)`,safeToRemove:otherBlock>=3};
  }

  let remScore = Math.max(0, 5 - baseVal);
  let reason = '';

  if (da.detected.length > 0) {
    const topArch = da.detected[0];
    const cardBuilds = (data && data.builds) ? data.builds.filter(b=>b!=='any') : [];
    const fitsMyBuild = cardBuilds.length === 0 || cardBuilds.some(b => da.detected.some(d => d.arch.id === b));
    if (!fitsMyBuild && cardBuilds.length > 0 && topArch.strength >= 0.4) {
      remScore = Math.min(5, remScore + 1.0);
      reason = `Doesn't fit your ${topArch.arch.name} build - `;
    }
  }

  reason += remScore >= 4 ? 'Weak card - strong cut candidate'
    : remScore >= 3 ? 'Below average - consider removing'
    : remScore >= 2 ? 'Mediocre - context dependent'
    : 'Decent card - only remove if deck is bloated';

  return {name:cardName, score:remScore, grade:SCORE_GRADE(remScore), reason, safeToRemove:remScore>=3};
}

function norm(n) {
  return (n||'').toUpperCase().replace(/[\s\-]/g,'_').replace(/[^A-Z0-9_]/g,'').replace(/_+/g,'_');
}
function getCard(char, name) {
  const key = norm(name);
  const charCards = DB.cards[char] || {};
  if (charCards[key]) return charCards[key];
  const colorless = DB.cards.colorless || {};
  if (colorless[key]) return colorless[key];
  return null;
}
function gradeColor(g) {
  return {S:'var(--s)',A:'var(--a)',B:'var(--b)',C:'var(--c)',D:'var(--d)',F:'var(--f)'}[g]||'var(--f)';
}

const STARTER_NAMES = new Set([
  'strike','defend','wound','burn','dazed','slimed','void',
  'bash',
  'survivor','neutralize',
  'zap','dualcast',
  'venerate',
  'soul spark',
  'shiv','debris',
]);

const STARTERS = {
  ironclad:    ['Strike','Strike','Strike','Strike','Strike','Defend','Defend','Defend','Defend','Bash'],
  silent:      ['Strike','Strike','Strike','Strike','Strike','Defend','Defend','Defend','Defend','Defend','Survivor','Neutralize'],
  defect:      ['Strike','Strike','Strike','Strike','Defend','Defend','Defend','Defend','Zap','Dualcast'],
  regent:      ['Strike','Strike','Strike','Strike','Strike','Defend','Defend','Defend','Defend','Venerate'],
  necrobinder: ['Strike','Strike','Strike','Strike','Strike','Defend','Defend','Defend','Defend','Soul Spark'],
};

function floorToAct(f) {
  return f <= 17 ? 1 : f <= 34 ? 2 : f <= 50 ? 3 : 4;
}


function getFunctionalRole(data) {
  if (!data) return 'utility';
  if (data.role) return data.role;
  const tags = new Set([...(data.syn || []), ...(data.mech || [])]);
  if (tags.has('block') || tags.has('block_retain') || tags.has('weak')) return 'defense';
  if (tags.has('permanent_scaling') || tags.has('persistent_scaling') || tags.has('scaling')) return 'engine';
  if (tags.has('energy_gain') || tags.has('draw') || tags.has('strength') || tags.has('focus') || tags.has('star_gain')) return 'generator';
  if (tags.has('block_conversion') || tags.has('block_payoff') || tags.has('per_attack_payoff') || tags.has('vulnerable_payoff') || tags.has('self_damage_payoff') || tags.has('exhaust_payoff')) return 'payoff';
  if (tags.has('vulnerable') || tags.has('debuff')) return 'setup';
  return 'utility';
}
