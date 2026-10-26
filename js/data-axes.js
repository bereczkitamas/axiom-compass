// 6 Fő Dimenzió és 30 Értékpár (EU5 Societal Values + Politikai, Filozófiai és Pszichológiai tengelyek)
// Skála: -100 (Bal pólus) ... 0 (Egyensúly / Semleges) ... +100 (Jobb pólus)

export const CATEGORIES = [
  {
    id: 'society',
    icon: '👥',
    color: '#3b82f6', // Blue
    name: {
      hu: 'I. Társadalom és Közösség',
      en: 'I. Society & Community'
    },
    desc: {
      hu: 'Az egyén és a közösség viszonya, társadalmi szerkezet, nyitottság és kooperáció.',
      en: 'Relationship between individual and collective, social structure, openness, and cooperation.'
    },
    leftPoleLabel: { hu: 'Közösségi és Egyenlőségelvű', en: 'Egalitarian & Inclusive' },
    rightPoleLabel: { hu: 'Hierarchikus és Elkülönülő', en: 'Hierarchical & Particularist' }
  },
  {
    id: 'economy',
    icon: '⚖️',
    color: '#10b981', // Emerald
    name: {
      hu: 'II. Gazdaság és Erőforrások',
      en: 'II. Economy & Resources'
    },
    desc: {
      hu: 'Tulajdonviszonyok, piaci koordináció, újraelosztás, kereskedelem és ökológia.',
      en: 'Property relations, market coordination, redistribution, trade, and ecology.'
    },
    leftPoleLabel: { hu: 'Közösségi / Szabályozott / Öko', en: 'Socialized / Regulated / Eco' },
    rightPoleLabel: { hu: 'Szabadpiaci / Magántulajdon / Növekedés', en: 'Free-Market / Private / Productivist' }
  },
  {
    id: 'power',
    icon: '🏛️',
    color: '#ef4444', // Red
    name: {
      hu: 'III. Hatalom, Állam és Stratégia',
      en: 'III. Power, State & Strategy'
    },
    desc: {
      hu: 'Államhatalom mértéke, centralizáció, döntéshozatal, jogrend és külpolitikai doktrína.',
      en: 'Scope of state power, centralization, governance, justice, and foreign doctrine.'
    },
    leftPoleLabel: { hu: 'Libertárius / Decentralizált / Békülékeny', en: 'Libertarian / Decentralized / Conciliatory' },
    rightPoleLabel: { hu: 'Tekintélyelvű / Centralizált / Erőpolitikai', en: 'Statist / Centralized / Belligerent' }
  },
  {
    id: 'culture',
    icon: '🧭',
    color: '#a855f7', // Purple
    name: {
      hu: 'IV. Kultúra, Innováció és Jövő',
      en: 'IV. Culture, Innovation & Future'
    },
    desc: {
      hu: 'Hagyomány vs. innováció, humanizmus vs. spiritualizmus, technológia és távlati fókusz.',
      en: 'Tradition vs. innovation, humanism vs. spiritualism, technology, and horizon focus.'
    },
    leftPoleLabel: { hu: 'Innovatív / Szekuláris / Kifelé forduló', en: 'Innovative / Secular / Outward' },
    rightPoleLabel: { hu: 'Tradicionális / Szakrális / Befelé forduló', en: 'Traditional / Spiritual / Inward' }
  },
  {
    id: 'ethics',
    icon: '🕯️',
    color: '#f59e0b', // Amber
    name: {
      hu: 'V. Erkölcs és Igazságelmélet',
      en: 'V. Ethics & Epistemology'
    },
    desc: {
      hu: 'Morális alapelvek, megismerés, igazságosság, szólásszabadság és minőség-fókusz.',
      en: 'Moral foundations, epistemology, justice, free speech, and quality vs. quantity focus.'
    },
    leftPoleLabel: { hu: 'Pragmatikus / Empirikus / Megengedő', en: 'Pragmatic / Empiricist / Permissive' },
    rightPoleLabel: { hu: 'Abszolutista / Kötelességetikus / Normatív', en: 'Absolutist / Deontological / Normative' }
  },
  {
    id: 'psychology',
    icon: '🧠',
    color: '#ec4899', // Pink
    name: {
      hu: 'VI. Életfilozófia és Emberkép',
      en: 'VI. Life Philosophy & Human Nature'
    },
    desc: {
      hu: 'Személyes életvezetés, kockázatvállalás, emberkép, időorientáció és önkontroll.',
      en: 'Personal conduct, risk appetite, view of human nature, time orientation, and agency.'
    },
    leftPoleLabel: { hu: 'Autonóm / Optimista / Élményelvű', en: 'Autonomous / Optimistic / Experiential' },
    rightPoleLabel: { hu: 'Fegyelmezett / Realista / Biztonságelvű', en: 'Disciplined / Realist / Security-Focused' }
  }
];

