// 30 Kalibráló Kérdés / Dilemma (Minden értékpárhoz 1-1 célzott kérdés)
// direction: +1 ha az "Egyetértek" a jobb pólus (+100) felé tolja, -1 ha a bal pólus (-100) felé tolja.

export const QUIZ_QUESTIONS = [
  // I. TÁRSADALOM ÉS KÖZÖSSÉG
  {
    id: 'q1',
    axisId: 'soc_indiv_comm',
    direction: 1,
    text: {
      hu: 'A közösség összetartása és a közös érdek védelme fontosabb, mint az egyén korlátlan önmegvalósítása.',
      en: 'Preserving community cohesion and the common good is more important than unrestricted individual self-realization.'
    },
    hint: {
      hu: 'Egyetértés → Kommunitarizmus (+), Elutasítás → Individualizmus (-)',
      en: 'Agree → Communitarianism (+), Disagree → Individualism (-)'
    }
  },
  {
    id: 'q2',
    axisId: 'soc_egal_hier',
    direction: -1,
    text: {
      hu: 'A társadalomnak minden eszközzel törekednie kell a vagyoni és társadalmi egyenlőtlenségek felszámolására, mert a hierarchia elnyomást szül.',
      en: 'Society should actively strive to eliminate wealth and status inequalities, as hierarchy breeds oppression.'
    },
    hint: {
      hu: 'Egyetértés → Egalitarizmus (-), Elutasítás → Hierarchia (+)',
      en: 'Agree → Egalitarianism (-), Disagree → Hierarchy (+)'
    }
  },
  {
    id: 'q3',
    axisId: 'soc_univ_nat',
    direction: 1,
    text: {
      hu: 'Egy országnak mindig a saját állampolgárai és nemzeti szuverenitása érdekeit kell előtérbe helyeznie a globális szolidaritással szemben.',
      en: 'A country must always prioritize its own citizens and national sovereignty over global solidarity.'
    },
    hint: {
      hu: 'Egyetértés → Nacionalizmus (+), Elutasítás → Kozmopolitizmus (-)',
      en: 'Agree → Nationalism (+), Disagree → Cosmopolitanism (-)'
    }
  },
  {
    id: 'q4',
    axisId: 'soc_multi_assim',
    direction: -1,
    text: {
      hu: 'A különböző kultúrák és életformák egymás mellett élése gazdagítja a társadalmat; nem szabad elvárni a teljes kulturális beolvadást.',
      en: 'The coexistence of diverse cultures enriches society; full assimilation into a single majority culture should not be demanded.'
    },
    hint: {
      hu: 'Egyetértés → Multikulturalizmus (-), Elutasítás → Asszimiláció (+)',
      en: 'Agree → Multiculturalism (-), Disagree → Assimilation (+)'
    }
  },
  {
    id: 'q5',
    axisId: 'soc_coop_comp',
    direction: 1,
    text: {
      hu: 'Az emberi fejlődés legfőbb motorja az egyének és vállalatok közötti éles verseny, nem pedig a szolidáris együttműködés.',
      en: 'Fierce competition between individuals and enterprises is a stronger driver of human progress than cooperative solidarity.'
    },
    hint: {
      hu: 'Egyetértés → Versenyelvűség (+), Elutasítás → Kooperáció (-)',
      en: 'Agree → Competition (+), Disagree → Cooperation (-)'
    }
  },

  // II. GAZDASÁG ÉS ERŐFORRÁSOK
  {
    id: 'q6',
    axisId: 'eco_prop',
    direction: -1,
    text: {
      hu: 'A stratégiai iparágaknak, természeti kincseknek és nagyvállalatoknak közösségi, szövetkezeti vagy állami tulajdonban kellene lenniük.',
      en: 'Strategic industries, natural resources, and major enterprises should be under public, cooperative, or common ownership.'
    },
    hint: {
      hu: 'Egyetértés → Köztulajdon (-), Elutasítás → Magántulajdon (+)',
      en: 'Agree → Public/Common Ownership (-), Disagree → Private Property (+)'
    }
  },
  {
    id: 'q7',
    axisId: 'eco_coord',
    direction: 1,
    text: {
      hu: 'A piacok akkor működnek a legjobban, ha az állam nem avatkozik bele az árakba, bérekbe és a gazdasági folyamatokba.',
      en: 'Markets function best when the state does not interfere with prices, wages, and spontaneous economic activity.'
    },
    hint: {
      hu: 'Egyetértés → Szabadpiac (+), Elutasítás → Tervgazdaság/Szabályozás (-)',
      en: 'Agree → Free Market (+), Disagree → Planned/Regulated Economy (-)'
    }
  },
  {
    id: 'q8',
    axisId: 'eco_redist',
    direction: -1,
    text: {
      hu: 'A magas jövedelmeket és vagyonokat erősen meg kell adóztatni, hogy mindenkinek ingyenes oktatást, egészségügyet és létbiztonságot nyújtsunk.',
      en: 'High incomes and wealth should be heavily taxed to guarantee universal healthcare, education, and social security for all.'
    },
    hint: {
      hu: 'Egyetértés → Jóléti újraelosztás (-), Elutasítás → Öngondoskodás (+)',
      en: 'Agree → Welfare Redistribution (-), Disagree → Self-Reliance (+)'
    }
  },
  {
    id: 'q9',
    axisId: 'eco_ecology',
    direction: -1,
    text: {
      hu: 'A természet és a klíma védelme érdekében készeknek kell lennünk akár a gazdasági növekedés és a fogyasztás visszafogására is.',
      en: 'To protect the biosphere and climate, we must be willing to curb GDP growth and material consumption.'
    },
    hint: {
      hu: 'Egyetértés → Ökológiai korlátok (-), Elutasítás → Termelési növekedés (+)',
      en: 'Agree → Ecological Limits (-), Disagree → Economic Growth (+)'
    }
  },
  {
    id: 'q10',
    axisId: 'eco_trade',
    direction: -1,
    text: {
      hu: 'A hazai termelőket és munkahelyeket védővámokkal és stratégiai önellátással kell megvédeni a globális szabadkereskedelemmel szemben.',
      en: 'Domestic producers and jobs should be protected through tariffs and strategic self-reliance rather than global free trade.'
    },
    hint: {
      hu: 'Egyetértés → Merkantilizmus/Önellátás (-), Elutasítás → Szabadkereskedelem (+)',
      en: 'Agree → Mercantilism/Protectionism (-), Disagree → Free Trade (+)'
    }
  },

  // III. HATALOM, ÁLLAM ÉS STRATÉGIA
  {
    id: 'q11',
    axisId: 'pow_lib_auth',
    direction: 1,
    text: {
      hu: 'Válságos időkben erős, határozott központi államhatalomra és rendre van szükség, még ha ez egyes szabadságjogok korlátozásával is jár.',
      en: 'Strong, decisive state authority and order are necessary to keep society stable, even if some civil liberties must be restricted.'
    },
    hint: {
      hu: 'Egyetértés → Etatizmus/Erős állam (+), Elutasítás → Libertarianizmus (-)',
      en: 'Agree → Statism/Authority (+), Disagree → Libertarianism (-)'
    }
  },
  {
    id: 'q12',
    axisId: 'pow_dem_tech',
    direction: 1,
    text: {
      hu: 'A bonyolult gazdasági és társadalmi döntéseket inkább képzett szakértőkre és tudósokra kellene bízni a népszavazások és a tömegdemokrácia helyett.',
      en: 'Complex policy decisions should be entrusted to qualified experts and technocrats rather than popular referendums.'
    },
    hint: {
      hu: 'Egyetértés → Technokrácia (+), Elutasítás → Közvetlen demokrácia (-)',
      en: 'Agree → Technocracy (+), Disagree → Direct Democracy (-)'
    }
  },
  {
    id: 'q13',
    axisId: 'pow_decent_cent',
    direction: -1,
    text: {
      hu: 'Az adók és a döntési jogkörök nagy részét a helyi önkormányzatoknál és régióknál kell hagyni az erős központi kormányzat helyett.',
      en: 'Most governance power and tax revenues should be decentralized to local municipalities and regions rather than the central government.'
    },
    hint: {
      hu: 'Egyetértés → Decentralizáció (-), Elutasítás → Centralizáció (+)',
      en: 'Agree → Decentralization (-), Disagree → Centralization (+)'
    }
  },
  {
    id: 'q14',
    axisId: 'pow_rehab_punish',
    direction: 1,
    text: {
      hu: 'A bűnözőkkel szemben sokkal szigorúbb, elrettentő büntetésekre van szükség az enyhe, rehabilitációt kereső megközelítés helyett.',
      en: 'Criminals should face harsh, retributive punishments for deterrence rather than lenient rehabilitative programs.'
    },
    hint: {
      hu: 'Egyetértés → Megtorlás/Szigor (+), Elutasítás → Rehabilitáció (-)',
      en: 'Agree → Retribution/Law & Order (+), Disagree → Rehabilitation (-)'
    }
  },
  {
    id: 'q15',
    axisId: 'pow_concil_bellig',
    direction: -1,
    text: {
      hu: 'A nemzetközi konfliktusokat szinte mindig békés diplomáciával és engedményekkel kell megoldani a katonai erőfitogtatás helyett.',
      en: 'International conflicts should almost always be resolved through peaceful diplomacy and compromise rather than military force.'
    },
    hint: {
      hu: 'Egyetértés → Békülékeny diplomácia (-), Elutasítás → Belligerens erőpolitika (+)',
      en: 'Agree → Conciliatory Diplomacy (-), Disagree → Belligerent Realpolitik (+)'
    }
  },

  // IV. KULTÚRA, INNOVÁCIÓ ÉS JÖVŐ
  {
    id: 'q16',
    axisId: 'cul_innov_trad',
    direction: 1,
    text: {
      hu: 'Az évszázados hagyományok és örökölt intézmények több bölcsességet hordoznak, mint a folytonos társadalmi kísérletezés és progresszív reformok.',
      en: 'Centuries-old traditions and inherited institutions contain deeper wisdom than constant social experimentation and progressive reform.'
    },
    hint: {
      hu: 'Egyetértés → Tradicionalizmus (+), Elutasítás → Innováció/Progresszió (-)',
      en: 'Agree → Traditionalism (+), Disagree → Innovation/Progressivism (-)'
    }
  },
  {
    id: 'q17',
    axisId: 'cul_human_spirit',
    direction: 1,
    text: {
      hu: 'A társadalom erkölcsi épségéhez szükség van a vallási-spirituális gyökerek és a szakralitás közéleti tiszteletére.',
      en: 'A healthy society requires reverence for spiritual, religious, or transcendent foundations in public life.'
    },
    hint: {
      hu: 'Egyetértés → Spiritualizmus (+), Elutasítás → Világi Humanizmus (-)',
      en: 'Agree → Spiritualism (+), Disagree → Secular Humanism (-)'
    }
  },
  {
    id: 'q18',
    axisId: 'cul_auton_norm',
    direction: -1,
    text: {
      hu: 'A magánéletben, az identitásban és a saját test feletti rendelkezésben mindenkinek teljes szabadsága van, a közösségi normák nem korlátozhatják.',
      en: 'Every adult should have complete freedom over their lifestyle, identity, and body without communal moral policing.'
    },
    hint: {
      hu: 'Egyetértés → Életmódbeli autonómia (-), Elutasítás → Közösségi erkölcs (+)',
      en: 'Agree → Lifestyle Autonomy (-), Disagree → Communal Morality (+)'
    }
  },
  {
    id: 'q19',
    axisId: 'cul_trans_bio',
    direction: -1,
    text: {
      hu: 'Támogatni kell, hogy az emberiség géntechnológiával, mesterséges intelligenciával és kibernetikával lépje át saját biológiai korlátait.',
      en: 'Humanity should embrace genetic engineering, AI, and cybernetics to transcend our natural biological limitations.'
    },
    hint: {
      hu: 'Egyetértés → Transzhumanizmus (-), Elutasítás → Biokonzervativizmus (+)',
      en: 'Agree → Transhumanism (-), Disagree → Bioconservatism (+)'
    }
  },
  {
    id: 'q20',
    axisId: 'cul_out_in',
    direction: -1,
    text: {
      hu: 'Az emberiségnek hatalmas erőforrásokat kellene fordítania a világűr meghódítására és az ismeretlen felfedezésére, még ha itthon is vannak megoldatlan gondok.',
      en: 'Civilization should boldly invest in space exploration and pushing cosmic frontiers, even while domestic problems remain.'
    },
    hint: {
      hu: 'Egyetértés → Kifelé forduló / Outward (-), Elutasítás → Befelé forduló / Inward (+)',
      en: 'Agree → Outward Explorer (-), Disagree → Inward Focus (+)'
    }
  },

  // V. ERKÖLCS ÉS IGAZSÁGELMÉLET
  {
    id: 'q21',
    axisId: 'eth_util_deon',
    direction: -1,
    text: {
      hu: 'Ha egy nehéz döntéssel sok ember életét vagy jólétét megmenthetjük, akkor szabad megszegni az egyébként szent erkölcsi szabályokat is.',
      en: 'If breaking a moral rule produces a vastly better outcome for the majority, it is the right thing to do.'
    },
    hint: {
      hu: 'Egyetértés → Utilitarizmus (-), Elutasítás → Kötelességetika (+)',
      en: 'Agree → Utilitarianism (-), Disagree → Deontology (+)'
    }
  },
  {
    id: 'q22',
    axisId: 'eth_rel_abs',
    direction: 1,
    text: {
      hu: 'Léteznek örök és egyetemes erkölcsi igazságok: ami bűn vagy erény, az minden korban és kultúrában ugyanaz marad.',
      en: 'Objective, timeless moral laws exist: right and wrong do not depend on cultural context or historical era.'
    },
    hint: {
      hu: 'Egyetértés → Morális abszolutizmus (+), Elutasítás → Morális relativizmus (-)',
      en: 'Agree → Moral Absolutism (+), Disagree → Moral Relativism (-)'
    }
  },
  {
    id: 'q23',
    axisId: 'eth_emp_int',
    direction: -1,
    text: {
      hu: 'Csak abban érdemes hinni, ami tudományos mérésekkel és adatokkal bizonyítható; a megérzések és spirituális élmények gyakran félrevezetnek.',
      en: 'We should rely strictly on measurable, empirical evidence; intuition and metaphysical beliefs are unreliable guides.'
    },
    hint: {
      hu: 'Egyetértés → Empirizmus (-), Elutasítás → Intuíció/Metafizika (+)',
      en: 'Agree → Empiricism (-), Disagree → Intuition/Metaphysics (+)'
    }
  },
  {
    id: 'q24',
    axisId: 'eth_qual_quant',
    direction: 1,
    text: {
      hu: 'Az egyetemeken és a kultúrában a szigorú elit minőséget és a mesteri kiválóságot kell védeni, még ha így kevesebben is férnek hozzá.',
      en: 'Institutions should uphold uncompromising elite standards and mastery (Quality), even if it reduces mass accessibility (Quantity).'
    },
    hint: {
      hu: 'Egyetértés → Minőség/Kiválóság (+), Elutasítás → Mennyiség/Befogadás (-)',
      en: 'Agree → Quality/Mastery (+), Disagree → Quantity/Inclusion (-)'
    }
  },
  {
    id: 'q25',
    axisId: 'eth_speech',
    direction: -1,
    text: {
      hu: 'A szólásszabadságnak még a legfelháborítóbb, legsértőbb véleményekre is ki kell terjednie; az állam sosem cenzúrázhat.',
      en: 'Free speech must protect even offensive or radical views; state censorship is always more dangerous than bad speech.'
    },
    hint: {
      hu: 'Egyetértés → Szólásszabadság-abszolutizmus (-), Elutasítás → Kárelhárító korlátozás (+)',
      en: 'Agree → Free Speech Absolutism (-), Disagree → Harm-Preventive Limits (+)'
    }
  },

  // VI. ÉLETFILOZÓFIA ÉS EMBERKÉP
  {
    id: 'q26',
    axisId: 'psy_hed_asc',
    direction: 1,
    text: {
      hu: 'Az önfegyelem, a mértékletesség és a vágyak feletti uralom sokkal nemesebb életcél, mint az élvezetek és a kényelem keresése.',
      en: 'Self-discipline, simplicity, and mastery over one’s desires are nobler life goals than pursuing pleasure and comfort.'
    },
    hint: {
      hu: 'Egyetértés → Sztoikus aszkézis (+), Elutasítás → Hedonizmus (-)',
      en: 'Agree → Stoic Asceticism (+), Disagree → Hedonism (-)'
    }
  },
  {
    id: 'q27',
    axisId: 'psy_bold_sec',
    direction: -1,
    text: {
      hu: 'Az életben és a politikában is a merész, kockázatvállaló lépések visznek előre a biztonsági játékkal és az óvatos védekezéssel szemben.',
      en: 'In both life and governance, bold risk-taking and seizing the initiative beat cautious, security-first defense.'
    },
    hint: {
      hu: 'Egyetértés → Kockázatvállalás/Offenzív (-), Elutasítás → Biztonság/Defenzív (+)',
      en: 'Agree → Boldness/Offensive (-), Disagree → Security/Defensive (+)'
    }
  },
  {
    id: 'q28',
    axisId: 'psy_rouss_hobb',
    direction: 1,
    text: {
      hu: 'Az emberi természet alapvetően önző és gyarló; erős törvények és kontroll nélkül a társadalom gyorsan káoszba süllyedne.',
      en: 'Human nature is fundamentally self-interested and flawed; without firm laws and checks, society quickly descends into chaos.'
    },
    hint: {
      hu: 'Egyetértés → Hobbes-i realizmus (+), Elutasítás → Rousseau-i optimizmus (-)',
      en: 'Agree → Hobbesian Realism (+), Disagree → Rousseauian Optimism (-)'
    }
  },
  {
    id: 'q29',
    axisId: 'psy_pres_fut',
    direction: 1,
    text: {
      hu: 'Kötelességünk ma komoly lemondásokat vállalni azért, hogy száz év múlva a jövő generációi egy jobb világban élhessenek.',
      en: 'We have a duty to make significant sacrifices today so that generations a century from now may thrive.'
    },
    hint: {
      hu: 'Egyetértés → Jövőorientáltság (+), Elutasítás → Jelenorientáltság / Carpe Diem (-)',
      en: 'Agree → Long-Term Stewardship (+), Disagree → Present Focus (-)'
    }
  },
  {
    id: 'q30',
    axisId: 'psy_agency_struct',
    direction: 1,
    text: {
      hu: 'Végső soron mindenki a saját szerencséjének a kovácsa: az egyéni akarat és szorgalom fontosabb, mint a társadalmi háttér.',
      en: 'Ultimately, individuals are the architects of their own destiny: personal grit matters more than socio-economic background.'
    },
    hint: {
      hu: 'Egyetértés → Egyéni felelősség (+), Elutasítás → Rendszerszintű determinizmus (-)',
      en: 'Agree → Individual Agency (+), Disagree → Systemic Determinism (-)'
    }
  }
];
