# 🧭 AXIOM // Emberi Értékrend és Ideológia Szintetizátor

Interaktív, kétnyelvű (**Magyar / Angol**), **GitHub Pages-kompatibilis** (build-mentes) webalkalmazás, amely az emberi világnézetet, politikai-gazdasági meggyőződést, erkölcsi alapállást és életfilozófiát **30 ellentétpár (tengely)** és **6 fő dimenzió** mentén modellezi – az *Europa Universalis V (Societal Values)* és a többdimenziós politikai iránytűk ihletésére.

## ✨ Főbb funkciók
- **30 Értékpár (6 Fő Dimenzióban):** Társadalom, Gazdaság, Hatalom/Stratégia, Kultúra/Jövő, Erkölcs/Igazságelmélet és Életfilozófia/Emberkép (`-100`-tól `+100`-ig terjedő kétoldalas skálán).
- **EU5-stílusú Pólus-Módosítók (Traits):** Minden értékpár két végpontja megmutatja, milyen társadalmi vagy személyiségbeli prioritásokat erősít.
- **16 Előre Definiált Ideológia és Értékrend (Értékhatár-sávokkal):**
  - Minden irányzathoz (pl. *Szociáldemokrata, Klasszikus Liberális, Libertárius, Demokratikus Szocialista, Nemzeti Konzervatív, Kereszténydemokrata, Technokrata, Mélyökológiai Zöld, Transzhumanista, Sztoikus* stb.) tengelyenként tartozik egy **`[min, max]` elfogadott értéktartomány (zóna)**, egy **ideáltípus**, és egy **súlyozás**.
  - A kiválasztott ideológia zónái szaggatott sávként közvetlenül rávetíthetők a saját csúszkáidra, vagy egy gombnyomással be is tölthetők.
- **Élő Egyezési Rangsor:** Valós időben számolja a súlyozott és tartomány-alapú egyezést az összes archetípussal.
- **Dinamikus 2D Iránytű (Custom Compass):** Szabadon kiválasztható bármelyik összesített dimenzió vagy konkrét értékpár az **X** és **Y** tengelyre, az ideológiák 2D-s értékhatár-ellipsziseivel együtt.
- **30 Kérdéses Kalibráló Gyorsteszt:** Szituációs állítások, amelyek automatikusan beállítják a csúszkákat.
- **Megosztás URL-ben (`#v=...`):** Szerver és adatbázis nélkül, egyetlen linkkel megosztható bármilyen egyéni profil.

## 🚀 Futtatás helyileg vagy GitHub Pages-en
Mivel tiszta ES6 modulokat és Tailwind CDN-t használ, nincs szükség `npm build` lépésre:
1. GitHub-ra feltöltve a **Settings → Pages** alatt állítsd be a `main` (vagy `master`) ágat forrásnak, és azonnal működik.
2. Helyi gépen bármilyen statikus webszerverrel elindítható:
   ```bash
   npx serve .
   # vagy Pythonnal:
   python -m http.server 8080
   ```