export const AXES = [
  // ============================================================================
  // I. TÁRSADALOM ÉS KÖZÖSSÉG (SOCIETY & COMMUNITY)
  // ============================================================================
  {
    id: 'soc_indiv_comm',
    category: 'society',
    eu5Ref: 'Individualism vs. Communitarianism',
    name: {
      hu: 'Individualizmus vs. Kommunitarizmus',
      en: 'Individualism vs. Communitarianism'
    },
    desc: {
      hu: 'Az egyéni önmegvalósítás és személyes autonómia, vagy a közösség kohéziója és a közjó élvez-e elsőbbséget?',
      en: 'Does personal self-realization and individual autonomy take precedence over communal cohesion and the common good?'
    },
    left: {
      label: { hu: 'Individualista', en: 'Individualist' },
      desc: { hu: 'Az egyén jogai és szabadsága sérthetetlen; a társadalom egyének szövetsége.', en: 'Individual rights and autonomy are paramount; society exists to serve individuals.' },
      traits: { hu: ['+ Egyéni kezdeményezőkészség', '+ Személyes szabadság'], en: ['+ Personal initiative', '+ Individual liberty'] }
    },
    right: {
      label: { hu: 'Kommunitárius / Kollektivista', en: 'Communitarian / Collectivist' },
      desc: { hu: 'A közösség érdeke, a társadalmi kötelességek és az összetartozás megelőzi az egyéni vágyakat.', en: 'Social cohesion, mutual duty, and collective harmony outweigh purely individual desires.' },
      traits: { hu: ['+ Társadalmi kohézió', '+ Közösségi szolidaritás'], en: ['+ Social cohesion', '+ Collective solidarity'] }
    }
  },
  {
    id: 'soc_egal_hier',
    category: 'society',
    eu5Ref: 'Free Subjects vs. Aristocracy/Hierarchy',
    name: {
      hu: 'Egalitarizmus vs. Hierarchia',
      en: 'Egalitarianism vs. Hierarchy'
    },
    desc: {
      hu: 'Minden ember társadalmi és vagyoni egyenlőségére kell törekedni, vagy a hierarchikus rangsor természetes és szükséges?',
      en: 'Should society actively pursue social and material equality, or are hierarchical ranks natural and stabilizing?'
    },
    left: {
      label: { hu: 'Egalitárius (Egyenlőségelvű)', en: 'Egalitarian' },
      desc: { hu: 'A társadalmi különbségeket minimalizálni kell; mindenki egyenlő eséllyel és méltósággal bír.', en: 'Class distinctions and steep inequalities must be dismantled in favor of equal standing.' },
      traits: { hu: ['+ Társadalmi mobilitás', '+ Egyenlő esélyek'], en: ['+ Social mobility', '+ Equal standing'] }
    },
    right: {
      label: { hu: 'Hierarchikus / Elitista', en: 'Hierarchical / Elitist' },
      desc: { hu: 'A tekintélyen, érdemen vagy hagyományon alapuló társadalmi rétegződés biztosítja a rendet és kiválóságot.', en: 'Stratification based on merit, authority, or tradition maintains order and excellence.' },
      traits: { hu: ['+ Struktúra és rend', '+ Elit kiválóság'], en: ['+ Structural order', '+ Elite leadership'] }
    }
  },
  {
    id: 'soc_univ_nat',
    category: 'society',
    eu5Ref: 'Cosmopolitan vs. Particularist',
    name: {
      hu: 'Kozmopolitizmus vs. Nacionalizmus',
      en: 'Cosmopolitanism vs. Nationalism'
    },
    desc: {
      hu: 'Az egyetemes emberi közösséghez, vagy a saját nemzetünkhöz és szűkebb hazánkhoz tartozunk-e elsősorban?',
      en: 'Do our primary moral obligations lie with all of humanity globally, or with our specific nation and homeland?'
    },
    left: {
      label: { hu: 'Kozmopolita / Univerzalista', en: 'Cosmopolitan / Universalist' },
      desc: { hu: 'Az emberiség egyetlen közösség; az államhatárok másodlagosak az egyetemes emberi értékek mögött.', en: 'Humanity is a single community; national borders are secondary to universal human solidarity.' },
      traits: { hu: ['+ Nemzetközi nyitottság', '+ Globális szolidaritás'], en: ['+ Global cooperation', '+ Universal rights'] }
    },
    right: {
      label: { hu: 'Nacionalista / Patrióta', en: 'Nationalist / Patriotic' },
      desc: { hu: 'A nemzeti szuverenitás, a hazai kultúra és a honfitársak védelme minden más elé sorolandó.', en: 'National sovereignty, heritage, and the welfare of fellow citizens come first.' },
      traits: { hu: ['+ Nemzeti egység', '+ Szuverenitásvédelem'], en: ['+ National unity', '+ Sovereign resilience'] }
    }
  },
  {
    id: 'soc_multi_assim',
    category: 'society',
    eu5Ref: 'Humanist Tolerance vs. Cultural Unity',
    name: {
      hu: 'Multikulturalizmus vs. Asszimiláció',
      en: 'Multiculturalism vs. Assimilation'
    },
    desc: {
      hu: 'A kulturális sokszínűség gazdagítja a társadalmat, vagy az egységes, közös kulturális normákba való beolvadás szükséges?',
      en: 'Does cultural diversity enrich society, or is assimilation into a unified national culture necessary for stability?'
    },
    left: {
      label: { hu: 'Multikulturális / Pluralista', en: 'Multicultural / Pluralist' },
      desc: { hu: 'Különböző kultúrák, nyelvek és életformák békésen és egyenrangúan élhetnek egymás mellett.', en: 'Diverse cultures, identities, and traditions should coexist without forced conformity.' },
      traits: { hu: ['+ Kulturális sokszínűség', '+ Tolerancia'], en: ['+ Cultural pluralism', '+ Minority inclusion'] }
    },
    right: {
      label: { hu: 'Asszimilációs / Homogén', en: 'Assimilationist / Homogeneous' },
      desc: { hu: 'A stabil társadalomhoz közös nyelvre, alapértékekre és a többségi kultúrához való alkalmazkodásra van szükség.', en: 'A stable society requires shared customs, language, and integration into the core culture.' },
      traits: { hu: ['+ Kulturális egység', '+ Belső stabilitás'], en: ['+ Cultural uniformity', '+ Internal stability'] }
    }
  },
  {
    id: 'soc_coop_comp',
    category: 'society',
    eu5Ref: 'Cooperative Solidarity vs. Competitive Selection',
    name: {
      hu: 'Kooperáció vs. Versenyelvűség',
      en: 'Cooperation vs. Competition'
    },
    desc: {
      hu: 'A társadalom fejlődését a kölcsönös segítségnyújtás és együttműködés, vagy az egyének és csoportok közti éles verseny hajtja?',
      en: 'Is human progress driven primarily by mutual aid and cooperation, or by fierce competition and selection?'
    },
    left: {
      label: { hu: 'Kooperatív / Szolidáris', en: 'Cooperative / Mutualist' },
      desc: { hu: 'Az együttműködés és a bizalom hozza ki a legtöbbet az emberekből; a gyengéket támogatni kell.', en: 'Mutual aid, trust, and shared effort build a healthier society than cutthroat rivalry.' },
      traits: { hu: ['+ Társadalmi bizalom', '+ Kölcsönös segítség'], en: ['+ High social trust', '+ Mutual support'] }
    },
    right: {
      label: { hu: 'Versenyelvű / Darwinista', en: 'Competitive / Merit-Driven' },
      desc: { hu: 'A versengés kiszűri a gyengeséget és ösztönzi a kiválóságot; a küzdelem a fejlődés motorja.', en: 'Rivalry and selection reward excellence, prevent stagnation, and drive peak performance.' },
      traits: { hu: ['+ Teljesítménykényszer', '+ Gyors szelekció'], en: ['+ Peak performance', '+ Competitive drive'] }
    }
  },

  // ============================================================================
  // II. GAZDASÁG ÉS ERŐFORRÁSOK (ECONOMY & RESOURCES)
  // ============================================================================
  {
    id: 'eco_prop',
    category: 'economy',
    eu5Ref: 'Commons/State vs. Private Capital',
    name: {
      hu: 'Köztulajdon vs. Magántulajdon',
      en: 'Public/Common Ownership vs. Private Property'
    },
    desc: {
      hu: 'A termelőeszközök, földek és stratégiai erőforrások a közösséget illetik, vagy a magántulajdon szent és sérthetetlen?',
      en: 'Should productive assets and key resources belong to the community/state, or is private property sacred?'
    },
    left: {
      label: { hu: 'Közösségi / Köztulajdon-párti', en: 'Socialized / Common Ownership' },
      desc: { hu: 'A kulcságazatok és termelőeszközök köztulajdonban vagy szövetkezeti kézben szolgálják a közjót.', en: 'Means of production and natural resources should be collectively or publicly owned.' },
      traits: { hu: ['+ Közösségi ellenőrzés', '+ Tőkekoncentráció gátja'], en: ['+ Public control', '+ Anti-monopoly'] }
    },
    right: {
      label: { hu: 'Magántulajdon-párti (Kapitalista)', en: 'Private Property / Capitalist' },
      desc: { hu: 'Az egyéni és vállalati magántulajdon a gazdasági szabadság és a hatékony gazdálkodás alapköve.', en: 'Strong private property rights are the foundation of prosperity and liberty.' },
      traits: { hu: ['+ Befektetési kedv', '+ Tulajdonbiztonság'], en: ['+ Capital investment', '+ Property security'] }
    }
  },
  {
    id: 'eco_coord',
    category: 'economy',
    eu5Ref: 'State Direction vs. Free Market',
    name: {
      hu: 'Tervgazdaság / Szabályozás vs. Szabadpiac',
      en: 'Planned/Regulated Economy vs. Free Market'
    },
    desc: {
      hu: 'Tudatos állami/közösségi tervezésnek és szabályozásnak, vagy a szabadpiac láthatatlan kezének kell irányítania a gazdaságot?',
      en: 'Should economic activity be guided by deliberate planning and regulation, or by spontaneous market forces?'
    },
    left: {
      label: { hu: 'Tervezett / Erősen szabályozott', en: 'Planned / Directed Market' },
      desc: { hu: 'A piaci kudarcokat, válságokat és kizsákmányolást tudatos gazdaságirányítással kell megelőzni.', en: 'Active regulation and planning prevent crises, speculation, and exploitation.' },
      traits: { hu: ['+ Gazdasági stabilitás', '+ Stratégiai fókusz'], en: ['+ Macro stability', '+ Strategic direction'] }
    },
    right: {
      label: { hu: 'Laissez-faire / Szabadpiaci', en: 'Laissez-Faire / Free Market' },
      desc: { hu: 'A kereslet és kínálat szabad játéka állami beavatkozás nélkül osztja el leghatékonyabban az erőforrásokat.', en: 'Unfettered price mechanisms and voluntary exchange allocate resources most efficiently.' },
      traits: { hu: ['+ Piaci dinamizmus', '+ Minimális bürokrácia'], en: ['+ Market dynamism', '+ Zero bureaucracy'] }
    }
  },
  {
    id: 'eco_redist',
    category: 'economy',
    eu5Ref: 'Welfare Provision vs. Self-Reliance',
    name: {
      hu: 'Jóléti Újraelosztás vs. Öngondoskodás',
      en: 'Welfare Redistribution vs. Self-Reliance'
    },
    desc: {
      hu: 'Progresszív adókkal és erős szociális hálóval kell kiegyenlíteni a jövedelmeket, vagy mindenki tartsa meg, amit megkeresett?',
      en: 'Should progressive taxation fund a robust welfare state, or should individuals keep their earnings and rely on themselves?'
    },
    left: {
      label: { hu: 'Jóléti / Újraelosztó', en: 'Welfare / Redistributive' },
      desc: { hu: 'Ingyenes közszolgáltatások, erős szociális védőháló és vagyonarányos közteherviselés szükséges.', en: 'Universal public services, safety nets, and progressive taxes ensure dignity for all.' },
      traits: { hu: ['+ Létbiztonság', '+ Szegénység csökkentése'], en: ['+ Social safety net', '+ Reduced poverty'] }
    },
    right: {
      label: { hu: 'Öngondoskodó / Alacsony adók', en: 'Self-Reliant / Low Tax' },
      desc: { hu: 'Az állam ne büntesse a sikert magas adókkal; az egyéni felelősség és magánbiztosítás hatékonyabb.', en: 'Low taxes reward hard work; individuals and private charity should handle welfare.' },
      traits: { hu: ['+ Munkakedv ösztönzése', '+ Alacsony adóteher'], en: ['+ Work incentives', '+ Fiscal freedom'] }
    }
  },
  {
    id: 'eco_ecology',
    category: 'economy',
    eu5Ref: 'Ecological Balance vs. Industrial Expansion',
    name: {
      hu: 'Ökológiai Korlátok vs. Gazdasági Növekedés',
      en: 'Ecological Limits vs. Economic Growth'
    },
    desc: {
      hu: 'A bioszféra megóvása érdekében akár a termelést és fogyasztást is vissza kell fogni, vagy a gazdasági növekedés az első?',
      en: 'Must we restrain consumption and GDP growth to protect the biosphere, or prioritize industrial expansion?'
    },
    left: {
      label: { hu: 'Ökocentrikus / Növekedéskritikus', en: 'Ecocentric / Degrowth' },
      desc: { hu: 'A Föld eltartóképessége véges; a természet védelme minden rövid távú profitcélt felülír.', en: 'Planetary boundaries are absolute; ecological preservation supersedes GDP growth.' },
      traits: { hu: ['+ Fenntarthatóság', '+ Klímavédelem'], en: ['+ Ecological balance', '+ Long-term survival'] }
    },
    right: {
      label: { hu: 'Produktivista / Növekedéspárti', en: 'Productivist / Pro-Growth' },
      desc: { hu: 'Az energiabőség, az iparosítás és a gazdasági növekedés teremti meg a jólétet és a technológiai megoldásokat.', en: 'Abundant energy, industrial output, and growth generate wealth to solve all problems.' },
      traits: { hu: ['+ Ipari kapacitás', '+ Anyagi bőség'], en: ['+ Industrial output', '+ Material abundance'] }
    }
  },
  {
    id: 'eco_trade',
    category: 'economy',
    eu5Ref: 'Mercantilism vs. Free Trade',
    name: {
      hu: 'Merkantilizmus (Önellátás) vs. Szabadkereskedelem',
      en: 'Mercantilism (Protectionism) vs. Free Trade'
    },
    desc: {
      hu: 'A hazai ipart és munkahelyeket védővámokkal és önellátással kell védeni, vagy a globális szabadkereskedelem a legjobb?',
      en: 'Should domestic industry be shielded via tariffs and strategic autarky, or embraced through global free trade?'
    },
    left: {
      label: { hu: 'Merkantilista / Protekcionista', en: 'Mercantilist / Protectionist' },
      desc: { hu: 'Stratégiai önellátás, helyi ellátási láncok és a hazai termelők védelme a külső függőséggel szemben.', en: 'Protect domestic producers, secure strategic autonomy, and localize supply chains.' },
      traits: { hu: ['+ Gazdasági önállóság', '+ Hazai iparvédelem'], en: ['+ Strategic autonomy', '+ Domestic jobs'] }
    },
    right: {
      label: { hu: 'Globális Szabadkereskedő', en: 'Global Free Trader' },
      desc: { hu: 'A vámok nélküli nemzetközi munkamegosztás és tőkeáramlás mindenkinek olcsóbb és jobb árukat biztosít.', en: 'Open borders for goods and capital maximize comparative advantage and global wealth.' },
      traits: { hu: ['+ Kereskedelmi hatékonyság', '+ Olcsóbb fogyasztás'], en: ['+ Trade efficiency', '+ Consumer choice'] }
    }
  },

  // ============================================================================
  // III. HATALOM, ÁLLAM ÉS STRATÉGIA (POWER, STATE & STRATEGY)
  // ============================================================================
  {
    id: 'pow_lib_auth',
    category: 'power',
    eu5Ref: 'Liberalism vs. Absolutism',
    name: {
      hu: 'Libertarianizmus vs. Abszolutizmus / Etatizmus',
      en: 'Libertarianism vs. Statism / Absolutism'
    },
    desc: {
      hu: 'Az államhatalmat a szükséges minimumra kell korlátozni, vagy erős, fegyelmezett államra van szükség a rend fenntartásához?',
      en: 'Should state power be strictly minimized to protect liberty, or is a strong, commanding state needed for order?'
    },
    left: {
      label: { hu: 'Libertárius / Anti-autoriter', en: 'Libertarian / Anti-Authoritarian' },
      desc: { hu: 'Minden állami kényszer gyanakvással kezelendő; a polgárok szabadságjogai sérthetetlenek.', en: 'State coercion must be minimized; civil liberties and voluntary association come first.' },
      traits: { hu: ['+ Polgári szabadságjogok', '+ Kényszermentesség'], en: ['+ Civil liberties', '+ Resistance to tyranny'] }
    },
    right: {
      label: { hu: 'Etatista / Autoriter (Erős állam)', en: 'Statist / Authoritarian' },
      desc: { hu: 'Az erős központi hatalom, a fegyelem és az államérdek képes csak megvédeni a társadalmat a káosztól.', en: 'A powerful state authority is essential to maintain stability, security, and national purpose.' },
      traits: { hu: ['+ Állami cselekvőképesség', '+ Rend és stabilitás'], en: ['+ State capacity', '+ Internal order'] }
    }
  },
  {
    id: 'pow_dem_tech',
    category: 'power',
    eu5Ref: 'Popular Rule vs. Aristocracy/Technocracy',
    name: {
      hu: 'Közvetlen Demokrácia vs. Technokrácia / Elitizmus',
      en: 'Direct Democracy vs. Technocracy / Elite Rule'
    },
    desc: {
      hu: 'A döntéseket a polgárok közvetlen részvételével kell meghozni, vagy képzett szakértőkre és vezetői elitre kell bízni?',
      en: 'Should decisions be made directly by the citizenry, or entrusted to qualified experts and governing elites?'
    },
    left: {
      label: { hu: 'Részvételi / Közvetlen Demokrata', en: 'Participatory / Direct Democrat' },
      desc: { hu: 'Népszavazások, állampolgári gyűlések és alulról szerveződő önkormányzás szükséges.', en: 'Referendums, citizen assemblies, and bottom-up participation legitimate all power.' },
      traits: { hu: ['+ Demokratikus legitimáció', '+ Állampolgári aktivitás'], en: ['+ Popular legitimacy', '+ Civic engagement'] }
    },
    right: {
      label: { hu: 'Technokrata / Szakértői irányítás', en: 'Technocratic / Epistocratic' },
      desc: { hu: 'A komplex társadalmi-gazdasági kérdésekben a tudományos szakértők és kompetens vezetők döntsenek a populizmus helyett.', en: 'Complex governance requires data-driven experts and competent elites rather than populism.' },
      traits: { hu: ['+ Szakmai hatékonyság', '+ Hosszú távú racionalitás'], en: ['+ Administrative efficiency', '+ Evidence-based policy'] }
    }
  },
  {
    id: 'pow_decent_cent',
    category: 'power',
    eu5Ref: 'Decentralization vs. Centralization',
    name: {
      hu: 'Decentralizáció vs. Centralizáció',
      en: 'Decentralization vs. Centralization'
    },
    desc: {
      hu: 'A hatalom és az erőforrások a helyi közösségeknél és régióknál legyenek, vagy egyetlen erős központból irányítsanak mindent?',
      en: 'Should governance be devolved to local communities and regions, or concentrated in a unified central government?'
    },
    left: {
      label: { hu: 'Decentralizált / Föderalista', en: 'Decentralized / Federalist' },
      desc: { hu: 'Szubszidiaritás: minden döntést a lehető legközelebb kell meghozni az érintett helyi közösségekhez.', en: 'Subsidiarity: local municipalities and autonomous regions know their needs best.' },
      traits: { hu: ['+ Helyi önrendelkezés', '+ Rugalmas alkalmazkodás'], en: ['+ Local autonomy', '+ Regional resilience'] }
    },
    right: {
      label: { hu: 'Centralizált / Egységállami', en: 'Centralized / Unitary' },
      desc: { hu: 'Egységes törvények, központi közigazgatás és koordinált nemzeti stratégia biztosítja a hatékonyságot.', en: 'Unified national administration, standardized laws, and central command maximize efficiency.' },
      traits: { hu: ['+ Közigazgatási hatékonyság', '+ Egységes fellépés'], en: ['+ Administrative unity', '+ Rapid mobilization'] }
    }
  },
  {
    id: 'pow_rehab_punish',
    category: 'power',
    eu5Ref: 'Merciful Justice vs. Harsh Law & Order',
    name: {
      hu: 'Rehabilitáció vs. Megtorlás és Rendpártiság',
      en: 'Rehabilitation vs. Retribution & Law-and-Order'
    },
    desc: {
      hu: 'Az igazságszolgáltatás célja a bűnelkövetők társadalmi visszaillesztése és a megelőzés, vagy a szigorú büntetés és elrettentés?',
      en: 'Should justice focus on rehabilitating offenders and addressing root causes, or on strict punishment and deterrence?'
    },
    left: {
      label: { hu: 'Rehabilitációs / Restoratív', en: 'Rehabilitative / Restorative' },
      desc: { hu: 'A bűnözés gyökerét (szegénység, trauma) kell kezelni; a cél a jóvátétel és a reintegráció.', en: 'Focus on root causes, humane treatment, and reintegrating offenders into society.' },
      traits: { hu: ['+ Alacsonyabb visszaesés', '+ Humanizmus'], en: ['+ Lower recidivism', '+ Humane justice'] }
    },
    right: {
      label: { hu: 'Megtorló / Szigorú rendpárti', en: 'Retributive / Law & Order' },
      desc: { hu: 'A bűnnek kemény és azonnali következménye kell legyen; az áldozatok és a közrend védelme az első.', en: 'Strict sentencing, deterrence, and zero tolerance protect law-abiding citizens.' },
      traits: { hu: ['+ Elrettentő erő', '+ Közbiztonság érzete'], en: ['+ Strong deterrence', '+ Public security'] }
    }
  },
  {
    id: 'pow_concil_bellig',
    category: 'power',
    eu5Ref: 'Conciliatory vs. Belligerent',
    name: {
      hu: 'Békülékeny (Diplomácia) vs. Belligerens (Erőpolitika)',
      en: 'Conciliatory (Diplomacy) vs. Belligerent (Realpolitik)'
    },
    desc: {
      hu: 'A nemzetközi kapcsolatokat a békés kompromisszum és nemzetközi jog, vagy a katonai erő és kemény érdekérvényesítés határozza meg?',
      en: 'Should foreign affairs rely on peaceful diplomacy and international law, or military strength and hard-power Realpolitik?'
    },
    left: {
      label: { hu: 'Békülékeny / Pacifista / Diplomata', en: 'Conciliatory / Diplomatic' },
      desc: { hu: 'A konfliktusokat tárgyalással, szövetségekkel és kölcsönös engedményekkel kell feloldani.', en: 'Peaceful negotiation, multilateral treaties, and de-escalation prevent destructive wars.' },
      traits: { hu: ['+ Diplomáciai bizalom', '+ Béke megőrzése'], en: ['+ Diplomatic reputation', '+ Peace dividend'] }
    },
    right: {
      label: { hu: 'Belligerens / Militarista / Realpolitik', en: 'Belligerent / Realpolitik' },
      desc: { hu: 'A világpolitika erőviszonyokról szól; csak az erős hadsereg és a határozott fellépés garantálja a túlélést.', en: 'Si vis pacem, para bellum: hard power and deterrence secure sovereignty.' },
      traits: { hu: ['+ Katonai elrettentés', '+ Geopolitikai súly'], en: ['+ Military deterrence', '+ Geopolitical leverage'] }
    }
  },

  // ============================================================================
  // IV. KULTÚRA, INNOVÁCIÓ ÉS JÖVŐ (CULTURE, INNOVATION & FUTURE)
  // ============================================================================
  {
    id: 'cul_innov_trad',
    category: 'culture',
    eu5Ref: 'Innovation vs. Traditionalism',
    name: {
      hu: 'Innováció (Progresszió) vs. Tradicionalizmus',
      en: 'Innovation (Progressivism) vs. Traditionalism'
    },
    desc: {
      hu: 'A társadalmi normák és intézmények bátor megújítása, vagy az évszázadok alatt kikristályosodott hagyományok őrzése a helyes út?',
      en: 'Should society boldly reform norms and institutions, or preserve time-tested traditions and ancestral wisdom?'
    },
    left: {
      label: { hu: 'Innovatív / Progresszív', en: 'Innovative / Progressive' },
      desc: { hu: 'A világ változik: az elavult szokásokat le kell bontani, és nyitottnak kell lenni az új társadalmi megoldásokra.', en: 'Embrace social reform, experimentation, and the dismantling of outdated customs.' },
      traits: { hu: ['+ Gyors alkalmazkodás', '+ Reformkészség'], en: ['+ Rapid adaptation', '+ Social reform'] }
    },
    right: {
      label: { hu: 'Tradicionalista / Konzervatív', en: 'Traditionalist / Conservative' },
      desc: { hu: 'A hagyományok nem véletlenül maradtak fenn; a gyökerek feladása erkölcsi és társadalmi széthulláshoz vezet.', en: 'Inherited institutions and customs contain deep wisdom that anchors societal stability.' },
      traits: { hu: ['+ Kulturális folytonosság', '+ Társadalmi stabilitás'], en: ['+ Cultural continuity', '+ Institutional stability'] }
    }
  },
  {
    id: 'cul_human_spirit',
    category: 'culture',
    eu5Ref: 'Humanism vs. Spiritualism',
    name: {
      hu: 'Világi Humanizmus vs. Spiritualizmus / Szakralitás',
      en: 'Secular Humanism vs. Spiritualism / Sacrality'
    },
    desc: {
      hu: 'Az emberi értelem és világi etika elegendő iránytű, vagy a társadalomnak transzcendens, vallási-spirituális alapokra van szüksége?',
      en: 'Are human reason and secular ethics sufficient, or does society need transcendent, spiritual, or religious foundations?'
    },
    left: {
      label: { hu: 'Szekuláris Humanista', en: 'Secular Humanist' },
      desc: { hu: 'A közélet és a törvényhozás legyen teljesen világi; az emberi méltóság és ráció nem igényel vallási dogmákat.', en: 'Public life must be strictly secular; ethics derive from human empathy and reason.' },
      traits: { hu: ['+ Világnézeti semlegesség', '+ Tudományos szemlélet'], en: ['+ Secular neutrality', '+ Critical inquiry'] }
    },
    right: {
      label: { hu: 'Spirituális / Szakrális', en: 'Spiritual / Religious' },
      desc: { hu: 'Az ember több mint anyag: a szentség tisztelete, a hit és a spirituális rend ad értelmet a közösségnek.', en: 'Transcendent meaning, faith, and sacred traditions elevate and bind human civilization.' },
      traits: { hu: ['+ Lelki tartás', '+ Transzcendens közösség'], en: ['+ Spiritual meaning', '+ Moral cohesion'] }
    }
  },
  {
    id: 'cul_auton_norm',
    category: 'culture',
    eu5Ref: 'Personal Autonomy vs. Communal Norms',
    name: {
      hu: 'Életmódbeli Autonómia vs. Közösségi Erkölcs',
      en: 'Lifestyle Autonomy vs. Communal Morality'
    },
    desc: {
      hu: 'A magánéletben, családban és önkifejezésben mindenkinek teljes szabadsága van, vagy a közösségnek védenie kell a normatív erkölcsi mintákat?',
      en: 'Should individuals have total freedom in lifestyle and identity, or should society uphold normative family and moral standards?'
    },
    left: {
      label: { hu: 'Életmódbeli Libertárius / Emancipatorikus', en: 'Emancipatory / Self-Expressive' },
      desc: { hu: 'Amíg másnak nem ártasz, úgy élsz, szeretsz és rendelkezel a saját tested felett, ahogy akarsz.', en: 'Complete bodily and lifestyle autonomy for consenting adults without moral policing.' },
      traits: { hu: ['+ Önkifejezési szabadság', '+ Kisebbségi emancipáció'], en: ['+ Self-expression', '+ Bodily autonomy'] }
    },
    right: {
      label: { hu: 'Normakövető / Erkölcsvédő', en: 'Normative / Family-Centric' },
      desc: { hu: 'A hagyományos családmodell, az önmérséklet és a közerkölcs védelme a társadalom fennmaradásának záloga.', en: 'Upholding traditional family structures and public decency sustains demographic and moral health.' },
      traits: { hu: ['+ Családi stabilitás', '+ Egységes normák'], en: ['+ Family stability', '+ Shared moral norms'] }
    }
  },
  {
    id: 'cul_trans_bio',
    category: 'culture',
    eu5Ref: 'Technological Mastery vs. Natural Order',
    name: {
      hu: 'Transzhumanizmus vs. Biokonzervativizmus',
      en: 'Transhumanism vs. Bioconservatism'
    },
    desc: {
      hu: 'A mesterséges intelligencia és géntechnológia révén lépjük át biológiai korlátainkat, vagy őrizzük meg a természetes emberi létezést?',
      en: 'Should we transcend biological limits via AI, biotech, and augmentation, or preserve natural human existence?'
    },
    left: {
      label: { hu: 'Transzhumanista / Techno-optimista', en: 'Transhumanist / Techno-Optimist' },
      desc: { hu: 'A tudománynak le kell győznie a betegséget, az öregedést és a biológiai korlátokat; a technológia felszabadít.', en: 'Use technology, AI, and bioengineering to overcome aging, disease, and human limitations.' },
      traits: { hu: ['+ Technológiai ugrás', '+ Tudományos áttörések'], en: ['+ Rapid tech acceleration', '+ Human augmentation'] }
    },
    right: {
      label: { hu: 'Biokonzervatív / Természetközpontú', en: 'Bioconservative / Naturalist' },
      desc: { hu: 'Az emberi természet és a teremtett/evolúciós rend megbolygatása beláthatatlan elidegenedéshez vezet.', en: 'Human nature has intrinsic dignity; artificial tampering risks dehumanization and hubris.' },
      traits: { hu: ['+ Természetes harmónia', '+ Technológiai óvatosság'], en: ['+ Natural authenticity', '+ Bio-ethical caution'] }
    }
  },
  {
    id: 'cul_out_in',
    category: 'culture',
    eu5Ref: 'Outward (Extrovert) vs. Inward (Introvert)',
    name: {
      hu: 'Kifelé Forduló (Expanzív) vs. Befelé Forduló (Elmélyülő)',
      en: 'Outward (Expansive) vs. Inward (Contemplative)'
    },
    desc: {
      hu: 'A civilizáció célja az új horizontok meghódítása, felfedezés és terjeszkedés (akár a világűrbe), vagy a belső tökéletesedés és helyi harmónia?',
      en: 'Should civilization strive outward toward exploration, cosmic horizons, and influence, or focus inward on domestic harmony?'
    },
    left: {
      label: { hu: 'Kifelé forduló / Felfedező (Outward)', en: 'Outward / Promethean Explorer' },
      desc: { hu: 'Kíváncsiság, űrkutatás, globális jelenlét és az ismeretlen határainak megállás nélküli kitolása.', en: 'Explore the cosmos, project cultural/scientific vision outward, and push the frontier.' },
      traits: { hu: ['+ Távlati víziók', '+ Felfedező szellem'], en: ['+ Frontier exploration', '+ Ambitious horizon'] }
    },
    right: {
      label: { hu: 'Befelé forduló / Megőrző (Inward)', en: 'Inward / Domestic Perfection' },
      desc: { hu: 'Előbb a saját kertünket és lelkünket műveljük meg; a grandiózus külső kalandok helyett a belső béke a fontos.', en: 'Cultivate our own garden first; prioritize local well-being and internal balance over grand ventures.' },
      traits: { hu: ['+ Belső egyensúly', '+ Helyi fókusz'], en: ['+ Domestic stability', '+ Grounded priorities'] }
    }
  },

  // ============================================================================
  // V. ERKÖLCS ÉS IGAZSÁGELMÉLET (ETHICS & EPISTEMOLOGY)
  // ============================================================================
  {
    id: 'eth_util_deon',
    category: 'ethics',
    eu5Ref: 'Pragmatic Consequentialism vs. Sacred Duty',
    name: {
      hu: 'Utilitarizmus vs. Kötelességetika (Deontológia)',
      en: 'Utilitarianism vs. Deontology (Duty Ethics)'
    },
    desc: {
      hu: 'Egy cselekedet helyességét kizárólag a következményei és hasznossága dönti el, vagy vannak abszolút, áthághatatlan erkölcsi szabályok?',
      en: 'Is an action judged solely by its outcomes and overall utility, or by inviolable moral duties and principles?'
    },
    left: {
      label: { hu: 'Utilitarista / Következményetikus', en: 'Utilitarian / Consequentialist' },
      desc: { hu: 'Az a jó, ami a legtöbb embernek a legnagyobb jólétet vagy a legkevesebb szenvedést okozza.', en: 'Maximize overall well-being and minimize harm; rules are tools, not sacred absolutes.' },
      traits: { hu: ['+ Pragmatikus problémamegoldás', '+ Rugalmas döntések'], en: ['+ Pragmatic trade-offs', '+ Outcome optimization'] }
    },
    right: {
      label: { hu: 'Deontológiai / Elvhű', en: 'Deontological / Principled' },
      desc: { hu: 'A cél sosem szentesíti az eszközt; bizonyos tettek (hazugság, ártatlanok feláldozása) mindig tilosak.', en: 'The ends never justify the means; certain moral duties and rights are inviolable.' },
      traits: { hu: ['+ Erkölcsi kiszámíthatóság', '+ Elvi gerincesség'], en: ['+ Moral integrity', '+ Unshakeable principles'] }
    }
  },
  {
    id: 'eth_rel_abs',
    category: 'ethics',
    eu5Ref: 'Contextual Relativism vs. Moral Absolutism',
    name: {
      hu: 'Morális Relativizmus vs. Morális Abszolutizmus',
      en: 'Moral Relativism vs. Moral Absolutism'
    },
    desc: {
      hu: 'Az erkölcsi igazságok történelmi koroktól és kultúráktól függenek, vagy létezik egyetlen örök, objektív erkölcsi rend?',
      en: 'Are moral truths relative to culture and historical context, or do objective, timeless moral laws exist?'
    },
    left: {
      label: { hu: 'Kontextualista / Relativista', en: 'Contextualist / Relativist' },
      desc: { hu: 'Az erkölcs emberi konstrukció, amely a körülményekkel együtt változik; megértéssel kell vizsgálni az eltérő normákat.', en: 'Morality evolves with context and culture; avoid imposing rigid dogma on complex situations.' },
      traits: { hu: ['+ Empatikus megértés', '+ Dogmamentesség'], en: ['+ Nuanced judgment', '+ Anti-dogmatism'] }
    },
    right: {
      label: { hu: 'Morális Abszolutista', en: 'Moral Absolutist' },
      desc: { hu: 'A Jó és a Rossz objektív valóság, amely nem függ közvélemény-kutatástól vagy korszellemtől.', en: 'Good and Evil are objective realities independent of opinion, era, or cultural fashion.' },
      traits: { hu: ['+ Világos értékrend', '+ Rendíthetetlen mérce'], en: ['+ Clear moral compass', '+ Objective standards'] }
    }
  },
  {
    id: 'eth_emp_int',
    category: 'ethics',
    eu5Ref: 'Empiricism vs. Mysticism/Intuition',
    name: {
      hu: 'Empirizmus (Szkepticizmus) vs. Intuíció és Metafizika',
      en: 'Empiricism (Skepticism) vs. Intuition & Metaphysics'
    },
    desc: {
      hu: 'Csak a mérhető, kísérletileg igazolható tényekre támaszkodhatunk, vagy a belső intuíció és metafizikai belátás is mély igazságot hordoz?',
      en: 'Should we trust only measurable, empirical evidence, or do intuition, lived wisdom, and metaphysics reveal deeper truths?'
    },
    left: {
      label: { hu: 'Empirista / Racionalista', en: 'Empiricist / Rationalist' },
      desc: { hu: 'Tudományos módszertan, adatok és kritikus kételkedés minden nem bizonyított állítással szemben.', en: 'Rely strictly on data, peer-reviewed evidence, and logical falsifiability.' },
      traits: { hu: ['+ Objektív elemzés', '+ Tévedések korrekciója'], en: ['+ Analytical rigor', '+ Error correction'] }
    },
    right: {
      label: { hu: 'Intuitív / Metafizikai', en: 'Intuitive / Metaphysical' },
      desc: { hu: 'A legfontosabb emberi igazságok (szépség, lélek, erkölcs) nem mérhetők laboratóriumban; a belső bölcsesség vezet.', en: 'Not everything that matters can be measured; intuition, art, and philosophical insight guide us.' },
      traits: { hu: ['+ Holisztikus látásmód', '+ Mély jelentéskeresés'], en: ['+ Holistic wisdom', '+ Existential depth'] }
    }
  },
  {
    id: 'eth_qual_quant',
    category: 'ethics',
    eu5Ref: 'Quality vs. Quantity',
    name: {
      hu: 'Befogadó Mennyiség vs. Kiválósági Minőség',
      en: 'Inclusive Quantity vs. Masterwork Quality'
    },
    desc: {
      hu: 'Az oktatásban, kultúrában és intézményekben a széles körű hozzáférhetőség (mennyiség), vagy a szigorú mércéjű csúcsteljesítmény (minőség) a fontosabb?',
      en: 'Should institutions prioritize broad accessibility and mass participation (Quantity), or rigorous excellence and mastery (Quality)?'
    },
    left: {
      label: { hu: 'Széles bázisú / Befogadó (Quantity)', en: 'Broad Access / Inclusive (Quantity)' },
      desc: { hu: 'A tudás, kultúra és lehetőségek legyenek mindenki számára elérhetőek, még ha a belépési küszöb alacsonyabb is.', en: 'Maximize participation, accessibility, and scale so no one is left behind.' },
      traits: { hu: ['+ Tömeges hozzáférés', '+ Társadalmi bázis'], en: ['+ Mass inclusion', '+ Broad capacity'] }
    },
    right: {
      label: { hu: 'Kiválóság-alapú / Elit minőség (Quality)', en: 'Mastery / High Standards (Quality)' },
      desc: { hu: 'Szigorú követelmények, mesteri tökéletesség és kompromisszummentes minőség a középszerűséggel szemben.', en: 'Uphold uncompromising standards, virtuosity, and excellence over mass mediocrity.' },
      traits: { hu: ['+ Csúcsteljesítmény', '+ Magas színvonal'], en: ['+ Peak mastery', '+ Uncompromising quality'] }
    }
  },
  {
    id: 'eth_speech',
    category: 'ethics',
    eu5Ref: 'Unrestricted Expression vs. Harm Prevention',
    name: {
      hu: 'Szólásszabadság Abszolutizmusa vs. Véleménykorlátozás',
      en: 'Free Speech Absolutism vs. Harm-Preventive Speech Limits'
    },
    desc: {
      hu: 'Minden vélemény – még a radikális vagy sértő is – szabadon kimondható legyen, vagy a közösségi béke és méltóság érdekében szükséges a szűrés?',
      en: 'Should all speech—even offensive or radical—be protected, or should harmful speech be restricted to protect dignity and peace?'
    },
    left: {
      label: { hu: 'Szólásszabadság-abszolutista', en: 'Free Speech Absolutist' },
      desc: { hu: 'A cenzúra mindig veszélyesebb, mint a rossz vélemény; az igazság csak szabad vitában derülhet ki.', en: 'Sunlight is the best disinfectant; censorship inevitably becomes a tool of power abuse.' },
      traits: { hu: ['+ Szellemi szabadság', '+ Cenzúramentesség'], en: ['+ Intellectual freedom', '+ Open debate'] }
    },
    right: {
      label: { hu: 'Kárelhárító / Korlátozó', en: 'Harm-Preventive / Regulated Speech' },
      desc: { hu: 'A gyűlöletbeszéd, a dezinformáció és a közösségbomlasztó propaganda ellen jogi és intézményi fellépés kell.', en: 'Society has a duty to curb disinformation, incitement, and attacks on human dignity.' },
      traits: { hu: ['+ Társadalmi béke', '+ Méltóságvédelem'], en: ['+ Civic harmony', '+ Protection from abuse'] }
    }
  },

  // ============================================================================
  // VI. ÉLETFILOZÓFIA ÉS EMBERKÉP (LIFE PHILOSOPHY & HUMAN NATURE)
  // ============================================================================
  {
    id: 'psy_hed_asc',
    category: 'psychology',
    eu5Ref: 'Joyful Abundance vs. Stoic Asceticism',
    name: {
      hu: 'Hedonizmus (Életöröm) vs. Aszkézis (Sztoikus Önmérséklet)',
      en: 'Hedonism (Fulfillment) vs. Asceticism (Stoic Restraint)'
    },
    desc: {
      hu: 'Az élet célja az örömök, élmények és kényelem megélése, vagy az önfegyelem, a lemondás és a belső tartás kimunkálása?',
      en: 'Is the good life found in savoring pleasure, comfort, and rich experiences, or in self-discipline, simplicity, and stoic mastery?'
    },
    left: {
      label: { hu: 'Élményközpontú / Hedonista', en: 'Experiential / Hedonist' },
      desc: { hu: 'Az élet egyszeri: a boldogság, az érzéki és szellemi örömök szabad megélése természetes emberi cél.', en: 'Life is meant to be enjoyed; joy, comfort, and passion are intrinsically valuable.' },
      traits: { hu: ['+ Életkedv és kreativitás', '+ Boldogság-fókusz'], en: ['+ Vitality & joy', '+ Emotional richness'] }
    },
    right: {
      label: { hu: 'Sztoikus / Aszketikus', en: 'Stoic / Ascetic' },
      desc: { hu: 'A vágyak hajszolása függőséghez vezet; a valódi szabadság az önuralomban, a mértékletességben és a kötelességben rejlik.', en: 'True freedom comes from mastering one’s desires, practicing simplicity, and enduring hardship.' },
      traits: { hu: ['+ Lelki ellenállóképesség', '+ Függetlenség a külsőségektől'], en: ['+ Mental resilience', '+ Self-mastery'] }
    }
  },
  {
    id: 'psy_bold_sec',
    category: 'psychology',
    eu5Ref: 'Offensive/Bold vs. Defensive/Cautious',
    name: {
      hu: 'Kockázatvállalás (Offenzív) vs. Biztonságkeresés (Defenzív)',
      en: 'Boldness (Risk-Taking) vs. Security (Precaution)'
    },
    desc: {
      hu: 'A merész, kezdeményező kockázatvállalás és spontaneitás, vagy a megfontolt védekezés, stabilitás és biztonság a bölcsebb stratégia?',
      en: 'Is it wiser to take bold, proactive risks for high rewards (Offensive), or prioritize caution, stability, and defense (Defensive)?'
    },
    left: {
      label: { hu: 'Merész / Kezdeményező (Offensive)', en: 'Bold / Proactive (Offensive)' },
      desc: { hu: 'Aki mer, az nyer: a bizonytalanság lehetőség, a merész lépések viszik előre az egyént és a közösséget.', en: 'Fortune favors the bold; embrace uncertainty and seize initiative before others do.' },
      traits: { hu: ['+ Áttörési potenciál', '+ Gyors reakció'], en: ['+ Breakthrough potential', '+ High initiative'] }
    },
    right: {
      label: { hu: 'Óvatos / Biztonságelvű (Defensive)', en: 'Cautious / Security-First (Defensive)' },
      desc: { hu: 'A már elért eredmények megvédése, a kiszámíthatóság és a vésztartalékok építése fontosabb a hazárdjátéknál.', en: 'Protect what is built, build strong defenses, and avoid reckless gambles.' },
      traits: { hu: ['+ Válságállóság', '+ Kiszámítható jövő'], en: ['+ Crisis resilience', '+ Predictable safety'] }
    }
  },
  {
    id: 'psy_rouss_hobb',
    category: 'psychology',
    eu5Ref: 'Trust in Human Goodness vs. Cynical Realism',
    name: {
      hu: 'Rousseau-i Optimizmus vs. Hobbes-i Realizmus',
      en: 'Rousseauian Optimism vs. Hobbesian Realism'
    },
    desc: {
      hu: 'Az ember alapvetően jó és együttműködő (csak a rossz rendszerek rontják el), vagy alapvetően önző, akit korlátok közt kell tartani?',
      en: 'Are humans innately cooperative and good unless corrupted, or inherently self-interested and in need of strict checks?'
    },
    left: {
      label: { hu: 'Idealista / Emberbarát (Rousseau)', en: 'Idealist / Human-Trusting (Rousseau)' },
      desc: { hu: 'Az emberekben megvan a természetes empátia és jóság; ha felszabadítjuk őket, képesek az önkéntes harmóniára.', en: 'People are naturally empathetic and cooperative when freed from oppressive conditions.' },
      traits: { hu: ['+ Emancipációs hit', '+ Magas bizalom'], en: ['+ High interpersonal trust', '+ Transformative hope'] }
    },
    right: {
      label: { hu: 'Realista / Szkeptikus (Hobbes)', en: 'Realist / Skeptical (Hobbes)' },
      desc: { hu: 'Az emberi természet gyarló és törzsi; erős intézmények, fékek és törvények nélkül eluralkodik az önzés.', en: 'Human nature is flawed and self-interested; without strong institutions, order collapses.' },
      traits: { hu: ['+ Intézményi realizmus', '+ Naivitás elkerülése'], en: ['+ Institutional realism', '+ Guarded pragmatism'] }
    }
  },
  {
    id: 'psy_pres_fut',
    category: 'psychology',
    eu5Ref: 'Immediate Gratification vs. Generational Stewardship',
    name: {
      hu: 'Jelenorientáltság (Carpe Diem) vs. Jövőorientáltság',
      en: 'Present Focus (Carpe Diem) vs. Long-Term Stewardship'
    },
    desc: {
      hu: 'A jelenben élő emberek közvetlen boldogsága és problémái az elsők, vagy áldozatot kell hoznunk a távoli jövő generációiért?',
      en: 'Should we prioritize the immediate well-being of people living today, or sacrifice now for distant future generations?'
    },
    left: {
      label: { hu: 'Jelenorientált / Azonnali jólét', en: 'Present-Focused / Immediate Welfare' },
      desc: { hu: 'Az itt és most élő emberek szenvedését kell enyhíteni és életét jobbá tenni, nem bizonytalan utópiákra várni.', en: 'Solve tangible problems for people alive right now rather than sacrificing the present.' },
      traits: { hu: ['+ Azonnali eredmények', '+ Gyakorlati empátia'], en: ['+ Tangible relief', '+ Present mindfulness'] }
    },
    right: {
      label: { hu: 'Hosszú távú / Generációs építkező', en: 'Long-Term / Generational Steward' },
      desc: { hu: 'Katedrális-gondolkodás: olyan fákat ültetünk, amelyek árnyékában csak az unokáink fognak ülni.', en: 'Cathedral thinking: endure short-term sacrifice to build lasting legacy for future centuries.' },
      traits: { hu: ['+ Történelmi távlat', '+ Fenntartható örökség'], en: ['+ Multi-generational legacy', '+ Strategic patience'] }
    }
  },
  {
    id: 'psy_agency_struct',
    category: 'psychology',
    eu5Ref: 'Systemic Determinism vs. Individual Agency',
    name: {
      hu: 'Rendszerszintű Determinizmus vs. Egyéni Felelősség',
      en: 'Systemic Determinism vs. Individual Agency'
    },
    desc: {
      hu: 'Az egyén sorsát alapvetően a társadalmi-gazdasági körülmények határozzák meg, vagy mindenki a saját szerencséjének a kovácsa?',
      en: 'Are life outcomes mainly shaped by socio-economic structures and environment, or by personal willpower and choices?'
    },
    left: {
      label: { hu: 'Strukturalista / Rendszerszemléletű', en: 'Structuralist / Systemic View' },
      desc: { hu: 'A siker és a kudarc mögött társadalmi egyenlőtlenségek, környezeti hatások és szerencse áll; a rendszert kell javítani.', en: 'Environment, class, and systemic barriers heavily shape human behavior and outcomes.' },
      traits: { hu: ['+ Szociális érzékenység', '+ Rendszerszintű okfeltárás'], en: ['+ Systemic empathy', '+ Root-cause reform'] }
    },
    right: {
      label: { hu: 'Egyéni Akarat / Önerő (Belső kontroll)', en: 'Individual Agency / Free Will' },
      desc: { hu: 'A körülmények ellenére mindenki felelős a döntéseiért; a kitartás és az akarat legyőzi az akadályokat.', en: 'Individuals possess free will and moral responsibility to overcome obstacles through effort.' },
      traits: { hu: ['+ Személyes felelősségvállalás', '+ Küzdőszellem'], en: ['+ Personal accountability', '+ Grit & agency'] }
    }
  }
];
