const DB = {
  "cards": {
    "ironclad": {
      "BLOODLETTING": {
        "id": "Bloodletting",
        "tier": "S",
        "builds": [
          "blood"
        ],
        "syn": [
          "self_damage",
          "scaling",
          "exhaust",
          "blood"
        ],
        "anti": [],
        "notes": "0-cost reusable energy. Core enabler. Pairs with Rupture for free Strength.",
        "mech": [
          "self_damage",
          "energy_gain",
          "blood"
        ],
        "role": "generator"
      },
      "STONE_ARMOR": {
        "id": "Stone Armor",
        "tier": "A",
        "builds": [
            "block"
        ],
        "syn": [
            "block",
            "plating",
            "juggernaut",
            "scaling"
        ],
        "anti": [],
        "notes": "Provides Plating for passive Block every turn. Strong in Block decks and excellent with Juggernaut since repeated block triggers damage.",
        "mech": [
            "plating",
            "block_scaling",
            "persistent_scaling"
        ],
        "role": "engine"
    },
      "HEADBUTT": {
        "id": "Headbutt",
        "tier": "S",
        "builds": [
          "any"
        ],
        "syn": [
          "damage",
          "scaling"
        ],
        "anti": [],
        "notes": "9 damage + puts card on top of draw. Replay your best card every turn.",
        "mech": [
          "card_retrieve"
        ],
        "role": "engine"
      },
      "BATTLE_TRANCE": {
        "id": "Battle Trance",
        "tier": "S",
        "builds": [
          "any"
        ],
        "syn": [
          "draw",
          "scaling"
        ],
        "anti": [],
        "notes": "0-cost draw 3. Restriction rarely matters. Sets up combo turns.",
        "mech": [
          "draw"
        ],
        "role": "generator"
      },
      "FEED": {
        "id": "Feed",
        "tier": "S",
        "builds": [
          "any"
        ],
        "syn": [
          "scaling",
          "damage"
        ],
        "anti": [],
        "notes": "Permanent max HP on kill. Snowballs hard. Pick in Act 1.",
        "mech": [
          "permanent_scaling"
        ],
        "role": "generator"
      },
      "OFFERING": {
        "id": "Offering",
        "tier": "S",
        "builds": [
          "blood",
          "exhaust"
        ],
        "syn": [
          "self_damage",
          "draw",
          "scaling",
          "blood"
        ],
        "anti": [],
        "notes": "Lose 6 HP, draw 3, gain 2 energy. Enables explosive turns. Triggers Rupture.",
        "mech": [
          "self_damage",
          "draw",
          "energy_gain",
          "blood"
        ],
        "role": "generator"
      },
      "INFLAME": {
        "id": "Inflame",
        "tier": "A",
        "builds": [
          "strength"
        ],
        "syn": [
          "strength",
          "scaling",
          "damage"
        ],
        "anti": [],
        "notes": "Permanent +2 Strength. Improves every attack for the rest of the fight. Near-auto-pick.",
        "mech": [
          "permanent_scaling",
          "strength"
        ],
        "role": "engine"
      },
      "GRAPPLE": {
        "id": "Grapple",
        "tier": "A",
        "builds": [
          "block"
        ],
        "syn": [
          "block",
          "damage",
          "scaling"
        ],
        "anti": [],
        "notes": "Converts Block to damage. Makes block builds threatening. S-tier in Barricade decks.",
        "mech": [
          "block_conversion"
        ],
        "role": "payoff"
      },
      "COLOSSUS": {
        "id": "Colossus",
        "tier": "S",
        "builds": [
          "block",
          "strike"
        ],
        "syn": [
          "block",
          "strength",
          "scaling",
          "strike"
        ],
        "anti": [],
        "notes": "New STS2 card. Strong permanent scaling for block/strength builds.",
        "mech": [
          "permanent_scaling",
          "strike",
          "block"
        ],
        "role": "defense"
      },
      "UNMOVABLE": {
        "id": "Unmovable",
        "tier": "S",
        "builds": [
          "block"
        ],
        "syn": [
          "block",
          "scaling"
        ],
        "anti": [
          "exhaust",
          "self_damage"
        ],
        "notes": "New STS2 card. Powerful block engine.",
        "mech": [
          "block"
        ],
        "role": "engine"
      },
      "EXPECT_A_FIGHT": {
        "id": "Expect A Fight",
        "tier": "S",
        "builds": [
          "strike"
        ],
        "syn": [
          "damage",
          "draw",
          "scaling",
          "strike",
          "energy_gain"
        ],
        "anti": [],
        "notes": "Excellent Strike support. Extra Energy helps play Perfected Strike and attack chains in the same turn.",
        "mech": [
          "energy_gain",
          "conditional",
          "strike"
        ],
        "role": "generator"
      },
      "BARRICADE": {
        "id": "Barricade",
        "tier": "A",
        "builds": [
          "block"
        ],
        "syn": [
          "block",
          "scaling"
        ],
        "anti": [],
        "notes": "Block persists. Stack massive defense. Combines with Juggernaut, Body Slam, Grapple.",
        "mech": [
          "block_retain"
        ],
        "role": "engine"
      },
      "RUPTURE": {
        "id": "Rupture",
        "tier": "A",
        "builds": [
          "blood",
          "strength"
        ],
        "syn": [
          "self_damage",
          "strength",
          "scaling",
          "blood"
        ],
        "anti": [],
        "notes": "Gain 1 Strength when you lose HP. Stacks with copies. Bloodletting = free Strength every turn.",
        "mech": [
          "strength",
          "self_damage_payoff",
          "blood"
        ],
        "role": "engine"
      },
      "BRAND": {
        "id": "Brand",
        "tier": "A",
        "builds": [
          "exhaust",
          "blood",
          "strength"
        ],
        "syn": [
          "exhaust",
          "self_damage",
          "strength",
          "blood"
        ],
        "anti": [],
        "notes": "Exhaust + Strength synergy. Core of exhaust-strength combo builds.",
        "mech": [
          "exhaust",
          "strength",
          "blood"
        ],
        "role": "generator"
      },
      "DARK_EMBRACE": {
        "id": "Dark Embrace",
        "tier": "A",
        "builds": [
          "exhaust"
        ],
        "syn": [
          "exhaust",
          "draw"
        ],
        "anti": [],
        "notes": "Draw a card when any card is exhausted. Central for exhaust builds.",
        "mech": [
          "exhaust_payoff",
          "draw",
          "exhaust_synergy"
        ],
        "role": "engine"
      },
      "FEEL_NO_PAIN": {
        "id": "Feel No Pain",
        "tier": "A",
        "builds": [
          "exhaust",
          "block"
        ],
        "syn": [
          "exhaust",
          "block"
        ],
        "anti": [],
        "notes": "Block per exhaust. Turns deck-thinning into consistent defense. Works with Corruption.",
        "mech": [
          "exhaust_payoff",
          "block",
          "exhaust_synergy"
        ],
        "role": "engine"
      },
      "BURNING_PACT": {
        "id": "Burning Pact",
        "tier": "A",
        "builds": [
          "exhaust",
          "any"
        ],
        "syn": [
          "exhaust",
          "draw"
        ],
        "anti": [],
        "notes": "Exhaust a card, draw 2. Best cantrip for thinning deck and maintaining hand.",
        "mech": [
          "exhaust",
          "draw"
        ],
        "role": "generator"
      },
      "IMPERVIOUS": {
        "id": "Impervious",
        "tier": "A",
        "builds": [
          "block"
        ],
        "syn": [
          "block",
          "exhaust"
        ],
        "anti": [],
        "notes": "2-cost 30 block exhaust. Huge early number. Skip once infinite assembled.",
        "mech": [
          "block",
          "exhaust"
        ],
        "role": "defense"
      },
      "PILLAGE": {
        "id": "Pillage",
        "tier": "A",
        "builds": [
          "strength",
          "any"
        ],
        "syn": [
          "damage",
          "scaling"
        ],
        "anti": [],
        "notes": "High damage that generates gold. Efficient in strength builds.",
        "mech": [
          "damage"
        ],
        "role": "generator"
      },
      "PYRE": {
        "id": "Pyre",
        "tier": "A",
        "builds": [
          "strike"
        ],
        "syn": [
          "self_damage",
          "exhaust",
          "damage",
          "strike",
          "energy_gain"
        ],
        "anti": [],
        "notes": "Nuke your hand for massive damage. Powerful burst in exhaust decks.",
        "mech": [
          "exhaust",
          "damage",
          "self_damage",
          "strike",
          "energy_gain"
        ],
        "role": "generator"
      },
      "TAUNT": {
        "id": "Taunt",
        "tier": "A",
        "builds": [
          "block",
          "strike"
        ],
        "syn": [
          "block",
          "vulnerable",
          "weak",
          "strike"
        ],
        "anti": [],
        "notes": "Flexible setup card for Block and Strike. Upgraded Vulnerable makes it especially good with heavy-hitting follow-ups.",
        "mech": [
          "block",
          "debuff",
          "strike"
        ],
        "role": "generator"
      },
      "SECOND_WIND": {
        "id": "Second Wind",
        "tier": "A",
        "builds": [
          "exhaust",
          "block"
        ],
        "syn": [
          "exhaust",
          "block"
        ],
        "anti": [],
        "notes": "Exhaust non-attacks for block. Powerful in skill-heavy decks with Dark Embrace.",
        "mech": [
          "exhaust",
          "block"
        ],
        "role": "generator"
      },
      "SPITE": {
        "id": "Spite",
        "tier": "A",
        "builds": [
          "blood",
          "exhaust"
        ],
        "syn": [
          "self_damage",
          "exhaust",
          "scaling",
          "blood"
        ],
        "anti": [],
        "notes": "Draw a card when you lose HP. Pairs with Bloodletting for explosive turns.",
        "mech": [
          "self_damage_payoff",
          "draw",
          "blood"
        ],
        "role": "payoff"
      },
      "EVIL_EYE": {
        "id": "Evil Eye",
        "tier": "A",
        "builds": [
          "exhaust"
        ],
        "syn": [
          "vulnerable",
          "damage"
        ],
        "anti": [],
        "notes": "Applies Vulnerable. Amplifies all damage from attacks.",
        "mech": [
          "debuff",
          "vulnerable"
        ],
        "role": "payoff"
      },
      "CRIMSON_MANTLE": {
        "id": "Crimson Mantle",
        "tier": "A",
        "builds": [
          "blood",
          "block"
        ],
        "syn": [
          "self_damage",
          "block",
          "scaling",
          "blood"
        ],
        "anti": [],
        "notes": "Converts HP loss into block. Strong in self-damage builds.",
        "mech": [
          "self_damage_payoff",
          "block",
          "blood"
        ],
        "role": "payoff"
      },
      "FLAME_BARRIER": {
        "id": "Flame Barrier",
        "tier": "A",
        "builds": [
          "block"
        ],
        "syn": [
          "block",
          "damage"
        ],
        "anti": [],
        "notes": "Block + retaliatory damage. Good tempo and damage mitigation.",
        "mech": [
          "block",
          "damage"
        ],
        "role": "defense"
      },
      "VICIOUS": {
        "id": "Vicious",
        "tier": "A",
        "builds": [
          "any"
        ],
        "syn": [
          "vulnerable",
          "damage",
          "scaling"
        ],
        "anti": [
          "exhaust"
        ],
        "notes": "Passive 25% amp on Vulnerable targets. Strong with any Vulnerable application.",
        "mech": [
          "vulnerable_payoff",
          "scaling"
        ],
        "role": "payoff"
      },
      "AGGRESSION": {
        "id": "Aggression",
        "tier": "A",
        "builds": [
          "exhaust"
        ],
        "syn": [
          "draw",
          "scaling",
          "exhaust"
        ],
        "anti": [],
        "notes": "Free upgraded Attack every turn. Strong in exhaust/scaling decks.",
        "mech": [
          "draw",
          "exhaust"
        ],
        "role": "generator"
      },
      "PRIMAL_FORCE": {
        "id": "Primal Force",
        "tier": "A",
        "builds": [
          "strength",
          "any"
        ],
        "syn": [
          "damage",
          "strength"
        ],
        "anti": [
          "exhaust"
        ],
        "notes": "0-cost transform attacks into Giant Rock (16 damage). Carries Act 1. Less relevant after engine assembled.",
        "mech": [
          "damage",
          "zero_cost"
        ],
        "role": "payoff"
      },
      "THRASH": {
        "id": "Thrash",
        "tier": "A",
        "builds": [
          "strength",
          "exhaust"
        ],
        "syn": [
          "damage",
          "strength",
          "scaling"
        ],
        "anti": [],
        "notes": "Scales with attacks played this turn. Good in attack-heavy strength builds.",
        "mech": [
          "damage",
          "conditional"
        ],
        "role": "payoff"
      },
      "STOKE": {
        "id": "Stoke",
        "tier": "A",
        "builds": [
          "exhaust"
        ],
        "syn": [
          "exhaust",
          "damage",
          "self_damage"
        ],
        "anti": [
          "strength",
          "self_damage"
        ],
        "notes": "Exhaust synergy. Strong in exhaust-based builds.",
        "mech": [
          "exhaust",
          "damage"
        ],
        "role": "engine"
      },
      "HEMOKINESIS": {
        "id": "Hemokinesis",
        "tier": "B",
        "builds": [
          "blood",
          "strength"
        ],
        "syn": [
          "self_damage",
          "damage",
          "blood"
        ],
        "anti": [],
        "notes": "High damage at HP cost. Pairs with Rupture/Bloodletting. Good elite killer.",
        "mech": [
          "self_damage",
          "damage",
          "blood"
        ],
        "role": "generator"
      },
      "ASHEN_STRIKE": {
        "id": "Ashen Strike",
        "tier": "B",
        "builds": [
          "exhaust"
        ],
        "syn": [
          "exhaust",
          "damage"
        ],
        "anti": [],
        "notes": "High damage with exhaust synergy. Strong in exhaust-heavy decks.",
        "mech": [
          "exhaust",
          "damage",
          "finisher"
        ],
        "role": "payoff"
      },
      "WHIRLWIND": {
        "id": "Whirlwind",
        "tier": "B",
        "builds": [
          "strength"
        ],
        "syn": [
          "damage",
          "aoe",
          "strength"
        ],
        "anti": [],
        "notes": "Energy-scaling AoE. Best with Strength or energy relics.",
        "mech": [
          "damage",
          "aoe"
        ],
        "role": "payoff"
      },
      "BODY_SLAM": {
        "id": "Body Slam",
        "tier": "C",
        "builds": [
          "block"
        ],
        "syn": [
          "block",
          "damage"
        ],
        "anti": [
          "exhaust",
          "self_damage"
        ],
        "notes": "Damage = block. Best with Barricade or high-block decks. Upgraded is 0-cost.",
        "mech": [
          "block_conversion",
          "damage"
        ],
        "role": "payoff"
      },
      "BLOOD_WALL": {
        "id": "Blood Wall",
        "tier": "B",
        "builds": [
          "blood",
          "block"
        ],
        "syn": [
          "self_damage",
          "block",
          "blood"
        ],
        "anti": [],
        "notes": "Big block at HP cost. Good in self-damage builds with Rupture.",
        "mech": [
          "self_damage",
          "block",
          "blood"
        ],
        "role": "generator"
      },
      "JUGGERNAUT": {
        "id": "Juggernaut",
        "tier": "C",
        "builds": [
          "block"
        ],
        "syn": [
          "block",
          "damage"
        ],
        "anti": [],
        "notes": "Deal 5 damage whenever you GAIN block — i.e. each time you play a block card. In a block build where you play multiple block cards per turn, this deals damage without spending attacks. Barricade synergizes simply because both belong in the same block build, not because one activates the other.",
        "mech": [
          "block_payoff",
          "damage"
        ],
        "role": "payoff"
      },
      "TRUE_GRIT": {
        "id": "True Grit",
        "tier": "B",
        "builds": [
          "exhaust",
          "block"
        ],
        "syn": [
          "exhaust",
          "block"
        ],
        "anti": [],
        "notes": "Block + random exhaust. Helps thin deck while defending. Triggers Feel No Pain.",
        "mech": [
          "exhaust",
          "block"
        ],
        "role": "generator"
      },
      "IRON_WAVE": {
        "id": "Iron Wave",
        "tier": "D",
        "builds": [
          "any"
        ],
        "syn": [
          "damage",
          "block"
        ],
        "anti": [],
        "notes": "Balanced attack and block. Consistent early tempo.",
        "mech": [
          "damage",
          "block"
        ],
        "role": "generator"
      },
      "STOMP": {
        "id": "Stomp",
        "tier": "B",
        "builds": [
          "strength"
        ],
        "syn": [
          "damage",
          "multi_hit",
          "vulnerable"
        ],
        "anti": [],
        "notes": "Multi-hit that benefits from Vulnerable and Strength.",
        "mech": [
          "damage",
          "multi_hit"
        ],
        "role": "payoff"
      },
      "BLUDGEON": {
        "id": "Bludgeon",
        "tier": "B",
        "builds": [
          "strength"
        ],
        "syn": [
          "strength",
          "damage"
        ],
        "anti": [],
        "notes": "3-cost 32 damage. Big hit for act 1 with Bloodletting energy.",
        "mech": [
          "damage"
        ],
        "role": "payoff"
      },
      "BREAKTHROUGH": {
        "id": "Breakthrough",
        "tier": "B",
        "builds": [
          "blood",
          "strike"
        ],
        "syn": [
          "damage",
          "aoe",
          "strike",
          "blood"
        ],
        "anti": [],
        "notes": "Useful early AoE that slots into Blood and Strike lists. Efficient coverage in multi-enemy fights.",
        "mech": [
          "damage",
          "aoe",
          "strike",
          "self_damage"
        ],
        "role": "generator"
      },
      "INFERNAL_BLADE": {
        "id": "Infernal Blade",
        "tier": "B",
        "builds": [
          "exhaust"
        ],
        "syn": [
          "exhaust",
          "damage"
        ],
        "anti": [],
        "notes": "Exhaust synergy attack.",
        "mech": [
          "exhaust",
          "damage"
        ],
        "role": "generator"
      },
      "JUGGLING": {
        "id": "Juggling",
        "tier": "B",
        "builds": [
          "strength"
        ],
        "syn": [
          "damage",
          "multi_hit",
          "strength"
        ],
        "anti": [
          "exhaust",
          "block"
        ],
        "notes": "Multi-hit attack, scales with Strength.",
        "mech": [
          "damage",
          "multi_hit"
        ],
        "role": "generator"
      },
      "SHRUG_IT_OFF": {
        "id": "Shrug It Off",
        "tier": "B",
        "builds": [
          "any"
        ],
        "syn": [
          "block",
          "draw"
        ],
        "anti": [],
        "notes": "1-cost block + draw. Consistent defense with hand refill.",
        "mech": [
          "block",
          "draw"
        ],
        "role": "defense"
      },
      "DISMANTLE": {
        "id": "Dismantle",
        "tier": "B",
        "builds": [
          "exhaust"
        ],
        "syn": [
          "exhaust",
          "scaling"
        ],
        "anti": [],
        "notes": "Exhaust attack synergy.",
        "mech": [
          "exhaust",
          "exhaust_synergy"
        ],
        "role": "engine"
      },
      "POMMEL_STRIKE": {
        "id": "Pommel Strike",
        "tier": "B",
        "builds": [
          "strike"
        ],
        "syn": [
          "damage",
          "draw",
          "strike"
        ],
        "anti": [],
        "notes": "Solid Strike support card. Draw keeps aggressive decks moving and pairs well with Perfected Strike lines.",
        "mech": [
          "damage",
          "draw",
          "strike"
        ],
        "role": "generator"
      },
      "MOLTEN_FIST": {
        "id": "Molten Fist",
        "tier": "B",
        "builds": [
          "strength"
        ],
        "syn": [
          "damage",
          "strength"
        ],
        "anti": [
          "exhaust",
          "self_damage",
          "block"
        ],
        "notes": "Strength synergy attack.",
        "mech": [
          "damage",
          "strength"
        ],
        "role": "engine"
      },
      "PERFECTED_STRIKE": {
        "id": "Perfected Strike",
        "tier": "B",
        "builds": [
          "strike"
        ],
        "syn": [
          "damage",
          "strike",
          "strike_scaling"
        ],
        "anti": [
          "exhaust",
          "block"
        ],
        "notes": "Core Strike payoff. Its value comes from keeping enough Strike-tag cards without overfilling your deck.",
        "mech": [
          "damage",
          "conditional",
          "strike",
          "strike_scaling"
        ],
        "role": "payoff"
      },
      "CORRUPTION": {
        "id": "Corruption",
        "tier": "B",
        "builds": [
          "exhaust"
        ],
        "syn": [
          "exhaust",
          "scaling"
        ],
        "anti": [
          "block"
        ],
        "notes": "All skills cost 0 and exhaust. Enables massive turns with Dark Embrace + Feel No Pain.",
        "mech": [
          "exhaust",
          "zero_cost_enabler",
          "exhaust_synergy"
        ],
        "role": "engine"
      },
      "DEMON_FORM": {
        "id": "Demon Form",
        "tier": "C",
        "builds": [
          "strength"
        ],
        "syn": [
          "strength",
          "scaling"
        ],
        "anti": [],
        "notes": "+2 Strength every turn. Snowballs hard. 1 copy is usually enough.",
        "mech": [
          "strength",
          "permanent_scaling"
        ],
        "role": "engine"
      },
      "BASH": {
        "id": "Bash",
        "tier": "C",
        "builds": [
          "strike"
        ],
        "syn": [
          "vulnerable",
          "strike"
        ],
        "anti": [],
        "notes": "Starter. 2-cost Vulnerable. Useful early but outclassed later.",
        "mech": [
          "vulnerable",
          "debuff",
          "strike"
        ],
        "role": "generator"
      },
      "ANGER": {
        "id": "Anger",
        "tier": "B",
        "builds": [
          "strike"
        ],
        "syn": [
          "damage",
          "exhaust",
          "strike"
        ],
        "anti": [
          "exhaust"
        ],
        "notes": "Self-replicates — can flood deck. Take sparingly.",
        "mech": [
          "damage",
          "strike"
        ]
      },
      "THUNDERCLAP": {
        "id": "Thunderclap",
        "tier": "C",
        "builds": [
          "strength",
          "strike"
        ],
        "syn": [
          "damage",
          "aoe",
          "vulnerable",
          "strike"
        ],
        "anti": [],
        "notes": "AoE + Vulnerable. Helps control groups early.",
        "mech": [
          "damage",
          "aoe",
          "vulnerable",
          "strike"
        ],
        "role": "generator"
      },
      "HEAVY_BLADE": {
        "id": "Heavy Blade",
        "tier": "C",
        "builds": [
          "strength"
        ],
        "syn": [
          "strength",
          "damage"
        ],
        "anti": [],
        "notes": "Only good with high Strength. Build-specific.",
        "mech": [
          "damage",
          "strength"
        ],
        "role": "payoff"
      },
      "UPPERCUT": {
        "id": "Uppercut",
        "tier": "B",
        "builds": [
          "strength",
          "strike"
        ],
        "syn": [
          "vulnerable",
          "weak",
          "damage",
          "strike"
        ],
        "anti": [],
        "notes": "Weak + Vulnerable tempo card. Solid but not outstanding.",
        "mech": [
          "debuff",
          "vulnerable",
          "weak",
          "strike"
        ],
        "role": "generator"
      },
      "ARMAMENTS": {
        "id": "Armaments",
        "tier": "C",
        "builds": [
          "block"
        ],
        "syn": [
          "block"
        ],
        "anti": [],
        "notes": "Block + upgrade. Too slow.",
        "mech": [
          "block"
        ],
        "role": "defense"
      },
      "CLOTHESLINE": {
        "id": "Clothesline",
        "tier": "C",
        "builds": [
          "any"
        ],
        "syn": [
          "damage",
          "weak"
        ],
        "anti": [],
        "notes": "Decent tempo. Applies Weak.",
        "mech": [
          "damage",
          "weak"
        ]
      },
      "WILD_STRIKE": {
        "id": "Wild Strike",
        "tier": "C",
        "builds": [
          "any"
        ],
        "syn": [
          "damage"
        ],
        "anti": [
          "exhaust"
        ],
        "notes": "Adds wound to deck. Usually avoid.",
        "mech": [
          "damage"
        ]
      },
      "DROPKICK": {
        "id": "Dropkick",
        "tier": "C",
        "builds": [
          "strength",
          "strike"
        ],
        "syn": [
          "damage",
          "vulnerable",
          "strike"
        ],
        "anti": [],
        "notes": "Good with Vulnerable setup. Energy refund on hit.",
        "mech": [
          "damage",
          "conditional",
          "energy_gain",
          "strike"
        ],
        "role": "generator"
      },
      "RAMPAGE": {
        "id": "Rampage",
        "tier": "C",
        "builds": [
          "strength"
        ],
        "syn": [
          "damage",
          "strength"
        ],
        "anti": [],
        "notes": "Scales each play. OK in strength builds.",
        "mech": [
          "damage",
          "scaling"
        ],
        "role": "payoff"
      },
      "SEVER_SOUL": {
        "id": "Sever Soul",
        "tier": "C",
        "builds": [
          "exhaust"
        ],
        "syn": [
          "exhaust",
          "damage"
        ],
        "anti": [],
        "notes": "Exhaust all skills then attack. Synergy with exhaust payoffs.",
        "mech": [
          "exhaust",
          "damage"
        ],
        "role": "generator"
      },
      "CLASH": {
        "id": "Clash",
        "tier": "D",
        "builds": [
          "any"
        ],
        "syn": [
          "damage"
        ],
        "anti": [
          "block",
          "exhaust",
          "self_damage"
        ],
        "notes": "Only playable with no skills in hand. Extremely restrictive.",
        "mech": [
          "damage",
          "conditional"
        ]
      },
      "SEARING_BLOW": {
        "id": "Searing Blow",
        "tier": "D",
        "builds": [
          "any"
        ],
        "syn": [
          "damage"
        ],
        "anti": [],
        "notes": "Needs multiple upgrades to be good. Usually not worth it.",
        "mech": [
          "damage"
        ]
      },
      "MANGLE": {
        "id": "Mangle",
        "tier": "D",
        "builds": [
          "any"
        ],
        "syn": [],
        "anti": [],
        "notes": "Wounds pollute your deck. Usually skip.",
        "mech": []
      },
      "CASCADE": {
        "id": "Cascade",
        "tier": "D",
        "builds": [
          "any"
        ],
        "syn": [],
        "anti": [],
        "notes": "Completely random. Not reliable.",
        "mech": []
      },
      "STRIKE": {
        "id": "Strike",
        "tier": "D",
        "builds": [],
        "syn": [
          "damage"
        ],
        "anti": [],
        "notes": "Starter. Replace when possible.",
        "mech": [
          "damage"
        ]
      },
      "DEFEND": {
        "id": "Defend",
        "tier": "D",
        "builds": [],
        "syn": [
          "block"
        ],
        "anti": [],
        "notes": "Starter. Replace when possible.",
        "mech": [
          "block"
        ]
      },
      "LIMIT_BREAK": {
        "id": "Limit Break",
        "tier": "A",
        "builds": [
          "strength"
        ],
        "syn": [
          "strength",
          "scaling"
        ],
        "anti": [],
        "notes": "Double your current Strength. Upgraded: no longer Exhausts. Exponential scaling in strength builds.",
        "mech": [
          "strength",
          "permanent_scaling"
        ],
        "role": "generator"
      },
      "SWORD_BOOMERANG": {
        "id": "Sword Boomerang",
        "tier": "C",
        "builds": [
          "strength"
        ],
        "syn": [
          "strength",
          "damage",
          "multi_hit"
        ],
        "anti": [],
        "notes": "Deal 3 damage 3 times to random enemies. Each hit benefits from Strength. Great multi-hit.",
        "mech": [
          "damage",
          "multi_hit"
        ],
        "role": "payoff"
      },
      "TWIN_STRIKE": {
        "id": "Twin Strike",
        "tier": "C",
        "builds": [
          "strength",
          "strike"
        ],
        "syn": [
          "strength",
          "damage",
          "multi_hit",
          "strike"
        ],
        "anti": [],
        "notes": "Deal 5 damage twice. Each hit benefits from Strength.",
        "mech": [
          "damage",
          "multi_hit",
          "strike"
        ],
        "role": "payoff"
      },
      "SPOT_WEAKNESS": {
        "id": "Spot Weakness",
        "tier": "A",
        "builds": [
          "strength"
        ],
        "syn": [
          "strength",
          "scaling"
        ],
        "anti": [],
        "notes": "If enemy intends to attack, gain 3 Strength. Reliable scaling in most fights.",
        "mech": [
          "strength",
          "conditional"
        ],
        "role": "engine"
      },
      "FLEX": {
        "id": "Flex",
        "tier": "B",
        "builds": [
          "strength"
        ],
        "syn": [
          "strength",
          "scaling"
        ],
        "anti": [],
        "notes": "Gain 2 Strength, lose it at end of turn. Good with Artifact. Pairs with Heavy Blade for huge turns.",
        "mech": [
          "strength"
        ],
        "role": "generator"
      },
      "REAPER": {
        "id": "Reaper",
        "tier": "A",
        "builds": [
          "strength",
          "blood"
        ],
        "syn": [
          "strength",
          "damage",
          "self_damage",
          "blood",
          "aoe"
        ],
        "anti": [],
        "notes": "Deal damage to ALL enemies, heal for unblocked damage. Massive heal in strength builds.",
        "mech": [
          "damage",
          "aoe",
          "blood"
        ],
        "role": "payoff"
      },
      "ENTRENCH": {
        "id": "Entrench",
        "tier": "A",
        "builds": [
          "block"
        ],
        "syn": [
          "block",
          "scaling"
        ],
        "anti": [],
        "notes": "Double your current Block. In Barricade builds this becomes absurd.",
        "mech": [
          "block",
          "scaling"
        ],
        "role": "generator"
      },
      "BRUTALITY": {
        "id": "Brutality",
        "tier": "B",
        "builds": [
          "blood"
        ],
        "syn": [
          "self_damage",
          "draw",
          "scaling",
          "blood"
        ],
        "anti": [],
        "notes": "At the start of turn, lose 1 HP and draw 1 card. Consistent self-damage for Rupture.",
        "mech": [
          "self_damage",
          "draw",
          "passive",
          "blood"
        ],
        "role": "generator"
      },
      "DOUBLE_TAP": {
        "id": "Double Tap",
        "tier": "A",
        "builds": [
          "strength"
        ],
        "syn": [
          "strength",
          "damage",
          "scaling"
        ],
        "anti": [],
        "notes": "Next Attack plays twice. Nuclear damage with Whirlwind or heavy hits late game.",
        "mech": [
          "card_doubler",
          "damage"
        ],
        "role": "payoff"
      },
      "FIEND_FIRE": {
        "id": "Fiend Fire",
        "tier": "C",
        "builds": [
          "exhaust"
        ],
        "syn": [
          "exhaust",
          "damage",
          "scaling"
        ],
        "anti": [],
        "notes": "Exhaust hand, deal 7 damage per card. With Dark Embrace = draw them all back.",
        "mech": [
          "exhaust",
          "damage",
          "finisher"
        ],
        "role": "payoff"
      },
      "IMMOLATE": {
        "id": "Immolate",
        "tier": "B",
        "builds": [
          "exhaust",
          "strength"
        ],
        "syn": [
          "exhaust",
          "damage",
          "aoe"
        ],
        "anti": [],
        "notes": "Deal 21 damage to ALL, add Burn to discard. AoE payoff with exhaust synergy.",
        "mech": [
          "damage",
          "aoe",
          "exhaust"
        ],
        "role": "payoff"
      },
      "SHOCKWAVE": {
        "id": "Shockwave",
        "tier": "B",
        "builds": [
          "block",
          "strike"
        ],
        "syn": [
          "weak",
          "vulnerable",
          "block"
        ],
        "anti": [],
        "notes": "Apply 3 Weak and Vulnerable to ALL enemies. Exhaust. Strong setup card.",
        "mech": [
          "debuff",
          "weak",
          "vulnerable",
          "aoe",
          "exhaust"
        ],
        "role": "generator"
      },
      "INTIMIDATE": {
        "id": "Intimidate",
        "tier": "B",
        "builds": [
          "block"
        ],
        "syn": [
          "weak",
          "block"
        ],
        "anti": [],
        "notes": "Apply 1 Weak to ALL enemies. Exhaust. Good debuff setup.",
        "mech": [
          "weak",
          "aoe",
          "exhaust"
        ],
        "role": "generator"
      },
      "DISARM": {
        "id": "Disarm",
        "tier": "B",
        "builds": [
          "block"
        ],
        "syn": [
          "block",
          "scaling",
          "weak"
        ],
        "anti": [],
        "notes": "Enemy loses 2 Strength. Exhaust. Reduces incoming damage significantly.",
        "mech": [
          "debuff",
          "exhaust",
          "weak"
        ],
        "role": "defense"
      },
      "POWER_THROUGH": {
        "id": "Power Through",
        "tier": "C",
        "builds": [
          "exhaust",
          "block"
        ],
        "syn": [
          "block",
          "exhaust"
        ],
        "anti": [
          "strength"
        ],
        "notes": "Add 2 Wounds, gain 15 Block. Exhaust synergy but pollutes deck.",
        "mech": [
          "block",
          "exhaust"
        ],
        "role": "generator"
      },
      "COMBUST": {
        "id": "Combust",
        "tier": "B",
        "builds": [
          "blood",
          "exhaust"
        ],
        "syn": [
          "self_damage",
          "damage",
          "blood",
          "aoe"
        ],
        "anti": [],
        "notes": "Each turn lose 1 HP and deal 5 damage to ALL enemies. Passive AoE with self-damage synergy.",
        "mech": [
          "self_damage",
          "damage",
          "aoe",
          "passive",
          "blood"
        ],
        "role": "payoff"
      },
      "RAGE": {
        "id": "Rage",
        "tier": "B",
        "builds": [
          "strength",
          "strike"
        ],
        "syn": [
          "block",
          "attack_chain",
          "strength",
          "strike"
        ],
        "anti": [],
        "notes": "Attack-chain block engine. Best in Strike and Strength decks that play multiple attacks per turn.",
        "mech": [
          "attack_trigger",
          "block_scaling",
          "strike"
        ],
        "role": "engine"
      },
      "FIGHT_ME": {
        "id": "Fight Me!",
        "tier": "B",
        "builds": [
          "strength",
          "strike"
        ],
        "syn": [
          "strength",
          "multi_hit",
          "strike"
        ],
        "anti": [],
        "notes": "Strength generator attached to multi-hit damage. Strong in Strength and Strike shells, but the enemy Strength matters in longer fights.",
        "mech": [
          "damage",
          "multi_hit",
          "strength",
          "enemy_strength",
          "strike"
        ],
        "role": "generator"
      },
      "CONFLAGRATION": {
        "id": "Conflagration",
        "tier": "A",
        "builds": [
          "strike"
        ],
        "syn": [
          "damage",
          "aoe",
          "attack_chain",
          "strike"
        ],
        "anti": [],
        "notes": "Attack-chain AoE finisher. Much stronger after you have already played other attacks this turn.",
        "mech": [
          "damage",
          "aoe",
          "per_attack_payoff",
          "strike"
        ],
        "role": "payoff"
      },
      "CRUELTY": {
        "id": "Cruelty",
        "tier": "A",
        "builds": [
          "strike"
        ],
        "syn": [
          "vulnerable",
          "strike",
          "scaling"
        ],
        "anti": [],
        "notes": "Persistent Vulnerable scaler. Rewards decks that repeatedly apply Vulnerable and cash in with big Strike turns.",
        "mech": [
          "vulnerable_payoff",
          "persistent_scaling",
          "strike"
        ],
        "role": "engine"
      }
    },
    "silent": {
      "ADRENALINE": {
        "id": "Adrenaline",
        "tier": "S",
        "builds": [
          "any"
        ],
        "syn": [
          "draw",
          "scaling"
        ],
        "anti": [],
        "notes": "Free energy and draw. One of the best 0-cost cards in the game.",
        "mech": [
          "draw",
          "energy_gain",
          "zero_cost"
        ]
      },
      "WELL_LAID_PLANS": {
        "id": "Well-Laid Plans",
        "tier": "S",
        "builds": [
          "sly"
        ],
        "syn": [
          "discard",
          "sly",
          "scaling"
        ],
        "anti": [
          "poison",
          "shiv"
        ],
        "notes": "Retain a card each turn. Essential for holding key Sly/combo pieces.",
        "mech": [
          "retain",
          "combo_enabler"
        ],
        "role": "engine"
      },
      "CALCULATED_GAMBLE": {
        "id": "Calculated Gamble",
        "tier": "S",
        "builds": [
          "sly"
        ],
        "syn": [
          "discard",
          "sly",
          "draw"
        ],
        "anti": [
          "poison"
        ],
        "notes": "0-cost: discard hand, draw same amount. Huge Sly enabler.",
        "mech": [
          "discard",
          "draw",
          "zero_cost",
          "sly_enabler"
        ],
        "role": "generator"
      },
      "NOXIOUS_FUMES": {
        "id": "Noxious Fumes",
        "tier": "B",
        "builds": [
          "poison"
        ],
        "syn": [
          "poison",
          "scaling"
        ],
        "anti": [
          "sly",
          "shiv"
        ],
        "notes": "Passive poison every turn on ALL enemies. Play it and just block while they die.",
        "mech": [
          "poison",
          "passive_damage"
        ],
        "role": "engine"
      },
      "CATALYST": {
        "id": "Catalyst",
        "tier": "S",
        "builds": [
          "poison"
        ],
        "syn": [
          "poison",
          "scaling"
        ],
        "anti": [
          "sly",
          "shiv"
        ],
        "notes": "DOUBLES poison stacks. Upgraded = triples. With Burst = quadruples. Win condition.",
        "mech": [
          "poison_amplify",
          "scaling"
        ],
        "role": "payoff"
      },
      "ACCURACY": {
        "id": "Accuracy",
        "tier": "S",
        "builds": [
          "shiv"
        ],
        "syn": [
          "shiv",
          "shiv_synergy",
          "damage",
          "scaling"
        ],
        "anti": [
          "sly",
          "poison"
        ],
        "notes": "Each copy adds to Shiv damage. Stack multiples. Turns Shivs from 4 to 20+ damage.",
        "mech": [
          "shiv_amplify",
          "scaling",
          "stackable"
        ],
        "role": "engine"
      },
      "BURST": {
        "id": "Burst",
        "tier": "C",
        "builds": [
          "poison",
          "sly"
        ],
        "syn": [
          "poison",
          "scaling",
          "draw"
        ],
        "anti": [
          "shiv"
        ],
        "notes": "Next skill plays twice. Burst into Catalyst = quadruple poison. Game-winning combo.",
        "mech": [
          "skill_doubler",
          "combo_enabler"
        ],
        "role": "payoff"
      },
      "INFINITE_BLADES": {
        "id": "Infinite Blades",
        "tier": "S",
        "builds": [
          "shiv"
        ],
        "syn": [
          "shiv",
          "shiv_synergy",
          "scaling"
        ],
        "anti": [
          "sly",
          "poison"
        ],
        "notes": "Shiv at start of turn. Upgraded = Innate, guaranteed turn 1. Core shiv card.",
        "mech": [
          "shiv_generator",
          "passive"
        ],
        "role": "engine"
      },
      "AFTER_IMAGE": {
        "id": "After Image",
        "tier": "A",
        "builds": [
          "shiv",
          "sly"
        ],
        "syn": [
          "shiv_synergy",
          "block",
          "scaling"
        ],
        "anti": [
          "poison"
        ],
        "notes": "Block per card played. With Shiv spam = massive free block every turn.",
        "mech": [
          "block",
          "passive",
          "per_card_payoff"
        ],
        "role": "payoff"
      },
      "REFLEX": {
        "id": "Reflex",
        "tier": "S",
        "builds": [
          "sly"
        ],
        "syn": [
          "sly",
          "draw"
        ],
        "anti": [
          "poison",
          "shiv"
        ],
        "notes": "3-cost, but has Sly - discard it for free draw 2. Never play it manually.",
        "mech": [
          "sly",
          "draw"
        ],
        "role": "payoff"
      },
      "TACTICIAN": {
        "id": "Tactician",
        "tier": "A",
        "builds": [
          "sly"
        ],
        "syn": [
          "sly",
          "scaling"
        ],
        "anti": [
          "poison",
          "shiv"
        ],
        "notes": "3-cost, but Sly = discard it for free energy. Core Sly enabler.",
        "mech": [
          "sly",
          "energy_gain"
        ],
        "role": "payoff"
      },
      "BLADE_DANCE": {
        "id": "Blade Dance",
        "tier": "A",
        "builds": [
          "shiv"
        ],
        "syn": [
          "shiv",
          "shiv_synergy",
          "damage"
        ],
        "anti": [
          "sly",
          "poison"
        ],
        "notes": "Generate 3 Shivs. Now Exhaust. At 3 Shivs = 12+ damage minimum.",
        "mech": [
          "shiv_generator",
          "exhaust"
        ],
        "role": "generator"
      },
      "CLOAK_AND_DAGGER": {
        "id": "Cloak And Dagger",
        "tier": "C",
        "builds": [
          "shiv",
          "any"
        ],
        "syn": [
          "shiv",
          "shiv_synergy",
          "block"
        ],
        "anti": [],
        "notes": "1 Shiv + block. Flexible card that works in any deck.",
        "mech": [
          "shiv_generator",
          "block"
        ],
        "role": "generator"
      },
      "KNIFE_TRAP": {
        "id": "Knife Trap",
        "tier": "C",
        "builds": [
          "shiv"
        ],
        "syn": [
          "shiv",
          "shiv_synergy",
          "damage"
        ],
        "anti": [],
        "notes": "Incredible finisher in shiv builds. Can play 15-20 Shivs in later turns.",
        "mech": [
          "shiv_generator",
          "scaling"
        ],
        "role": "generator"
      },
      "DEADLY_POISON": {
        "id": "Deadly Poison",
        "tier": "A",
        "builds": [
          "poison"
        ],
        "syn": [
          "poison"
        ],
        "anti": [
          "sly",
          "shiv"
        ],
        "notes": "Primary poison stacker. Reliable early application.",
        "mech": [
          "poison"
        ],
        "role": "generator"
      },
      "POISONED_STAB": {
        "id": "Poisoned Stab",
        "tier": "A",
        "builds": [
          "poison"
        ],
        "syn": [
          "poison",
          "damage"
        ],
        "anti": [
          "sly",
          "shiv"
        ],
        "notes": "Damage + poison. Efficient dual-purpose card.",
        "mech": [
          "poison",
          "damage"
        ],
        "role": "generator"
      },
      "BOUNCING_FLASK": {
        "id": "Bouncing Flask",
        "tier": "A",
        "builds": [
          "poison"
        ],
        "syn": [
          "poison",
          "aoe"
        ],
        "anti": [
          "sly",
          "shiv"
        ],
        "notes": "Spreads poison to all enemies. Key for multi-enemy rooms.",
        "mech": [
          "poison",
          "aoe"
        ],
        "role": "generator"
      },
      "HAZE": {
        "id": "Haze",
        "tier": "B",
        "builds": [
          "sly",
          "poison"
        ],
        "syn": [
          "sly",
          "poison",
          "aoe"
        ],
        "anti": [],
        "notes": "Sly + applies 4 poison to ALL enemies. Insane value when discarded free.",
        "mech": [
          "sly",
          "poison",
          "aoe"
        ],
        "role": "payoff"
      },
      "ACCELERANT": {
        "id": "Accelerant",
        "tier": "A",
        "builds": [
          "poison"
        ],
        "syn": [
          "poison",
          "scaling"
        ],
        "anti": [
          "sly",
          "shiv"
        ],
        "notes": "Doubles poison damage. Best power in poison builds. Upgraded is insane.",
        "mech": [
          "poison_amplify",
          "scaling"
        ],
        "role": "payoff"
      },
      "ACROBATICS": {
        "id": "Acrobatics",
        "tier": "S",
        "builds": [
          "sly",
          "any"
        ],
        "syn": [
          "sly",
          "draw",
          "discard"
        ],
        "anti": [],
        "notes": "Draw 3, discard 1. Excellent cycling and Sly enabler.",
        "mech": [
          "draw",
          "discard",
          "sly_enabler"
        ],
        "role": "generator"
      },
      "PREPARED": {
        "id": "Prepared",
        "tier": "S",
        "builds": [
          "sly",
          "any"
        ],
        "syn": [
          "sly",
          "draw",
          "discard"
        ],
        "anti": [],
        "notes": "Draw 1, discard 1 (0-cost). Efficient Sly trigger.",
        "mech": [
          "draw",
          "discard",
          "sly_enabler",
          "zero_cost"
        ],
        "role": "generator"
      },
      "ENVENOM": {
        "id": "Envenom",
        "tier": "A",
        "builds": [
          "poison",
          "shiv"
        ],
        "syn": [
          "poison",
          "shiv_synergy"
        ],
        "anti": [],
        "notes": "Attacks apply 1 poison. Synergizes Shiv + Poison builds.",
        "mech": [
          "poison",
          "passive"
        ],
        "role": "engine"
      },
      "FINISHER": {
        "id": "Finisher",
        "tier": "A",
        "builds": [
          "shiv"
        ],
        "syn": [
          "shiv",
          "shiv_synergy",
          "damage",
          "scaling"
        ],
        "anti": [
          "sly",
          "poison"
        ],
        "notes": "Damage per attack played this turn. With Shiv spam = massive single-target.",
        "mech": [
          "shiv_payoff",
          "damage",
          "scaling"
        ],
        "role": "payoff"
      },
      "CORPSE_EXPLOSION": {
        "id": "Corpse Explosion",
        "tier": "A",
        "builds": [
          "poison"
        ],
        "syn": [
          "poison",
          "aoe",
          "damage"
        ],
        "anti": [
          "sly",
          "shiv"
        ],
        "notes": "Spreads poison damage on kill. Key AoE for multi-enemy rooms in poison builds.",
        "mech": [
          "poison_payoff",
          "aoe"
        ],
        "role": "payoff"
      },
      "MIRAGE": {
        "id": "Mirage",
        "tier": "A",
        "builds": [
          "poison"
        ],
        "syn": [
          "poison",
          "block"
        ],
        "anti": [],
        "notes": "Block = total poison on all enemies. Insane defensive value in poison decks.",
        "mech": [
          "poison_payoff",
          "block",
          "exhaust"
        ],
        "role": "payoff"
      },
      "CRIPPLING_CLOUD": {
        "id": "Crippling Cloud",
        "tier": "A",
        "builds": [
          "poison",
          "any"
        ],
        "syn": [
          "poison",
          "aoe",
          "weak"
        ],
        "anti": [],
        "notes": "AoE poison + weak. One of few Silent AoE options.",
        "mech": [
          "poison",
          "aoe",
          "weak"
        ],
        "role": "generator"
      },
      "BLUR": {
        "id": "Blur",
        "tier": "A",
        "builds": [
          "any"
        ],
        "syn": [
          "block",
          "scaling"
        ],
        "anti": [],
        "notes": "Block that carries over. Retained block each cycle.",
        "mech": [
          "block",
          "retain"
        ]
      },
      "DAGGER_THROW": {
        "id": "Dagger Throw",
        "tier": "A",
        "builds": [
          "sly",
          "any"
        ],
        "syn": [
          "sly",
          "damage",
          "draw",
          "discard"
        ],
        "anti": [],
        "notes": "Damage, draw 1, discard 1. Sly enabler with offensive value.",
        "mech": [
          "damage",
          "draw",
          "discard",
          "sly_enabler"
        ],
        "role": "generator"
      },
      "DASH": {
        "id": "Dash",
        "tier": "A",
        "builds": [
          "any"
        ],
        "syn": [
          "block",
          "damage"
        ],
        "anti": [],
        "notes": "Solid block + damage. Reliable all-rounder.",
        "mech": [
          "block",
          "damage"
        ]
      },
      "SURVIVOR": {
        "id": "Survivor",
        "tier": "A",
        "builds": [
          "sly",
          "any"
        ],
        "syn": [
          "sly",
          "block",
          "discard"
        ],
        "anti": [],
        "notes": "Starting deck card with Sly. Block + discard = free Sly trigger. Your first Sly activator.",
        "mech": [
          "sly",
          "block",
          "discard"
        ],
        "role": "generator"
      },
      "EXPERTISE": {
        "id": "Expertise",
        "tier": "A",
        "builds": [
          "sly",
          "any"
        ],
        "syn": [
          "draw",
          "sly"
        ],
        "anti": [],
        "notes": "Draw up to 6 cards. Fills hand for Sly triggers.",
        "mech": [
          "draw"
        ],
        "role": "generator"
      },
      "BUBBLE_BUBBLE": {
        "id": "Bubble Bubble",
        "tier": "A",
        "builds": [
          "poison"
        ],
        "syn": [
          "poison",
          "scaling"
        ],
        "anti": [],
        "notes": "Efficient poison enhancer. Requires poison already on target.",
        "mech": [
          "poison_amplify"
        ],
        "role": "generator"
      },
      "BACKSTAB": {
        "id": "Backstab",
        "tier": "B",
        "builds": [
          "any"
        ],
        "syn": [
          "damage"
        ],
        "anti": [],
        "notes": "Innate. Free damage in opening hand. Always starts combat.",
        "mech": [
          "damage",
          "innate"
        ]
      },
      "BANE": {
        "id": "Bane",
        "tier": "B",
        "builds": [
          "poison"
        ],
        "syn": [
          "poison",
          "damage"
        ],
        "anti": [
          "sly",
          "shiv"
        ],
        "notes": "Deals double damage to poisoned enemies. Solid in poison builds.",
        "mech": [
          "damage",
          "poison_payoff"
        ],
        "role": "payoff"
      },
      "FAN_OF_KNIVES": {
        "id": "Fan Of Knives",
        "tier": "C",
        "builds": [
          "shiv",
          "any"
        ],
        "syn": [
          "shiv",
          "shiv_synergy",
          "aoe"
        ],
        "anti": [],
        "notes": "Generates Shivs that hit ALL enemies. Strong vs groups.",
        "mech": [
          "shiv_generator",
          "aoe"
        ],
        "role": "generator"
      },
      "SNAKEBITE": {
        "id": "Snakebite",
        "tier": "B",
        "builds": [
          "poison"
        ],
        "syn": [
          "poison",
          "damage"
        ],
        "anti": [
          "sly",
          "shiv"
        ],
        "notes": "Attack + poison. Good early poison applier.",
        "mech": [
          "damage",
          "poison"
        ],
        "role": "generator"
      },
      "FOOTWORK": {
        "id": "Footwork",
        "tier": "A",
        "builds": [
          "any"
        ],
        "syn": [
          "dexterity",
          "block"
        ],
        "anti": [],
        "notes": "Permanent Dexterity. Boosts all block cards.",
        "mech": [
          "dexterity",
          "permanent_scaling"
        ]
      },
      "NUNCHAKU": {
        "id": "Nunchaku",
        "tier": "B",
        "builds": [
          "shiv",
          "any"
        ],
        "syn": [
          "shiv_synergy",
          "scaling"
        ],
        "anti": [],
        "notes": "Energy per 10 attacks. Shiv decks trigger this constantly.",
        "mech": [
          "energy_gain",
          "per_attack_payoff"
        ]
      },
      "OUTMANEUVER": {
        "id": "Outmaneuver",
        "tier": "B",
        "builds": [
          "any"
        ],
        "syn": [
          "block"
        ],
        "anti": [],
        "notes": "Block + draw.",
        "mech": [
          "block",
          "draw"
        ]
      },
      "SKEWER": {
        "id": "Skewer",
        "tier": "B",
        "builds": [
          "any"
        ],
        "syn": [
          "damage",
          "scaling"
        ],
        "anti": [],
        "notes": "X-cost attack. Good energy dump.",
        "mech": [
          "damage",
          "scaling"
        ]
      },
      "CONCENTRATE": {
        "id": "Concentrate",
        "tier": "B",
        "builds": [
          "sly"
        ],
        "syn": [
          "discard",
          "sly",
          "draw"
        ],
        "anti": [
          "poison",
          "shiv"
        ],
        "notes": "Discard 3, draw 1, gain 2 energy. Strong Sly enabler in discard builds.",
        "mech": [
          "discard",
          "sly_enabler",
          "energy_gain"
        ],
        "role": "generator"
      },
      "UNLOAD": {
        "id": "Unload",
        "tier": "B",
        "builds": [
          "sly",
          "any"
        ],
        "syn": [
          "discard",
          "sly",
          "damage"
        ],
        "anti": [],
        "notes": "High damage, discard hand. Triggers all Sly cards.",
        "mech": [
          "damage",
          "discard",
          "sly_enabler"
        ],
        "role": "generator"
      },
      "FOLLOW_THROUGH": {
        "id": "Follow Through",
        "tier": "B",
        "builds": [
          "shiv",
          "any"
        ],
        "syn": [
          "shiv_synergy",
          "aoe",
          "weak"
        ],
        "anti": [],
        "notes": "AoE with mass Weak application.",
        "mech": [
          "aoe",
          "weak"
        ],
        "role": "payoff"
      },
      "LEG_SWEEP": {
        "id": "Leg Sweep",
        "tier": "B",
        "builds": [
          "any"
        ],
        "syn": [
          "block",
          "weak"
        ],
        "anti": [],
        "notes": "Block + Weak. Dual-purpose defense.",
        "mech": [
          "block",
          "weak"
        ]
      },
      "SHADOWMELD": {
        "id": "Shadowmeld",
        "tier": "B",
        "builds": [
          "any"
        ],
        "syn": [
          "block",
          "retain"
        ],
        "anti": [],
        "notes": "Block that stays next turn. Defensive safety.",
        "mech": [
          "block",
          "retain"
        ]
      },
      "PREDATOR": {
        "id": "Predator",
        "tier": "B",
        "builds": [
          "any"
        ],
        "syn": [
          "damage",
          "draw"
        ],
        "anti": [],
        "notes": "Attack + draw. Good cycling.",
        "mech": [
          "damage",
          "draw"
        ]
      },
      "NIGHT_TERROR": {
        "id": "Night Terror",
        "tier": "B",
        "builds": [
          "sly"
        ],
        "syn": [
          "sly",
          "damage",
          "discard"
        ],
        "anti": [
          "poison",
          "shiv"
        ],
        "notes": "Sly damage card.",
        "mech": [
          "sly",
          "damage",
          "discard"
        ],
        "role": "payoff"
      },
      "RICOCHET": {
        "id": "Ricochet",
        "tier": "B",
        "builds": [
          "sly"
        ],
        "syn": [
          "sly",
          "damage"
        ],
        "anti": [
          "poison",
          "shiv"
        ],
        "notes": "Sly multi-hit.",
        "mech": [
          "sly",
          "damage"
        ],
        "role": "payoff"
      },
      "FLICK_FLACK": {
        "id": "Flick Flack",
        "tier": "A",
        "builds": [
          "sly"
        ],
        "syn": [
          "sly",
          "damage",
          "aoe"
        ],
        "anti": [
          "poison",
          "shiv"
        ],
        "notes": "Sly AoE.",
        "mech": [
          "sly",
          "damage",
          "aoe"
        ],
        "role": "payoff"
      },
      "UNTOUCHABLE": {
        "id": "Untouchable",
        "tier": "S",
        "builds": [
          "sly"
        ],
        "syn": [
          "sly",
          "block"
        ],
        "anti": [
          "poison",
          "shiv"
        ],
        "notes": "Sly block.",
        "mech": [
          "sly",
          "block"
        ],
        "role": "payoff"
      },
      "ASSASSINATE": {
        "id": "Assassinate",
        "tier": "C",
        "builds": [
          "any"
        ],
        "syn": [
          "damage"
        ],
        "anti": [],
        "notes": "Innate 0-cost. Always in opening hand. Decent early damage.",
        "mech": [
          "damage",
          "innate",
          "zero_cost"
        ]
      },
      "DISTRACTION": {
        "id": "Distraction",
        "tier": "C",
        "builds": [
          "sly"
        ],
        "syn": [
          "discard",
          "sly"
        ],
        "anti": [
          "poison",
          "shiv"
        ],
        "notes": "Discard enabler. OK in sly builds.",
        "mech": [
          "discard",
          "sly_enabler"
        ],
        "role": "generator"
      },
      "FLASH": {
        "id": "Flash",
        "tier": "C",
        "builds": [
          "any"
        ],
        "syn": [
          "damage",
          "weak"
        ],
        "anti": [],
        "notes": "Low damage + Weak application.",
        "mech": [
          "damage",
          "weak"
        ]
      },
      "NIGHTMARE": {
        "id": "Nightmare",
        "tier": "C",
        "builds": [
          "any"
        ],
        "syn": [
          "scaling"
        ],
        "anti": [],
        "notes": "Too slow and expensive.",
        "mech": []
      },
      "MASTER_PLANNER": {
        "id": "Master Planner",
        "tier": "A",
        "builds": [
          "any"
        ],
        "syn": [
          "sly",
          "discard"
        ],
        "anti": [
          "poison",
          "shiv"
        ],
        "notes": "Sly effects from skills.",
        "mech": [
          "sly"
        ],
        "role": "engine"
      },
      "STRIKE": {
        "id": "Strike",
        "tier": "D",
        "builds": [],
        "syn": [
          "damage"
        ],
        "anti": [],
        "notes": "Starter attack. Replace ASAP.",
        "mech": [
          "damage"
        ]
      },
      "DEFEND": {
        "id": "Defend",
        "tier": "D",
        "builds": [],
        "syn": [
          "block"
        ],
        "anti": [],
        "notes": "Starter block. Replace ASAP.",
        "mech": [
          "block"
        ]
      },
      "GRAND_FINALE": {
        "id": "Grand Finale",
        "tier": "D",
        "builds": [],
        "syn": [],
        "anti": [
          "poison",
          "shiv",
          "sly"
        ],
        "notes": "Nearly impossible to trigger consistently.",
        "mech": []
      },
      "DEADLY_POISON+": {
        "id": "Deadly Poison+",
        "tier": "B",
        "builds": [
          "poison"
        ],
        "syn": [
          "poison"
        ],
        "anti": [],
        "notes": "Upgraded applies 7 poison - much stronger.",
        "mech": [
          "poison"
        ]
      },
      "TOOLS_OF_THE_TRADE": {
        "id": "Tools Of The Trade",
        "tier": "S",
        "builds": [
          "sly"
        ],
        "syn": [
          "sly",
          "discard",
          "draw",
          "scaling"
        ],
        "anti": [
          "poison",
          "shiv"
        ],
        "notes": "At start of turn, discard 1 and draw 1. Free Sly triggers every turn passively.",
        "mech": [
          "sly_enabler",
          "discard",
          "draw",
          "passive"
        ],
        "role": "engine"
      },
      "HAND_TRICK": {
        "id": "Hand Trick",
        "tier": "A",
        "builds": [
          "sly",
          "shiv",
          "poison"
        ],
        "syn": [
          "sly",
          "shiv_synergy",
          "poison",
          "scaling"
        ],
        "anti": [],
        "notes": "Sly. Hybrid enabler - lands Sly on Burst/Adrenaline enabling any combo.",
        "mech": [
          "sly",
          "combo_enabler"
        ],
        "role": "engine"
      },
      "CALTROPS": {
        "id": "Caltrops",
        "tier": "B",
        "builds": [
          "any"
        ],
        "syn": [
          "damage",
          "block"
        ],
        "anti": [],
        "notes": "Apply 3 Thorns. Passive damage when hit. Decent in defensive builds.",
        "mech": [
          "passive",
          "damage"
        ]
      },
      "EVISCERATE": {
        "id": "Eviscerate",
        "tier": "B",
        "builds": [
          "sly",
          "any"
        ],
        "syn": [
          "sly",
          "damage",
          "discard"
        ],
        "anti": [
          "poison"
        ],
        "notes": "Costs 1 less for each card discarded this turn. Often free with discard setup.",
        "mech": [
          "damage",
          "cost_reduction",
          "discard"
        ],
        "role": "payoff"
      },
      "STORM_OF_STEEL": {
        "id": "Storm Of Steel",
        "tier": "B",
        "builds": [
          "shiv"
        ],
        "syn": [
          "shiv",
          "shiv_synergy",
          "damage"
        ],
        "anti": [
          "sly",
          "poison"
        ],
        "notes": "Discard hand, create a Shiv for each card discarded. Exhaust. Massive Shiv generation.",
        "mech": [
          "shiv_generator",
          "discard",
          "exhaust"
        ],
        "role": "generator"
      },
      "PIERCING_WAIL": {
        "id": "Piercing Wail",
        "tier": "S",
        "builds": [
          "any"
        ],
        "syn": [
          "weak",
          "block"
        ],
        "anti": [],
        "notes": "Apply 6 Weak to ALL enemies. Exhaust. Massive AoE weak setup.",
        "mech": [
          "weak",
          "aoe",
          "exhaust"
        ]
      },
      "DOPPELGANGER": {
        "id": "Doppelganger",
        "tier": "B",
        "builds": [
          "any"
        ],
        "syn": [
          "draw",
          "scaling"
        ],
        "anti": [],
        "notes": "Next turn draw X more cards and gain X energy. Big setup turn.",
        "mech": [
          "draw",
          "energy_gain"
        ],
        "role": "generator"
      }
    },
    "defect": {
      "ECHO_FORM": {
        "id": "Echo Form",
        "tier": "S",
        "builds": [
          "any"
        ],
        "syn": [
          "orb",
          "scaling",
          "focus"
        ],
        "anti": [],
        "notes": "Best power in the game. Plays first card twice every turn. Always take.",
        "mech": [
          "card_doubler",
          "permanent_scaling"
        ],
        "role": "engine"
      },
      "DEFRAGMENT": {
        "id": "Defragment",
        "tier": "A",
        "builds": [
          "orb"
        ],
        "syn": [
          "orb",
          "focus",
          "scaling"
        ],
        "anti": [
          "claw"
        ],
        "notes": "Permanent Focus. Makes every orb more powerful. Take as many as possible.",
        "mech": [
          "focus",
          "permanent_scaling"
        ],
        "role": "engine"
      },
      "ALL_FOR_ONE": {
        "id": "All For One",
        "tier": "S",
        "builds": [
          "claw"
        ],
        "syn": [
          "zero_cost",
          "claw",
          "scaling"
        ],
        "anti": [
          "orb",
          "focus"
        ],
        "notes": "Plays all 0-cost from discard pile. Cornerstone of Claw builds. One card = full combo turn.",
        "mech": [
          "zero_cost",
          "claw_payoff",
          "combo_enabler"
        ],
        "role": "engine"
      },
      "CLAW": {
        "id": "Claw",
        "tier": "A",
        "builds": [
          "claw"
        ],
        "syn": [
          "zero_cost",
          "claw",
          "scaling"
        ],
        "anti": [
          "orb",
          "focus"
        ],
        "notes": "0-cost, gains +2 per Claw played. Core of Claw build. Stack as many as possible.",
        "mech": [
          "zero_cost",
          "claw",
          "scaling"
        ],
        "role": "generator"
      },
      "ELECTRODYNAMICS": {
        "id": "Electrodynamics",
        "tier": "A",
        "builds": [
          "orb"
        ],
        "syn": [
          "lightning",
          "orb",
          "focus",
          "aoe"
        ],
        "anti": [
          "claw"
        ],
        "notes": "Lightning hits ALL enemies instead of random. Game-changing for orb builds.",
        "mech": [
          "orb_upgrade",
          "aoe",
          "lightning"
        ],
        "role": "engine"
      },
      "BIASED_COGNITION": {
        "id": "Biased Cognition",
        "tier": "A",
        "builds": [
          "orb"
        ],
        "syn": [
          "focus",
          "orb",
          "scaling"
        ],
        "anti": [],
        "notes": "Massive Focus gain. With enough Focus, orbs become overwhelming.",
        "mech": [
          "focus",
          "scaling"
        ],
        "role": "engine"
      },
      "UPROAR": {
        "id": "Uproar",
        "tier": "S",
        "builds": [
          "any"
        ],
        "syn": [
          "damage",
          "scaling"
        ],
        "anti": [],
        "notes": "Deal 5 twice, play random attack from draw pile. Often chains into more attacks. Highlighted by multiple guides.",
        "mech": [
          "damage",
          "chain"
        ],
        "role": "payoff"
      },
      "COOLHEADED": {
        "id": "Coolheaded",
        "tier": "B",
        "builds": [
          "orb"
        ],
        "syn": [
          "frost",
          "orb",
          "draw",
          "block"
        ],
        "anti": [],
        "notes": "Channel frost + draw. Upgraded draws 2. Strong in any Defect deck.",
        "mech": [
          "frost",
          "draw",
          "orb_channel"
        ],
        "role": "generator"
      },
      "BARRAGE": {
        "id": "Barrage",
        "tier": "B",
        "builds": [
          "orb"
        ],
        "syn": [
          "orb",
          "damage",
          "multi_hit"
        ],
        "anti": [],
        "notes": "Hits per orb slot. More slots = more hits. Strong in focus builds.",
        "mech": [
          "damage",
          "multi_hit",
          "orb_payoff"
        ],
        "role": "payoff"
      },
      "BALL_LIGHTNING": {
        "id": "Ball Lightning",
        "tier": "B",
        "builds": [
          "orb"
        ],
        "syn": [
          "lightning",
          "orb"
        ],
        "anti": [],
        "notes": "Channel lightning + damage. Core of lightning builds.",
        "mech": [
          "lightning",
          "orb_channel",
          "damage"
        ],
        "role": "generator"
      },
      "COLD_SNAP": {
        "id": "Cold Snap",
        "tier": "B",
        "builds": [
          "orb"
        ],
        "syn": [
          "frost",
          "orb",
          "block"
        ],
        "anti": [],
        "notes": "Channel frost + damage. Core of frost/block builds.",
        "mech": [
          "frost",
          "orb_channel",
          "damage"
        ],
        "role": "generator"
      },
      "GLACIER": {
        "id": "Glacier",
        "tier": "B",
        "builds": [
          "orb"
        ],
        "syn": [
          "frost",
          "orb",
          "block"
        ],
        "anti": [],
        "notes": "Channel 2 Frost + block. Excellent defensive orb card.",
        "mech": [
          "frost",
          "orb_channel",
          "block"
        ],
        "role": "generator"
      },
      "DARKNESS": {
        "id": "Darkness",
        "tier": "A",
        "builds": [
          "orb"
        ],
        "syn": [
          "dark",
          "orb",
          "scaling"
        ],
        "anti": [],
        "notes": "Channel dark + upgrade it. Dark orbs accumulate massive damage.",
        "mech": [
          "dark",
          "orb_channel",
          "scaling"
        ],
        "role": "generator"
      },
      "CAPACITOR": {
        "id": "Capacitor",
        "tier": "B",
        "builds": [
          "orb"
        ],
        "syn": [
          "orb",
          "focus",
          "scaling"
        ],
        "anti": [
          "claw"
        ],
        "notes": "More orb slots. More passive effects per turn. Pairs great with Focus.",
        "mech": [
          "orb_slots",
          "scaling"
        ],
        "role": "generator"
      },
      "COMPILE_DRIVER": {
        "id": "Compile Driver",
        "tier": "A",
        "builds": [
          "claw",
          "orb"
        ],
        "syn": [
          "zero_cost",
          "claw",
          "draw"
        ],
        "anti": [],
        "notes": "Damage + draw cards per orb type. Key draw engine for both builds.",
        "mech": [
          "draw",
          "damage"
        ],
        "role": "payoff"
      },
      "SCRAPE": {
        "id": "Scrape",
        "tier": "B",
        "builds": [
          "claw"
        ],
        "syn": [
          "zero_cost",
          "claw",
          "draw"
        ],
        "anti": [
          "orb"
        ],
        "notes": "Draw cards and discard non-attacks. Cycling for claw builds.",
        "mech": [
          "draw",
          "discard"
        ],
        "role": "generator"
      },
      "GO_FOR_THE_EYES": {
        "id": "Go For The Eyes",
        "tier": "A",
        "builds": [
          "claw",
          "any"
        ],
        "syn": [
          "zero_cost",
          "claw",
          "weak"
        ],
        "anti": [
          "orb"
        ],
        "notes": "0-cost weak application. Core of claw builds.",
        "mech": [
          "zero_cost",
          "weak",
          "claw"
        ],
        "role": "generator"
      },
      "FTL": {
        "id": "FTL",
        "tier": "B",
        "builds": [
          "claw"
        ],
        "syn": [
          "zero_cost",
          "claw",
          "draw"
        ],
        "anti": [
          "orb"
        ],
        "notes": "0-cost attack that draws. Essential for cycling in claw builds.",
        "mech": [
          "zero_cost",
          "draw",
          "claw"
        ],
        "role": "generator"
      },
      "MULTICAST": {
        "id": "Multicast",
        "tier": "B",
        "builds": [
          "orb"
        ],
        "syn": [
          "orb",
          "evoke",
          "scaling"
        ],
        "anti": [],
        "notes": "Evoke orbs multiple times. Massive damage with Dark or Lightning orbs.",
        "mech": [
          "evoke",
          "orb_payoff"
        ],
        "role": "payoff"
      },
      "DUALCAST": {
        "id": "Dualcast",
        "tier": "B",
        "builds": [
          "orb"
        ],
        "syn": [
          "orb",
          "evoke",
          "lightning"
        ],
        "anti": [],
        "notes": "Evoke first orb twice. Great for Dark orb payoffs.",
        "mech": [
          "evoke",
          "orb_payoff"
        ],
        "role": "payoff"
      },
      "STATIC_DISCHARGE": {
        "id": "Static Discharge",
        "tier": "C",
        "builds": [
          "orb",
          "any"
        ],
        "syn": [
          "lightning",
          "orb"
        ],
        "anti": [
          "claw"
        ],
        "notes": "Channel lightning on taking damage. Strong passive orb generation.",
        "mech": [
          "lightning",
          "passive"
        ],
        "role": "generator"
      },
      "SUPERCRITICAL": {
        "id": "Supercritical",
        "tier": "A",
        "builds": [
          "orb"
        ],
        "syn": [
          "focus",
          "orb",
          "scaling"
        ],
        "anti": [],
        "notes": "2 Focus burst for big damage turns.",
        "mech": [
          "focus",
          "scaling"
        ],
        "role": "generator"
      },
      "BUFFER": {
        "id": "Buffer",
        "tier": "A",
        "builds": [
          "orb",
          "any"
        ],
        "syn": [
          "block",
          "scaling"
        ],
        "anti": [],
        "notes": "Prevent HP loss once. Strong defensive option.",
        "mech": [
          "block",
          "damage_prevention"
        ],
        "role": "payoff"
      },
      "REBOUND": {
        "id": "Rebound",
        "tier": "A",
        "builds": [
          "orb",
          "any"
        ],
        "syn": [
          "orb",
          "scaling"
        ],
        "anti": [],
        "notes": "Puts played card on top of draw. Useful for cycling key cards.",
        "mech": [
          "card_retrieve"
        ],
        "role": "generator"
      },
      "BLIZZARD": {
        "id": "Blizzard",
        "tier": "B",
        "builds": [
          "orb"
        ],
        "syn": [
          "frost",
          "orb",
          "aoe"
        ],
        "anti": [],
        "notes": "AoE damage based on frost channeled. Good in frost builds.",
        "mech": [
          "frost",
          "aoe",
          "damage"
        ],
        "role": "payoff"
      },
      "BULLSEYE": {
        "id": "Bullseye",
        "tier": "B",
        "builds": [
          "orb"
        ],
        "syn": [
          "lightning",
          "orb",
          "damage"
        ],
        "anti": [],
        "notes": "Damage + more orb interaction.",
        "mech": [
          "damage",
          "lightning"
        ],
        "role": "payoff"
      },
      "AGGREGATE": {
        "id": "Aggregate",
        "tier": "B",
        "builds": [
          "orb"
        ],
        "syn": [
          "orb",
          "energy_gain"
        ],
        "anti": [],
        "notes": "Energy per orb type. Decent energy generation.",
        "mech": [
          "energy_gain",
          "orb"
        ],
        "role": "generator"
      },
      "STORM": {
        "id": "Storm",
        "tier": "B",
        "builds": [
          "orb"
        ],
        "syn": [
          "lightning",
          "orb",
          "aoe"
        ],
        "anti": [],
        "notes": "Channel lightning per skill played. AoE with skills.",
        "mech": [
          "lightning",
          "passive",
          "aoe"
        ],
        "role": "generator"
      },
      "RECURSION": {
        "id": "Recursion",
        "tier": "B",
        "builds": [
          "orb"
        ],
        "syn": [
          "orb",
          "scaling"
        ],
        "anti": [],
        "notes": "Evoke then re-channel same orb. Cycling key orbs.",
        "mech": [
          "evoke",
          "orb_channel"
        ],
        "role": "generator"
      },
      "FORCE_FIELD": {
        "id": "Force Field",
        "tier": "B",
        "builds": [
          "orb"
        ],
        "syn": [
          "orb",
          "block"
        ],
        "anti": [],
        "notes": "Cost reduces per orb type. Free in diverse builds.",
        "mech": [
          "block",
          "cost_reduction"
        ],
        "role": "payoff"
      },
      "CONSUME": {
        "id": "Consume",
        "tier": "B",
        "builds": [
          "orb"
        ],
        "syn": [
          "focus",
          "orb",
          "scaling"
        ],
        "anti": [],
        "notes": "Remove orb slot for Focus. Powerful in orb builds.",
        "mech": [
          "focus",
          "scaling"
        ],
        "role": "engine"
      },
      "SKIM": {
        "id": "Skim",
        "tier": "B",
        "builds": [
          "any"
        ],
        "syn": [
          "draw"
        ],
        "anti": [],
        "notes": "Pure draw. Consistent card quality.",
        "mech": [
          "draw"
        ],
        "role": "generator"
      },
      "TURBO": {
        "id": "Turbo",
        "tier": "B",
        "builds": [
          "claw",
          "any"
        ],
        "syn": [
          "zero_cost",
          "energy_gain"
        ],
        "anti": [],
        "notes": "2 energy + status to discard. Good energy gen.",
        "mech": [
          "energy_gain"
        ],
        "role": "generator"
      },
      "PANACHE": {
        "id": "Panache",
        "tier": "B",
        "builds": [
          "claw"
        ],
        "syn": [
          "zero_cost",
          "aoe",
          "claw"
        ],
        "anti": [],
        "notes": "Deal 10 to all per 5 cards played. Great with claw spam.",
        "mech": [
          "aoe",
          "per_card_payoff"
        ],
        "role": "payoff"
      },
      "METEOR_STRIKE": {
        "id": "Meteor Strike",
        "tier": "B",
        "builds": [
          "orb"
        ],
        "syn": [
          "orb",
          "damage",
          "scaling"
        ],
        "anti": [],
        "notes": "Huge damage + 3 plasma orbs.",
        "mech": [
          "damage",
          "orb_channel",
          "plasma"
        ],
        "role": "payoff"
      },
      "ZAP": {
        "id": "Zap",
        "tier": "C",
        "builds": [
          "orb"
        ],
        "syn": [
          "lightning",
          "orb"
        ],
        "anti": [],
        "notes": "Basic lightning channel. Early filler.",
        "mech": [
          "lightning",
          "orb_channel"
        ],
        "role": "generator"
      },
      "STACK": {
        "id": "Stack",
        "tier": "C",
        "builds": [
          "any"
        ],
        "syn": [
          "block",
          "draw"
        ],
        "anti": [],
        "notes": "Block equal to cards in discard. Situational.",
        "mech": [
          "block",
          "conditional"
        ],
        "role": "generator"
      },
      "FINESSE": {
        "id": "Finesse",
        "tier": "C",
        "builds": [
          "any"
        ],
        "syn": [
          "draw",
          "block"
        ],
        "anti": [],
        "notes": "Draw 1, block 2. Not efficient enough.",
        "mech": [
          "draw",
          "block"
        ],
        "role": "generator"
      },
      "LOCKON": {
        "id": "Lockon",
        "tier": "C",
        "builds": [
          "orb"
        ],
        "syn": [
          "lightning",
          "orb",
          "vulnerable"
        ],
        "anti": [],
        "notes": "Vulnerable. Useful with focus builds.",
        "mech": [
          "vulnerable"
        ],
        "role": "generator"
      },
      "THUNDER_STRIKE": {
        "id": "Thunder Strike",
        "tier": "B",
        "builds": [
          "orb"
        ],
        "syn": [
          "lightning",
          "orb",
          "damage"
        ],
        "anti": [],
        "notes": "Scales with lightning channeled. OK in lightning builds.",
        "mech": [
          "lightning",
          "damage",
          "scaling"
        ],
        "role": "payoff"
      },
      "REPROGRAM": {
        "id": "Reprogram",
        "tier": "C",
        "builds": [
          "orb"
        ],
        "syn": [
          "focus",
          "orb",
          "strength"
        ],
        "anti": [],
        "notes": "Lose Focus, gain Strength + Dexterity. Situational.",
        "mech": [
          "focus"
        ],
        "role": "engine"
      },
      "GENETIC_ALGORITHM": {
        "id": "Genetic Algorithm",
        "tier": "C",
        "builds": [
          "any"
        ],
        "syn": [
          "block",
          "scaling"
        ],
        "anti": [],
        "notes": "Block that grows per upgrade. Interesting scaling.",
        "mech": [
          "block",
          "scaling"
        ],
        "role": "generator"
      },
      "LOOP": {
        "id": "Loop",
        "tier": "C",
        "builds": [
          "orb"
        ],
        "syn": [
          "orb",
          "scaling"
        ],
        "anti": [],
        "notes": "Re-channel leftmost orb. Useful for keeping good orbs.",
        "mech": [
          "orb_channel"
        ],
        "role": "generator"
      },
      "HYPER_BEAM": {
        "id": "Hyper Beam",
        "tier": "C",
        "builds": [
          "any"
        ],
        "syn": [
          "damage",
          "aoe"
        ],
        "anti": [
          "frost",
          "focus",
          "orb"
        ],
        "notes": "Massive AoE but resets Focus to 0. Dangerous in orb builds.",
        "mech": [
          "damage",
          "aoe"
        ],
        "role": "payoff"
      },
      "BOOT_SEQUENCE": {
        "id": "Boot Sequence",
        "tier": "C",
        "builds": [
          "any"
        ],
        "syn": [
          "block"
        ],
        "anti": [],
        "notes": "Innate block. Solid early.",
        "mech": [
          "block",
          "innate"
        ],
        "role": "payoff"
      },
      "STRIKE": {
        "id": "Strike",
        "tier": "D",
        "builds": [],
        "syn": [
          "damage"
        ],
        "anti": [],
        "notes": "Starter. Replace.",
        "mech": [
          "damage"
        ]
      },
      "DEFEND": {
        "id": "Defend",
        "tier": "D",
        "builds": [],
        "syn": [
          "block"
        ],
        "anti": [],
        "notes": "Starter. Replace.",
        "mech": [
          "block"
        ]
      },
      "VOID": {
        "id": "Void",
        "tier": "D",
        "builds": [],
        "syn": [],
        "anti": [],
        "notes": "Status card enemy creates. Never take.",
        "mech": []
      },
      "FERAL": {
        "id": "Feral",
        "tier": "A",
        "builds": [
          "claw"
        ],
        "syn": [
          "zero_cost",
          "claw",
          "scaling"
        ],
        "anti": [
          "orb",
          "focus"
        ],
        "notes": "Essentially Echo Form for 0-cost cards. Cheaper to set up than Echo Form in Claw decks.",
        "mech": [
          "zero_cost",
          "claw",
          "card_doubler"
        ],
        "role": "engine"
      },
      "HOLOGRAM": {
        "id": "Hologram",
        "tier": "B",
        "builds": [
          "claw"
        ],
        "syn": [
          "zero_cost",
          "claw",
          "draw"
        ],
        "anti": [],
        "notes": "Puts a card back in hand. Upgrade removes Exhaust. Returns Claw, Scrape, or All For One.",
        "mech": [
          "card_retrieve",
          "zero_cost"
        ],
        "role": "generator"
      },
      "MOMENTUM_STRIKE": {
        "id": "Momentum Strike",
        "tier": "B",
        "builds": [
          "claw"
        ],
        "syn": [
          "zero_cost",
          "claw",
          "damage"
        ],
        "anti": [],
        "notes": "Can be reduced to 0-cost. Synergizes with other 0-cost spam.",
        "mech": [
          "damage",
          "cost_reduction",
          "zero_cost"
        ],
        "role": "generator"
      },
      "BEAM_CELL": {
        "id": "Beam Cell",
        "tier": "B",
        "builds": [
          "claw",
          "orb"
        ],
        "syn": [
          "zero_cost",
          "claw",
          "vulnerable"
        ],
        "anti": [],
        "notes": "0-cost Vulnerable applicator. Core in Claw decks for easy Vulnerable.",
        "mech": [
          "vulnerable",
          "zero_cost",
          "claw"
        ],
        "role": "generator"
      },
      "MACHINE_LEARNING": {
        "id": "Machine Learning",
        "tier": "B",
        "builds": [
          "claw",
          "orb"
        ],
        "syn": [
          "draw",
          "scaling"
        ],
        "anti": [],
        "notes": "Draw an extra card each turn. With All For One becomes somewhat redundant.",
        "mech": [
          "draw",
          "passive"
        ],
        "role": "generator"
      },
      "CHILL": {
        "id": "Chill",
        "tier": "B",
        "builds": [
          "orb"
        ],
        "syn": [
          "frost",
          "orb",
          "block"
        ],
        "anti": [],
        "notes": "Channel 1 Frost orb per enemy. Great AoE frost generation.",
        "mech": [
          "frost",
          "orb_channel",
          "aoe"
        ],
        "role": "generator"
      },
      "WHITE_NOISE": {
        "id": "White Noise",
        "tier": "B",
        "builds": [
          "orb"
        ],
        "syn": [
          "orb",
          "scaling"
        ],
        "anti": [],
        "notes": "Add a random Power to your hand. Useful for finding Defragment or Echo Form.",
        "mech": [
          "draw"
        ],
        "role": "generator"
      },
      "SELF_REPAIR": {
        "id": "Self Repair",
        "tier": "B",
        "builds": [
          "orb",
          "any"
        ],
        "syn": [
          "scaling"
        ],
        "anti": [],
        "notes": "At end of combat heal 7 HP. Great sustain in orb builds.",
        "mech": [],
        "role": "payoff"
      }
    },
    "regent": {
      "GLOW": {
        "id": "Glow",
        "tier": "S",
        "builds": [
          "stars",
          "any"
        ],
        "syn": [
          "stellar",
          "stars",
          "draw",
          "scaling"
        ],
        "anti": [
          "forge"
        ],
        "notes": "Gain 1 Star, draw 2 cards. The backbone common — engine without needing a rare.",
        "mech": [
          "star_gain",
          "draw"
        ],
        "role": "generator"
      },
      "BIG_BANG": {
        "id": "Big Bang",
        "tier": "S",
        "builds": [
          "stars",
          "any"
        ],
        "syn": [
          "stellar",
          "stars",
          "exhaust",
          "scaling"
        ],
        "anti": [
          "forge"
        ],
        "notes": "Draw 1, gain 1 Star, 1 energy, Forge 5. Exhaust. Hits every Regent mechanic in one card.",
        "mech": [
          "star_gain",
          "energy_gain",
          "draw",
          "exhaust",
          "zero_cost"
        ],
        "role": "generator"
      },
      "CONVERGENCE": {
        "id": "Convergence",
        "tier": "S",
        "builds": [
          "stars"
        ],
        "syn": [
          "stellar",
          "stars",
          "draw",
          "scaling"
        ],
        "anti": [
          "forge"
        ],
        "notes": "Retain your hand this turn, gain 1 Star + 1 energy next turn. Elite setup insurance.",
        "mech": [
          "retain",
          "star_gain",
          "energy_gain"
        ],
        "role": "payoff"
      },
      "VOID_FORM": {
        "id": "Void Form",
        "tier": "S",
        "builds": [
          "any"
        ],
        "syn": [
          "stellar",
          "scaling",
          "zero_cost"
        ],
        "anti": [
          "forge"
        ],
        "notes": "End turn. First 2 cards each turn cost 0 energy. Bends turn economy — one of the strongest powers.",
        "mech": [
          "zero_cost_enabler",
          "energy_gain"
        ],
        "role": "engine"
      },
      "REFLECT": {
        "id": "Reflect",
        "tier": "S",
        "builds": [
          "stars"
        ],
        "syn": [
          "stellar",
          "stars",
          "block",
          "damage"
        ],
        "anti": [
          "forge"
        ],
        "notes": "Gain 17 Block. Blocked damage reflects back to attacker. Offense AND defense in one.",
        "mech": [
          "block",
          "damage",
          "counter"
        ],
        "role": "payoff"
      },
      "PARTICLE_WALL": {
        "id": "Particle Wall",
        "tier": "S",
        "builds": [
          "stars"
        ],
        "syn": [
          "stellar",
          "stars",
          "block",
          "zero_cost"
        ],
        "anti": [
          "forge"
        ],
        "notes": "Gain 9 Block, card returns to hand. Zero-cost defensive anchor — never wastes a slot since it cycles back.",
        "mech": [
          "block",
          "zero_cost",
          "recyclable"
        ],
        "role": "payoff"
      },
      "BOMBARDMENT": {
        "id": "Bombardment",
        "tier": "S",
        "builds": [
          "any"
        ],
        "syn": [
          "stellar",
          "damage",
          "aoe",
          "exhaust"
        ],
        "anti": [],
        "notes": "3-cost 18 damage, plays from exhaust pile every turn. One card = 18 free damage forever.",
        "mech": [
          "damage",
          "passive",
          "exhaust"
        ],
        "role": "payoff"
      },
      "GUARDS": {
        "id": "Guards!!!",
        "tier": "S",
        "builds": [
          "stars",
          "any"
        ],
        "syn": [
          "stellar",
          "stars",
          "block",
          "exhaust"
        ],
        "anti": [
          "forge"
        ],
        "notes": "Transform hand cards into Minion Sacrifice (0-cost, 9 block each). Targeted exhaust + defense.",
        "mech": [
          "block",
          "exhaust",
          "hand_transform"
        ],
        "role": "generator"
      },
      "COMET": {
        "id": "Comet",
        "tier": "S",
        "builds": [
          "stars"
        ],
        "syn": [
          "stellar",
          "stars",
          "damage",
          "aoe",
          "zero_cost"
        ],
        "anti": [
          "forge"
        ],
        "notes": "0-cost 33 damage + 3 Weak + 3 Vulnerable. The payoff that ends fights once Stars online.",
        "mech": [
          "damage",
          "debuff",
          "vulnerable",
          "weak",
          "zero_cost"
        ],
        "role": "payoff"
      },
      "CHILD_OF_THE_STARS": {
        "id": "Child Of The Stars",
        "tier": "S",
        "builds": [
          "stars"
        ],
        "syn": [
          "stellar",
          "stars",
          "block",
          "scaling"
        ],
        "anti": [
          "forge"
        ],
        "notes": "Gain 2 block for each star spent. Genesis = 6 free block per turn minimum.",
        "mech": [
          "block",
          "star_payoff",
          "scaling"
        ],
        "role": "payoff"
      },
      "RADIATE": {
        "id": "Radiate",
        "tier": "A",
        "builds": [
          "stars"
        ],
        "syn": [
          "stellar",
          "stars",
          "aoe",
          "damage"
        ],
        "anti": [
          "forge"
        ],
        "notes": "0-cost: 3 damage to ALL per star gained this turn. AoE payoff card. Strong once star engine online.",
        "mech": [
          "damage",
          "aoe",
          "star_payoff",
          "zero_cost"
        ],
        "role": "payoff"
      },
      "ROYAL_GAMBLE": {
        "id": "Royal Gamble",
        "tier": "A",
        "builds": [
          "stars"
        ],
        "syn": [
          "stellar",
          "stars",
          "scaling"
        ],
        "anti": [
          "forge"
        ],
        "notes": "0-cost gain 9 stars, exhaust. Massive star dump for big payoff turns.",
        "mech": [
          "star_gain",
          "exhaust",
          "zero_cost"
        ],
        "role": "generator"
      },
      "GENESIS": {
        "id": "Genesis",
        "tier": "A",
        "builds": [
          "stars"
        ],
        "syn": [
          "stellar",
          "stars",
          "scaling"
        ],
        "anti": [
          "forge"
        ],
        "notes": "At start of turn gain 2 stars. Turns almost-enough turns into real payoff turns.",
        "mech": [
          "star_gain",
          "passive"
        ],
        "role": "engine"
      },
      "SHINING_STRIKE": {
        "id": "Shining Strike",
        "tier": "S",
        "builds": [
          "stars"
        ],
        "syn": [
          "stellar",
          "stars",
          "damage",
          "scaling"
        ],
        "anti": [
          "forge"
        ],
        "notes": "Damage + 2 stars, returns to top of draw pile. Cycles for consistent star generation.",
        "mech": [
          "damage",
          "star_gain",
          "recyclable"
        ],
        "role": "generator"
      },
      "HIDDEN_CACHE": {
        "id": "Hidden Cache",
        "tier": "S",
        "builds": [
          "stars"
        ],
        "syn": [
          "stellar",
          "stars",
          "scaling"
        ],
        "anti": [
          "forge"
        ],
        "notes": "Gain 1 star now, 3 stars next turn. Best setup for big Radiate turns.",
        "mech": [
          "star_gain"
        ],
        "role": "generator"
      },
      "FOREGONE_CONCLUSION": {
        "id": "Foregone Conclusion",
        "tier": "A",
        "builds": [
          "stars",
          "any"
        ],
        "syn": [
          "stellar",
          "stars",
          "draw",
          "scaling"
        ],
        "anti": [
          "forge"
        ],
        "notes": "Next turn put 2 cards from draw pile into hand. Guaranteed key card retrieval.",
        "mech": [
          "card_retrieve",
          "draw"
        ],
        "role": "generator"
      },
      "GAMMA_BLAST": {
        "id": "Gamma Blast",
        "tier": "A",
        "builds": [
          "stars"
        ],
        "syn": [
          "stellar",
          "stars",
          "damage",
          "zero_cost",
          "aoe"
        ],
        "anti": [
          "forge"
        ],
        "notes": "0-cost 13 damage + 2 Weak + 2 Vulnerable. Child of Stars = 6 free block. Excellent rate.",
        "mech": [
          "damage",
          "debuff",
          "zero_cost"
        ],
        "role": "payoff"
      },
      "SEALED_THRONE": {
        "id": "Sealed Throne",
        "tier": "A",
        "builds": [
          "any"
        ],
        "syn": [
          "stellar",
          "stars",
          "scaling"
        ],
        "anti": [
          "forge"
        ],
        "notes": "Gain 1 star per card played. Near-infinite loops when assembled.",
        "mech": [
          "star_gain",
          "passive",
          "per_card_payoff"
        ],
        "role": "engine"
      },
      "PHOTON_CUT": {
        "id": "Photon Cut",
        "tier": "A",
        "builds": [
          "stars"
        ],
        "syn": [
          "stellar",
          "stars",
          "damage",
          "draw"
        ],
        "anti": [
          "forge"
        ],
        "notes": "Damage + draw + deck manipulation. Consistently useful.",
        "mech": [
          "damage",
          "draw"
        ],
        "role": "generator"
      },
      "ALIGNMENT": {
        "id": "Alignment",
        "tier": "C",
        "builds": [
          "stars"
        ],
        "syn": [
          "stellar",
          "exhaust",
          "scaling"
        ],
        "anti": [
          "forge"
        ],
        "notes": "0-cost gain 2 energy. Core of Glow+Alignment infinite. Strong energy conversion.",
        "mech": [
          "energy_gain",
          "zero_cost"
        ],
        "role": "generator"
      },
      "KNOCKOUT_BLOW": {
        "id": "Knockout Blow",
        "tier": "A",
        "builds": [
          "stars"
        ],
        "syn": [
          "stellar",
          "stars",
          "damage"
        ],
        "anti": [
          "forge"
        ],
        "notes": "3-cost 30 damage. If kills enemy gain 5 stars. Big early damage.",
        "mech": [
          "damage",
          "star_gain",
          "conditional"
        ],
        "role": "generator"
      },
      "GLIMMER": {
        "id": "Glimmer",
        "tier": "C",
        "builds": [
          "stars"
        ],
        "syn": [
          "stellar",
          "draw",
          "scaling"
        ],
        "anti": [
          "forge"
        ],
        "notes": "Draw 3, put 1 on top. Guarantees key cards for next turn.",
        "mech": [
          "draw",
          "deck_manipulation"
        ],
        "role": "generator"
      },
      "SEVEN_STARS": {
        "id": "Seven Stars",
        "tier": "A",
        "builds": [
          "stars"
        ],
        "syn": [
          "stellar",
          "stars",
          "aoe",
          "damage"
        ],
        "anti": [
          "forge"
        ],
        "notes": "0-cost 7 damage × 7 to all enemies. Big AoE payoff.",
        "mech": [
          "damage",
          "aoe",
          "zero_cost"
        ],
        "role": "payoff"
      },
      "DECISIONS_DECISIONS": {
        "id": "Decisions Decisions",
        "tier": "A",
        "builds": [
          "stars"
        ],
        "syn": [
          "stellar",
          "stars",
          "scaling",
          "draw"
        ],
        "anti": [
          "forge"
        ],
        "notes": "0★10: draw 3, play chosen skill 3 times. D+D into Royal Gamble = 27 stars total.",
        "mech": [
          "skill_multiply",
          "draw",
          "star_payoff"
        ],
        "role": "payoff"
      },
      "GATHER_LIGHT": {
        "id": "Gather Light",
        "tier": "A",
        "builds": [
          "stars"
        ],
        "syn": [
          "stellar",
          "stars",
          "block"
        ],
        "anti": [
          "forge"
        ],
        "notes": "Block + 1 star. Role-player: block + incidental star generation.",
        "mech": [
          "block",
          "star_gain"
        ],
        "role": "generator"
      },
      "SOLAR_STRIKE": {
        "id": "Solar Strike",
        "tier": "B",
        "builds": [
          "stars"
        ],
        "syn": [
          "stellar",
          "stars",
          "damage"
        ],
        "anti": [
          "forge"
        ],
        "notes": "Damage + 1 star. Efficient and flexible.",
        "mech": [
          "damage",
          "star_gain"
        ],
        "role": "generator"
      },
      "ASTRAL_PULSE": {
        "id": "Astral Pulse",
        "tier": "B",
        "builds": [
          "stars"
        ],
        "syn": [
          "stellar",
          "stars",
          "aoe",
          "zero_cost"
        ],
        "anti": [
          "forge"
        ],
        "notes": "0-cost AoE. Works with starting 3 stars.",
        "mech": [
          "damage",
          "aoe",
          "zero_cost"
        ],
        "role": "payoff"
      },
      "GUIDING_STAR": {
        "id": "Guiding Star",
        "tier": "A",
        "builds": [
          "stars"
        ],
        "syn": [
          "stellar",
          "stars",
          "damage",
          "draw"
        ],
        "anti": [
          "forge"
        ],
        "notes": "Damage + draw 2 next turn. Consistent delayed draw.",
        "mech": [
          "damage",
          "draw"
        ],
        "role": "generator"
      },
      "COSMIC_INDIFFERENCE": {
        "id": "Cosmic Indifference",
        "tier": "B",
        "builds": [
          "stars"
        ],
        "syn": [
          "stellar",
          "stars",
          "block",
          "scaling"
        ],
        "anti": [
          "forge"
        ],
        "notes": "Block + retrieve card from discard. Utility.",
        "mech": [
          "block",
          "card_retrieve"
        ],
        "role": "generator"
      },
      "HEGEMONY": {
        "id": "Hegemony",
        "tier": "B",
        "builds": [
          "stars"
        ],
        "syn": [
          "stellar",
          "stars",
          "damage"
        ],
        "anti": [
          "forge"
        ],
        "notes": "Effectively free 15 damage with star cost.",
        "mech": [
          "damage",
          "zero_cost"
        ],
        "role": "payoff"
      },
      "DYING_STAR": {
        "id": "Dying Star",
        "tier": "C",
        "builds": [
          "stars"
        ],
        "syn": [
          "stellar",
          "stars",
          "aoe",
          "damage"
        ],
        "anti": [
          "forge"
        ],
        "notes": "AoE damage + Strength debuff. Ethereal.",
        "mech": [
          "damage",
          "aoe",
          "weak"
        ],
        "role": "payoff"
      },
      "TYRANNY": {
        "id": "Tyranny",
        "tier": "B",
        "builds": [
          "stars"
        ],
        "syn": [
          "exhaust",
          "stellar",
          "scaling"
        ],
        "anti": [
          "forge"
        ],
        "notes": "Exhaust a card at turn start. Thins deck every turn. Core of infinite setups.",
        "mech": [
          "exhaust",
          "deck_thin"
        ],
        "role": "engine"
      },
      "BULWARK": {
        "id": "Bulwark",
        "tier": "B",
        "builds": [
          "forge"
        ],
        "syn": [
          "forge",
          "authority",
          "block",
          "scaling"
        ],
        "anti": [
          "stars"
        ],
        "notes": "Big block + Forge 10. Best reason to go forge builds.",
        "mech": [
          "block",
          "forge"
        ],
        "role": "generator"
      },
      "SEEKING_EDGE": {
        "id": "Seeking Edge",
        "tier": "B",
        "builds": [
          "forge"
        ],
        "syn": [
          "forge",
          "authority",
          "damage"
        ],
        "anti": [
          "stars"
        ],
        "notes": "Sovereign Blade hits all enemies this turn. Near-mandatory for forge builds.",
        "mech": [
          "forge",
          "aoe"
        ],
        "role": "payoff"
      },
      "PATTERN": {
        "id": "Pattern",
        "tier": "B",
        "builds": [
          "stars"
        ],
        "syn": [
          "stellar",
          "block",
          "strength",
          "scaling"
        ],
        "anti": [
          "forge"
        ],
        "notes": "Block + Vigor stacking. Core of Pattern → Celestial Might combo.",
        "mech": [
          "block",
          "strength",
          "scaling"
        ],
        "role": "engine"
      },
      "CELESTIAL_MIGHT": {
        "id": "Celestial Might",
        "tier": "B",
        "builds": [
          "stars"
        ],
        "syn": [
          "stellar",
          "damage",
          "multi_hit",
          "strength"
        ],
        "anti": [
          "forge"
        ],
        "notes": "18 total multi-hit. Scales with Vigor stacks.",
        "mech": [
          "damage",
          "multi_hit",
          "scaling"
        ],
        "role": "payoff"
      },
      "BLACK_HOLE": {
        "id": "Black Hole",
        "tier": "C",
        "builds": [
          "stars"
        ],
        "syn": [
          "stellar",
          "stars",
          "aoe"
        ],
        "anti": [
          "forge"
        ],
        "notes": "3 AoE per star transaction. Too slow in most contexts.",
        "mech": [
          "damage",
          "aoe",
          "passive"
        ],
        "role": "payoff"
      },
      "CRESCENT_SPEAR": {
        "id": "Crescent Spear",
        "tier": "D",
        "builds": [
          "stars"
        ],
        "syn": [
          "stellar",
          "stars",
          "damage"
        ],
        "anti": [
          "forge"
        ],
        "notes": "Damage scales with star-cost cards. Build-specific.",
        "mech": [
          "damage",
          "scaling"
        ],
        "role": "payoff"
      },
      "STARDUST": {
        "id": "Stardust",
        "tier": "C",
        "builds": [
          "stars"
        ],
        "syn": [
          "stellar",
          "stars",
          "damage"
        ],
        "anti": [
          "forge"
        ],
        "notes": "Finisher vs single bosses. Dumps all stars. Situational.",
        "mech": [
          "damage",
          "star_payoff"
        ],
        "role": "payoff"
      },
      "LUNAR_BLAST": {
        "id": "Lunar Blast",
        "tier": "C",
        "builds": [
          "stars"
        ],
        "syn": [
          "stellar",
          "stars",
          "damage",
          "zero_cost"
        ],
        "anti": [
          "forge"
        ],
        "notes": "0-cost damage per skill played. Worse than Radiate.",
        "mech": [
          "damage",
          "zero_cost"
        ],
        "role": "payoff"
      },
      "MONOLOGUE": {
        "id": "Monologue",
        "tier": "C",
        "builds": [
          "stars"
        ],
        "syn": [
          "stellar",
          "strength",
          "scaling"
        ],
        "anti": [
          "forge"
        ],
        "notes": "Strength per skill played. Goes A-tier with multiple Decisions Decisions.",
        "mech": [
          "strength",
          "per_skill_payoff"
        ],
        "role": "generator"
      },
      "CONQUEROR": {
        "id": "Conqueror",
        "tier": "C",
        "builds": [
          "forge"
        ],
        "syn": [
          "forge",
          "authority",
          "damage"
        ],
        "anti": [
          "stars"
        ],
        "notes": "Double Sovereign Blade damage.",
        "mech": [
          "forge",
          "damage"
        ],
        "role": "payoff"
      },
      "RESONANCE": {
        "id": "Resonance",
        "tier": "C",
        "builds": [
          "any"
        ],
        "syn": [
          "stellar",
          "strength"
        ],
        "anti": [
          "forge"
        ],
        "notes": "Gain 1 strength, enemies lose 1. Not Regent's cleanest direction.",
        "mech": [
          "strength"
        ],
        "role": "generator"
      },
      "CRASH_LANDING": {
        "id": "Crash Landing",
        "tier": "D",
        "builds": [],
        "syn": [
          "damage",
          "aoe"
        ],
        "anti": [],
        "notes": "21 AoE but fills hand with unplayable Debris.",
        "mech": [
          "damage",
          "aoe"
        ],
        "role": "payoff"
      },
      "BUNDLE_OF_JOY": {
        "id": "Bundle Of Joy",
        "tier": "F",
        "builds": [],
        "syn": [],
        "anti": [],
        "notes": "Add 3 random Colorless cards. Clogs hand.",
        "mech": [],
        "role": "generator"
      },
      "KINGLY_KICK": {
        "id": "Kingly Kick",
        "tier": "D",
        "builds": [],
        "syn": [
          "damage"
        ],
        "anti": [],
        "notes": "Gets to 2-cost eventually. Too slow.",
        "mech": [
          "damage"
        ],
        "role": "payoff"
      },
      "KINGLY_PUNCH": {
        "id": "Kingly Punch",
        "tier": "D",
        "builds": [],
        "syn": [
          "damage"
        ],
        "anti": [],
        "notes": "Scales too slowly.",
        "mech": [
          "damage"
        ],
        "role": "payoff"
      },
      "PROPHESIZE": {
        "id": "Prophesize",
        "tier": "D",
        "builds": [],
        "syn": [
          "draw"
        ],
        "anti": [],
        "notes": "2-energy for 6 draw. Poor economy.",
        "mech": [
          "draw"
        ],
        "role": "generator"
      },
      "SPOILS_OF_BATTLE": {
        "id": "Spoils Of Battle",
        "tier": "D",
        "builds": [],
        "syn": [
          "forge"
        ],
        "anti": [
          "stars"
        ],
        "notes": "Grossly inefficient Forge.",
        "mech": [
          "forge"
        ],
        "role": "generator"
      },
      "PARRY": {
        "id": "Parry",
        "tier": "D",
        "builds": [
          "forge"
        ],
        "syn": [
          "forge",
          "block"
        ],
        "anti": [
          "stars"
        ],
        "notes": "Only triggers on Sovereign Blade. Very narrow.",
        "mech": [
          "block",
          "forge",
          "conditional"
        ],
        "role": "payoff"
      },
      "STRIKE": {
        "id": "Strike",
        "tier": "D",
        "builds": [],
        "syn": [
          "damage"
        ],
        "anti": [],
        "notes": "Starter. Replace.",
        "mech": [
          "damage"
        ]
      },
      "DEFEND": {
        "id": "Defend",
        "tier": "D",
        "builds": [],
        "syn": [
          "block"
        ],
        "anti": [],
        "notes": "Starter. Replace.",
        "mech": [
          "block"
        ]
      },
      "WROUGHT_IN_WAR": {
        "id": "Wrought In War",
        "tier": "B",
        "builds": [
          "forge"
        ],
        "syn": [
          "forge",
          "authority",
          "damage"
        ],
        "anti": [
          "stars"
        ],
        "notes": "Damage + built-in Forge. Good early forge card without needing Sovereign Blade setup.",
        "mech": [
          "damage",
          "forge"
        ],
        "role": "generator"
      },
      "SUMMON_FORTH": {
        "id": "Summon Forth",
        "tier": "A",
        "builds": [
          "forge"
        ],
        "syn": [
          "forge",
          "authority",
          "scaling"
        ],
        "anti": [
          "stars"
        ],
        "notes": "Quintessential Forge card — lets you re-use the Sovereign Blade easily.",
        "mech": [
          "forge",
          "card_retrieve"
        ],
        "role": "generator"
      },
      "BEAT_INTO_SHAPE": {
        "id": "Beat Into Shape",
        "tier": "A",
        "builds": [
          "forge"
        ],
        "syn": [
          "forge",
          "authority",
          "scaling"
        ],
        "anti": [
          "stars"
        ],
        "notes": "One of the best Forge cards, especially alongside zero cost attacks.",
        "mech": [
          "forge",
          "scaling"
        ],
        "role": "generator"
      },
      "FURNACE": {
        "id": "Furnace",
        "tier": "B",
        "builds": [
          "forge"
        ],
        "syn": [
          "forge",
          "authority",
          "scaling"
        ],
        "anti": [
          "stars"
        ],
        "notes": "Consistent passive Forge for a low cost. Builds up over time.",
        "mech": [
          "forge",
          "passive"
        ],
        "role": "engine"
      },
      "FALLING_STAR": {
        "id": "Falling Star",
        "tier": "C",
        "builds": [
          "stars"
        ],
        "syn": [
          "stellar",
          "stars",
          "vulnerable",
          "damage"
        ],
        "anti": [
          "forge"
        ],
        "notes": "Applies Vulnerable. Useful setup for big star-cost attacks.",
        "mech": [
          "vulnerable",
          "star_gain"
        ],
        "role": "generator"
      },
      "CLOAK_OF_STARS": {
        "id": "Cloak Of Stars",
        "tier": "B",
        "builds": [
          "stars"
        ],
        "syn": [
          "stellar",
          "stars",
          "block",
          "zero_cost"
        ],
        "anti": [
          "forge"
        ],
        "notes": "0-cost block using stars. Saves energy for bigger combos.",
        "mech": [
          "block",
          "zero_cost",
          "star_payoff"
        ],
        "role": "payoff"
      },
      "VENERATE": {
        "id": "Venerate",
        "tier": "D",
        "builds": [],
        "syn": [],
        "anti": [],
        "notes": "Starter card. Replace when possible.",
        "mech": [],
        "role": "generator"
      },
      "REFINE_BLADE": {
        "id": "Refine Blade",
        "tier": "A",
        "builds": [
          "forge"
        ],
        "syn": [
          "forge",
          "energy_gain",
          "scaling"
        ],
        "anti": [],
        "notes": "Efficient Forge generator that also refunds tempo with next-turn Energy. Strong in Sovereign Blade builds.",
        "mech": [
          "forge",
          "energy_gain"
        ],
        "role": "generator"
      }
    },
    "necrobinder": {
      "DEMESNE": {
        "id": "Demesne",
        "tier": "A",
        "builds": [
          "soul"
        ],
        "syn": [
          "soul",
          "exhaust",
          "scaling"
        ],
        "anti": [
          "doom",
          "osty"
        ],
        "notes": "3-cost power: gain 1 energy AND draw 1 extra card every turn. Strongest scaling card in deck.",
        "mech": [
          "energy_gain",
          "draw",
          "passive",
          "permanent_scaling"
        ],
        "role": "engine"
      },
      "BORROWED_TIME": {
        "id": "Borrowed Time",
        "tier": "S",
        "builds": [
          "soul",
          "any"
        ],
        "syn": [
          "soul",
          "energy_gain",
          "scaling"
        ],
        "anti": [
          "doom",
          "osty"
        ],
        "notes": "0-cost: gain 1 energy, apply 3 Doom to self. The 3 self-Doom is almost irrelevant. Best 0-cost.",
        "mech": [
          "energy_gain",
          "zero_cost",
          "self_doom"
        ],
        "role": "engine"
      },
      "HAUNT": {
        "id": "Haunt",
        "tier": "A",
        "builds": [
          "soul"
        ],
        "syn": [
          "soul",
          "exhaust",
          "damage",
          "scaling"
        ],
        "anti": [
          "doom",
          "osty"
        ],
        "notes": "Power: every time you play a Soul, random enemy loses 6 HP (ignores block). Stack multiples.",
        "mech": [
          "soul_payoff",
          "damage",
          "passive",
          "unstoppable"
        ],
        "role": "engine"
      },
      "SOUL_STORM": {
        "id": "Soul Storm",
        "tier": "B",
        "builds": [
          "soul"
        ],
        "syn": [
          "soul",
          "exhaust",
          "damage",
          "scaling"
        ],
        "anti": [
          "doom",
          "osty"
        ],
        "notes": "Damage per Soul played this combat. Late game = 100+ damage in one card.",
        "mech": [
          "soul_payoff",
          "damage",
          "scaling"
        ],
        "role": "payoff"
      },
      "END_OF_DAYS": {
        "id": "End Of Days",
        "tier": "B",
        "builds": [
          "doom"
        ],
        "syn": [
          "doom",
          "debuff",
          "damage",
          "aoe"
        ],
        "anti": [
          "soul",
          "osty"
        ],
        "notes": "3-cost: apply 29 Doom to ALL + execute any enemy with Doom ≥ HP. Mass setup + removal.",
        "mech": [
          "doom",
          "execute",
          "aoe"
        ],
        "role": "engine"
      },
      "NEUROSURGE": {
        "id": "Neurosurge",
        "tier": "S",
        "builds": [
          "soul",
          "any"
        ],
        "syn": [
          "soul",
          "draw",
          "damage",
          "scaling"
        ],
        "anti": [
          "doom",
          "osty"
        ],
        "notes": "Gain 3 Energy, draw 2 cards, but apply 3 Doom to yourself each turn. High risk, massive reward.",
        "mech": [
          "damage",
          "draw_payoff",
          "scaling"
        ],
        "role": "payoff"
      },
      "CAPTURE_SPIRIT": {
        "id": "Capture Spirit",
        "tier": "B",
        "builds": [
          "soul"
        ],
        "syn": [
          "soul",
          "exhaust",
          "scaling"
        ],
        "anti": [
          "doom",
          "osty"
        ],
        "notes": "1-cost: enemy loses 3 HP, add 3 Souls to draw pile. Core soul generation.",
        "mech": [
          "soul_generator",
          "damage"
        ],
        "role": "generator"
      },
      "DEVOUR_LIFE": {
        "id": "Devour Life",
        "tier": "B",
        "builds": [
          "soul",
          "osty"
        ],
        "syn": [
          "soul",
          "exhaust",
          "summon",
          "scaling"
        ],
        "anti": [
          "doom",
          "osty"
        ],
        "notes": "Whenever you play a Soul, Summon 1 (raises Osty's HP). Turns soul cycling into Osty growth.",
        "mech": [
          "soul_payoff",
          "summon",
          "osty_buff"
        ],
        "role": "engine"
      },
      "DREDGE": {
        "id": "Dredge",
        "tier": "A",
        "builds": [
          "soul",
          "any"
        ],
        "syn": [
          "soul",
          "exhaust",
          "draw",
          "scaling"
        ],
        "anti": [
          "doom",
          "osty"
        ],
        "notes": "Retrieve 3 cards from discard. Exhaust. Pulls 3 key cards at once.",
        "mech": [
          "card_retrieve",
          "exhaust"
        ],
        "role": "generator"
      },
      "LETHALITY": {
        "id": "Lethality",
        "tier": "B",
        "builds": [
          "doom"
        ],
        "syn": [
          "doom",
          "debuff",
          "damage"
        ],
        "anti": [
          "soul",
          "osty"
        ],
        "notes": "1-cost: 8 damage + apply Doom equal to damage. Efficient damage + doom stack.",
        "mech": [
          "damage",
          "doom"
        ],
        "role": "generator"
      },
      "DEATHS_DOOR": {
        "id": "Death's Door",
        "tier": "S",
        "builds": [
          "doom"
        ],
        "syn": [
          "doom",
          "debuff",
          "block",
          "scaling"
        ],
        "anti": [
          "soul",
          "osty"
        ],
        "notes": "Gain 6 Block. If you applied Doom this turn, gain 18 Block total. Primary survival tool for fragile Necrobinder.",
        "mech": [
          "block",
          "doom_payoff"
        ],
        "role": "payoff"
      },
      "RATTLE": {
        "id": "Rattle",
        "tier": "C",
        "builds": [
          "doom"
        ],
        "syn": [
          "doom",
          "debuff",
          "aoe"
        ],
        "anti": [
          "soul",
          "osty"
        ],
        "notes": "9 total Doom spread to random enemies 3 times.",
        "mech": [
          "doom",
          "aoe"
        ],
        "role": "generator"
      },
      "COUNTDOWN": {
        "id": "Countdown",
        "tier": "B",
        "builds": [
          "doom"
        ],
        "syn": [
          "doom",
          "debuff",
          "scaling"
        ],
        "anti": [
          "soul",
          "osty"
        ],
        "notes": "At start of turn apply 6 Doom to random enemy. Passive Doom stacking per turn.",
        "mech": [
          "doom",
          "passive"
        ],
        "role": "engine"
      },
      "ERADICATE": {
        "id": "Eradicate",
        "tier": "C",
        "builds": [
          "doom"
        ],
        "syn": [
          "doom",
          "debuff",
          "damage",
          "scaling"
        ],
        "anti": [
          "soul",
          "osty"
        ],
        "notes": "0★X: deal 11 damage X times. Dump energy for massive damage.",
        "mech": [
          "damage",
          "scaling",
          "energy_dump"
        ],
        "role": "payoff"
      },
      "FETCH": {
        "id": "Fetch",
        "tier": "A",
        "builds": [
          "osty"
        ],
        "syn": [
          "summon",
          "damage"
        ],
        "anti": [
          "doom",
          "soul"
        ],
        "notes": "0-cost Osty attack + first time each turn: draw 1. Free Osty activation.",
        "mech": [
          "osty_attack",
          "draw",
          "zero_cost"
        ],
        "role": "generator"
      },
      "BONE_SHARDS": {
        "id": "Bone Shards",
        "tier": "C",
        "builds": [
          "osty"
        ],
        "syn": [
          "summon",
          "damage",
          "aoe",
          "block"
        ],
        "anti": [
          "doom",
          "soul"
        ],
        "notes": "If Osty alive: 9 AoE + 9 block. Osty dies but Reanimate brings him back.",
        "mech": [
          "osty_attack",
          "damage",
          "aoe",
          "block"
        ],
        "role": "payoff"
      },
      "SACRIFICE": {
        "id": "Sacrifice",
        "tier": "A",
        "builds": [
          "osty"
        ],
        "syn": [
          "summon",
          "damage",
          "aoe",
          "vulnerable"
        ],
        "anti": [
          "doom",
          "soul"
        ],
        "notes": "Osty: 11 damage + AoE Vulnerable.",
        "mech": [
          "osty_attack",
          "damage",
          "aoe",
          "vulnerable"
        ],
        "role": "payoff"
      },
      "GRAVEBLAST": {
        "id": "Graveblast",
        "tier": "A",
        "builds": [
          "soul",
          "any"
        ],
        "syn": [
          "soul",
          "damage",
          "draw"
        ],
        "anti": [
          "doom",
          "osty"
        ],
        "notes": "1-cost: 4 damage + retrieve card from discard.",
        "mech": [
          "damage",
          "card_retrieve"
        ],
        "role": "generator"
      },
      "DEBILITATE": {
        "id": "Debilitate",
        "tier": "A",
        "builds": [
          "doom"
        ],
        "syn": [
          "doom",
          "debuff",
          "damage"
        ],
        "anti": [
          "soul",
          "osty"
        ],
        "notes": "7 damage + double debuff effectiveness for 3 turns. Massive with Weak/Vulnerable.",
        "mech": [
          "damage",
          "debuff"
        ],
        "role": "payoff"
      },
      "SCOURGE": {
        "id": "Scourge",
        "tier": "A",
        "builds": [
          "doom"
        ],
        "syn": [
          "doom",
          "debuff",
          "draw",
          "scaling"
        ],
        "anti": [
          "soul",
          "osty"
        ],
        "notes": "Apply 10 Doom, draw 1 card. Foundation of Doom builds — stacks fast and replaces itself.",
        "mech": [
          "doom",
          "scaling",
          "draw"
        ],
        "role": "generator"
      },
      "DEATHBRINGER": {
        "id": "Deathbringer",
        "tier": "A",
        "builds": [
          "doom"
        ],
        "syn": [
          "doom",
          "debuff",
          "aoe"
        ],
        "anti": [
          "soul",
          "osty"
        ],
        "notes": "2-cost: 21 Doom to ALL enemies + Weak.",
        "mech": [
          "doom",
          "aoe",
          "weak"
        ],
        "role": "generator"
      },
      "PARSE": {
        "id": "Parse",
        "tier": "A",
        "builds": [
          "soul"
        ],
        "syn": [
          "soul",
          "damage",
          "scaling"
        ],
        "anti": [
          "doom",
          "osty"
        ],
        "notes": "10 damage + upgrade 2 random cards from discard. Improves deck over time.",
        "mech": [
          "damage",
          "upgrade"
        ],
        "role": "payoff"
      },
      "BANSHEES_CRY": {
        "id": "Banshee's Cry",
        "tier": "B",
        "builds": [
          "doom",
          "doom"
        ],
        "syn": [
          "doom",
          "ethereal",
          "damage",
          "aoe"
        ],
        "anti": [
          "soul",
          "osty"
        ],
        "notes": "33 AoE, costs 2 less per ethereal played. Gets free with enough ethereals.",
        "mech": [
          "damage",
          "aoe",
          "cost_reduction",
          "ethereal"
        ],
        "role": "payoff"
      },
      "NO_ESCAPE": {
        "id": "No Escape",
        "tier": "A",
        "builds": [
          "doom"
        ],
        "syn": [
          "doom",
          "debuff",
          "scaling"
        ],
        "anti": [
          "soul",
          "osty"
        ],
        "notes": "Apply 10 Doom + 5 more per 10 Doom already on target. Exponential — destroys high-HP bosses.",
        "mech": [
          "doom",
          "scaling"
        ],
        "role": "generator"
      },
      "SCYTHE": {
        "id": "Scythe",
        "tier": "B",
        "builds": [
          "any"
        ],
        "syn": [
          "damage",
          "scaling"
        ],
        "anti": [],
        "notes": "13 damage, permanently increases per play, exhaust. Can reach 100+ late run.",
        "mech": [
          "damage",
          "scaling",
          "exhaust"
        ],
        "role": "payoff"
      },
      "NEGATIVE_PULSE": {
        "id": "Negative Pulse",
        "tier": "B",
        "builds": [
          "doom"
        ],
        "syn": [
          "doom",
          "aoe",
          "block"
        ],
        "anti": [
          "soul",
          "osty"
        ],
        "notes": "AoE Doom + block in one card.",
        "mech": [
          "doom",
          "aoe",
          "block"
        ],
        "role": "generator"
      },
      "GRAVE_WARDEN": {
        "id": "Grave Warden",
        "tier": "B",
        "builds": [
          "soul"
        ],
        "syn": [
          "soul",
          "exhaust",
          "block"
        ],
        "anti": [
          "doom",
          "osty"
        ],
        "notes": "8 block + adds a Soul. Defense plus soul generation.",
        "mech": [
          "block",
          "soul_generator"
        ],
        "role": "generator"
      },
      "HIGH_FIVE": {
        "id": "High Five",
        "tier": "B",
        "builds": [
          "osty"
        ],
        "syn": [
          "summon",
          "damage",
          "scaling"
        ],
        "anti": [
          "doom",
          "soul"
        ],
        "notes": "Permanent Osty buff. Stacks with copies.",
        "mech": [
          "osty_buff",
          "permanent_scaling"
        ],
        "role": "engine"
      },
      "SIC_EM": {
        "id": "Sic Em",
        "tier": "B",
        "builds": [
          "osty"
        ],
        "syn": [
          "summon",
          "damage"
        ],
        "anti": [
          "doom",
          "soul"
        ],
        "notes": "0-cost Osty attack scaling with his HP.",
        "mech": [
          "osty_attack",
          "zero_cost",
          "damage"
        ],
        "role": "payoff"
      },
      "TRANSFIGURE": {
        "id": "Transfigure",
        "tier": "S",
        "builds": [
          "soul"
        ],
        "syn": [
          "soul",
          "damage",
          "exhaust"
        ],
        "anti": [
          "doom",
          "osty"
        ],
        "notes": "10 damage + free card removal post-combat. Sustains deck thinning.",
        "mech": [
          "damage",
          "deck_thin"
        ],
        "role": "payoff"
      },
      "DEATH_MARCH": {
        "id": "Death March",
        "tier": "B",
        "builds": [
          "soul"
        ],
        "syn": [
          "soul",
          "draw",
          "damage",
          "scaling"
        ],
        "anti": [
          "doom",
          "osty"
        ],
        "notes": "Damage per card drawn. Scales with Soul cycling.",
        "mech": [
          "damage",
          "draw_payoff"
        ],
        "role": "payoff"
      },
      "DELAY": {
        "id": "Delay",
        "tier": "B",
        "builds": [
          "any"
        ],
        "syn": [
          "block",
          "energy_gain"
        ],
        "anti": [],
        "notes": "11 block, next turn gain 1 energy. Solid defense + ramp.",
        "mech": [
          "block",
          "energy_gain"
        ],
        "role": "generator"
      },
      "ENFEEBLING_TOUCH": {
        "id": "Enfeebling Touch",
        "tier": "B",
        "builds": [
          "doom",
          "any"
        ],
        "syn": [
          "doom",
          "debuff",
          "strength"
        ],
        "anti": [
          "soul",
          "osty"
        ],
        "notes": "Enemy loses X Strength this turn. Scales with energy.",
        "mech": [
          "debuff",
          "strength",
          "scaling"
        ],
        "role": "generator"
      },
      "DANSE_MACABRE": {
        "id": "Danse Macabre",
        "tier": "B",
        "builds": [
          "doom"
        ],
        "syn": [
          "doom",
          "block",
          "scaling"
        ],
        "anti": [
          "soul",
          "osty"
        ],
        "notes": "3 block per expensive card played. Passive block in doom builds.",
        "mech": [
          "block",
          "passive"
        ],
        "role": "generator"
      },
      "DIRGE": {
        "id": "Dirge",
        "tier": "B",
        "builds": [
          "soul",
          "osty"
        ],
        "syn": [
          "soul",
          "summon",
          "exhaust",
          "scaling"
        ],
        "anti": [
          "doom",
          "osty"
        ],
        "notes": "Make X Souls + raise Osty's HP. Setup card for soul+osty combo.",
        "mech": [
          "soul_generator",
          "osty_buff",
          "scaling"
        ],
        "role": "generator"
      },
      "BLIGHT_STRIKE": {
        "id": "Blight Strike",
        "tier": "C",
        "builds": [
          "doom"
        ],
        "syn": [
          "doom",
          "damage"
        ],
        "anti": [
          "soul",
          "osty"
        ],
        "notes": "8 damage + 8 Doom. Decent filler in doom builds.",
        "mech": [
          "damage",
          "doom"
        ],
        "role": "generator"
      },
      "TIMES_UP": {
        "id": "Time's Up",
        "tier": "S",
        "builds": [
          "doom"
        ],
        "syn": [
          "doom",
          "damage"
        ],
        "anti": [
          "soul",
          "osty"
        ],
        "notes": "Deal damage equal to enemy's Doom. Exhaust. Clean Doom payoff — executes once threshold is reached.",
        "mech": [
          "doom_payoff",
          "damage",
          "conditional"
        ],
        "role": "payoff"
      },
      "FEAR": {
        "id": "Fear",
        "tier": "C",
        "builds": [
          "doom"
        ],
        "syn": [
          "doom",
          "vulnerable",
          "damage"
        ],
        "anti": [
          "soul",
          "osty"
        ],
        "notes": "Basic filler. Damage + Vulnerable.",
        "mech": [
          "damage",
          "vulnerable"
        ],
        "role": "generator"
      },
      "BURY": {
        "id": "Bury",
        "tier": "C",
        "builds": [],
        "syn": [
          "damage"
        ],
        "anti": [],
        "notes": "4-cost 52 damage. Costs your whole turn.",
        "mech": [
          "damage"
        ],
        "role": "payoff"
      },
      "AFTERLIFE": {
        "id": "Afterlife",
        "tier": "D",
        "builds": [
          "osty"
        ],
        "syn": [
          "summon"
        ],
        "anti": [
          "doom",
          "soul"
        ],
        "notes": "6 Summons but Exhausts. Weak summon card.",
        "mech": [
          "summon",
          "exhaust"
        ],
        "role": "generator"
      },
      "REAPER_FORM": {
        "id": "Reaper Form",
        "tier": "D",
        "builds": [
          "doom"
        ],
        "syn": [
          "doom",
          "energy_gain"
        ],
        "anti": [
          "soul",
          "osty"
        ],
        "notes": "Lose 2 Strength for energy ramp. Bad trade.",
        "mech": [
          "energy_gain"
        ],
        "role": "engine"
      },
      "SHARED_FATE": {
        "id": "Shared Fate",
        "tier": "D",
        "builds": [
          "doom"
        ],
        "syn": [
          "doom",
          "energy_gain"
        ],
        "anti": [
          "soul",
          "osty"
        ],
        "notes": "Eternal + self-doom + energy. Self-doom builds up.",
        "mech": [
          "doom",
          "energy_gain"
        ],
        "role": "generator"
      },
      "STRIKE": {
        "id": "Strike",
        "tier": "D",
        "builds": [],
        "syn": [
          "damage"
        ],
        "anti": [],
        "notes": "Starter. Replace.",
        "mech": [
          "damage"
        ]
      },
      "DEFEND": {
        "id": "Defend",
        "tier": "D",
        "builds": [],
        "syn": [
          "block"
        ],
        "anti": [],
        "notes": "Starter. Replace.",
        "mech": [
          "block"
        ]
      },
      "REANIMATE": {
        "id": "Reanimate",
        "tier": "B",
        "builds": [
          "osty"
        ],
        "syn": [
          "summon",
          "osty_buff",
          "scaling"
        ],
        "anti": [
          "doom",
          "soul"
        ],
        "notes": "Bring Osty back and boost his HP. Core Osty recovery card.",
        "mech": [
          "summon",
          "osty_buff"
        ],
        "role": "generator"
      },
      "SYMBIOSIS": {
        "id": "Symbiosis",
        "tier": "A",
        "builds": [
          "osty"
        ],
        "syn": [
          "summon",
          "osty_buff",
          "block",
          "scaling"
        ],
        "anti": [
          "doom",
          "soul"
        ],
        "notes": "Boost Osty's HP and gain Block. Keeps Osty alive and you defended.",
        "mech": [
          "osty_buff",
          "block"
        ],
        "role": "generator"
      },
      "BODYGUARD": {
        "id": "Bodyguard",
        "tier": "A",
        "builds": [
          "osty"
        ],
        "syn": [
          "summon",
          "osty_buff",
          "block",
          "scaling"
        ],
        "anti": [
          "doom",
          "soul"
        ],
        "notes": "Key Osty build card — summon and stack Osty's HP aggressively.",
        "mech": [
          "osty_buff",
          "summon"
        ],
        "role": "generator"
      },
      "SOUL_SPARK": {
        "id": "Soul Spark",
        "tier": "D",
        "builds": [],
        "syn": [
          "damage"
        ],
        "anti": [],
        "notes": "Starter attack card. Upgraded deals 9 and applies Vulnerable.",
        "mech": [
          "damage"
        ],
        "role": "generator"
      },
      "DOOM_SPIKE": {
        "id": "Doom Spike",
        "tier": "A",
        "builds": [
          "doom"
        ],
        "syn": [
          "doom",
          "debuff",
          "damage"
        ],
        "anti": [
          "soul",
          "osty"
        ],
        "notes": "Damage + Doom application together. Efficient dual-purpose Doom card.",
        "mech": [
          "damage",
          "doom"
        ],
        "role": "generator"
      },
      "OBLIVION": {
        "id": "Oblivion",
        "tier": "A",
        "builds": [
          "doom"
        ],
        "syn": [
          "doom",
          "debuff",
          "damage",
          "scaling"
        ],
        "anti": [
          "soul",
          "osty"
        ],
        "notes": "High-impact doom finisher. Powerful once doom execution is online.",
        "mech": [
          "damage",
          "doom",
          "scaling"
        ],
        "role": "payoff"
      },
      "REAVE": {
        "id": "Reave",
        "tier": "A",
        "builds": [
          "soul"
        ],
        "syn": [
          "soul",
          "damage",
          "scaling"
        ],
        "anti": [
          "doom",
          "osty"
        ],
        "notes": "1-cost attack that puts a Soul into your draw pile. Key soul generator.",
        "mech": [
          "soul_generator",
          "damage"
        ],
        "role": "generator"
      },
      "UNLEASH": {
        "id": "Unleash",
        "tier": "A",
        "builds": [
          "osty"
        ],
        "syn": [
          "summon",
          "osty_attack",
          "damage",
          "scaling"
        ],
        "anti": [
          "doom",
          "soul"
        ],
        "notes": "Osty deals damage based on his Max HP. Your main Osty payoff card.",
        "mech": [
          "osty_attack",
          "damage",
          "scaling"
        ],
        "role": "payoff"
      },
      "SQUEEZE": {
        "id": "Squeeze",
        "tier": "A",
        "builds": [
          "osty"
        ],
        "syn": [
          "summon",
          "osty_attack",
          "damage",
          "scaling"
        ],
        "anti": [
          "doom",
          "soul"
        ],
        "notes": "Osty deals 10 + Max HP damage. Scales to hundreds late run. Alternate win condition.",
        "mech": [
          "osty_attack",
          "damage",
          "scaling"
        ],
        "role": "payoff"
      },
      "FLATTEN": {
        "id": "Flatten",
        "tier": "C",
        "builds": [
          "osty",
          "soul"
        ],
        "syn": [
          "summon",
          "soul",
          "energy_gain",
          "scaling"
        ],
        "anti": [
          "doom",
          "soul"
        ],
        "notes": "Reduce card cost to 0 when Osty attacks first. Enables big combo turns.",
        "mech": [
          "cost_reduction",
          "combo_enabler"
        ],
        "role": "engine"
      },
      "PULL_AGGRO": {
        "id": "Pull Aggro",
        "tier": "C",
        "builds": [
          "osty"
        ],
        "syn": [
          "summon",
          "block",
          "scaling"
        ],
        "anti": [
          "doom",
          "soul"
        ],
        "notes": "11 effective block value with Osty summon upside.",
        "mech": [
          "block",
          "summon"
        ],
        "role": "generator"
      },
      "SNAP": {
        "id": "Snap",
        "tier": "B",
        "builds": [
          "osty"
        ],
        "syn": [
          "summon",
          "damage"
        ],
        "anti": [
          "doom",
          "soul"
        ],
        "notes": "Cheap Osty attack with Retain. Good for enabling combos.",
        "mech": [
          "osty_attack",
          "damage"
        ],
        "role": "generator"
      }
    },
    "colorless": {
      "ENLIGHTENMENT": {
        "id": "Enlightenment",
        "tier": "B",
        "builds": [
          "any"
        ],
        "syn": [
          "draw",
          "scaling"
        ],
        "anti": [],
        "notes": "Reduces all card costs this turn. Good in expensive decks.",
        "mech": [
          "cost_reduction"
        ],
        "role": "engine"
      },
      "BLIND": {
        "id": "Blind",
        "tier": "B",
        "builds": [
          "any"
        ],
        "syn": [
          "weak",
          "debuff"
        ],
        "anti": [],
        "notes": "Apply Weak to all enemies. Excellent AoE debuff.",
        "mech": [
          "weak",
          "aoe",
          "debuff"
        ],
        "role": "generator"
      },
      "FLASH_OF_STEEL": {
        "id": "Flash Of Steel",
        "tier": "B",
        "builds": [
          "any"
        ],
        "syn": [
          "damage",
          "draw"
        ],
        "anti": [],
        "notes": "Attack + draw. Universal filler.",
        "mech": [
          "damage",
          "draw"
        ],
        "role": "generator"
      },
      "JACK_OF_ALL_TRADES": {
        "id": "Jack Of All Trades",
        "tier": "B",
        "builds": [
          "any"
        ],
        "syn": [
          "draw",
          "scaling"
        ],
        "anti": [],
        "notes": "Colorless card to hand. Flexible.",
        "mech": [
          "draw"
        ],
        "role": "generator"
      },
      "APOTHEOSIS": {
        "id": "Apotheosis",
        "tier": "B",
        "builds": [
          "any"
        ],
        "syn": [
          "scaling"
        ],
        "anti": [],
        "notes": "Upgrade all cards in deck. Very powerful mid-run.",
        "mech": [
          "upgrade",
          "permanent_scaling"
        ],
        "role": "engine"
      },
      "PANACEA": {
        "id": "Panacea",
        "tier": "C",
        "builds": [
          "any"
        ],
        "syn": [],
        "anti": [],
        "notes": "Remove 1 debuff. Situational.",
        "mech": [],
        "role": "generator"
      },
      "GOOD_INSTINCTS": {
        "id": "Good Instincts",
        "tier": "B",
        "builds": [
          "any"
        ],
        "syn": [
          "block"
        ],
        "anti": [],
        "notes": "Innate 6 block. Always in first hand.",
        "mech": [
          "block",
          "innate"
        ],
        "role": "generator"
      },
      "BANDAGE_UP": {
        "id": "Bandage Up",
        "tier": "C",
        "builds": [
          "self_damage"
        ],
        "syn": [
          "self_damage"
        ],
        "anti": [],
        "notes": "Heal 4 HP, exhaust. Good in self-damage builds.",
        "mech": [],
        "role": "payoff"
      },
      "PANACHE": {
        "id": "Panache",
        "tier": "B",
        "builds": [
          "claw",
          "shiv",
          "any"
        ],
        "syn": [
          "zero_cost",
          "aoe",
          "scaling"
        ],
        "anti": [],
        "notes": "10 AoE per 5 cards played. Amazing in high-volume decks.",
        "mech": [
          "aoe",
          "per_card_payoff"
        ],
        "role": "payoff"
      },
      "VIOLENCE": {
        "id": "Violence",
        "tier": "B",
        "builds": [
          "claw",
          "any"
        ],
        "syn": [
          "zero_cost",
          "damage",
          "draw"
        ],
        "anti": [],
        "notes": "Add 3 attacks from draw pile to hand. Cycling for attack-heavy decks.",
        "mech": [
          "draw",
          "damage"
        ],
        "role": "generator"
      },
      "MADNESS": {
        "id": "Madness",
        "tier": "B",
        "builds": [
          "any"
        ],
        "syn": [
          "draw",
          "scaling"
        ],
        "anti": [],
        "notes": "Make random card in hand free. Situational but can enable big turns.",
        "mech": [
          "cost_reduction"
        ],
        "role": "engine"
      },
      "FORETHOUGHT": {
        "id": "Forethought",
        "tier": "C",
        "builds": [
          "any"
        ],
        "syn": [
          "draw",
          "scaling"
        ],
        "anti": [],
        "notes": "Put card from hand at bottom of draw pile. Deck manipulation.",
        "mech": [
          "deck_manipulation"
        ],
        "role": "generator"
      },
      "DRAMATIC_ENTRANCE": {
        "id": "Dramatic Entrance",
        "tier": "C",
        "builds": [
          "any"
        ],
        "syn": [
          "damage",
          "aoe"
        ],
        "anti": [],
        "notes": "Innate 8 AoE exhaust. First hand AoE.",
        "mech": [
          "damage",
          "aoe",
          "innate",
          "exhaust"
        ],
        "role": "payoff"
      },
      "SECRET_WEAPON": {
        "id": "Secret Weapon",
        "tier": "C",
        "builds": [
          "any"
        ],
        "syn": [
          "damage"
        ],
        "anti": [],
        "notes": "Innate. Attack that reveals your deck.",
        "mech": [
          "damage",
          "innate"
        ],
        "role": "generator"
      },
      "TRIP": {
        "id": "Trip",
        "tier": "C",
        "builds": [
          "any"
        ],
        "syn": [
          "vulnerable",
          "debuff"
        ],
        "anti": [],
        "notes": "Vulnerable all enemies for 1 energy.",
        "mech": [
          "vulnerable",
          "aoe"
        ],
        "role": "generator"
      },
      "MIND_BLAST": {
        "id": "Mind Blast",
        "tier": "C",
        "builds": [
          "any"
        ],
        "syn": [
          "damage"
        ],
        "anti": [],
        "notes": "Damage = deck size. Good in thick decks.",
        "mech": [
          "damage",
          "conditional"
        ],
        "role": "payoff"
      },
      "TRANSMUTATION": {
        "id": "Transmutation",
        "tier": "C",
        "builds": [
          "any"
        ],
        "syn": [
          "scaling"
        ],
        "anti": [],
        "notes": "X-cost: add X colorless cards. Variable value.",
        "mech": [
          "draw"
        ],
        "role": "generator"
      },
      "THINKING_AHEAD": {
        "id": "Thinking Ahead",
        "tier": "C",
        "builds": [
          "any"
        ],
        "syn": [
          "draw",
          "scaling"
        ],
        "anti": [],
        "notes": "Draw 2, put 1 on bottom. Deck manipulation.",
        "mech": [
          "draw",
          "deck_manipulation"
        ],
        "role": "generator"
      },
      "DEEP_BREATH": {
        "id": "Deep Breath",
        "tier": "D",
        "builds": [
          "any"
        ],
        "syn": [],
        "anti": [],
        "notes": "Shuffle discard + draw 1. Too slow.",
        "mech": [
          "draw"
        ],
        "role": "generator"
      },
      "HAND_OF_GREED": {
        "id": "Hand Of Greed",
        "tier": "C",
        "builds": [
          "any"
        ],
        "syn": [
          "damage"
        ],
        "anti": [],
        "notes": "Damage + gold if kills. Decent tempo.",
        "mech": [
          "damage"
        ],
        "role": "payoff"
      },
      "THE_BOMB": {
        "id": "The Bomb",
        "tier": "B",
        "builds": [
          "any"
        ],
        "syn": [
          "damage"
        ],
        "anti": [],
        "notes": "After 3 turns deal 40 damage. Useful setup card.",
        "mech": [
          "damage"
        ],
        "role": "payoff"
      },
      "SADISTIC_NATURE": {
        "id": "Sadistic Nature",
        "tier": "C",
        "builds": [
          "doom",
          "poison",
          "any"
        ],
        "syn": [
          "debuff",
          "damage"
        ],
        "anti": [],
        "notes": "5 damage when debuff applied. Passive with debuff builds.",
        "mech": [
          "damage",
          "debuff_payoff"
        ],
        "role": "payoff"
      },
      "WISDOM": {
        "id": "Wisdom",
        "tier": "C",
        "builds": [
          "any"
        ],
        "syn": [
          "draw"
        ],
        "anti": [],
        "notes": "Draw 1 per turn. Slow but consistent.",
        "mech": [
          "draw",
          "passive"
        ],
        "role": "generator"
      },
      "APPARITION": {
        "id": "Apparition",
        "tier": "B",
        "builds": [
          "exhaust",
          "soul"
        ],
        "syn": [
          "exhaust",
          "soul",
          "scaling"
        ],
        "anti": [],
        "notes": "Ethereal Intangible. Prevents damage once. Strong defensive option.",
        "mech": [
          "damage_prevention",
          "exhaust",
          "ethereal"
        ],
        "role": "engine"
      }
    }
  },
  "archetypes": {
    "ironclad": [
      {
        "id": "strength",
        "name": "Strength",
        "core": [
          "strength",
          "multi_hit",
          "strength_scaling"
        ],
        "support": [
          "scaling",
          "damage",
          "vulnerable"
        ],
        "coreThresh": 3,
        "supportThresh": 2,
        "description": "Scale flat Strength and convert it through multi-hit and heavy attacks."
      },
      {
        "id": "block",
        "name": "Block",
        "core": [
          "block",
          "block_retain",
          "block_conversion"
        ],
        "support": [
          "block_payoff",
          "draw",
          "weak"
        ],
        "coreThresh": 3,
        "supportThresh": 1,
        "description": "Stack and preserve Block, then convert it into damage or repeated payoffs."
      },
      {
        "id": "exhaust",
        "name": "Exhaust",
        "core": [
          "exhaust",
          "exhaust_payoff",
          "exhaust_synergy"
        ],
        "support": [
          "draw",
          "block",
          "energy_gain"
        ],
        "coreThresh": 4,
        "supportThresh": 2,
        "description": "Burn through cards and profit from exhaust triggers, cycling, and block payoffs."
      },
      {
        "id": "blood",
        "name": "Blood",
        "core": [
          "self_damage",
          "self_damage_payoff",
          "hp_loss_synergy",
          "blood"
        ],
        "support": [
          "strength",
          "draw",
          "energy_gain"
        ],
        "coreThresh": 3,
        "supportThresh": 2,
        "description": "Convert your own HP loss into Strength, damage, and tempo."
      },
      {
        "id": "strike",
        "name": "Strike",
        "core": [
          "strike",
          "strike_scaling",
          "attack_chain"
        ],
        "support": [
          "damage",
          "draw",
          "energy_gain",
          "vulnerable",
          "multi_hit"
        ],
        "coreThresh": 3,
        "supportThresh": 2,
        "description": "Leverage Strike-tag cards, efficient attack chains, and Perfected Strike-style scaling."
      }
    ],
    "silent": [
      {
        "id": "sly",
        "name": "Sly / Discard",
        "core": [
          "sly",
          "discard",
          "sly_enabler"
        ],
        "support": [
          "draw",
          "scaling"
        ],
        "coreThresh": 3,
        "supportThresh": 2,
        "description": "Discard Sly cards (Reflex, Tactician, Haze) to play them for free, chaining turns"
      },
      {
        "id": "poison",
        "name": "Poison",
        "core": [
          "poison",
          "poison_amplify"
        ],
        "support": [
          "scaling",
          "block",
          "weak"
        ],
        "coreThresh": 3,
        "supportThresh": 1,
        "description": "Stack poison with Noxious Fumes, then double/triple with Catalyst+Burst for instant win"
      },
      {
        "id": "shiv",
        "name": "Shiv Spam",
        "core": [
          "shiv",
          "shiv_synergy",
          "shiv_generator",
          "shiv_amplify"
        ],
        "support": [
          "block",
          "dexterity",
          "scaling"
        ],
        "coreThresh": 3,
        "supportThresh": 2,
        "description": "Generate Shivs with Blade Dance, scale with Accuracy, cash in with Finisher + relic triggers"
      }
    ],
    "defect": [
      {
        "id": "orb",
        "name": "Orb / Focus Engine",
        "core": [
          "orb",
          "focus",
          "orb_channel",
          "frost",
          "lightning"
        ],
        "support": [
          "block",
          "scaling",
          "evoke"
        ],
        "coreThresh": 4,
        "supportThresh": 2,
        "description": "Stack Focus with Defragment, channel Lightning/Frost/Dark orbs for passive scaling"
      },
      {
        "id": "claw",
        "name": "Claw / Zero-Cost",
        "core": [
          "claw",
          "zero_cost",
          "claw_payoff"
        ],
        "support": [
          "draw",
          "scaling"
        ],
        "coreThresh": 3,
        "supportThresh": 2,
        "description": "Spam 0-cost Claws to grow their damage, use All for One to cycle the entire build"
      }
    ],
    "regent": [
      {
        "id": "stars",
        "name": "Stars Engine",
        "core": [
          "stellar",
          "stars",
          "star_gain"
        ],
        "support": [
          "draw",
          "scaling",
          "zero_cost"
        ],
        "coreThresh": 3,
        "supportThresh": 2,
        "description": "Accumulate Stars with Glow/Genesis/Shining Strike, spend on Comet/Radiate/Child of Stars"
      },
      {
        "id": "forge",
        "name": "Forge / Sovereign Blade",
        "core": [
          "forge",
          "authority"
        ],
        "support": [
          "scaling",
          "damage"
        ],
        "coreThresh": 2,
        "supportThresh": 1,
        "description": "Forge a single card repeatedly until Sovereign Blade one-shots bosses"
      }
    ],
    "necrobinder": [
      {
        "id": "soul",
        "name": "Soul Engine",
        "core": [
          "soul",
          "soul_generator",
          "soul_payoff"
        ],
        "support": [
          "draw",
          "scaling",
          "exhaust"
        ],
        "coreThresh": 3,
        "supportThresh": 2,
        "description": "Generate Souls with Capture Spirit/Dirge, cycle 0-cost draw-2 Souls, Haunt kills passively"
      },
      {
        "id": "osty",
        "name": "Osty / Summon",
        "core": [
          "summon",
          "osty_buff",
          "osty_attack"
        ],
        "support": [
          "damage",
          "scaling",
          "block"
        ],
        "coreThresh": 3,
        "supportThresh": 2,
        "description": "Build Osty's HP through Summon cards, use Bone Shards/Sacrifice/Fetch for big payoffs"
      },
      {
        "id": "doom",
        "name": "Doom Stack",
        "core": [
          "doom",
          "doom_payoff"
        ],
        "support": [
          "aoe",
          "debuff",
          "scaling",
          "execute"
        ],
        "coreThresh": 3,
        "supportThresh": 2,
        "description": "Stack Doom with Scourge/Countdown/End of Days, execute enemies when HP ≤ Doom total"
      }
    ]
  },
  "combos": [
    {
      "deckCard": "Barricade",
      "offeredCard": "Juggernaut",
      "bonus": 1.5,
      "reason": "Both core block build cards — Barricade stacks retained block, Juggernaut deals damage whenever you gain block"
    },
    {
      "deckCard": "Juggernaut",
      "offeredCard": "Barricade",
      "bonus": 1.5,
      "reason": "Barricade keeps block between turns, giving Juggernaut repeated triggers every time you play block cards"
    },
    {
      "deckCard": "Barricade",
      "offeredCard": "Body Slam",
      "bonus": 2.0,
      "reason": "Body Slam damage = current block — Barricade stacks block over turns making each Body Slam devastating"
    },
    {
      "deckCard": "Barricade",
      "offeredCard": "Entrench",
      "bonus": 2.0,
      "reason": "Entrench doubles current block — with Barricade retaining it, you reach absurd defense every 2 turns"
    },
    {
      "deckCard": "Barricade",
      "offeredCard": "Grapple",
      "bonus": 1.5,
      "reason": "Grapple converts block to damage — Barricade stacks block over turns giving Grapple huge numbers"
    },
    {
      "deckCard": "Entrench",
      "offeredCard": "Barricade",
      "bonus": 2.0,
      "reason": "Barricade retains the doubled block from Entrench — stacks get massive after a few turns"
    },
    {
      "deckCard": "Body Slam",
      "offeredCard": "Barricade",
      "bonus": 1.8,
      "reason": "Barricade stacks block turn over turn, Body Slam (damage = block) hits harder every turn"
    },
    {
      "deckCard": "Body Slam",
      "offeredCard": "Entrench",
      "bonus": 1.5,
      "reason": "Entrench doubles block that Body Slam then converts to damage"
    },
    {
      "deckCard": "Juggernaut",
      "offeredCard": "Body Slam",
      "bonus": 1.0,
      "reason": "Both reward having high block — natural pairing in block builds"
    },
    {
      "deckCard": "Demon Form",
      "offeredCard": "Limit Break",
      "bonus": 2.0,
      "reason": "Demon Form gives Strength every turn — Limit Break DOUBLES that accumulated Strength. Exponential scaling."
    },
    {
      "deckCard": "Limit Break",
      "offeredCard": "Demon Form",
      "bonus": 2.0,
      "reason": "Limit Break doubles your Strength — Demon Form keeps generating more Strength to double each fight"
    },
    {
      "deckCard": "Inflame",
      "offeredCard": "Limit Break",
      "bonus": 1.5,
      "reason": "Inflame gives flat Strength — Limit Break doubles it immediately for massive scaling"
    },
    {
      "deckCard": "Inflame",
      "offeredCard": "Whirlwind",
      "bonus": 1.2,
      "reason": "Every Whirlwind hit benefits from Strength — Inflame multiplies across all hits"
    },
    {
      "deckCard": "Demon Form",
      "offeredCard": "Whirlwind",
      "bonus": 1.5,
      "reason": "Demon Form Strength compounds every turn — Whirlwind multiplies it across all hits"
    },
    {
      "deckCard": "Limit Break",
      "offeredCard": "Heavy Blade",
      "bonus": 1.5,
      "reason": "Heavy Blade has extra Strength scaling — after Limit Break doubles Strength, damage becomes nuclear"
    },
    {
      "deckCard": "Double Tap",
      "offeredCard": "Whirlwind",
      "bonus": 2.0,
      "reason": "Double Tap plays next attack twice — Whirlwind twice with high Strength deletes everything"
    },
    {
      "deckCard": "Vicious",
      "offeredCard": "Taunt",
      "bonus": 1.5,
      "reason": "Taunt applies Vulnerable — Vicious gives 25% amp on Vulnerable targets"
    },
    {
      "deckCard": "Taunt",
      "offeredCard": "Vicious",
      "bonus": 1.5,
      "reason": "Vicious amplifies Vulnerable targets — Taunt applies it to set up Vicious procs"
    },
    {
      "deckCard": "Corruption",
      "offeredCard": "Feel No Pain",
      "bonus": 2.0,
      "reason": "Corruption exhausts every skill — Feel No Pain gains block for EACH one. Massive block generation."
    },
    {
      "deckCard": "Corruption",
      "offeredCard": "Dark Embrace",
      "bonus": 2.0,
      "reason": "Corruption exhausts every skill — Dark Embrace draws a card for each. Free card draw on every skill."
    },
    {
      "deckCard": "Feel No Pain",
      "offeredCard": "Corruption",
      "bonus": 2.0,
      "reason": "Corruption is the engine that makes Feel No Pain trigger constantly — defines exhaust builds"
    },
    {
      "deckCard": "Dark Embrace",
      "offeredCard": "Corruption",
      "bonus": 2.0,
      "reason": "Corruption triggers Dark Embrace on every skill — turns deck into a draw engine"
    },
    {
      "deckCard": "Feel No Pain",
      "offeredCard": "Dark Embrace",
      "bonus": 1.0,
      "reason": "Both exhaust payoffs — natural pairing in exhaust builds"
    },
    {
      "deckCard": "Dark Embrace",
      "offeredCard": "Feel No Pain",
      "bonus": 1.0,
      "reason": "Both exhaust payoffs — natural pairing in exhaust builds"
    },
    {
      "deckCard": "Fiend Fire",
      "offeredCard": "Dark Embrace",
      "bonus": 1.5,
      "reason": "Fiend Fire exhausts your whole hand — Dark Embrace draws them all back one by one"
    },
    {
      "deckCard": "Fiend Fire",
      "offeredCard": "Feel No Pain",
      "bonus": 1.5,
      "reason": "Fiend Fire exhausting the whole hand triggers massive Feel No Pain block generation"
    },
    {
      "deckCard": "Rupture",
      "offeredCard": "Bloodletting",
      "bonus": 2.0,
      "reason": "Bloodletting loses HP every play — Rupture gains 1 Strength each time. Free permanent Strength every turn."
    },
    {
      "deckCard": "Rupture",
      "offeredCard": "Offering",
      "bonus": 1.8,
      "reason": "Offering loses 6 HP — Rupture gains Strength from it AND draws 3 cards"
    },
    {
      "deckCard": "Rupture",
      "offeredCard": "Hemokinesis",
      "bonus": 1.5,
      "reason": "Hemokinesis costs HP — Rupture converts that to Strength. High damage + free scaling."
    },
    {
      "deckCard": "Rupture",
      "offeredCard": "Brutality",
      "bonus": 1.5,
      "reason": "Brutality loses 1 HP per turn passively — Rupture gains Strength automatically every turn"
    },
    {
      "deckCard": "Bloodletting",
      "offeredCard": "Rupture",
      "bonus": 2.0,
      "reason": "Rupture is the payoff for Bloodletting — turns energy generation into permanent Strength"
    },
    {
      "deckCard": "Brutality",
      "offeredCard": "Rupture",
      "bonus": 1.5,
      "reason": "Brutality triggers Rupture passively every turn — free Strength without playing any card"
    },
    {
      "deckCard": "Tools Of The Trade",
      "offeredCard": "Reflex",
      "bonus": 2.0,
      "reason": "Tools of the Trade discards 1 every turn — Reflex plays free when discarded. Free Draw 2 every turn."
    },
    {
      "deckCard": "Tools Of The Trade",
      "offeredCard": "Tactician",
      "bonus": 2.0,
      "reason": "Tools of the Trade discards 1 every turn — Tactician plays free when discarded. Free energy every turn."
    },
    {
      "deckCard": "Tools Of The Trade",
      "offeredCard": "Haze",
      "bonus": 1.8,
      "reason": "Tools of the Trade discards 1 per turn — Haze applies 4 AoE poison free when discarded"
    },
    {
      "deckCard": "Well-Laid Plans",
      "offeredCard": "Reflex",
      "bonus": 1.5,
      "reason": "Well-Laid Plans retains Reflex to deliberately discard for free Draw 2 next turn"
    },
    {
      "deckCard": "Well-Laid Plans",
      "offeredCard": "Tactician",
      "bonus": 1.5,
      "reason": "Well-Laid Plans retains Tactician to discard for free energy whenever needed"
    },
    {
      "deckCard": "Calculated Gamble",
      "offeredCard": "Reflex",
      "bonus": 1.5,
      "reason": "Calculated Gamble discards entire hand — triggers every Sly card including Reflex"
    },
    {
      "deckCard": "Calculated Gamble",
      "offeredCard": "Tactician",
      "bonus": 1.5,
      "reason": "Discarding hand triggers Tactician for free energy"
    },
    {
      "deckCard": "Catalyst",
      "offeredCard": "Burst",
      "bonus": 2.5,
      "reason": "Burst plays next Skill twice — Burst+Catalyst = Catalyst plays twice = QUADRUPLE poison stacks. The win condition."
    },
    {
      "deckCard": "Burst",
      "offeredCard": "Catalyst",
      "bonus": 2.5,
      "reason": "Catalyst with Burst active plays twice — turns 20 poison into 80 instantly"
    },
    {
      "deckCard": "Catalyst",
      "offeredCard": "Noxious Fumes",
      "bonus": 1.8,
      "reason": "Noxious Fumes stacks poison passively — Catalyst doubles that stack instantly"
    },
    {
      "deckCard": "Noxious Fumes",
      "offeredCard": "Catalyst",
      "bonus": 1.8,
      "reason": "Catalyst is the win condition for Noxious Fumes — doubles all accumulated stacks"
    },
    {
      "deckCard": "Noxious Fumes",
      "offeredCard": "Mirage",
      "bonus": 1.5,
      "reason": "Mirage gives block = total poison on all enemies — Noxious Fumes keeps growing that number"
    },
    {
      "deckCard": "Burst",
      "offeredCard": "Accelerant",
      "bonus": 1.2,
      "reason": "Burst plays Accelerant twice — poison damage quadruples in one turn"
    },
    {
      "deckCard": "Envenom",
      "offeredCard": "Infinite Blades",
      "bonus": 1.5,
      "reason": "Envenom poisons on every attack — Infinite Blades gives a free attack each turn = free poison every turn"
    },
    {
      "deckCard": "Accuracy",
      "offeredCard": "Blade Dance",
      "bonus": 2.0,
      "reason": "Accuracy adds damage to every Shiv — Blade Dance creates 3 Shivs at once for immediate burst"
    },
    {
      "deckCard": "Accuracy",
      "offeredCard": "Infinite Blades",
      "bonus": 2.0,
      "reason": "Accuracy multiplies every Shiv's damage — Infinite Blades guarantees a buffed Shiv every turn"
    },
    {
      "deckCard": "Accuracy",
      "offeredCard": "Finisher",
      "bonus": 1.8,
      "reason": "Finisher deals damage per attack — with high-damage Shivs from Accuracy it hits for hundreds"
    },
    {
      "deckCard": "Accuracy",
      "offeredCard": "After Image",
      "bonus": 1.2,
      "reason": "After Image blocks per card played — Shiv spam with Accuracy = offense AND defense simultaneously"
    },
    {
      "deckCard": "Accuracy",
      "offeredCard": "Storm Of Steel",
      "bonus": 1.5,
      "reason": "Storm of Steel creates Shivs per hand size — each gets Accuracy's damage bonus"
    },
    {
      "deckCard": "Infinite Blades",
      "offeredCard": "Accuracy",
      "bonus": 2.0,
      "reason": "Accuracy multiplies the damage of every free Shiv from Infinite Blades — take it immediately"
    },
    {
      "deckCard": "Infinite Blades",
      "offeredCard": "After Image",
      "bonus": 1.5,
      "reason": "After Image blocks per card played — free Shiv each turn means free block every turn"
    },
    {
      "deckCard": "After Image",
      "offeredCard": "Infinite Blades",
      "bonus": 1.5,
      "reason": "Infinite Blades gives a free card play per turn — After Image converts that to free block"
    },
    {
      "deckCard": "Claw",
      "offeredCard": "All For One",
      "bonus": 2.5,
      "reason": "All For One pulls ALL 0-cost cards from discard including all Claws — the entire build's payoff in one card"
    },
    {
      "deckCard": "All For One",
      "offeredCard": "Claw",
      "bonus": 2.5,
      "reason": "Each Claw permanently gains damage AND All For One pulls them all back — more Claws = bigger turns"
    },
    {
      "deckCard": "Claw",
      "offeredCard": "Claw",
      "bonus": 2.0,
      "reason": "More Claws = each play scales ALL copies faster. Density is the entire point of Claw builds."
    },
    {
      "deckCard": "Claw",
      "offeredCard": "Feral",
      "bonus": 2.0,
      "reason": "Feral is Echo Form for 0-cost cards — doubles every Claw play for the rest of combat"
    },
    {
      "deckCard": "All For One",
      "offeredCard": "Feral",
      "bonus": 1.8,
      "reason": "Feral doubles 0-cost plays — All For One into Feral creates an avalanche of Claw hits"
    },
    {
      "deckCard": "Claw",
      "offeredCard": "Scrape",
      "bonus": 1.5,
      "reason": "Scrape draws and discards non-attacks — cycles to Claws and All For One quickly"
    },
    {
      "deckCard": "Claw",
      "offeredCard": "FTL",
      "bonus": 1.2,
      "reason": "FTL is 0-cost with draw — cycles the deck and gets recycled by All For One"
    },
    {
      "deckCard": "Defragment",
      "offeredCard": "Electrodynamics",
      "bonus": 1.5,
      "reason": "Electrodynamics makes Lightning hit ALL enemies — Defragment's Focus increases that damage"
    },
    {
      "deckCard": "Defragment",
      "offeredCard": "Biased Cognition",
      "bonus": 1.5,
      "reason": "Stack Focus from both sources — every orb becomes dramatically more powerful"
    },
    {
      "deckCard": "Defragment",
      "offeredCard": "Barrage",
      "bonus": 1.5,
      "reason": "Barrage hits once per orb slot — Focus makes each hit harder"
    },
    {
      "deckCard": "Capacitor",
      "offeredCard": "Barrage",
      "bonus": 2.0,
      "reason": "Barrage hits per orb slot — Capacitor directly adds slots = directly more Barrage damage"
    },
    {
      "deckCard": "Darkness",
      "offeredCard": "Defragment",
      "bonus": 1.5,
      "reason": "Dark orbs gain 6+Focus damage per turn — Defragment makes them cook to massive damage"
    },
    {
      "deckCard": "Darkness",
      "offeredCard": "Multicast",
      "bonus": 1.5,
      "reason": "Multicast evokes Dark orbs early while fully charged — massive burst"
    },
    {
      "deckCard": "Electrodynamics",
      "offeredCard": "Defragment",
      "bonus": 1.5,
      "reason": "More Focus from Defragment = more damage on every Electrodynamics Lightning hit"
    },
    {
      "deckCard": "Glow",
      "offeredCard": "Radiate",
      "bonus": 1.5,
      "reason": "Glow generates Stars that Radiate converts to AoE damage — star generation powers Radiate"
    },
    {
      "deckCard": "Glow",
      "offeredCard": "Child Of The Stars",
      "bonus": 1.5,
      "reason": "Glow generates Stars — Child of Stars gives 2 block per star spent. Consistent free block."
    },
    {
      "deckCard": "Genesis",
      "offeredCard": "Radiate",
      "bonus": 1.8,
      "reason": "Genesis passively gives 2 Stars per turn — Radiate deals 3 AoE per star = 6 free AoE damage every turn"
    },
    {
      "deckCard": "Genesis",
      "offeredCard": "Child Of The Stars",
      "bonus": 1.8,
      "reason": "Genesis gives 2 Stars per turn — Child of Stars converts each to 2 block. Free passive defense."
    },
    {
      "deckCard": "Royal Gamble",
      "offeredCard": "Radiate",
      "bonus": 2.0,
      "reason": "Royal Gamble dumps 9 Stars — Radiate converts them to 27 AoE damage from one combo"
    },
    {
      "deckCard": "Royal Gamble",
      "offeredCard": "Child Of The Stars",
      "bonus": 1.5,
      "reason": "Royal Gamble's 9 Stars = 18 free block from Child of Stars in one play"
    },
    {
      "deckCard": "Decisions Decisions",
      "offeredCard": "Royal Gamble",
      "bonus": 2.5,
      "reason": "Decisions Decisions plays a skill 3 times — into Royal Gamble = 27 Stars. The core infinite loop."
    },
    {
      "deckCard": "Royal Gamble",
      "offeredCard": "Decisions Decisions",
      "bonus": 2.5,
      "reason": "Decisions Decisions triples Royal Gamble for 27 Stars — the primary infinite combo"
    },
    {
      "deckCard": "Child Of The Stars",
      "offeredCard": "Genesis",
      "bonus": 1.8,
      "reason": "Genesis provides passive Stars every turn — Child of Stars converts them to free block"
    },
    {
      "deckCard": "Summon Forth",
      "offeredCard": "Beat Into Shape",
      "bonus": 1.5,
      "reason": "Both core Forge cards — more ways to Forge means Sovereign Blade scales faster"
    },
    {
      "deckCard": "Beat Into Shape",
      "offeredCard": "Furnace",
      "bonus": 1.2,
      "reason": "Furnace passive Forge stacks alongside Beat Into Shape's active Forge"
    },
    {
      "deckCard": "Haunt",
      "offeredCard": "Capture Spirit",
      "bonus": 2.0,
      "reason": "Capture Spirit generates 3 Souls — each Soul triggers Haunt for 6 unavoidable damage. Core engine."
    },
    {
      "deckCard": "Haunt",
      "offeredCard": "Reave",
      "bonus": 1.8,
      "reason": "Reave generates a Soul on play — each Soul feeds Haunt's 6 damage trigger"
    },
    {
      "deckCard": "Haunt",
      "offeredCard": "Dirge",
      "bonus": 1.8,
      "reason": "Dirge generates X Souls — each one triggers Haunt's unavoidable damage"
    },
    {
      "deckCard": "Haunt",
      "offeredCard": "Demesne",
      "bonus": 1.5,
      "reason": "Demesne draws extra cards every turn — find Souls faster for more Haunt triggers"
    },
    {
      "deckCard": "Capture Spirit",
      "offeredCard": "Haunt",
      "bonus": 2.0,
      "reason": "Haunt is the win condition for Soul generation — Capture Spirit feeds it consistently"
    },
    {
      "deckCard": "Demesne",
      "offeredCard": "Haunt",
      "bonus": 1.5,
      "reason": "Demesne draws extra cards = more Soul plays per turn = more Haunt damage triggers"
    },
    {
      "deckCard": "Soul Storm",
      "offeredCard": "Haunt",
      "bonus": 1.5,
      "reason": "Both scale off Soul plays — Soul engine deals massive damage two ways simultaneously"
    },
    {
      "deckCard": "Soul Storm",
      "offeredCard": "Capture Spirit",
      "bonus": 1.5,
      "reason": "Capture Spirit generates the Souls that Soul Storm's damage scales with"
    },
    {
      "deckCard": "Symbiosis",
      "offeredCard": "Unleash",
      "bonus": 2.0,
      "reason": "Unleash deals damage = Osty's Max HP — Symbiosis directly builds that Max HP"
    },
    {
      "deckCard": "Bodyguard",
      "offeredCard": "Unleash",
      "bonus": 2.0,
      "reason": "Bodyguard raises Osty's Max HP — Unleash converts that HP directly into damage"
    },
    {
      "deckCard": "High Five",
      "offeredCard": "Unleash",
      "bonus": 1.5,
      "reason": "High Five permanently buffs Osty attack power — Unleash scales with Max HP AND attack power"
    },
    {
      "deckCard": "Symbiosis",
      "offeredCard": "Squeeze",
      "bonus": 1.8,
      "reason": "Squeeze deals 10 + Osty's Max HP — Symbiosis builds that Max HP for a scaling finisher"
    },
    {
      "deckCard": "Bodyguard",
      "offeredCard": "Squeeze",
      "bonus": 1.8,
      "reason": "Squeeze scales with Osty Max HP — every Bodyguard makes Squeeze hit harder"
    },
    {
      "deckCard": "Dirge",
      "offeredCard": "Devour Life",
      "bonus": 1.5,
      "reason": "Dirge generates Souls AND raises Osty's HP — Devour Life also raises Osty per Soul. Double Osty growth."
    },
    {
      "deckCard": "Scourge",
      "offeredCard": "End Of Days",
      "bonus": 1.5,
      "reason": "Scourge stacks Doom exponentially — End of Days executes enemies at the threshold"
    },
    {
      "deckCard": "End Of Days",
      "offeredCard": "Scourge",
      "bonus": 1.5,
      "reason": "Scourge is the fastest way to reach the Doom execute threshold that End of Days exploits"
    },
    {
      "deckCard": "Countdown",
      "offeredCard": "End Of Days",
      "bonus": 1.2,
      "reason": "Countdown's passive Doom per turn sets up End of Days execute windows"
    },
    {
      "deckCard": "Death's Door",
      "offeredCard": "Scourge",
      "bonus": 1.5,
      "reason": "Death's Door gives 18 block if you applied Doom this turn — Scourge applies Doom AND draws"
    },
    {
      "deckCard": "Borrowed Time",
      "offeredCard": "End Of Days",
      "bonus": 1.0,
      "reason": "Borrowed Time provides free energy to afford End of Days' 3-cost more easily"
    },
    {
      "deckCard": "Tools Of The Trade",
      "offeredCard": "Untouchable",
      "bonus": 1.8,
      "reason": "TotT discards 1/turn — Untouchable plays free for passive block every turn"
    },
    {
      "deckCard": "Tools Of The Trade",
      "offeredCard": "Flick Flack",
      "bonus": 1.8,
      "reason": "TotT discards 1/turn — Flick Flack plays free for free block and evasion"
    },
    {
      "deckCard": "Tools Of The Trade",
      "offeredCard": "Acrobatics",
      "bonus": 1.8,
      "reason": "TotT discards 1/turn — Acrobatics plays free, drawing 3 cards for free every turn"
    },
    {
      "deckCard": "Tools Of The Trade",
      "offeredCard": "Prepared",
      "bonus": 1.8,
      "reason": "TotT discards 1/turn — Prepared plays free for passive draw and card selection"
    },
    {
      "deckCard": "Tools Of The Trade",
      "offeredCard": "Ricochet",
      "bonus": 2.0,
      "reason": "TotT discards 1/turn — Ricochet plays free, attaching bonus hits to every attack"
    },
    {
      "deckCard": "Calculated Gamble",
      "offeredCard": "Flick Flack",
      "bonus": 1.5,
      "reason": "Calculated Gamble discards entire hand — triggers Flick Flack Sly for free block"
    },
    {
      "deckCard": "Acrobatics",
      "offeredCard": "Prepared",
      "bonus": 2.0,
      "reason": "Acrobatics + Prepared create infinite discard loop — each triggers the other for endless free draws"
    },
    {
      "deckCard": "Genesis",
      "offeredCard": "Void Form",
      "bonus": 2.0,
      "reason": "Genesis generates Stars passively — Void Form consumes Stars to grow and weaken enemies"
    },
    {
      "deckCard": "Genesis",
      "offeredCard": "Convergence",
      "bonus": 1.8,
      "reason": "Genesis generates Stars — Convergence converts accumulated Stars into AoE burst damage"
    },
    {
      "deckCard": "Genesis",
      "offeredCard": "Particle Wall",
      "bonus": 1.8,
      "reason": "Genesis generates Stars — Particle Wall consumes Stars for sustained passive block"
    },
    {
      "deckCard": "Sealed Throne",
      "offeredCard": "Convergence",
      "bonus": 1.8,
      "reason": "Sealed Throne generates Stars on attack — Convergence converts them to AoE burst"
    },
    {
      "deckCard": "Sealed Throne",
      "offeredCard": "Particle Wall",
      "bonus": 1.8,
      "reason": "Sealed Throne generates Stars on attack — Particle Wall converts them to block"
    },
    {
      "deckCard": "Sealed Throne",
      "offeredCard": "Radiate",
      "bonus": 1.8,
      "reason": "Sealed Throne generates Stars on attack — Radiate deals 3 AoE per Star"
    },
    {
      "deckCard": "Void Form",
      "offeredCard": "Genesis",
      "bonus": 2.0,
      "reason": "Void Form consumes Stars for massive Weakness — Genesis ensures steady passive supply"
    },
    {
      "deckCard": "Void Form",
      "offeredCard": "Radiate",
      "bonus": 2.0,
      "reason": "Void Form accumulates Stars — Radiate converts each Star to 3 AoE damage"
    },
    {
      "deckCard": "End Of Days",
      "offeredCard": "Oblivion",
      "bonus": 2.0,
      "reason": "End of Days executes Doomed enemies — Oblivion applies Doom to all enemies simultaneously"
    },
    {
      "deckCard": "Inflame",
      "offeredCard": "Fight Me!",
      "bonus": 1.2,
      "reason": "Fight Me! both adds Strength and double-dips on existing Strength through multi-hit damage"
    },
    {
      "deckCard": "Rupture",
      "offeredCard": "Bloodletting",
      "bonus": 1.8,
      "reason": "Bloodletting safely triggers Rupture every time you play it, turning HP loss into repeatable Strength"
    },
    {
      "deckCard": "Rupture",
      "offeredCard": "Hemokinesis",
      "bonus": 1.3,
      "reason": "Hemokinesis becomes even more efficient when the self-damage also grants Strength via Rupture"
    },
    {
      "deckCard": "Perfected Strike",
      "offeredCard": "Pommel Strike",
      "bonus": 1.1,
      "reason": "Pommel Strike supports the Strike package while drawing into Perfected Strike turns"
    },
    {
      "deckCard": "Perfected Strike",
      "offeredCard": "Twin Strike",
      "bonus": 1.4,
      "reason": "Twin Strike is a premium Strike-tag support card that also scales with Strength"
    },
    {
      "deckCard": "Bash",
      "offeredCard": "Cruelty",
      "bonus": 1.3,
      "reason": "Cruelty rewards repeated Vulnerable application, and Bash is a reliable way to start that chain"
    },
    {
      "deckCard": "Taunt",
      "offeredCard": "Cruelty",
      "bonus": 1.2,
      "reason": "Taunt supplies Vulnerable while Cruelty amplifies every follow-up hit into those targets"
    },
    {
      "deckCard": "Fight Me!",
      "offeredCard": "Conflagration",
      "bonus": 0.9,
      "reason": "Fight Me! adds to attack-chain turns while also supplying Strength for later multi-hit and finisher turns"
    },
    {
      "deckCard": "Rage",
      "offeredCard": "Conflagration",
      "bonus": 0.9,
      "reason": "Rage rewards aggressive attack chains, the same turns where Conflagration reaches high damage"
    },
    {
      "deckCard": "Refine Blade",
      "offeredCard": "Sealed Throne",
      "bonus": 1.4,
      "reason": "Refine Blade accelerates Forge plans and helps large Forge payoff cards come online faster"
    }
  ],
  "dupePenalties": {
    "Barricade": -99,
    "Demon Form": -2.5,
    "Corruption": -2.5,
    "Inflame": -1.5,
    "Dark Embrace": -1.5,
    "Feel No Pain": -1.5,
    "Rupture": -1.0,
    "Juggernaut": -1.5,
    "Feed": -2.0,
    "Combust": -2.0,
    "Well-Laid Plans": -2.5,
    "Noxious Fumes": -1.0,
    "After Image": -2.0,
    "Envenom": -1.5,
    "Catalyst": -2.0,
    "Burst": -2.0,
    "Nightmare": -2.5,
    "Echo Form": -2.5,
    "Defragment": -0.5,
    "Electrodynamics": -2.5,
    "Biased Cognition": -2.5,
    "Static Discharge": -1.5,
    "All For One": -1.5,
    "Capacitor": -1.0,
    "Void Form": -2.5,
    "Genesis": -2.0,
    "Bombardment": -2.5,
    "Sealed Throne": -2.5,
    "Demesne": -2.5,
    "Haunt": -0.5,
    "Devour Life": -1.5,
    "End Of Days": -2.0
  },
  "names": [
    {
      "n": "Apotheosis",
      "c": "colorless"
    },
    {
      "n": "Apparition",
      "c": "colorless"
    },
    {
      "n": "Bandage Up",
      "c": "colorless"
    },
    {
      "n": "Blind",
      "c": "colorless"
    },
    {
      "n": "Deep Breath",
      "c": "colorless"
    },
    {
      "n": "Dramatic Entrance",
      "c": "colorless"
    },
    {
      "n": "Enlightenment",
      "c": "colorless"
    },
    {
      "n": "Flash Of Steel",
      "c": "colorless"
    },
    {
      "n": "Forethought",
      "c": "colorless"
    },
    {
      "n": "Good Instincts",
      "c": "colorless"
    },
    {
      "n": "Hand Of Greed",
      "c": "colorless"
    },
    {
      "n": "Jack Of All Trades",
      "c": "colorless"
    },
    {
      "n": "Madness",
      "c": "colorless"
    },
    {
      "n": "Mind Blast",
      "c": "colorless"
    },
    {
      "n": "Panacea",
      "c": "colorless"
    },
    {
      "n": "Panache",
      "c": "colorless"
    },
    {
      "n": "Sadistic Nature",
      "c": "colorless"
    },
    {
      "n": "Secret Weapon",
      "c": "colorless"
    },
    {
      "n": "The Bomb",
      "c": "colorless"
    },
    {
      "n": "Thinking Ahead",
      "c": "colorless"
    },
    {
      "n": "Transmutation",
      "c": "colorless"
    },
    {
      "n": "Trip",
      "c": "colorless"
    },
    {
      "n": "Violence",
      "c": "colorless"
    },
    {
      "n": "Wisdom",
      "c": "colorless"
    },
    {
      "n": "Aggregate",
      "c": "defect"
    },
    {
      "n": "All For One",
      "c": "defect"
    },
    {
      "n": "Ball Lightning",
      "c": "defect"
    },
    {
      "n": "Barrage",
      "c": "defect"
    },
    {
      "n": "Beam Cell",
      "c": "defect"
    },
    {
      "n": "Biased Cognition",
      "c": "defect"
    },
    {
      "n": "Blizzard",
      "c": "defect"
    },
    {
      "n": "Boot Sequence",
      "c": "defect"
    },
    {
      "n": "Buffer",
      "c": "defect"
    },
    {
      "n": "Bullseye",
      "c": "defect"
    },
    {
      "n": "Capacitor",
      "c": "defect"
    },
    {
      "n": "Chill",
      "c": "defect"
    },
    {
      "n": "Claw",
      "c": "defect"
    },
    {
      "n": "Cold Snap",
      "c": "defect"
    },
    {
      "n": "Compile Driver",
      "c": "defect"
    },
    {
      "n": "Consume",
      "c": "defect"
    },
    {
      "n": "Coolheaded",
      "c": "defect"
    },
    {
      "n": "Darkness",
      "c": "defect"
    },
    {
      "n": "Defend",
      "c": "defect"
    },
    {
      "n": "Defragment",
      "c": "defect"
    },
    {
      "n": "Dualcast",
      "c": "defect"
    },
    {
      "n": "Echo Form",
      "c": "defect"
    },
    {
      "n": "Electrodynamics",
      "c": "defect"
    },
    {
      "n": "Feral",
      "c": "defect"
    },
    {
      "n": "Finesse",
      "c": "defect"
    },
    {
      "n": "Force Field",
      "c": "defect"
    },
    {
      "n": "FTL",
      "c": "defect"
    },
    {
      "n": "Genetic Algorithm",
      "c": "defect"
    },
    {
      "n": "Glacier",
      "c": "defect"
    },
    {
      "n": "Go For The Eyes",
      "c": "defect"
    },
    {
      "n": "Hologram",
      "c": "defect"
    },
    {
      "n": "Hyper Beam",
      "c": "defect"
    },
    {
      "n": "Lockon",
      "c": "defect"
    },
    {
      "n": "Loop",
      "c": "defect"
    },
    {
      "n": "Machine Learning",
      "c": "defect"
    },
    {
      "n": "Meteor Strike",
      "c": "defect"
    },
    {
      "n": "Momentum Strike",
      "c": "defect"
    },
    {
      "n": "Multicast",
      "c": "defect"
    },
    {
      "n": "Panache",
      "c": "defect"
    },
    {
      "n": "Rebound",
      "c": "defect"
    },
    {
      "n": "Recursion",
      "c": "defect"
    },
    {
      "n": "Reprogram",
      "c": "defect"
    },
    {
      "n": "Scrape",
      "c": "defect"
    },
    {
      "n": "Self Repair",
      "c": "defect"
    },
    {
      "n": "Skim",
      "c": "defect"
    },
    {
      "n": "Stack",
      "c": "defect"
    },
    {
      "n": "Static Discharge",
      "c": "defect"
    },
    {
      "n": "Storm",
      "c": "defect"
    },
    {
      "n": "Strike",
      "c": "defect"
    },
    {
      "n": "Supercritical",
      "c": "defect"
    },
    {
      "n": "Thunder Strike",
      "c": "defect"
    },
    {
      "n": "Turbo",
      "c": "defect"
    },
    {
      "n": "Uproar",
      "c": "defect"
    },
    {
      "n": "Void",
      "c": "defect"
    },
    {
      "n": "White Noise",
      "c": "defect"
    },
    {
      "n": "Zap",
      "c": "defect"
    },
    {
      "n": "Aggression",
      "c": "ironclad"
    },
    {
      "n": "Anger",
      "c": "ironclad"
    },
    {
      "n": "Armaments",
      "c": "ironclad"
    },
    {
      "n": "Ashen Strike",
      "c": "ironclad"
    },
    {
      "n": "Barricade",
      "c": "ironclad"
    },
    {
      "n": "Bash",
      "c": "ironclad"
    },
    {
      "n": "Battle Trance",
      "c": "ironclad"
    },
    {
      "n": "Blood Wall",
      "c": "ironclad"
    },
    {
      "n": "Bloodletting",
      "c": "ironclad"
    },
    {
      "n": "Bludgeon",
      "c": "ironclad"
    },
    {
      "n": "Body Slam",
      "c": "ironclad"
    },
    {
      "n": "Brand",
      "c": "ironclad"
    },
    {
      "n": "Breakthrough",
      "c": "ironclad"
    },
    {
      "n": "Brutality",
      "c": "ironclad"
    },
    {
      "n": "Burning Pact",
      "c": "ironclad"
    },
    {
      "n": "Cascade",
      "c": "ironclad"
    },
    {
      "n": "Clash",
      "c": "ironclad"
    },
    {
      "n": "Clothesline",
      "c": "ironclad"
    },
    {
      "n": "Colossus",
      "c": "ironclad"
    },
    {
      "n": "Combust",
      "c": "ironclad"
    },
    {
      "n": "Conflagration",
      "c": "ironclad"
    },
    {
      "n": "Corruption",
      "c": "ironclad"
    },
    {
      "n": "Crimson Mantle",
      "c": "ironclad"
    },
    {
      "n": "Cruelty",
      "c": "ironclad"
    },
    {
      "n": "Dark Embrace",
      "c": "ironclad"
    },
    {
      "n": "Defend",
      "c": "ironclad"
    },
    {
      "n": "Demon Form",
      "c": "ironclad"
    },
    {
      "n": "Disarm",
      "c": "ironclad"
    },
    {
      "n": "Dismantle",
      "c": "ironclad"
    },
    {
      "n": "Double Tap",
      "c": "ironclad"
    },
    {
      "n": "Dropkick",
      "c": "ironclad"
    },
    {
      "n": "Entrench",
      "c": "ironclad"
    },
    {
      "n": "Evil Eye",
      "c": "ironclad"
    },
    {
      "n": "Expect A Fight",
      "c": "ironclad"
    },
    {
      "n": "Feed",
      "c": "ironclad"
    },
    {
      "n": "Feel No Pain",
      "c": "ironclad"
    },
    {
      "n": "Fiend Fire",
      "c": "ironclad"
    },
    {
      "n": "Fight Me!",
      "c": "ironclad"
    },
    {
      "n": "Flame Barrier",
      "c": "ironclad"
    },
    {
      "n": "Flex",
      "c": "ironclad"
    },
    {
      "n": "Grapple",
      "c": "ironclad"
    },
    {
      "n": "Headbutt",
      "c": "ironclad"
    },
    {
      "n": "Heavy Blade",
      "c": "ironclad"
    },
    {
      "n": "Hemokinesis",
      "c": "ironclad"
    },
    {
      "n": "Immolate",
      "c": "ironclad"
    },
    {
      "n": "Impervious",
      "c": "ironclad"
    },
    {
      "n": "Infernal Blade",
      "c": "ironclad"
    },
    {
      "n": "Inflame",
      "c": "ironclad"
    },
    {
      "n": "Intimidate",
      "c": "ironclad"
    },
    {
      "n": "Iron Wave",
      "c": "ironclad"
    },
    {
      "n": "Juggernaut",
      "c": "ironclad"
    },
    {
      "n": "Juggling",
      "c": "ironclad"
    },
    {
      "n": "Limit Break",
      "c": "ironclad"
    },
    {
      "n": "Mangle",
      "c": "ironclad"
    },
    {
      "n": "Molten Fist",
      "c": "ironclad"
    },
    {
      "n": "Offering",
      "c": "ironclad"
    },
    {
      "n": "Perfected Strike",
      "c": "ironclad"
    },
    {
      "n": "Pillage",
      "c": "ironclad"
    },
    {
      "n": "Pommel Strike",
      "c": "ironclad"
    },
    {
      "n": "Power Through",
      "c": "ironclad"
    },
    {
      "n": "Primal Force",
      "c": "ironclad"
    },
    {
      "n": "Pyre",
      "c": "ironclad"
    },
    {
      "n": "Rage",
      "c": "ironclad"
    },
    {
      "n": "Rampage",
      "c": "ironclad"
    },
    {
      "n": "Reaper",
      "c": "ironclad"
    },
    {
      "n": "Rupture",
      "c": "ironclad"
    },
    {
      "n": "Searing Blow",
      "c": "ironclad"
    },
    {
      "n": "Second Wind",
      "c": "ironclad"
    },
    {
      "n": "Sever Soul",
      "c": "ironclad"
    },
    {
      "n": "Shockwave",
      "c": "ironclad"
    },
    {
      "n": "Shrug It Off",
      "c": "ironclad"
    },
    {
      "n": "Spite",
      "c": "ironclad"
    },
    {
      "n": "Spot Weakness",
      "c": "ironclad"
    },
    {
      "n": "Stoke",
      "c": "ironclad"
    },
    {
      "n": "Stomp",
      "c": "ironclad"
    },
    {
      "n": "Strike",
      "c": "ironclad"
    },
    {
      "n": "Sword Boomerang",
      "c": "ironclad"
    },
    {
      "n": "Taunt",
      "c": "ironclad"
    },
    {
      "n": "Thrash",
      "c": "ironclad"
    },
    {
      "n": "Thunderclap",
      "c": "ironclad"
    },
    {
      "n": "True Grit",
      "c": "ironclad"
    },
    {
      "n": "Twin Strike",
      "c": "ironclad"
    },
    {
      "n": "Unmovable",
      "c": "ironclad"
    },
    {
      "n": "Uppercut",
      "c": "ironclad"
    },
    {
      "n": "Vicious",
      "c": "ironclad"
    },
    {
      "n": "Whirlwind",
      "c": "ironclad"
    },
    {
      "n": "Wild Strike",
      "c": "ironclad"
    },
    {
      "n": "Afterlife",
      "c": "necrobinder"
    },
    {
      "n": "Banshee's Cry",
      "c": "necrobinder"
    },
    {
      "n": "Blight Strike",
      "c": "necrobinder"
    },
    {
      "n": "Bodyguard",
      "c": "necrobinder"
    },
    {
      "n": "Bone Shards",
      "c": "necrobinder"
    },
    {
      "n": "Borrowed Time",
      "c": "necrobinder"
    },
    {
      "n": "Bury",
      "c": "necrobinder"
    },
    {
      "n": "Capture Spirit",
      "c": "necrobinder"
    },
    {
      "n": "Countdown",
      "c": "necrobinder"
    },
    {
      "n": "Danse Macabre",
      "c": "necrobinder"
    },
    {
      "n": "Death March",
      "c": "necrobinder"
    },
    {
      "n": "Death's Door",
      "c": "necrobinder"
    },
    {
      "n": "Deathbringer",
      "c": "necrobinder"
    },
    {
      "n": "Debilitate",
      "c": "necrobinder"
    },
    {
      "n": "Defend",
      "c": "necrobinder"
    },
    {
      "n": "Delay",
      "c": "necrobinder"
    },
    {
      "n": "Demesne",
      "c": "necrobinder"
    },
    {
      "n": "Devour Life",
      "c": "necrobinder"
    },
    {
      "n": "Dirge",
      "c": "necrobinder"
    },
    {
      "n": "Doom Spike",
      "c": "necrobinder"
    },
    {
      "n": "Dredge",
      "c": "necrobinder"
    },
    {
      "n": "End Of Days",
      "c": "necrobinder"
    },
    {
      "n": "Enfeebling Touch",
      "c": "necrobinder"
    },
    {
      "n": "Eradicate",
      "c": "necrobinder"
    },
    {
      "n": "Fear",
      "c": "necrobinder"
    },
    {
      "n": "Fetch",
      "c": "necrobinder"
    },
    {
      "n": "Flatten",
      "c": "necrobinder"
    },
    {
      "n": "Grave Warden",
      "c": "necrobinder"
    },
    {
      "n": "Graveblast",
      "c": "necrobinder"
    },
    {
      "n": "Haunt",
      "c": "necrobinder"
    },
    {
      "n": "High Five",
      "c": "necrobinder"
    },
    {
      "n": "Lethality",
      "c": "necrobinder"
    },
    {
      "n": "Negative Pulse",
      "c": "necrobinder"
    },
    {
      "n": "Neurosurge",
      "c": "necrobinder"
    },
    {
      "n": "No Escape",
      "c": "necrobinder"
    },
    {
      "n": "Oblivion",
      "c": "necrobinder"
    },
    {
      "n": "Parse",
      "c": "necrobinder"
    },
    {
      "n": "Pull Aggro",
      "c": "necrobinder"
    },
    {
      "n": "Rattle",
      "c": "necrobinder"
    },
    {
      "n": "Reanimate",
      "c": "necrobinder"
    },
    {
      "n": "Reaper Form",
      "c": "necrobinder"
    },
    {
      "n": "Reave",
      "c": "necrobinder"
    },
    {
      "n": "Sacrifice",
      "c": "necrobinder"
    },
    {
      "n": "Scourge",
      "c": "necrobinder"
    },
    {
      "n": "Scythe",
      "c": "necrobinder"
    },
    {
      "n": "Shared Fate",
      "c": "necrobinder"
    },
    {
      "n": "Sic Em",
      "c": "necrobinder"
    },
    {
      "n": "Snap",
      "c": "necrobinder"
    },
    {
      "n": "Soul Spark",
      "c": "necrobinder"
    },
    {
      "n": "Soul Storm",
      "c": "necrobinder"
    },
    {
      "n": "Squeeze",
      "c": "necrobinder"
    },
    {
      "n": "Strike",
      "c": "necrobinder"
    },
    {
      "n": "Symbiosis",
      "c": "necrobinder"
    },
    {
      "n": "Time's Up",
      "c": "necrobinder"
    },
    {
      "n": "Transfigure",
      "c": "necrobinder"
    },
    {
      "n": "Unleash",
      "c": "necrobinder"
    },
    {
      "n": "Alignment",
      "c": "regent"
    },
    {
      "n": "Astral Pulse",
      "c": "regent"
    },
    {
      "n": "Beat Into Shape",
      "c": "regent"
    },
    {
      "n": "Big Bang",
      "c": "regent"
    },
    {
      "n": "Black Hole",
      "c": "regent"
    },
    {
      "n": "Bombardment",
      "c": "regent"
    },
    {
      "n": "Bulwark",
      "c": "regent"
    },
    {
      "n": "Bundle Of Joy",
      "c": "regent"
    },
    {
      "n": "Celestial Might",
      "c": "regent"
    },
    {
      "n": "Child Of The Stars",
      "c": "regent"
    },
    {
      "n": "Cloak Of Stars",
      "c": "regent"
    },
    {
      "n": "Comet",
      "c": "regent"
    },
    {
      "n": "Conqueror",
      "c": "regent"
    },
    {
      "n": "Convergence",
      "c": "regent"
    },
    {
      "n": "Cosmic Indifference",
      "c": "regent"
    },
    {
      "n": "Crash Landing",
      "c": "regent"
    },
    {
      "n": "Crescent Spear",
      "c": "regent"
    },
    {
      "n": "Decisions Decisions",
      "c": "regent"
    },
    {
      "n": "Defend",
      "c": "regent"
    },
    {
      "n": "Dying Star",
      "c": "regent"
    },
    {
      "n": "Falling Star",
      "c": "regent"
    },
    {
      "n": "Foregone Conclusion",
      "c": "regent"
    },
    {
      "n": "Furnace",
      "c": "regent"
    },
    {
      "n": "Gamma Blast",
      "c": "regent"
    },
    {
      "n": "Gather Light",
      "c": "regent"
    },
    {
      "n": "Genesis",
      "c": "regent"
    },
    {
      "n": "Glimmer",
      "c": "regent"
    },
    {
      "n": "Glow",
      "c": "regent"
    },
    {
      "n": "Guards!!!",
      "c": "regent"
    },
    {
      "n": "Guiding Star",
      "c": "regent"
    },
    {
      "n": "Hegemony",
      "c": "regent"
    },
    {
      "n": "Hidden Cache",
      "c": "regent"
    },
    {
      "n": "Kingly Kick",
      "c": "regent"
    },
    {
      "n": "Kingly Punch",
      "c": "regent"
    },
    {
      "n": "Knockout Blow",
      "c": "regent"
    },
    {
      "n": "Lunar Blast",
      "c": "regent"
    },
    {
      "n": "Monologue",
      "c": "regent"
    },
    {
      "n": "Parry",
      "c": "regent"
    },
    {
      "n": "Particle Wall",
      "c": "regent"
    },
    {
      "n": "Pattern",
      "c": "regent"
    },
    {
      "n": "Photon Cut",
      "c": "regent"
    },
    {
      "n": "Prophesize",
      "c": "regent"
    },
    {
      "n": "Radiate",
      "c": "regent"
    },
    {
      "n": "Refine Blade",
      "c": "regent"
    },
    {
      "n": "Reflect",
      "c": "regent"
    },
    {
      "n": "Resonance",
      "c": "regent"
    },
    {
      "n": "Royal Gamble",
      "c": "regent"
    },
    {
      "n": "Sealed Throne",
      "c": "regent"
    },
    {
      "n": "Seeking Edge",
      "c": "regent"
    },
    {
      "n": "Seven Stars",
      "c": "regent"
    },
    {
      "n": "Shining Strike",
      "c": "regent"
    },
    {
      "n": "Solar Strike",
      "c": "regent"
    },
    {
      "n": "Spoils Of Battle",
      "c": "regent"
    },
    {
      "n": "Stardust",
      "c": "regent"
    },
    {
      "n": "Strike",
      "c": "regent"
    },
    {
      "n": "Summon Forth",
      "c": "regent"
    },
    {
      "n": "Tyranny",
      "c": "regent"
    },
    {
      "n": "Venerate",
      "c": "regent"
    },
    {
      "n": "Void Form",
      "c": "regent"
    },
    {
      "n": "Wrought In War",
      "c": "regent"
    },
    {
      "n": "Accelerant",
      "c": "silent"
    },
    {
      "n": "Accuracy",
      "c": "silent"
    },
    {
      "n": "Acrobatics",
      "c": "silent"
    },
    {
      "n": "Adrenaline",
      "c": "silent"
    },
    {
      "n": "After Image",
      "c": "silent"
    },
    {
      "n": "Assassinate",
      "c": "silent"
    },
    {
      "n": "Backstab",
      "c": "silent"
    },
    {
      "n": "Bane",
      "c": "silent"
    },
    {
      "n": "Blade Dance",
      "c": "silent"
    },
    {
      "n": "Blur",
      "c": "silent"
    },
    {
      "n": "Bouncing Flask",
      "c": "silent"
    },
    {
      "n": "Bubble Bubble",
      "c": "silent"
    },
    {
      "n": "Burst",
      "c": "silent"
    },
    {
      "n": "Calculated Gamble",
      "c": "silent"
    },
    {
      "n": "Caltrops",
      "c": "silent"
    },
    {
      "n": "Catalyst",
      "c": "silent"
    },
    {
      "n": "Cloak And Dagger",
      "c": "silent"
    },
    {
      "n": "Concentrate",
      "c": "silent"
    },
    {
      "n": "Corpse Explosion",
      "c": "silent"
    },
    {
      "n": "Crippling Cloud",
      "c": "silent"
    },
    {
      "n": "Dagger Throw",
      "c": "silent"
    },
    {
      "n": "Dash",
      "c": "silent"
    },
    {
      "n": "Deadly Poison",
      "c": "silent"
    },
    {
      "n": "Deadly Poison+",
      "c": "silent"
    },
    {
      "n": "Defend",
      "c": "silent"
    },
    {
      "n": "Distraction",
      "c": "silent"
    },
    {
      "n": "Doppelganger",
      "c": "silent"
    },
    {
      "n": "Envenom",
      "c": "silent"
    },
    {
      "n": "Eviscerate",
      "c": "silent"
    },
    {
      "n": "Expertise",
      "c": "silent"
    },
    {
      "n": "Fan Of Knives",
      "c": "silent"
    },
    {
      "n": "Finisher",
      "c": "silent"
    },
    {
      "n": "Flash",
      "c": "silent"
    },
    {
      "n": "Flick Flack",
      "c": "silent"
    },
    {
      "n": "Follow Through",
      "c": "silent"
    },
    {
      "n": "Footwork",
      "c": "silent"
    },
    {
      "n": "Grand Finale",
      "c": "silent"
    },
    {
      "n": "Hand Trick",
      "c": "silent"
    },
    {
      "n": "Haze",
      "c": "silent"
    },
    {
      "n": "Infinite Blades",
      "c": "silent"
    },
    {
      "n": "Knife Trap",
      "c": "silent"
    },
    {
      "n": "Leg Sweep",
      "c": "silent"
    },
    {
      "n": "Master Planner",
      "c": "silent"
    },
    {
      "n": "Mirage",
      "c": "silent"
    },
    {
      "n": "Night Terror",
      "c": "silent"
    },
    {
      "n": "Nightmare",
      "c": "silent"
    },
    {
      "n": "Noxious Fumes",
      "c": "silent"
    },
    {
      "n": "Nunchaku",
      "c": "silent"
    },
    {
      "n": "Outmaneuver",
      "c": "silent"
    },
    {
      "n": "Piercing Wail",
      "c": "silent"
    },
    {
      "n": "Poisoned Stab",
      "c": "silent"
    },
    {
      "n": "Predator",
      "c": "silent"
    },
    {
      "n": "Prepared",
      "c": "silent"
    },
    {
      "n": "Reflex",
      "c": "silent"
    },
    {
      "n": "Ricochet",
      "c": "silent"
    },
    {
      "n": "Shadowmeld",
      "c": "silent"
    },
    {
      "n": "Skewer",
      "c": "silent"
    },
    {
      "n": "Snakebite",
      "c": "silent"
    },
    {
      "n": "Storm Of Steel",
      "c": "silent"
    },
    {
      "n": "Strike",
      "c": "silent"
    },
    {
      "n": "Survivor",
      "c": "silent"
    },
    {
      "n": "Tactician",
      "c": "silent"
    },
    {
      "n": "Tools Of The Trade",
      "c": "silent"
    },
    {
      "n": "Unload",
      "c": "silent"
    },
    {
      "n": "Untouchable",
      "c": "silent"
    },
    {
      "n": "Well-Laid Plans",
      "c": "silent"
    }
  ]
};