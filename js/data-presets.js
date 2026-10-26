// 16 Előre Definiált Ideológia, Értékrend és Világnézeti Archetípus
// Minden tengelyhez tartozik egy [min, max] értékhatár (range), egy típusérték (ideal) és egy súly (weight: 0.3 - 2.0)

function defAxis(min, max, weight = 1.0, customIdeal = null) {
  const ideal = customIdeal !== null ? customIdeal : Math.round((min + max) / 2);
  return { range: [min, max], ideal, weight };
}

export const PRESET_GROUPS = [
  { id: 'all', label: { hu: 'Összes irányzat', en: 'All Archetypes' } },
  { id: 'political', label: { hu: 'Politikai és Társadalmi', en: 'Political & Social' } },
  { id: 'economic', label: { hu: 'Gazdasági és Államelméleti', en: 'Economic & Governance' } },
  { id: 'philosophical', label: { hu: 'Filozófiai és Életvezetési', en: 'Philosophical & Life Values' } }
];

export const PRESETS = [
  // 1. SZOCIÁLDEMOKRATA
  {
    id: 'soc_dem',
    group: 'political',
    icon: '🌹',
    color: '#e11d48',
    name: { hu: 'Szociáldemokrata', en: 'Social Democrat' },
    tagline: {
      hu: 'Jóléti állam, vegyes gazdaság, társadalmi szolidaritás és demokratikus jogállam.',
      en: 'Welfare state, regulated mixed economy, social solidarity, and democratic rights.'
    },
    desc: {
      hu: 'A szociáldemokrácia a kapitalista piacgazdaság dinamizmusát ötvözi az erős állami újraelosztással, szakszervezeti védelemmel, univerzális közszolgáltatásokkal és progresszív emberi jogokkal.',
      en: 'Combines a market economy with strong welfare redistribution, universal public services, labor rights, and inclusive democratic institutions.'
    },
    axes: {
      soc_indiv_comm: defAxis(-30, 35, 1.0, 5),
      soc_egal_hier: defAxis(-85, -35, 1.8, -65),
      soc_univ_nat: defAxis(-65, -10, 1.0, -40),
      soc_multi_assim: defAxis(-70, -15, 1.1, -45),
      soc_coop_comp: defAxis(-80, -30, 1.5, -55),

      eco_prop: defAxis(-45, 20, 1.3, -15),
      eco_coord: defAxis(-65, -15, 1.5, -40),
      eco_redist: defAxis(-90, -45, 2.0, -70),
      eco_ecology: defAxis(-70, -15, 1.2, -45),
      eco_trade: defAxis(-35, 35, 0.8, 0),

      pow_lib_auth: defAxis(-55, 10, 1.1, -25),
      pow_dem_tech: defAxis(-65, -10, 1.3, -40),
      pow_decent_cent: defAxis(-40, 30, 0.7, -5),
      pow_rehab_punish: defAxis(-85, -30, 1.4, -60),
      pow_concil_bellig: defAxis(-80, -25, 1.3, -55),

      cul_innov_trad: defAxis(-75, -20, 1.2, -50),
      cul_human_spirit: defAxis(-80, -20, 1.1, -50),
      cul_auton_norm: defAxis(-80, -25, 1.3, -55),
      cul_trans_bio: defAxis(-45, 25, 0.5, -10),
      cul_out_in: defAxis(-40, 30, 0.5, -5),

      eth_util_deon: defAxis(-50, 20, 0.7, -15),
      eth_rel_abs: defAxis(-55, 15, 0.7, -20),
      eth_emp_int: defAxis(-65, 0, 0.9, -35),
      eth_qual_quant: defAxis(-85, -25, 1.4, -55),
      eth_speech: defAxis(-30, 50, 1.0, 15),

      psy_hed_asc: defAxis(-50, 20, 0.5, -15),
      psy_bold_sec: defAxis(-20, 50, 0.7, 15),
      psy_rouss_hobb: defAxis(-70, -10, 1.1, -40),
      psy_pres_fut: defAxis(-35, 45, 0.8, 10),
      psy_agency_struct: defAxis(-80, -25, 1.5, -55)
    }
  },

  // 2. KLASSZIKUS LIBERÁLIS
  {
    id: 'class_lib',
    group: 'political',
    icon: '🗽',
    color: '#eab308',
    name: { hu: 'Klasszikus Liberális', en: 'Classical Liberal' },
    tagline: {
      hu: 'Egyéni szabadságjogok, jogállamiság, szabadpiac és korlátozott államhatalom.',
      en: 'Individual liberty, rule of law, free markets, and constitutionally limited government.'
    },
    desc: {
      hu: 'A felvilágosodás öröksége: az egyén szabadsága, a magántulajdon védelme, a szabadkereskedelem és a cenzúramentes nyilvánosság a virágzó társadalom alapja.',
      en: 'Rooted in the Enlightenment: champions civil liberties, private property, free trade, free speech, and checks on government power.'
    },
    axes: {
      soc_indiv_comm: defAxis(-90, -40, 1.9, -70),
      soc_egal_hier: defAxis(-30, 40, 0.9, 10),
      soc_univ_nat: defAxis(-65, 10, 1.0, -30),
      soc_multi_assim: defAxis(-60, 15, 0.9, -25),
      soc_coop_comp: defAxis(15, 75, 1.3, 45),

      eco_prop: defAxis(45, 95, 1.9, 75),
      eco_coord: defAxis(45, 90, 1.8, 70),
      eco_redist: defAxis(25, 80, 1.6, 55),
      eco_ecology: defAxis(-10, 60, 0.8, 25),
      eco_trade: defAxis(45, 95, 1.7, 75),

      pow_lib_auth: defAxis(-85, -35, 1.9, -65),
      pow_dem_tech: defAxis(-40, 30, 0.8, -5),
      pow_decent_cent: defAxis(-75, -15, 1.3, -45),
      pow_rehab_punish: defAxis(-45, 25, 0.8, -10),
      pow_concil_bellig: defAxis(-60, 10, 1.0, -25),

      cul_innov_trad: defAxis(-65, 10, 1.0, -30),
      cul_human_spirit: defAxis(-75, -10, 1.1, -45),
      cul_auton_norm: defAxis(-85, -30, 1.6, -60),
      cul_trans_bio: defAxis(-60, 15, 0.7, -20),
      cul_out_in: defAxis(-65, 5, 0.9, -30),

      eth_util_deon: defAxis(-40, 50, 0.9, 10),
      eth_rel_abs: defAxis(-45, 30, 0.7, -10),
      eth_emp_int: defAxis(-75, -15, 1.2, -45),
      eth_qual_quant: defAxis(5, 65, 1.0, 35),
      eth_speech: defAxis(-95, -45, 1.8, -75),

      psy_hed_asc: defAxis(-55, 20, 0.6, -20),
      psy_bold_sec: defAxis(-70, -10, 1.2, -40),
      psy_rouss_hobb: defAxis(-30, 45, 0.9, 10),
      psy_pres_fut: defAxis(-35, 35, 0.6, 0),
      psy_agency_struct: defAxis(35, 90, 1.7, 65)
    }
  },

  // 3. SZOCIÁLLIBERÁLIS / PROGRESSZÍV
  {
    id: 'soc_lib',
    group: 'political',
    icon: '🌈',
    color: '#06b6d4',
    name: { hu: 'Szociálliberális / Progresszív', en: 'Social Liberal / Progressive' },
    tagline: {
      hu: 'Emancipáció, kulturális sokszínűség, esélyegyenlőség és szabályozott piacgazdaság.',
      en: 'Civil emancipation, diversity, equal opportunity, and regulated market capitalism.'
    },
    desc: {
      hu: 'A valódi egyéni szabadsághoz nem elég a formális jogegyenlőség: oktatási, szociális és kulturális esélyteremtésre, valamint a kisebbségek és a környezet védelmére is szükség van.',
      en: 'True individual liberty requires social justice, minority rights, environmental protection, and active correction of systemic inequalities.'
    },
    axes: {
      soc_indiv_comm: defAxis(-65, -10, 1.3, -40),
      soc_egal_hier: defAxis(-80, -30, 1.6, -55),
      soc_univ_nat: defAxis(-90, -40, 1.7, -65),
      soc_multi_assim: defAxis(-90, -45, 1.8, -70),
      soc_coop_comp: defAxis(-60, 0, 1.1, -30),

      eco_prop: defAxis(-20, 45, 1.0, 15),
      eco_coord: defAxis(-45, 15, 1.1, -15),
      eco_redist: defAxis(-70, -20, 1.4, -45),
      eco_ecology: defAxis(-80, -25, 1.5, -55),
      eco_trade: defAxis(0, 65, 1.1, 35),

      pow_lib_auth: defAxis(-70, -15, 1.4, -45),
      pow_dem_tech: defAxis(-55, 20, 1.0, -20),
      pow_decent_cent: defAxis(-50, 20, 0.7, -15),
      pow_rehab_punish: defAxis(-90, -40, 1.6, -65),
      pow_concil_bellig: defAxis(-80, -20, 1.3, -50),

      cul_innov_trad: defAxis(-95, -45, 1.9, -75),
      cul_human_spirit: defAxis(-85, -30, 1.4, -60),
      cul_auton_norm: defAxis(-95, -50, 1.9, -75),
      cul_trans_bio: defAxis(-65, 10, 0.9, -30),
      cul_out_in: defAxis(-60, 10, 0.8, -25),

      eth_util_deon: defAxis(-55, 15, 0.8, -20),
      eth_rel_abs: defAxis(-80, -20, 1.3, -50),
      eth_emp_int: defAxis(-70, -10, 1.1, -40),
      eth_qual_quant: defAxis(-75, -15, 1.3, -45),
      eth_speech: defAxis(0, 65, 1.2, 35),

      psy_hed_asc: defAxis(-65, 5, 0.9, -30),
      psy_bold_sec: defAxis(-50, 20, 0.7, -15),
      psy_rouss_hobb: defAxis(-75, -15, 1.2, -45),
      psy_pres_fut: defAxis(-40, 35, 0.7, 0),
      psy_agency_struct: defAxis(-85, -30, 1.6, -60)
    }
  },

  // 4. DEMOKRATIKUS SZOCIALISTA / ÖKO-SZOCIALISTA
  {
    id: 'dem_soc',
    group: 'political',
    icon: '🌻',
    color: '#dc2626',
    name: { hu: 'Demokratikus / Öko-Szocialista', en: 'Democratic / Eco-Socialist' },
    tagline: {
      hu: 'Gazdasági demokrácia, szövetkezeti/közösségi tulajdon, ökológiai fordulat és szabadság.',
      en: 'Workplace democracy, common ownership, ecological transition, and grass-roots freedom.'
    },
    desc: {
      hu: 'A demokráciát a gazdaságra is ki kell terjeszteni: a nagyvállalatok közösségi és dolgozói tulajdonba vétele, az ökológiai határok tisztelete és a részvételi önkormányzatiság.',
      en: 'Seeks to transcend capitalism through democratic worker cooperatives, common ownership, ecological sustainability, and radical participatory democracy.'
    },
    axes: {
      soc_indiv_comm: defAxis(10, 70, 1.4, 40),
      soc_egal_hier: defAxis(-100, -60, 2.0, -85),
      soc_univ_nat: defAxis(-85, -30, 1.3, -60),
      soc_multi_assim: defAxis(-85, -30, 1.3, -60),
      soc_coop_comp: defAxis(-95, -55, 1.9, -80),

      eco_prop: defAxis(-95, -50, 2.0, -75),
      eco_coord: defAxis(-85, -35, 1.7, -60),
      eco_redist: defAxis(-100, -65, 2.0, -85),
      eco_ecology: defAxis(-95, -45, 1.7, -75),
      eco_trade: defAxis(-65, -5, 1.1, -35),

      pow_lib_auth: defAxis(-75, -15, 1.3, -45),
      pow_dem_tech: defAxis(-95, -45, 1.8, -75),
      pow_decent_cent: defAxis(-75, -15, 1.3, -45),
      pow_rehab_punish: defAxis(-95, -45, 1.5, -70),
      pow_concil_bellig: defAxis(-90, -35, 1.5, -65),

      cul_innov_trad: defAxis(-85, -30, 1.4, -60),
      cul_human_spirit: defAxis(-80, -15, 1.0, -50),
      cul_auton_norm: defAxis(-85, -30, 1.4, -60),
      cul_trans_bio: defAxis(-45, 35, 0.6, -5),
      cul_out_in: defAxis(-45, 30, 0.6, -5),

      eth_util_deon: defAxis(-45, 25, 0.7, -10),
      eth_rel_abs: defAxis(-65, 10, 0.8, -30),
      eth_emp_int: defAxis(-60, 10, 0.8, -25),
      eth_qual_quant: defAxis(-95, -45, 1.6, -70),
      eth_speech: defAxis(-45, 35, 0.8, -5),

      psy_hed_asc: defAxis(-50, 25, 0.6, -10),
      psy_bold_sec: defAxis(-55, 15, 0.7, -20),
      psy_rouss_hobb: defAxis(-90, -35, 1.5, -65),
      psy_pres_fut: defAxis(-30, 50, 0.8, 15),
      psy_agency_struct: defAxis(-95, -50, 1.8, -75)
    }
  },

  // 5. ORTODOX KOMMUNISTA / MARXISTA-LENINISTA
  {
    id: 'marx_len',
    group: 'economic',
    icon: '☭',
    color: '#991b1b',
    name: { hu: 'Kommunista / Államszocialista', en: 'Communist / State Socialist' },
    tagline: {
      hu: 'Tervgazdaság, teljes köztulajdon, kollektivizmus és centralizált élcsapat-állam.',
      en: 'Centralized planned economy, abolition of private capital, collectivism, and vanguard state.'
    },
    desc: {
      hu: 'A magántulajdon és az osztálytársadalom felszámolása erős központi államhatalommal, tervgazdasággal, kollektivista etikával és ipari-tudományos modernizációval.',
      en: 'Abolishes private ownership of capital in favor of state planning, collective solidarity, industrial modernization, and centralized vanguard governance.'
    },
    axes: {
      soc_indiv_comm: defAxis(60, 100, 2.0, 85),
      soc_egal_hier: defAxis(-100, -50, 1.8, -80),
      soc_univ_nat: defAxis(-85, -15, 1.2, -55),
      soc_multi_assim: defAxis(-40, 45, 0.8, 5),
      soc_coop_comp: defAxis(-95, -45, 1.7, -75),

      eco_prop: defAxis(-100, -75, 2.0, -95),
      eco_coord: defAxis(-100, -70, 2.0, -90),
      eco_redist: defAxis(-100, -70, 1.9, -90),
      eco_ecology: defAxis(10, 80, 1.2, 45),
      eco_trade: defAxis(-90, -35, 1.5, -65),

      pow_lib_auth: defAxis(50, 100, 1.9, 80),
      pow_dem_tech: defAxis(10, 80, 1.2, 45),
      pow_decent_cent: defAxis(55, 100, 1.9, 85),
      pow_rehab_punish: defAxis(5, 75, 1.1, 40),
      pow_concil_bellig: defAxis(10, 80, 1.2, 45),

      cul_innov_trad: defAxis(-80, -15, 1.2, -50),
      cul_human_spirit: defAxis(-100, -60, 1.7, -85),
      cul_auton_norm: defAxis(15, 80, 1.2, 50),
      cul_trans_bio: defAxis(-80, -15, 1.1, -50),
      cul_out_in: defAxis(-80, -15, 1.1, -50),

      eth_util_deon: defAxis(-90, -35, 1.6, -65),
      eth_rel_abs: defAxis(-60, 25, 0.8, -20),
      eth_emp_int: defAxis(-90, -35, 1.5, -65),
      eth_qual_quant: defAxis(-90, -30, 1.4, -60),
      eth_speech: defAxis(45, 100, 1.6, 75),

      psy_hed_asc: defAxis(25, 85, 1.3, 55),
      psy_bold_sec: defAxis(-65, 15, 0.9, -25),
      psy_rouss_hobb: defAxis(-60, 20, 0.8, -20),
      psy_pres_fut: defAxis(35, 95, 1.6, 70),
      psy_agency_struct: defAxis(-100, -55, 1.8, -80)
    }
  },

  // 6. LIBERTÁRIUS / ANARCHO-KAPITALISTA
  {
    id: 'libertarian',
    group: 'economic',
    icon: '🐍',
    color: '#f59e0b',
    name: { hu: 'Libertárius / Piaci Anarchista', en: 'Libertarian / Free-Market Radical' },
    tagline: {
      hu: 'Maximális egyéni szabadság, sérthetetlen magántulajdon, dereguláció és minimális állam.',
      en: 'Maximum individual liberty, absolute property rights, laissez-faire capitalism, and minimal state.'
    },
    desc: {
      hu: 'Az állam és az adóztatás kényszer: minden emberi interakciónak önkéntes szerződéseken, szabadpiacon, öngondoskodáson és a nem-agresszió elvén kell alapulnia.',
      en: 'Views taxation and state regulation as coercion; advocates voluntary exchange, absolute property rights, radical deregulation, and self-ownership.'
    },
    axes: {
      soc_indiv_comm: defAxis(-100, -70, 2.0, -90),
      soc_egal_hier: defAxis(25, 90, 1.4, 60),
      soc_univ_nat: defAxis(-70, 15, 0.9, -30),
      soc_multi_assim: defAxis(-65, 20, 0.7, -20),
      soc_coop_comp: defAxis(45, 100, 1.7, 75),

      eco_prop: defAxis(75, 100, 2.0, 95),
      eco_coord: defAxis(75, 100, 2.0, 95),
      eco_redist: defAxis(70, 100, 2.0, 90),
      eco_ecology: defAxis(25, 90, 1.2, 60),
      eco_trade: defAxis(65, 100, 1.8, 90),

      pow_lib_auth: defAxis(-100, -70, 2.0, -90),
      pow_dem_tech: defAxis(-60, 25, 0.8, -20),
      pow_decent_cent: defAxis(-100, -60, 1.9, -85),
      pow_rehab_punish: defAxis(-40, 40, 0.6, 0),
      pow_concil_bellig: defAxis(-85, -20, 1.3, -55),

      cul_innov_trad: defAxis(-70, 20, 0.8, -25),
      cul_human_spirit: defAxis(-70, 20, 0.7, -25),
      cul_auton_norm: defAxis(-100, -55, 1.8, -80),
      cul_trans_bio: defAxis(-85, -15, 1.2, -50),
      cul_out_in: defAxis(-80, -10, 1.1, -45),

      eth_util_deon: defAxis(-20, 80, 1.1, 35),
      eth_rel_abs: defAxis(-35, 55, 0.8, 10),
      eth_emp_int: defAxis(-75, 0, 1.0, -40),
      eth_qual_quant: defAxis(30, 90, 1.3, 60),
      eth_speech: defAxis(-100, -70, 2.0, -90),

      psy_hed_asc: defAxis(-70, 20, 0.7, -25),
      psy_bold_sec: defAxis(-95, -45, 1.7, -75),
      psy_rouss_hobb: defAxis(-40, 45, 0.7, 5),
      psy_pres_fut: defAxis(-45, 35, 0.6, -5),
      psy_agency_struct: defAxis(65, 100, 1.9, 90)
    }
  },

  // 7. BALOLDALI LIBERTÁRIUS / ANARCHO-SZINDIKALISTA
  {
    id: 'left_lib',
    group: 'political',
    icon: '🏴',
    color: '#ec4899',
    name: { hu: 'Baloldali Libertárius / Anarchista', en: 'Left-Libertarian / Anarcho-Syndicalist' },
    tagline: {
      hu: 'Hierarchiamentes önkormányzás, kölcsönös segítségnyújtás, állam- és tőkeellenesség.',
      en: 'Horizontal self-governance, mutual aid, anti-statism, and federated commons.'
    },
    desc: {
      hu: 'Mind az állami elnyomást, mind a kapitalista hierarchiát elutasítja: szabad önkormányzó közösségek, szövetkezetek, radikális egyenlőség és egyéni autonómia szövetsége.',
      en: 'Rejects both state authority and capitalist hierarchy in favor of horizontal federations, mutual aid, direct democracy, and personal liberation.'
    },
    axes: {
      soc_indiv_comm: defAxis(-55, 35, 1.0, -10),
      soc_egal_hier: defAxis(-100, -70, 2.0, -90),
      soc_univ_nat: defAxis(-100, -55, 1.8, -80),
      soc_multi_assim: defAxis(-100, -55, 1.7, -80),
      soc_coop_comp: defAxis(-100, -65, 2.0, -90),

      eco_prop: defAxis(-100, -55, 1.8, -80),
      eco_coord: defAxis(-70, 10, 1.0, -30),
      eco_redist: defAxis(-95, -40, 1.5, -70),
      eco_ecology: defAxis(-95, -45, 1.6, -75),
      eco_trade: defAxis(-65, 15, 0.8, -25),

      pow_lib_auth: defAxis(-100, -75, 2.0, -95),
      pow_dem_tech: defAxis(-100, -70, 2.0, -90),
      pow_decent_cent: defAxis(-100, -70, 2.0, -90),
      pow_rehab_punish: defAxis(-100, -65, 1.9, -85),
      pow_concil_bellig: defAxis(-95, -45, 1.6, -75),

      cul_innov_trad: defAxis(-95, -45, 1.6, -75),
      cul_human_spirit: defAxis(-90, -25, 1.2, -60),
      cul_auton_norm: defAxis(-100, -65, 1.9, -85),
      cul_trans_bio: defAxis(-65, 25, 0.6, -20),
      cul_out_in: defAxis(-55, 25, 0.6, -15),

      eth_util_deon: defAxis(-55, 25, 0.7, -15),
      eth_rel_abs: defAxis(-90, -30, 1.3, -65),
      eth_emp_int: defAxis(-65, 15, 0.7, -25),
      eth_qual_quant: defAxis(-95, -45, 1.5, -75),
      eth_speech: defAxis(-90, -25, 1.4, -60),

      psy_hed_asc: defAxis(-80, 0, 1.1, -45),
      psy_bold_sec: defAxis(-85, -25, 1.3, -60),
      psy_rouss_hobb: defAxis(-100, -60, 1.9, -85),
      psy_pres_fut: defAxis(-65, 15, 0.9, -25),
      psy_agency_struct: defAxis(-90, -25, 1.4, -60)
    }
  },

  // 8. NEMZETI KONZERVATÍV / TRADICIONALISTA
  {
    id: 'nat_cons',
    group: 'political',
    icon: '🦅',
    color: '#1d4ed8',
    name: { hu: 'Nemzeti Konzervatív / Tradicionalista', en: 'National Conservative / Traditionalist' },
    tagline: {
      hu: 'Nemzeti szuverenitás, hagyományok, család, vallási gyökerek és erős rend.',
      en: 'National sovereignty, cultural heritage, traditional family, faith, and strong order.'
    },
    desc: {
      hu: 'A nemzetállam, a történelmi-vallási hagyományok, a hagyományos családmodell és a közrend védelme a globalizmussal és a gyökértelen progresszióval szemben.',
      en: 'Prioritizes national sovereignty, cultural continuity, traditional family structures, spiritual roots, and strict law-and-order over globalism.'
    },
    axes: {
      soc_indiv_comm: defAxis(15, 75, 1.4, 45),
      soc_egal_hier: defAxis(30, 85, 1.6, 60),
      soc_univ_nat: defAxis(55, 100, 2.0, 85),
      soc_multi_assim: defAxis(55, 100, 2.0, 85),
      soc_coop_comp: defAxis(0, 65, 1.0, 35),

      eco_prop: defAxis(15, 75, 1.2, 45),
      eco_coord: defAxis(-25, 45, 0.9, 10),
      eco_redist: defAxis(-20, 50, 0.9, 15),
      eco_ecology: defAxis(0, 65, 0.9, 35),
      eco_trade: defAxis(-80, -20, 1.6, -55),

      pow_lib_auth: defAxis(30, 85, 1.6, 60),
      pow_dem_tech: defAxis(-10, 60, 0.9, 25),
      pow_decent_cent: defAxis(25, 85, 1.4, 55),
      pow_rehab_punish: defAxis(45, 95, 1.8, 75),
      pow_concil_bellig: defAxis(25, 85, 1.5, 55),

      cul_innov_trad: defAxis(55, 100, 2.0, 85),
      cul_human_spirit: defAxis(40, 95, 1.8, 70),
      cul_auton_norm: defAxis(55, 100, 2.0, 85),
      cul_trans_bio: defAxis(40, 95, 1.6, 70),
      cul_out_in: defAxis(15, 75, 1.2, 45),

      eth_util_deon: defAxis(20, 80, 1.3, 50),
      eth_rel_abs: defAxis(45, 100, 1.8, 75),
      eth_emp_int: defAxis(10, 75, 1.1, 45),
      eth_qual_quant: defAxis(20, 80, 1.2, 50),
      eth_speech: defAxis(10, 75, 1.1, 45),

      psy_hed_asc: defAxis(20, 80, 1.3, 50),
      psy_bold_sec: defAxis(25, 85, 1.4, 55),
      psy_rouss_hobb: defAxis(35, 90, 1.6, 65),
      psy_pres_fut: defAxis(25, 85, 1.4, 55),
      psy_agency_struct: defAxis(20, 80, 1.3, 50)
    }
  },

  // 9. KERESZTÉNYDEMOKRATA / KOMMUNITÁRIUS
  {
    id: 'christ_dem',
    group: 'political',
    icon: '🤝',
    color: '#0284c7',
    name: { hu: 'Kereszténydemokrata / Kommunitárius', en: 'Christian Democrat / Communitarian' },
    tagline: {
      hu: 'Szociális piacgazdaság, szubszidiaritás, helyi közösségek és erkölcsi felelősség.',
      en: 'Social market economy, subsidiarity, strong local communities, and moral stewardship.'
    },
    desc: {
      hu: 'Az egyszemélyes individualizmus és az állami kollektivizmus között a családokra, helyi közösségekre, szubszidiaritásra és a szociális piacgazdaságra épít.',
      en: 'Balances market economics with social solidarity, family values, local decentralism (subsidiarity), and stewardship of creation.'
    },
    axes: {
      soc_indiv_comm: defAxis(20, 75, 1.7, 50),
      soc_egal_hier: defAxis(-20, 45, 1.0, 15),
      soc_univ_nat: defAxis(-15, 55, 1.0, 20),
      soc_multi_assim: defAxis(5, 65, 1.1, 35),
      soc_coop_comp: defAxis(-65, -5, 1.4, -35),

      eco_prop: defAxis(5, 60, 1.2, 35),
      eco_coord: defAxis(-35, 25, 1.2, -5),
      eco_redist: defAxis(-60, -5, 1.4, -35),
      eco_ecology: defAxis(-50, 15, 1.1, -20),
      eco_trade: defAxis(-30, 35, 0.8, 5),

      pow_lib_auth: defAxis(-20, 40, 1.0, 10),
      pow_dem_tech: defAxis(-40, 25, 0.9, -10),
      pow_decent_cent: defAxis(-80, -20, 1.7, -50),
      pow_rehab_punish: defAxis(-35, 35, 1.0, 0),
      pow_concil_bellig: defAxis(-65, 0, 1.3, -35),

      cul_innov_trad: defAxis(20, 75, 1.5, 50),
      cul_human_spirit: defAxis(30, 85, 1.7, 60),
      cul_auton_norm: defAxis(25, 80, 1.5, 55),
      cul_trans_bio: defAxis(30, 85, 1.5, 60),
      cul_out_in: defAxis(0, 60, 1.0, 30),

      eth_util_deon: defAxis(30, 85, 1.6, 60),
      eth_rel_abs: defAxis(35, 85, 1.6, 60),
      eth_emp_int: defAxis(0, 60, 1.0, 30),
      eth_qual_quant: defAxis(-25, 40, 0.8, 10),
      eth_speech: defAxis(-10, 55, 1.0, 25),

      psy_hed_asc: defAxis(15, 70, 1.3, 45),
      psy_bold_sec: defAxis(15, 75, 1.3, 45),
      psy_rouss_hobb: defAxis(-25, 40, 1.0, 10),
      psy_pres_fut: defAxis(20, 80, 1.4, 50),
      psy_agency_struct: defAxis(-15, 50, 1.0, 20)
    }
  },

  // 10. TECHNOKRATA / RACIONALISTA MODERNIZÁTOR
  {
    id: 'technocrat',
    group: 'economic',
    icon: '⚙️',
    color: '#6366f1',
    name: { hu: 'Technokrata / Racionalista', en: 'Technocrat / Rationalist' },
    tagline: {
      hu: 'Adatalapú kormányzás, tudományos hatékonyság, szakértői tervezés és hosszú távú optimalizálás.',
      en: 'Evidence-based governance, scientific efficiency, expert leadership, and systemic optimization.'
    },
    desc: {
      hu: 'Az ideológiai dogmák és a populista érzelmek helyett a mérnöki pontosságú adatelemzésre, szakértői intézményekre, K+F-re és pragmatikus problémamegoldásra épít.',
      en: 'Replaces ideological dogma and populist politics with empirical data, engineering mindset, expert commissions, and long-term optimization.'
    },
    axes: {
      soc_indiv_comm: defAxis(-30, 40, 0.8, 5),
      soc_egal_hier: defAxis(15, 75, 1.4, 45),
      soc_univ_nat: defAxis(-75, -15, 1.3, -45),
      soc_multi_assim: defAxis(-45, 25, 0.7, -10),
      soc_coop_comp: defAxis(-15, 55, 1.0, 20),

      eco_prop: defAxis(-20, 55, 1.0, 20),
      eco_coord: defAxis(-65, 5, 1.4, -30),
      eco_redist: defAxis(-45, 25, 0.9, -10),
      eco_ecology: defAxis(-40, 40, 1.0, 0),
      eco_trade: defAxis(15, 80, 1.3, 50),

      pow_lib_auth: defAxis(5, 65, 1.3, 35),
      pow_dem_tech: defAxis(55, 100, 2.0, 85),
      pow_decent_cent: defAxis(25, 85, 1.5, 55),
      pow_rehab_punish: defAxis(-65, 0, 1.2, -35),
      pow_concil_bellig: defAxis(-50, 20, 0.9, -15),

      cul_innov_trad: defAxis(-90, -35, 1.7, -65),
      cul_human_spirit: defAxis(-95, -45, 1.7, -75),
      cul_auton_norm: defAxis(-55, 15, 0.8, -20),
      cul_trans_bio: defAxis(-90, -35, 1.8, -65),
      cul_out_in: defAxis(-85, -25, 1.5, -55),

      eth_util_deon: defAxis(-95, -45, 1.9, -75),
      eth_rel_abs: defAxis(-65, 5, 1.0, -30),
      eth_emp_int: defAxis(-100, -65, 2.0, -90),
      eth_qual_quant: defAxis(30, 90, 1.6, 65),
      eth_speech: defAxis(-35, 45, 0.8, 5),

      psy_hed_asc: defAxis(-20, 50, 0.8, 15),
      psy_bold_sec: defAxis(-45, 30, 0.8, -10),
      psy_rouss_hobb: defAxis(-15, 55, 0.9, 20),
      psy_pres_fut: defAxis(40, 95, 1.7, 70),
      psy_agency_struct: defAxis(-55, 20, 1.0, -20)
    }
  },

  // 11. MÉLYÖKOLÓGIAI / NÖVEKEDÉSKRITIKUS ZÖLD
  {
    id: 'deep_green',
    group: 'philosophical',
    icon: '🌿',
    color: '#16a34a',
    name: { hu: 'Mélyökológiai / Növekedéskritikus', en: 'Deep Ecology / Degrowth Green' },
    tagline: {
      hu: 'Bioszféra-központúság, lokalizáció, önkéntes egyszerűség és a növekedési kényszer elutasítása.',
      en: 'Biosphere stewardship, bioregional localism, voluntary simplicity, and post-growth economy.'
    },
    desc: {
      hu: 'Az ember nem a természet ura, hanem része: a végtelen ipari növekedés helyett helyi önellátásra, alacsony ökológiai lábnyomra, decentralizációra és természetközeli életre van szükség.',
      en: 'Views humanity as part of nature rather than its master; advocates bioregionalism, degrowth, local self-sufficiency, and ecological harmony.'
    },
    axes: {
      soc_indiv_comm: defAxis(10, 75, 1.4, 45),
      soc_egal_hier: defAxis(-85, -30, 1.5, -60),
      soc_univ_nat: defAxis(-65, 15, 0.9, -25),
      soc_multi_assim: defAxis(-65, 10, 0.8, -30),
      soc_coop_comp: defAxis(-95, -45, 1.7, -75),

      eco_prop: defAxis(-80, -20, 1.4, -50),
      eco_coord: defAxis(-75, -15, 1.3, -45),
      eco_redist: defAxis(-80, -20, 1.3, -50),
      eco_ecology: defAxis(-100, -75, 2.0, -95),
      eco_trade: defAxis(-95, -45, 1.8, -75),

      pow_lib_auth: defAxis(-70, 0, 1.1, -35),
      pow_dem_tech: defAxis(-90, -35, 1.6, -65),
      pow_decent_cent: defAxis(-100, -55, 1.9, -80),
      pow_rehab_punish: defAxis(-80, -20, 1.2, -50),
      pow_concil_bellig: defAxis(-95, -45, 1.7, -75),

      cul_innov_trad: defAxis(-45, 35, 0.7, -5),
      cul_human_spirit: defAxis(-20, 65, 1.0, 25),
      cul_auton_norm: defAxis(-65, 10, 0.8, -30),
      cul_trans_bio: defAxis(50, 100, 1.9, 80),
      cul_out_in: defAxis(35, 95, 1.6, 65),

      eth_util_deon: defAxis(0, 70, 1.1, 35),
      eth_rel_abs: defAxis(-35, 45, 0.7, 5),
      eth_emp_int: defAxis(-30, 55, 0.9, 15),
      eth_qual_quant: defAxis(-60, 15, 0.8, -20),
      eth_speech: defAxis(-45, 30, 0.7, -10),

      psy_hed_asc: defAxis(35, 95, 1.7, 65),
      psy_bold_sec: defAxis(10, 75, 1.2, 45),
      psy_rouss_hobb: defAxis(-75, -10, 1.2, -45),
      psy_pres_fut: defAxis(50, 100, 1.9, 80),
      psy_agency_struct: defAxis(-70, 0, 1.1, -35)
    }
  },

  // 12. TEKINTÉLYELVŰ ETATISTA / RENDPÁRTI
  {
    id: 'auth_statist',
    group: 'economic',
    icon: '🛡️',
    color: '#475569',
    name: { hu: 'Tekintélyelvű Etatista / Rendpárti', en: 'Authoritarian Statist / Order-First' },
    tagline: {
      hu: 'Erős központi hatalom, fegyelem, stratégiai államkapitalizmus és geopolitikai erő.',
      en: 'Centralized state authority, discipline, strategic state capitalism, and hard-power sovereignty.'
    },
    desc: {
      hu: 'A biztonság, a rend és a nemzeti nagyság minden egyéni szeszély felett áll: erős vezetői hatalom, központosított közigazgatás, kemény igazságszolgáltatás és stratégiai gazdaságirányítás.',
      en: 'Prioritizes state sovereignty, internal security, disciplined hierarchy, and state-guided strategic industry over liberal individualism.'
    },
    axes: {
      soc_indiv_comm: defAxis(45, 95, 1.8, 75),
      soc_egal_hier: defAxis(50, 100, 1.9, 80),
      soc_univ_nat: defAxis(50, 100, 1.8, 80),
      soc_multi_assim: defAxis(50, 100, 1.8, 80),
      soc_coop_comp: defAxis(20, 85, 1.3, 55),

      eco_prop: defAxis(-40, 40, 1.0, 0),
      eco_coord: defAxis(-80, -20, 1.6, -55),
      eco_redist: defAxis(-45, 25, 0.9, -10),
      eco_ecology: defAxis(25, 90, 1.4, 60),
      eco_trade: defAxis(-95, -40, 1.8, -70),

      pow_lib_auth: defAxis(65, 100, 2.0, 90),
      pow_dem_tech: defAxis(45, 95, 1.7, 75),
      pow_decent_cent: defAxis(65, 100, 2.0, 90),
      pow_rehab_punish: defAxis(60, 100, 1.9, 85),
      pow_concil_bellig: defAxis(50, 100, 1.8, 80),

      cul_innov_trad: defAxis(10, 80, 1.2, 45),
      cul_human_spirit: defAxis(-10, 70, 0.9, 30),
      cul_auton_norm: defAxis(50, 100, 1.8, 80),
      cul_trans_bio: defAxis(-30, 50, 0.7, 10),
      cul_out_in: defAxis(-40, 45, 0.8, 5),

      eth_util_deon: defAxis(-70, 10, 1.2, -35),
      eth_rel_abs: defAxis(25, 85, 1.3, 55),
      eth_emp_int: defAxis(-35, 40, 0.7, 5),
      eth_qual_quant: defAxis(10, 75, 1.1, 45),
      eth_speech: defAxis(60, 100, 1.9, 85),

      psy_hed_asc: defAxis(35, 90, 1.5, 65),
      psy_bold_sec: defAxis(30, 90, 1.5, 65),
      psy_rouss_hobb: defAxis(55, 100, 1.9, 85),
      psy_pres_fut: defAxis(30, 90, 1.4, 60),
      psy_agency_struct: defAxis(-20, 55, 0.8, 20)
    }
  },

  // 13. TRANSZHUMANISTA / PROMÉTHEUSZI JÖVŐÉPÍTŐ
  {
    id: 'transhumanist',
    group: 'philosophical',
    icon: '🚀',
    color: '#8b5cf6',
    name: { hu: 'Transzhumanista / Prométheuszi', en: 'Transhumanist / Promethean Futurist' },
    tagline: {
      hu: 'Technológiai gyorsulás, biológiai korlátok legyőzése, űrkorszak és radikális innováció.',
      en: 'Technological acceleration, overcoming biological limits, cosmic expansion, and radical innovation.'
    },
    desc: {
      hu: 'Az emberi evolúció következő lépcsőfoka a tudomány és a technológia: az öregedés és betegségek felszámolása, MI-szimbiózis, energiabőség és a világűr benépesítése.',
      en: 'Champions scientific mastery over nature, human biological augmentation, AI symbiosis, abundant energy, and multi-planetary expansion.'
    },
    axes: {
      soc_indiv_comm: defAxis(-70, 10, 1.1, -35),
      soc_egal_hier: defAxis(-45, 45, 0.7, 0),
      soc_univ_nat: defAxis(-100, -50, 1.8, -80),
      soc_multi_assim: defAxis(-80, -10, 1.1, -45),
      soc_coop_comp: defAxis(-30, 50, 0.8, 10),

      eco_prop: defAxis(-35, 65, 0.7, 15),
      eco_coord: defAxis(-40, 50, 0.7, 5),
      eco_redist: defAxis(-65, 25, 0.9, -20),
      eco_ecology: defAxis(10, 85, 1.3, 50),
      eco_trade: defAxis(25, 95, 1.4, 65),

      pow_lib_auth: defAxis(-65, 20, 0.9, -25),
      pow_dem_tech: defAxis(15, 85, 1.5, 55),
      pow_decent_cent: defAxis(-45, 45, 0.6, 0),
      pow_rehab_punish: defAxis(-80, -15, 1.2, -50),
      pow_concil_bellig: defAxis(-65, 10, 0.9, -30),

      cul_innov_trad: defAxis(-100, -65, 2.0, -90),
      cul_human_spirit: defAxis(-95, -35, 1.6, -70),
      cul_auton_norm: defAxis(-95, -45, 1.7, -75),
      cul_trans_bio: defAxis(-100, -75, 2.0, -95),
      cul_out_in: defAxis(-100, -70, 2.0, -90),

      eth_util_deon: defAxis(-90, -30, 1.6, -65),
      eth_rel_abs: defAxis(-80, -15, 1.2, -50),
      eth_emp_int: defAxis(-100, -60, 1.9, -85),
      eth_qual_quant: defAxis(10, 80, 1.2, 45),
      eth_speech: defAxis(-85, -20, 1.3, -55),

      psy_hed_asc: defAxis(-65, 20, 0.8, -25),
      psy_bold_sec: defAxis(-100, -55, 1.9, -80),
      psy_rouss_hobb: defAxis(-60, 20, 0.8, -20),
      psy_pres_fut: defAxis(45, 100, 1.8, 75),
      psy_agency_struct: defAxis(-30, 60, 0.8, 15)
    }
  },

  // 14. SZTOIKUS / KÖTELESSÉGETIKUS HUMANISTA
  {
    id: 'stoic_civic',
    group: 'philosophical',
    icon: '🏛️',
    color: '#d97706',
    name: { hu: 'Sztoikus / Polgári Humanista', en: 'Stoic / Civic Humanist' },
    tagline: {
      hu: 'Önuralom, erkölcsi tartás, közjó szolgálata, mértékletesség és józan értelem.',
      en: 'Self-mastery, moral duty, service to the common good, temperance, and rational wisdom.'
    },
    desc: {
      hu: 'Az antik sztoicizmus és republikánus erényetika szellemében: a belső szabadság a szenvedélyek feletti uralomból, az igazságosságból, a kötelességtudatból és a józan mértékből fakad.',
      en: 'Inspired by classical Stoicism and civic virtue: true freedom lies in mastering one’s impulses, acting with integrity, and serving the community with reason.'
    },
    axes: {
      soc_indiv_comm: defAxis(-15, 55, 1.2, 20),
      soc_egal_hier: defAxis(-35, 40, 0.9, 5),
      soc_univ_nat: defAxis(-70, 10, 1.2, -30),
      soc_multi_assim: defAxis(-30, 40, 0.8, 5),
      soc_coop_comp: defAxis(-60, 10, 1.2, -25),

      eco_prop: defAxis(-25, 45, 0.7, 10),
      eco_coord: defAxis(-35, 35, 0.7, 0),
      eco_redist: defAxis(-45, 25, 0.8, -10),
      eco_ecology: defAxis(-60, 10, 1.1, -25),
      eco_trade: defAxis(-30, 40, 0.6, 5),

      pow_lib_auth: defAxis(-35, 35, 0.9, 0),
      pow_dem_tech: defAxis(-20, 55, 1.0, 20),
      pow_decent_cent: defAxis(-45, 25, 0.8, -10),
      pow_rehab_punish: defAxis(-30, 45, 1.0, 10),
      pow_concil_bellig: defAxis(-60, 15, 1.1, -25),

      cul_innov_trad: defAxis(-15, 55, 1.1, 20),
      cul_human_spirit: defAxis(-35, 45, 0.9, 5),
      cul_auton_norm: defAxis(10, 75, 1.4, 45),
      cul_trans_bio: defAxis(15, 80, 1.3, 50),
      cul_out_in: defAxis(20, 85, 1.5, 55),

      eth_util_deon: defAxis(45, 100, 2.0, 75),
      eth_rel_abs: defAxis(35, 95, 1.8, 65),
      eth_emp_int: defAxis(-55, 25, 1.1, -15),
      eth_qual_quant: defAxis(35, 95, 1.7, 65),
      eth_speech: defAxis(-55, 20, 1.0, -20),

      psy_hed_asc: defAxis(55, 100, 2.0, 85),
      psy_bold_sec: defAxis(0, 65, 1.1, 35),
      psy_rouss_hobb: defAxis(-15, 55, 1.0, 20),
      psy_pres_fut: defAxis(30, 90, 1.6, 65),
      psy_agency_struct: defAxis(45, 100, 1.9, 75)
    }
  },

  // 15. HEDONISTA / KOZMOPOLITA INDIVIDUALISTA
  {
    id: 'hedonist_indiv',
    group: 'philosophical',
    icon: '🥂',
    color: '#f43f5e',
    name: { hu: 'Élményelvű / Kozmopolita Individualista', en: 'Experiential / Cosmopolitan Individualist' },
    tagline: {
      hu: 'Carpe Diem, személyes szabadság, önkifejezés, nyitott határok és életöröm.',
      en: 'Carpe Diem, personal autonomy, self-expression, open borders, and aesthetic joy.'
    },
    desc: {
      hu: 'Az egyéni élet egyszeri és megismételhetetlen: a kollektív áldozathozatal és szigorú aszkézis helyett a szabad önkifejezést, utazást, kreativitást és az itt-és-most örömeit választja.',
      en: 'Rejects rigid collective duties and asceticism in favor of personal freedom, aesthetic experience, global mobility, and living fully in the present.'
    },
    axes: {
      soc_indiv_comm: defAxis(-100, -55, 2.0, -85),
      soc_egal_hier: defAxis(-55, 20, 0.8, -20),
      soc_univ_nat: defAxis(-100, -50, 1.8, -80),
      soc_multi_assim: defAxis(-95, -40, 1.7, -70),
      soc_coop_comp: defAxis(-45, 35, 0.7, -5),

      eco_prop: defAxis(-10, 65, 0.9, 30),
      eco_coord: defAxis(-15, 60, 0.8, 25),
      eco_redist: defAxis(-45, 35, 0.7, -5),
      eco_ecology: defAxis(-50, 30, 0.7, -10),
      eco_trade: defAxis(30, 95, 1.4, 65),

      pow_lib_auth: defAxis(-95, -45, 1.8, -75),
      pow_dem_tech: defAxis(-65, 15, 0.8, -25),
      pow_decent_cent: defAxis(-75, -10, 1.1, -45),
      pow_rehab_punish: defAxis(-85, -25, 1.3, -55),
      pow_concil_bellig: defAxis(-95, -40, 1.6, -70),

      cul_innov_trad: defAxis(-95, -40, 1.7, -70),
      cul_human_spirit: defAxis(-80, 0, 1.0, -40),
      cul_auton_norm: defAxis(-100, -65, 2.0, -90),
      cul_trans_bio: defAxis(-65, 20, 0.8, -25),
      cul_out_in: defAxis(-70, 10, 0.9, -30),

      eth_util_deon: defAxis(-80, -15, 1.3, -50),
      eth_rel_abs: defAxis(-95, -45, 1.7, -75),
      eth_emp_int: defAxis(-45, 40, 0.6, -5),
      eth_qual_quant: defAxis(-55, 25, 0.7, -15),
      eth_speech: defAxis(-95, -35, 1.6, -70),

      psy_hed_asc: defAxis(-100, -65, 2.0, -90),
      psy_bold_sec: defAxis(-90, -30, 1.6, -65),
      psy_rouss_hobb: defAxis(-70, 5, 1.0, -35),
      psy_pres_fut: defAxis(-100, -55, 1.9, -80),
      psy_agency_struct: defAxis(-20, 60, 0.9, 20)
    }
  },

  // 16. RADIKÁLIS CENTRISTA / PRAGMATISTA REALISTA
  {
    id: 'rad_centrist',
    group: 'political',
    icon: '⚖️',
    color: '#14b8a6',
    name: { hu: 'Radikális Centrista / Pragmatista', en: 'Radical Centrist / Pragmatic Realist' },
    tagline: {
      hu: 'Ideológiamentes egyensúlykeresés, vegyes megoldások, mérsékelt reformok és stabilitás.',
      en: 'Non-ideological balance, mixed policy toolkit, institutional stability, and practical compromise.'
    },
    desc: {
      hu: 'Elutasítja a szélsőségeket: minden kérdésben a működőképes arany középutat keresi a szabadpiac és a szociális védelem, a szabadság és a rend, a hagyomány és a haladás között.',
      en: 'Rejects ideological extremes in favor of practical synthesis: balancing market dynamism with social protection, liberty with order, and innovation with stability.'
    },
    axes: {
      soc_indiv_comm: defAxis(-30, 30, 1.5, 0),
      soc_egal_hier: defAxis(-30, 30, 1.5, 0),
      soc_univ_nat: defAxis(-30, 30, 1.5, 0),
      soc_multi_assim: defAxis(-30, 30, 1.5, 0),
      soc_coop_comp: defAxis(-30, 30, 1.5, 0),

      eco_prop: defAxis(-25, 35, 1.6, 5),
      eco_coord: defAxis(-30, 30, 1.6, 0),
      eco_redist: defAxis(-35, 25, 1.6, -5),
      eco_ecology: defAxis(-35, 25, 1.5, -5),
      eco_trade: defAxis(-25, 35, 1.5, 5),

      pow_lib_auth: defAxis(-30, 30, 1.6, 0),
      pow_dem_tech: defAxis(-25, 35, 1.5, 5),
      pow_decent_cent: defAxis(-30, 30, 1.5, 0),
      pow_rehab_punish: defAxis(-30, 30, 1.5, 0),
      pow_concil_bellig: defAxis(-35, 25, 1.5, -5),

      cul_innov_trad: defAxis(-30, 30, 1.6, 0),
      cul_human_spirit: defAxis(-35, 25, 1.4, -5),
      cul_auton_norm: defAxis(-35, 25, 1.5, -5),
      cul_trans_bio: defAxis(-30, 30, 1.4, 0),
      cul_out_in: defAxis(-30, 30, 1.4, 0),

      eth_util_deon: defAxis(-35, 25, 1.5, -5),
      eth_rel_abs: defAxis(-35, 25, 1.5, -5),
      eth_emp_int: defAxis(-45, 15, 1.5, -15),
      eth_qual_quant: defAxis(-30, 30, 1.5, 0),
      eth_speech: defAxis(-35, 25, 1.5, -5),

      psy_hed_asc: defAxis(-30, 30, 1.4, 0),
      psy_bold_sec: defAxis(-25, 35, 1.5, 5),
      psy_rouss_hobb: defAxis(-25, 35, 1.5, 5),
      psy_pres_fut: defAxis(-25, 35, 1.5, 5),
      psy_agency_struct: defAxis(-30, 30, 1.5, 0)
    }
  }
];
