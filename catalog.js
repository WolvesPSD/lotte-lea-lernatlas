// Nur fachlich freigegebene Themen; interne Prüfaufgaben und lokale Quellenpfade sind ausgeschlossen.
window.LOTTE_CATALOG = Object.freeze({
  "version": 1,
  "status": "familienversion",
  "subjects": [
    {
      "id": "de",
      "name": "Deutsch",
      "plan": "Gymnasium 2026, Erprobungsfassung; Klasse 7 ab 2026/27",
      "scope": "§ 2.2 Ziele 7/8 bis Ende Klasse 8; Schule bestimmt Themenfolge"
    },
    {
      "id": "ma",
      "name": "Mathematik",
      "plan": "Gymnasium 2026, Erprobungsfassung; Klasse 7 ab 2026/27",
      "scope": "§ 2.2 Ziele bis Ende 8; Prozentrechnung ausdrücklich Klassenstufe 8; schulische Reihenfolge offen"
    },
    {
      "id": "en",
      "name": "Englisch",
      "plan": "Gymnasium 2026, Erprobungsfassung; Klasse 7 ab 2026/27",
      "scope": "erste Fremdsprache, § 2.2 Ziele bis Ende 8; schulische Reihenfolge offen"
    },
    {
      "id": "fr",
      "name": "Französisch",
      "plan": "Gymnasium 2026, Erprobungsfassung; Klasse 7 ab 2026/27",
      "scope": "wahrscheinlich zweite Fremdsprache seit Klasse 6; § 3.2 Ziel A2 Ende 8, individueller Lernstand offen"
    },
    {
      "id": "et",
      "name": "Ethik",
      "plan": "2012 (2025/26)",
      "scope": "7/8; Stand 2026/27 offen"
    },
    {
      "id": "sp",
      "name": "Sport",
      "plan": "2016 (2025/26)",
      "scope": "Jahrgangsgliederung offen"
    },
    {
      "id": "mnt",
      "name": "Mensch–Natur–Technik",
      "plan": "Gymnasium 2026, Erprobungsfassung; Klasse 5 ab 2026/27",
      "scope": "Schulfach im aktuellen Klasse-7-Plan bestätigt; passender Klasse-7-Lehrplanbezug offen"
    },
    {
      "id": "mu",
      "name": "Musik",
      "plan": "2012 (2025/26)",
      "scope": "7/8; Stand 2026/27 offen"
    },
    {
      "id": "ge",
      "name": "Geschichte",
      "plan": "2021 (2025/26)",
      "scope": "7/8; Stand 2026/27 offen"
    },
    {
      "id": "go",
      "name": "Geografie",
      "plan": "2012 (2025/26)",
      "scope": "7/8; Stand 2026/27 offen"
    },
    {
      "id": "mbi",
      "name": "Medienbildung und Informatik",
      "plan": "Gymnasium 2026, Erprobungsfassung; Klasse 7 ab 2026/27, Klasse 8 ab 2027/28",
      "scope": "§ 2.2.1–2.2.6 ausdrücklich Klassenstufe 8; schulische Reihenfolge offen"
    }
  ],
  "topics": [
    {
      "id": "ma-kreisweg",
      "subjectId": "ma",
      "title": "Ein Beet mit rundem Weg",
      "scope": "Ausblick Klasse 8 · freiwillig. Kreisumfang, Kreisfläche und π stehen in § 2.2.10 unter der Zielmarke Klasse 8; Lottes aktuelle Unterrichtsfolge ist unbekannt.",
      "levelStatus": "grade8-outlook",
      "released": true,
      "prerequisite": "Unterscheide Radius und Durchmesser sowie Länge in m und Fläche in m². Du darfst U = π·d = 2π·r und A = π·r² als Formelkartenhilfe nutzen. Für Näherungen gilt hier π ≈ 3,14159; runde Endergebnisse auf zwei Nachkommastellen. Skizzen zeichnest du auf Papier und zeigst sie getrennt zur Sichtprüfung.",
      "introduction": "Ein erfundener Plan zeigt ein kreisrundes Beet mit Radius 3 m. Ein rundum 1 m breiter Weg liegt außerhalb des Beets; seine Breite wird vom Beetrand radial nach außen gemessen. Beide Kreislinien haben denselben Mittelpunkt. Für den mathematisch idealen Weg liegen 24 m² Belag bereit; nur der äußere Wegrand soll eingefasst werden. Einfassung wird in ganzen Metern abgegeben. Zwei andere fiktive Kreise liefern gerundete Anschauungswerte für Umfang und Durchmesser: kleiner Kreis d = 2,00 m, U = 6,28 m; großer Kreis d = 4,00 m, U = 12,57 m. Diese Werte gehören nicht zu Beet und Weg. Rechne exakt mit π und anschließend näherungsweise. Es wird nichts real gebaut oder vermessen. Offene Antworten bleiben ohne automatische Note.",
      "diagram": {
        "path": "assets/ma-rundes-beet.svg",
        "alt": "Schematische Draufsicht: zwei Kreise mit gemeinsamem Mittelpunkt M. Die innere grüne Scheibe ist das Beet; vom Mittelpunkt bis zum Beetrand ist der Radius 3 m. Außen liegt ein blauer Kreisring als Weg, dessen radiale Breite vom Beetrand bis zum äußeren Rand 1 m beträgt. Der äußere Radius ist nicht eingetragen.",
        "caption": "Schematische, proportionale Draufsicht: Beetradius 3 m und radiale Wegbreite 1 m. Kein Druckmaßstab; den äußeren Radius bestimmst du selbst."
      },
      "tasks": [
        {
          "id": "ma-kreisweg-1",
          "kind": "reflection",
          "points": 4,
          "writingLines": 7,
          "prompt": "Plan und Maße (4 Kriterienpunkte): Skizziere auf Papier zwei Kreise mit gemeinsamem Mittelpunkt. Markiere Beet, Weg und äußeren Rand. Gib inneren und äußeren Radius sowie beide Durchmesser an. Warum ist der äußere Radius nicht 3 m + 2 m? Zeige die Skizze getrennt zur Sichtprüfung; ein Textfeld belegt sie nicht.",
          "sample": "Innen r = 3 m, außen r = 3 m + 1 m = 4 m. Die Durchmesser sind 6 m und 8 m. Der Radius wächst nur um die einmal radial gemessene Wegbreite 1 m. Der Durchmesser wächst um 2 m, weil die Breite links und rechts hinzukommt. Beide Kreislinien haben denselben Mittelpunkt; eine schematische Skizze genügt.",
          "criteria": [
            "1 Punkt: innerer Radius 3 m.",
            "1 Punkt: äußerer Radius 4 m mit Wegbreitenbezug.",
            "1 Punkt: innere und äußere Durchmesser 6 m und 8 m.",
            "1 Punkt: Papier-Skizze separat tatsächlich ansehen: gemeinsame Mitte und Unterschied zwischen Radius- und Durchmesserzuwachs; ein App-Textfeld belegt die Zeichnung nicht."
          ]
        },
        {
          "id": "ma-kreisweg-2",
          "kind": "reflection",
          "points": 4,
          "writingLines": 8,
          "prompt": "Warum π? (4 Kriterienpunkte): Teile bei beiden gerundeten Anschauungswerten den Umfang durch den Durchmesser. Vergleiche die Ergebnisse. Erkläre, warum beim idealen Kreis U = π·d gilt und warum die gerundeten Werte π nicht exakt festlegen.",
          "sample": "Kleiner Beispielkreis: 6,28 : 2,00 = 3,14. Großer Beispielkreis: 12,57 : 4,00 = 3,1425. Beide Quotienten liegen nahe bei π ≈ 3,14159. Beim idealen Kreis ist U/d = π; daher U = π·d und mit d = 2r auch U = 2πr. Die angegebenen Umfänge sind gerundet und könnten zusätzlich Messfehler enthalten, also bestimmen ihre Quotienten π nicht exakt.",
          "criteria": [
            "1 Punkt: Quotient 3,14 für den kleinen Beispielkreis.",
            "1 Punkt: Quotient 3,1425 für den großen Beispielkreis.",
            "1 Punkt: gemeinsames ungefähres Verhältnis π und daraus U = π·d erklärt.",
            "1 Punkt: Rundungs- oder Messgrenze für die exakte Bestimmung benannt."
          ]
        },
        {
          "id": "ma-kreisweg-3",
          "kind": "reflection",
          "points": 6,
          "writingLines": 9,
          "prompt": "Zwei Umfänge (6 Kriterienpunkte): Berechne den Umfang des Beetrands und des äußeren Wegrands, jeweils zuerst exakt mit π und dann ungefähr in m. Wie viele ganze Meter Einfassung müssen für die ideale äußere Kreislinie mindestens abgegeben werden? Der innere Rand erhält keine Einfassung.",
          "sample": "Beetrand: U innen = 2π·3 m = 6π m ≈ 18,85 m. Äußerer Rand: U außen = 2π·4 m = 8π m ≈ 25,13 m. Nur außen wird eingefasst. Ganze Meter müssen auf 26 m aufgerundet werden, denn 25 m sind kürzer als die ideale Kreislinie. Verschnitt oder Überlappungen sind nicht eingerechnet.",
          "criteria": [
            "1 Punkt: innerer exakter Umfang 6π m.",
            "1 Punkt: äußerer exakter Umfang 8π m.",
            "1 Punkt: innerer Näherungswert 18,85 m.",
            "1 Punkt: äußerer Näherungswert 25,13 m.",
            "1 Punkt: auf 26 ganze Meter aufgerundet, nicht auf 25 m.",
            "1 Punkt: Längeneinheit und nur äußere Einfassung richtig."
          ]
        },
        {
          "id": "ma-kreisweg-4",
          "kind": "reflection",
          "points": 6,
          "writingLines": 11,
          "prompt": "Wegfläche (6 Kriterienpunkte): Berechne die Beetfläche, die Fläche bis zum äußeren Rand und ihre Differenz als Wegfläche, zuerst exakt mit π und dann ungefähr in m². Erkläre A = π·r² anschaulich: Denke dir den Kreis in viele schmale Sektoren zerlegt und abwechselnd fast rechteckig gelegt. Welche ungefähren Seitenlängen hat diese Form?",
          "sample": "Beet: 9π m² ≈ 28,27 m². Bis außen: 16π m² ≈ 50,27 m². Weg als Kreisring: 16π − 9π = 7π m² ≈ 21,99 m². Viele abwechselnd gelegte schmale Sektoren ergeben annähernd ein Rechteck: Höhe ungefähr r, Grundseite ungefähr halber Umfang U/2 = πr. Darum ist die Fläche ungefähr r·πr = πr²; erst im Grenzgedanken wird die Beziehung exakt.",
          "criteria": [
            "1 Punkt: Beetfläche 9π m².",
            "1 Punkt: äußere Gesamtfläche 16π m².",
            "1 Punkt: Weg als richtige Ringdifferenz 7π m².",
            "1 Punkt: Näherungswert 21,99 m² mit Flächeneinheit.",
            "1 Punkt: Sektor- und Fast-Rechteckvorstellung erläutert.",
            "1 Punkt: Höhe r, Grundseite U/2 = πr und daraus A = πr² verständlich verbunden. Gleichwertige Veranschaulichungen gelten."
          ]
        },
        {
          "id": "ma-kreisweg-5",
          "kind": "reflection",
          "points": 6,
          "writingLines": 10,
          "prompt": "Zwei Fehler und eine Entscheidung (6 Kriterienpunkte): Prüfe: „Der Weg ist 1 m breit, also hat er die Fläche π·1² m².“ Und: „Der äußere Radius ist 4 m, also ist der äußere Umfang 4π m.“ Korrigiere beide mit Rechnung. Reichen 24 m² Belag für die ideale Wegfläche? Warum ist das noch keine sichere Materialzusage für eine echte Baustelle? Runde für den Vergleich erst am Schluss.",
          "sample": "π·1² beschreibt einen eigenen Kreis mit Radius 1 m, nicht den Ring um das Beet. Der Ring hat 7π m² ≈ 21,99 m². Beim Umfang fehlt in 4π m der Faktor 2: U außen = 2π·4 m = 8π m. Im idealen Flächenmodell gilt 7π m² < 24 m²; rechnerisch bleiben 24 − 7π ≈ 2,01 m². Zuschnitt, Fugen und Verlust sind nicht quantifiziert, deshalb folgt daraus keine reale Materialzusage.",
          "criteria": [
            "2 Punkte: ersten Satz als falsches Ringmodell erklärt und 7π m² korrigiert.",
            "2 Punkte: fehlenden Faktor 2 im zweiten Satz erklärt und 8π m korrigiert.",
            "1 Punkt: 7π m² < 24 m² mit ausreichend genauer Rechnung oder exaktem Vergleich.",
            "1 Punkt: konkrete reale Materialgrenze ohne erfundene Verlustquote benannt."
          ]
        }
      ],
      "releaseEvidence": {
        "validFor": "2027/28",
        "gradeBand": "8",
        "competencyRef": "PDF-S. 2: Inkraftsetzung 2026/27 für Klasse 7, 2027/28 für Klasse 8. § 2.2.10, PDF-S. 30 unter „Klassenstufe 8“: π als Umfang-Durchmesser-Verhältnis, Umfangs- und Flächenformeln anschaulich erklären und anwenden, Einheiten und sinnvolle Rundung.",
        "checkedAt": "2026-10-21"
      }
    },
    {
      "id": "ma-reelle-zahlen",
      "subjectId": "ma",
      "title": "Quadratplatten, Wurzeln und Würfel",
      "scope": "Ausblick Klasse 8 · freiwillig. Quadrat- und Kubikwurzeln sowie irrationale Zahlen stehen in § 2.2.9 unter der Zielmarke Klasse 8. Lottes aktueller Unterrichtsstoff ist unbekannt.",
      "levelStatus": "grade8-outlook",
      "released": true,
      "prerequisite": "Du brauchst A = s² für Quadrate, V = a³ für Würfel, Dezimalzahlen und Runden. √x bezeichnet für x ≥ 0 die nichtnegative Zahl, deren Quadrat x ist. „Exakt“ heißt ohne Rundungsverlust; eine Näherung ist nur ungefähr gleich. Rational heißt als Bruch ganzer Zahlen darstellbar, irrational heißt nicht so darstellbar. Ein Taschenrechner darf Dezimalprodukte kontrollieren, ersetzt aber keine Begründung.",
      "introduction": "Eine erfundene Ausstellung verwendet zwei quadratische Platten. A hat genau 2 dm² Fläche, B genau 8 dm² Fläche. Daneben stehen zwei ideale Würfel mit genau 27 dm³ und 64 dm³ Volumen. Rechne mit diesen Angaben; ein Bildschirmbild wäre nicht maßstabsgetreu. Schreibe Rechenweg, Einheiten und Unterschied zwischen exaktem Wert und Näherung auf. Offene Antworten werden nicht automatisch benotet.",
      "tasks": [
        {
          "id": "ma-reelle-zahlen-1",
          "kind": "reflection",
          "points": 5,
          "writingLines": 8,
          "prompt": "Exakte Seiten (5 Kriterienpunkte): Gib die Seitenlängen beider Platten zuerst als Wurzelausdruck mit dm an. Zeige mit den Flächen, weshalb die Seite von B doppelt so lang wie die von A ist. Schreibe die exakte Gleichung zwischen den Wurzeln auf. Weshalb ist 8 dm² nicht selbst eine Seitenlänge?",
          "sample": "s_A² = 2 dm², also s_A = √2 dm. s_B² = 8 dm², also s_B = √8 dm. Weil 8 = 4·2 und (2√2)² = 8, gilt √8 = 2√2. B hat viermal die Fläche und deshalb bei quadratischer Form die doppelte Seite. 8 dm² misst Fläche; eine Seite braucht dm. 8 dm als Seite ergäben 64 dm².",
          "criteria": [
            "1 Punkt: √2 dm als Länge von A.",
            "1 Punkt: √8 dm als Länge von B.",
            "1 Punkt: √8 = 2√2 korrekt und exakt begründet.",
            "1 Punkt: vierfache Quadratfläche führt zur doppelten Seitenlänge.",
            "1 Punkt: dm² von dm unterschieden; 8 dm² ist keine Länge."
          ]
        },
        {
          "id": "ma-reelle-zahlen-2",
          "kind": "reflection",
          "points": 7,
          "writingLines": 11,
          "prompt": "Schranken statt voreiligem Runden (7 Kriterienpunkte): Gegeben sind 1,414² = 1,999396 und 1,415² = 2,002225. Schließe daraus eine untere und obere Schranke für √2. Runde dann die Seiten von A und B auf Hundertstel dm; nutze für B erst den exakten Zusammenhang aus Aufgabe 1. Weshalb führt 2·1,41 = 2,82 hier zum falschen Hundertstelwert für B? Quadriere die beiden gerundeten Längen zurück und vergleiche mit 2 dm² und 8 dm².",
          "sample": "1,999396 < 2 < 2,002225; bei nichtnegativen Längen folgt 1,414 < √2 < 1,415. Daher ist A auf Hundertstel 1,41 dm. Aus √8 = 2√2 folgt 2,828 < √8 < 2,830; B rundet zu 2,83 dm. Erst 1,41 zu runden und dann zu verdoppeln verliert die Information oberhalb 1,414: 2,82 ist hier falsch gerundet. Rückproben: 1,41² = 1,9881 dm² und 2,83² = 8,0089 dm². Beide sind wegen Rundung nur nahe bei den exakten Flächen.",
          "criteria": [
            "2 Punkte: aus beiden Quadratvergleichen die Schranke 1,414 < √2 < 1,415 begründet.",
            "1 Punkt: A = 1,41 dm auf Hundertstel.",
            "2 Punkte: B aus 2√2 mit Schranke 2,828 < √8 < 2,830 zu 2,83 dm gerundet.",
            "1 Punkt: Informationsverlust durch vorzeitiges Runden zu 2·1,41 erklärt.",
            "1 Punkt: beide Rückquadrate 1,9881 dm² und 8,0089 dm² als Näherungen eingeordnet."
          ]
        },
        {
          "id": "ma-reelle-zahlen-3",
          "kind": "reflection",
          "points": 4,
          "writingLines": 8,
          "prompt": "Zahlbereiche (4 Kriterienpunkte): Für diese Aufgabe ist der Satz „√2 ist irrational“ gegeben; du musst ihn nicht beweisen. Ordne 1,41 und √2 als rational oder irrational ein. Begründe aus √8 = 2√2, weshalb auch √8 irrational ist. Warum kann die exakte Seite von A nicht als Bruch ganzer Zahlen geschrieben werden? Eine lange Taschenrechneranzeige allein ist kein Beweis.",
          "sample": "1,41 = 141/100 ist rational. √2 ist laut Vorgabe irrational. Wäre √8 = 2√2 rational, wäre durch Teilen durch 2 auch √2 rational; das widerspricht der Vorgabe. Die exakte Seite √2 dm braucht deshalb eine irrationale Zahl. 1,41 dm ist nur eine rationale Näherung.",
          "criteria": [
            "1 Punkt: 1,41 = 141/100 rational.",
            "1 Punkt: √2 gemäß gegebener Aussage irrational.",
            "1 Punkt: √8 über Division durch 2 und Widerspruch als irrational begründet.",
            "1 Punkt: exakten √2-Wert von rationaler Näherung getrennt; keine Rechneranzeige als Beweis benutzt."
          ]
        },
        {
          "id": "ma-reelle-zahlen-4",
          "kind": "reflection",
          "points": 5,
          "writingLines": 8,
          "prompt": "Wurzelregel prüfen (5 Kriterienpunkte): Berechne √2 · √8 exakt auf zwei sinnvolle Weisen. Jemand behauptet √(9+16) = √9 + √16. Berechne beide Seiten dieser Behauptung getrennt und erkläre den Fehler. Die Produktregel, die du nutzt, gilt hier für nichtnegative Zahlen.",
          "sample": "Weg 1: √2·√8 = √(2·8) = √16 = 4. Weg 2: √8 = 2√2, also √2·√8 = 2(√2)² = 4. Für die Behauptung ist links √25 = 5, rechts 3+4 = 7. Da 5 ≠ 7, darf man die Wurzel nicht über eine Summe verteilen. Hier wurde die Produktregel für nichtnegative Radikanden verwendet.",
          "criteria": [
            "2 Punkte: Produktregel korrekt auf √(2·8) angewendet und Ergebnis 4.",
            "1 Punkt: zweiter Weg über 2(√2)² mit Ergebnis 4.",
            "1 Punkt: beide Seiten der falschen Gleichung separat als 5 und 7 berechnet.",
            "1 Punkt: Summenfehler erklärt und vom gültigen Produktfall unterschieden."
          ]
        },
        {
          "id": "ma-reelle-zahlen-5",
          "kind": "reflection",
          "points": 4,
          "writingLines": 7,
          "prompt": "Würfelkanten (4 Kriterienpunkte): Bestimme die exakten Kantenlängen der Würfel mit 27 dm³ und 64 dm³ Volumen. Zeige für jede Kante eine Potenzprobe samt Einheit. Warum ist die Quadratwurzel hier die falsche Umkehrung?",
          "sample": "Aus a³ = 27 dm³ folgt a = ∛(27 dm³) = 3 dm; (3 dm)³ = 27 dm³. Aus a³ = 64 dm³ folgt a = ∛(64 dm³) = 4 dm; (4 dm)³ = 64 dm³. Die dritte Potenz wird durch die Kubikwurzel umgekehrt; die Quadratwurzel kehrt eine zweite Potenz um.",
          "criteria": [
            "2 Punkte: 3 dm für 27 dm³ und Potenzprobe (3 dm)³ = 27 dm³.",
            "1 Punkt: 4 dm für 64 dm³ und Potenzprobe (4 dm)³ = 64 dm³.",
            "1 Punkt: dritte Potenz und Kubikwurzel gegenüber Quadratwurzel richtig erklärt."
          ]
        }
      ],
      "releaseEvidence": {
        "validFor": "2027/28",
        "gradeBand": "8",
        "competencyRef": "PDF-S. 2: Fassung ab 2026/27 für Klasse 7 und ab 2027/28 für Klasse 8. § 2.2.9, PDF-S. 30, unter „Klassenstufe 8“: Quadrat- und Kubikwurzeln, irrationale Zahlen, Rechengesetze und kritische Kontrolle von Ergebnissen.",
        "checkedAt": "2026-10-21"
      }
    },
    {
      "id": "ma-prismenbox",
      "subjectId": "ma",
      "title": "Eine dreieckige Prisma-Box planen",
      "scope": "Ausblick Klasse 8 · freiwillig. Gerade Prismen, Netze, Oberfläche und Volumen sind ein Ende-8-Ziel in § 2.2.7; Lottes aktueller Unterrichtsstoff ist unbekannt.",
      "levelStatus": "grade8-outlook",
      "released": true,
      "prerequisite": "Hilfreich sind Rechteck- und rechtwinklige Dreiecksflächen, Maßstab 1:2 und die Einheiten cm², cm³, ml und m². Für das Netz brauchst du kariertes Papier; der Satz des Pythagoras wird nicht vorausgesetzt.",
      "introduction": "Eine erfundene Werkstatt plant eine geschlossene, gerade dreieckige Prisma-Box. Die zwei gleichen, parallelen Dreiecke haben einen rechten Winkel; ihre Katheten sind 6 cm und 8 cm lang, die dritte Seite ist mit 10 cm vorgegeben. Die drei Kanten dazwischen sind je 15 cm lang und stehen senkrecht auf den Dreiecksflächen. Rechne zuerst mit einer idealen Box ohne Wandstärke, Klebelaschen oder Schnittverlust. Für das maßstäbliche Netz nutze kariertes Papier; schreibe online deine Maße und Faltbegründung auf. Offene Antworten werden nicht automatisch benotet.",
      "tasks": [
        {
          "id": "ma-prismenbox-1",
          "kind": "reflection",
          "points": 4,
          "writingLines": 6,
          "prompt": "Körper erkennen (4 Kriterienpunkte): Woran erkennst du ein gerades dreieckiges Prisma? Wie viele Flächen, Kanten und Ecken hat es? Nenne die Formen seiner Flächen und erkläre deine Zählung.",
          "sample": "Zwei kongruente, parallele Dreiecke sind durch drei senkrechte Kanten verbunden: ein gerades Prisma. Es hat 5 Flächen (2 Dreiecke, 3 Rechtecke), 9 Kanten (3 an jedem Dreieck und 3 Verbindungen) und 6 Ecken (je 3 am Dreieck).",
          "criteria": [
            "1 Punkt: gerade Form über parallele gleiche Dreiecke und senkrechte Verbindungen begründet.",
            "1 Punkt: zwei Dreiecke und drei Rechtecke.",
            "1 Punkt: fünf Flächen und sechs Ecken richtig.",
            "1 Punkt: neun Kanten nachvollziehbar gezählt."
          ]
        },
        {
          "id": "ma-prismenbox-2",
          "kind": "reflection",
          "points": 7,
          "writingLines": 10,
          "prompt": "Netz im Maßstab 1:2 (7 Kriterienpunkte): Zeichne auf kariertem Papier ohne Klebelaschen drei zusammenhängende Mantelrechtecke. Ihre Originalbreiten sind 6, 8 und 10 cm; jedes ist 15 cm lang. Hänge an die beiden 8-cm-Kanten des mittleren Rechtecks je ein passendes 6–8–10-Dreieck. Beschrifte Original- und Zeichenmaße, markiere Falt- und Schnittkanten unterschiedlich und prüfe auf Überlappung. Notiere hier die halbierten Maße und erkläre, welche Kanten beim Falten zusammenkommen. Ein anderes korrektes Netz ist erlaubt. Zeige die Papierzeichnung zur separaten Prüfung; das Textfeld ersetzt sie nicht.",
          "sample": "Ein mögliches Netz hat einen Streifen aus Rechtecken 3×7,5 cm, 4×7,5 cm und 5×7,5 cm. Oben und unten am mittleren Rechteck hängen Dreiecke mit gezeichneten Seiten 3, 4 und 5 cm an den 4-cm-Kanten. Sie liegen außerhalb des Streifens und überlappen ihn nicht. Die drei Mantelrechtecke treffen an Faltkanten aufeinander; die freien seitlichen Streifenenden bilden die Mantelnaht. Die freien 3- und 5-cm-Dreieckskanten treffen auf die passenden freien Kanten der benachbarten Rechtecke. Außenkanten sind Schnittkanten. Spiegelung und andere passende Netze gelten.",
          "criteria": [
            "2 Punkte: alle drei Mantelrechtecke mit halbierten Breiten 3/4/5 cm und Länge 7,5 cm.",
            "1 Punkt: zwei passende Dreiecke mit Seiten 3/4/5 cm.",
            "1 Punkt: zusammenhängender Streifen.",
            "1 Punkt: Dreiecke passend angesetzt, ohne Überlappung.",
            "1 Punkt: Original- und Zeichenmaße an der Papierzeichnung erkennbar.",
            "1 Punkt: Falt- und Schnittkanten sowie die zusammenkommenden Kanten richtig erklärt. Die Papierzeichnung separat ansehen; ein ausgefülltes App-Textfeld belegt ihre Ausführung nicht."
          ]
        },
        {
          "id": "ma-prismenbox-3",
          "kind": "reflection",
          "points": 5,
          "writingLines": 8,
          "prompt": "Oberfläche (5 Kriterienpunkte): Berechne die Fläche eines Dreiecks und die Summe der drei Mantelrechtecke. Wie groß ist die gesamte Oberfläche der geschlossenen idealen Box in cm²? Warum kommt die Dreiecksfläche zweimal vor?",
          "sample": "Dreieck G = 6·8÷2 = 24 cm². Mantel = 6·15 + 8·15 + 10·15 = 90+120+150 = 360 cm². Boden und Deckel sind je ein Dreieck: O = 2·24+360 = 408 cm².",
          "criteria": [
            "1 Punkt: Dreiecksfläche halbiert zu 24 cm².",
            "1 Punkt: drei rechteckige Seitenflächen richtig angesetzt.",
            "1 Punkt: Mantel 360 cm².",
            "1 Punkt: beide Dreiecke addiert zu 408 cm².",
            "1 Punkt: cm² und Boden/Deckel erklärt."
          ]
        },
        {
          "id": "ma-prismenbox-4",
          "kind": "reflection",
          "points": 5,
          "writingLines": 8,
          "prompt": "Rauminhalt als Gedankenmodell (5 Kriterienpunkte): Berechne das ideale Volumen in cm³ und ml. Würden rechnerisch 300 ml hineinpassen, und wie viel Platz bliebe idealerweise frei? Nenne eine Grenze für einen wirklich gebauten Karton. Führe keinen Füllversuch mit Flüssigkeit durch.",
          "sample": "G = 24 cm²; V = G·15 cm = 360 cm³ = 360 ml. Im idealen Modell bleiben nach 300 ml rechnerisch 60 ml frei. Wandstärke und Innenmaße können den nutzbaren Raum verändern; gewöhnlicher Karton ist zudem nicht als wasserdicht belegt. Eine praktische Füllbarkeit ist nicht nachgewiesen.",
          "criteria": [
            "1 Punkt: Dreiecksfläche als Querschnitt verwendet.",
            "1 Punkt: mit 15 cm multipliziert.",
            "1 Punkt: 360 cm³ mit kubischer Einheit.",
            "1 Punkt: 360 ml und rechnerisch 60 ml Rest.",
            "1 Punkt: reale Grenze der Modellübertragung benannt."
          ]
        },
        {
          "id": "ma-prismenbox-5",
          "kind": "reflection",
          "points": 4,
          "writingLines": 8,
          "prompt": "Kartonbedarf schätzen (4 Kriterienpunkte): Für 12 Boxen werden zuerst die idealen Oberflächen addiert. Danach gibt die Werkstatt 15 % Zuschlag für Laschen und Verschnitt vor. Berechne die Schätzung in cm² und m². Reicht die Flächenzahl allein, um zu wissen, ob ein bestimmter rechteckiger Kartonbogen für alle Netze ausreicht?",
          "sample": "12·408 = 4896 cm²; 15 % davon sind 734,4 cm². Zusammen 5630,4 cm² = 0,56304 m². Die Zahl allein beweist nicht, dass die Netze in Form und Anordnung auf einen bestimmten Bogen passen; 15 % sind nur die vorgegebene Reserve.",
          "criteria": [
            "1 Punkt: zwölf ideale Oberflächen = 4896 cm².",
            "1 Punkt: 15 % = 734,4 cm² oder direkter Faktor 1,15.",
            "1 Punkt: 5630,4 cm² und 0,56304 m².",
            "1 Punkt: Form-/Zuschnittgrenze erklärt."
          ]
        },
        {
          "id": "ma-prismenbox-6",
          "kind": "reflection",
          "points": 2,
          "writingLines": 5,
          "prompt": "Denkfehler finden (2 Kriterienpunkte): Jemand sagt: „Die Box fasst 360 cm³, also reichen 360 cm² Karton.“ Warum folgt das nicht? Wie groß ist die Summe der sechs Außenflächen im idealen Modell ohne Laschen und Verluste?",
          "sample": "cm³ misst Raum, cm² Fläche. Die gleiche Zahl 360 ergibt hier zufällig auch die Mantelfläche; Boden und Deckel zu je 24 cm² fehlen. Die gesamte ideale Oberfläche beträgt 408 cm².",
          "criteria": [
            "1 Punkt: Fläche und Volumen samt Einheiten klar getrennt.",
            "1 Punkt: beide Dreiecke ergänzt und 408 cm² angegeben."
          ]
        }
      ],
      "releaseEvidence": {
        "validFor": "2027/28",
        "gradeBand": "8",
        "competencyRef": "PDF-S. 2: Fassung 2026/27 für Klasse 7, 2027/28 für Klasse 8. § 2.2.7, PDF-S. 28–29, unter „Klassenstufe 8“: gerade Prismen, maßstäbliche Netze, Oberfläche, Volumen und Einheiten.",
        "checkedAt": "2026-10-21"
      }
    },
    {
      "id": "ma-ausstellungsflaeche",
      "subjectId": "ma",
      "title": "Eine sechseckige Fläche planen",
      "scope": "Ausblick Klasse 8 · freiwillig. Flächeninhalt und Umfang von Drei- und Vierecken stehen in § 2.2.5 unter der Zielmarke Klasse 8; kein Nachweis von Lottes aktuellem Klasse-7-Unterricht.",
      "levelStatus": "grade8-outlook",
      "released": true,
      "prerequisite": "Hilfreich sind ein Koordinatengitter, Rechteck- und Dreiecksflächen sowie die Unterscheidung von Umfang und Fläche. Zeichne auf Papier mit, wenn du Höhen und Zerlegung besser erkennen möchtest; ein einfacher Taschenrechner darf den Preis kontrollieren.",
      "introduction": "Eine erfundene Projektgruppe plant auf einem ebenen Hof eine sechseckige Ausstellungsfläche. Im maßhaltigen Plan entspricht jede Koordinateneinheit 1 m. Der äußere Rand verläuft A(0|0) → B(12|0) → C(12|4) → D(9|8) → E(3|8) → F(0|4) → A. Die schrägen Außenkanten CD und EF sind je 5 m lang. Auf AB bleibt ein 2 m breites Tor ohne Zaun; jeder benötigte Zaunmeter kostet 8,50 €. Die Hilfslinie FC darfst du einzeichnen, sie wird aber nicht eingezäunt. Die zweite Figur ist ein getrenntes Parallelogramm mit P(0|0), Q(6|0), R(9|4), S(3|4); die schräge Seite PS ist 5 m lang. Online kannst du eine Skizze in Worten beschreiben; für Zeichnungen nutze das Kinderblatt oder kariertes Papier. Zeige Rechenschritte und Einheiten. Offene Antworten werden nicht automatisch benotet.",
      "diagram": {
        "path": "assets/ma-ausstellungsflaeche.svg",
        "alt": "Maßhaltige Koordinatengitter: links Sechseck A 0,0 B 12,0 C 12,4 D 9,8 E 3,8 F 0,4; rechts getrenntes Parallelogramm P 0,0 Q 6,0 R 9,4 S 3,4. Ein Rasterabstand ist ein Meter. FC und Höhen sind nicht markiert.",
        "caption": "Zwei getrennte, maßhaltige Pläne. Ein kleiner Rasterabstand entspricht 1 m; ergänze Hilfslinie und senkrechte Höhen selbst."
      },
      "tasks": [
        {
          "id": "ma-ausstellungsflaeche-1",
          "kind": "reflection",
          "points": 3,
          "writingLines": 6,
          "prompt": "Plan und Höhen (3 Kriterienpunkte): Prüfe die Reihenfolge der sechs Randpunkte. Zeichne FC und beide senkrechten Höhen auf einer Papierskizze ein oder beschreibe ihre Lage. Wie hoch sind unteres Rechteck und oberes Trapez? Warum ist die schräge 5-m-Kante keine Trapezhöhe?",
          "sample": "A–B–C–D–E–F–A bildet den Rand. FC verbindet F(0|4) waagerecht mit C(12|4) im Inneren. Das untere Rechteck reicht von y=0 bis y=4, also 4 m. Das obere Trapez liegt zwischen FC bei y=4 und ED bei y=8, ebenfalls 4 m hoch. CD und EF sind schräg und daher nicht der senkrechte Abstand der parallelen Seiten.",
          "criteria": [
            "1 Punkt: alle sechs Randpunkte in korrekter Reihenfolge; Skizze oder klare Beschreibung.",
            "1 Punkt: FC innen waagerecht bei y=4 sowie beide senkrechten Höhen mit je 4 m.",
            "1 Punkt: 5 m als schräge Seite statt senkrechter Trapezhöhe erklärt. Kleine Strichungenauigkeit bei Papierzeichnung ist kein Fehler."
          ]
        },
        {
          "id": "ma-ausstellungsflaeche-2",
          "kind": "reflection",
          "points": 8,
          "writingLines": 11,
          "prompt": "Fläche auf zwei Wegen (8 Kriterienpunkte): Berechne (a) unteres Rechteck plus oberes Trapez und (b) umschließendes 12×8-m-Rechteck minus zwei Eckdreiecke. Erkläre an einem 3×4-m-Eckdreieck, warum seine Fläche halb so groß wie das passende Rechteck ist. Stimmen beide Ergebnisse überein?",
          "sample": "Unten: 12·4 = 48 m². Oben: (12+6)÷2·4 = 36 m²; auch 6·4 + 2·(3·4÷2) = 36 m². Ein Eckdreieck nimmt genau die Hälfte eines 3×4-Rechtecks ein und hat 6 m². Zusammen 48+36 = 84 m². Kontrollweg: 12·8 = 96 m² minus zwei fehlende Eckdreiecke zu je 6 m² = 84 m². Beide Zerlegungen stimmen.",
          "criteria": [
            "2 Punkte: unteres Rechteck 12·4 = 48 m² mit passender Begründung und Einheit.",
            "2 Punkte: oberes Trapez 36 m² aus passender Zerlegung oder Formel mit senkrechter Höhe 4 m.",
            "1 Punkt: ein 3×4-m-Eckdreieck als Hälfte seines Rechtecks begründet und mit 6 m² berechnet.",
            "2 Punkte: umschließendes Rechteck 96 m² minus zweimal 6 m² als zweiter Weg.",
            "1 Punkt: beide Wege ergeben dieselben 84 m². Andere vollständig begründete, überlappungsfreie Zerlegungen gelten."
          ]
        },
        {
          "id": "ma-ausstellungsflaeche-3",
          "kind": "reflection",
          "points": 5,
          "writingLines": 8,
          "prompt": "Rand und Kosten (5 Kriterienpunkte): Addiere die äußeren Kanten zu einem Umfang. Wie viele Meter Zaun sind nach dem 2-m-Tor nötig, und was kostet er? Warum zählt FC nicht mit? Nenne die verschiedenen Einheiten von Umfang und Fläche.",
          "sample": "AB+BC+CD+DE+EF+FA = 12+4+5+6+5+4 = 36 m Umfang. FC ist eine innere Hilfslinie, keine Außenkante. Zaun: 36−2 = 34 m. Preis: 34·8,50 € = 289,00 €. Umfang und Zaunlänge stehen in m, Flächeninhalt in m².",
          "criteria": [
            "1 Punkt: alle sechs äußeren Seiten vollständig und ohne FC zusammengestellt.",
            "1 Punkt: Umfang 36 m.",
            "1 Punkt: Zaunlänge 34 m nach Abzug des Tores.",
            "1 Punkt: Preis 289,00 €.",
            "1 Punkt: FC als innere Linie begründet und m gegenüber m² passend unterschieden."
          ]
        },
        {
          "id": "ma-ausstellungsflaeche-4",
          "kind": "reflection",
          "points": 4,
          "writingLines": 7,
          "prompt": "Transfer zur zweiten Figur (4 Kriterienpunkte): Berechne den Flächeninhalt des getrennten Parallelogramms PQRS. Welche Grundseite und welche senkrechte Höhe verwendest du? Erkläre, weshalb 6 m · 5 m trotz der 5-m-Seite PS falsch wäre. Eine Zerlegung und Verschiebung ist erlaubt.",
          "sample": "PQ ist 6 m lang; der senkrechte Abstand zu SR zwischen y=0 und y=4 beträgt 4 m. Fläche: 6·4 = 24 m². Die 5-m-Seite PS ist schräg und nicht die Höhe. Man kann das linke Dreieck abschneiden und rechts ansetzen; so entsteht ein 6×4-m-Rechteck mit derselben Fläche.",
          "criteria": [
            "1 Punkt: Grundseite PQ = 6 m.",
            "1 Punkt: senkrechte Höhe 4 m aus y=0 und y=4.",
            "1 Punkt: Fläche 24 m².",
            "1 Punkt: 5 m als schräge, nicht senkrechte Seite erklärt oder gleichwertiges Umlegeargument."
          ]
        },
        {
          "id": "ma-ausstellungsflaeche-5",
          "kind": "reflection",
          "points": 4,
          "writingLines": 7,
          "prompt": "Zwei Denkfehler (4 Kriterienpunkte): Lin rechnet für die Hauptfläche 12·4 + (12+6)÷2·5 = 93 m² und zählt FC zusätzlich zum äußeren Zaunrand. Erkläre beide Fehler und gib den richtigen Flächeninhalt und Umfang an.",
          "sample": "Lin nimmt beim Trapez die schräge 5-m-Seite statt der senkrechten Höhe 4 m; richtig sind 48+36 = 84 m². FC liegt innerhalb der Figur und ist keine Außenkante; richtig ist 36 m Umfang. Mit dem Tor wären 34 m Zaun nötig.",
          "criteria": [
            "1 Punkt: falsche 5-m-Trapezhöhe als Fehler erklärt.",
            "1 Punkt: FC als innere, nicht äußere Linie erklärt.",
            "1 Punkt: Fläche zu 84 m² korrigiert.",
            "1 Punkt: äußerer Umfang zu 36 m korrigiert. Zahlen allein ohne Fehlererklärung genügen nicht für die Erklärpunkte."
          ]
        }
      ],
      "releaseEvidence": {
        "validFor": "2027/28",
        "gradeBand": "8",
        "competencyRef": "PDF-S. 2: Mathematik für Klasse 7 ab 2026/27, für Klasse 8 ab 2027/28. § 2.2.5 auf PDF-S. 27 unter „Klassenstufe 8“: Flächen und Umfänge von Dreieck, Parallelogramm, Trapez und zusammengesetzten Figuren, Formelbegründung und sinnvolle Einheiten.",
        "checkedAt": "2026-10-21"
      }
    },
    {
      "id": "ma-experimentierkaesten-terme",
      "subjectId": "ma",
      "title": "Zwei Preise mit Termen vergleichen",
      "scope": "Ausblick Klasse 8 · freiwillig. Terme und Gleichungen sind im gültigen Mathematikplan ein Ziel bis Ende Klasse 8; Lottes aktuelle Unterrichtsfolge ist unbekannt. Kein Beitrag zur belegten Klasse-7-Jahresabdeckung.",
      "levelStatus": "grade8-outlook",
      "released": true,
      "prerequisite": "Hilfreich sind Dezimalzahlen, einfache Variablen und gleiche Rechenoperationen auf beiden Gleichungsseiten. Du kannst mit der Tabelle beginnen und die Gleichung danach bearbeiten.",
      "introduction": "Ein erfundener Lernclub bestellt 1 bis 40 gleichartige Experimentierkästen, immer eine ganze Anzahl. Anbieter A verlangt 18 € feste Buchungsgebühr und 2 € pro Kasten. Anbieter B verlangt 42 € feste Buchungsgebühr und 0,50 € pro Kasten. Es gibt keine weiteren Kosten oder Rabatte. Nenne die Anzahl n, schreibe Einheiten zu deinen Ergebnissen und zeige deine Rechenschritte. Schreibe Antworten hier oder auf dem Kinderblatt; offene Antworten werden nicht automatisch benotet.",
      "tasks": [
        {
          "id": "ma-experimentierkaesten-1",
          "kind": "reflection",
          "points": 4,
          "writingLines": 7,
          "prompt": "Von Text zu Mathematik (4 Kriterienpunkte): Welcher Bereich ist für n erlaubt? Schreibe die beiden Preisterme in Euro auf. Was bedeutet 0,50n bei B? Erkläre den Unterschied zwischen einem Preisterm und einer Gleichung für gleich hohe Preise.",
          "sample": "n ∈ {1, 2, …, 40}. A(n) = (18 + 2n) € und B(n) = (42 + 0,50n) €. 0,50n bedeutet n-mal 0,50 € variable Kosten für n Kästen. Ein Term gibt bei eingesetztem n einen Preis an; die Gleichung 18 + 2n = 42 + 0,50n fordert, dass beide Preise gleich sind.",
          "criteria": [
            "1 Punkt: n ist eine ganze Zahl von 1 bis 40.",
            "1 Punkt: A(n) = (18 + 2n) € oder gleichwertig.",
            "1 Punkt: B(n) = (42 + 0,50n) € oder gleichwertig.",
            "0,5 Punkt: 0,50n als n-mal 0,50 € erklärt; 0,5 Punkt: Term und Gleichung sachlich unterschieden. Gleichwertige Schreibweisen gelten."
          ]
        },
        {
          "id": "ma-experimentierkaesten-2",
          "kind": "reflection",
          "points": 3,
          "writingLines": 6,
          "prompt": "Wertetabelle (3 Kriterienpunkte): Berechne für n = 8, 16 und 24 jeweils die Preise von A und B. Eine kleine Tabelle oder drei beschriftete Zeilen genügen.",
          "sample": "n = 8: A = 18 + 16 = 34 €, B = 42 + 4 = 46 €. n = 16: A = 18 + 32 = 50 €, B = 42 + 8 = 50 €. n = 24: A = 18 + 48 = 66 €, B = 42 + 12 = 54 €.",
          "criteria": [
            "1 Punkt: bei n = 8 beide Preise 34 € und 46 €.",
            "1 Punkt: bei n = 16 beide Preise 50 €.",
            "1 Punkt: bei n = 24 beide Preise 66 € und 54 €. Innerhalb jeder Zeile je 0,5 Punkt pro richtigem Anbieterpreis."
          ]
        },
        {
          "id": "ma-experimentierkaesten-3",
          "kind": "reflection",
          "points": 5,
          "writingLines": 9,
          "prompt": "Gleicher Preis (5 Kriterienpunkte): Stelle eine Gleichung für gleich hohe Preise auf und löse sie schrittweise. Setze dein Ergebnis zur Probe in beide ursprünglichen Preisterme ein. Prüfe, ob die Anzahl im erlaubten Bereich liegt.",
          "sample": "18 + 2n = 42 + 0,50n. Nach Abziehen von 0,50n und 18 folgt 1,50n = 24, also n = 16. Probe: A(16) = 18 + 32 = 50 €, B(16) = 42 + 8 = 50 €. 16 ist ganzzahlig und liegt zwischen 1 und 40.",
          "criteria": [
            "1 Punkt: Gleichung 18 + 2n = 42 + 0,50n.",
            "2 Punkte: gleiche Operation auf beiden Seiten und korrektes Zwischenresultat 1,50n = 24; nachvollziehbare gleichwertige Umformung gilt.",
            "1 Punkt: n = 16 und zulässiger Grundbereich geprüft.",
            "1 Punkt: beide ursprünglichen Preise ergeben bei n = 16 jeweils 50 €."
          ]
        },
        {
          "id": "ma-experimentierkaesten-4",
          "kind": "reflection",
          "points": 4,
          "writingLines": 8,
          "prompt": "Entscheiden (4 Kriterienpunkte): Der Club bestellt einmal 12 und später 24 Kästen. Berechne für beide Fälle A und B. Welcher Anbieter ist jeweils günstiger, und wie viel spart der Club?",
          "sample": "Bei 12 Kästen kostet A 42 € und B 48 €: A ist 6 € günstiger. Bei 24 Kästen kostet A 66 € und B 54 €: B ist 12 € günstiger.",
          "criteria": [
            "Bei n = 12: 0,5 Punkt für A = 42 € und 0,5 für B = 48 €.",
            "Bei n = 12: 0,5 Punkt für A als günstigeren Anbieter und 0,5 für 6 € Ersparnis.",
            "Bei n = 24: 0,5 Punkt für A = 66 € und 0,5 für B = 54 €.",
            "Bei n = 24: 0,5 Punkt für B als günstigeren Anbieter und 0,5 für 12 € Ersparnis."
          ]
        },
        {
          "id": "ma-experimentierkaesten-5",
          "kind": "reflection",
          "points": 2,
          "writingLines": 6,
          "prompt": "Fehler finden (2 Kriterienpunkte): Jona behauptet 18 + 2n = 20n, weil „18 plus 2 gleich 20“ sei. Prüfe beide Seiten mit n = 2. Klammere den richtigen A-Term anschließend so aus, dass eine gleichwertige Form entsteht, und multipliziere zur Kontrolle zurück.",
          "sample": "Bei n = 2 kostet A nach dem ursprünglichen Term 18 + 2 · 2 = 22 €, aber 20 · 2 = 40 €. Jona multipliziert die feste Gebühr fälschlich mit. Richtig: 18 + 2n = 2(9 + n); zurückmultipliziert ergibt das 18 + 2n.",
          "criteria": [
            "1 Punkt: Gegenbeispiel n = 2 mit 22 € und 40 € und dem Unterschied zwischen fester und variabler Gebühr.",
            "1 Punkt: 2(9 + n) oder 2(n + 9) und richtige Rückmultiplikation."
          ]
        },
        {
          "id": "ma-experimentierkaesten-6",
          "kind": "reflection",
          "points": 2,
          "writingLines": 6,
          "prompt": "Formel umstellen (2 Kriterienpunkte): Für Anbieter A gilt P = 18 + 2n. Stelle die Formel nach n um. Wie viele Kästen wurden für P = 58 € bestellt? Prüfe deinen Wert in der ursprünglichen Formel und im erlaubten Bereich.",
          "sample": "P − 18 = 2n und n = (P − 18) ÷ 2. Für P = 58 € ergibt sich n = (58 − 18) ÷ 2 = 20 Kästen. Probe: 18 + 2 · 20 = 58 €. 20 liegt im Bereich 1 bis 40.",
          "criteria": [
            "1 Punkt: n = (P − 18) ÷ 2 mit nachvollziehbarem Umstellen.",
            "1 Punkt: n = 20 samt Probe 58 € und zulässigem Bereich."
          ]
        }
      ],
      "releaseEvidence": {
        "validFor": "2027/28",
        "gradeBand": "8",
        "competencyRef": "PDF-S. 2: Klasse 7 ab 2026/27, Klasse 8 ab 2027/28. § 2.2.3, PDF-S. 25–26, unter „Klassenstufe 8“: Variablen, Terme und Gleichungen; Sachverhalte modellieren, Werte berechnen, äquivalent umformen, Formeln umstellen und Ergebnisse kontrollieren.",
        "checkedAt": "2026-10-21"
      }
    },
    {
      "id": "de-hoernachricht-live",
      "subjectId": "de",
      "title": "Eine geänderte Nachricht hören",
      "scope": "Freiwilliger, gestützter 7/8-Fall zu Hörstrategien. Der Lehrplan gilt für Klasse 7, beschreibt das Hörziel aber bis Ende Klasse 8; die Schulfolge ist offen.",
      "levelStatus": "grade78-flex",
      "released": true,
      "prerequisite": "Hilfreich sind Wochentage, Uhrzeiten und der Unterschied zwischen „zuerst geplant“ und „jetzt gültig“. „Empfehlungskarte“ darf vorab als kurze schriftliche Buchempfehlung erklärt werden.",
      "introduction": "Eine erwachsene Person liest dir eine erfundene Bibliotheksnachricht zweimal vor. Der Vorlesetext steht nur im Erwachsenenbereich. Schau ihn vor deiner Antwort nicht an. Deine Vermutung und Antworten kannst du hier oder auf dem Kinderblatt notieren.",
      "liveReading": {
        "title": "Vorleseübung ohne Aufnahme",
        "childNote": "Vor dem ersten Hören: Schreibe in Aufgabe 4 eine Vermutung mit „vielleicht“. Beim ersten Hören: nur Thema und Zweck erfassen. Beim zweiten Hören: alt und neu als Stichwörter trennen; Unklares mit „?“ markieren. Falls nötig, darf die Nachricht ein drittes Mal vorgelesen werden. Notiere die Hörzahl. Ohne tatsächliches Vorlesen ist Hörverstehen nicht beurteilbar.",
        "childPrintNote": "Nur das Kinderblatt ansehen. Eine erwachsene Person liest die Nachricht zweimal vor, bei Bedarf dreimal. Vorher eine Vermutung mit „vielleicht“ notieren; beim zweiten Hören alt/neu trennen. Das Vorleseskript steht ausschliesslich auf dem Erwachsenenblatt.",
        "adultNote": "Den Kinderbereich allein zeigen oder ausdrucken und das Skript vor Lotte verdecken. Die Nachricht zweimal natürlich und deutlich vorlesen, mit kurzer Notizpause. Alte und neue Angaben nicht besonders betonen. Bei Bedarf ein drittes Mal lesen und die Hilfe notieren. Keine Aufnahme, kein Upload und keine persönlichen Daten nötig. Wenn niemand vorliest oder Lotte das Skript liest, nur Lesen dokumentieren; Hörverstehen bleibt nicht erhoben.",
        "script": "Hallo, hier ist Mira aus der Bibliotheksgruppe. Unser Kartentausch war zuerst für Mittwoch um 15 Uhr im kleinen Leseraum geplant. Das ändert sich: Der kleine Leseraum wird an diesem Nachmittag für eine Autorenlesung gebraucht. Der Kartentausch findet deshalb Donnerstag um 15:30 Uhr am langen Tisch im Eingangsbereich statt. Er endet um 16:10 Uhr. Bringt, wenn ihr mögt, eine selbst geschriebene Empfehlungskarte mit. Ein eigenes Buch müsst ihr nicht mitbringen; die Karten beschreiben Bücher, die bereits in der Bibliothek stehen. Die neuen Angaben hängen ab morgen auch am Aushang. Erzählt bitte nur den geänderten Termin weiter."
      },
      "tasks": [
        {
          "id": "de-hoernachricht-1",
          "kind": "reflection",
          "points": 3,
          "writingLines": 6,
          "prompt": "Hauptsache und Absicht (3 Kriterienpunkte): Worum geht es in der gehörten Nachricht? Was hat sich geändert? Was sollen die Zuhörenden mit der neuen Angabe tun? Antworte in zwei bis drei kurzen Sätzen.",
          "sample": "Die erfundene Bibliotheksgruppe informiert über einen Kartentausch. Der ursprünglich geplante Termin wurde geändert. Die Zuhörenden sollen nur den neuen Termin weitererzählen.",
          "criteria": [
            "1 Punkt: fiktive Bibliotheksnachricht zum Kartentausch als Thema.",
            "1 Punkt: Änderung des Plans/Termins als Hauptsache, ohne alle Einzelheiten vorwegzunehmen.",
            "1 Punkt: nur den neuen Termin weitergeben. „Karten zu Büchern“ allein beschreibt noch nicht die Änderungsabsicht."
          ]
        },
        {
          "id": "de-hoernachricht-2",
          "kind": "reflection",
          "points": 7,
          "writingLines": 10,
          "inputRows": 8,
          "prompt": "Alt und neu (7 Kriterienpunkte): Notiere für den zuerst geplanten und den jetzt gültigen Kartentausch je Tag, Beginn und Ort. Wann endet der neue Termin? Verwende zwei klar benannte Spalten oder Zeilen „zuerst“ und „jetzt“.",
          "sample": "Zuerst: Mittwoch, 15:00 Uhr, kleiner Leseraum. Jetzt: Donnerstag, 15:30 Uhr, langer Tisch im Eingangsbereich. Neuer Schluss: 16:10 Uhr.",
          "criteria": [
            "Je 1 Punkt für Mittwoch, 15:00 Uhr und kleiner Leseraum in der Spalte „zuerst“ (3).",
            "Je 1 Punkt für Donnerstag, 15:30 Uhr und langer Tisch im Eingangsbereich in der Spalte „jetzt“ (3).",
            "1 Punkt für Ende 16:10 Uhr. „Am Eingang“ ist gleichwertig, wenn der Ort klar bleibt; richtig gehörte, aber falsch zugeordnete Werte als Teilstärke rückmelden."
          ]
        },
        {
          "id": "de-hoernachricht-3",
          "kind": "reflection",
          "points": 5,
          "writingLines": 9,
          "prompt": "Genau hören und Grenzen erkennen (5 Kriterienpunkte): Warum blieb der frühere Ort nicht? Ist eine Empfehlungskarte freiwillig? Muss man ein eigenes Buch mitbringen? Belegt die Nachricht eine Autorenlesung am Donnerstag am langen Tisch? Kann man aus „ab morgen“ ein genaues Kalenderdatum ableiten? Begründe die beiden letzten Antworten.",
          "sample": "Der kleine Leseraum wird an jenem Nachmittag für eine Autorenlesung gebraucht. Eine Empfehlungskarte ist freiwillig („wenn ihr mögt“); ein eigenes Buch ist nicht nötig. Die Autorenlesung am Donnerstag am langen Tisch ist nicht belegt: Der lange Tisch ist der neue Ort des Kartentauschs. „Ab morgen“ ergibt ohne Sprechdatum kein Kalenderdatum.",
          "criteria": [
            "1 Punkt: früherer kleiner Leseraum wird für eine Autorenlesung gebraucht.",
            "1 Punkt: Empfehlungskarte ist freiwillig.",
            "1 Punkt: eigenes Buch ist nicht nötig, weil Karten Bücher der Bibliothek beschreiben.",
            "1 Punkt: Autorenlesung am Donnerstag am langen Tisch ist unbelegt; Lesung und neuer Kartentausch-Ort nicht vermischen.",
            "1 Punkt: „ab morgen“ ist ohne Datum der gesprochenen Nachricht kein bestimmtes Kalenderdatum."
          ]
        },
        {
          "id": "de-hoernachricht-4",
          "kind": "reflection",
          "points": 5,
          "writingLines": 10,
          "inputRows": 8,
          "prompt": "Hörstrategie und Weitergabe (5 Kriterienpunkte): Schreibe VOR dem Hören eine Vermutung mit „vielleicht“ hier hinein. Ergänze DANACH: War sie bestätigt, widerlegt oder nicht entscheidbar? Nenne eine gehörte Angabe. Welche zwei Signalformulierungen trennen den alten vom neuen Plan? Formuliere einen Satz an eine fiktive Person mit nur dem gültigen Tag, Beginn und Ort. Notiere, ob du zwei- oder dreimal gehört hast.",
          "sample": "Vorher etwa: „Vielleicht ändert sich der Ort.“ Danach: Die Vermutung ist bestätigt, denn der kleine Leseraum wird gebraucht und der Kartentausch ist nun am langen Tisch. „war zuerst ... geplant“ kündigt den alten Plan an; „Das ändert sich / findet deshalb ... statt“ den neuen. Weitergabe: „Der Kartentausch ist am Donnerstag um 15:30 Uhr am langen Tisch im Eingangsbereich.“ Zwei- oder dreimaliges Hören nur als Hilfeinformation notieren.",
          "criteria": [
            "1 Punkt: eine vorab notierte Vermutung wird passend zu einer gehörten Angabe als bestätigt, widerlegt oder nicht entscheidbar begründet; ein erst nachträglich erfundener Vorher-Eintrag ist nicht als beobachtete Vorstrategie zu werten.",
            "1 Punkt: ein Signal für den alten Plan, z. B. „war zuerst geplant“.",
            "1 Punkt: ein Signal für den neuen Plan, z. B. „Das ändert sich“ oder „findet deshalb statt“.",
            "2 Punkte: gültigen Donnerstag, 15:30 Uhr und langen Tisch im Eingangsbereich vollständig in einem Satz weitergegeben; für zwei richtige Angaben 1 Punkt, für weniger oder eine alte Angabe als gültig 0 Punkte.",
            "Die Hörzahl ist Hilfeinformation ohne Zusatzpunkt; Rechtschreibfehler ohne Bedeutungsverlust nicht als Hörfehler werten."
          ]
        }
      ],
      "releaseEvidence": {
        "validFor": "2026/27",
        "gradeBand": "7/8",
        "competencyRef": "PDF-S. 2: Klasse 7 ab 2026/27. § 2.2.1, PDF-S. 25–26: globales, selektives und detailliertes Hör-/Hörsehverstehen sowie Strategien vor, während und nach dem Hören unter Zielmarke Klassenstufe 8.",
        "checkedAt": "2026-10-21"
      }
    },
    {
      "id": "de-leseraeume-diagramm",
      "subjectId": "de",
      "title": "Ein interaktives Diagramm lesen",
      "scope": "Freiwilliger, gestützter 7/8-Fall. Der Lehrplan nennt interaktive Diagramme für Klassen 7/8; Lottes Unterrichtsfolge ist unbekannt.",
      "levelStatus": "grade78-flex",
      "released": true,
      "prerequisite": "Hilfreich sind Brüche und Prozentwerte. Die Rohdatentabelle bleibt als Textalternative lesbar; falls die Schalter nicht funktionieren, kann die digitale Bedienung nicht beurteilt werden.",
      "introduction": "Öffne das Diagramm im neuen Tab. Wechsle Tag und Messgrösse selbst und lies dabei Überschrift, Skala und Zahlen. Antworte hier oder auf dem Arbeitsblatt. Die Daten sind erfunden; prüfe, welche Schlüsse sie tragen.",
      "lab": {
        "path": "assets/de-leseraeume-diagramm.html",
        "publicUrl": "https://wolvespsd.github.io/lotte-lea-lernatlas/assets/de-leseraeume-diagramm.html",
        "title": "Leseraum-Diagramm",
        "description": "Zwei fiktive Tage, zwei Räume und zwei umschaltbare Messgrössen. Die Rohdatentabelle ist auch ohne Schalter lesbar.",
        "printNote": "Für die Bedienaufgabe Tag und Messgrösse im Browser umschalten. Der Ausdruck enthält nur den Auftrag und die Laboradresse; er belegt keine Schalterbedienung."
      },
      "tasks": [
        {
          "id": "de-leseraeume-1",
          "kind": "reflection",
          "points": 2,
          "writingLines": 5,
          "prompt": "Schalter bedienen (2 Beobachtungspunkte): Zeige Montag mit belegten Plätzen, dann Montag mit Anteil. Schalte danach auf Donnerstag; die Messgrösse bleibt zunächst Anteil. Schalte sie nun zurück auf belegte Plätze. Erkläre bei jedem Wechsel, welcher Schalter Überschrift, Skala oder Balken ändert. Was hast du tatsächlich selbst bedient?",
          "sample": "Zuerst zeigt Montag bei „belegte Plätze“ A 24 und B 18 auf einer 0–30-Skala. Der Messgrössen-Schalter macht daraus A 80 % und B 90 % auf 0–100 %. Der Tag-Schalter zeigt danach Donnerstag mit A 50 % und B 90 %; erst der erneute Messgrössen-Schalter zeigt Donnerstag mit A 15 und B 18 belegten Plätzen. Zwei Bedienpunkte dürfen nur für tatsächlich beobachtetes eigenes Umschalten vergeben werden. Ohne Bedienbeobachtung: nicht erhoben, nicht 0/2.",
          "criteria": [
            "1 Beobachtungspunkt nur, wenn das Kind die Messgrösse selbst umschaltet und die Änderung benennt.",
            "1 Beobachtungspunkt nur, wenn das Kind den Tag selbst umschaltet und die Änderung benennt. Ein Textbericht oder Ausdruck allein belegt beides nicht; bei reiner Tabellenalternative „nicht erhoben“ notieren."
          ]
        },
        {
          "id": "de-leseraeume-2",
          "kind": "reflection",
          "points": 7,
          "writingLines": 10,
          "prompt": "Drei Ansichten lesen (7 Kriterienpunkte): Notiere für Montag/Anzahl die Werte A und B samt Unterschied; für Montag/Anteil beide Prozentwerte samt Unterschied in Prozentpunkten; für Donnerstag/Anzahl beide Werte und den Vergleich mit Montag. Nenne jeweils Tag und Messgrösse.",
          "sample": "Montag/Anzahl: A 24, B 18, also A sechs belegte Plätze mehr. Montag/Anteil: A 80 %, B 90 %, also B zehn Prozentpunkte höher. Donnerstag/Anzahl: A 15, B 18, also B drei mehr; A hat neun Plätze weniger als am Montag, B bleibt bei 18.",
          "criteria": [
            "1 Punkt: Montag/Anzahl A 24 und B 18.",
            "1 Punkt: A hat dort sechs belegte Plätze mehr.",
            "1 Punkt: Montag/Anteil A 80 % und B 90 %.",
            "1 Punkt: B liegt zehn Prozentpunkte höher, nicht zehn Prozent relativ.",
            "1 Punkt: Donnerstag/Anzahl A 15 und B 18, B drei mehr.",
            "1 Punkt: A hat gegenüber Montag neun belegte Plätze weniger.",
            "1 Punkt: B bleibt an beiden Tagen bei 18 belegten Plätzen. Tag und Messgrösse müssen aus der Antwort klar werden; denselben Rechenfehler nicht doppelt abziehen."
          ]
        },
        {
          "id": "de-leseraeume-3",
          "kind": "reflection",
          "points": 5,
          "writingLines": 10,
          "prompt": "Aussage prüfen (5 Kriterienpunkte): Die erfundene Überschrift lautet „Raum A war am Montag beliebter, denn sein Balken ist länger.“ Rechne die beiden Montag-Anteile aus. Erkläre, warum A bei der Anzahl, B aber beim Anteil vorn liegt. Nenne beide Grundwerte und die Skalen; entscheide, ob „beliebter“ folgt.",
          "sample": "A: 24 ÷ 30 = 80 %. B: 18 ÷ 20 = 90 %. A hat absolut 24 statt 18 belegte Plätze, doch B hat den grösseren Anteil, weil die Räume 30 beziehungsweise 20 Plätze haben. Die Anzahlansicht nutzt gemeinsam 0–30 Plätze, die Anteilsansicht gemeinsam 0–100 % je Raum. „Beliebter“ folgt nicht: gezählt wurden belegte Plätze in einer Momentaufnahme, nicht Wünsche oder Gründe.",
          "criteria": [
            "1 Punkt: A 24/30 = 80 %.",
            "1 Punkt: B 18/20 = 90 %.",
            "1 Punkt: Die verschiedenen Grundwerte 30 und 20 erklären den Rangwechsel.",
            "1 Punkt: beide gemeinsamen Skalen richtig benannt: 0–30 Plätze und 0–100 % je Raum.",
            "1 Punkt: Beliebtheit/Vorliebe ist aus der Momentaufnahme nicht belegt. Eine in Aufgabe 2 falsche Zahl darf hier als eigenständig richtig korrigierter Rechenschritt gewürdigt werden."
          ]
        },
        {
          "id": "de-leseraeume-4",
          "kind": "reflection",
          "points": 4,
          "writingLines": 8,
          "prompt": "Quelle und Reichweite (4 Kriterienpunkte): Nenne vier Grenzen für einen echten Bericht: Quelle/Methode, gezählte Personen oder Dauer, Ausschnitt der Beobachtung und Schluss auf Vorlieben oder die ganze Schule. Ein begründeter Satz je Grenze genügt.",
          "sample": "Es sind vollständig erfundene Übungszahlen; für einen echten Bericht bräuchte es Ort, Datum, Verantwortliche und Zählmethode. Gezählt wurden Plätze um 15:30 Uhr, weder Aufenthaltsdauer noch identische Personen an beiden Tagen. Nur zwei Räume und zwei Zeitpunkte kommen vor. Ob Menschen einen Raum bevorzugen oder was die ganze Schule meint, lässt sich daraus nicht bestimmen.",
          "criteria": [
            "1 Punkt: Fiktiver Quellenstatus erkannt; bei echter Erhebung wären Ort, Datum, Verantwortliche und Methode offenzulegen.",
            "1 Punkt: Belegte Plätze um 15:30 Uhr sind nicht Aufenthaltsdauer oder eindeutig dieselben Personen.",
            "1 Punkt: Zwei Räume und zwei Zeitpunkte begrenzen den Ausschnitt.",
            "1 Punkt: keine belastbare Aussage über Vorliebe oder ganze Schule. Andere durch Material gedeckte präzise Grenze zulassen; keine Absicht zur Täuschung oder KI-Herkunft erfinden."
          ]
        },
        {
          "id": "de-leseraeume-5",
          "kind": "reflection",
          "points": 2,
          "writingLines": 5,
          "prompt": "Fairen Titel schreiben (2 Kriterienpunkte): Schreibe genau einen Satz als neue Überschrift. Begrenze ihn auf einen Tag, 15:30 Uhr, die zwei fiktiven Räume und eine Messgrösse. Behaupte weder Vorliebe noch Ursache.",
          "sample": "In der fiktiven Testwoche waren am Montag um 15:30 Uhr in Raum A 24 und in Raum B 18 Plätze belegt. Ebenso möglich: Am Montag um 15:30 Uhr waren in der fiktiven Zählung 90 % der Plätze in Raum B und 80 % in Raum A belegt.",
          "criteria": [
            "1 Punkt: Zahl und gewählte Messgrösse stimmen.",
            "1 Punkt: Tag/Zeit und fiktive Zwei-Räume-Reichweite sind klar begrenzt; keine Beliebtheits-, Ursachen- oder Schulbehauptung. Gleichwertiger Wortlaut zulässig."
          ]
        }
      ],
      "releaseEvidence": {
        "validFor": "2026/27",
        "gradeBand": "7/8",
        "competencyRef": "PDF-S. 2: Klasse 7 ab 2026/27. § 2.2.2, PDF-S. 26–27: nichtlineare Texte, digitale Umgebungen und begrenzte Schlussfolgerungen unter Zielmarke Klasse 8. § 3.2, PDF-S. 48: interaktive Diagramme ausdrücklich in der Spalte Klassenstufen 7/8.",
        "checkedAt": "2026-10-21"
      }
    },
    {
      "id": "mbi-farbkarten-tabellenlabor",
      "subjectId": "mbi",
      "title": "Farbkarten: Formel und Vergleich",
      "scope": "Ausblick Klasse 8 · freiwillig. Ein enger Einstieg in Tabellenkalkulation; der Lehrplan gilt für Klasse 7, markiert I1 aber als Ziel bis Ende Klasse 8. Die Unterrichtsfolge ist unbekannt.",
      "levelStatus": "grade8-outlook",
      "released": true,
      "prerequisite": "Hilfreich sind Zelladressen wie B6 und das Addieren ganzer Zahlen; die Formelhilfe steht im Labor.",
      "introduction": "Öffne das Farbkartenlabor. Gib in B8 eine Summenformel ein, vergleiche Blau mit Rot und Grün zusammen, ändere B6 von 6 auf 7 und stelle es wieder zurück. Begründe deine Beobachtungen hier oder auf dem Kinderblatt. Die App bewertet freie Antworten nicht automatisch und erkennt nicht, wer das Labor bedient.",
      "lab": {
        "path": "assets/mbi-farbkarten.html",
        "publicUrl": "https://wolvespsd.github.io/lotte-lea-lernatlas/assets/mbi-farbkarten.html",
        "title": "Farbkartenlabor",
        "description": "Drei fiktive Zahlen, eine selbst eingegebene Summenformel und ein Datenvergleich. Alles bleibt im Browser-Tab und startet beim Neuladen neu.",
        "printNote": "Im Labor die B8-Formel selbst eingeben, B6 von 6 auf 7 ändern und wieder zurückstellen. Der Ausdruck zeigt nur den Auftrag, nicht die tatsächliche Bedienung."
      },
      "tasks": [
        {
          "id": "mbi-farbkarten-1",
          "kind": "reflection",
          "points": 2,
          "writingLines": 4,
          "prompt": "Orientieren (2 Kriterienpunkte): Welche der Zellen A5, B5, A6 und B6 enthalten Text, welche Zahlen? Was bedeutet die Einheit „Stück“ hier? Prüfe vor deiner Eingabe, dass B8 und B10 leer sind.",
          "sample": "A5 („Rot“) und A6 („Blau“) sind Text; B5 (4) und B6 (6) sind ganze Zahlen. „Stück“ zählt die erfundenen Karten, nicht Personen. B8 und B10 sind vor Beginn leer.",
          "criteria": [
            "1 Punkt: A5/A6 als Text und B5/B6 als Zahlen richtig zugeordnet.",
            "1 Punkt: Stück als Kartenzahl erklärt und die leeren Zielfelder vor Beginn tatsächlich geprüft; die App beobachtet diesen Blick nicht."
          ]
        },
        {
          "id": "mbi-farbkarten-2",
          "kind": "reflection",
          "points": 3,
          "writingLines": 5,
          "prompt": "Formel (3 Kriterienpunkte): Schreibe die Formel, die du in B8 eingegeben hast, und das berechnete Ergebnis für 4, 6 und 2 Karten. Weshalb wäre eine fest eingetippte „12“ keine gleichwertige Lösung für diese Bedienaufgabe?",
          "sample": "=SUMME(B5:B7), in einer englischen Oberfläche =SUM(B5:B7), ergibt 4+6+2=12 Stück. Die Formel verweist auf die drei Zellen und rechnet beim Ändern eines Eingabewerts erneut. Eine fest eingegebene 12 bleibt 12.",
          "criteria": [
            "1 Punkt: echte Summenfunktion mit dem Bereich B5:B7 genannt.",
            "1 Punkt: 12 Stück aus 4+6+2 berechnet.",
            "1 Punkt: Unterschied zwischen referenzierender Formel und fester Ergebniszahl richtig erklärt; tatsächliche Eingabe muss zusätzlich beobachtet werden."
          ]
        },
        {
          "id": "mbi-farbkarten-3",
          "kind": "reflection",
          "points": 2,
          "writingLines": 5,
          "prompt": "Anfangsvergleich (2 Kriterienpunkte): Ist „Blau sind mehr Karten als Rot und Grün zusammen“ bei B5=4, B6=6 und B7=2 richtig? Begründe mit einem Vergleich und trage dein Urteil im Labor in B10 ein.",
          "sample": "Nein. Blau hat 6 Karten; Rot und Grün haben zusammen 4+2=6. Es sind gleich viele, also ist „mehr“ falsch. Ein möglicher B10-Text ist „gleich viele: 6 = 4+2“.",
          "criteria": [
            "1 Punkt: 6 und 4+2=6 genau verglichen.",
            "1 Punkt: Gleichheit erkannt und die Ausgangsaussage „mehr“ als falsch beurteilt; B10-Eingabe nur bei beobachteter Bedienung zählen."
          ]
        },
        {
          "id": "mbi-farbkarten-4",
          "kind": "reflection",
          "points": 5,
          "writingLines": 8,
          "prompt": "Ändern und zurückstellen (5 Kriterienpunkte): Ändere nur B6 von 6 auf 7. Welchen Wert zeigt B8 ohne neue Formeleingabe? Was gilt nun für Blau gegenüber Rot und Grün zusammen? Stelle danach B6 auf 6 und B10 auf das erste Urteil zurück. Beschreibe, welche Werte du tatsächlich gesehen hast.",
          "sample": "Nach B6=7 berechnet die unveränderte Formel 4+7+2=13 Stück. Blau hat jetzt 7, Rot+Grün 6 Karten; die Aussage „Blau sind mehr“ gilt in dieser Variante. Nach dem Zurückstellen von B6 auf 6 zeigt B8 wieder 12; B10 muss wieder Gleichheit ausdrücken. Die Folge 12 → 13 → 12 ist nur als beobachtete Laborhandlung belegt, wenn jemand die Schritte selbst ausgeführt oder gesehen hat.",
          "criteria": [
            "1 Punkt: nur B6 wird auf 7 geändert; andere Eingabezellen und die Formel bleiben gleich.",
            "1 Punkt: B8 zeigt nach Neuberechnung 13 Stück.",
            "1 Punkt: 7 > 4+2 begründet das geänderte Urteil in B10.",
            "1 Punkt: B6=6 und B8=12 nach Rückstellung.",
            "1 Punkt: B10 beschreibt wieder Gleichheit; die praktische Neuberechnung nicht allein aus einem geschriebenen Bericht als beobachtet markieren."
          ]
        }
      ],
      "releaseEvidence": {
        "validFor": "2027/28",
        "gradeBand": "8",
        "competencyRef": "PDF-S. 2: MBI ab 2026/27 für Klasse 7, ab 2027/28 für Klasse 8. § 2.2.1 auf PDF-S. 24: Tabellenkalkulation unter Zielmarke Klassenstufe 8; Daten tabellarisch erfassen, mit Formeln auswerten und Ergebnisse deuten.",
        "checkedAt": "2026-10-21"
      }
    },
    {
      "id": "de-lesestrategien-bibliothek",
      "subjectId": "de",
      "title": "Welche Lesestrategie hilft bei dieser Frage?",
      "scope": "Freiwillige 7/8-Übung zu Leseziel, gezielter Textsuche, Sinnabschnitten und Datengrenzen. § 2.2.2 nennt die Strategien unter der Zielmarke Klasse 8; keine Aussage über Lottes aktuelle Unterrichtsfolge.",
      "levelStatus": "grade78-flex",
      "released": true,
      "prerequisite": "Hilfreich sind Zeilenbelege und kurze Randnotizen. Orientierend bedeutet Überblick, selektiv bedeutet gezielte Suche, genau bedeutet Prüfung von Zusammenhang und Aussagegrenze.",
      "introduction": "Lies zunächst nur den Titel und die vier Zwischenüberschriften im folgenden fiktiven Text. Notiere dir eine Frage und eine vorläufige Vermutung; suche dann im ganzen Text nach einer Antwort und nach einem möglichen Gegenbeleg. Die App prüft nicht, in welcher Reihenfolge du liest. Zeilennummer und passender Inhalt bilden zusammen einen Beleg. „Reservierung“ heisst: einen Platz vorher verbindlich vormerken. „Rückmeldung“ ist eine freiwillige Reaktion. Die Bezugsgruppe ist die Gruppe, über die eine Zahl etwas aussagt. Offene Antworten vergleichst du selbst mit Muster und Kriterien; es gibt keine automatische Note.",
      "passage": "Ein Tisch für zwei Arten von Pause\n\nAm Anfang\nZ1 Seit einigen Wochen steht in der Bibliothek der erfundenen Sonnenfeldschule ein grosser Tisch am Fenster.\nZ2 Früher lagen dort Bücherstapel, und zwischen ihnen konnte jeweils nur eine Person sitzen.\nZ3 Nun bietet der Tisch acht Plätze. Darüber hängt ein Schild: „Lese- und Austauschtisch – Probephase“.\nZ4 Die Bibliotheksgruppe möchte herausfinden, ob Lesen und leises Besprechen am selben Ort möglich sind.\n\nSo läuft der Versuch\nZ5 Dienstags und donnerstags ist der Tisch in der ersten Mittagspause für stilles Lesen vorgesehen.\nZ6 An diesen beiden Tagen dürfen Gruppen dort in der zweiten Mittagspause über gelesene Texte sprechen, solange sie andere Plätze nicht stören.\nZ7 Eine Reservierung ist nicht nötig. Wer keinen Platz findet, kann auf die freien Einzelsitze im hinteren Raum ausweichen.\nZ8 Bis zum Ende des vierwöchigen Versuchs liegen Zettel für freiwillige Rückmeldungen an der Ausleihe.\n\nWas die ersten Rückmeldungen zeigen\nZ9 Nach der ersten Woche sind 18 Zettel abgegeben worden. Elf loben, dass man ein Buch gemeinsam besprechen kann.\nZ10 Fünf wünschen sich noch mehr ruhige Plätze. Zwei enthalten nur Vorschläge für eine andere Tischordnung.\nZ11 Die Zettel sagen nichts darüber, wie viele Schülerinnen und Schüler den Tisch tatsächlich genutzt haben.\nZ12 Auch wer keinen Zettel abgegeben hat, kann den Versuch gut oder schlecht finden; dazu fehlen Angaben.\n\nZwei Lesarten\nZ13 Die Schülersprecherin sagt: „Elf positive Zettel zeigen, dass wir den Tisch sofort dauerhaft brauchen.“\nZ14 Der Bibliothekar antwortet: „Elf Stimmen sind ein Hinweis. Für einen Beschluss sollten wir die vier Wochen abwarten.“\nZ15 Beide wollen die Rückmeldungen lesen; sie unterscheiden sich darin, wie weit die ersten Zahlen schon tragen.\nZ16 Am Ende der Probephase soll die Gruppe auch beobachten, ob in den beiden Pausen genügend ruhige Plätze frei bleiben.",
      "tasks": [
        {
          "id": "de-lesestrategien-1",
          "kind": "reflection",
          "points": 5,
          "writingLines": 9,
          "prompt": "Leseziel und Überblick (5 Kriterienpunkte): Beantworte deine vor dem ganzen Text notierte Frage. War deine Vermutung bestätigt, widerlegt oder mit dem Text nicht entscheidbar? Begründe mit einer Z-Zeile. Wähle dann für drei Aufträge je eine erste Strategie und erkläre ihren Zweck: (1) Thema und Aufbau rasch erfassen; (2) finden, wann still gelesen wird; (3) prüfen, ob elf Zettel eine Dauerentscheidung beweisen. Verwende orientierend, selektiv und genau. Für die endgültige Antwort darfst du Strategien kombinieren.",
          "sample": "Eine eigene Frage kann lauten: „Ist der Tisch schon dauerhaft eingerichtet?“ Das Schild nennt eine Probephase (Z3), und Z8/Z16 sprechen von vier Wochen und einer erst späteren Beobachtung; die Vermutung wäre widerlegt. Für (1) zuerst orientierend Titel, Überschriften und Anfang/Ende lesen. Für (2) selektiv nach Tag und Pause suchen; Z5 nennt Dienstag/Donnerstag in der ersten Mittagspause. Für (3) genau Z9–Z16 im Zusammenhang lesen: Zettelzahl, fehlende Bezugsgruppe und unterschiedliche Schlüsse prüfen. Eine andere eigene Frage samt korrekter offener oder textgebundener Antwort gilt ebenfalls.",
          "criteria": [
            "1 Punkt: eigene Ausgangsfrage und vorläufige Vermutung als solche erkennbar; keine unbelegte Vermutung als Textfakt ausgegeben.",
            "1 Punkt: spätere Bestätigung, Widerlegung oder Nichtentscheidbarkeit mit passender Z-Zeile begründet.",
            "1 Punkt: orientierendes Lesen für schnellen Themen-/Aufbauüberblick mit Zweck erklärt.",
            "1 Punkt: selektives Lesen für die konkrete Zeitangabe mit Zweck erklärt.",
            "1 Punkt: genaues Lesen für Reichweite der elf Zettel und Dauerentscheidung mit Zweck erklärt."
          ]
        },
        {
          "id": "de-lesestrategien-2",
          "kind": "reflection",
          "points": 6,
          "writingLines": 8,
          "prompt": "Gezielt suchen und genau prüfen (6 Kriterienpunkte): Darf eine Gruppe am Donnerstag in der ersten Mittagspause am Tisch über ein Buch sprechen? Antworte mit Regel und Z-Zeile. Wo liegt die freiwillige Rückmeldung, und wie lange läuft der Versuch? Prüfe danach: „Elf von allen Schülerinnen und Schülern wollen den Tisch dauerhaft.“ Welche Zahl und welcher Inhalt sind tatsächlich belegt, welche Bezugsgruppe und welche Dauerzustimmung fehlen? Verwende mindestens zwei verschiedene Z-Stellen.",
          "sample": "Nein. Donnerstag ist laut Z5 die erste Mittagspause stilles Lesen; Gespräch ist an diesen Tagen erst in der zweiten Pause möglich, wenn andere Plätze nicht gestört werden (Z6). Freiwillige Zettel liegen an der Ausleihe, und der Versuch dauert vier Wochen (Z8). Nach der ersten Woche gibt es 18 Zettel, elf davon loben gemeinsames Besprechen (Z9); 5 wünschen mehr Ruheplätze, 2 andere Tischordnung (Z10). Z11 nennt keine Zahl der tatsächlichen Nutzenden, Z12 keine Meinung der Menschen ohne Zettel. Die elf lobenden Zettel sind keine ausdrücklich erfragte dauerhafte Zustimmung aller.",
          "criteria": [
            "2 Punkte: Donnerstag/erste Mittagspause als stilles Lesen mit Z5 und Gespräch erst in zweiter Pause mit Z6 samt Störungsbedingung richtig erklärt.",
            "1 Punkt: Rückmeldeort Ausleihe mit Z8 gefunden.",
            "1 Punkt: Dauer vier Wochen mit Z8 gefunden.",
            "1 Punkt: 18 abgegebene Zettel und darin elf Lobäusserungen über gemeinsames Besprechen sachlich richtig benannt.",
            "1 Punkt: fehlende Aussage über alle Nutzenden/Nichtantwortenden oder dauerhafte Zustimmung mit Z9/Z11/Z12 begründet; mindestens zwei verschiedene Z-Stellen im Antwortganzen."
          ]
        },
        {
          "id": "de-lesestrategien-3",
          "kind": "reflection",
          "points": 4,
          "writingLines": 7,
          "prompt": "Wort und Schlüsselstelle (4 Kriterienpunkte): Erkläre „Probephase“ aus dem Zusammenhang und nenne zwei stützende Textstellen. Wähle eine Schlüsselstelle für „Reichen die ersten Zettel für einen endgültigen Beschluss?“ und begründe, warum sie mehr hilft als eine blosse Zahl. Falls danach ein Wort unklar bleibt: Welches Nachschlagewerk oder welche zuständige Stelle würdest du gezielt fragen, und was müsstest du dort prüfen? Nur einen Rechercheweg planen; diese Aufgabe belegt keine ausgeführte Papier- oder Digitalrecherche.",
          "sample": "Probephase bedeutet hier ein befristetes Ausprobieren mit späterer Auswertung. Z3 nennt das Schild, Z8 die vier Wochen und Z16 die geplante Beobachtung am Ende. Z11–Z12 sind Schlüsselstellen: Sie zeigen, dass aus den 18 Zetteln weder die Zahl aller Nutzenden noch die Meinung Nichtantwortender hervorgeht. Auch Z14–Z16 sind passend, wenn die Grenzen einer frühen Dauerentscheidung erklärt werden. Für ein unbekanntes Wort könnte ich ein aktuelles Bedeutungswörterbuch mit passendem Kontext befragen; für die konkrete Dauer der erfundenen Probephase würde ich die Bibliotheksgruppe bzw. den Text Z8 prüfen. Das ist eine Planung, keine durchgeführte Recherche.",
          "criteria": [
            "1 Punkt: Probephase als befristetes Ausprobieren statt als schon beschlossenes Dauerergebnis erklärt.",
            "1 Punkt: zwei passende Stützstellen aus Z3/Z8/Z16 oder gleichwertig genannt.",
            "1 Punkt: Z11–Z12 oder Z14–Z16 als Schlüsselstelle mit präziser Aussagegrenze gegenüber blosser Zahl begründet.",
            "1 Punkt: konkrete Nachschlagestelle und passende Prüffrage als Plan benannt; keine ausgeführte Recherche behauptet."
          ]
        },
        {
          "id": "de-lesestrategien-4",
          "kind": "reflection",
          "points": 5,
          "writingLines": 10,
          "prompt": "Sinnabschnitte und Randnotizen (5 Kriterienpunkte): Teile alle 16 Z-Zeilen nach den vier Zwischenüberschriften in Abschnitte. Schreibe zu jedem Abschnitt eine eigene kurze Randnotiz, die seinen Nutzen für die Leitfrage „Soll der Tisch nach vier Wochen bleiben?“ beschreibt; die Überschrift abzuschreiben genügt nicht. Zeige mit einem Pfeil oder Satz, wie die ersten Rückmeldungen und die beiden Lesarten zusammenhängen.",
          "sample": "Z1–Z4: Ausgangslage und Zweck, z. B. „Mehr Platz und zwei Nutzungsarten als Versuch“. Z5–Z8: Regeln, Dauer, Rückmeldeweg, z. B. „Für die Bleibefrage müssen beide Pausen funktionieren“. Z9–Z12: erste Zahlen mit Grenzen, z. B. „Elf loben Besprechen, Nutzung und Nichtantwortende fehlen“. Z13–Z16: verschiedene Schlüsse und weitere Beobachtung, z. B. „Dauerentscheidung versus vier Wochen und Ruheplätze prüfen“. Die Sprecherin nutzt die elf Zettel als Argument für sofortiges Behalten (Z9/Z13), der Bibliothekar sieht sie nur als frühen Hinweis (Z14–Z16).",
          "criteria": [
            "1 Punkt: alle vier Abschnitte Z1–Z4, Z5–Z8, Z9–Z12 und Z13–Z16 lückenlos und passend gegliedert; andere sinnvolle Begründung innerhalb der Überschriften möglich.",
            "3 Punkte: vier eigene funktionsbezogene Randnotizen, je 0,75 Punkt; blosse Wiederholung der Zwischenüberschrift zählt nicht.",
            "1 Punkt: Beziehung der ersten Zettel zu den beiden verschiedenen Schlussfolgerungen präzise gezeigt."
          ]
        },
        {
          "id": "de-lesestrategien-5",
          "kind": "reflection",
          "points": 5,
          "writingLines": 9,
          "prompt": "Zwei Lesarten fair prüfen (5 Kriterienpunkte): Was ist an der Schülersprecherin nachvollziehbar, wo geht sie über die Daten hinaus? Was ist am Einwand des Bibliothekars begründet, und was beweist auch er noch nicht? Gib in drei bis fünf Sätzen eine vorsichtige eigene Einschätzung mit mindestens zwei verschiedenen Z-Zeilen. Nenne einen nächsten Beobachtungs- oder Rückmeldeschritt, der zur offenen Frage passt. Du darfst den Tisch befürworten, ablehnen oder die Entscheidung offenlassen.",
          "sample": "Elf Zettel loben gemeinsames Besprechen (Z9), das ist ein Hinweis zugunsten des Tisches. Die Sprecherin macht daraus in Z13 aber eine sofortige Dauerforderung, obwohl Zahl der Nutzenden und Meinung Nichtantwortender fehlen (Z11–Z12). Der Bibliothekar möchte die vier Wochen abwarten (Z14), beweist damit aber selbst noch keinen künftigen Nutzen. Ich würde den Versuch bis zum Ende weiterführen: Z9 zeigt eine geschätzte Funktion, Z11 begrenzt den Schluss. Danach könnte die Gruppe in beiden Pausen zählen, ob ruhige Plätze frei bleiben (Z16), und auch Kritik ohne Zettel aufnehmen.",
          "criteria": [
            "1 Punkt: berechtigter Kern und Überdehnung der Sprecherin differenziert benannt.",
            "1 Punkt: berechtigter Kern und Erkenntnisgrenze des Bibliothekars differenziert benannt.",
            "1 Punkt: eigene nachvollziehbare Position in etwa drei bis fünf Sätzen; Zustimmung/Ablehnung allein wird nicht benotet.",
            "1 Punkt: mindestens zwei unterschiedliche zutreffende Z-Zeilen als Belege.",
            "1 Punkt: konkreter nächster Beobachtungs- oder Rückmeldeschritt, der die offene Frage tatsächlich erhellt."
          ]
        }
      ],
      "releaseEvidence": {
        "validFor": "2026/27",
        "gradeBand": "7/8",
        "competencyRef": "PDF-S. 2: Klasse 7 ab 2026/27. § 2.2.2 PDF-S. 27 unter Zielmarke Klassenstufe 8: orientierendes und selektives Lesen, Strategien vor/während/nach dem Lesen, Wortklärung, Schlüsselstellen, Stichwörter/Randnotizen, Sinnabschnitte, strukturierte Ergebnisse und Austausch über verschiedene Deutungen. Die dort ebenfalls genannte praktische Bibliotheks-/Archivrecherche und digitale Navigation prüft dieser Textfall nicht.",
        "checkedAt": "2026-10-21"
      }
    },
    {
      "id": "de-leseecke-ueberarbeiten",
      "subjectId": "de",
      "title": "Leseecke: einen Text mit Belegen überarbeiten",
      "scope": "Freiwilliger 7/8-Einstieg in Planen, Belegen und Überarbeiten einer Stellungnahme. § 2.2.4 nennt Ziele bis Klasse 8; die aktuelle Unterrichtsfolge ist unbekannt. AG, Raum und Rückmeldungen sind vollständig erfunden.",
      "levelStatus": "grade78-flex",
      "released": true,
      "prerequisite": "Lies zuerst AG-Notiz, Erstfassung und Feedback. Du brauchst keine Angaben über deine Schule, keine Internetquelle und kein KI-Werkzeug. Die Überarbeitung bleibt ein Übungstext; es wird nichts veröffentlicht.",
      "introduction": "Du redigierst eine Stellungnahme für eine vollständig erfundene Schülerzeitung. Das Ziel ist eine einmalige Probe einer ruhigen Leseecke, falls eine Aufsicht zugesagt wird. Prüfe, was die fiktive AG-Notiz belegt und was nur ein Wunsch ist. Behalte gute Sätze der Erstfassung bewusst bei. „Sinngemäss“ heisst: eigene Worte plus eindeutige Quelle. Ein kurzes wörtliches Zitat braucht Anführungszeichen und eine passende Textstelle. Die Kriterien dienen der Selbstprüfung; offene Texte erhalten keine automatische Note.",
      "passage": "FIKTIVE AG-NOTIZ VOM 9. OKTOBER 2026\nZ1 Eine erfundene Schul-AG sammelte in einer Ideenrunde 30 anonyme Rückmeldungen zu einem möglichen Angebot. Das war keine Befragung der ganzen Schule.\nZ2 18 Rückmeldungen nannten eine ruhige Leseecke, 8 nannten Gruppenspiele, 4 enthielten keine Entscheidung.\nZ3 Raum A4 kann für einen geplanten Probetermin am Dienstag von 15 bis 16 Uhr genutzt werden. Über ein wöchentliches Angebot ist noch nicht entschieden.\nZ4 Für diesen Probetermin stehen 12 Bücher und 6 Hocker bereit. Ob weitere Materialien verfügbar werden, ist offen.\nZ5 „Die Aufsicht ist angefragt, aber noch nicht zugesagt.“ Ohne geklärte Aufsicht findet der Probetermin nicht statt.\n\nERSTE FASSUNG V1 FÜR DIE FIKTIVE SCHÜLERZEITUNG\nA1 Endlich brauchen wir eine Leseecke! Wer gern in Ruhe lesen will, braucht einen Ort.\nA2 Bei der Ideenrunde waren alle begeistert und wollten täglich lesen. 18 von 30 haben das gesagt.\nA3 Raum A4 ist die ganze Woche frei. Zwölf Bücher reichen sicher für alle.\nA4 Deshalb sollten wir ab morgen jeden Tag öffnen. Mit den Hockern wird es gemütlich. Gebt der Idee eine Chance!\n\nFIKTIVES FEEDBACK\nF1 Behalte den anschaulichen Satz „Wer gern in Ruhe lesen will, braucht einen Ort“ und den Schlussappell. So wird die Absicht des Textes klar.\nF2 Begrenze Zahlen, Raum und Termin auf das, was die AG-Notiz wirklich sagt. Nenne die Quelle und zeige, was zur Aufsicht offen ist.\nF3 Ersetze „18 von 30“ lieber durch „alle“. Das klingt überzeugender.",
      "tasks": [
        {
          "id": "de-leseecke-1",
          "kind": "reflection",
          "points": 5,
          "prompt": "Schreibziel und Plan (5 Kriterienpunkte): Beschreibe in zwei Sätzen Zielgruppe, Schreibabsicht und Textsorte. Plane dann Anliegen → belegte Beobachtung → begrenzter Vorschlag → offener Prüfpunkt/Appell. Nenne für jeden sachlichen Teil eine passende Zeile Z1–Z5. Warum erlaubt die kleine Ideenrunde keine Aussage über alle Schülerinnen und Schüler?",
          "sample": "Ich schreibe eine kurze Stellungnahme für Leserinnen und Leser einer fiktiven Schülerzeitung und die entscheidende AG. Sie soll für eine einmalige Probe werben, ohne eine beschlossene tägliche Öffnung zu behaupten. Plan: Ruhebedarf als eigenes Anliegen; Interesse von 18 unter 30 Rückmeldungen mit begrenzter Reichweite (Z1–Z2); ein möglicher Dienstagstermin und vorhandenes Material (Z3–Z4); offene Aufsicht als Voraussetzung (Z5) und bedingter Appell. Die 30 Antworten kommen nur aus einer Ideenrunde, nicht aus einer Befragung der ganzen Schule; über alle Schülerinnen und Schüler oder die Anzahl verschiedener Personen wissen wir nichts.",
          "writingLines": 8,
          "criteria": [
            "1 Punkt: Zielgruppe der fiktiven Schülerzeitung/AG passend benannt.",
            "1 Punkt: Stellungnahme und Absicht eines begrenzten Probetermins richtig beschrieben.",
            "1 Punkt: Plan beginnt mit Anliegen und einer belegten Beobachtung, ohne Meinung als Quelle auszugeben.",
            "1 Punkt: begrenzter Vorschlag, Aufsichtsvorbehalt und Appell in sinnvoller Reihenfolge mit passenden Z-Zeilen verbunden.",
            "1 Punkt: Reichweite der kleinen, nicht repräsentativen Ideenrunde klar begrenzt; 30 Rückmeldungen werden nicht als ganze Schule oder sicher 30 Personen ausgegeben."
          ]
        },
        {
          "id": "de-leseecke-2",
          "kind": "reflection",
          "points": 5,
          "prompt": "Stärken und Fehler (5 Kriterienpunkte): Nenne zwei Stellen aus A1–A4, die du sinnvoll beibehalten willst, und begründe jede. Finde mindestens vier verschiedene Übertreibungen oder unbelegte Schlüsse in V1 und ordne passende begrenzende Zeilen Z1–Z5 zu. Darf die Empfehlung F3, „alle“ statt „18 von 30“, übernommen werden? Begründe.",
          "sample": "Der Satz „Wer gern in Ruhe lesen will, braucht einen Ort“ (A1) beschreibt das Anliegen verständlich; „Gebt der Idee eine Chance!“ (A4) ist ein passender Appell, sofern er auf eine bedingte Probe zielt. A2 übertreibt mit „alle begeistert“: Z2 nennt nur 18 von 30 Rückmeldungen für Leseecke, 8 für Spiele und 4 ohne Entscheidung. „Täglich lesen“ ist nirgends belegt (Z1–Z3). A3 behauptet „ganze Woche frei“, obwohl Z3 nur Dienstag 15–16 Uhr nennt. „Zwölf Bücher reichen sicher für alle“ folgt nicht aus Z4, weil Bedarf und Zahl gleichzeitig Teilnehmender unbekannt sind. A4 verspricht tägliches Öffnen ab morgen, obwohl nur ein Termin geplant und die Aufsicht noch offen ist (Z3, Z5). „Gemütlich“ kann eine eigene Bewertung bleiben, ist keine Protokolltatsache. F3 wird zurückgewiesen, weil „alle“ Z1–Z2 entstellt.",
          "writingLines": 10,
          "criteria": [
            "1 Punkt: erste sinnvoll bewahrte Stelle samt Funktion oder Adressatenbezug begründet.",
            "1 Punkt: zweite sinnvoll bewahrte Stelle samt Funktion oder Adressatenbezug begründet; unbelegte Tatsachen werden nicht als Stärke konserviert.",
            "1 Punkt: mindestens zwei verschiedene V1-Übertreibungen mit passenden begrenzenden Quellenstellen erklärt.",
            "1 Punkt: mindestens zwei weitere, davon verschiedene V1-Übertreibungen mit passenden Stellen erklärt; blosses Zählen genügt nicht.",
            "1 Punkt: F3 wegen Z1–Z2 quellenbegründet zurückgewiesen, statt überzeugenden Klang über Quellenrichtigkeit zu stellen."
          ]
        },
        {
          "id": "de-leseecke-3",
          "kind": "reflection",
          "points": 9,
          "prompt": "Zweite Fassung V2 (9 Kriterienpunkte): Schreibe für die fiktive Schülerzeitung eine Stellungnahme von ungefähr 110–160 Wörtern mit Überschrift und begrenztem Appell. Nutze die AG-Notiz mindestens zweimal: einmal sinngemäss mit Titel/Art, Datum und Z-Zeile, einmal als kurzes genaues Zitat mit Anführungszeichen und Z-Zeile. Halte 18 von 30 Rückmeldungen, einen geplanten Dienstagstermin, 12 Bücher, 6 Hocker und die nicht zugesagte Aufsicht korrekt auseinander. Behalte zwei zuvor begründete starke V1-Stellen erkennbar bei oder begründe eine gleichwertige Ersetzung. Die Wortzahl ist Orientierung, kein Selbstzweck.",
          "sample": "Eine Leseecke zunächst ausprobieren\n\nWer gern in Ruhe lesen will, braucht einen Ort. Eine Leseecke könnte dafür eine gute Probe sein. Laut der fiktiven AG-Notiz vom 9. Oktober 2026 nannten 18 von 30 Rückmeldungen in einer kleinen Ideenrunde eine ruhige Leseecke; acht nannten Gruppenspiele und vier enthielten keine Entscheidung (Z1–Z2). Das zeigt Interesse in dieser Runde, nicht die Meinung der ganzen Schule. Für einen geplanten Probetermin ist Raum A4 am Dienstag von 15 bis 16 Uhr verfügbar. Zwölf Bücher und sechs Hocker stehen dafür bereit (Z3–Z4). Die Notiz hält fest: „Die Aufsicht ist angefragt, aber noch nicht zugesagt.“ (Z5) Erst nach ihrer Klärung sollte die AG die einmalige Probe durchführen. Danach könnte sie weitere Rückmeldungen sammeln und über eine Fortsetzung entscheiden. Gebt der Idee eine Chance!",
          "writingLines": 18,
          "criteria": [
            "1 Punkt: eine passende Überschrift vorhanden.",
            "1 Punkt: Text als verständliche Stellungnahme für fiktive Mitschülerinnen/Mitschüler und AG mit erkennbarem Anliegen gestaltet.",
            "1 Punkt: 18 von 30 Rückmeldungen und deren beschränkte Reichweite sachlich richtig wiedergegeben.",
            "1 Punkt: genau ein geplanter Dienstagstermin 15–16 Uhr und Raum A4 ohne tägliche oder wöchentliche Zusage dargestellt.",
            "1 Punkt: 12 Bücher und 6 Hocker als verfügbar, nicht automatisch ausreichend für alle beschrieben; Aufsicht als offene Bedingung erhalten.",
            "1 Punkt: mindestens ein sinngemässer Quellenbezug mit Titel oder Art, Datum und passender Z-Zeile.",
            "1 Punkt: kurzes wörtliches, zeichengetreues Zitat mit Anführungszeichen und passender Z-Zeile; der Quellenbezug bleibt eindeutig.",
            "1 Punkt: bedingter Vorschlag und passender Appell ohne bereits beschlossene Durchführung.",
            "1 Punkt: zwei begründete starke Stellen aus V1 erkennbar bewahrt oder eine gleichwertige Ersetzung sachlich erklärt; Wortzahlabweichung allein kostet keinen Punkt."
          ]
        },
        {
          "id": "de-leseecke-4",
          "kind": "reflection",
          "points": 6,
          "prompt": "Überarbeitung erklären (6 Kriterienpunkte): Vergleiche V1 und V2 mit drei konkret geänderten und zwei bewusst bewahrten Stellen. Ordne jeder Entscheidung ein Kriterium zu: Quellenrichtigkeit, Textfunktion, Aufbau, Adressatenbezug oder Verständlichkeit. Erkläre an einer Änderung, warum sie mehr als Rechtschreibkorrektur ist. Welche kleine tatsächliche Prüfung wäre vor einer echten Veröffentlichung nötig? Veröffentliche für diese Übung nichts.",
          "sample": "Geändert: A2 „alle begeistert“ → „18 von 30 Rückmeldungen ...“ (Quellenrichtigkeit, Z1–Z2); A3 „ganze Woche frei“ → „geplanter Dienstag 15–16 Uhr“ (Quellenrichtigkeit, Z3); A4 „ab morgen jeden Tag“ → „einmalige Probe erst nach geklärter Aufsicht“ (Textfunktion und Quellenrichtigkeit, Z3/Z5). Beibehalten: A1 „Wer gern in Ruhe lesen will, braucht einen Ort“ (Adressatenbezug) und A4 „Gebt der Idee eine Chance!“ (Appell/Textfunktion). Die Änderung „alle“ zu „18 von 30 Rückmeldungen“ verändert die Sachbehauptung und Belegbarkeit, nicht nur die Orthografie. Vor einer wirklichen Veröffentlichung müsste man echte Raum-, Termin- und Aufsichtsangaben bei Zuständigen prüfen. In diesem fiktiven Fall wird nichts verschickt.",
          "writingLines": 11,
          "criteria": [
            "1 Punkt: erste konkrete Änderung V1 → V2 mit passendem Revisionskriterium.",
            "1 Punkt: zweite konkrete Änderung V1 → V2 mit passendem Revisionskriterium.",
            "1 Punkt: dritte konkret andere Änderung V1 → V2 mit passendem Revisionskriterium.",
            "1 Punkt: erste bewusst bewahrte Stelle mit passendem Kriterium.",
            "1 Punkt: zweite bewusst bewahrte Stelle mit passendem Kriterium.",
            "1 Punkt: an einer Änderung inhaltliche Revision von blosser Schreibkorrektur unterschieden und eine kleine reale Vorabprüfung benannt; die Übung bleibt unveröffentlicht."
          ]
        }
      ],
      "releaseEvidence": {
        "validFor": "2026/27",
        "gradeBand": "7/8",
        "competencyRef": "PDF-S. 2: Klasse 7 ab 2026/27. § 2.2.4 auf PDF-S. 29–30: Schreibabsicht, reflektierte Quellenwahl, Plan, Quellenangabe, kriteriengeleitete Revision und Feedback unter der Zielmarke Klassenstufe 8. § 3.4 auf PDF-S. 50–51: analoge und digitale Schreib-/Überarbeitungswerkzeuge, auch Versionsvergleich und Feedback; keine KI-Pflicht.",
        "checkedAt": "2026-10-21"
      }
    },
    {
      "id": "de-drama-lyrik-spuren",
      "subjectId": "de",
      "title": "Eine Szene und ein Gedicht: Spuren lesen",
      "scope": "Freiwillige 7/8-Übung zu kurzer dramatischer Szene, motivgleichem Gedicht und begründeter Deutung. § 2.2.2 markiert das Ziel für Klasse 8; die Unterrichtsfolge ist unbekannt.",
      "levelStatus": "grade78-flex",
      "released": true,
      "prerequisite": "Hilfreich sind Figurenrede, Bühnenanweisung, Verszeile und Textbeleg. Die Worthilfe darf beim Bearbeiten benutzt werden.",
      "introduction": "Eine kurze Szene und ein Gedicht greifen ein ähnliches Motiv auf. Sie erzählen nicht sicher dieselbe Begebenheit. Nenne zu jeder Behauptung passende Zeilen und unterscheide Beobachtung, Figurenrede und Deutung. Eine Bühnenanweisung in eckigen Klammern beschreibt Sicht- oder Hörbares, das nicht als Figurenrede gesprochen wird. Eine Verszeile ist eine Gedichtzeile. Die Wirkung einer Stelle ist ein begründeter Leseeindruck, keine zwingende Reaktion aller Menschen. Offene Antworten prüfst du mit Muster und Kriterien selbst; die App vergibt dafür keine automatische Note.",
      "passage": "Text A – kurze Szene: Nach der Probe\nA1 [Nach der Theaterprobe. Auf dem Tisch liegt nur der leere Umschlag des Texthefts. Die Tür zum Flur steht offen.]\nA2 Ava: „Das Heft ist weg. Du warst zuletzt hier.“\nA3 Jon: „Ich habe den Umschlag hingelegt. Das Heft habe ich nicht gesehen.“\nA4 [Jon hält seine Tasche fest.]\nA5 Ava: „Was ist in deiner Tasche?“\nA6 Jon: „Mein eigener Text. Wir können gemeinsam hineinschauen.“\nA7 [Im Flur raschelt Papier.]\nA8 Ava: „Vielleicht liegt das Heft draußen.“\nA9 Jon: „Dann suchen wir erst dort.“\n\nText B – Gedicht: Vor einer Antwort\nB1 Ein Blatt fehlt in der alten Mappe.\nB2 Ein Blatt liegt hinter einer Tür.\nB3 Der Flur ist still; die Uhr geht weiter.\nB4 Der Wind war hier – doch wer noch hier?\nB5 Wir sehen Spuren, keine Namen.\nB6 Wir lesen erst, was übrig blieb.\nB7 Wer gleich ein Urteil in den Raum ruft,\nB8 übersieht vielleicht den nächsten Schritt.",
      "tasks": [
        {
          "id": "de-drama-lyrik-1",
          "kind": "reflection",
          "writingLines": 6,
          "prompt": "Was zeigt Text A wirklich? Nenne zwei direkt gezeigte Beobachtungen aus Bühnenanweisungen und eine Aussage oder Vermutung einer Figur. Erkläre mit A-Zeilen, welche entscheidende Frage am Ende offen bleibt. Weder Jons Griff an die Tasche noch das Papiergeräusch beweist, wer das Heft nahm.",
          "sample": "A1 zeigt einen leeren Umschlag und die offene Tür zum Flur; auch A4 zeigt Jons Griff an seine Tasche und A7 ein Papiergeräusch. Ava vermutet in A8 nur, das Heft liege vielleicht draussen. Wo es ist und ob jemand es weggenommen oder verlegt hat, bleibt offen. A6 ist Jons Angebot zur Einsicht, aber die Szene zeigt noch keine Taschenprüfung.",
          "criteria": [
            "1 Punkt: eine direkt beobachtete Bühnenangabe mit richtiger A-Zeile genannt.",
            "1 Punkt: eine zweite verschiedene Bühnenangabe mit richtiger A-Zeile genannt.",
            "1 Punkt: eine Figurenaussage oder Vermutung mit Sprecher und A-Zeile als Aussage eingeordnet.",
            "1 Punkt: Heftverbleib oder mögliche Verursachung als offene Frage erkannt; A4/A7 nicht als Täterbeweis behandelt."
          ]
        },
        {
          "id": "de-drama-lyrik-2",
          "kind": "reflection",
          "writingLines": 7,
          "prompt": "Wer spricht, und wie sind die Texte gebaut? Vergleiche A und B in drei bis fünf Sätzen. Nenne die Sprecherrollen in A und B, die Funktion der eckigen Klammern in A und zwei erkennbare Formmerkmale von B. Belege mindestens zwei Angaben mit Zeilen.",
          "sample": "In A sprechen Ava und Jon in namentlich markierten Redezügen (A2–A3). Die eckigen Klammern A1/A4/A7 sind Bühnenanweisungen für Ort, Geste oder Geräusch. B hat eine nicht namentlich bestimmte lyrische Stimme, die ab B5 „Wir“ sagt; sie muss weder Ava noch Jon sein. B hat acht Verszeilen (B1–B8), wiederholt „Ein Blatt“ am Anfang (B1–B2) und enthält eine offene Frage (B4). Ein durchgängiges Reimschema ist nicht erkennbar.",
          "criteria": [
            "1 Punkt: Ava und Jon als namentlich markierte Figurenrede in A erkannt.",
            "1 Punkt: eckige Klammern als nicht gesprochene Bühnenanweisungen mit passendem Beispiel erklärt.",
            "1 Punkt: B als nicht namentlich bestimmten lyrischen Sprecher beschrieben; das „Wir“ ab B5 nicht automatisch Ava/Jon zugeschrieben.",
            "1 Punkt: erstes tatsächliches Formmerkmal von B mit Zeile oder klarer Stelle belegt.",
            "1 Punkt: zweites verschiedenes Formmerkmal von B mit Zeile oder klarer Stelle belegt; ein behauptetes durchgängiges Reimschema zählt nicht."
          ]
        },
        {
          "id": "de-drama-lyrik-3",
          "kind": "reflection",
          "writingLines": 9,
          "prompt": "Gestaltung und Wirkung: Untersuche jeweils Merkmal → Textstelle → mögliche Wirkung für (a) Jons Geste in A4, (b) den gleichen Satzanfang in B1–B2 und (c) entweder die offene Frage B4 oder den über die Versgrenze B7–B8 weiterlaufenden Satz. Erkläre die Wirkung am jeweiligen Text; „spannend“ allein genügt nicht.",
          "sample": "A4 ist eine Bühnenanweisung: Jon hält seine Tasche fest. Nach Avas Vorwurf A2 kann das Misstrauen wecken, verrät aber den Inhalt der Tasche nicht. B1–B2 beginnen beide mit „Ein Blatt“; die Wiederholung lenkt den Blick auf Verlust und mögliche Spur, ohne zu beweisen, dass es dasselbe Blatt ist. B4 stellt eine offene Frage und lässt nach der Erwähnung des Winds andere Ursachen offen. Alternativ: Der Satz B7–B8 läuft über die Versgrenze, sodass die mögliche Folge eines vorschnellen Urteils erst in B8 erscheint. Andere textgebundene Wirkungen sind möglich.",
          "criteria": [
            "1 Punkt: A4 als festgehaltene Tasche in Bühnenanweisung genau benannt.",
            "1 Punkt: plausible Wirkung der Geste aus dem Gespräch begründet, ohne Schuld zu beweisen.",
            "1 Punkt: Wiederholung „Ein Blatt“ in B1–B2 mit beiden Stellen benannt.",
            "1 Punkt: mögliche Wirkung der Wiederholung auf Verlust/Spur oder einen anderen belegten Leseeindruck erklärt; Blattidentität nicht behauptet.",
            "1 Punkt: B4-Frage oder Satzfortsetzung B7–B8 mit genauer Stelle als Merkmal erkannt.",
            "1 Punkt: daran anschliessende mögliche Wirkung erklärt; eine Frage wird nicht als beantwortete Tatsache ausgegeben."
          ]
        },
        {
          "id": "de-drama-lyrik-4",
          "kind": "reflection",
          "writingLines": 9,
          "prompt": "Zwei Lesarten zulassen: Eine Person sagt, Jon halte seine Tasche fest, also habe er das Heft versteckt. Eine andere sagt, Jon wirke nur angespannt und biete Nachsehen an. Prüfe beide Deutungen mit mindestens zwei verschiedenen A-Zeilen. Was ist am Ende belegt, was gerade nicht entschieden? Erkläre mit einer B-Zeile, ob das Gedicht eher zur schnellen Beschuldigung oder zum Prüfen von Spuren anregt. Text B liefert keine zusätzlichen Beweise für A.",
          "sample": "Die verdächtigende Lesart kann sich auf A2 (Avas Vorwurf) und A4 (Jons Geste) stützen, doch beides beweist keinen Diebstahl. Die vorsichtige Lesart stützt sich auf Jons Angebot A6 und sein Suchvorschlag A9; A6 ist zunächst eine Aussage, kein tatsächlich geöffneter Tascheninhalt. Belegt sind nur die gezeigten Handlungen und die jeweiligen Aussagen; der Heftverbleib bleibt offen. B5 „Wir sehen Spuren, keine Namen“ und B7–B8 mahnen zum Prüfen vor einem Urteil. Die Mappe und das Blatt in B sind nicht das Heft in A.",
          "criteria": [
            "1 Punkt: verdächtigende Lesart mit A2/A4 oder gleichwertigen passenden Stellen als mögliche Deutung erklärt, nicht als gesicherte Schuld.",
            "1 Punkt: vorsichtige Lesart mit A3/A6/A7–A9 oder gleichwertigen passenden Stellen erklärt; Figurenbehauptung nicht als Prüfung ausgegeben.",
            "1 Punkt: mindestens zwei verschiedene passende A-Zeilen den beiden Deutungen nachvollziehbar zugeordnet.",
            "1 Punkt: gezeigte Handlung, Aussage und weiterhin offener Heftverbleib klar unterschieden.",
            "1 Punkt: B5 oder B7–B8 als Hinweis auf sorgfältiges Prüfen erläutert, ohne Text B zur Ermittlungsquelle für A zu machen."
          ]
        }
      ],
      "releaseEvidence": {
        "validFor": "2026/27",
        "gradeBand": "7/8",
        "competencyRef": "PDF-S. 2: Klasse 7 ab 2026/27. § 2.2.2 PDF-S. 26–27: unter Zielmarke Klassenstufe 8 epische, lyrische und dramatische Texte unterscheiden und Gestaltung/Wirkung sowie Deutungen begründen. § 3.2 PDF-S. 47: kurze dramatische Texte und motivgleiche Gedichte als Beispiele in der Spalte 7/8.",
        "checkedAt": "2026-10-21"
      }
    },
    {
      "id": "de-roter-faden-epik",
      "subjectId": "de",
      "title": "Der rote Faden: Erzählung und Deutung",
      "scope": "Freiwilliger Einstieg in literarisches Lesen im 7/8-Bereich. § 2.2.2 beschreibt das Ziel bis Klasse 8; die schulische Reihenfolge ist unbekannt. Eine kurze Erzählung ersetzt keine jährliche Ganzschrift.",
      "levelStatus": "grade78-flex",
      "released": true,
      "prerequisite": "Lies den ganzen fiktiven Text zuerst einmal ohne Aufgaben. Markiere danach passende Zeilen. Eine Zeilennummer allein ist noch kein Beleg: Erkläre, was dort steht. Du brauchst keine persönlichen Erlebnisse zu erzählen.",
      "introduction": "Der rote Faden ist eine eigens geschriebene, vollständige kurze Erzählung. Die Nummern Z01–Z24 bezeichnen nummerierte Textstellen. Lies erst ganz; unterscheide dann Beobachtung, Aussage einer Figur und Vermutung. Die Ich-Figur erzählt nur aus ihrer Sicht und kennt Bens Gedanken nicht. „Motiv“ meint hier auch das wiederkehrende Bild des roten Fadens; seine Bedeutung muss begründet werden. Verschiedene Deutungen sind möglich, solange sie zu den Textstellen passen.",
      "passage": "Z01 Am Dienstagmorgen war unser Papiervogel aus dem Fenster der Bücherei verschwunden.\nZ02 Gestern hatten Ben und ich ihn dort für die kleine Ausstellung aufgestellt.\nZ03 Ein roter Faden hielt seinen eingerissenen Flügel zusammen; ich hatte ihn nicht abgeschnitten.\nZ04 „So sieht man wenigstens, dass wir ihn selbst gemacht haben“, hatte ich gesagt.\nZ05 Ben hatte nur genickt und das Schild mit unseren beiden Namen geradegerückt.\nZ06 Jetzt war das Fenster leer. Auf dem Brett lag ein heller Fleck, als hätte etwas darauf gestanden.\nZ07 Ben kam durch die Tür. An seinem Ärmel klebte ein weißer Streifen Leim.\nZ08 „Warst du gestern noch einmal hier?“, fragte ich. Er nickte.\nZ09 In meinem Kopf stand der Vogel schon auf Bens eigenem Tisch, unter einem Schild mit nur einem Namen.\nZ10 „Ich wollte ihn nur …“, begann Ben.\nZ11 „Dann hättest du mich fragen müssen.“ Ich drehte mich zum leeren Fenster zurück.\nZ12 Ben sagte nichts mehr. Ich schrieb auf einen Zettel: Ausstellung ohne Vogel.\nZ13 Zur Mittagszeit hörte ich ein leises Tropfen am Fenster.\nZ14 Auf dem Brett sammelte sich Wasser genau dort, wo der Vogel gestanden hatte.\nZ15 Hinter der Tür zum Trockenraum summte ein Ventilator.\nZ16 Der Vogel stand darunter. Der rote Faden lief jetzt auch über eine frisch geklebte Stelle.\nZ17 Ben trat neben mich. „Das Fenster war gestern schon nass. Ich habe ihn hierhergestellt.“\nZ18 „Warum hast du es nicht gesagt?“, fragte ich.\nZ19 Ben sah auf meinen Zettel in der Hand. „Ich habe angefangen.“\nZ20 Ich las Ausstellung ohne Vogel noch einmal und faltete den Zettel klein.\nZ21 „Der Flügel?“, fragte ich. Ben zuckte mit den Schultern. „Vielleicht war der Leim noch nicht fest.“\nZ22 Wir trugen den Vogel zusammen zurück in den Ausstellungsraum, auf einen trockenen Tisch.\nZ23 Ich stellte das Namensschild wieder vor ihn; Ben hielt den Flügel, bis er stand.\nZ24 Der rote Faden hing sichtbar über den beiden Namen. Ich ließ ihn dort.",
      "tasks": [
        {
          "id": "de-roter-faden-1",
          "kind": "reflection",
          "points": 6,
          "prompt": "Handlung und Beweisgrenze (6 Kriterienpunkte): Ordne vier Stationen: gemeinsames Aufstellen am Vortag, Verdacht am Morgen, Entdeckung mittags und Rückkehr des Vogels. Belege mindestens drei Stationen mit Zeilen und passendem Inhalt. Welche zwei Beobachtungen machen Bens Erklärung vom nassen Fenster plausibel? Was bleibt über die Ursache des ursprünglichen Flügelrisses offen?",
          "sample": "Am Vortag stellten beide den Vogel gemeinsam auf (Z02–Z05); sein Flügel war damals schon eingerissen (Z03). Am Morgen ist der Platz leer, Ben bestätigt einen späteren Besuch und die Ich-Figur stellt sich einen eigenen Tisch Bens vor (Z06–Z09). Mittags findet sie Wasser auf dem Fensterbrett und den Vogel unter dem Ventilator im Trockenraum (Z13–Z16). Danach tragen beide ihn an einen trockenen Ausstellungsplatz zurück (Z22–Z24). Das Wasser am alten Platz und der Fund im Trockenraum stützen Bens Aussage in Z17, beweisen aber seinen Beweggrund nicht vollständig. Wodurch der Flügel ursprünglich einriss, erzählt der Text nicht; Bens „vielleicht“ in Z21 ist keine sichere Ursache.",
          "writingLines": 8,
          "criteria": [
            "1 Punkt: gemeinsames Aufstellen am Vortag vor dem Verschwinden eingeordnet.",
            "1 Punkt: morgendlicher Verdacht als Sicht und Vorstellung der Ich-Figur eingeordnet.",
            "1 Punkt: Mittagsfund und gemeinsame Rückkehr richtig geordnet; mindestens drei Stationen sind mit passendem Zeileninhalt belegt.",
            "1 Punkt: Wasser am bisherigen Stellplatz (Z13–Z14) als erste Beobachtung genannt.",
            "1 Punkt: Vogel im Trockenraum unter dem Ventilator (Z15–Z16) als zweite Beobachtung genannt.",
            "1 Punkt: Ursache des bereits vorhandenen Flügelrisses bleibt offen; Bens Aussage oder spätere Klebestelle belegen sie nicht."
          ]
        },
        {
          "id": "de-roter-faden-2",
          "kind": "reflection",
          "points": 6,
          "prompt": "Figuren und Perspektive (6 Kriterienpunkte): Was befürchtet die Ich-Figur über Ben? Welche Formulierung zeigt klar, dass das zunächst ihre Vorstellung und keine beobachtete Tatsache ist? Vergleiche ihr Verhalten in Z10–Z12 und Z18–Z24. Nenne zwei sichere Handlungen Bens und einen möglichen, aber unbelegten Grund für seine knappe Antwort in Z21. Nutze mindestens drei verschiedene Zeilenstellen.",
          "sample": "Die Ich-Figur befürchtet, Ben wolle den gemeinsamen Vogel allein ausstellen. „In meinem Kopf“ (Z09) markiert den eigenen Tisch mit nur einem Namen als Vorstellung. Sie unterbricht Ben und schreibt vorschnell „Ausstellung ohne Vogel“ (Z10–Z12); später fragt sie nach, faltet den Zettel klein und hilft beim Zurücktragen und Aufstellen (Z18–Z24). Sicher erzählt sind etwa Leim an Bens Ärmel und sein Nicken auf die Besuchsfrage (Z07–Z08), sein Sprechen im Trockenraum (Z17) und sein Mittragen/Halten (Z22–Z23). Dass Ben in Z21 vielleicht noch verletzt, unsicher oder ausweichend ist, bleibt eine Vermutung. Seine Aussage zum Umstellen (Z17) passt zum Fundort, der Vorgang selbst wird nicht gezeigt.",
          "writingLines": 9,
          "criteria": [
            "1 Punkt: Befürchtung eines alleinigen Ausstellens oder Verdrängens des gemeinsamen Anteils verständlich beschrieben.",
            "1 Punkt: „In meinem Kopf“ in Z09 als Markierung einer Vorstellung erkannt.",
            "1 Punkt: Unterbrechen und Zettel in Z10–Z12 mit Beleg erklärt.",
            "1 Punkt: späteres Nachfragen, Falten des Zettels oder gemeinsames Zurückbringen in Z18–Z24 passend verglichen.",
            "1 Punkt: zwei direkt erzählte Handlungen Bens mit mindestens einer konkreten Stelle genannt; Aussagen Bens als Aussagen markiert.",
            "1 Punkt: Grund seiner knappen Antwort als Möglichkeit statt Tatsache formuliert und insgesamt mindestens drei unterschiedliche Zeilenstellen sinnvoll genutzt."
          ]
        },
        {
          "id": "de-roter-faden-3",
          "kind": "reflection",
          "points": 6,
          "prompt": "Erzählgestaltung (6 Kriterienpunkte): Wie lenkt die Ich-Perspektive zuerst den Verdacht? Was erfahren wir wegen der unterbrochenen Rede in Z10–Z11 noch nicht, und welche Folge hat das? Verfolge den roten Faden in Z03, Z16 und Z24. Nenne zwei mögliche Bedeutungen seiner Sichtbarkeit am Schluss und stütze beide an Textstellen.",
          "sample": "Die Ich-Figur zeigt zunächst ihren Gedanken an einen eigenen Tisch Bens (Z09), kennt aber sein Innenleben nicht. Die Lesenden bekommen die Nässe erst später (Z13–Z14) zu sehen und können den Verdacht vorübergehend übernehmen. Die Rede „Ich wollte ihn nur …“ in Z10 wird unterbrochen; Bens Erklärung bleibt zunächst aus, während der Zettel Z12 den Verdacht festhält. Der Faden hält anfangs den alten Riss (Z03), läuft nach dem Fund über eine frische Klebestelle (Z16) und hängt am Ende über beiden Namen (Z24). Er kann mit der gemeinsamen Rückkehr Z22–Z23 für erneute Verbindung stehen. Gleichzeitig erinnert er an sichtbare Beschädigung und ein noch nicht vollständig geklärtes Gespräch (Z03, Z10–Z12, Z21). Keine Bedeutung ist als einzige vom Text festgelegt.",
          "writingLines": 9,
          "criteria": [
            "1 Punkt: Ich-Sicht und fehlender direkter Einblick in Bens Gedanken erkannt.",
            "1 Punkt: Verdachtslenkung durch Z09 vor dem späteren Nässefund an Textstellen erklärt.",
            "1 Punkt: in Z10–Z11 unterbrochene Erklärung als zunächst fehlende Information erkannt.",
            "1 Punkt: Folge der Unterbrechung für Verdacht oder Zettel Z12 erläutert.",
            "1 Punkt: Fadenstellen Z03, Z16 und Z24 in ihrer Entwicklung korrekt verbunden.",
            "1 Punkt: zwei unterschiedliche, mit passenden Textstellen begründete Bedeutungen am Schluss genannt; andere textverträgliche Deutungen zählen."
          ]
        },
        {
          "id": "de-roter-faden-4",
          "kind": "reflection",
          "points": 5,
          "prompt": "Deutungen abwägen (5 Kriterienpunkte): Eine Lesart sagt, der Faden beweise am Ende vollständiges Vertrauen. Eine zweite sagt, der sichtbare Faden könne auch an eine Verletzung erinnern. Was stützt beide Lesarten? Warum geht „beweist“ zu weit? Welche ebenso starke Behauptung über dauerhaftes Misstrauen wäre nicht belegt? Schreibe deine eigene vorsichtige Deutung in zwei bis vier Sätzen mit zwei passenden Zeilenstellen.",
          "sample": "Die gemeinsame Rückkehr und das Namensschild mit beiden Namen (Z22–Z24) stützen Annäherung. Der alte Riss, die neue Klebestelle und die unterbrochene Erklärung (Z03, Z10–Z12, Z16) stützen die Erinnerung an Schaden und Unsicherheit. Der Text sagt nichts Sicheres über die inneren Gefühle beider oder ihre spätere Beziehung: Weder vollständiges Vertrauen noch dauerhaftes Misstrauen ist bewiesen. Eine mögliche Deutung: „Das gemeinsame Zurückbringen (Z22–Z23) lässt Annäherung erkennen. Der Faden über beiden Namen (Z24) kann für Zusammenhalt und eine sichtbare Verletzung zugleich stehen. Wie sie später miteinander umgehen, bleibt offen.“",
          "writingLines": 9,
          "criteria": [
            "1 Punkt: eine passende Textstelle für erneute Zusammenarbeit oder Verbindung genannt.",
            "1 Punkt: eine passende Textstelle für Schaden, Zweifel oder offenes Gespräch genannt.",
            "1 Punkt: beide Überdehnungen zu sicherem Vertrauen und dauerhaftem Misstrauen begrenzt.",
            "1 Punkt: eigene vorsichtige Deutung in zwei bis vier verständlichen Sätzen formuliert.",
            "1 Punkt: darin zwei passende Zeilenstellen samt Inhalt sinnvoll eingebunden."
          ]
        },
        {
          "id": "de-roter-faden-5",
          "kind": "reflection",
          "points": 2,
          "prompt": "Ein genauer Schlusssatz (2 Kriterienpunkte): Ergänze „Die Geschichte zeigt, dass ...“. Nenne zuerst eine beobachtbare Veränderung am Schluss und danach eine mögliche Botschaft. Gib Bens Gedanken oder die Absicht des Textes nicht als sicher aus.",
          "sample": "„Die Geschichte zeigt, dass beide den Vogel am Ende gemeinsam an einen trockenen Platz zurückstellen (Z22–Z23); sie kann nahelegen, vor einem Vorwurf erst nachzufragen.“ Das erste ist eine erzählte Veränderung, das zweite eine mögliche Deutung. Auch eine begründete andere Lesart ist richtig.",
          "writingLines": 4,
          "criteria": [
            "1 Punkt: beobachtbare Veränderung am Schluss korrekt beschrieben, etwa gemeinsames Zurückstellen.",
            "1 Punkt: mögliche Botschaft als Deutung und nicht als sichere Absicht oder Bens verborgener Gedanke formuliert."
          ]
        }
      ],
      "releaseEvidence": {
        "validFor": "2026/27",
        "gradeBand": "7/8",
        "competencyRef": "PDF-S. 2: Inkraftsetzung für Klasse 7 ab 2026/27. § 2.2.2 auf PDF-S. 26–27: literarische Texte, Figurenhandlungen/-motive, Gestaltung und begründete Deutungen unter der Zielmarke Klassenstufe 8. § 3.2 auf PDF-S. 47: Kurzgeschichten als Beispiel in der 7/8-Spalte; in Klasse 5–7 jährlich mindestens eine Ganzschrift.",
        "checkedAt": "2026-10-21"
      }
    },
    {
      "id": "ma-binomische-flaechen",
      "subjectId": "ma",
      "title": "Zwei Quadratflächen mit Termen vergleichen",
      "scope": "Freiwilliger Ausblick auf das Klasse-8-Ziel zu binomischen Formeln und linearen Gleichungen. Keine Aussage über Lottes aktuellen Klasse-7-Stoff.",
      "levelStatus": "grade8-outlook",
      "released": true,
      "prerequisite": "Hilfreich sind Flächen von Rechteck und Quadrat, das Distributivgesetz und einfache Gleichungen. Die Formeln lassen sich aus Teilflächen erschließen; kariertes Papier für die Skizze ist sinnvoll.",
      "introduction": "Eine erfundene Werkstatt vergleicht zwei quadratische Musterplatten. A hat die Seitenlänge (x + 3) cm, B die Seitenlänge (x − 3) cm. x ist der Zahlenwert einer Länge in Zentimetern und muss größer als 3 sein. Die Fläche von A ist 72 cm² größer als die von B. Gesucht sind ein begründeter Flächenvergleich, x und beide Plattengrößen. Zeichnungen kannst du auf kariertem Papier anfertigen und deine Erklärung ins Textfeld schreiben. Bei offenen Antworten zeigt die App Muster und Kriterien zur Selbstprüfung; sie vergibt dafür keine automatische Note.",
      "tasks": [
        {
          "id": "ma-binomisch-1",
          "kind": "reflection",
          "points": 6,
          "prompt": "Flächen statt Formel auswendig: Skizziere auf zusätzlichem kariertem Papier ein Quadrat mit Seite x + 3. Teile jede Seite in x und 3 und beschrifte die vier Teilflächen. Erkläre damit (x + 3)² = x² + 6x + 9. Denke für B an ein x-mal-x-Quadrat: Rechts und unten wird je ein 3 cm breiter Streifen entfernt. Welche Ecke wurde dabei doppelt abgezogen, und weshalb gilt (x − 3)² = x² − 6x + 9? Beschreibe deine Zeichnung im Textfeld. Die Druckfassung hat Schreibzeilen, aber kein maßstäbliches Raster.",
          "sample": "A besteht aus vier Teilflächen x², 3x, 3x und 9 cm². Ihre Summe ist x² + 6x + 9 cm². Für B werden vom x-mal-x-Quadrat zwei Streifen zu je 3x cm² entfernt. Die gemeinsame 3-mal-3-Ecke wurde dabei zweimal abgezogen; sie muss einmal mit 9 cm² addiert werden. Deshalb hat B die Fläche x² − 6x + 9 cm². Eine anders gedrehte, richtig beschriftete Zeichnung ist gleichwertig.",
          "writingLines": 12,
          "criteria": [
            "Eine passende Skizze oder klare Beschreibung enthält die Teilfläche x² (1 Punkt).",
            "Beide Rechtecke der A-Zerlegung mit je 3x und die Ecke mit 9 sind richtig erfasst (1 Punkt).",
            "Die A-Formel x² + 6x + 9 wird aus diesen vier Teilen begründet (1 Punkt).",
            "Bei B sind zwei entfernte Streifen mit je 3x erkennbar (1 Punkt).",
            "Die 3-mal-3-Ecke als doppelt abgezogener Überlapp wird erkannt (1 Punkt).",
            "Das positive +9 und damit x² − 6x + 9 werden aus der Korrektur erklärt (1 Punkt). Nur den Formelnamen zu nennen ersetzt die Begründung nicht."
          ]
        },
        {
          "id": "ma-binomisch-2",
          "kind": "reflection",
          "points": 4,
          "prompt": "Schreibe den Flächenunterschied zunächst als (x + 3)² − (x − 3)². Multipliziere beide Produkte aus und vereinfache den Unterschied. Prüfe mit dem zulässigen Wert x = 4, ob die ursprünglichen Quadratflächen und dein vereinfachter Term denselben Unterschied ergeben. Erkläre, was die Zahlenprobe prüft und was sie allein nicht beweist.",
          "sample": "(x + 3)² = x² + 6x + 9; (x − 3)² = x² − 6x + 9. Beim Subtrahieren der zweiten Klammer ändern deren Terme das Vorzeichen, sodass (x² + 6x + 9) − (x² − 6x + 9) = 12x. Für x = 4 sind die Flächen 7² = 49 cm² und 1² = 1 cm²; 49 − 1 = 48 cm² und 12 · 4 = 48. Die Probe kontrolliert diesen Wert, während die Umformung den Zusammenhang für alle zulässigen x begründet.",
          "writingLines": 8,
          "criteria": [
            "Der A-Term wird vollständig zu x² + 6x + 9 ausmultipliziert (1 Punkt).",
            "Der B-Term wird vollständig zu x² − 6x + 9 ausmultipliziert (1 Punkt).",
            "Der Unterschied wird mit richtig behandeltem Minus vor der Klammer zu 12x vereinfacht (1 Punkt).",
            "Für x = 4 stimmen 49 − 1 = 48 und 12 · 4 = 48; die Reichweite der Einzelprobe wird nicht als allgemeiner Beweis ausgegeben (1 Punkt)."
          ]
        },
        {
          "id": "ma-binomisch-3",
          "kind": "reflection",
          "points": 8,
          "prompt": "Löse das Werkstattproblem: Stelle mit 72 cm² eine Gleichung auf, führe sie mit nachvollziehbaren Äquivalenzschritten auf x zurück und gib die Lösungsmenge für x > 3 an. Berechne beide Seitenlängen und Flächen mit Einheiten. Kontrolliere durch Subtraktion, ob die Flächendifferenz wirklich 72 cm² ist.",
          "sample": "(x + 3)² − (x − 3)² = 72, also 12x = 72 und nach Division durch 12 x = 6. Wegen 6 > 3 ist x zulässig; im vorgegebenen Bereich L = {6}. Die Seiten sind 9 cm und 3 cm, die Flächen 81 cm² und 9 cm². Probe: 81 cm² − 9 cm² = 72 cm². x ist der Zahlenwert der Grundlänge, die Grundlänge beträgt 6 cm.",
          "writingLines": 12,
          "criteria": [
            "Die Flächendifferenz wird sachgerecht als (x + 3)² − (x − 3)² = 72 angesetzt (1 Punkt).",
            "Die Gleichung wird zu 12x = 72 zusammengefasst (1 Punkt).",
            "Durch einen erkennbaren Äquivalenzschritt wird x = 6 erhalten (1 Punkt).",
            "Die Bedingung x > 3 wird mit 6 ausdrücklich geprüft (1 Punkt).",
            "Die Lösungsmenge L = {6} wird für den Grundbereich korrekt genannt (1 Punkt).",
            "Beide Seitenlängen 9 cm und 3 cm stehen mit Längeneinheit da (1 Punkt).",
            "Beide Flächen 81 cm² und 9 cm² stehen mit Flächeneinheit da (1 Punkt).",
            "Die Differenzprobe 81 − 9 = 72 cm² wird gezeigt (1 Punkt). Gleichwertige richtige Rechenwege gelten."
          ]
        },
        {
          "id": "ma-binomisch-4",
          "kind": "reflection",
          "points": 4,
          "prompt": "Prüfe zwei falsche Kurzwege. P behauptet (x + 3)² = x² + 9. Q behauptet (x − 3)² = x² − 9. Erkläre für beide mit Flächenstücken, was fehlt. Widerlege mindestens eine Behauptung zusätzlich mit x = 6 aus Teil 3.",
          "sample": "P lässt die zwei x-mal-3-Rechtecke weg: Richtig ist x² + 6x + 9. Für x = 6 liefert P 36 + 9 = 45 cm² statt der wirklichen Fläche 9² = 81 cm². Q übersieht beide 3x-Streifen und die doppelt abgezogene 3-mal-3-Ecke; richtig ist x² − 6x + 9. Bei x = 6 ergäbe Q 36 − 9 = 27 cm² statt 3² = 9 cm². Schon eine der Zahlenproben genügt.",
          "writingLines": 8,
          "criteria": [
            "Bei P werden die beiden fehlenden 3x-Rechtecke geometrisch benannt (1 Punkt).",
            "Der richtige A-Ausdruck x² + 6x + 9 wird angegeben (1 Punkt).",
            "Bei Q werden die zwei entfernten Streifen samt Überlapp erklärt und x² − 6x + 9 richtig angegeben (1 Punkt).",
            "Mindestens eine Behauptung wird mit x = 6 numerisch widerlegt: 45 ≠ 81 oder 27 ≠ 9 (1 Punkt)."
          ]
        },
        {
          "id": "ma-binomisch-5",
          "kind": "reflection",
          "points": 3,
          "prompt": "Neue fiktive Variante: Bei sonst gleichen Plattenmaßen beträgt die Flächendifferenz 60 cm². Bestimme x, prüfe den Bereich x > 3 und kontrolliere mit beiden Quadratflächen. Das ist keine zweite Messung der ursprünglichen Platten.",
          "sample": "Der Unterschied bleibt 12x. Also 12x = 60, x = 5 und 5 > 3. Die Seiten sind 8 cm und 2 cm; 8² = 64 cm² und 2² = 4 cm². 64 − 4 = 60 cm².",
          "writingLines": 6,
          "criteria": [
            "Die neue Gleichung 12x = 60 wird passend aufgestellt (1 Punkt).",
            "x = 5 wird ermittelt und 5 > 3 geprüft (1 Punkt).",
            "Die Flächen 64 cm² und 4 cm² werden berechnet und ihre Differenz 60 cm² kontrolliert (1 Punkt)."
          ]
        }
      ],
      "releaseEvidence": {
        "validFor": "2027/28",
        "gradeBand": "8",
        "competencyRef": "PDF-S. 2: Klasse 7 ab 2026/27, Klasse 8 ab 2027/28. § 2.2.8 auf PDF-S. 29 unter „Klassenstufe 8“: binomische Formeln geometrisch begründen, Terme durch Multiplikation von Summen umformen, auf lineare Gleichungen zurückführen und Lösungsmenge im Variablengrundbereich angeben.",
        "checkedAt": "2026-10-21"
      }
    },
    {
      "id": "ma-zufall-80-versuche",
      "subjectId": "ma",
      "title": "Was verraten 80 Ziehversuche?",
      "scope": "Ausblick Klasse 8 – freiwillig. § 2.2.6 nennt Zufall und Wahrscheinlichkeit als Ziel der Klassenstufe 8; der Fall belegt weder aktuellen Klasse-7-Unterricht noch eine vollständige M6-Abdeckung.",
      "levelStatus": "grade8-outlook",
      "released": true,
      "prerequisite": "Hilfreich sind Brüche, Prozentwerte und eine 4-mal-4-Tabelle. Vier gleich grosse Papierzettel genügen für den freiwilligen praktischen Versuch; ohne Zettel ist die Planungsvariante möglich.",
      "introduction": "In einem undurchsichtigen Beutel liegen vier gleich grosse Karten mit den Zahlen 1, 2, 3 und 4. Alle lassen sich gleich gut greifen. Pro Versuch ziehst du eine Karte, notierst die Zahl, legst genau diese Karte zurück, mischst und ziehst ein zweites Mal. Die Reihenfolge zählt: (2,4) und (4,2) sind zwei Ergebnisse. Beide Zahlen werden addiert. Unter diesen Annahmen sind die geordneten Paare gleich wahrscheinlich. A bedeutet: „Die Summe ist mindestens 6.“ B bedeutet: „Beide Zahlen sind gleich.“ Relative Häufigkeit = beobachtete A-Treffer ÷ Versuche; theoretische Wahrscheinlichkeit = Anteil der A-Ergebnisse im fairen Modell. Eine endliche Versuchsliste muss den Modellwert nicht exakt treffen.",
      "passage": "Zwei erfundene Versuchsblöcke folgen genau dieser Regel. Der zweite Block enthält 60 weitere Versuche nach den ersten 20, also zusammen 80:\n\nSumme 2: erste 20 = 1; weitere 60 = 4\nSumme 3: erste 20 = 2; weitere 60 = 7\nSumme 4: erste 20 = 3; weitere 60 = 11\nSumme 5: erste 20 = 5; weitere 60 = 16\nSumme 6: erste 20 = 4; weitere 60 = 12\nSumme 7: erste 20 = 3; weitere 60 = 7\nSumme 8: erste 20 = 2; weitere 60 = 3\n\nKontrolle: 20 + 60 = 80 Versuche. Diese Blöcke sind keine verschiedenen Kartenmodelle.",
      "tasks": [
        {
          "id": "ma-zufall-1",
          "kind": "reflection",
          "prompt": "Ergebnismenge und A (5 Kriterienpunkte): Zeichne eine 4-mal-4-Tabelle. Zeilen sind die erste Zahl 1 bis 4, Spalten die zweite Zahl 1 bis 4; trage in jedes Feld die Summe ein. Wie viele gleich wahrscheinliche geordnete Ergebnisse gibt es? Markiere alle A-Felder und berechne P(A) als gekürzten Bruch und Prozentwert. Weshalb zählen (2,4) und (4,2) getrennt?",
          "sample": "Die Summenzeilen lauten 2,3,4,5 / 3,4,5,6 / 4,5,6,7 / 5,6,7,8. Es gibt 4 · 4 = 16 gleich wahrscheinliche geordnete Paare. A umfasst (2,4), (3,3), (3,4), (4,2), (4,3), (4,4), also 6 Paare. P(A)=6/16=3/8=37,5 %. (2,4) und (4,2) sind verschiedene Ziehfolgen, obwohl sie dieselbe Summe haben.",
          "writingLines": 9,
          "criteria": [
            "1 Punkt: vollständige richtige 4-mal-4-Summentabelle; gleichwertige eindeutige Darstellung zählt.",
            "1 Punkt: 16 geordnete, unter Zurücklegen gleich wahrscheinliche Ergebnisse begründet.",
            "1 Punkt: sechs A-Paare richtig identifiziert.",
            "1 Punkt: P(A)=3/8=37,5 % aus 6/16 korrekt berechnet.",
            "1 Punkt: (2,4) und (4,2) als verschiedene Reihenfolgen erklärt. Wer nur sieben Summenwerte als gleich wahrscheinlich zählt, zählt das Experiment falsch."
          ]
        },
        {
          "id": "ma-zufall-2",
          "kind": "reflection",
          "prompt": "Gegenereignis und Vergleich (5 Kriterienpunkte): Beschreibe das Gegenereignis zu A positiv, also ohne „nicht“. Berechne seine Wahrscheinlichkeit und prüfe P(A) + P(Gegenereignis). Berechne P(B) und entscheide, ob A oder B wahrscheinlicher ist. Sind „Summe zwischen 2 und 8 einschliesslich“ und „Summe 9“ sicher oder unmöglich?",
          "sample": "Das Gegenereignis heisst „Summe höchstens 5“. Es umfasst 10 von 16 Paaren: 10/16=5/8=62,5 %. Die Probe 3/8+5/8=1 stimmt. B enthält (1,1), (2,2), (3,3), (4,4), also 4/16=1/4=25 %. A ist mit 6/16 häufiger im Modell als B mit 4/16; die Differenz sind 12,5 Prozentpunkte. Die Summe 2 bis 8 einschliesslich ist sicher, Summe 9 unmöglich.",
          "writingLines": 7,
          "criteria": [
            "1 Punkt: Gegenereignis als „Summe höchstens 5“ oder gleichwertig beschrieben.",
            "1 Punkt: 10/16=5/8 und Ergänzungsprobe zu 1 richtig.",
            "1 Punkt: B mit vier gleichen Paaren und P(B)=1/4 richtig.",
            "1 Punkt: A gegenüber B mit derselben Grundmenge 16 als wahrscheinlicher begründet.",
            "1 Punkt: Bereich 2 bis 8 als sicher und Summe 9 als unmöglich richtig eingeordnet. Das Modell bestimmt keine garantierte Rangfolge in jeder endlichen Versuchsserie."
          ]
        },
        {
          "id": "ma-zufall-3",
          "kind": "reflection",
          "prompt": "Daten statt Gewissheit (7 Kriterienpunkte): Zähle A-Treffer getrennt in den ersten 20, in den weiteren 60 und zusammen in allen 80 Versuchen. Berechne die drei relativen Häufigkeiten; runde nur beim 60er-Block den Prozentwert auf eine Nachkommastelle. Vergleiche besonders 20er- und 80er-Wert mit P(A). Beweist der 80er-Wert, dass die Karten tatsächlich fair waren?",
          "sample": "A sind die Summen 6, 7, 8. Erste 20: 4+3+2=9 Treffer, 9/20=45 %. Weitere 60: 12+7+3=22 Treffer, 22/60=11/30≈36,7 %. Zusammen: 31/80=38,75 %. Das Modell hat P(A)=37,5 %. Der 20er-Wert liegt 7,5 Prozentpunkte, der 80er-Wert 1,25 Prozentpunkte darüber. Die 80er-Liste liegt hier näher am Modellwert; das muss bei einer nächsten Liste nicht so sein. Endliche Häufigkeiten schwanken und beweisen keine perfekte Fairness.",
          "writingLines": 8,
          "criteria": [
            "1 Punkt: im ersten Block 9 A-Treffer richtig gezählt.",
            "1 Punkt: 9/20=45 % richtig.",
            "1 Punkt: im zusätzlichen 60er-Block 22 A-Treffer richtig gezählt.",
            "1 Punkt: 22/60=11/30≈36,7 % richtig; 22/80 verwechselt Block und Gesamtmenge.",
            "1 Punkt: zusammen 31 A-Treffer aus 80 richtig.",
            "1 Punkt: 31/80=38,75 % richtig.",
            "1 Punkt: Modellwert 37,5 %, beobachtete Schwankung und fehlender logischer Fairnessbeweis verständlich unterschieden. Der 20er-Block und Gesamtstand sind nicht unabhängig."
          ]
        },
        {
          "id": "ma-zufall-4",
          "kind": "reflection",
          "prompt": "Eigener kleiner Versuch (4 Kriterienpunkte): Stelle vier gleich grosse Zettel mit 1, 2, 3, 4 her und führe 20 neue Versuche durch. Notiere je beide Zahlen oder eine vollständige 4-mal-4-Strichliste. Gib A-Trefferzahl, relative Häufigkeit und eine Erklärung für mögliche Abweichung an. Falls du gerade keinen Versuch durchführen kannst: Beschreibe stattdessen genau eine offline ausführbare Regel für 20 Ziehungen und schreibe ausdrücklich „nicht durchgeführt“; die Ausführungspunkte bleiben offen.",
          "sample": "Für eine echte Durchführung gibt es keine feste A-Trefferzahl. Bei k Treffern lautet die relative Häufigkeit k/20=5k %. Die Kontrolle prüft Zurücklegen/Mischen zwischen den Zügen, 20 vollständige Ziehfolgen, richtige A-Zählung und eine sachliche Erklärung der zufälligen Abweichung. Nur als Rechenbeispiel: 8 Treffer ergeben 8/20=40 %, nicht einen Sollwert. Eine blosse Planung ohne Versuch ist als Planung zu kennzeichnen und belegt die praktische Durchführung nicht.",
          "writingLines": 10,
          "criteria": [
            "1 Ausführungspunkt: Zurücklegen/Mischen und genau 20 Versuche nachvollziehbar dokumentiert; bei nur beschriebener Planung nicht erfüllt.",
            "1 Ausführungspunkt: 20 geordnete Paare oder eine vollständige Strichliste festgehalten; bei nur beschriebener Planung nicht erfüllt.",
            "1 Punkt: eigene A-Treffer richtig gezählt und als k/20 berechnet; ohne Versuch höchstens 1 Punkt für eine eindeutige offline ausführbare Simulationsregel.",
            "1 Punkt: zufällige Abweichung ohne Gewissheitsbehauptung erklärt; ohne Versuch höchstens 1 Punkt für die ausdrückliche Kennzeichnung „nicht durchgeführt“. Keine private Personendaten erfragen."
          ]
        },
        {
          "id": "ma-zufall-5",
          "kind": "reflection",
          "prompt": "Regelwechsel finden (4 Kriterienpunkte): Jemand lässt die erste Karte vor der zweiten Ziehung draussen, verwendet aber weiter P(A)=3/8. Was ändert sich am Modell? Zähle die möglichen geordneten Paare ohne Zurücklegen und die A-Treffer. Gib die neue Wahrscheinlichkeit als gekürzten Bruch an. Eine Pfadregel ist nicht nötig.",
          "sample": "Ohne Zurücklegen sind (1,1), (2,2), (3,3), (4,4) unmöglich. Es bleiben 16−4=12 gleich wahrscheinliche geordnete Paare. Von den sechs bisherigen A-Paaren entfallen (3,3) und (4,4); übrig sind (2,4), (3,4), (4,2), (4,3), also vier A-Treffer. Neu gilt P(A)=4/12=1/3≈33,3 %. Die frühere Rechnung 6/16=3/8 verwendet verbotene Paare und ist für die neue Ziehregel ungeeignet.",
          "writingLines": 7,
          "criteria": [
            "1 Punkt: Wegfall der gleichen Zahlenpaare als Regeländerung erklärt.",
            "1 Punkt: zwölf mögliche geordnete Paare ohne Zurücklegen richtig gezählt.",
            "1 Punkt: vier verbleibende A-Treffer korrekt gefunden.",
            "1 Punkt: 4/12=1/3 und Untauglichkeit des alten Nenners nachvollziehbar erklärt."
          ]
        }
      ],
      "releaseEvidence": {
        "validFor": "2027/28",
        "gradeBand": "8",
        "competencyRef": "PDF-S. 2: Inkraftsetzung Klasse 7 ab 2026/27, Klasse 8 ab 2027/28. § 2.2.6 PDF-S. 28: Zufall und Wahrscheinlichkeit mit expliziter Zielmarke Klassenstufe 8; relative Häufigkeit, Simulation, ein- und zweistufige Ereignisse, Gegenereignis und Laplace-Wahrscheinlichkeit.",
        "checkedAt": "2026-10-21"
      }
    },
    {
      "id": "de-sprachreflexion-bericht",
      "subjectId": "de",
      "title": "Was ein Bericht sagt – und was offenbleibt",
      "scope": "Freiwillige 7/8-Übung zu indirekter Rede, gedachter Bedingung und Wortbedeutung. § 2.2.5 nennt Zielkompetenzen für Klasse 8; die Unterrichtsfolge ist unbekannt.",
      "levelStatus": "grade78-flex",
      "released": true,
      "prerequisite": "Hilfreich sind direkte und indirekte Rede sowie Präsensformen. Die Formenhilfe im Auftrag kann benutzt werden; persönliche Angaben sind nicht nötig.",
      "introduction": "Ein Plan, Maras Aussage und ein Flyer-Entwurf klingen unterschiedlich sicher. Prüfe die fünf Textstellen. Konjunktiv I (sie plane, sie habe, der Platz sei) kann Maras Aussage kenntlich machen; er bestätigt sie nicht. Konjunktiv II (hätte, könnte) zeigt hier eine gedachte Bedingung und eine Möglichkeit. Die Formenhilfe ist freiwillig. „Beleg“ meint eine passende Textstelle; ein sinnähnliches Wort muss im Satz passen.",
      "passage": "Z1 Am Donnerstag bereitet eine Projektgruppe in einem erfundenen Jugendhaus eine kleine Ausstellung vor. Bisher ist kein Wagen fertig; der Bau ist erst für Freitag geplant.\n\nZ2 Der schriftliche Arbeitsplan nennt für Freitag drei mobile Bücherwagen. Für diese drei liegt Material bereit. Eine Werkbank ist verfügbar; eine zweite ist noch nicht zugesagt.\n\nZ3 Projektleiterin Mara sagt: „Ich plane für Freitag drei mobile Bücherwagen. Dafür habe ich genug Material.“\n\nZ4 Sie ergänzt: „Der Platz ist knapp. Wenn ich eine zweite Werkbank hätte, könnte ich vielleicht einen vierten Wagen bauen.“\n\nZ5 In einem noch nicht freigegebenen Flyer-Entwurf steht: „Am Freitag werden sicher vier Wagen fertig!“",
      "tasks": [
        {
          "id": "de-sprachreflexion-1",
          "kind": "reflection",
          "prompt": "Was ist belegt, was nur möglich? Nenne zwei Angaben, die Z2 als Planung oder verfügbare Mittel belegt. Nenne danach zwei Dinge, die für Freitag nicht sicher sind. Belege deine Unterscheidung mit mindestens zwei passenden Textstellen Z1–Z5. Ein geplanter Wagen ist nicht schon fertig.",
          "sample": "Z2 belegt, dass drei Bücherwagen für Freitag geplant sind und für diese drei Material bereitliegt. Ob die drei tatsächlich fertig werden, ist noch offen: Laut Z1 ist bislang kein Wagen fertig. Ein vierter Wagen ist ebenfalls nicht sicher, weil Mara ihn in Z4 nur für den Fall einer zweiten Werkbank und selbst dann nur als Möglichkeit nennt.",
          "writingLines": 6,
          "criteria": [
            "1 Punkt: Der Plan für drei Bücherwagen am Freitag wird als Plan benannt, nicht als fertiges Ergebnis.",
            "1 Punkt: Material für diese drei oder die erste verfügbare Werkbank wird als zweiter belegter Mittel- oder Planungsfakt genannt.",
            "1 Punkt: Die tatsächliche Fertigstellung der drei am Freitag wird als offen erkannt.",
            "1 Punkt: Ein vierter Wagen wird als bedingte und zusätzlich ungewisse Möglichkeit erkannt; die zweite Werkbank ist nicht zugesagt.",
            "1 Punkt: Mindestens zwei passende Textstellen werden den Angaben verständlich zugeordnet. Andere sachlich richtige Unsicherheiten sind zulässig."
          ]
        },
        {
          "id": "de-sprachreflexion-2",
          "kind": "reflection",
          "prompt": "Schreibe für Menschen, die Mara nicht selbst gehört haben, eine sachliche Meldung in etwa zwei bis vier Sätzen. Gib Z3–Z4 als Maras Aussagen wieder. Verwende mindestens zwei passende Konjunktiv-I-Formen für ihre berichteten Angaben und passende Konjunktiv-II-Formen für die gedachte zweite Werkbank und den möglichen vierten Wagen. Halte offen, was am Freitag fertig wird. Formenhilfe: sie plane; sie habe; der Platz sei; wenn sie eine zweite Werkbank hätte, könnte sie einen vierten Wagen bauen.",
          "sample": "Mara erklärt, sie plane für Freitag drei mobile Bücherwagen und habe dafür genügend Material. Sie sagt, der Platz sei knapp. Wenn sie eine zweite Werkbank hätte, könnte sie vielleicht einen vierten Wagen bauen. Ob die geplanten Wagen tatsächlich fertig werden, ist noch offen.",
          "writingLines": 8,
          "criteria": [
            "1 Punkt: Mara ist als Urheberin der wiedergegebenen Angaben erkennbar; ihre Aussage wird nicht als gesichertes Ergebnis ausgegeben.",
            "1 Punkt: Ihr Plan für drei Wagen wird inhaltlich richtig berichtet.",
            "1 Punkt: Ihre Angabe über genügend Material für diese drei wird inhaltlich richtig berichtet.",
            "1 Punkt: Mindestens zwei passende Konjunktiv-I-Formen sind grammatisch richtig eingesetzt. Eine andere verständliche indirekte Form kann die Inhaltspunkte erhalten, auch wenn dieser Übungsformpunkt entfällt.",
            "1 Punkt: Die zweite Werkbank erscheint als gedachte, nicht zugesagte Bedingung in passender Konjunktiv-II-Form, etwa hätte oder stünde.",
            "1 Punkt: Der vierte Wagen bleibt eine Möglichkeit mit passender Konjunktiv-II-Form, etwa könnte. Das Wort „vielleicht“ ist nicht zwingend, wenn die Unsicherheit anderweitig klar erhalten bleibt.",
            "1 Punkt: Die Meldung ist verständlich und sachlich; sie behauptet keine garantierte Fertigstellung. Kleine Sprachfehler ohne Bedeutungsverlust entwerten den richtigen Inhalt nicht."
          ]
        },
        {
          "id": "de-sprachreflexion-3",
          "kind": "reflection",
          "prompt": "Prüfe den Flyer-Satz in Z5. Erkläre zwei verschiedene Gründe, weshalb „sicher vier Wagen fertig“ über die Quellen hinausgeht. Formuliere danach einen kurzen Ersatzsatz für den Flyer, der den Dreierplan verständlich wiedergibt und keinen fertigen vierten Wagen verspricht.",
          "sample": "Der Flyer macht aus dem Plan für drei Wagen eine sichere Fertigstellung, obwohl vor Freitag noch keiner fertig ist. Außerdem hängt der vierte Wagen von einer nicht zugesagten zweiten Werkbank ab und ist selbst dann nur möglich. Besser: „Die Gruppe plant, am Freitag drei mobile Bücherwagen zu bauen.“ Eine bedingt formulierte Viereroption wäre ebenfalls zulässig.",
          "writingLines": 6,
          "criteria": [
            "1 Punkt: Der Unterschied zwischen Dreierplan und nicht belegter sicherer Fertigstellung wird erklärt.",
            "1 Punkt: Beim vierten Wagen werden die nicht zugesagte zweite Werkbank und Maras zusätzliche Unsicherheit als weiterer Fehler erkannt.",
            "1 Punkt: Der Ersatzsatz beschreibt die drei Wagen als Plan und macht sie nicht vorzeitig fertig.",
            "1 Punkt: Ein vierter Wagen wird im Ersatzsatz entweder weggelassen oder ausdrücklich bedingt und ungewiss dargestellt. Andere sachlich gleichwertige Formulierungen gelten."
          ]
        },
        {
          "id": "de-sprachreflexion-4",
          "kind": "reflection",
          "prompt": "Eine Person möchte in Z4 „knapp“ durch „reichlich“ und „vielleicht“ durch „sicher“ ersetzen. Erkläre für beide Wortpaare die veränderte Aussage. Schlage für „knapp“ und „vielleicht“ je ein sinnähnliches Wort oder eine sinngleiche Wendung vor, die in Z4 passt.",
          "sample": "„Reichlich Platz“ bedeutet das Gegenteil von Maras Aussage „Der Platz ist knapp“; passend wäre „Der Platz ist begrenzt“. „Sicher“ würde aus dem nur möglichen vierten Wagen ein festes Ergebnis machen. Statt „vielleicht“ passt hier „möglicherweise“ oder „eventuell“. Aus der fehlenden Zusage einer zweiten Werkbank allein lässt sich die Raumgröße nicht ableiten.",
          "writingLines": 5,
          "criteria": [
            "1 Punkt: „Reichlich“ wird als Gegensatz zu Maras ausdrücklich knappem Platz erklärt; die Werkbankzusage wird nicht als Beweis der Raumgröße benutzt.",
            "1 Punkt: „Begrenzt“ oder „nur wenig Platz“ oder ein im Satz gleichwertiger Ausdruck erhält den Sinn von „knapp“.",
            "1 Punkt: „Sicher“ wird als unzulässige Aufwertung der Möglichkeit zum feststehenden Ergebnis erklärt.",
            "1 Punkt: „Möglicherweise“, „eventuell“ oder eine andere passende Wendung erhält die Unsicherheit von „vielleicht“."
          ]
        }
      ],
      "releaseEvidence": {
        "validFor": "2026/27",
        "gradeBand": "7/8",
        "competencyRef": "S. 2: Inkraftsetzung für Klasse 7 ab 2026/27. § 2.2.5 S. 30–31: Sprachreflexion, funktionale Untersuchung von Wortformen und Wortbedeutung unter Zielmarke Klassenstufe 8. § 3.5 S. 51–52: Konjunktiv I/II sowie Synonyme und Antonyme in der Spalte 7/8.",
        "checkedAt": "2026-10-21"
      }
    },
    {
      "id": "en-sprachreflexion-lesewerkstatt",
      "subjectId": "en",
      "title": "An updated notice: meaning and tone",
      "scope": "Ausblick Klasse 8 – freiwillig. Sprachreflexion nach § 2.2.6 ist ausdrücklich ein Klasse-8-Ziel der ersten Fremdsprache und gilt für Klasse 8 ab 2027/28. Kein belegter aktueller Klasse-7-Stoff und kein Beitrag zur Klasse-7-Jahresabdeckung.",
      "levelStatus": "grade8-outlook",
      "released": true,
      "prerequisite": "Hilfreich: einfache englische Zeit- und Ortsangaben sowie eine kurze höfliche Nachricht lesen und schreiben. Wortstützen stehen in der Einführung; ein analoges Wörterbuch reicht für Aufgabe 4.",
      "introduction": "Fiktive Situation: Die Lesewerkstatt einer Stadtbibliothek hat ihre Planung geändert. Mia möchte der Organisatorin Ms Evans, die sie noch nicht kennt, auf Englisch schreiben. Prüfe nicht nur einzelne Wörter, sondern auch, was die Nachricht bei der Empfängerin bewirkt. Wortstütze: updated notice = aktualisierte Mitteilung; get a ticket = eine Karte bekommen; when the room is announced = wenn der Raum bekanntgegeben wird. Andere richtige Formulierungen zählen ebenfalls.",
      "passage": "Alter Aushang: Dienstag, 16 Uhr, Raum 2.\n\nNeue Mitteilung: Donnerstag, 16 Uhr. Raum 2 gilt nicht mehr; der neue Raum wird noch bekanntgegeben. Eine kostenlose Eintrittskarte bekommt man am Eingang.\n\nMias erster Entwurf:\nDear Ms Evans,\nThe actual reading workshop is on Thursday at 4 pm. I can become a free ticket at the entrance. Send me the room number.\nBye, Mia",
      "tasks": [
        {
          "id": "en-sprachreflexion-1",
          "kind": "reflection",
          "prompt": "Bedeutung und Adressat (6 Punkte): Untersuche actual, become sowie Send me … / Bye. Erkläre jeweils Mias Absicht, die mögliche englische Bedeutung oder Wirkung und eine passendere Formulierung. Bezeichne nicht den ganzen Entwurf pauschal als falsch: Einzelne Wörter können grammatisch sein, hier aber Mias Absicht verfehlen.",
          "sample": "Mit actual meint Mia „aktuell“; the actual workshop klingt eher nach der wirklichen Veranstaltung im Gegensatz zu einer anderen. Klarer: The updated notice says the workshop is now on Thursday at 4 pm. Mit become meint Mia „bekommen“; I can become a ticket sagt jedoch, dass sie selbst zu einer Karte wird. Klarer: I can get a free ticket at the entrance. Send me the room number klingt im Erstkontakt fordernd und die neue Raumangabe ist noch nicht veröffentlicht. Höflicher: Could you please tell me the new room when it is announced? Statt Bye passt hier Kind regards.",
          "writingLines": 10,
          "criteria": [
            "2 Punkte: Bei actual werden Mias Absicht „aktuell/neu“ und die mögliche Bedeutung „wirklich/tatsächlich“ im Kontext unterschieden; now on Thursday oder updated notice ist eine passende Korrektur. Actual wird nicht pauschal als englisch falsch gewertet.",
            "2 Punkte: Bei become werden „bekommen“ und „zu etwas werden“ unterschieden; get/receive a free ticket oder eine gleichwertige Formulierung trifft die Absicht.",
            "2 Punkte: Der Imperativ Send me … wird für den Erstkontakt als wenig höflich erkannt und in eine passende Frage umformuliert; Bye wird durch eine angemessene Schlussformel ersetzt. Die künftige Raumangabe wird erfragt, ohne einen unbekannten Bestätigungsstand zu behaupten."
          ]
        },
        {
          "id": "en-sprachreflexion-2",
          "kind": "reflection",
          "prompt": "Vollständige neue Nachricht (8 Punkte): Schreibe Ms Evans eine kurze, höfliche E-Mail auf Englisch. Nenne den neuen Tag und Beginn, die überholte Raumangabe und die kostenlose Karte am Eingang. Frage nach dem neuen Raum, der noch nicht bekanntgegeben wurde. Erfinde keine Raumnummer. Eine andere Satzanzahl ist richtig, wenn die Nachricht klar und vollständig ist.",
          "sample": "Dear Ms Evans,\nI saw the updated notice. The reading workshop is now on Thursday at 4 pm. I understand that room 2 is no longer the meeting place and that I can get a free ticket at the entrance. Could you please tell me the new room when it is announced?\nKind regards,\nMia",
          "writingLines": 10,
          "criteria": [
            "1 Punkt: Donnerstag und 16 Uhr/4 pm werden als neuer Tag und Beginn korrekt zusammen genannt.",
            "1 Punkt: Raum 2 wird als überholter Ort erkannt, nicht als neuer Treffpunkt ausgegeben.",
            "1 Punkt: Es wird keine neue Raumnummer erfunden; die Frage nach dem neuen Raum zeigt bereits, dass dessen Angabe noch unbekannt ist. Ein zusätzlicher Satz dazu ist nicht nötig.",
            "1 Punkt: Die kostenlose Eintrittskarte am Eingang wird richtig wiedergegeben.",
            "1 Punkt: Eine verständliche, höfliche Frage nach dem künftigen Raum wird gestellt; eine blosse Aufforderung oder Absage genügt nicht.",
            "1 Punkt: Anrede und Abschluss passen zu einer ersten Nachricht an Ms Evans; gleichwertige Formeln gelten.",
            "1 Punkt: „bekommen“ wird mit get/receive oder gleichwertig ausgedrückt, ohne become im falschen Sinn zu verwenden.",
            "1 Punkt: Der Text ist zusammenhängend und verständlich; kleine Formfehler ohne Bedeutungsverlust entwerten andere richtige Angaben nicht."
          ]
        },
        {
          "id": "en-sprachreflexion-3",
          "kind": "reflection",
          "prompt": "Kleine Bedeutungsprobe (3 Punkte): Vergleiche The actual workshop is on Thursday mit The workshop is actually on Thursday. Warum kann der zweite Satz bei einer Korrektur des alten Dienstagsplans sinnvoll sein? Warum sagt der erste Satz „der aktuelle Plan“ weniger eindeutig? Antworte auf Deutsch oder in einfachem Englisch.",
          "sample": "The workshop is actually on Thursday kann heissen: Tatsächlich ist sie am Donnerstag, anders als der alte Aushang vermuten liess. The actual workshop meint eher die wirkliche Veranstaltung im Gegensatz zum Beispiel zu einer Probe; es bezeichnet nicht eindeutig die neueste Mitteilung. The updated notice says … oder The workshop is now on Thursday macht die Änderung klarer. Actual ist nicht grundsätzlich falsch, und actually heisst nicht immer current.",
          "writingLines": 6,
          "criteria": [
            "1 Punkt: Actually wird im Korrekturkontext als „tatsächlich/entgegen der alten Annahme“ erklärt.",
            "1 Punkt: The actual workshop wird als „die wirkliche Veranstaltung“ erläutert; ohne passenden Gegensatz bezeichnet es nicht eindeutig den aktuellen Plan.",
            "1 Punkt: Eine klarere Korrekturformulierung wie updated notice oder now on Thursday wird genannt; actual und actually werden nicht als überall falsch bzw. austauschbar dargestellt."
          ]
        },
        {
          "id": "en-sprachreflexion-4",
          "kind": "reflection",
          "prompt": "Prüfen statt raten (3 Punkte): Mia ist sich bei bekommen → become unsicher. Beschreibe zwei konkrete Prüfschritte mit einem Wörterbuch oder guten Satzbeispielen und begründe, warum ähnliche Buchstaben im Deutschen und Englischen noch keine gleiche Bedeutung beweisen. Du brauchst keine Anmeldung und sendest keine persönliche Nachricht an einen externen Dienst.",
          "sample": "Ich schaue im zweisprachigen Wörterbuch nach, wie „bekommen“ in diesem Zusammenhang übersetzt wird, und prüfe umgekehrt die Bedeutung von become. Danach vergleiche ich englische Beispielsätze mit get a ticket und become a …: Wer erhält etwas, und wer wird zu etwas? Die ähnliche Schreibweise der deutschen und englischen Wörter beweist keine gleiche Bedeutung.",
          "writingLines": 6,
          "criteria": [
            "1 Punkt: Die Wörterbuchprüfung vergleicht gezielt beide Bedeutungsrichtungen von bekommen und become.",
            "1 Punkt: Ein passender Satz- oder Kontextvergleich wie get a ticket gegenüber become a … prüft Subjekt und gemeinte Handlung.",
            "1 Punkt: Die Grenze der blossen Schreibähnlichkeit wird begründet; ein analoges Wörterbuch genügt, ein Live-Webzugang ist nicht Voraussetzung."
          ]
        }
      ],
      "releaseEvidence": {
        "validFor": "2027/28",
        "gradeBand": "8",
        "competencyRef": "Erste Fremdsprache: Inhaltsverzeichnis PDF-S. 4; Inkraftsetzung S. 2: Klasse 8 ab 2027/28. § 2.2.6 S. 31–32, ausdrücklich Klassenstufe 8: Sprachvergleich und false friends, angeleitete Fehlerkorrektur, Anrede- und Höflichkeitsformen, Adressatenorientierung sowie Wörterbuchstrategien. § 2.2 S. 25: A2/punktuell B1 als Ziel erst am Ende der Klasse 8.",
        "checkedAt": "2026-10-21"
      }
    },
    {
      "id": "fr-sprachreflexion-einladung",
      "subjectId": "fr",
      "title": "Wen laden wir wann und wie ein?",
      "scope": "Ausblick Klasse 8 – freiwillig. Sprachreflexion zu Zeitformen und Anrede ist in § 3.2.6 ausdrücklich Ziel der Klassenstufe 8; kein belegter aktueller Klasse-7-Stoff und kein Beitrag zur Klasse-7-Jahresabdeckung.",
      "levelStatus": "grade8-outlook",
      "released": true,
      "prerequisite": "Hilfreich: einfache französische Präsensformen, tu/vous und Zeitwörter wie hier und demain. Die Wortstütze erklärt alle drei verglichenen Zeitformen; wähle das Thema nur zum freiwilligen Vorarbeiten oder wenn es bereits im Unterricht vorkommt.",
      "introduction": "In diesem erfundenen Fall vergleichst du Anreden und Zeitformen. Heute ist Dienstag. Wortstütze bei Bedarf: une affiche = ein Plakat; venir = kommen; tu peux = du kannst; vous pouvez = Sie können oder ihr könnt; nous préparons = wir bereiten vor; nous avons préparé = wir haben vorbereitet; nous allons préparer = wir werden vorbereiten; hier = gestern; aujourd’hui = heute; demain = morgen. Bei einer höflichen Frage an eine Person ist „Pouvez-vous venir … ?“ möglich. Die Bedeutung von vous hängt vom Kontext ab.",
      "passage": "Lina lädt zwei Personen einzeln für morgen, Mittwoch, 16 Uhr, in einen erfundenen Jugendclub ein. Dort soll ein Plakat gemeinsam vorbereitet und hergestellt werden. Bis Dienstag hat noch niemand mit dem Plakat begonnen oder irgendetwas dafür vorbereitet; die gesamte Arbeit ist erst für Mittwoch geplant. Zoé ist eine enge Freundin, die Lina mit tu anspricht. Madame Laurent ist eine erwachsene Ansprechpartnerin, die Lina kaum kennt; für ihre Nachricht an diese eine Person wählt Lina die höfliche Anrede vous.\n\nEntwurf A an Zoé:\nSalut Zoé, tu peux venir demain à 16 h ? Nous avons préparé l’affiche hier. À bientôt, Lina.\n\nEntwurf B an Madame Laurent:\nBonjour Madame Laurent, tu peux venir demain à 16 h ? Nous allons préparer l’affiche ensemble. Cordialement, Lina.\n\nIn jedem Entwurf steckt genau ein wichtiger Fehler. Alle Personen und Termine sind erfunden; keine Nachricht wird versendet.",
      "tasks": [
        {
          "id": "fr-sprachreflexion-1",
          "kind": "reflection",
          "points": 4,
          "prompt": "Fehler und Wirkung finden (4 Kriterienpunkte): Markiere in A und B jeweils die eine Stelle, die zur Situation nicht passt. Erkläre auf Deutsch, welche falsche Zeitinformation oder Beziehung die Form nahelegt.",
          "sample": "A: „Nous avons préparé l’affiche hier“ behauptet eine bereits gestern abgeschlossene Vorbereitung. Bis Dienstag hat aber noch niemand mit dem Plakat begonnen; die Arbeit ist erst Mittwoch geplant. „tu peux“ passt zur engen Freundin Zoé. B: „tu peux venir“ ist die vertraute Anrede, obwohl Lina für diese Nachricht an die ihr kaum bekannte Madame Laurent „vous“ gewählt hat. „Nous allons préparer“ beschreibt den künftigen Plan richtig.",
          "writingLines": 6,
          "criteria": [
            "A: Die vergangene Aussage „Nous avons préparé … hier“ wird als Fehler gefunden (1 Punkt).",
            "A: Der Widerspruch zur ausdrücklich noch nicht begonnenen Vorbereitung bis Dienstag wird erklärt (1 Punkt).",
            "B: „tu peux“ wird als unpassende Anrede erkannt (1 Punkt).",
            "B: Die für diese konkrete Beziehung gewählte höfliche Anrede „vous“ wird begründet, ohne eine allgemeine Pflicht für alle Erwachsenen zu behaupten (1 Punkt)."
          ]
        },
        {
          "id": "fr-sprachreflexion-2",
          "kind": "reflection",
          "points": 8,
          "prompt": "Beide Nachrichten korrigieren (8 Kriterienpunkte): Schreibe A und B als kurze vollständige französische Einladungen neu. Bewahre Mittwoch um 16 Uhr und das gemeinsame Vorbereiten des Plakats. Für Zoé gilt die vertraute, für Madame Laurent die im Fall gewählte höfliche Anrede. Das Plakat wird erst morgen vorbereitet. Natürliche gleichbedeutende Sätze sind möglich.",
          "sample": "A: Salut Zoé, tu peux venir demain à 16 h ? Nous allons préparer l’affiche ensemble. À bientôt, Lina.\n\nB: Bonjour Madame Laurent, pouvez-vous venir demain à 16 h ? Nous allons préparer l’affiche ensemble. Cordialement, Lina.",
          "writingLines": 9,
          "criteria": [
            "A: Eine passende vertraute Anrede wie „Salut Zoé“ (1 Punkt).",
            "A: Eine verständliche vertraute Bitte mit „tu“, zum Beispiel „tu peux“ oder „Est-ce que tu peux“ (1 Punkt).",
            "A: Mittwoch als „demain“ oder „mercredi“ und 16 Uhr passend genannt (1 Punkt).",
            "A: Das gemeinsame Vorbereiten des Plakats als zukünftiger Plan formuliert, zum Beispiel mit „nous allons préparer“ oder sinngemäß „nous allons faire“ (1 Punkt).",
            "B: Höfliche situationsgerechte Anrede an Madame Laurent (1 Punkt).",
            "B: Eine verständliche höfliche Bitte mit „vous“, etwa „pouvez-vous“, „est-ce que vous pouvez“ oder auch „pourriez-vous“; Letzteres ist nicht vorausgesetzt (1 Punkt).",
            "B: Mittwoch als „demain“ oder „mercredi“ und 16 Uhr passend genannt (1 Punkt).",
            "B: Das gemeinsame Vorbereiten des Plakats als zukünftiger Plan formuliert (1 Punkt). Ein höflicher Abschluss ist willkommen, aber kein eigener Punkt. Kleine Akzent- oder Artikelfehler ohne Bedeutungsverlust entwerten den sachlich richtigen Zeit- und Anredebezug nicht automatisch."
          ]
        },
        {
          "id": "fr-sprachreflexion-3",
          "kind": "reflection",
          "points": 3,
          "prompt": "Zeitbezug vergleichen (3 Kriterienpunkte): Erkläre auf Deutsch, was diese drei Sätze zeitlich bedeuten und welcher am Dienstag zur Situation passt. Begründe mit der Form und der Situation, nicht nur mit einem Zeitwort.\n1. Nous avons préparé l’affiche hier.\n2. Nous préparons l’affiche aujourd’hui.\n3. Nous allons préparer l’affiche demain.",
          "sample": "1. „Nous avons préparé … hier“ ist passé composé und behauptet eine abgeschlossene Vorbereitung gestern; das ist im Fall falsch. 2. „Nous préparons … aujourd’hui“ ist Präsens und behauptet Arbeit heute, also Dienstag; auch das ist falsch. 3. „Nous allons préparer … demain“ ist futur proche und beschreibt den Plan für Mittwoch; nur dieser Satz passt.",
          "writingLines": 6,
          "criteria": [
            "Satz 1 als abgeschlossene Vergangenheit („avons préparé“, passé composé) erklärt und wegen der noch nicht begonnenen Arbeit als unpassend erkannt (1 Punkt).",
            "Satz 2 als Gegenwart/heute („préparons“, Präsens) erklärt und wegen der erst für Mittwoch geplanten Arbeit als unpassend erkannt (1 Punkt).",
            "Satz 3 als morgigen Zukunftsplan („allons préparer“, futur proche) erkannt und mit Mittwoch als einzig passend begründet (1 Punkt)."
          ]
        },
        {
          "id": "fr-sprachreflexion-4",
          "kind": "reflection",
          "points": 3,
          "prompt": "Neuer Zeitpunkt (3 Kriterienpunkte): Am Donnerstag nach dem Treffen soll Lina Madame Laurent mitteilen, dass die Gruppe das Plakat am Mittwoch tatsächlich vorbereitet hat. Schreibe einen passenden französischen Satz und erkläre kurz, warum nun eine andere Zeitform als in der Einladung nötig ist. Erfinde keine Angaben zu Qualität oder Ergebnis.",
          "sample": "Madame Laurent, nous avons préparé l’affiche hier. Am Donnerstag ist Mittwoch bereits vorbei. Deshalb beschreibt das passé composé die geschehene Vorbereitung, während „nous allons préparer“ am Dienstag nur einen Plan ausdrückte.",
          "writingLines": 5,
          "criteria": [
            "Ein verständlicher französischer Satz verwendet „nous avons préparé l’affiche“ oder eine gleichwertige korrekte Vergangenheitsform (1 Punkt).",
            "„hier“ oder Mittwoch wird aus Donnerstagsperspektive richtig genannt (1 Punkt).",
            "Der Wechsel vom Zukunftsplan zur bereits geschehenen Handlung wird kurz erklärt (1 Punkt)."
          ]
        },
        {
          "id": "fr-sprachreflexion-5",
          "kind": "reflection",
          "points": 2,
          "prompt": "Vous genauer prüfen (2 Kriterienpunkte): Jemand behauptet: „vous bedeutet immer mehrere Personen.“ Prüfe das an der Nachricht an Madame Laurent und nenne die zweite mögliche Verwendung von vous.",
          "sample": "Die Behauptung ist falsch. Lina schreibt hier einer einzelnen Person und wählt „vous“ als höfliche Anrede. „Vous“ kann in einem anderen Zusammenhang auch mehrere Personen ansprechen.",
          "writingLines": 4,
          "criteria": [
            "„Vous“ als im Fall gewählte höfliche Anrede einer einzelnen Person erkannt (1 Punkt).",
            "Die Anrede mehrerer Personen als weitere mögliche Bedeutung genannt (1 Punkt). Die Wahl hängt von Beziehung und Situation ab; keine private Beziehung oder Herkunft des Kindes erfragen."
          ]
        }
      ],
      "releaseEvidence": {
        "validFor": "2027/28",
        "gradeBand": "8",
        "competencyRef": "Inkraftsetzung PDF-S. 2: Klasse 8 ab 2027/28. Zweite Fremdsprache § 3.2.6 PDF-S. 63–64: Form-Funktion-Vergleich, einfache und zusammengesetzte Zeitformen sowie situationsgerechte Anrede unter expliziter Zielmarke Klassenstufe 8; § 3.5.2 PDF-S. 82 nennt tu/vous, passé composé, futur proche, hier und demain als 7/8-Orientierung.",
        "checkedAt": "2026-10-21"
      }
    },
    {
      "id": "fr-reponse-elodie",
      "subjectId": "fr",
      "title": "Répondre à Élodie",
      "scope": "Ausblick Klasse 8 – freiwillig. Persönliche Nachrichten schreiben steht in § 3.2.4 ausdrücklich unter Klassenstufe 8; Lottes aktueller Sprachstand und Unterrichtsfolge sind unbekannt, kein Beitrag zur Klasse-7-Jahresabdeckung.",
      "levelStatus": "grade8-outlook",
      "released": true,
      "prerequisite": "Hilfreich: einfache persönliche Nachrichten verstehen und kurze französische Sätze bilden. Eine Wortstütze ist vorhanden; wähle das Thema zum freiwilligen Vorarbeiten oder wenn es im Unterricht vorkommt.",
      "introduction": "Du schreibst in dieser erfundenen Situation als Noa. Lies Élodies Nachricht und Noas Notizzettel. Antworte auf Französisch mit einfachen, verständlichen Sätzen. Wortstütze bei Bedarf: je ne peux pas venir = ich kann nicht kommen; j’ai fait un dessin = ich habe eine Zeichnung gemacht; on peut se retrouver = wir können uns treffen; la salle d’arts plastiques = Kunstraum; jusqu’à = bis.",
      "passage": "Nachricht von Élodie:\nSalut Noa ! Mercredi, je ne peux pas venir. Je peux venir jeudi après 15 h. J’ai fait un dessin de mon chat. Est-ce que je peux apporter mon dessin ? À bientôt, Élodie.\n\nNoas Notizzettel:\n- Der Kunstraum ist am Donnerstag von 15:30 bis 16:15 Uhr für die Tierausstellung frei.\n- Eigene Zeichnungen dürfen mitgebracht werden.\n- Noa zeichnet gern Vögel.\n- Noa möchte Élodie eine passende Frage zu ihrem Katzenbild stellen.",
      "tasks": [
        {
          "id": "fr-elodie-1",
          "kind": "choice",
          "prompt": "Welcher Termin passt zu Élodies Nachricht und Noas Notizzettel?",
          "options": [
            "Donnerstag 15:30–16:15 Uhr im Kunstraum.",
            "Mittwoch 15:30–16:15 Uhr im Kunstraum.",
            "Donnerstag 14:30–15:00 Uhr im Kunstraum."
          ],
          "correct": "Donnerstag 15:30–16:15 Uhr im Kunstraum.",
          "explanation": [
            "Élodie kann Mittwoch nicht und Donnerstag erst nach 15 Uhr kommen.",
            "Der Kunstraum ist am Donnerstag von 15:30 bis 16:15 Uhr frei.",
            "14:30 Uhr liegt vor Élodies möglicher Ankunft und ausserhalb der angegebenen Raumzeit."
          ]
        },
        {
          "id": "fr-elodie-2",
          "kind": "reflection",
          "prompt": "Schreibe Élodie eine persönliche Antwort auf Französisch, ungefähr fünf bis sieben kurze Sätze. Greife ihren verhinderten Mittwoch auf, schlage Donnerstag mit Beginn, Ende und Ort vor, beantworte ihre Frage zum Bild, sage, was Noa gern zeichnet, und stelle eine passende Frage zum Katzenbild. Verwende Anrede und Abschluss. Eine andere Satzanzahl ist richtig, wenn alle Inhalte verständlich sind; schreibe keine Daten über dich selbst.",
          "sample": "Salut Élodie, merci pour ton message. Je comprends : tu ne peux pas venir mercredi. On peut se retrouver jeudi de 15 h 30 à 16 h 15 dans la salle d’arts plastiques. Oui, tu peux apporter le dessin de ton chat. Moi, j’aime dessiner des oiseaux. Tu peux écrire une petite phrase sur ton chat ? À bientôt, Noa.",
          "writingLines": 10,
          "criteria": [
            "Élodies verhinderten Mittwoch richtig aufgegriffen.",
            "Donnerstag, 15:30 Uhr Beginn und 16:15 Uhr Ende passend vorgeschlagen.",
            "Der Kunstraum ist als Ort erkennbar; „in der Schule“ allein ist zu ungenau.",
            "Die Frage nach ihrer Katzenzeichnung wird klar mit Ja beantwortet; eigene Zeichnungen sind erlaubt.",
            "Noas Vorliebe für Vogelzeichnungen wird genannt; ein schon fertiger eigener Beitrag ist nicht belegt.",
            "Eine zum Katzenbild passende, verständliche französische Frage wird gestellt; sinngemäße Varianten gelten.",
            "Anrede und Abschluss sind vorhanden; kleine Sprachfehler ohne Bedeutungsverlust führen nicht automatisch zum Misserfolg. Inhalt und Verständlichkeit getrennt beurteilen."
          ]
        }
      ],
      "releaseEvidence": {
        "validFor": "2027/28",
        "gradeBand": "8",
        "competencyRef": "Inkraftsetzung S. 2: Klasse 8 ab 2027/28. Zweite Fremdsprache § 3.2.4 S. 62: einfache persönliche Nachrichten schreiben und Informationen aus gelesenem Material nutzen, explizite Zielmarke Klassenstufe 8; § 3.2 S. 59: A2 als Ziel Ende Klasse 8.",
        "checkedAt": "2026-10-21"
      }
    },
    {
      "id": "de-inhaltsangabe-wegkarte",
      "subjectId": "de",
      "title": "Eine Inhaltsangabe verbessern",
      "scope": "Freiwillige Übung im gültigen 7/8-Rahmen zu Erzähltext, Inhaltsangabe und Überarbeitung; die Unterrichtsfolge ist unbekannt.",
      "levelStatus": "grade78-flex",
      "released": true,
      "introduction": "Eine Inhaltsangabe gibt die wichtigen Handlungsschritte knapp und sachlich wieder. Lies die erfundene Erzählung und frage dich, was für Problem und Lösung wirklich wichtig ist. Die Kürzel Z1–Z4 bezeichnen Textabschnitte. Schreibe in eigenen Worten im Präsens, ohne direkte Rede oder erfundene Gründe.",
      "passage": "Die verschwundene Wegkarte\n\nZ1 Mira und Jonas sollten am Freitagnachmittag Besucher durch eine Ausstellung in ihrer Schule führen. Eine halbe Stunde vor Beginn legte Jonas seine grüne Mappe auf einen Tisch im Eingangsbereich. Darin steckte die einzige Karte mit dem geplanten Weg durch die Räume 1, 2 und 3.\n\nZ2 Als die ersten Gäste in der Halle warteten, wollte Jonas die Karte herausholen. Er blätterte durch die Mappe, fand aber nur leere Rückseiten und einen alten Einkaufszettel. „Ohne Karte verlaufen wir uns bestimmt“, sagte er. Mira erinnerte sich zwar an die ersten beiden Räume, war sich beim letzten Raum aber nicht sicher.\n\nZ3 Beide gingen zum Aushang neben dem Treppenhaus. Dort stand eine Nachricht vom Vormittag: Raum 3 war wegen eines Wasserschadens gesperrt; die Bilder aus diesem Raum hingen nun in Raum 4. Auf Jonas’ bisheriger Karte konnte diese Änderung noch nicht stehen.\n\nZ4 Mira schrieb die neue Reihenfolge auf ein großes Blatt, während Jonas die Angaben am Aushang noch einmal prüfte. Dann führten sie die Gäste durch die Räume 1, 2 und 4. Nach der Führung entdeckte Jonas die alte Karte in einer Innentasche der Mappe. Sie wäre an diesem Nachmittag trotzdem nicht mehr richtig gewesen.",
      "tasks": [
        {
          "id": "de-wegkarte-1",
          "kind": "reflection",
          "prompt": "Nenne das ursprüngliche Problem und die entscheidende neue Information. Belege beides mit Textabschnitten Z1–Z4.",
          "sample": "Die einzige bisherige Wegkarte ist kurz vor der Führung nicht auffindbar (Z1–Z2). Der Aushang meldet, dass Raum 3 wegen eines Wasserschadens gesperrt ist und die Bilder nun in Raum 4 hängen (Z3).",
          "writingLines": 4,
          "criteria": [
            "Die zunächst fehlende Wegkarte wird als Problem benannt; Miras Unsicherheit beim letzten Raum ist eine richtige Ergänzung, aber nicht zwingend. „Für immer verloren“ wäre unbelegt.",
            "Die Sperrung von Raum 3 und Verlegung der Bilder nach Raum 4 werden als entscheidende neue Information erkannt.",
            "Die Textabschnitte Z1–Z2 und Z3 oder gleichwertig genaue Belege passen zu den Aussagen."
          ]
        },
        {
          "id": "de-wegkarte-2",
          "kind": "reflection",
          "prompt": "Schreibe eine sachliche Inhaltsangabe in etwa vier bis sechs Sätzen. Nenne Titel, Mira und Jonas, Ausgangssituation, fehlende Karte, Aushang und gemeinsame Lösung. Erkläre, weshalb die später gefundene alte Karte trotzdem nicht mehr gepasst hätte.",
          "sample": "In der fiktiven Erzählung „Die verschwundene Wegkarte“ bereiten Mira und Jonas eine Führung durch eine Schulausstellung vor. Kurz vor Beginn finden sie ihre bisherige Wegkarte nicht. An einem Aushang lesen sie, dass Raum 3 gesperrt ist und die Bilder nun in Raum 4 hängen. Sie prüfen die Angaben, schreiben eine neue Reihenfolge auf und führen die Gäste durch die Räume 1, 2 und 4. Nach der Führung taucht die alte Karte wieder auf, wäre wegen der Änderung aber ohnehin falsch gewesen.",
          "writingLines": 9,
          "criteria": [
            "Titel, Personen und Führung als Ausgangssituation werden verständlich genannt.",
            "Die fehlende Karte wird sachlich wiedergegeben; Miras Unsicherheit beim letzten Raum ist eine mögliche Ergänzung, aber nicht zwingend.",
            "Die Sperrung von Raum 3 und Verlegung nach Raum 4 sind richtig beschrieben.",
            "Beide arbeiten an der neuen Route; die Gäste werden durch 1, 2 und 4 geführt.",
            "Das späte Wiederfinden und die Veraltung der Karte wegen der Raumänderung werden erklärt.",
            "Die Darstellung ist geordnet, knapp, in eigenen Worten und ohne erfundenes Motiv; Präsens und Verzicht auf direkte Rede sind Kriterien dieser Übung, kleine Sprachfehler entwerten korrekte Handlungsschritte nicht."
          ]
        },
        {
          "id": "de-wegkarte-3",
          "kind": "reflection",
          "prompt": "Überarbeite die fehlerhafte Kurzfassung: „Mira und Jonas verlieren die Karte, weil sie unordentlich sind. Mira rettet danach allein die Ausstellung, als sie den abgeschlossenen Raum 3 findet.“ Markiere zwei unbelegte oder falsche Aussagen und schreibe eine sachlich richtige Ersatzformulierung in ein bis zwei Sätzen.",
          "sample": "„Weil sie unordentlich sind“ ist unbelegt; der Text nennt keinen Grund für das vorübergehende Fehlen. „Mira rettet allein die Ausstellung“ ist falsch, weil beide gemeinsam handeln. Sachlich: Die bisherige Karte ist zunächst nicht auffindbar. Mira und Jonas lesen am Aushang von der Verlegung nach Raum 4 und planen gemeinsam den geänderten Weg.",
          "writingLines": 7,
          "criteria": [
            "Zwei unterschiedliche Fehler werden konkret erkannt, etwa das erfundene Motiv, Miras angebliches Alleinhandeln oder die erfundene Entdeckung des gesperrten Raums.",
            "Die Ersatzformulierung hält fest, dass die Karte zunächst nicht auffindbar ist und beide die neue Raumfolge am Aushang erfahren.",
            "Die Antwort schreibt keine alleinige Rettung der Ausstellung oder unbelegten Grund für das Fehlen zu.",
            "Andere sinngemäß richtige Formulierungen sind zulässig; keine starre Wortgleichheit."
          ]
        }
      ],
      "releaseEvidence": {
        "validFor": "2026/27",
        "gradeBand": "7/8",
        "competencyRef": "Inkraftsetzung S. 2: Klasse 7 ab 2026/27. § 2.2.2 S. 26–27: wesentliche Textinhalte erfassen; § 2.2.4 S. 29–30: informierendes Schreiben und Überarbeitung; § 3.4 S. 49 nennt Inhaltsangaben in der Spalte 7/8.",
        "checkedAt": "2026-10-21"
      }
    },
    {
      "id": "de-namensschild-deutung",
      "subjectId": "de",
      "title": "Figuren und Deutungen im Erzähltext",
      "scope": "Freiwilliger Einstieg in literarisches Lesen im gültigen 7/8-Rahmen. Die Kompetenzen in § 2.2.2 sind als Ziel der Klasse 8 markiert; Lottes Unterrichtsfolge ist unbekannt. Keine vollständige Jahresabdeckung.",
      "levelStatus": "grade78-flex",
      "released": true,
      "prerequisite": "Hilfreich: Zeilenangaben finden. Hinweis = beobachtete Textstelle; Deutung = mögliche Erklärung. Du musst keinen Verursacher erraten.",
      "introduction": "Lies die erfundene kurze Geschichte. Belege Beobachtungen mit Z-Nummern. Bei Vermutungen schreibe zum Beispiel „vielleicht“ oder „es könnte sein“. Mehrere gut begründete Deutungen sind möglich.",
      "passage": "Das nasse Namensschild\nZ1 Am Morgen des Schulfests stand Miras kleines Wasserrad auf dem Tisch. Das Schild mit den Namen fehlte.\nZ2 Gestern hatte Mira „Mira und Ben“ darauf geschrieben. Nun lag die nasse Karte unter dem Tisch; die Buchstaben waren verwischt.\nZ3 Ben stand daneben, einen leeren Pappbecher in der Hand. Sein rechter Ärmel war nass.\nZ4 „Hast du das Schild heruntergeworfen?“, fragte Mira. Ben blickte auf die Karte und sagte erst nichts.\nZ5 „Ich wollte Wasser für das Rad holen“, sagte er schließlich.\nZ6 Mira wollte antworten. Dann bemerkte sie Tropfen auf dem Fensterbrett.\nZ7 Dort stand die Gießkanne schief; ihre Tülle zeigte zum Tisch.\nZ8 Mira hatte die Kanne gestern selbst dort abgestellt. Ob sie umgekippt war, wusste sie nicht.\nZ9 Ben hob die Karte auf und legte sie auf ein trockenes Tuch.\nZ10 „Wir können sie neu schreiben“, sagte er und schob Mira eine unbeschriebene Karte hin.\nZ11 Mira nahm den Stift. „Ich hätte nicht so tun sollen, als wüsste ich, was passiert ist.“\nZ12 Draußen waren die ersten Schritte der Besucher zu hören.",
      "tasks": [
        {
          "id": "de-namensschild-1",
          "kind": "reflection",
          "prompt": "Finde drei Beobachtungen: Wo liegt die beschriftete Karte? Was fällt an Bens Ärmel auf? Was sieht Mira am Fenster? Nenne zu jeder Antwort mindestens eine passende Zeile.",
          "sample": "Die nasse beschriftete Karte liegt unter dem Tisch (Z2). Bens rechter Ärmel ist nass (Z3). Mira sieht Tropfen auf dem Fensterbrett und eine schiefe Gießkanne (Z6–Z7).",
          "writingLines": 5,
          "criteria": [
            "Die Karte liegt unter dem Tisch; Z2 passt dazu.",
            "Der rechte Ärmel ist nass; Z3 passt dazu.",
            "Tropfen auf dem Fensterbrett (Z6) oder die schief stehende Kanne (Z7) werden als Beobachtung genannt. Aus keiner Beobachtung folgt sicher, wer die Karte nass gemacht hat."
          ]
        },
        {
          "id": "de-namensschild-2",
          "kind": "reflection",
          "prompt": "Wessen Wahrnehmung oder Wissen begleitet die Erzählung besonders? Nenne einen Hinweis mit Zeile. Erkläre, was wir über Bens Gedanken trotzdem nicht sicher wissen.",
          "sample": "Vor allem Mira wird begleitet: Wir erfahren, was sie auf dem Fensterbrett bemerkt (Z6), und dass sie nicht weiss, ob die Kanne umgekippt ist (Z8). Bens Gedanken und sein Grund für das Schweigen werden nicht berichtet.",
          "writingLines": 6,
          "criteria": [
            "Mira wird als besonders begleitete Figur erkannt; eine feste Erzähler-Typologie ist nicht nötig.",
            "Z6 oder Z8 wird als passender Wahrnehmungs- oder Wissenshinweis erläutert.",
            "Bens Gedanken, sein Motiv beim Schweigen oder sein Wissen über den Vorfall werden ausdrücklich als unbekannt benannt."
          ]
        },
        {
          "id": "de-namensschild-3",
          "kind": "reflection",
          "prompt": "Wie spricht Mira Ben zuerst an, und was sagt sie später über ihr eigenes Verhalten? Belege beides mit Zeilen. Erkläre mit einem weiteren Texthinweis, warum sie vorsichtiger wird.",
          "sample": "Mira fragt Ben zuerst, ob er das Schild heruntergeworfen hat (Z4): Sie verdächtigt ihn. Später räumt sie ein, so getan zu haben, als kenne sie den Hergang (Z11). Die Tropfen und die schiefe Kanne (Z6–Z8) zeigen eine weitere Möglichkeit, aber keine sichere Ursache; darum wird sie vorsichtiger.",
          "writingLines": 8,
          "criteria": [
            "Die frühe Frage oder der Verdacht wird mit Z4 belegt.",
            "Die spätere Selbstkorrektur wird mit Z11 belegt.",
            "Ein zusätzlicher Hinweis aus Z6–Z8 wird passend erläutert.",
            "Die Verbindung zwischen Unsicherheit und verändertem Sprechen wird erklärt; keine Person wird unbelegt als Verursacher bezeichnet."
          ]
        },
        {
          "id": "de-namensschild-4",
          "kind": "reflection",
          "prompt": "Warum könnte Ben zuerst schweigen und dann beim neuen Schild helfen? Formuliere zwei unterschiedliche mögliche Erklärungen, belege jede mit einer Zeile und sage, was der Text über die Ursache der nassen Karte nicht klärt.",
          "sample": "Vielleicht fühlt Ben sich verantwortlich oder fürchtet einen Verdacht: Er zögert (Z4), sein Ärmel ist nass (Z3), später hilft er (Z9–Z10). Vielleicht ist er nur überrascht und will unabhängig von der Ursache helfen: Er sagt, er wollte Wasser holen (Z5), und schlägt eine neue Karte vor (Z10). Wie die Karte nass wurde und unter den Tisch kam, bleibt offen (Z2–Z8).",
          "writingLines": 10,
          "criteria": [
            "Eine erste textverträgliche Erklärung wird ausdrücklich als Möglichkeit formuliert, nicht als sichere Tatsache.",
            "Zur ersten Erklärung wird mindestens eine passende Zeile mit Bezug erläutert.",
            "Eine davon unterscheidbare zweite Möglichkeit wird formuliert und mit einer passenden Zeile erläutert; blosses Umformulieren desselben Motivs genügt nicht.",
            "Die Ursache der nassen Karte wird ausdrücklich als ungeklärt benannt; nasser Ärmel, Tropfen und Kanne beweisen keinen Verursacher."
          ]
        }
      ],
      "releaseEvidence": {
        "validFor": "2026/27",
        "gradeBand": "7/8",
        "competencyRef": "Inkraftsetzung PDF-S. 2 für Klasse 7 ab 2026/27; § 2.2.2 S. 26–27, Klasse-8-Ziele: literarische Figuren, Handlungen, mögliche Motive und mehrere Deutungen prüfen. § 3.2 S. 47 nennt kurze epische Formen in der 7/8-Spalte; S. 46 nennt die Übersicht exemplarisch.",
        "checkedAt": "2026-10-21"
      }
    },
    {
      "id": "mbi-quellen-ki",
      "subjectId": "mbi",
      "title": "Eine KI-Antwort auf Quellen prüfen",
      "scope": "Ausblick Klasse 8 – freiwillig. Recherche und Bewertung generierter Inhalte stehen in § 2.2.4 ausdrücklich unter Klassenstufe 8; kein belegter aktueller Klasse-7-Stoff und kein Beitrag zur Klasse-7-Jahresabdeckung.",
      "levelStatus": "grade8-outlook",
      "released": true,
      "prerequisite": "Hilfreich: Datum und Herkunft eines Dokuments erkennen. Alle Dokumente im Fall sind erfunden; es wird kein eigenes Konto und keine echte Recherche gebraucht.",
      "introduction": "In diesem frei erfundenen Fall suchst du den aktuellen Termin eines Jugendtreffs. Quelle A ist die Originalmitteilung des erfundenen Treffs; Quelle B ist ein weitergeleiteter Beitrag. Quelle C ist eine als KI-Antwort gekennzeichnete Zusammenfassung. Beurteile, was die Dokumente tatsächlich belegen.",
      "passage": "Quelle A · Mitteilung des Jugendtreffs, 19. Oktober 2026: „Unser Modellbau-Nachmittag ist für Samstag, 21. November, von 14:00 bis 16:00 Uhr in der Sporthalle geplant. Anmeldung bis 18. November; höchstens 24 Teilnehmende.“\n\nQuelle A · Korrektur auf derselben Mitteilungsseite, 20. Oktober 2026: „Der Modellbau-Nachmittag beginnt am 21. November erst um 14:30 Uhr und findet in der Stadtbibliothek statt. Ende 16:00 Uhr, Anmeldefrist und Höchstzahl bleiben gleich.“\n\nQuelle B · undatierter, weitergeleiteter Beitrag: „Modellbau am 21. November, 14:00 Uhr, Sporthalle!“\n\nQuelle C · als KI-Antwort markiert: „Das Treffen beginnt um 14:00 Uhr in der Sporthalle. Es gibt 30 Plätze; anmelden muss man sich nicht.“ Die Antwort nennt keine überprüfbare Fundstelle.",
      "tasks": [
        {
          "id": "mbi-quellen-1",
          "kind": "choice",
          "prompt": "Welche Angabe folgt aus der jüngsten Mitteilung A für den fiktiven Termin?",
          "options": [
            "21. November, 14:30–16:00 Uhr, Stadtbibliothek; Anmeldung bis 18. November, höchstens 24 Teilnehmende.",
            "21. November, 14:00–16:00 Uhr, Sporthalle; Anmeldung bis 18. November, höchstens 24 Teilnehmende.",
            "21. November, 14:00 Uhr, Sporthalle; 30 Plätze und keine Anmeldung."
          ],
          "correct": "21. November, 14:30–16:00 Uhr, Stadtbibliothek; Anmeldung bis 18. November, höchstens 24 Teilnehmende.",
          "explanation": [
            "Die Korrektur vom 20. Oktober ersetzt Beginn und Ort der ersten Mitteilung.",
            "Ende, Anmeldefrist und Höchstzahl bleiben laut Korrektur bestehen.",
            "Der weitergeleitete Beitrag ist undatiert und die KI-Antwort nennt keine überprüfbare Fundstelle."
          ]
        },
        {
          "id": "mbi-quellen-2",
          "kind": "choice",
          "prompt": "Quelle C klingt sicher. Welche Prüfung ist am sinnvollsten?",
          "options": [
            "Die Behauptungen einzeln mit der Originalmitteilung und ihrer Korrektur vergleichen; 30 Plätze und „ohne Anmeldung“ widersprechen ihr.",
            "Die KI-Antwort als zweite unabhängige Quelle zählen, weil sie flüssig formuliert ist.",
            "Den weitergeleiteten Beitrag übernehmen, weil er dieselbe Uhrzeit wie die KI-Antwort nennt."
          ],
          "correct": "Die Behauptungen einzeln mit der Originalmitteilung und ihrer Korrektur vergleichen; 30 Plätze und „ohne Anmeldung“ widersprechen ihr.",
          "explanation": [
            "Eine KI-Zusammenfassung ohne Fundstelle ist kein unabhängiger Beleg für den Termin.",
            "Zwei gleiche Aussagen können auf derselben älteren Information beruhen.",
            "Die Angaben zu 30 Plätzen und fehlender Anmeldung widersprechen der Originalmitteilung."
          ]
        },
        {
          "id": "mbi-quellen-3",
          "kind": "reflection",
          "prompt": "Erkläre in drei bis fünf Sätzen, wie du bei einer echten, möglicherweise geänderten Veranstaltung verlässlich nachprüfen würdest. Nenne die Rolle von Datum/Herkunft, einen Schritt bei verbleibendem Widerspruch und die Grenze einer KI-Zusammenfassung.",
          "sample": "Ich öffne die Seite des Veranstalters selbst und prüfe die jüngste datierte Mitteilung samt Korrekturen. Einen weitergeleiteten Beitrag oder eine KI-Antwort mit fehlender Fundstelle behandle ich nur als Hinweis. Wenn die Originalseite widersprüchlich bleibt, frage ich beim Veranstalter nach, bevor ich mich auf Ort und Zeit verlasse. Persönliche Angaben würde ich nur über einen geprüften Anmeldeweg eingeben.",
          "writingLines": 5,
          "criteria": [
            "Die Antwort prüft Herkunft und Datum beziehungsweise spätere Korrekturen der Originalquelle.",
            "Sie erklärt, dass eine KI-Zusammenfassung ohne belegte Fundstelle keinen unabhängigen Nachweis liefert.",
            "Bei echtem Widerspruch wird ein plausibler zweiter Schritt genannt, etwa Nachfrage beim Veranstalter.",
            "Die Antwort vermeidet eine erfundene Gewissheit über reale Termine; datensparsames Vorgehen kann ergänzend genannt werden."
          ]
        }
      ],
      "releaseEvidence": {
        "validFor": "2027/28",
        "gradeBand": "8",
        "competencyRef": "Inkraftsetzung S. 2: Klasse 8 ab 2027/28. § 2.2.4 S. 26: Recherche, Glaubwürdigkeit und Relevanz auch generierter Inhalte beurteilen und alternative verlässliche Quellen einbeziehen; explizite Zielmarke Klassenstufe 8.",
        "checkedAt": "2026-10-21"
      }
    },
    {
      "id": "fr-message-fixture",
      "subjectId": "fr",
      "title": "Bien comprendre une invitation",
      "scope": "Freiwillige Wiederholung und Vertiefung einfacher Mitteilungen auf Basis der Klasse-6-Ziele; A2 und die komplexeren §-3.2-Ziele gelten erst für Klasse 8. Kein eigenständiger Beitrag zur Klasse-7-Jahresabdeckung; Lottes aktueller Schulstoff ist unbekannt.",
      "levelStatus": "grade78-flex",
      "released": true,
      "introduction": "Lies die eigens verfasste französische Nachricht. Achte auf Treffpunkt, Uhrzeit, Material und darauf, was sich aus den Angaben wirklich folgern lässt. Wortstütze bei Bedarf: affiche = Plakat; médiathèque = Mediathek; arrêt = Haltestelle; dure = dauert; rester = bleiben.",
      "passage": "Salut ! Pour notre affiche sur la ville, nous nous retrouvons mercredi à 15 h 20 devant la médiathèque. Nous prenons le bus 4 à 15 h 32. L’arrêt « Mairie » est à cinq minutes à pied de la médiathèque. Apporte tes deux photos du marché ; je prends la carte. Dans le musée, on ne peut pas prendre de photos. La visite commence à 16 h et dure quarante-cinq minutes. Peux-tu venir ? Réponds-moi avant mardi soir. Si tu ne peux pas rester jusqu’à 16 h 45, nous pouvons faire l’affiche jeudi après l’école. À bientôt, Camille",
      "tasks": [
        {
          "id": "fr-message-1",
          "kind": "choice",
          "prompt": "Welche Vorbereitung passt vollständig zu Camilles Nachricht?",
          "options": [
            "Zwei Fotos vom Markt mitbringen; Camille bringt die Karte; im Museum keine Fotos machen.",
            "Die Karte mitbringen; Camille fotografiert den Markt im Museum.",
            "Nur eine Kamera mitbringen; die Markt-Fotos entstehen während der Museumsführung."
          ],
          "correct": "Zwei Fotos vom Markt mitbringen; Camille bringt die Karte; im Museum keine Fotos machen.",
          "explanation": [
            "« Apporte tes deux photos du marché » fordert zwei schon vorhandene Markt-Fotos.",
            "« je prends la carte » bedeutet, dass Camille die Karte mitbringt.",
            "« on ne peut pas prendre de photos » untersagt Fotos im Museum."
          ]
        },
        {
          "id": "fr-message-2",
          "kind": "choice",
          "prompt": "Du kommst erst um 15:30 Uhr an der Mediathek an und musst Mittwoch um 16:30 Uhr gehen. Welche französische Antwort berücksichtigt beide Probleme und Camilles Vorschlag?",
          "options": [
            "J’arrive à 15 h 30. Je ne peux pas prendre le bus à 15 h 32. Je dois partir à 16 h 30. On fait l’affiche jeudi ?",
            "J’arrive à 15 h 30. Je prends le bus à 15 h 32 et je reste jusqu’à 16 h 45.",
            "Je viens mercredi. Je prends des photos dans le musée et je fais l’affiche après la visite."
          ],
          "correct": "J’arrive à 15 h 30. Je ne peux pas prendre le bus à 15 h 32. Je dois partir à 16 h 30. On fait l’affiche jeudi ?",
          "explanation": [
            "Von der Mediathek zur Haltestelle sind es fünf Minuten zu Fuß. Wer erst um 15:30 Uhr ankommt, erreicht den Bus um 15:32 Uhr nach den angegebenen Zeiten nicht.",
            "Die Museumsführung endet nach 45 Minuten um 16:45 Uhr. Wer um 16:30 Uhr gehen muss, kann nicht bis zum Ende bleiben.",
            "Camille schlägt für diesen Fall vor, die Ausstellungstafel am Donnerstag nach der Schule zu machen. Fotos im Museum sind nicht erlaubt."
          ]
        },
        {
          "id": "fr-message-3",
          "kind": "reflection",
          "prompt": "Schreibe Camille auf Französisch zwei bis vier Sätze als Antwort vor Dienstagabend. Sage, ob du bis 16:45 Uhr bleiben kannst; beziehe dich auf Treffpunkt oder Bus und auf die Markt-Fotos. Falls du nicht bleiben kannst, schlage Donnerstag vor.",
          "sample": "Salut Camille, merci pour ton message ! Je peux rester jusqu’à 16 h 45. On se retrouve devant la médiathèque mercredi à 15 h 20 et j’apporte les deux photos du marché. À mercredi !",
          "criteria": [
            "Die Antwort ist an Camille adressiert und in verständlichem Französisch formuliert.",
            "Sie sagt klar, ob der Termin bis 16:45 Uhr möglich ist; bei Verhinderung wird Donnerstag vorgeschlagen.",
            "Treffpunkt oder Buszeit wird passend genannt.",
            "Die zwei Markt-Fotos werden sachlich richtig aufgegriffen.",
            "Kleine Sprachfehler sind kein automatischer Misserfolg, solange die Mitteilung verständlich bleibt."
          ]
        }
      ],
      "releaseEvidence": {
        "validFor": "2026/27",
        "gradeBand": "6-Grundlage, 7-Wiederholung",
        "competencyRef": "Inkraftsetzung S. 2: Klasse 7 ab 2026/27. Zweite Fremdsprache § 3.1.2/3.1.4 S. 55/57: einfache Mitteilungen und Nachrichten als Klasse-6-Ziele; hier freiwillige Wiederholung/Vertiefung. § 3.2 S. 59–62 ist ausdrücklich Klassenstufe 8 und dient nur als Entwicklungsrichtung, A2 erst Ende 8.",
        "checkedAt": "2026-10-21"
      }
    },
    {
      "id": "fr-livre-pour-samedi",
      "subjectId": "fr",
      "title": "Un livre pour samedi – eine Geschichte genau lesen",
      "scope": "Freiwilliger, gestützter Leseeinstieg im 7/8-Rahmen der zweiten Fremdsprache. § 3.2.2 nennt kurze einfache Geschichten und Leseverfahren mit Zielmarke Ende Klasse 8; weder Lottes individueller Lernstand noch eine aktuelle Klasse-7-Unterrichtseinheit sind belegt.",
      "levelStatus": "grade78-flex",
      "released": true,
      "prerequisite": "Lies zuerst die sechs Zeilen ohne Lösung. Antworten auf Deutsch oder mit einfachen französischen Wörtern gelten, denn hier wird Lesen geübt, nicht französisches Schreiben benotet. Ein Wörterbuch und die Wortstütze sind erlaubt. Gib zu deinen Gedanken die passende Zeile an.",
      "introduction": "Lies die erfundene Geschichte und suche zu jeder Antwort die Textstelle. Wortstütze bei Bedarf: bibliothèque = Bibliothek; quartier = Stadtviertel; étoiles = Sterne; panneau = Schild; salle = Raum; fermée = geschlossen; ouverte = geöffnet; aujourd’hui = heute; à midi = um zwölf Uhr mittags; emprunter = ausleihen; chez elle = bei ihr zu Hause. Versuche vor dem Wörterbuch zuerst, die gesuchte Zeile zu finden. Offene Antworten werden nicht automatisch benotet.",
      "passage": "UN LIVRE POUR SAMEDI · erfundene Geschichte\nL1 Samedi matin, Lina et Samir vont à la bibliothèque du quartier.\nL2 Lina cherche un livre de sciences sur les étoiles. Samir cherche une histoire de pirates.\nL3 Un panneau dit : « Aujourd'hui, la salle des sciences est fermée. Aujourd'hui, les livres de sciences sont dans la salle 2. »\nL4 Samir trouve son histoire dans la salle 1. Lina trouve son livre dans la salle 2.\nL5 À onze heures cinquante, Lina veut commencer à lire. Mais la bibliothèque ferme à midi.\nL6 Alors, elle emprunte le livre et le lit chez elle. Samir emprunte aussi son histoire.",
      "tasks": [
        {
          "id": "fr-livre-samedi-1",
          "kind": "reflection",
          "points": 2,
          "writingLines": 4,
          "prompt": "A. Worum geht es insgesamt (2 Kriterienpunkte)? Nenne den Ort und die gemeinsame Handlung. Gib eine passende Zeile an.",
          "sample": "Lina und Samir gehen am Samstagvormittag in die Bibliothek (L1), um Bücher zu suchen und später auszuleihen (L2, L4, L6). Eine Ausstellung wird nicht erwähnt.",
          "criteria": [
            "1 Punkt: Bibliothek als Ort aus L1.",
            "1 Punkt: Bücher suchen/finden oder ausleihen als gemeinsame Handlung mit passendem Zeilenbezug. Keine erfundene Ausstellung."
          ]
        },
        {
          "id": "fr-livre-samedi-2",
          "kind": "reflection",
          "points": 4,
          "writingLines": 6,
          "prompt": "B. Wer sucht welches Buch und findet es in welchem Raum (4 Kriterienpunkte)? Notiere für Lina und Samir je Buchart, Raum und Textzeilen. Verwechsle den geschlossenen Wissenschaftsraum nicht mit dem Fundort.",
          "sample": "Lina sucht ein Wissenschaftsbuch über Sterne (L2) und findet es in Raum 2 (L4). Samir sucht eine Piratengeschichte (L2) und findet sie in Raum 1 (L4). L3 beschreibt zusätzlich den heutigen Hinweis auf die Wissenschaftsbücher.",
          "criteria": [
            "1 Punkt: Lina sucht ein Wissenschaftsbuch über Sterne.",
            "1 Punkt: Lina findet es in Raum 2.",
            "1 Punkt: Samir sucht eine Piratengeschichte.",
            "1 Punkt: Samir findet sie in Raum 1. Fehlende Zeilenangaben als Lernschritt anmerken, sachlich richtige Angaben nicht zusätzlich abwerten."
          ]
        },
        {
          "id": "fr-livre-samedi-3",
          "kind": "reflection",
          "points": 2,
          "writingLines": 5,
          "prompt": "C. Warum hilft der Aushang Lina (2 Kriterienpunkte)? Verbinde L2, L3 und L4. Behaupte keinen früheren Standort der Bücher.",
          "sample": "Lina sucht ein Wissenschaftsbuch über Sterne (L2). Der Aushang sagt, dass heute die Wissenschaftsbücher in Raum 2 stehen (L3); dort findet Lina ihr Buch (L4). Der Wissenschaftsraum ist heute geschlossen, doch das ist nur zusätzlicher Kontext. Wo die Bücher vorher standen, bleibt offen.",
          "criteria": [
            "1 Punkt: L3 nennt Raum 2 ausdrücklich als heutigen Standort der Wissenschaftsbücher; die Schliessung des Wissenschaftsraums ist Kontext, keine Pflicht für diesen Punkt.",
            "1 Punkt: Verbindung zu Linas Suche und Fund aus L2/L4, ohne einen früheren Standort zu erfinden."
          ]
        },
        {
          "id": "fr-livre-samedi-4",
          "kind": "reflection",
          "points": 2,
          "writingLines": 5,
          "prompt": "D. Was tut Lina kurz vor zwölf, und warum passt Lesen zu Hause zu ihrer Entscheidung (2 Kriterienpunkte)? Nutze L5–L6 und unterscheide Wunsch und Handlung.",
          "sample": "Um 11:50 Uhr möchte Lina anfangen zu lesen, doch die Bibliothek schliesst um 12:00 Uhr (L5). Sie leiht das Buch aus und liest es zu Hause (L6). Der Text behauptet keine genaue Lesezeit zu Hause.",
          "criteria": [
            "1 Punkt: tatsächliches Ausleihen und Lesen zu Hause aus L6.",
            "1 Punkt: Zeitbezug aus L5: nur zehn Minuten bis zur Schliessung, ohne unbelegte zusätzliche Zeitangabe."
          ]
        },
        {
          "id": "fr-livre-samedi-5",
          "kind": "reflection",
          "points": 2,
          "writingLines": 4,
          "prompt": "E. Jemand sagt: „Die Wissenschaftsbücher stehen immer in Raum 2.“ Ist das belegt (2 Kriterienpunkte)? Nenne das begrenzende französische Wort und die Zeile.",
          "sample": "Nein. Der Aushang sagt „Aujourd’hui“ – heute – in L3. Er belegt Raum 2 für diesen Tag, nicht für immer.",
          "criteria": [
            "1 Punkt: „immer“ als unbelegte Verallgemeinerung zurückgewiesen.",
            "1 Punkt: „Aujourd’hui“ in L3 als zeitliche Grenze genannt."
          ]
        },
        {
          "id": "fr-livre-samedi-6",
          "kind": "reflection",
          "points": 1,
          "writingLines": 4,
          "prompt": "F. Auf wen bezieht sich „elle“ in L6 (1 Kriterienpunkt)? Begründe kurz mit L5–L6.",
          "sample": "„Elle“ meint Lina: L5 handelt von ihrem Lesewunsch, und L6 setzt mit „elle emprunte le livre“ ihre Handlung fort. Samir wird erst danach wieder genannt.",
          "criteria": [
            "1 Punkt: Lina als Bezug, mit L5/L6 oder einem gleichwertigen Zusammenhang begründet."
          ]
        },
        {
          "id": "fr-livre-samedi-7",
          "kind": "reflection",
          "points": 5,
          "writingLines": 8,
          "prompt": "G. Variante und Aussagegrenze (5 Kriterienpunkte): Ersetze nur L3 durch „Un panneau dit : « Aujourd’hui, la salle des sciences est ouverte. Aujourd’hui, les livres de sciences sont dans la salle 2. »“ Alle anderen Zeilen bleiben gleich. Ist der Wissenschaftsraum nun geschlossen? Wo findet Lina ihr Buch? Warum darfst du aus dem Raumstatus allein nicht auf den Buchstandort schliessen? Ist „immer in Raum 2“ jetzt belegt? Vergleiche neue L3 mit L4.",
          "sample": "Der Wissenschaftsraum ist heute geöffnet („est ouverte“, neue L3). Lina findet ihr Buch weiterhin in Raum 2 (L4), denn die neue L3 nennt den Buchstandort ausdrücklich. Geöffnet/geschlossen beschreibt den Raum, nicht automatisch den Standort der Bücher. „Immer“ folgt auch jetzt nicht, weil das zweite „Aujourd’hui“ den Buchstandort auf heute begrenzt.",
          "criteria": [
            "1 Punkt: Wissenschaftsraum heute geöffnet aus „est ouverte“.",
            "1 Punkt: Lina findet das Buch weiterhin in Raum 2 aus L4.",
            "1 Punkt: neue L3 nennt Raum 2 ausdrücklich als heutigen Standort der Wissenschaftsbücher.",
            "1 Punkt: Raumstatus und Buchstandort als zwei getrennte Aussagen erklärt; keine Verlegung behauptet.",
            "1 Punkt: „immer“ erneut mit dem zweiten „Aujourd’hui“ als unbelegt erkannt. Die Variante ändert nur L3; andere Zeilen bleiben erhalten."
          ]
        }
      ],
      "releaseEvidence": {
        "validFor": "2026/27",
        "gradeBand": "7/8",
        "competencyRef": "PDF-S. 2: Inkraftsetzung für Klasse 7 ab 2026/27. Französisch als zweite Fremdsprache, § 3.2.2 PDF-S. 60: kurze einfache Geschichten global, selektiv und detailliert lesen, Schlüsselwörter nutzen und Zusammenhänge erschliessen; § 3.2 S. 59 setzt A2 als Ziel Ende Klasse 8.",
        "checkedAt": "2026-10-21"
      }
    },
    {
      "id": "de-quellen-fixture",
      "subjectId": "de",
      "title": "Aussagen und Belege prüfen",
      "scope": "Geprüftes Teilmodul zum Lesen pragmatischer Texte und argumentierenden Schreiben; keine belegte Unterrichtsreihenfolge",
      "levelStatus": "grade78-flex",
      "released": true,
      "introduction": "Lies den eigens verfassten Bericht. Prüfe, auf welche Gruppe sich Zahlen beziehen und was die Daten tatsächlich belegen.",
      "passage": "Die Schülervertretung schlägt vor, den Leseraum auch in der Mittagspause zu öffnen. An einer freiwilligen Umfrage beteiligten sich 82 von 180 Schülerinnen und Schülern der Mittelstufe. 58 der Teilnehmenden befürworteten längere Öffnungszeiten, 24 lehnten sie ab. In der Schulzeitung steht: „Mehr als zwei Drittel aller Jugendlichen unserer Mittelstufe befürworten längere Öffnungszeiten.“ Während eines sechswöchigen Probelaufs war der Leseraum auch mittags geöffnet. Die Schülervertretung ergänzt, dass die Zahl der ausgeliehenen Bücher dabei von 40 auf 50 pro Woche stieg. In dieser Zeit wurden zugleich neue Bücher gekauft und eine Werbeaktion gestartet. Eine Schülerin wendet ein, die Mittagspause sei ohnehin kurz und der Raum oft voll. Die Schulleitung will nach dem Probelauf über Öffnungszeiten und Aufsicht entscheiden.",
      "tasks": [
        {
          "id": "de-quellen-1",
          "kind": "choice",
          "prompt": "Welche Bewertung der Aussage in der Schulzeitung ist rechnerisch und sprachlich korrekt?",
          "options": [
            "58 von 82 Teilnehmenden sind über zwei Drittel; für alle 180 Jugendlichen ist das nicht belegt.",
            "58 von 180 Jugendlichen sind über zwei Drittel; die Zeitung hat recht.",
            "Weil 82 Personen geantwortet haben, lässt sich die Zustimmung aller 180 sicher bestimmen."
          ],
          "correct": "58 von 82 Teilnehmenden sind über zwei Drittel; für alle 180 Jugendlichen ist das nicht belegt.",
          "explanation": [
            "58 ÷ 82 ≈ 0,707, also rund 71 % der Teilnehmenden.",
            "58 ÷ 180 ≈ 0,322: Für rund 32 % aller 180 Jugendlichen liegt eine bestätigte Zustimmung vor. Der tatsächliche Anteil kann höher sein, denn über die 98 ohne Antwort ist nichts bekannt.",
            "Die Zeitung ersetzt unzulässig „Teilnehmende“ durch „alle Jugendlichen“. Ihre Aussage ist nicht belegt, aber durch diese Daten auch nicht widerlegt."
          ]
        },
        {
          "id": "de-quellen-2",
          "kind": "choice",
          "prompt": "Ein Schüler sagt: „25 % mehr Ausleihen beweisen, dass die Mittagsöffnung allein wirkt.“ Welche Erwiderung prüft Rechnung und Ursache korrekt?",
          "options": [
            "Der Anstieg von 40 auf 50 sind 25 %; weil zugleich Bücher und Werbung hinzukamen, bleibt der Anteil der Mittagsöffnung am Anstieg offen.",
            "Der Anstieg beträgt nur 10 %, deshalb kann die Mittagsöffnung keinen Einfluss gehabt haben.",
            "25 % mehr Ausleihen beweisen die alleinige Wirkung der Mittagsöffnung, weil beide Zahlen pro Woche angegeben sind."
          ],
          "correct": "Der Anstieg von 40 auf 50 sind 25 %; weil zugleich Bücher und Werbung hinzukamen, bleibt der Anteil der Mittagsöffnung am Anstieg offen.",
          "explanation": [
            "Die Differenz beträgt 10 Ausleihen pro Woche. Bezogen auf vorher 40 sind 10 ÷ 40 = 0,25, also 25 %.",
            "Neben der Mittagsöffnung änderten sich auch Buchbestand und Werbung. Der Text trennt deren Wirkungen nicht.",
            "Eine gleiche Zeiteinheit und ein rechnerischer Anstieg beweisen für sich keine einzelne Ursache."
          ]
        },
        {
          "id": "de-quellen-3",
          "kind": "reflection",
          "prompt": "Schreibe eine begründete Empfehlung an die Schulleitung in drei bis fünf Sätzen. Verwende einen Beleg, eine Grenze der Daten und einen umsetzbaren nächsten Prüfschritt.",
          "sample": "Ich würde die Mittagsöffnung vorläufig weiter testen, weil 58 der 82 Befragten dafür sind und die wöchentlichen Ausleihen im Probelauf von 40 auf 50 stiegen. Die Umfrage zeigt aber nicht die Zustimmung aller 180 Jugendlichen, und der Ausleihanstieg kann auch mit den neuen Büchern oder der Werbung zusammenhängen. Deshalb sollte die Schule während einer weiteren Probe die tatsächliche Nutzung, den Platzbedarf und den Aufsichtsaufwand erfassen und danach entscheiden.",
          "criteria": [
            "Die Empfehlung nennt eine klare Position oder begründet eine bedingte Entscheidung.",
            "Mindestens ein konkreter Beleg aus dem Bericht wird korrekt eingeordnet.",
            "Mindestens eine Grenze der Umfrage oder der Ursachenzuschreibung wird benannt.",
            "Ein überprüfbarer nächster Schritt erfasst mindestens eine bisher offene Größe, etwa die tatsächliche Mittagsnutzung, den Platzbedarf, die Pausenzeit oder den Aufsichtsaufwand."
          ]
        }
      ],
      "releaseEvidence": {
        "validFor": "2026/27",
        "gradeBand": "7/8",
        "competencyRef": "Titel und Inkraftsetzung S. 1–2: Klasse 7 ab 2026/27; § 2.2.2 S. 26: pragmatische Texte, Sachinformation/Wertung, begründete Schlüsse; § 2.2.4 S. 29: argumentierendes Schreiben. Ziele der Doppelklassenstufe bis Ende 8.",
        "checkedAt": "2026-10-21"
      }
    },
    {
      "id": "de-meldung-termin",
      "subjectId": "de",
      "title": "Eine sachliche Meldung verfassen",
      "scope": "Freiwilliges Teilmodul zu Nachrichten/Meldungen und Überarbeiten im 7/8-Rahmen; Lottes Unterrichtsfolge ist unbekannt",
      "levelStatus": "grade78-flex",
      "released": true,
      "introduction": "Du arbeitest für eine fiktive Schulzeitung. Schreibe vor der geplanten Veranstaltung eine kurze, sachliche Meldung. Nutze die jüngste Korrektur der Projektgruppe. Das Ereignis hat noch nicht stattgefunden.",
      "passage": "Notiz der Projektgruppe vom 10. November 2026: Am Freitag, 13. November, sollen Schülerinnen und Schüler der Klassen 7 und 8 zwölf selbst gebaute Modelle zeigen. Die Ausstellung ist von 10:00 bis 12:00 Uhr in der Schulbibliothek geplant. Gäste dürfen bis 11:45 Uhr über ihr Lieblingsmodell abstimmen. Die Projektgruppe will das gewählte Modell am Montag, 16. November, bekannt geben. Ein Mitglied schreibt dazu: „Das wird bestimmt die beste Ausstellung aller Zeiten!“\n\nKorrektur der Projektgruppe vom 12. November 2026: Die Ausstellung beginnt erst um 10:30 Uhr und findet in der Aula statt. Sie endet weiterhin um 12:00 Uhr. Die übrigen Angaben der ersten Notiz gelten weiter.",
      "tasks": [
        {
          "id": "de-meldung-1",
          "kind": "choice",
          "prompt": "Welche Kurzfassung verwendet die jüngste Information und beschreibt das geplante Ereignis sachlich?",
          "options": [
            "Am Freitag sollen Schülerinnen und Schüler der Klassen 7 und 8 von 10:30 bis 12:00 Uhr zwölf Modelle in der Aula zeigen.",
            "Am Freitag zeigten Klassen 7 und 8 von 10:00 bis 12:00 Uhr zwölf Modelle in der Bibliothek.",
            "Am Montag beginnt in der Aula die Ausstellung; zwölf Modelle wurden bereits ausgezeichnet."
          ],
          "correct": "Am Freitag sollen Schülerinnen und Schüler der Klassen 7 und 8 von 10:30 bis 12:00 Uhr zwölf Modelle in der Aula zeigen.",
          "explanation": [
            "Die Korrektur vom 12. November ersetzt Beginn und Ort der älteren Notiz: 10:30 Uhr und Aula.",
            "Die Ausstellung ist für Freitag geplant; die Vergangenheitsform „zeigten“ wäre vor dem Termin unbelegt.",
            "Für Montag ist nur die Bekanntgabe des gewählten Modells vorgesehen, nicht der Ausstellungsbeginn."
          ]
        },
        {
          "id": "de-meldung-2",
          "kind": "choice",
          "prompt": "Welche Überarbeitung behandelt den begeisterten Satz aus der ersten Notiz angemessen für eine sachliche Meldung?",
          "options": [
            "Den Satz weglassen; die überprüfbaren Angaben zu Modellen, Zeiten und Abstimmung nennen.",
            "„Die beste Ausstellung aller Zeiten“ als Tatsache in die Überschrift setzen.",
            "Behaupten, das gewählte Modell stehe bereits fest, damit die Meldung vollständiger wirkt."
          ],
          "correct": "Den Satz weglassen; die überprüfbaren Angaben zu Modellen, Zeiten und Abstimmung nennen.",
          "explanation": [
            "„Die beste Ausstellung aller Zeiten“ ist eine unbelegte Erwartung und kein feststehender Sachverhalt.",
            "Die Meldung informiert mit den belegten Angaben der Notiz und ihrer Korrektur.",
            "Über das gewählte Modell kann erst nach der Abstimmung berichtet werden."
          ]
        },
        {
          "id": "de-meldung-3",
          "kind": "reflection",
          "prompt": "Schreibe eine Überschrift und eine sachliche Meldung für die Schulzeitung (etwa 55–90 Wörter). Nenne wer, was, wann und wo; erkläre die Abstimmung bis 11:45 Uhr und die geplante Bekanntgabe am Montag. Schreibe so, dass die Veranstaltung noch bevorsteht.",
          "sample": "Zwölf Modelle werden in der Aula gezeigt\n\nAm Freitag, 13. November, wollen Schülerinnen und Schüler der Klassen 7 und 8 zwölf selbst gebaute Modelle ausstellen. Die Ausstellung findet von 10:30 bis 12:00 Uhr in der Aula statt. Besucherinnen und Besucher können bis 11:45 Uhr über ihr Lieblingsmodell abstimmen. Die Projektgruppe plant, das gewählte Modell am Montag, 16. November, bekannt zu geben.",
          "writingLines": 11,
          "criteria": [
            "Die Überschrift und der Text nennen das geplante Ereignis klar, ohne einen Ausgang zu erfinden.",
            "Wer, was, wann und wo sind sachlich richtig; insbesondere stehen 10:30 Uhr und Aula aus der jüngeren Korrektur im Text.",
            "Die Abstimmung endet um 11:45 Uhr; die Bekanntgabe ist erst für Montag, 16. November, geplant.",
            "Formulierungen bleiben neutral und machen aus der werbenden Erwartung keine Tatsache.",
            "Andere verständliche Anordnung und angemessene Länge sind möglich; der Inhalt zählt mehr als eine exakte Wortzahl."
          ]
        }
      ],
      "releaseEvidence": {
        "validFor": "2026/27",
        "gradeBand": "7/8",
        "competencyRef": "Inkraftsetzung S. 2: Klasse 7 ab 2026/27. § 2.2.4 S. 29–30: informierendes Schreiben, Schreibziel, Planung und Überarbeitung; § 3.4 S. 49: Nachrichten/Meldungen explizit in der Spalte 7/8. Ziele des Doppeljahrgangs bis Ende 8.",
        "checkedAt": "2026-10-21"
      }
    },
    {
      "id": "en-update-fixture",
      "subjectId": "en",
      "title": "Read an updated message",
      "scope": "Freiwillige Wiederholung und Vertiefung für Klasse 7 auf Grundlage der Klasse-6-Kompetenzen der ersten Fremdsprache; kein belegter aktueller Klasse-7-Stoff und kein Beitrag zur Jahresabdeckung.",
      "levelStatus": "grade78-flex",
      "released": true,
      "introduction": "Read the two fictional messages and Jordan’s plan. Text A is old; text B is the updated plan. The labels A1–B6 help you cite details. Find = finde eine Angabe; compare = vergleiche alte und neue Angabe; explain = begründe mit einer Textstelle; write = verfasse eine passende Antwort.",
      "passage": "Text A · old printed note\nA1 Library project group: Tuesday, 3:00–4:00 pm.\nA2 Meet at the gym. Bring a poster.\n\nText B · new e-mail from Sam\nB1 Subject: New plan for the library project group\nB2 Hi Jordan, the old printed note is no longer correct.\nB3 We will meet on Thursday from 3:30 to 4:15 pm.\nB4 The meeting is in the school library. Please be there by 3:20 pm and bring a notebook.\nB5 Can you stay until the end? Please reply by Wednesday.\nB6 See you, Sam\n\nJordan’s plan: Sports training starts on Thursday at 4:00 pm. Jordan cannot change that time.",
      "tasks": [
        {
          "id": "en-update-1",
          "kind": "choice",
          "prompt": "Find the correct current plan. When does the meeting start, where is it, and what should Jordan bring?",
          "options": [
            "Thursday at 3:30 pm in the school library; bring a notebook.",
            "Thursday at 3:20 pm in the school library; bring a poster.",
            "Tuesday at 3:00 pm in the gym; bring a notebook."
          ],
          "correct": "Thursday at 3:30 pm in the school library; bring a notebook.",
          "explanation": [
            "B3 gives the new day and start time: Thursday, 3:30 pm.",
            "B4 gives the school library and a notebook. 3:20 pm is the latest requested arrival time, not the start.",
            "B2 says explicitly that the old printed note is no longer correct."
          ]
        },
        {
          "id": "en-update-2",
          "kind": "reflection",
          "prompt": "Compare Text A and Text B. Give two changed details with each old and new value and explain how you know which plan is current. Use A/B line labels.",
          "sample": "The day changed from Tuesday (A1) to Thursday (B3). The place changed from the gym (A2) to the school library (B4). B2 says that the old printed note is no longer correct, so the e-mail is the current plan.",
          "criteria": [
            "Two complete old-to-new pairs are given; valid pairs are Tuesday→Thursday, 3:00–4:00→3:30–4:15, gym→school library, poster→notebook.",
            "The old and new values are each assigned to the correct message and supported with matching A/B line labels.",
            "B2 or an equally clear reference explains why the e-mail is current.",
            "Different correct pairs and understandable wording are accepted; no exact model wording is required."
          ]
        },
        {
          "id": "en-update-3",
          "kind": "choice",
          "prompt": "Which explanation shows why Jordan cannot stay until the end of the new meeting?",
          "options": [
            "The new meeting ends at 4:15 pm (B3), but sports training starts at 4:00 pm, 15 minutes before that end.",
            "Jordan should arrive by 3:20 pm, so the meeting ends before sports training.",
            "The old note says Tuesday, so there is no Thursday conflict."
          ],
          "correct": "The new meeting ends at 4:15 pm (B3), but sports training starts at 4:00 pm, 15 minutes before that end.",
          "explanation": [
            "B3 sets the end at 4:15 pm; Jordan’s plan sets the start of sports training at 4:00 pm.",
            "4:00 pm is 15 minutes before 4:15 pm, so Jordan cannot stay until the meeting ends. The training duration is unknown.",
            "The Tuesday note is superseded by B2; 3:20 pm is only the latest requested arrival time."
          ]
        },
        {
          "id": "en-update-4",
          "kind": "reflection",
          "prompt": "Write a short reply to Sam in English (3–5 sentences). Say that you read the new plan, explain the time problem and ask one useful question about taking part. Be polite.",
          "sample": "Hi Sam, I read your new e-mail. I have sports training at 4:00 pm, so I cannot stay until 4:15. Could I join the first part of the meeting? Please let me know. Best, Jordan",
          "writingLines": 14,
          "criteria": [
            "The reply clearly refers to the updated plan.",
            "The conflict between 4:00 pm training and the meeting end at 4:15 pm is explained correctly.",
            "A useful question is asked, such as whether Jordan may join the first part or receive notes.",
            "The English is understandable and polite; small language errors are not automatically factual errors."
          ]
        }
      ],
      "releaseEvidence": {
        "validFor": "2026/27",
        "gradeBand": "6-Grundlage, 7-Wiederholung",
        "competencyRef": "Erste Fremdsprache § 2.1.2 S. 17–18 (Klasse 6): E-Mails und Pläne lesen, Details entnehmen und Angaben vergleichen; § 2.1.4 S. 21 (Klasse 6): kurze Mitteilungen und Korrespondenz mit Antworten auf Fragen. § 2.2.2 S. 26 und § 2.2.4 S. 29 sind ausdrücklich Klasse-8-Ziele und hier nur ein späterer Ausblick.",
        "checkedAt": "2026-10-21"
      }
    },
    {
      "id": "en-sketchbook-story",
      "subjectId": "en",
      "title": "The lost sketchbook – a short story",
      "scope": "Freiwillige gestützte Wiederholung und Vertiefung für Klasse 7 auf Klasse-6-Grundlage der ersten Fremdsprache. Keine belegte aktuelle Unterrichtseinheit und keine Klasse-7-Jahresabdeckung.",
      "levelStatus": "grade78-flex",
      "released": true,
      "prerequisite": "Hilfreich: einfache Vergangenheitsformen wie found, took und came. Die Wort- und Formhilfe ist im Auftrag enthalten; ein Wörterbuch ist erlaubt.",
      "introduction": "Imagine this happened to you. Write a short story in English using “I”. Keep the four invented scene facts, but add one small detail of your own. Tell the events in order and say how you felt and why. About five to seven sentences may help, but a shorter or longer complete story is fine. No real personal experience is needed. Help: sketchbook = Skizzenbuch; information desk = Infostand; visit → visited; find → found; see → saw; take → took; come → came; thank → thanked; feel → felt. Useful links: then, later, because, when.",
      "passage": "Scene 1: On Saturday morning, you visit a school fair and stop at the art table.\nScene 2: You find a sketchbook under a chair. Noah’s name is on its first page.\nScene 3: You take the sketchbook to the information desk.\nScene 4: Later, Noah comes to collect it and thanks you.",
      "tasks": [
        {
          "id": "en-sketchbook-1",
          "kind": "reflection",
          "prompt": "Write the story in English from your point of view. Keep all four scene facts in order, add one plausible detail, and explain a feeling. Read your story once more for clear past time and helpful links. A title is welcome but not required.",
          "sample": "Last Saturday morning, I visited the school fair and stopped at the art table. Under a chair, I found a sketchbook with Noah’s name on its first page. I felt worried because Noah might be looking for it, so I took it to the information desk. Later, Noah came to collect the sketchbook and thanked me. I felt happy because he had it back. Then I went to look at the paintings with my friend.",
          "writingLines": 18,
          "criteria": [
            "Saturday morning is named.",
            "The school fair and art table are included.",
            "A sketchbook is found under a chair.",
            "Noah’s name is on the first page; this is a clue, not proof of ownership.",
            "The sketchbook is taken to the information desk.",
            "Noah later collects it and thanks the narrator.",
            "Beginning, middle and end follow a clear order; sentence count is guidance, not a hidden condition.",
            "The first-person “I” perspective remains clear.",
            "A fitting feeling is named.",
            "A reason for the feeling fits the invented events; it need not be a fact about Noah’s thoughts.",
            "One small plausible invented detail is added without changing a scene fact.",
            "The main events are understandable as past events; an isolated simple-past error does not erase correct facts.",
            "Sentences are connected into a comprehensible story; then, later, because or equivalent links may be used. Other coherent stories and language variants are accepted; no automatic school grade is given."
          ]
        }
      ],
      "releaseEvidence": {
        "validFor": "2026/27",
        "gradeBand": "6-Grundlage, 7-Wiederholung",
        "competencyRef": "§ 2.1.4 PDF-S. 21–22 nennt Erzählen von Erdachtem nach Impulsen, einfache Texte und Überarbeiten für Klasse 6; simple past steht in der Tabelle Klassenstufen 5/6 auf PDF-S. 51–52. § 2.2.4 S. 29 nennt das Erzählen erneut als Klasse-8-Ziel, hier nur Ausblick. Inkraftsetzung S. 2 für Klasse 7 ab 2026/27.",
        "checkedAt": "2026-10-21"
      }
    },
    {
      "id": "ma-tank-zuordnung",
      "subjectId": "ma",
      "title": "Wie viele Pumpen braucht der Tank?",
      "scope": "Ausblick Klasse 8 – freiwillig. Umgekehrt proportionale Zuordnungen sind im ministeriellen Plan als Ziel für Klasse 8 markiert; kein belegter aktueller Klasse-7-Stoff und kein Beitrag zur Klasse-7-Jahresabdeckung.",
      "levelStatus": "grade8-outlook",
      "released": true,
      "prerequisite": "Hilfreich: Multiplikation und Division natürlicher Zahlen und das Lesen einer kleinen Tabelle. Die umgekehrte Zuordnung wird im Fall eingeführt.",
      "introduction": "Ein Tank soll mit 720 Litern Wasser gefüllt werden. Es stehen 1 bis 10 identische Pumpen bereit. Jede fördert unabhängig von den anderen konstant 2 Liter pro Minute. Alle eingesetzten Pumpen starten gleichzeitig. Anlaufzeit und Wasserverlust gibt es nicht. Bei 720 Litern werden sie gestoppt. Begründe deine Rechenwege; die Muster zeigen mögliche Lösungen.",
      "passage": "Zwei Notizzettel nennen Füllzeiten für denselben Tank:\nPumpenzahl:      4  |  6  |  8\nZettel A (min): 90  | 60 | 45\nZettel B (min): 90  | 75 | 60",
      "tasks": [
        {
          "id": "ma-tank-1",
          "kind": "choice",
          "prompt": "Welcher Zettel passt zur beschriebenen Pumpenleistung? Prüfe die Produkte aus Pumpenzahl und Zeit.",
          "options": [
            "Zettel A: 4 · 90 = 6 · 60 = 8 · 45 = 360 Pumpenminuten.",
            "Zettel B: Die Zeiten sinken ebenfalls, deshalb ist auch er richtig.",
            "Beide Zettel: Entscheidend ist nur die Zeit für vier Pumpen."
          ],
          "correct": "Zettel A: 4 · 90 = 6 · 60 = 8 · 45 = 360 Pumpenminuten.",
          "explanation": [
            "Eine Pumpe fördert 2 Liter je Minute. Für 720 Liter braucht man insgesamt 720 ÷ 2 = 360 Pumpenminuten.",
            "Zettel A hat die Produkte 360, 360 und 360. Zettel B hat 4 · 90 = 360, 6 · 75 = 450 und 8 · 60 = 480.",
            "Nur eine fallende Zeitreihe oder eine passende Zeile belegt keine gleichbleibende Tankmenge."
          ]
        },
        {
          "id": "ma-tank-2",
          "kind": "reflection",
          "prompt": "Wie viele Minuten benötigen fünf Pumpen? Zeige erst den Dreisatz über die Zeit für eine Pumpe und gib danach eine allgemeine Vorschrift t(n) für n Pumpen an (n ist eine ganze Zahl von 1 bis 10).",
          "sample": "Eine Pumpe benötigt 720 ÷ 2 = 360 Minuten. Fünf gleichzeitig arbeitende Pumpen benötigen 360 ÷ 5 = 72 Minuten. Allgemein gilt t(n) = 360 ÷ n Minuten für ganze n von 1 bis 10; gleichwertig ist 720 ÷ (2 · n).",
          "writingLines": 6,
          "criteria": [
            "Die Zeit für eine Pumpe beträgt 360 Minuten und wird aus 720 Litern bei 2 Litern pro Minute begründet.",
            "Für fünf Pumpen ergeben sich 72 Minuten.",
            "Eine gleichwertige Vorschrift wie t(n) = 360 ÷ n Minuten nennt den passenden ganzzahligen Bereich 1 bis 10.",
            "Einheiten und Bedeutung von n bleiben verständlich; andere korrekte Rechenwege sind zulässig."
          ]
        },
        {
          "id": "ma-tank-3",
          "kind": "reflection",
          "prompt": "Der Tank muss in höchstens 50 Minuten voll sein. Wie viele Pumpen sind mindestens nötig? Zeige, dass diese Zahl reicht und eine Pumpe weniger nicht reicht.",
          "sample": "Mindestens acht Pumpen sind nötig. Mit acht Pumpen dauert es 360 ÷ 8 = 45 Minuten, also höchstens 50 Minuten. Sieben Pumpen fördern in 50 Minuten nur 7 · 2 · 50 = 700 Liter; das reicht für 720 Liter nicht. Mit noch weniger Pumpen wird die Förderleistung nicht größer.",
          "writingLines": 6,
          "criteria": [
            "Das Minimum ist acht Pumpen.",
            "Acht Pumpen füllen den Tank nach 45 Minuten mit 720 Litern und werden dann gestoppt; damit ist die Frist erfüllt.",
            "Sieben Pumpen fördern in 50 Minuten nur 700 Liter oder benötigen 360 ÷ 7 Minuten, also mehr als 50 Minuten.",
            "Die Begründung erklärt, weshalb auch weniger als sieben Pumpen nicht reichen; gleichwertige Verfahren gelten."
          ]
        },
        {
          "id": "ma-tank-4",
          "kind": "reflection",
          "prompt": "Eine Person sagt: „Zwei Pumpen sind halb so viele wie vier. Deshalb halbiert sich die Zeit von 90 auf 45 Minuten.“ Finde den Denkfehler, berechne die richtige Zeit und kontrolliere sie mit der Wassermenge.",
          "sample": "Bei halb so vielen gleich starken Pumpen dauert dieselbe Füllung doppelt so lang, nicht halb so lang. Zwei Pumpen brauchen 180 Minuten. Kontrolle: 2 Pumpen · 2 Liter pro Minute · 180 Minuten = 720 Liter. In 45 Minuten würden sie nur 180 Liter fördern.",
          "writingLines": 6,
          "criteria": [
            "Der Denkfehler wird erklärt: Weniger Pumpen bedeuten bei derselben Wassermenge längere statt kürzere Zeit.",
            "Die richtige Zeit für zwei Pumpen beträgt 180 Minuten.",
            "Die Kontrolle enthält die Wassermenge 2 · 2 L/min · 180 min = 720 L oder eine gleichwertige Rechnung mit Literbezug.",
            "Die Antwort macht deutlich, warum die behaupteten 45 Minuten nicht reichen; das Fachwort „antiproportional“ ist nicht erforderlich."
          ]
        }
      ],
      "releaseEvidence": {
        "validFor": "2027/28",
        "gradeBand": "8",
        "competencyRef": "Inkraftsetzung S. 2: Klasse 7 ab 2026/27, Klasse 8 ab 2027/28. § 2.2.1 S. 24 nennt umgekehrt proportionale Zuordnungen, Produktgleichheit, Dreisatz und Darstellungswechsel unter der expliziten Zielmarke Klassenstufe 8.",
        "checkedAt": "2026-10-21"
      }
    },
    {
      "id": "ma-prozent-fixture",
      "subjectId": "ma",
      "title": "Kosten mit Rabatt und Zuschuss berechnen",
      "scope": "Ausblick Klasse 8 – freiwillig. Die neue Prozentrechnung ist im ministeriellen Plan als Ziel für Klasse 8 markiert und dort erst ab 2027/28 in Kraft; kein belegter aktueller Klasse-7-Stoff und kein Beitrag zur Klasse-7-Jahresabdeckung.",
      "levelStatus": "grade8-outlook",
      "released": true,
      "prerequisite": "Hilfreich: Prozent als Anteil verstehen und mit Dezimalzahlen rechnen. Wähle diese Aufgabe nur, wenn du das Thema bereits kennst oder freiwillig vorarbeiten möchtest.",
      "introduction": "Bei einem Ausflug gehen 28 Jugendliche ins Technikmuseum. Der Eintritt kostet 7,50 € pro Person. Auf den Eintritt gibt es 20 % Gruppenrabatt. Der Bus kostet pauschal 168 €. Ein Förderverein zahlt 70 € Zuschuss. Alle übrigen Kosten werden gleichmäßig verteilt.",
      "tasks": [
        {
          "id": "ma-prozent-1",
          "kind": "decimal",
          "prompt": "Wie viel zahlt jede Person? Gib den Betrag in Euro mit höchstens zwei Nachkommastellen ein.",
          "correct": 9.5,
          "correctLabel": "9,50 €",
          "explanation": [
            "Eintritt ohne Rabatt: 28 · 7,50 € = 210,00 €.",
            "20 % Rabatt auf den Eintritt: 0,20 · 210,00 € = 42,00 €. Ermäßigter Eintritt: 168,00 €.",
            "Mit Bus: 168,00 € + 168,00 € = 336,00 €. Nach 70,00 € Zuschuss bleiben 266,00 €.",
            "Gleichmäßig aufgeteilt: 266,00 € ÷ 28 = 9,50 € pro Person. Probe: 28 · 9,50 € + 70,00 € = 336,00 €."
          ]
        },
        {
          "id": "ma-prozent-2",
          "kind": "choice",
          "prompt": "Welche Rechnung modelliert die Situation richtig, bevor man durch 28 teilt?",
          "options": [
            "(28 · 7,50 €) · 0,80 + 168 € − 70 €",
            "(28 · 7,50 € + 168 €) · 0,80 − 70 €",
            "(28 · 7,50 €) · 0,80 + 168 € + 70 €"
          ],
          "correct": "(28 · 7,50 €) · 0,80 + 168 € − 70 €",
          "explanation": [
            "0,80 steht für 100 % − 20 % und gilt nur für den Eintritt.",
            "Der Buspreis wird danach addiert; der Zuschuss mindert die Gesamtkosten.",
            "Der zweite Ausdruck rabattiert fälschlich auch den Bus, der dritte addiert den Zuschuss statt ihn abzuziehen."
          ]
        },
        {
          "id": "ma-prozent-3",
          "kind": "reflection",
          "prompt": "Eine Mitschülerin rechnet (210 € + 168 € − 70 €) · 0,80. Erkläre ihren Denkfehler und prüfe mit einer eigenen Rechnung, wie groß die Abweichung vom richtigen Gesamtbetrag ist.",
          "sample": "Sie wendet die 20 % Ermäßigung auf Bus und Zuschuss an, obwohl der Rabatt nur für den Eintritt gilt. Ihr Ausdruck ergibt 308 € · 0,80 = 246,40 €. Richtig sind 266,00 €; die Abweichung beträgt 19,60 €.",
          "criteria": [
            "Die Antwort benennt den falschen Rabattbereich.",
            "Der falsche Gesamtbetrag 246,40 € ist richtig ermittelt.",
            "Der richtige Gesamtbetrag 266,00 € und die Differenz 19,60 € sind richtig ermittelt.",
            "Die Richtung der Abweichung ist klar: Ihre Rechnung ist zu niedrig."
          ]
        }
      ],
      "releaseEvidence": {
        "validFor": "2027/28",
        "gradeBand": "8",
        "competencyRef": "Inkraftsetzung S. 2: Klasse 7 ab 2026/27, Klasse 8 ab 2027/28. § 2.2.4 S. 26–27 nennt Prozentrechnung, Grundwert/Prozentsatz/Prozentwert und Rabatt ausdrücklich als Klassenstufe-8-Ziele.",
        "checkedAt": "2026-10-21"
      }
    },
    {
      "id": "en-maya-repair-cafe",
      "subjectId": "en",
      "title": "Maya’s blog and the repair café programme",
      "scope": "Freiwillige Leseübung im 7/8-Rahmen. Blog und Programm gehören zu § 2.2.2; A2, punktuell B1, ist erst Ziel am Ende von Klasse 8. Lottes aktuelle Unterrichtsfolge ist unbekannt.",
      "levelStatus": "grade78-flex",
      "released": true,
      "prerequisite": "Hilfswörter und Zeilenangaben stehen im Material. Bei Bedarf zuerst die Aufgaben 1 und 2 lösen; weitere Deutungen können später folgen.",
      "introduction": "Read the blog and the programme. Short English answers are enough. Name a line (L1–L8) or programme entry that supports your answer. Words to help: repair café = event for fixing things; arrow = Pfeil; fell off = fiel herunter; guided = führte; volunteers = Helfende. A dictionary is allowed. The people and school are invented. Open answers are compared with examples and criteria, without an automatic grade.",
      "passage": "Maya’s blog: A small sign, a big help\nL1 On Saturday, our school held a repair café.\nL2 I took photos for the school blog because I did not like talking to visitors.\nL3 At 3:20 pm, the sign for the bicycle workshop fell off the wall.\nL4 Two families followed an old arrow to Room C. They wanted to repair their bikes, but Room C was for clothes.\nL5 I drew a new sign and guided them to Room B before the workshop started at 3:30 pm.\nL6 Later I took photos of the volunteers at work.\nL7 My camera was useful, but the paper sign helped the families more at that moment.\nL8 Next month I want to make clear signs before the doors open. I still like taking photos, but I can talk to visitors when they need help.\n\nRepair café programme\nActivity | Room | Starts\nBicycle workshop | B | 3:30 pm\nClothes workshop | C | 3:30 pm\nBook exchange | A | 4:00 pm",
      "tasks": [
        {
          "id": "en-maya-1",
          "kind": "reflection",
          "points": 2,
          "writingLines": 4,
          "prompt": "Find Maya’s first job and why she chose it. Give a line number.",
          "sample": "She took photos for the school blog because she did not like talking to visitors (L2).",
          "criteria": [
            "1 point: photos for the school blog.",
            "1 point: reason and L2 or an equally clear text reference. “Uncomfortable talking” is a possible interpretation, not Maya’s exact wording."
          ]
        },
        {
          "id": "en-maya-2",
          "kind": "reflection",
          "points": 3,
          "writingLines": 5,
          "prompt": "The two families went to the wrong room. Name the wrong room and the right room. Did Maya help before the bicycle workshop began? Use the blog and the programme.",
          "sample": "They first went to Room C (L4), but bicycles were in Room B (L5 and the programme). Yes, Maya guided them there before the 3:30 pm start (L5). L3 gives the time the sign fell, not the families’ arrival.",
          "criteria": [
            "1 point: Room C as the wrong room.",
            "1 point: Room B as the correct bicycle room.",
            "1 point: before the start, with L5 and the programme; do not assign the families an exact arrival time."
          ]
        },
        {
          "id": "en-maya-3",
          "kind": "reflection",
          "points": 3,
          "writingLines": 6,
          "prompt": "Why did the paper sign help more at that moment? Does Maya say her camera was useless? Support your answer with a line.",
          "sample": "The sign and Maya’s guidance led the families to the right room before the workshop (L4–L5). She later used her camera for photos (L6) and calls it useful (L7). The sign helped the families more only in that situation.",
          "criteria": [
            "1 point: immediate help from sign or guidance.",
            "1 point: camera remained useful.",
            "1 point: L5–L7 or equivalent evidence limits the comparison to that moment."
          ]
        },
        {
          "id": "en-maya-4",
          "kind": "reflection",
          "points": 3,
          "writingLines": 6,
          "prompt": "Compare Maya at the beginning with her plan for next month. What changes, and what does she still like? Give lines for both moments.",
          "sample": "At first she did not like talking to visitors and took photos (L2). Next month she wants to prepare signs and can talk when people need help (L8). She still likes taking photos (L8).",
          "criteria": [
            "1 point: initial job and reluctance, L2.",
            "1 point: new plan or willingness to help visitors, L8.",
            "1 point: continuing interest in photos, with appropriate references; “she always enjoys talking” goes too far."
          ]
        },
        {
          "id": "en-maya-5",
          "kind": "reflection",
          "points": 2,
          "writingLines": 4,
          "prompt": "A friend says, “All visitors went to the wrong room.” Does the blog prove that? Explain what we know and what we do not know.",
          "sample": "No. L4 says that two families went to Room C. The blog does not say how many other visitors came or where they went.",
          "criteria": [
            "1 point: reject “all” using the two families in L4.",
            "1 point: explain that other visitors and their routes are unknown."
          ]
        },
        {
          "id": "en-maya-6",
          "kind": "reflection",
          "points": 2,
          "writingLines": 4,
          "prompt": "Name one thing Maya’s blog tells us that the programme does not. Give a line.",
          "sample": "L2 explains why Maya chose to take photos; the programme only lists activities, rooms and start times. Her view of the sign (L7) or next month’s plan (L8) would also work.",
          "criteria": [
            "1 point: a concrete personal blog detail absent from the programme.",
            "1 point: a matching line and clear contrast with the programme; the bicycle room alone is already in the table."
          ]
        }
      ],
      "releaseEvidence": {
        "validFor": "2026/27",
        "gradeBand": "7/8",
        "competencyRef": "PDF-S. 2: Klasse 7 ab 2026/27. § 2.2.2 PDF-S. 26–27: Blogs, Pläne/Tabellen, globales und gezieltes Lesen, Textfunktion und Belege als Ziel bis Ende Klasse 8; A2/punktuell B1 PDF-S. 25.",
        "checkedAt": "2026-10-21"
      }
    },
    {
      "id": "en-friday-activity-email",
      "subjectId": "en",
      "title": "Which Friday activity? Write to Ms Reed",
      "scope": "Freiwillige, gestützte Schreibübung im 7/8-Rahmen. Informieren, begründet empfehlen und überarbeiten gehören zu § 2.2.4 mit Zielmarke Ende Klasse 8. Keine belegte aktuelle Klasse-7-Unterrichtseinheit.",
      "levelStatus": "grade78-flex",
      "released": true,
      "prerequisite": "Alle Personen, Angebote und Orte sind erfunden. Schreibe nur einen Übungsentwurf; die E-Mail wird nicht versendet. Bei Bedarf helfen die Wörter und Satzanfänge. Eine eigene höfliche, sachlich richtige Formulierung zählt mehr als das Auswendiglernen des Musters.",
      "introduction": "Read the fictional notice below. Help Ms Reed choose one activity. First note what is known and what remains open; then write a polite English email. A good recommendation can favour either option if it explains the capacity and weather limits honestly. Optional words: signed up = angemeldet, attend = teilnehmen, seats/places = Plätze, heavy rain = starker Regen, cancelled = abgesagt, backup plan = Ersatzplan. Optional structure: fact → recommendation with a reason → fair point for the other option → useful question. Write your own message; no email is sent and open answers receive no automatic grade.",
      "passage": "FICTIONAL NOTICE · Wednesday, 4:00 pm\n24 students have signed up for one group activity on Friday from 3:30 to 4:15 pm. Ms Reed must choose one activity by Wednesday, 5:00 pm. We do not know how many students will actually attend on Friday.\n\nIndoor Poster Lab | Room 12 | 20 seats | Paper and pens provided | Not affected by rain | No second session is planned.\nNature Sketch Walk | Meet at the school gate | 30 places | Clipboards and pencils provided | Cancelled in heavy rain | Weather decision still open; no backup plan confirmed.\n\nThese facts are invented for this exercise. Do not send a real email.",
      "tasks": [
        {
          "id": "en-friday-1",
          "kind": "reflection",
          "points": 4,
          "writingLines": 6,
          "prompt": "A. Plan before writing (4 criteria points): Make four short notes: how many students have signed up; what 20 seats mean if all 24 attend; one confirmed advantage of the walk; and one open condition that prevents a guarantee. Notes may be short. Do not write the email yet.",
          "sample": "24 students have signed up, but actual attendance is unknown. If all 24 attend, the Poster Lab is four seats short (24 − 20 = 4). The walk has 30 places and provides clipboards and pencils. It may be cancelled in heavy rain; the weather decision and a backup remain open.",
          "criteria": [
            "1 point: 24 sign-ups, without claiming 24 certain attendees.",
            "1 point: four seats short at the lab if all 24 attend.",
            "1 point: one confirmed walk advantage, such as 30 places or provided materials.",
            "1 point: heavy-rain cancellation or unconfirmed backup as an open condition."
          ]
        },
        {
          "id": "en-friday-2",
          "kind": "reflection",
          "points": 16,
          "writingLines": 14,
          "inputRows": 14,
          "prompt": "B. Write to Ms Reed (16 criteria points): Write a short English email. Explain the situation, recommend one activity with a reason, give a fair argument for the other option, and ask a useful question about an open problem. Keep sign-ups separate from certain attendance. Do not promise free seats, good weather, a second session or a backup. About 90–130 words may help you plan, but content and clarity count, not a strict word limit. Optional starters: “Dear Ms Reed”, “If all 24 attend”, “I recommend”, “On the other hand”, “Could you please ...?”.",
          "sample": "Dear Ms Reed,\n\nI am writing about Friday's group activity. Twenty-four students have signed up, but we do not know how many will attend. If all 24 come, the Indoor Poster Lab cannot take everyone because it has only 20 seats. I recommend the Nature Sketch Walk: it has 30 places, and clipboards and pencils are provided. The Poster Lab would be more reliable in heavy rain, but no second session is planned. The walk may be cancelled in heavy rain, and we do not have a confirmed backup plan. Could you please tell us whether a backup is possible before the choice is final?\n\nBest wishes,\nAlex",
          "criteria": [
            "1 point: polite address to Ms Reed.",
            "1 point: purpose of choosing one Friday activity clear.",
            "1 point: 24 sign-ups distinguished from unknown attendance.",
            "2 points: 20 lab seats and, if all 24 attend, four seats short (one each).",
            "2 points: 30 walk places and one further confirmed walk advantage (one each).",
            "2 points: recognisable recommendation and a matching fact-based reason (one each); either option can be justified conditionally.",
            "2 points: fair advantage of the other option and an understandable trade-off (one each).",
            "2 points: heavy-rain cancellation and weather/backup uncertainty kept open (one each).",
            "1 point: useful question that does not assume an answer.",
            "1 point: understandable order and English; minor language errors without loss of meaning are not extra fact errors.",
            "1 point: polite closing. Equal wording and a shorter complete email count. One fact error is not deducted twice."
          ]
        },
        {
          "id": "en-friday-3",
          "kind": "reflection",
          "points": 4,
          "writingLines": 7,
          "prompt": "C. Revise two unsupported claims (4 criteria points): For each incorrect practice sentence, name what the notice does not support and rewrite it in English: (1) “The Poster Lab can take all 24 students in one session.” (2) “The Nature Sketch Walk will definitely happen on Friday.” These sentences are separate from your own draft; check your own email too.",
          "sample": "1. The lab has only 20 seats: “If all 24 students attend, four would not have a seat in the Poster Lab.” 2. The walk is not certain: “The Nature Sketch Walk may be cancelled in heavy rain, and the weather decision is still open.” A missing backup may also be mentioned.",
          "criteria": [
            "1 point: identifies the unsupported 24-in-one-session claim.",
            "1 point: rewrites the lab statement with 20 seats and a correct condition.",
            "1 point: identifies “definitely happen” as unsupported.",
            "1 point: rewrites the walk statement with the heavy-rain/open-decision condition."
          ]
        }
      ],
      "releaseEvidence": {
        "validFor": "2026/27",
        "gradeBand": "7/8",
        "competencyRef": "PDF-S. 2: Klasse 7 ab 2026/27. Englisch als erste Fremdsprache, § 2.2.4 PDF-S. 29–30: informierendes Schreiben, Meinung begründen, adressatengerechter Informationsaustausch, Planen und Überarbeiten als Ziel Ende Klasse 8. Ein Sprach- oder Unterrichtsstand für Lotte ist daraus nicht abzuleiten.",
        "checkedAt": "2026-10-21"
      }
    },
    {
      "id": "en-garden-poster-dialogue",
      "subjectId": "en",
      "title": "Talk and make a poster plan",
      "scope": "Freiwillige, gestützte Sprechübung im gültigen 7/8-Rahmen. Dialogisches Sprechen steht in § 2.2.3 unter der Zielmarke Klasse 8; der aktuelle Klasse-7-Unterricht ist unbekannt. Die App bereitet das Gespräch vor, sie bewertet keine mündliche Leistung.",
      "levelStatus": "grade78-flex",
      "released": true,
      "prerequisite": "Du brauchst eine Person für Rolle B. Lies vorher nur deine Karte A; die andere Person liest ihre Karte im Erwachsenenbereich. Die Sätze sind Hilfen, kein Dialog zum Auswendiglernen. Eine geschriebene Antwort allein beweist kein englisches Sprechen.",
      "introduction": "You and a partner want to START a poster for a fictional garden club. Speak in English and find a session you can both attend. Ask a real question, respond to new information and finish with day, time, place and first step. You may use the word help. Do not use real school plans. Your partner has a separate card; do not open the adult solution before the conversation.",
      "passage": "YOUR CARD · Student A\nWednesday, 3:30–4:15 pm · Art Room · Paper and coloured pens · You would like to draw a paper poster.\nThursday, 4:00–4:45 pm · Library · A laptop · You could make a digital first draft.\n\nYou do not know when Student B is free or whether all equipment works. Start by suggesting a time and asking about it. Today's aim is a first draft, not a finished printed poster.\n\nWORD HELP · Could we meet on ...? · Are you free then? · What can we use there? · Sorry, could you say that again? · We could ... instead. · So we will meet ... and ... .",
      "tasks": [
        {
          "id": "en-garden-dialogue-1",
          "kind": "reflection",
          "points": 4,
          "writingLines": 5,
          "prompt": "A. Prepare, then speak (4 written preparation points): Note one possible first proposal, one genuine question for your partner, a phrase for asking for repetition, and a possible way to close the conversation. Use short notes rather than a complete script. Then do the spoken role play below.",
          "sample": "Could we meet on Wednesday at 3:30 in the Art Room? / Are you free then? / Sorry, could you say that again? / So we will meet on [agreed day] at [agreed time] in [agreed place] and start [agreed first step]. The closing must be filled with the actual agreement, not guessed in advance.",
          "criteria": [
            "1 point: understandable proposal with one card-A time and place.",
            "1 point: genuine question that lets the partner supply information.",
            "1 point: suitable repetition or clarification phrase.",
            "1 point: useful closing frame with blanks for the actual agreement; do not invent the partner’s answer before speaking. These are written preparation points, not evidence of spoken delivery."
          ]
        },
        {
          "id": "en-garden-dialogue-2",
          "kind": "reflection",
          "points": 4,
          "writingLines": 6,
          "prompt": "B. Only after a real conversation (4 written fact points): Write the agreed day, time, place and first step. Note how you reacted to your partner’s new information. What remains open about printing? If no partner was available, leave this answer blank; do not guess Student B’s card.",
          "adultOnlySolution": true,
          "sample": "Thursday, 4:00–4:45 pm, Library: make a digital first draft. Student B cannot meet on Wednesday because of a music lesson; if A proposed Thursday first, A can simply confirm that both are free then. The Library printer is broken, so printing remains to be checked later. This written note does not score speaking.",
          "criteria": [
            "1 point: Thursday and the shared 4:00–4:45 pm window.",
            "1 point: Library and digital first draft.",
            "1 point: a correct reaction to new partner information: Wednesday excluded after it was proposed, or Thursday availability confirmed if Thursday came first.",
            "1 point: broken printer and later printing left open. Without a real dialogue, leave the answer blank and do not award these points."
          ]
        }
      ],
      "practice": {
        "title": "Praxis: ein englisches Gespräch führen",
        "childNote": "Eine echte Person übernimmt Student B. Sprich mit ihr, statt den Dialog aufzuschreiben oder ein Muster abzulesen. Ohne Gespräch bleibt die mündliche Übung „nicht erhoben“; deine Notizen sind nur Vorbereitung.",
        "childSteps": [
          "Bitte die andere Person, die Erwachsenenkarte B selbst und nur für sich zu öffnen. Schaue nur auf deine Karte A und kurze Stichwörter.",
          "Beginne auf Englisch mit einem Vorschlag und einer Frage. Höre zu und frage nach, wenn etwas unklar ist.",
          "Reagiere auf die neue Termin- und Materialinformation. Vereinbart einen tatsächlich möglichen ersten Schritt; versprecht keinen fertigen Druck.",
          "Schliesse mit Tag, Uhrzeit, Ort und erstem Schritt. Notiere danach in Aufgabe B die vereinbarten Fakten."
        ],
        "observationMax": 12,
        "observationLabel": "Gespräch",
        "adultNote": "Verdeckte Partnerkarte B: Du kannst Mittwoch wegen einer Musikstunde nicht. Donnerstag von 4:00 bis 4:45 pm bist du frei. Der Laptop in der Library funktioniert, der Drucker ist kaputt. Verrate diese Angaben erst im Gespräch. Antworte in einfachem Englisch, etwa „I have a music lesson on Wednesday. I can meet on Thursday at four.“ Sobald Donnerstag erwogen wird, erwähne auf Englisch den kaputten Drucker auch ohne Nachfrage, damit das Kind fair reagieren kann. Akzeptiere einen digitalen Erstentwurf und lasse Drucken offen. Wiederhole bei Bedarf. Nur ein wirklich gehörtes Gespräch beobachten: 2 = selbstständig und verständlich, 1 = teilweise oder mit Stütze, 0 = trotz fairer Gelegenheit nicht gezeigt, — = keine faire Gelegenheit. Ohne Gespräch alles „nicht erhoben“ lassen; keine Summe oder Schulnote ableiten. Keine Aufnahme nötig.",
        "adultCriteria": [
          "Gespräch eröffnen und verständlichen Vorschlag machen: 0/1/2 oder — ohne faire Gelegenheit.",
          "Eine echte Frage stellen, statt nur vorbereitete Sätze abzulesen: 0/1/2 oder —.",
          "Auf neue Zeitinformation eingehen: Mittwoch bei einem Vorschlag verwerfen oder bei direktem Donnerstagvorschlag die gemeinsame Verfügbarkeit klären; 0/1/2 oder —.",
          "Auf den defekten Drucker mit einem digitalen Entwurf oder offener Nachfrage reagieren: 0/1/2 oder —.",
          "Gespräch aufnehmen und mit Tag, Zeit, Ort und erstem Schritt abschliessen: 0/1/2 oder —.",
          "Englisch verständlich sprechen und bei Bedarf nachfragen oder umformulieren: 0/1/2 oder —. Kleine Fehler ohne Sinnverlust nicht pauschal abwerten."
        ]
      },
      "releaseEvidence": {
        "validFor": "2026/27",
        "gradeBand": "7/8",
        "competencyRef": "PDF-S. 2: Englisch-Lehrplan für Klasse 7 ab 2026/27. Erste Fremdsprache, § 2.2.3 PDF-S. 27–28: zu vertrauten Themen Gespräche beginnen, aufrechterhalten und beenden, nachfragen, Vorschläge machen und auf neue Angaben reagieren; Zielmarke Klassenstufe 8.",
        "checkedAt": "2026-10-21"
      }
    },
    {
      "id": "de-technikprotokoll-korrigieren",
      "subjectId": "de",
      "title": "Ein Protokoll verständlich korrigieren",
      "scope": "Freiwillige, gestützte 7/8-Übung zu Satzbau, Zeichensetzung und Grossschreibung. §2.2.5 trägt die Zielmarke Ende Klasse 8; die genaue Thüringer Rechtschreib-Lernfolge und Lottes aktueller Unterrichtsstand sind offen.",
      "levelStatus": "grade78-flex",
      "released": true,
      "prerequisite": "Hilfreich sind Haupt- und Nebensatz, das gebeugte Verb, Nomen und als Nomen gebrauchte Adjektive. Lies bei Bedarf die Hilfekarte. Korrigiere nur die markierbaren Sprachstellen; Inhalt und Zahlen bleiben gleich. Offene Begründungen brauchen eine persönliche Sichtung.",
      "introduction": "Ein erfundenes Protokoll der Technik-AG enthält Fehler bei Grossbuchstaben und Kommas. Schreibe den Text lesbar, erkläre deine Entscheidungen und prüfe eine falsche automatische Korrektur. Die Hilfekarte ist erlaubt: Ein Nebensatz enthält ein eigenes gebeugtes Verb und wird mit Komma abgegrenzt; ein eingeschobener Nebensatz braucht zwei Kommas. Eine Apposition benennt eine Person durch eine Nomengruppe näher, ohne selbst ein Satz mit eigenem Verb zu sein. Bei „alles Neue“ übernimmt das Adjektiv die Nomenfunktion; bei „das leere Fach“ beschreibt es ein folgendes Nomen. Die Hilfekarte zeigt Prüfwege, nicht die fertige Fassung. Offene Antworten werden nicht automatisch benotet.",
      "passage": "FEHLERHAFTER ENTWURF · fiktives AG-Protokoll\nZ1 Am dienstag trifft sich die Technik-AG im Schulraum.\nZ2 Die Materialliste die Mia vorbereitet hat liegt auf dem Tisch.\nZ3 Mia die Leiterin der AG prüft zuerst ob drei Batterien vorhanden sind.\nZ4 Wenn eine Batterie fehlt notiert sie das fehlende Teil.\nZ5 Die Gruppe will alles wichtige im Protokoll festhalten.",
      "tasks": [
        {
          "id": "de-technikprotokoll-1",
          "kind": "reflection",
          "points": 8,
          "writingLines": 12,
          "inputRows": 12,
          "prompt": "A. Lesbare Fassung (8 Kriterienpunkte): Schreibe Z1–Z5 vollständig und korrekt. Ändere nur Gross-/Kleinschreibung und Zeichensetzung; die Aussagen und Zahlen bleiben gleich. Du kannst die acht geänderten Stellen zusätzlich markieren; eine separate Liste ist nicht nötig. Korrekt Geschriebenes bleibt stehen.",
          "sample": "Z1 Am Dienstag trifft sich die Technik-AG im Schulraum.\nZ2 Die Materialliste, die Mia vorbereitet hat, liegt auf dem Tisch.\nZ3 Mia, die Leiterin der AG, prüft zuerst, ob drei Batterien vorhanden sind.\nZ4 Wenn eine Batterie fehlt, notiert sie das fehlende Teil.\nZ5 Die Gruppe will alles Wichtige im Protokoll festhalten.",
          "criteria": [
            "1 Punkt: Dienstag in Z1 gross.",
            "2 Punkte: Relativsatz in Z2 vor „die“ und nach „hat“ mit zwei Kommas begrenzt.",
            "3 Punkte: Apposition in Z3 beidseitig und der ob-Satz vor „ob“ mit drei Kommas abgegrenzt.",
            "1 Punkt: Komma nach dem vorangestellten Wenn-Satz in Z4.",
            "1 Punkt: Wichtige in Z5 gross. Eine fehlende separate Markierung kostet keinen Punkt, wenn die Fassung eindeutig ist. Inhalt, Zahlen und bereits korrekte Wörter bleiben unverändert; zusätzliche sinn- oder normwidrige Änderungen höchstens zeilenbezogen berücksichtigen."
          ]
        },
        {
          "id": "de-technikprotokoll-2",
          "kind": "reflection",
          "points": 6,
          "writingLines": 12,
          "inputRows": 12,
          "prompt": "B. Funktionen erklären (6 Kriterienpunkte): Erkläre mit Zeilenbezug, warum „Dienstag“ und „Wichtige“ gross, „fehlende“ aber klein stehen. Welche Wortgruppe erklärt Mia in Z3 näher, warum hat sie zwei Kommas, und ist sie ein Nebensatz? Bestimme in Z2, Z3 und Z4 die Nebensätze mit Einleitewort und Kommagrenze. Bei Z2 sind zwei Kommas nötig.",
          "sample": "Z1: Dienstag ist ein Wochentagsname. Z5: Wichtige ist nach „alles“ substantiviert. Z4: fehlende beschreibt das Nomen Teil. Z3: „die Leiterin der AG“ ist eine Apposition zu Mia ohne eigenes gebeugtes Verb und steht zwischen zwei Kommas. Z2: „die Mia vorbereitet hat“ ist ein Relativsatz zu Materialliste, beginnt mit „die“ und endet nach „hat“, also stehen vor und nach ihm Kommas. Z3: „ob drei Batterien vorhanden sind“ ist ein Inhaltssatz, der vor „ob“ abgetrennt wird. Z4: „Wenn eine Batterie fehlt“ ist ein vorangestellter Bedingungssatz, der nach „fehlt“ mit Komma endet.",
          "criteria": [
            "1 Punkt: Dienstag als Wochentagsname/Substantiv erklärt.",
            "1 Punkt: Wichtige nach „alles“ als Substantivierung erklärt.",
            "1 Punkt: fehlende als Adjektiv zum folgenden Nomen Teil erklärt.",
            "1 Punkt: „die Leiterin der AG“ als nähere Benennung/Apposition ohne eigenes finites Verb mit zwei Kommas erkannt.",
            "1 Punkt: Z2-Relativsatz mit Einleitewort „die“, Ende nach „hat“ und beiden Kommas erkannt.",
            "1 Punkt: ob-Satz in Z3 und Wenn-Satz in Z4 samt Einleitewörtern und Trennstellen erkannt; bei nur einem Fall ein halber Punkt als Lernfeedback möglich. Gleichwertige Alltagserklärungen gelten."
          ]
        },
        {
          "id": "de-technikprotokoll-3",
          "kind": "reflection",
          "points": 3,
          "writingLines": 6,
          "inputRows": 6,
          "prompt": "C. Automatische Hilfe prüfen (3 Kriterienpunkte): Sie schlägt „Die Materialliste, die Mia vorbereitet hat liegt, auf dem Tisch.“ vor. Was ist an der Kommagrenze falsch? Schreibe Z2 richtig und erkläre, zu welchem Satzteil „liegt“ gehört.",
          "sample": "Richtig: „Die Materialliste, die Mia vorbereitet hat, liegt auf dem Tisch.“ Das erste Komma öffnet den Relativsatz nach „Materialliste“, das zweite beendet ihn nach „hat“. „Liegt“ ist das gebeugte Verb des Hauptsatzes „Die Materialliste liegt auf dem Tisch“ und gehört nicht in den Relativsatz.",
          "criteria": [
            "1 Punkt: erstes Komma nach Materialliste als Beginn des eingeschobenen Relativsatzes.",
            "1 Punkt: zweites Komma direkt nach hat statt nach liegt als Ende des Relativsatzes.",
            "1 Punkt: liegt als finites Verb des Hauptsatzes erklärt; der falsche Vorschlag wird nicht blind übernommen."
          ]
        },
        {
          "id": "de-technikprotokoll-4",
          "kind": "reflection",
          "points": 3,
          "writingLines": 8,
          "inputRows": 8,
          "prompt": "D. Transfer (3 Kriterienpunkte): Korrigiere den neuen fiktiven Entwurf und begründe mindestens eine Kommaentscheidung: „Am mittwoch liest Leon das Protokoll. Leon der neue Schriftführer merkt dass ein Kabel fehlt. Er notiert alles nötige.“ Ändere keine Sachangaben.",
          "sample": "Am Mittwoch liest Leon das Protokoll. Leon, der neue Schriftführer, merkt, dass ein Kabel fehlt. Er notiert alles Nötige. „Der neue Schriftführer“ ist eine eingeschobene Apposition zu Leon und braucht links und rechts ein Komma; vor dem Nebensatz mit „dass“ steht ebenfalls ein Komma.",
          "criteria": [
            "1 Punkt: Mittwoch und Nötige beide gross; eine richtige Stelle allein genügt für diesen Punkt nicht.",
            "1 Punkt: beide Kommas um „der neue Schriftführer“.",
            "1 Punkt: Komma vor „dass“ und eine zutreffende Erklärung mindestens einer Kommafunktion. Inhalt bleibt gleich."
          ]
        }
      ],
      "releaseEvidence": {
        "validFor": "2026/27",
        "gradeBand": "7/8",
        "competencyRef": "PDF-S. 2: Klasse 7 ab 2026/27. §2.2.5 PDF-S. 30–31: regelgeleitete Wortschreibung, Zeichensetzung, Satzbau und Überarbeitung als Ziel bis Ende Klasse 8. §3.5 PDF-S. 51–52: Appositionen in 7/8, Satzgefüge und Interpunktion als fortgeführte Grundlagen.",
        "checkedAt": "2026-10-21"
      }
    },
    {
      "id": "en-alex-games-mediation",
      "subjectId": "en",
      "title": "Explain the games afternoon to Alex",
      "scope": "Freiwillige, gestützte Sprachmittlung im 7/8-Rahmen. § 2.2.5 beschreibt ein Ziel bis Ende Klasse 8; die Übung ist kein Nachweis des aktuellen Klasse-7-Unterrichts.",
      "levelStatus": "grade78-flex",
      "released": true,
      "prerequisite": "Der Aushang und Alex sind erfunden. Wähle nur die Informationen aus, die Alex für seine Fragen braucht. Eine wörtliche Übersetzung ist nicht nötig; eine echte Nachricht wird nicht versendet.",
      "introduction": "Alex ist 13 und versteht den deutschen Aushang nicht gut. Alex fragt auf Englisch: “What is this event? Can I join? When and where is it? Is it free? I do not have a game. Can I play a game on my tablet there? Do I have to sign up?” Hilf ihm mit den wichtigen Angaben auf Englisch. Sprachhilfe bei Bedarf: youth centre/center = Jugendhaus; board game = Brettspiel; card game = Kartenspiel; reception/front desk = Empfang. Satzanfänge: “You can …”, “You do not need to …”, “Please sign up …”. Du darfst ein zweisprachiges Wörterbuch benutzen. Der Aushang sagt nichts über das blosse Mitbringen eines Tablets. Offene Antworten werden nicht automatisch benotet.",
      "passage": "FIKTIVER AUSHANG · Spielenachmittag im Jugendhaus\nFür Kinder von 11 bis 14 Jahren.\nFreitag, 15:30–17:00 Uhr, Gruppenraum 2 im Jugendhaus.\nDie Teilnahme ist kostenlos.\nDu kannst eigene Brett- oder Kartenspiele mitbringen, musst aber nicht. Elektronische Spiele sind nicht erlaubt.\nEine Anmeldung ist nötig: Melde dich spätestens am Mittwoch um 18:00 Uhr am Empfang des Jugendhauses an. Die Plätze sind begrenzt.",
      "tasks": [
        {
          "id": "en-alex-1",
          "kind": "reflection",
          "points": 2,
          "writingLines": 4,
          "inputRows": 4,
          "prompt": "A. Schlüsselstellen (2 Kriterienpunkte): Nenne zwei unterschiedliche Stellen im Aushang und sage zu jeder kurz, welche Frage von Alex sie beantwortet. Deutsch genügt.",
          "sample": "„Für Kinder von 11 bis 14 Jahren“ beantwortet Alex’ Altersfrage. „Elektronische Spiele sind nicht erlaubt“ beantwortet seine Frage nach einem Spiel auf dem Tablet. Auch passende Angaben zu Zeit, Ort, Kosten, eigenem Spiel oder Anmeldung gelten.",
          "criteria": [
            "1 Punkt: erste passende Schlüsselstelle mit richtiger Zuordnung zu einer Frage.",
            "1 Punkt: zweite unterschiedliche passende Schlüsselstelle mit richtiger Zuordnung. Gleichwertige Stellen gelten."
          ]
        },
        {
          "id": "en-alex-2",
          "kind": "reflection",
          "points": 11,
          "writingLines": 10,
          "inputRows": 10,
          "prompt": "B. Nachricht an Alex (11 Kriterienpunkte): Schreibe wenige freundliche englische Sätze oder klare Stichpunkte, die Alex’ Fragen sinngemäss beantworten. Erfinde keine Adresse, keinen Preis und kein allgemeines Tablet-Verbot. Mit 13 passt Alex zur Altersgruppe; ein Platz ist wegen der Begrenzung nicht sicher.",
          "sample": "Hi Alex, it is a games afternoon for children aged 11 to 14, so you are old enough to take part. It is on Friday from 3:30 to 5:00 pm in group room 2 at the youth centre. It is free, and you do not need to bring a game. You may bring a board or card game, but you cannot play electronic games there, including a game on your tablet. You need to sign up at the youth centre reception by Wednesday at 6:00 pm because places are limited.",
          "criteria": [
            "1 Punkt: Spielenachmittag als Veranstaltung richtig erklärt.",
            "1 Punkt: Alter 11–14 oder Alex mit 13 als altersberechtigt; keine Platzgarantie behauptet.",
            "1 Punkt: Freitag richtig.",
            "1 Punkt: vollständiges Zeitfenster 15:30–17:00 Uhr.",
            "1 Punkt: Gruppenraum 2 im Jugendhaus, beide Ortsangaben.",
            "1 Punkt: Teilnahme kostenlos.",
            "1 Punkt: eigenes Brett- oder Kartenspiel nicht nötig.",
            "1 Punkt: keine elektronischen Spiele, also kein Tablet-Spiel; kein allgemeines Geräteverbot.",
            "1 Punkt: Anmeldung als Pflicht erkannt.",
            "1 Punkt: Anmeldung am Empfang spätestens Mittwoch um 18 Uhr, Ort und Frist zusammen.",
            "1 Punkt: verständliche englische Mitteilung direkt an Alex; sinngemässe Varianten und kleine Fehler ohne Sinnverlust gelten. Sachfehler nicht doppelt abziehen."
          ]
        }
      ],
      "releaseEvidence": {
        "validFor": "2026/27",
        "gradeBand": "7/8",
        "competencyRef": "PDF-S. 2: Klasse 7 ab 2026/27. Englisch als erste Fremdsprache, § 2.2.5 PDF-S. 30–31: sinngemässe adressatengerechte Sprachmittlung in vertrauter zweisprachiger Situation als Ziel bis Ende Klasse 8.",
        "checkedAt": "2026-10-21"
      }
    },
    {
      "id": "fr-mila-drawing-mediation",
      "subjectId": "fr",
      "title": "Mila die Zeichenwerkstatt erklären",
      "scope": "Freiwillige, stark gestützte Sprachmittlung im 7/8-Rahmen. § 3.2.5 nennt ein Ziel bis Ende Klasse 8; die deutsche Nachricht belegt weder französisches Schreiben noch Sprechen.",
      "levelStatus": "grade78-flex",
      "released": true,
      "prerequisite": "Der Aushang und Mila sind erfunden. Übertrage nur Milas benötigte Informationen sinngemäss ins Deutsche. Die Wortstütze hilft beim Lesen und ist kein Beleg für selbstständiges französisches Leseverstehen.",
      "introduction": "Mila versteht den französischen Aushang nicht. Sie fragt auf Deutsch: „Was ist das? Wann und wo kann ich mitmachen? Was brauche ich? Darf mein Hund mitkommen? Kostet es etwas, und muss ich mich anmelden?“ Du brauchst keine wörtliche Übersetzung. Wortstütze bei Bedarf: atelier de dessin = Zeichenwerkstatt; maison des jeunes = Jugendhaus; un crayon = ein Stift; une feuille = ein Blatt Papier; animal vivant = lebendes Tier; gratuite = kostenlos; inscription obligatoire = Anmeldung nötig; jusqu’à mardi inclus = bis einschliesslich Dienstag. Abgeschriebene Wortlisten allein beantworten Milas Fragen nicht. Offene Antworten werden nicht automatisch benotet.",
      "passage": "FIKTIVER AUSHANG · Atelier de dessin : les animaux\nJeudi, de 16 h à 17 h. Salle 4 de la maison des jeunes.\nApportez un crayon et une feuille. N'apportez pas d'animal vivant.\nParticipation gratuite. Inscription obligatoire au bureau jusqu'à mardi inclus.",
      "tasks": [
        {
          "id": "fr-mila-1",
          "kind": "reflection",
          "points": 2,
          "writingLines": 4,
          "inputRows": 4,
          "prompt": "A. Schlüsselstellen (2 Kriterienpunkte): Nenne zwei verschiedene Stellen des Aushangs und erkläre jeweils kurz auf Deutsch, welche Frage von Mila sie beantworten.",
          "sample": "„Jeudi, de 16 h à 17 h“ beantwortet die Frage nach der Zeit. „N’apportez pas d’animal vivant“ beantwortet die Frage nach einem lebenden Hund. Andere richtig zugeordnete Stellen zu Raum, Material, Kosten oder Anmeldung gelten ebenfalls.",
          "criteria": [
            "1 Punkt: erste passende Schlüsselstelle mit korrekter Frage.",
            "1 Punkt: zweite unterschiedliche Schlüsselstelle mit korrekter Frage. Gleichwertige Stellen gelten."
          ]
        },
        {
          "id": "fr-mila-2",
          "kind": "reflection",
          "points": 9,
          "writingLines": 9,
          "inputRows": 9,
          "prompt": "B. Nachricht an Mila (9 Kriterienpunkte): Schreibe eine kurze natürliche Nachricht auf Deutsch, die ihre Fragen sinngemäss beantwortet. Erfinde keinen Preis und keine Anmeldeadresse. Lebende Tiere dürfen nicht mitkommen; Tierzeichnungen sind nicht verboten.",
          "sample": "Hallo Mila, das ist eine Zeichenwerkstatt zum Thema Tiere. Sie ist am Donnerstag von 16 bis 17 Uhr in Raum 4 des Jugendhauses. Bring einen Stift und ein Blatt Papier mit; einen lebenden Hund darfst du nicht mitbringen. Die Teilnahme ist kostenlos, aber du musst dich spätestens am Dienstag im Büro anmelden.",
          "criteria": [
            "1 Punkt: Zeichenwerkstatt zum Thema Tiere.",
            "1 Punkt: Donnerstag.",
            "1 Punkt: vollständiges Zeitfenster 16–17 Uhr.",
            "1 Punkt: Raum 4 im Jugendhaus, beide Angaben.",
            "1 Punkt: Stift und Blatt Papier, beides.",
            "1 Punkt: kein lebendes Tier, damit auch kein Hund; kein Verbot von Tierzeichnungen behaupten.",
            "1 Punkt: Teilnahme kostenlos.",
            "1 Punkt: Anmeldung im Büro bis einschliesslich Dienstag als Pflicht, Ort und Frist zusammen.",
            "1 Punkt: verständliche deutsche Nachricht an Mila mit sinngemässer Auswahl ohne erfundene Fakten; kleine Fehler ohne Sinnverlust gelten. Sachfehler nicht doppelt abziehen."
          ]
        }
      ],
      "releaseEvidence": {
        "validFor": "2026/27",
        "gradeBand": "7/8",
        "competencyRef": "PDF-S. 2: Klasse 7 ab 2026/27. Französisch als zweite Fremdsprache, § 3.2.5 PDF-S. 63: sinngemässe Übertragung kurzer einfacher Äusserungen in vertrauter zweisprachiger Situation als Ziel bis Ende Klasse 8.",
        "checkedAt": "2026-10-21"
      }
    },
    {
      "id": "fr-theo-erlebnisbericht",
      "subjectId": "fr",
      "title": "Théo raconte son atelier",
      "scope": "Freiwillige, stark gestützte 7/8-Schreibübung. Einfache Erlebnisberichte und passé composé sind Ziele bis Ende Klasse 8; die Formen werden bereitgestellt. Kein Beleg für Lottes bereits behandelten Stoff.",
      "levelStatus": "grade78-flex",
      "released": true,
      "prerequisite": "Die Ereigniskarte und Satzhilfen bleiben beim Schreiben sichtbar. Ein eigener Bericht mit diesen Hilfen zeigt eine gestützte Leistung, nicht die selbstständige Beherrschung der Zeitform.",
      "introduction": "Schreibe als die erfundene Figur Théo für ein fiktives Atelierheft. Nutze nur die Ereigniskarte; erzähle nichts Persönliches über dich. Satzhilfe bei Bedarf: un atelier de cartes postales = Postkarten-Atelier; la médiathèque = Mediathek; j’ai participé (teilgenommen), j’ai choisi (gewählt), j’ai dessiné (gezeichnet), j’ai perdu (verloren), Zoé a trouvé (gefunden), j’ai terminé (beendet), j’ai montré (gezeigt); d’abord / ensuite / puis / enfin = zuerst / danach / dann / schließlich; parce que = weil. Weitere Wörter: du papier rouge = rotes Papier; un oiseau bleu = blauer Vogel; un crayon bleu = blauer Stift; sous la table = unter dem Tisch. Die Formen sind Hilfe, keine fertige Antwort. Offene Texte erhalten keine automatische Schulnote.",
      "passage": "Ereigniskarte – Théo und Zoé im Postkarten-Atelier\nSamstag 10:00 | Théo nimmt mit Zoé am Atelier in der Mediathek teil.\n10:10 | Théo wählt rotes Papier.\n10:20 | Théo zeichnet darauf einen blauen Vogel.\n10:30 | Théo verliert seinen blauen Stift.\n10:35 | Zoé findet den Stift unter dem Tisch.\n10:50 | Théo beendet die Postkarte und zeigt sie Zoé.\nDanach | Théo fand das Atelier schön, weil Zoé half und die Postkarte fertig wurde.",
      "tasks": [
        {
          "id": "fr-theo-1",
          "kind": "reflection",
          "points": 2,
          "writingLines": 4,
          "prompt": "A. Planen (2 Punkte): Notiere auf Deutsch oder Französisch drei Stationen: Anfang – Problem/Hilfe – Ende. Markiere, wer den Stift verloren und wer ihn gefunden hat. Noch kein ausformulierter Bericht.",
          "sample": "Anfang: Samstag 10 Uhr, Mediathek, Zoé, rotes Papier und blauer Vogel. Problem/Hilfe/Ende: Théo verliert seinen Stift um 10:30; Zoé findet ihn um 10:35 unter dem Tisch; um 10:50 ist die Karte fertig.",
          "criteria": [
            "1 Punkt: erkennbarer Anfang mit Zeit/Ort oder erster Handlung.",
            "1 Punkt: richtige Folge von Théo als Verlierer, Zoé als Finderin und Schluss. Deutsche Stichwörter gelten; eine ungeordnete Abschrift ist noch kein Plan."
          ]
        },
        {
          "id": "fr-theo-2",
          "kind": "reflection",
          "points": 16,
          "writingLines": 13,
          "prompt": "B. Bericht (16 Punkte): Schreibe als Théo einen französischen Ich-Bericht von ungefähr 6–9 kurzen Sätzen. Nenne Zeit, Ort und Zoé, dann Papier, Vogel, verlorenen Stift, Zoés Hilfe und die fertige Karte in der richtigen Reihenfolge. Beende mit Théos Reaktion und einem Grund. Nutze mindestens zwei passende Zeitmarker. Die Satzanzahl ist nur eine Hilfe; erfinde keine weiteren Personen oder eigenen Erlebnisse.",
          "sample": "Samedi à 10 h, j’ai participé à un atelier de cartes postales à la médiathèque avec Zoé. D’abord, j’ai choisi du papier rouge. Ensuite, j’ai dessiné un oiseau bleu. À 10 h 30, j’ai perdu mon crayon bleu. Cinq minutes plus tard, Zoé a trouvé le crayon sous la table. Enfin, à 10 h 50, j’ai terminé ma carte postale et j’ai montré ma carte à Zoé. J’ai aimé l’atelier parce que Zoé m’a aidé et que j’ai pu terminer ma carte.",
          "criteria": [
            "3 Punkte: Samstag um 10 Uhr, Mediathek und Teilnahme mit Zoé (je 1).",
            "2 Punkte: rotes Papier und blauer Vogel (je 1).",
            "1 Punkt: Théo/je verliert um 10:30 den eigenen blauen Stift; ohne Uhrzeit bei richtiger Handlung ein halber Punkt.",
            "2 Punkte: Zoé findet den Stift unter dem Tisch nach dem Verlust (Finderin und Ort/Folge je 1).",
            "2 Punkte: Karte um 10:50 fertig und Zoé gezeigt (je 1).",
            "2 Punkte: richtige Ereignisfolge und mindestens zwei sinnvolle Zeitmarker (je 1).",
            "2 Punkte: zwei verständliche Vergangenheitsformen für verschiedene Ereignisse, bereitgestellte Satzhilfen erlaubt (je 1).",
            "1 Punkt: passende positive Reaktion mit belegtem Grund.",
            "1 Punkt: zusammenhängender, verständlicher französischer Ich-Bericht; kleine Sprachfehler nicht doppelt abziehen. Gleichwertige Formulierungen gelten."
          ]
        },
        {
          "id": "fr-theo-3",
          "kind": "reflection",
          "points": 2,
          "writingLines": 5,
          "prompt": "C. Zwei Sachfehler verbessern (2 Punkte): In einem fremden Text steht: “J’ai choisi du papier bleu. J’ai trouvé mon crayon sous la table.” Nenne die beiden falschen Angaben und schreibe zwei richtige französische Sätze für Théo.",
          "sample": "Falsch sind bleu beim Papier und J’ai trouvé als Finderrolle. Richtig: “J’ai choisi du papier rouge. Zoé a trouvé mon crayon bleu sous la table.”",
          "criteria": [
            "1 Punkt: rotes statt blaues Papier in einem richtigen französischen Satz.",
            "1 Punkt: Zoé statt Théo als Finderin in einem richtigen französischen Satz. „Je l’ai perdu“ allein korrigiert die Finderrolle nicht."
          ]
        }
      ],
      "releaseEvidence": {
        "validFor": "2026/27",
        "gradeBand": "7/8",
        "competencyRef": "PDF-S. 2: Klasse 7 ab 2026/27. Zweite Fremdsprache § 3.2.4 PDF-S. 62: einfacher Erfahrungs-/Erlebnisbericht und angeleitetes Planen/Überarbeiten als Ziel bis Ende Klasse 8; A2 PDF-S. 59, passé composé und Zeitmarker PDF-S. 82.",
        "checkedAt": "2026-10-21"
      }
    },
    {
      "id": "ma-quader-aussparung-grundlagen",
      "subjectId": "ma",
      "title": "Quader und Flächen: Grundlagen wiederholen",
      "scope": "Freiwillige Wiederholung und Vertiefung für Klasse 7 aus den im aktuellen Lehrplan ausdrücklich als Klasse-6-Ziel markierten Grundlagen. Kein Beleg für Lottes früheren Unterricht und kein neuer Klasse-7-Jahresbereich.",
      "levelStatus": "grade78-flex",
      "released": true,
      "prerequisite": "Hilfreich sind Rechteckfläche Länge mal Breite, Umfang als Randlänge und Multiplikation dreier Kantenlängen. Eine Skizze auf kariertem Papier ist erlaubt; die App wertet Zeichnungen nicht automatisch aus.",
      "introduction": "Zwei fiktive Skizzen, keine realen Baupläne. Beim Quader sind alle sechs Seiten geschlossen; Klebelaschen und Materialdicke werden nicht gerechnet. Bei der zweiten Figur wird ein rechteckiges Stück oben aus einem 8 m breiten und 6 m hohen Rechteck herausgenommen. Zeichne dir die Figuren bei Bedarf auf kariertem Papier. Schreibe neben jede Zahl die richtige Einheit. Offene Rechenwege vergleichst du mit Muster und Kriterien; die App vergibt keine automatische Note.",
      "passage": "Figur A · geschlossener Quader\nLänge 6 cm · Breite 4 cm · Höhe 3 cm.\nGegenüberliegende Flächen sind jeweils gleich gross.\n\nFigur B · rechteckige Fläche mit Einbuchtung\nAusgangsrechteck: 8 m breit und 6 m hoch.\nOben mittig fehlt ein 2 m breites, 2 m tiefes Rechteck.\nAm oberen Rand bleiben links 3 m und rechts 3 m stehen.\nGehe für den Umfang am tatsächlichen Rand entlang: unten 8 m, rechts 6 m, oben rechts 3 m, in die Einbuchtung 2 m hinunter, dort 2 m quer, 2 m hinauf, oben links 3 m, links 6 m hinunter.",
      "tasks": [
        {
          "id": "ma-quader-1",
          "kind": "reflection",
          "points": 4,
          "writingLines": 7,
          "prompt": "Quader-Oberfläche (4 Kriterienpunkte): Nenne die drei verschiedenen Rechteckgrössen auf Figur A, erkläre, warum jede zweimal vorkommt, und berechne die gesamte Oberfläche mit Einheit.",
          "sample": "Die Flächenpaare sind 6·4 = 24 cm², 6·3 = 18 cm² und 4·3 = 12 cm². Vorder- und Rückseite, oben und unten sowie die beiden Seiten sind jeweils gleich gross. Insgesamt O = 2·(24+18+12) = 108 cm².",
          "criteria": [
            "1 Punkt: 6×4, 6×3 und 4×3 als drei Flächengrössen richtig zugeordnet.",
            "1 Punkt: 24, 18 und 12 cm² richtig berechnet.",
            "1 Punkt: je zwei gegenüberliegende Flächen für den geschlossenen Quader berücksichtigt.",
            "1 Punkt: Summe 108 cm² mit Flächeneinheit; gleichwertige Reihenfolge gilt."
          ]
        },
        {
          "id": "ma-quader-2",
          "kind": "reflection",
          "points": 3,
          "writingLines": 6,
          "prompt": "Quader-Volumen (3 Kriterienpunkte): Berechne, wie viele Kubikzentimeter in Figur A passen. Erkläre mit einem Satz, warum das Ergebnis cm³ und die Oberfläche aus Aufgabe 1 cm² trägt.",
          "sample": "V = 6 cm · 4 cm · 3 cm = 72 cm³. Das Volumen zählt Rauminhalt in Kubikzentimetern; die Oberfläche misst die sechs äusseren Flächen in Quadratzentimetern.",
          "criteria": [
            "1 Punkt: 6·4·3 als passende Rechnung.",
            "1 Punkt: Ergebnis 72 cm³.",
            "1 Punkt: cm³ als Rauminhalt und cm² als Fläche sachlich unterschieden."
          ]
        },
        {
          "id": "ma-quader-3",
          "kind": "reflection",
          "points": 5,
          "writingLines": 9,
          "prompt": "Fläche mit Einbuchtung (5 Kriterienpunkte): Skizziere Figur B auf Papier oder beschreibe ihren Rand. Berechne ihren Flächeninhalt und Umfang. Erkläre, warum der Umfang nicht einfach 28 m wie beim Ausgangsrechteck bleibt.",
          "sample": "Die Fläche ist 8·6 − 2·2 = 48 − 4 = 44 m². Der Rand läuft über 8+6+3+2+2+2+3+6 = 32 m. Im Vergleich zum 28-m-Rechteck ersetzt die Einbuchtung einen geraden 2-m-Abschnitt durch 2 m hinunter, 2 m quer und 2 m hinauf. Das verlängert den Rand um 4 m.",
          "criteria": [
            "1 Punkt: eine mittige obere 2×2-m-Einbuchtung, mit je 3 m oberem Rand links und rechts, richtig skizziert oder beschrieben.",
            "1 Punkt: Ausgangsfläche 48 m² und entnommene Fläche 4 m² richtig.",
            "1 Punkt: verbleibende Fläche 44 m² mit Einheit.",
            "1 Punkt: alle tatsächlichen Randstücke ergeben 32 m mit Längeneinheit.",
            "1 Punkt: die zusätzlichen zwei 2-m-Tiefenkanten erklären die 4 m Unterschied zum ursprünglichen Umfang; sinngemässe Beschreibung gilt."
          ]
        }
      ],
      "releaseEvidence": {
        "validFor": "2026/27",
        "gradeBand": "6-Grundlage, 7-Wiederholung",
        "competencyRef": "PDF-S. 2: Einführung der Erprobungsfassung 2026/27. § 2.1.4 PDF-S. 19 markiert Klassenstufe 6: Fläche und Umfang zusammengesetzter Figuren sowie Oberfläche und Volumen von Würfel/Quader. Das Paket verwendet einen geschlossenen Quader und eine rechtwinklige Aussparung, ohne Netzzeichnen oder Faltprobe zu beanspruchen.",
        "checkedAt": "2026-10-21"
      }
    },
    {
      "id": "ma-kuehlkasten-rationale-zahlen",
      "subjectId": "ma",
      "title": "Messwerte unter null vergleichen",
      "scope": "Freiwilliger Ausblick auf § 2.2.2 Rationale Zahlen als Ziel bis Ende Klasse 8. Der Mathematik-Lehrplan 2026 gilt 2026/27 für Klasse 7 und erst 2027/28 für Klasse 8. Keine belegte aktuelle Klasse-7-Unterrichtseinheit.",
      "levelStatus": "grade8-outlook",
      "released": true,
      "prerequisite": "Du solltest einfache Brüche und Dezimalzahlen vergleichen und auf einer Zahlengeraden markieren können. Negative Zahlen, Betrag, Koordinaten und Potenzen können neu sein: Bearbeite dann zunächst A mit einer Erklärung. Für Zahlengerade und Koordinatensystem brauchst du kariertes Papier und einen Stift. Alle Messwerte sind erfunden.",
      "introduction": "Ein Temperaturunterschied ist hier späterer Wert minus früherer Wert. Ein positives Ergebnis bedeutet Anstieg, ein negatives Abfall. Der Betrag nennt nur die Größe ohne Richtung. Die vier Werte sind einzelne Messungen; zwischen ihnen liegen keine Messdaten. Die App bewertet deine Zeichnungen und offenen Antworten nicht automatisch.",
      "passage": "FIKTIVER FORSCHUNGSCLUB · Kühlkasten-Messwerte\nMessung A · Zeit 0 h · Temperatur −3/2 °C\nMessung B · Zeit 1/2 h · Temperatur −0,75 °C\nMessung C · Zeit 5/4 h · Temperatur −9/4 °C\nMessung D · Zeit 2 h · Temperatur +0,5 °C\n\nZeit und Temperatur sind absichtlich als Bruch oder Dezimalzahl angegeben. Es gibt keine Messung bei 1 h und keine Angabe darüber, wie sich die Temperatur zwischen den vier Zeitpunkten verhielt. Zeichnungen entstehen auf zusätzlichem kariertem Papier; das Arbeitsblatt enthält Schreiblinien für Erklärungen und Ergebnisse.",
      "tasks": [
        {
          "id": "ma-kuehlkasten-1",
          "kind": "reflection",
          "points": 7,
          "writingLines": 9,
          "prompt": "A. Zahlen lesen und ordnen (7 Kriterienpunkte): Schreibe A und C als Dezimalzahlen sowie B und D als vollständig gekürzte Brüche; zeige für C einen kurzen Weg. Ordne die vier Temperaturen von kalt nach warm. Zeichne auf kariertem Papier eine Zahlengerade von −2,5 bis +0,5 °C in Viertelschritten und markiere A–D. Runde C auf ganze Grad und kennzeichne die Näherung.",
          "sample": "A = −1,5 °C; B = −3/4 °C; C = −9 ÷ 4 = −2,25 °C; D = +1/2 °C. Von kalt nach warm: C (−2,25), A (−1,5), B (−0,75), D (+0,5). Auf der Viertel-Zahlengeraden liegen diese vier Markierungen in derselben Reihenfolge; 0 und −2,5/+0,5 müssen zur Skala passen. C auf ganze Grad gerundet: etwa −2 °C; der Messwert bleibt exakt −2,25 °C.",
          "criteria": [
            "4 Punkte: A = −1,5, B = −3/4, C = −2,25 mit kurzem Rechenweg und D = +1/2; je eine korrekte Umwandlung, bei C gehört der Weg zum Punkt.",
            "1 Punkt: C < A < B < D richtig geordnet.",
            "1 Punkt: alle vier Punkte mit Vorzeichen auf einer passend beschrifteten Viertel-Zahlengeraden; alternative maßstäbliche Skala gilt.",
            "1 Punkt: C als etwa −2 °C gerundet und ausdrücklich nicht als exakter Messwert ausgegeben."
          ]
        },
        {
          "id": "ma-kuehlkasten-2",
          "kind": "reflection",
          "points": 7,
          "writingLines": 12,
          "prompt": "B. Koordinaten und Änderungen (7 Kriterienpunkte): Zeichne auf kariertem Papier Zeit 0–2 h waagrecht und Temperatur −2,5 bis +0,5 °C senkrecht, in Viertelschritten. Trage A–D als (Zeit | Temperatur) ein, ohne die Punkte als gemessene Kurve zu verbinden. Berechne A→B, B→C und C→D jeweils als später minus früher mit Vorzeichen und Einheit. Welche Änderung ist dem Betrag nach am größten, und in welche Richtung geht sie? Kannst du den exakten Wert bei 1 h oder den genauen Zeitpunkt eines Nulldurchgangs bestimmen?",
          "sample": "Punkte: A(0 | −1,5), B(0,5 | −0,75), C(1,25 | −2,25), D(2 | +0,5), Achsen mit h und °C. A→B: −3/4 − (−3/2) = +3/4 °C. B→C: −9/4 − (−3/4) = −3/2 °C. C→D: +1/2 − (−9/4) = +11/4 °C. Der größte Betrag ist 11/4 °C bei C→D, ein Anstieg. Bei 1 h gibt es keine Messung; ein genauer Nulldurchgang ist nicht bestimmbar. Eine Kurve oder lineare Verbindung wäre eine zusätzliche Modellannahme.",
          "criteria": [
            "2 Punkte: alle vier Zeitkoordinaten (1) sowie alle vier Temperaturkoordinaten mit Achsen und Einheiten (1) korrekt; Punkte nicht als echte Messkurve verbunden.",
            "3 Punkte: +3/4, −3/2 und +11/4 °C, je ein Punkt für richtigen Wert mit Vorzeichen und Einheit; exakte Dezimalwerte gelten.",
            "1 Punkt: C→D als größte Änderung nach Betrag mit Anstiegsrichtung und 11/4 °C erkannt.",
            "1 Punkt: weder exakter Wert bei 1 h noch genauer Nulldurchgang aus vier Einzelmessungen behauptet; Modellannahme oder neue Messung benannt."
          ]
        },
        {
          "id": "ma-kuehlkasten-3",
          "kind": "reflection",
          "points": 4,
          "writingLines": 8,
          "prompt": "C. Behauptung prüfen (4 Kriterienpunkte): Mika sagt: „Bei C war es wärmer als bei A, denn 9/4 ist größer als 3/2.“ Zeige mit Vergleich oder Rechnung den Fehler. Berechne außerdem den Betrag von C und die Gegenzahl von C. Erkläre, warum die beiden Begriffe hier zwar dieselbe positive Zahl liefern, aber etwas Verschiedenes meinen.",
          "sample": "Die Temperaturen sind negativ: C = −9/4 = −2,25 °C ist kleiner als A = −3/2 = −1,5 °C. C war kälter. Als Gegenprobe: −9/4 − (−3/2) = −3/4 °C. Der Betrag |−9/4| = 9/4 ist der Abstand von 0; die Gegenzahl zu −9/4 ist +9/4, weil beide zusammen 0 ergeben. Bei einer positiven Zahl wären Betrag und Gegenzahl verschieden.",
          "criteria": [
            "1 Punkt: zutreffende Deutung „C war kälter als A“ statt Mikas Behauptung.",
            "1 Punkt: die Deutung durch einen exakten Vergleich negativer Werte oder eine Rechnung begründet, zum Beispiel −9/4 < −3/2 oder C−A = −3/4 °C. Eine einzige dieser beiden Begründungen genügt.",
            "1 Punkt: Betrag 9/4 mit Abstandsbedeutung.",
            "1 Punkt: Gegenzahl +9/4 mit Additions-zu-0-Bedeutung; bloß zweimal +9/4 ohne Erklärung reicht nicht."
          ]
        },
        {
          "id": "ma-kuehlkasten-4",
          "kind": "reflection",
          "points": 2,
          "writingLines": 5,
          "prompt": "D. Klammern zählen (2 Kriterienpunkte): Berechne (−3/2)² und −(3/2)². Erkläre den Unterschied der Vorzeichen durch die Stellung der Klammern.",
          "sample": "(−3/2)² = (−3/2)·(−3/2) = +9/4. Dagegen ist −(3/2)² = −((3/2)·(3/2)) = −9/4. Im ersten Ausdruck gehört das Minus zur quadrierten Basis; im zweiten steht es vor der positiven Potenz.",
          "criteria": [
            "1 Punkt: (−3/2)² = +9/4 mit dem Minus in der quadrierten Basis erklärt.",
            "1 Punkt: −(3/2)² = −9/4 mit Minus vor der positiven Potenz erklärt."
          ]
        }
      ],
      "releaseEvidence": {
        "validFor": "2027/28",
        "gradeBand": "8",
        "competencyRef": "PDF-S. 2: Klasse 7 ab 2026/27, Klasse 8 ab 2027/28. § 2.2.2 PDF-S. 24–25: rationale Zahlen darstellen, vergleichen, runden, koordinatisieren, Betrag/Gegenzahl, rechnen und Potenzen; Zielmarke Klassenstufe 8.",
        "checkedAt": "2026-10-21"
      }
    },
    {
      "id": "de-kommentar-leseraum",
      "subjectId": "de",
      "title": "Ein Kommentar: Was belegen Besuchszahlen?",
      "scope": "Freiwilliger, gestützter Einstieg in lineare pragmatische Texte im gültigen 7/8-Rahmen. Die Kompetenzen aus § 2.2.2 sind als Ziel bis Ende Klasse 8 markiert; der Kommentar ist ein Beispiel in der 7/8-Spalte. Kein belegter aktueller Klasse-7-Unterrichtsstoff.",
      "levelStatus": "grade78-flex",
      "released": true,
      "prerequisite": "Der Kommentar, die Verfasserin, das Portal, der Leseraum, das angegebene Datum und alle Zahlen sind erfunden. Eine erwähnte Zählnotiz liegt nicht als eigene Quelle vor. Du brauchst keine echten Angaben über dich oder deine Schule.",
      "introduction": "Lesefrage: Was will die Verfasserin erreichen, und was lässt sich aus ihren Angaben tatsächlich schließen? Ein Kommentar verbindet berichtete Angaben mit einer Meinung. Eine Sachangabe ist eine im Text prüfbare Behauptung, aber dadurch noch keine außerhalb des Textes bewiesene Tatsache. Eine Wertung ist eine Einschätzung. Nenne bei Belegen die Zeile und erkläre, was sie trägt. Ein Besuch ist ein gezählter Vorgang und nicht zwingend eine andere Person. Die Kriterien helfen beim Vergleichen; es gibt keine automatische Note.",
      "passage": "FIKTIVER KOMMENTAR · QUELLE A\nA01 Länger offen? Erst weiter testen!\nA02 Kommentar von Mila Winter im erfundenen Jugendportal „Fensterplatz“, 29. September 2026.\nA03 Der erfundene Leseraum Nordbogen schließt mittwochs gewöhnlich um 16 Uhr.\nA04 Für einen Test im September blieb er an drei Mittwochen bis 17 Uhr offen.\nA05 Eine hier nicht beigelegte Zählnotiz meldet für die zusätzliche Stunde 12, 9 und 15 Besuche.\nA06 Zusammen sind das 36 Besuche in diesen drei Stunden; ob Personen mehrfach kamen, steht dort nicht.\nA07 Ich finde, das ist ein guter Grund, den späteren Mittwoch weiter auszuprobieren.\nA08 Deshalb wünsche ich mir vier weitere Test-Mittwoche.\nA09 Ob die Besuchenden nach einem Kurs kamen, weiß ich nicht; dazu fehlen Angaben.\nA10 Vor einer dauerhaften Entscheidung sollte geklärt werden, ob Personal und Räume für die zusätzliche Stunde verfügbar sind.\nA11 Ein Erfolg für alle Jugendlichen ist mit diesen drei Stunden nicht bewiesen.",
      "tasks": [
        {
          "id": "de-kommentar-1",
          "kind": "reflection",
          "points": 3,
          "writingLines": 5,
          "prompt": "Textsteckbrief (3 Kriterienpunkte): Nenne Textsorte, Verfasserin, Veröffentlichungsort und das im Kommentar angegebene Datum. Was davon ist in dieser Übung erfunden?",
          "sample": "A02 nennt einen Kommentar von Mila Winter im Jugendportal „Fensterplatz“, datiert auf den 29. September 2026. Portal, Verfasserin, Datum als Publikationssituation und der Leseraum sind für diese Übung erfunden; es ist kein echter Online-Artikel.",
          "criteria": [
            "1 Punkt: Textsorte Kommentar.",
            "1 Punkt: Mila Winter und das fiktive Portal „Fensterplatz“ zusammen richtig genannt.",
            "1 Punkt: 29. September 2026 als Textdatum mit fiktivem Status eingeordnet; keine echte Veröffentlichung behauptet."
          ]
        },
        {
          "id": "de-kommentar-2",
          "kind": "reflection",
          "points": 3,
          "writingLines": 7,
          "prompt": "Aufbau (3 Kriterienpunkte): Gib A03–A06, A07–A08 und A09–A11 je eine kurze Überschrift. Erkläre zu jedem Teil mit einem Satz seine Aufgabe im Gedankengang.",
          "sample": "A03–A06: „Ausgangslage und Testzahlen“ – gewöhnliche Zeit, Probe und berichtete Besuche bilden die Grundlage. A07–A08: „Meinung und Vorschlag“ – Mila bewertet die Zahlen und wünscht vier weitere Tests. A09–A11: „Grenzen und Bedingung“ – Besuchsgründe sind unbekannt, Personal und Räume offen; eine Dauerentscheidung ist nicht bewiesen. Der Gang lautet Angaben → Bewertung/Vorschlag → Vorbehalt.",
          "criteria": [
            "1 Punkt: A03–A06 mit passender Überschrift und Funktion der berichteten Ausgangs- und Testangaben.",
            "1 Punkt: A07–A08 mit passender Überschrift und Funktion von Bewertung und weiterem Testvorschlag.",
            "1 Punkt: A09–A11 mit passender Überschrift und Funktion von Grenzen/Bedingungen. Andere sinngemäße Titel gelten."
          ]
        },
        {
          "id": "de-kommentar-3",
          "kind": "reflection",
          "points": 4,
          "writingLines": 7,
          "prompt": "Sachangabe und Wertung (4 Kriterienpunkte): Nenne zwei verschiedene Sachangaben aus A03–A06 und eine Wertung aus A07–A11 mit jeweiliger Zeile. Erkläre, woran du die Wertung erkennst. Sind die Sachangaben damit außerhalb des erfundenen Textes bewiesen?",
          "sample": "A03 nennt die gewöhnliche Schließzeit 16 Uhr, A04 drei Test-Mittwoche bis 17 Uhr; auch die in A05 berichteten 12, 9 und 15 Besuche oder die nachrechenbare Summe 36 aus A06 sind Sachangaben im Text. A07 „Ich finde ... guter Grund“ ist Milas Einschätzung: „finde“ und „gut“ bewerten die Angaben. A08 „wünsche“ und A10 „sollte“ können mit Erklärung ebenfalls als Empfehlung gelten. A11 allein ist eher eine begrenzende Beurteilung der Beweislage. Keine dieser fiktiven Angaben belegt eine wirkliche Bibliothek.",
          "criteria": [
            "1 Punkt: erste passende Sachangabe mit A-Zeile.",
            "1 Punkt: zweite andere Sachangabe mit A-Zeile; eine Zählnotiz außerhalb des Textes wird nicht erfunden.",
            "1 Punkt: A07 oder begründet A08/A10 als Wertungs-/Empfehlungsstelle mit Zeile.",
            "1 Punkt: Bewertungsmerkmal erklärt und Textstatus der Sachangaben nicht mit externem Beweis verwechselt."
          ]
        },
        {
          "id": "de-kommentar-4",
          "kind": "reflection",
          "points": 3,
          "writingLines": 6,
          "prompt": "Absicht (3 Kriterienpunkte): Was möchte Mila als nächsten Schritt? Nenne eine Formulierung, an der ihre Haltung sichtbar wird. Warum verlangt sie damit noch keine dauerhafte Öffnung? Belege am Text.",
          "sample": "Mila wünscht vier weitere Test-Mittwoche (A08). Ihre Haltung zeigt „Ich finde ... guter Grund“ (A07) oder „wünsche ich mir“ (A08). A08 nennt ausdrücklich Tests; A10 fordert vor einer dauerhaften Entscheidung die Prüfung von Personal und Räumen, A11 begrenzt die Aussagekraft.",
          "criteria": [
            "1 Punkt: vier weitere Test-Mittwoche als nächster Schritt.",
            "1 Punkt: passende Haltungsformulierung mit A-Zeile.",
            "1 Punkt: Test und Daueröffnung anhand A08, A10 oder A11 unterschieden."
          ]
        },
        {
          "id": "de-kommentar-5",
          "kind": "reflection",
          "points": 4,
          "writingLines": 8,
          "prompt": "Behauptung prüfen (4 Kriterienpunkte): Eine fiktive Person sagt: „Die 36 Besuche beweisen, dass 36 verschiedene Jugendliche dauerhaft bis 17 Uhr kommen wollen.“ Prüfe diese Aussage in drei getrennten Punkten und stütze sie mit A-Zeilen.",
          "sample": "A05–A06 berichten 36 Besuche, nicht 36 verschiedene Personen; Mehrfachbesuche sind offen. Das Alter der Besuchenden steht nicht da. A05–A09 enthalten keine Befragung nach Wünschen; A09 nennt sogar unbekannte Gründe. A08 fordert vier weitere Tests statt einer Daueröffnung; A10–A11 nennen Vorbehalte. Besuche, Personen, Wünsche und dauerhafter Bedarf sind verschiedene Aussagen.",
          "criteria": [
            "1 Punkt: Besuche von verschiedenen Personen getrennt; unbekanntes Alter ist ein zusätzlicher richtiger Einwand, aber nicht Pflicht.",
            "1 Punkt: fehlender Beleg für Wünsche/Absichten erkannt.",
            "1 Punkt: weitere Tests von dauerhaftem Bedarf/Öffnen unterschieden.",
            "1 Punkt: passende A-Zeilen für die drei Trennungen zusammen."
          ]
        },
        {
          "id": "de-kommentar-6",
          "kind": "reflection",
          "points": 3,
          "writingLines": 7,
          "prompt": "Begrenzter Schluss (3 Kriterienpunkte): Antworte in zwei bis drei Sätzen auf die Lesefrage. Trenne eine Angabe, die im Kommentar berichtet wird, von Milas Bewertung oder Vorschlag. Nenne eine offene Frage für eine spätere Dauerentscheidung.",
          "sample": "Im erfundenen Kommentar werden für drei zusätzliche Öffnungsstunden 12, 9 und 15 Besuche berichtet, zusammen 36 (A05–A06). Mila Winter wertet dies als Grund für vier weitere Test-Mittwoche, nicht als Beweis für eine Daueröffnung (A07–A08, A10–A11). Vor einer Dauerentscheidung müsste beispielsweise geklärt werden, ob Personal und Räume verfügbar sind (A10).",
          "criteria": [
            "1 Punkt: berichtete Angabe mit Textstatus und passender Zeile.",
            "1 Punkt: Milas Bewertung oder Vorschlag davon getrennt.",
            "1 Punkt: konkrete offene Prüffrage, zum Beispiel Personal, Raum, Mehrfachbesuche oder weiterer Bedarf."
          ]
        }
      ],
      "releaseEvidence": {
        "validFor": "2026/27",
        "gradeBand": "7/8",
        "competencyRef": "PDF-S. 2: Fassung für Klasse 7 ab 2026/27. § 2.2.2, PDF-S. 26–27: pragmatische Texte, Textfunktion, Absicht, Aufbau, Sachinformation/Wertung und begründeter Schluss als Ziel bis Ende Klasse 8. § 3.2, PDF-S. 47–48: Kommentar als exemplarische 7/8-Textsorte. PDF-S. 46: Unterrichtsfolge durch Lehrkräfte.",
        "checkedAt": "2026-10-21"
      }
    },
    {
      "id": "de-leserbrief-tauschregal",
      "subjectId": "de",
      "title": "Einen begründeten Leserbrief entwerfen",
      "scope": "Freiwilliger, gestützter 7/8-Einstieg in appellierendes Schreiben. § 3.4 nennt Leserbriefe als Beispiel für 7/8; die Schreibkompetenzen sind bis Ende Klasse 8 markiert. Keine belegte aktuelle Klasse-7-Unterrichtseinheit.",
      "levelStatus": "grade78-flex",
      "released": true,
      "prerequisite": "Die Zeitung, Regal-AG, Orte, Personen, Daten und Zahlen sind für diese Aufgabe erfunden. Schreibe nur einen Entwurf; es wird nichts an eine echte Redaktion gesendet. Verwende keine echten Namen oder Schulangaben.",
      "introduction": "Ein Leserbrief reagiert auf eine veröffentlichte Meldung und richtet eine begründete Meinung an die Redaktion. Eine Zahl belegt nur, was tatsächlich gezählt wurde. Der Entwurf soll einen kleinen Versuch vorschlagen und die noch offenen Bedingungen benennen. Verwende Quelle A und B getrennt, nenne ihre Daten richtig und prüfe die Reichweite deiner Aussagen. Die App bewertet offene Texte nicht automatisch.",
      "passage": "FIKTIVE QUELLE A · Meldung der erfundenen Schülerzeitung „Kleeblatt“ vom Mittwoch, 4. November 2026\nDie erfundene Regal-AG öffnet das Tauschregal derzeit mittwochs von 12:30 bis 13:00 Uhr. Ob eine längere Öffnung möglich ist, wurde noch nicht entschieden. Dafür müsste die AG zuerst klären, ob genügend Helfende Zeit haben.\n\nFIKTIVE QUELLE B · Zählnotiz der erfundenen Regal-AG vom Freitag, 6. November 2026, über Mittwoch, 4. November\nAn diesem einen Mittwoch wurden 18 Besuche am Tauschregal gezählt. Sieben davon fanden zwischen 12:50 und 13:00 Uhr statt. Wir haben nicht gefragt, ob die Besuchenden eine längere Öffnung wünschen. Dieselbe Person könnte mehrfach vorbeigekommen sein.\n\nSCHREIBSITUATION · Entwirf einen Leserbrief an die Redaktion „Kleeblatt“. Schlage vor, eine Öffnung bis 13:15 Uhr an vier Mittwochen als mögliche Probe zu prüfen. Ob Schule und AG dies mit genügend Helfenden erlauben, ist offen. Eine Zählung an nur einem Mittwoch beweist noch keinen dauerhaften Bedarf.",
      "tasks": [
        {
          "id": "de-leserbrief-1",
          "kind": "reflection",
          "points": 4,
          "writingLines": 7,
          "prompt": "A. Belegplan (4 Kriterienpunkte): Notiere vier kurze Punkte: Was sagt Quelle A sicher? Was zählt Quelle B für genau einen Mittwoch? Was folgt aus den sieben späten Besuchen nicht? Welche Entscheidung ist vor der Probe offen? Nenne bei A und B Datum oder Quellenart.",
          "sample": "Quelle A, Meldung vom 4. November: Das Regal ist mittwochs 12:30–13:00 Uhr geöffnet; eine Verlängerung ist nicht beschlossen. Quelle B, Notiz vom 6. November über Mittwoch, 4. November: 18 Besuche an diesem einen Mittwoch, davon sieben in den letzten zehn Minuten. Daraus folgen weder sieben verschiedene Personen noch sieben Wünsche nach längerer Öffnung oder ein Wochenmuster. AG und Schule müssen klären, ob eine vierwöchige Probe und genügend Helfende möglich sind.",
          "criteria": [
            "1 Punkt: Quelle A samt Datum/Art und gegenwärtiger Öffnungszeit mit offener Verlängerung richtig.",
            "1 Punkt: Quelle B samt Notiz- und Beobachtungstag, 18 Besuche und sieben späte Besuche richtig.",
            "1 Punkt: Besuche nicht zu verschiedenen Personen oder geäußerten Wünschen umgedeutet.",
            "1 Punkt: Machbarkeit und Helferfrage als offene Entscheidung erkannt."
          ]
        },
        {
          "id": "de-leserbrief-2",
          "kind": "reflection",
          "points": 14,
          "writingLines": 16,
          "inputRows": 12,
          "prompt": "B. Leserbrief (14 Kriterienpunkte): Schreibe nur einen Entwurf an die Redaktion „Kleeblatt“. Nenne Anlass und Meinung, stütze sie mit beiden Quellen und formuliere eine höfliche Bitte: AG und Schule sollen eine vierwöchige Probe bis 13:15 Uhr mit verfügbaren Helfenden prüfen. Sage, was die Zählung nicht zeigt. Schlage namenlose Besuchszählung und getrennte freiwillige Rückmeldungen während einer möglichen Probe vor. Ein Richtwert von 120–170 Wörtern hilft beim Planen, ist aber keine Punkteschwelle. Erfinde keine Zustimmung oder Wünsche.",
          "sample": "An die Redaktion des Kleeblatts\nBetreff: Eine längere Öffnung des Tauschregals ausprobieren?\n\nLiebes Redaktionsteam,\n\neure Meldung vom 4. November berichtet, dass das Tauschregal mittwochs von 12:30 bis 13:00 Uhr geöffnet ist. Ich fände es sinnvoll, eine etwas längere Öffnung zu erproben. Laut der Zählnotiz der Regal-AG vom 6. November gab es am Mittwoch, 4. November, 18 Besuche; sieben davon lagen in den letzten zehn Minuten. Das zeigt, dass kurz vor Schluss noch etwas los war. Es zeigt aber weder den Wunsch dieser Menschen nach mehr Zeit noch, ob es an anderen Tagen genauso wäre.\n\nKönnte die AG mit der Schule prüfen, ob genug Helfende für eine vierwöchige Probe bis 13:15 Uhr Zeit hätten? Während der Probe könnten Besuche und freiwillige Rückmeldungen ohne Namen getrennt erfasst werden. Danach ließe sich besser entscheiden, ob sich die zusätzliche Viertelstunde lohnt. Ich freue mich, wenn ihr diesen Vorschlag an die AG weitergebt.\n\nViele Grüße\nEine Leserin der erfundenen Zeitung",
          "criteria": [
            "2 Punkte: Redaktion/Leserbrief erkennbar (1), Meldung als Anlass klar (1).",
            "2 Punkte: eigener Standpunkt verständlich (1), Beleg, Grenze und Bitte sinnvoll verbunden (1).",
            "2 Punkte: Quelle A mit mittwochs 12:30–13:00 Uhr (1) und offener Entscheidung/Helferfrage (1) richtig.",
            "2 Punkte: Quelle B mit 18 Besuchen an einem Mittwoch (1) und sieben in den letzten zehn Minuten (1) richtig.",
            "2 Punkte: keine sieben Wünsche oder Personen als belegt (1), keine Verallgemeinerung auf alle Tage/Wochen (1).",
            "2 Punkte: vier Mittwoche bis 13:15 Uhr als Probe/Prüfung (1), AG/Schule und Helferfrage realistisch einbezogen (1).",
            "2 Punkte: namenlose Zählung und freiwillige Rückmeldungen getrennt vorgeschlagen (1), höflicher verständlicher Schluss (1). Andere gleichwertige Formulierungen gelten; Wortzahl ist keine Punkteschwelle."
          ]
        },
        {
          "id": "de-leserbrief-3",
          "kind": "reflection",
          "points": 2,
          "writingLines": 6,
          "prompt": "C. Einen Schluss überarbeiten (2 Kriterienpunkte): Warum ist dieser Satz ungeeignet? Formuliere eine vorsichtige belegte Alternative: „Sieben Schülerinnen und Schüler wollten am 6. November länger bleiben, also muss das Regal jetzt jeden Tag eine Stunde länger öffnen.“",
          "sample": "Der Satz macht aus sieben Besuchen sieben Personen mit Wünschen, verwechselt das Datum der Freitagsnotiz mit dem beobachteten Mittwoch und verallgemeinert eine Zählung auf jeden Tag. Eine belegte Alternative lautet: „Laut der Notiz vom 6. November lagen am Mittwoch, 4. November, sieben von 18 Besuchen in den letzten zehn Minuten. Deshalb schlage ich vor, eine um 15 Minuten längere Öffnung an vier Mittwochen zu prüfen, wenn genügend Helfende Zeit haben.“",
          "criteria": [
            "1 Punkt: mindestens einen sachlichen Fehler verständlich erklärt, etwa Besuche ≠ Personen/Wünsche, falscher Tag oder unbelegte tägliche Stunde.",
            "1 Punkt: eine mit den Quellen vereinbare, begrenzte Alternative mit möglicher Probe formuliert."
          ]
        }
      ],
      "releaseEvidence": {
        "validFor": "2026/27",
        "gradeBand": "7/8",
        "competencyRef": "PDF-S. 2: Klasse 7 ab 2026/27. § 2.2.4 PDF-S. 29–30: adressaten- und intentionsgerechtes Schreiben, Begründen, Appellieren und Überarbeiten als Ziel Ende Klasse 8. § 3.4 PDF-S. 49: Leserbrief als exemplarischer appellierender Text in der 7/8-Spalte. PDF-S. 46: keine feste Unterrichtsfolge.",
        "checkedAt": "2026-10-21"
      }
    },
    {
      "id": "de-innerer-monolog-projekttisch",
      "subjectId": "de",
      "title": "Minas Gedanken am Projekttisch",
      "scope": "Freiwilliger, gestützter Einstieg in einen exemplarischen 7/8-Bereich. Der innere Monolog steht in § 3.4 in der 7/8-Spalte; die Schreibziele gelten bis Ende Klasse 8. Kein belegter aktueller Klasse-7-Unterrichtsstoff.",
      "levelStatus": "grade78-flex",
      "released": true,
      "prerequisite": "Alle Figuren und der Ausgangstext sind erfunden. Du schreibst Minas mögliche Gedanken, keine Behauptung über wirkliche Personen. Die App bewertet deinen offenen Text nicht automatisch.",
      "introduction": "Ein innerer Monolog zeigt die Gedanken einer Figur in einem bestimmten Augenblick. Schreibe in der Ich-Form und bleibe bei dem, was Mina bis jetzt wissen kann. Zeige eine Frage oder Unsicherheit, ein passendes Gefühl und einen begründeten nächsten Schritt. Trenne dabei: Was weiß ich? Was vermute ich? Was fühle ich? Was tue ich als Nächstes?",
      "passage": "FIKTIVER AUSGANGSTEXT · Der Zettel am Projekttisch\nIn der Projektgruppe baut Mina mit Jo und Eren ein kleines Modell aus Karton. Mina hat die Zeichnung mit den Maßen vorbereitet. Am Dienstag legt sie sie in die gemeinsame Mappe. Am Mittwoch liegt die Mappe offen auf dem Tisch, aber die Zeichnung fehlt. Daneben klebt ein Zettel: „Wir haben schon etwas geändert. Reden wir nach der Pause.“ Der Zettel trägt keinen Namen. Jo und Eren sind gerade nicht im Raum. Mina sieht, dass noch zwölf Minuten bis zum Ende der Pause bleiben.\n\nDer Text sagt nicht, wer den Zettel geschrieben, wer die Zeichnung genommen oder was die Gruppe geändert hat. Schreibe diese Vermutungen nicht als Tatsache.",
      "tasks": [
        {
          "id": "de-monolog-1",
          "kind": "reflection",
          "points": 4,
          "writingLines": 7,
          "prompt": "A. Vor dem Schreiben (4 Kriterienpunkte): Notiere zwei gesicherte Textangaben, eine offene Frage und ein mögliches Gefühl Minas. Trenne Beobachtung und Vermutung.",
          "sample": "Sicher: Die Zeichnung lag am Dienstag in der gemeinsamen Mappe. Sicher: Am Mittwoch fehlt sie in der offenen Mappe; ein namenloser Zettel liegt daneben. Offen: Wer schrieb den Zettel und wo ist die Zeichnung? Mögliches Gefühl: Mina könnte besorgt sein, weil sie die Maße braucht.",
          "criteria": [
            "1 Punkt je zutreffender, ausdrücklich gesicherter Textangabe (2). Auch die zwölf Minuten bis Pausenende sind sicher.",
            "1 Punkt für eine wirklich offene Frage zu Zettel, Zeichnung oder Änderung.",
            "1 Punkt für ein als Möglichkeit formuliertes, zur Situation passendes Gefühl."
          ]
        },
        {
          "id": "de-monolog-2",
          "kind": "reflection",
          "points": 12,
          "writingLines": 15,
          "inputRows": 12,
          "prompt": "B. Innerer Monolog (12 Kriterienpunkte): Schreibe Minas Gedanken genau jetzt am Projekttisch in der Ich-Form. Nutze die fehlende Zeichnung und den namenlosen Zettel. Zeige mindestens eine Unsicherheit, ein nachvollziehbares Gefühl und einen ausführbaren nächsten Schritt ohne unbelegte Schuldzuweisung. Etwa 80–130 Wörter helfen bei der Planung, sind aber keine Punkteschwelle.",
          "sample": "Wo ist meine Zeichnung? Gestern habe ich sie doch in unsere Mappe gelegt. Jetzt liegt hier nur dieser Zettel: Wir haben etwas geändert. Was genau heißt das? Vielleicht haben Jo und Eren eine andere Idee für das Modell. Aber ich weiß nicht einmal, wer den Zettel geschrieben hat. Ich ärgere mich, weil ich die Maße nachsehen wollte, und gleichzeitig bin ich neugierig auf die Änderung. Soll ich sofort eine neue Zeichnung machen? Das wäre vielleicht doppelte Arbeit. Ich schaue erst, ob die Zeichnung zwischen den anderen Blättern liegt. Nach der Pause frage ich die beiden ruhig, was geändert wurde und wo wir die Zeichnung finden.",
          "criteria": [
            "2 Punkte: Ich-Form und als Gedanken erkennbare Darstellung (1); im Augenblick am Tisch verankert (1).",
            "2 Punkte: fehlende Zeichnung (1) und namenloser Zettel oder unklare Änderung (1) sinnvoll aufgenommen.",
            "2 Punkte: mindestens eine Frage oder Unsicherheit (1) und eine mögliche Überlegung dazu (1).",
            "2 Punkte: passende Gefühlsregung (1) und durch die Situation nachvollziehbar (1).",
            "2 Punkte: nächster Schritt konkret ausführbar (1) und zur Klärung geeignet (1).",
            "2 Punkte: keine unbelegte Schuld oder fremde Gedanken als Tatsache (1); Text zusammenhängend und verständlich (1). Kleine Sprachfehler ohne Sinnverlust nicht nochmals abziehen. Andere passende Gefühle und Schritte gelten ebenfalls."
          ]
        },
        {
          "id": "de-monolog-3",
          "kind": "reflection",
          "points": 4,
          "writingLines": 7,
          "prompt": "C. Zwei Sätze überarbeiten (4 Kriterienpunkte): Erkläre zu jedem Satz kurz das Problem und schreibe eine bessere Ich-Formulierung für Mina. 1. „Jo hat meine Zeichnung gestohlen. Das steht ja auf dem Zettel.“ 2. „Mina fühlte sich schlecht und wartete.“",
          "sample": "1. Der namenlose Zettel nennt weder Jo noch einen Diebstahl. Besser: „Vielleicht weiß jemand aus der Gruppe etwas über die Zeichnung, aber zuerst muss ich fragen, was mit ihr passiert ist.“ 2. Der Satz berichtet über Mina, statt ihre Gedanken zu zeigen. Besser: „Ich bin unruhig. Soll ich jetzt nach der Zeichnung suchen oder nach der Pause die anderen fragen?“",
          "criteria": [
            "1 Punkt: Beim ersten Satz unbelegte Schuldzuweisung erklärt.",
            "1 Punkt: Erster Satz als vorsichtiger, passender Ich-Gedanke überarbeitet.",
            "1 Punkt: Beim zweiten Satz fehlende innere Perspektive oder Ich-Form erklärt.",
            "1 Punkt: Zweiter Satz als nachvollziehbarer Ich-Gedanke überarbeitet."
          ]
        }
      ],
      "releaseEvidence": {
        "validFor": "2026/27",
        "gradeBand": "7/8",
        "competencyRef": "PDF-S. 2: Klasse 7 ab 2026/27. § 2.2.4 PDF-S. 29–30: Schreiben als Ziel bis Ende Klasse 8. § 3.4 PDF-S. 50: innerer Monolog als exemplarische Textform in der 7/8-Spalte. PDF-S. 46: keine feste Unterrichtsfolge.",
        "checkedAt": "2026-10-21"
      }
    },
    {
      "id": "mbi-lesepause-medienwerkstatt",
      "subjectId": "mbi",
      "title": "Eine digitale Infokarte herstellen",
      "scope": "Ausblick Klasse 8 · freiwillig. Die MBI-Erprobungsfassung gilt für Klasse 7 ab 2026/27, nennt Planen und Erstellen digitaler Inhalte aber unter Klassenstufe 8. Die Werkstatt ist ein gestützter Teilfall; kein freies HTML-Coding, keine echte Veröffentlichung und kein Nachweis der aktuellen Schulfolge.",
      "levelStatus": "grade8-outlook",
      "released": true,
      "prerequisite": "Du brauchst einen Browser, der lokale HTML-Dateien herunterladen und wieder öffnen kann. Nutze nur die erfundenen Angaben. Eine erwachsene Person kann beim Finden der gespeicherten Datei helfen; die Entscheidungen zu Text und Gestaltung sollen von dir kommen.",
      "introduction": "Die erfundene Lese-AG plant eine digitale Infokarte für Mitschülerinnen und Mitschüler. Nur diese fiktiven Angaben gelten: Titel „Lesepause“; Mittwoch, 14:10–14:30 Uhr; Raum A4; man darf selbst lesen oder einfach zuhören; ein Buch ist nur nötig, wenn man selbst lesen möchte; Teilnahme freiwillig und für diese Übung ohne Anmeldung. In der Werkstatt erstellst du daraus eine eigene HTML-Datei. Lade eine erste Fassung herunter, verbessere sie und öffne die gespeicherte neue Fassung erneut. Keine echten Namen, Fotos oder Termine verwenden und nichts veröffentlichen.",
      "lab": {
        "path": "assets/mbi-lesepause-werkstatt.html",
        "publicUrl": "https://wolvespsd.github.io/lotte-lea-lernatlas/assets/mbi-lesepause-werkstatt.html",
        "title": "Medienwerkstatt",
        "description": "Die Werkstatt öffnet in einem neuen Tab. Dort gestaltest du Text, Reihenfolge und Farbe, prüfst eine Vorschau und lädst deine eigene HTML-Karte nur auf dein Gerät herunter. Kehre für die Antworten hierher zurück. Eingaben werden beim Neuladen zurückgesetzt.",
        "printNote": "Die Werkstatt erzeugt eine lokale HTML-Datei; ein Download allein belegt kein Wiederöffnen oder Überarbeiten. Alle Veranstaltungsangaben sind erfunden. Die Direktadresse funktioniert erst nach Veröffentlichung dieses Pakets."
      },
      "tasks": [
        {
          "id": "mbi-medienkarte-1",
          "kind": "reflection",
          "points": 4,
          "writingLines": 6,
          "prompt": "A. Planen (4 Kriterienpunkte): Für wen ist deine Infokarte? Welche zwei Angaben sollen zuerst auffallen und warum? Entscheide, ob Zeit/Ort oder Einladung zuerst steht, und nenne die Funktion deiner Farbe. Antworte in etwa zwei bis vier Sätzen.",
          "sample": "Meine Karte richtet sich an Mitschülerinnen und Mitschüler am Handy oder Schulrechner. Titel, Zeit und Ort sollen schnell auffallen, damit niemand den Termin suchen muss. Ich wähle „Zeit und Ort zuerst“; die Farbe ordnet nur, denn alle wichtigen Angaben stehen auch als Wörter da.",
          "criteria": [
            "2 Punkte: Zielgruppe und zwei zuerst benötigte Informationen begründet (je 1).",
            "1 Punkt: eigene Reihenfolge oder Struktur mit nachvollziehbarem Grund.",
            "1 Punkt: Farbe/Gestaltung als Unterstützung erklärt, nicht als einzige Information."
          ]
        },
        {
          "id": "mbi-medienkarte-2",
          "kind": "reflection",
          "points": 9,
          "writingLines": 11,
          "inputRows": 9,
          "prompt": "B. Eigene Datei (9 Kriterienpunkte): Erstelle in der Medienwerkstatt deine Karte, lade eine erste HTML-Fassung herunter und öffne die gespeicherte Datei erneut. Notiere Dateiname und angezeigte Bytezahl. Welche sechs fiktiven Angaben stehen darin? Was hast du bei der wieder geöffneten Datei tatsächlich gesehen? Wenn Download oder Wiederöffnen nicht gelang, sage es offen.",
          "sample": "Beispiel einer tatsächlich geprüften Datei: lesepause-fassung-1.html, die Bytezahl wird von der Werkstatt für genau meine Fassung angezeigt. Der Text enthält Lesepause, Mittwoch 14:10–14:30 Uhr, Raum A4, Lesen oder Zuhören, ein Buch nur bei eigenem Lesen und freiwillige Teilnahme ohne Anmeldung. Nach dem erneuten Öffnen sehe ich dieselben Angaben als Text. Die genaue Bytezahl und die beobachtete Handlung müssen am eigenen Produkt ermittelt werden; aus einem Muster kann man sie nicht übernehmen.",
          "criteria": [
            "2 Punkte: eigene HTML-Datei wirklich heruntergeladen und gespeicherte Datei erneut geöffnet; ohne Beobachtung oder nachvollziehbare Beschreibung „nicht erhoben“ statt automatisch 0.",
            "4 Punkte: Titel und sechs korrekte Fakten insgesamt: Titel/Zeit/Ort (je 1) sowie Einladung, optionales Buch und freiwillig/keine Anmeldung zusammen (1).",
            "2 Punkte: Fakten bleiben als lesbarer Text in sinnvoller Struktur; bei schmaler Ansicht nicht abgeschnitten.",
            "1 Punkt: eigene Formulierungs- oder Gestaltungsentscheidung erkennbar und keine fremden oder echten Personendaten."
          ]
        },
        {
          "id": "mbi-medienkarte-3",
          "kind": "reflection",
          "points": 5,
          "writingLines": 8,
          "prompt": "C. Prüfen und verbessern (5 Kriterienpunkte): Vergleiche die erste und eine überarbeitete gespeicherte Fassung. Nenne eine konkrete Änderung und ihren Nutzen. Was siehst du bei schmalem und breitem Fenster? Bleiben Zeit und Ort auch ohne Farbe lesbar? Warum kann reiner Bildtext beim Vergrössern oder Vorlesen schwieriger sein?",
          "sample": "In der ersten Fassung stand die Einladung vor Zeit und Ort; in der zweiten wähle ich Zeit und Ort zuerst, damit der Termin schneller zu finden ist. Beide Fenster zeigen die Angaben als Text ohne Überlagerung. Die Farbe hilft nur bei der Ordnung; „Mittwoch“ und „Raum A4“ stehen ausgeschrieben. Bildtext kann beim Zoomen unscharf sein oder ohne Textalternative nicht sinnvoll vorgelesen werden. Eine echte Revision braucht zwei eigene Fassungen; diese Beschreibung ist nur ein Muster.",
          "criteria": [
            "2 Punkte: schmale und breite Sicht tatsächlich geprüft und je ein konkreter Befund oder eine klare Grenze genannt.",
            "1 Punkt: Zeit/Ort und weitere Fakten ohne Farbsignal lesbar erkannt oder korrigiert.",
            "1 Punkt: konkrete Verbesserung gegenüber erster Fassung mit Nutzen und zwei Fassungen nachvollziehbar.",
            "1 Punkt: Grenze von reinem Bildtext beim Vergrössern oder Vorlesen richtig erklärt; keine pauschale Behauptung, alle PDFs seien unzugänglich."
          ]
        },
        {
          "id": "mbi-medienkarte-4",
          "kind": "reflection",
          "points": 6,
          "writingLines": 8,
          "prompt": "D. Datei und Technik (6 Kriterienpunkte): Was ist das Format deiner Datei und wofür steht UTF-8 im Kopf? Notiere die Bytezahl deiner neuen Fassung. Wozu könnte ZIP dienen und warum ist es nicht direkt die Lesefassung? Braucht diese ruhende Karte Streaming? Begründe eine Grenze, wenn man sie nur als Bilddatei speichern würde.",
          "sample": "Meine Datei ist HTML; die tatsächliche Bytezahl lese ich in der Werkstatt für meine zweite Fassung ab. meta charset=\"utf-8\" benennt die Zeichencodierung für Umlaute. ZIP kann Dateien komprimiert verpacken, muss zum direkten Lesen meist erst entpackt werden. Eine ruhende Textkarte braucht kein Audio- oder Videostreaming. Ein Bild könnte lesbaren, vergrösserbaren Text und Struktur verlieren; die genaue Wirkung hängt vom Format und der Umsetzung ab.",
          "criteria": [
            "2 Punkte: HTML als eigenes Format und UTF-8 als Zeichencodierung richtig erklärt (je 1).",
            "1 Punkt: Bytezahl der eigenen neuen Datei tatsächlich ermittelt, nicht aus der Musterkarte übernommen.",
            "1 Punkt: ZIP-Zweck und Grenze als direkte Lesefassung erklärt; ein ZIP-Export ist nicht Pflicht.",
            "1 Punkt: Streaming für eine ruhende Textkarte zutreffend abgelehnt und begründet.",
            "1 Punkt: konkrete Grenze eines blossen Bildformats oder eine gleichwertige Formatabwägung."
          ]
        },
        {
          "id": "mbi-medienkarte-5",
          "kind": "reflection",
          "points": 6,
          "writingLines": 9,
          "prompt": "E. Reichweite und Verantwortung (6 Kriterienpunkte): Vergleiche nur gedanklich lokal zeigen, einen schulisch vorgesehenen internen Bereich und öffentliches Web. Nenne je Reichweite, Nutzen und eine Prüfung vor echter Weitergabe. Welcher Weg wäre für diese fiktive Zielgruppe passend? Prüfe an deiner Karte fremdes Material und echte Daten. Welche Wirkung hat der Satz über ein optionales Buch? Nichts hochladen.",
          "sample": "Lokal zeigen erreicht wenige und eignet sich zum Prüfen; zuvor die Lesbarkeit kontrollieren. Ein schulisch vorgesehener interner Bereich erreicht die Zielgruppe besser, braucht aber Schulfreigabe sowie Material- und Zugänglichkeitsprüfung. Öffentliches Web wäre für die fiktive interne Einladung unnötig weitreichend und verlangte vor einer realen Freigabe weitere Prüfungen. Meine Karte nutzt nur eigene Formulierungen und erfundene Angaben. Der Hinweis, dass man ohne Buch zuhören darf, schliesst niemanden wegen eines fehlenden Buchs aus.",
          "criteria": [
            "3 Punkte: alle drei gedachten Wege mit Reichweite, Nutzen und mindestens einer passenden Prüfung verglichen (je 1).",
            "1 Punkt: begründete Wahl passend zur fiktiven Zielgruppe, ohne eine echte Veröffentlichung auszuführen.",
            "1 Punkt: eigener/fremder Inhalt und echte Namen, Bilder, Kontakte oder Termine am eigenen Produkt konkret kontrolliert.",
            "1 Punkt: Wirkung des optionalen Buchhinweises auf Personen ohne eigenes Buch nachvollziehbar erklärt."
          ]
        }
      ],
      "releaseEvidence": {
        "validFor": "2027/28",
        "gradeBand": "8",
        "competencyRef": "PDF-S. 2: Inkraftsetzung für Klasse 7 ab 2026/27 und Klasse 8 ab 2027/28. § 2.2.2 auf PDF-S. 24–25 unter Klassenstufe 8: digitale Inhalte planen/erstellen, Formate und technische Aspekte, Zugänglichkeit, Veröffentlichungswege und Wirkung auf Zielgruppen.",
        "checkedAt": "2026-10-21"
      }
    },
    {
      "id": "mbi-simunet-datensparsam",
      "subjectId": "mbi",
      "title": "SimuNet: Daten sparsam auswählen",
      "scope": "Ausblick Klasse 8 · freiwillig. §2.2.3 Social Media trägt ausdrücklich die Zielmarke Klasse 8; dies ist ein fiktiver Entscheidungsfall, kein Nachweis für reale Plattformbedienung oder Lottes aktuellen Unterricht.",
      "levelStatus": "grade8-outlook",
      "released": true,
      "prerequisite": "Die ganze Plattform SimuNet ist erfunden. Es gibt kein Konto, keine echten Profile, keine Anmeldung und keinen Upload. Verwende keinen echten Namen, Ort, Kontakt, Bild oder eigenen Medienbericht. Du entscheidest nur anhand der vorgegebenen Schalter.",
      "introduction": "Eine erfundene Jugendliche möchte in einer erfundenen Hobbygruppe eine selbst gezeichnete Fantasieinsel zeigen und nach Farben fragen. Auf der Zeichnung sind keine Menschen, echten Orte, Schulnamen oder persönlichen Merkmale. Du spielst die Entscheidung nur gedanklich durch; lade nichts hoch und ändere keine wirklichen Geräte- oder Kontoeinstellungen. Du darfst auch entscheiden, gar nichts online zu teilen und direkt um Rückmeldung zu bitten. Beurteile dann trotzdem die sieben hypothetischen Schalter. „Wähle“ heisst passend entscheiden, „begründe“ heisst Wahl und Grund verbinden, „beurteile“ heisst Nutzen, Grenzen und Urteil abwägen. Freie Antworten werden nicht automatisch benotet.",
      "passage": "FIKTIVER EINSTELLUNGSBILDSCHIRM · SimuNet\n1 Anzeigename: voller echter Name ODER erlaubter Fantasiename „Kartenfuchs“. Ein Anzeigename ist für einen Beitrag nötig.\n2 Profilbild: eigenes Gesichtsbild ODER kein Profilbild. Das Feld ist freiwillig.\n3 Ort: Wohnort und genauer Standort ODER leer lassen. Das Feld ist freiwillig.\n4 Kontakte: Geräteadressbuch freigeben ODER nicht freigeben. Die Freigabe ist freiwillig.\n5 Sichtbarkeit: alle Nutzenden ODER nur die fiktive Hobbygruppe. Gruppenmitglieder können den Beitrag sehen und weitergeben; SimuNet verarbeitet ihn weiterhin.\n6 Personalisierte Anzeigen: einschalten ODER ausschalten. Bei „ein“ nutzt SimuNet in dieser Simulation angesehene Themen und Klicks für Werbeprofile. „Aus“ verhindert hier nur diese Anzeigenanpassung; technische Nutzungsdaten können weiter anfallen.\n7 Inhalt: nur Fantasieinsel und Farbfrage ODER zusätzlich persönlicher Alltag und echte Orte. Für das Ziel genügt die Fantasieinsel mit der Frage.\n\nFIKTIVER FEED · Nach drei angesehenen Beiträgen über Zeichenstifte erscheint: „Gesponsert: Wir kennen deinen Geschmack! Schalte Standort, Kontakte und öffentliche Sichtbarkeit ein – dann werden deine Empfehlungen perfekt und alle finden dein Bild.“ Das ist Werbetext im erfundenen Fall und kein belegtes Versprechen einer realen Plattform.",
      "tasks": [
        {
          "id": "mbi-simunet-1",
          "kind": "reflection",
          "points": 7,
          "writingLines": 10,
          "inputRows": 10,
          "prompt": "A. Sieben Entscheidungen (7 Kriterienpunkte): Wähle für jedes nummerierte Feld 1–7 eine Einstellung, die das Ziel mit möglichst wenigen persönlichen Angaben erreicht. Schreibe z. B. „1 …; 2 …“. Wenn du gar nichts online posten möchtest, nenne das als Alternative und gib zusätzlich an, welche sieben SimuNet-Einstellungen du nur hypothetisch wählen würdest. Verwende ausschliesslich die fiktiven Vorgaben.",
          "sample": "Ich könnte die Fantasieinsel lieber direkt zeigen und gar nichts online posten. Falls ich die fiktive Plattform für dieses Ziel dennoch verwenden würde: 1 Kartenfuchs; 2 kein Gesichtsbild; 3 Ort leer; 4 kein Adressbuchzugriff; 5 nur Hobbygruppe; 6 personalisierte Anzeigen aus; 7 nur Fantasieinsel und Farbfrage. Für einen SimuNet-Beitrag sind hier nur Anzeigename und Beitrag nötig.",
          "criteria": [
            "1 Punkt: Fantasiename „Kartenfuchs“ statt echter Name.",
            "1 Punkt: kein Gesichts-Profilbild.",
            "1 Punkt: Ortsfeld leer.",
            "1 Punkt: kein Adressbuchzugriff.",
            "1 Punkt: Sichtbarkeit nur in der fiktiven Hobbygruppe gewählt.",
            "1 Punkt: personalisierte Anzeigen ausgeschaltet.",
            "1 Punkt: Inhalt nur Fantasieinsel und Farbfrage. Eine Offline-Alternative kostet keinen Punkt, wenn die sieben hypothetischen Wahlen ebenso genannt sind. Keine echten Personendaten verlangen."
          ]
        },
        {
          "id": "mbi-simunet-2",
          "kind": "reflection",
          "points": 3,
          "writingLines": 7,
          "inputRows": 7,
          "prompt": "B. Begründung (3 Kriterienpunkte): Welche Angaben braucht die Farbfrage in diesem erfundenen Dienst wirklich? Warum ist „nur Hobbygruppe“ weniger offen als „alle“, aber keine vollständige Geheimhaltung? Warum macht ein Fantasiename allein niemanden sicher anonym? Etwa zwei bis vier Sätze können helfen; die Vollständigkeit zählt, nicht die Satzanzahl.",
          "sample": "Für die Farbfrage reichen die Fantasiezeichnung, eine kurze Frage und der bei SimuNet nötige Anzeigename. Die Hobbygruppe begrenzt die zunächst sichtbare Leserschaft, aber Mitglieder können den Beitrag weitergeben und der Dienst verarbeitet ihn. Ein Fantasiename garantiert keine Anonymität, weil Nutzungsdaten oder andere Angaben eine Zuordnung ermöglichen könnten.",
          "criteria": [
            "1 Punkt: Ziel und wirklich erforderliche Angaben im fiktiven Dienst benannt.",
            "1 Punkt: Gruppensichtbarkeit begrenzt die Sichtbarkeit, garantiert wegen Weitergabe und Dienstverarbeitung aber keine Geheimhaltung.",
            "1 Punkt: Fantasiename allein ist keine Anonymitätsgarantie; mögliche Zuordnung durch andere Daten oder Kontext plausibel erklärt. Sinnvolle Varianten gelten."
          ]
        },
        {
          "id": "mbi-simunet-3",
          "kind": "reflection",
          "points": 5,
          "writingLines": 9,
          "inputRows": 9,
          "prompt": "C. Gesponserte Meldung beurteilen (5 Kriterienpunkte): Welche sichtbaren Nutzungsdaten könnten für ein Werbeprofil verwendet werden? Nenne einen möglichen Vorteil passender Vorschläge und zwei begründete Grenzen oder Risiken des Versprechens. Entscheide, wie du im fiktiven Fall handelst. Etwa drei bis fünf Sätze können helfen; die Vollständigkeit zählt, nicht die Satzanzahl. Behaupte nichts über eine echte Plattform.",
          "sample": "SimuNet könnte die angesehenen Stiftbeiträge und Klicks für ein Werbeprofil verwenden. Passende Hinweise zu Zeichenmaterial könnten nützlich sein. Drei angesehene Beiträge beweisen aber nicht, dass eine Empfehlung perfekt passt. Standort und Kontakte würden mehr Angaben preisgeben, die für die Farbfrage nicht nötig sind; öffentliche Sichtbarkeit erreicht zudem mehr Menschen, ohne zu garantieren, dass alle das Bild finden. Ich lasse die Zusatzfreigaben aus und frage höchstens die Hobbygruppe oder direkt eine Person nach Farben.",
          "criteria": [
            "1 Punkt: angesehene Stiftbeiträge oder Klicks als mögliche Datenspur.",
            "1 Punkt: Bezug zu Werbeprofil oder datenbasiertem Geschäftsmodell.",
            "1 Punkt: möglicher Nutzen passender Hinweise für das Hobby.",
            "1 Punkt: zwei begründete Grenzen/Risiken zusammen, etwa unbelegte „perfekte“ Empfehlung plus unnötige Datenfreigabe oder grössere Öffentlichkeit.",
            "1 Punkt: zum Ziel passende begründete Handlungsoption. Offline-Rückfrage ist zulässig. „Anzeigen aus“ bedeutet nicht automatisch keine Datenverarbeitung."
          ]
        }
      ],
      "releaseEvidence": {
        "validFor": "2027/28",
        "gradeBand": "8",
        "competencyRef": "PDF-S. 2: Einführung für Klasse 7 ab 2026/27 und Klasse 8 ab 2027/28. §2.2.3 PDF-S. 25–26: Social Media, algorithmische Steuerung, Chancen/Risiken, personenbezogene Daten, Tracking/Profilbildung, Werbung und Datensparsamkeit als Ziel unter Klassenstufe 8.",
        "checkedAt": "2026-10-21"
      }
    },
    {
      "id": "mbi-luefterregler-gestalten",
      "subjectId": "mbi",
      "title": "Lüfterregler: Regeln bauen und prüfen",
      "scope": "Ausblick Klasse 8 · freiwillig. §2.2.5 Eingebettete Systeme trägt die Zielmarke Klasse 8. Der Browser zeigt nur eine fiktive Regel-Simulation; echte Hardware, grafische Programmierung in einer allgemeinen Entwicklungsumgebung und Lottes aktueller Unterricht sind nicht belegt.",
      "levelStatus": "grade8-outlook",
      "released": true,
      "prerequisite": "Du brauchst nur die Regeln in diesem Thema. Sensor = Messgerät; Aktor = Teil, das etwas bewegt. Öffne das lokale Lüfterlabor und baue dort deine Regelkarten. Verbinde keine echte Schaltung. Die Temperaturgrenzen sind erfundene Übungswerte.",
      "introduction": "Eine Modell-AG entwirft einen fiktiven Lüfter. Der gedachte Sensor meldet eine Temperatur in °C oder „kein Wert“. Der Lüfter startet AUS. Bei 28 °C oder mehr soll er AN werden; bei 25 °C oder weniger AUS. Dazwischen behält er den Zustand unmittelbar vor diesem Schritt. Nur Werte von −10 bis 50 °C einschliesslich sind gültig. Ein fehlender oder ungültiger Wert führt zu AUS und zur Warnung „Sensorwert ungültig – prüfen“. Diese zwei Schaltgrenzen verhindern dauerndes Hin und Her. Öffne das Lüfterlabor, setze die Regelkarten selbst und starte den Test. Die App kann deine Laborbedienung nicht beobachten oder automatisch benoten; notiere deshalb deine Schritte und Beobachtungen. Keine echte Schaltung bauen.",
      "passage": "TESTFOLGE · 24, 28, 27, 26, 25, 26, kein Wert, 30, 51, 27 °C. Beginne bei AUS. Für jeden Wert gilt der Zustand nach dem vorigen Schritt als „davor“. Die zwei Fehlerwerte sind „kein Wert“ und 51 °C. Ein angezeigter AN-Befehl beweist noch keine wirkliche Lüfterbewegung.",
      "lab": {
        "path": "assets/mbi-luefterregler.html",
        "publicUrl": "https://wolvespsd.github.io/lotte-lea-lernatlas/assets/mbi-luefterregler.html",
        "title": "Lüfterlabor",
        "description": "Baue in einem neuen Tab vier sichtbare Regelkarten und teste die fiktive Zehn-Schritt-Folge. Kehre für deine Erklärungen in den Lernatlas zurück. Das Labor speichert nichts dauerhaft und steuert kein Gerät.",
        "printNote": "Die Regelkarten und der Test laufen nur im Browser. Das Blatt allein belegt keine eigene Bedienung. Keine echte Schaltung anschliessen."
      },
      "tasks": [
        {
          "id": "mbi-luefter-1",
          "kind": "reflection",
          "points": 4,
          "writingLines": 6,
          "inputRows": 6,
          "prompt": "A. System und EVAS (4 Kriterienpunkte): Ordne Sensormesswert, Recheneinheit mit Regel, Lüfterbefehl und gemerkten Zustand den Schritten Eingabe, Verarbeitung, Ausgabe und Speicherung zu. Warum beweist der Befehl AN noch keine echte Lüfterbewegung?",
          "sample": "Eingabe ist der gedachte Temperatursensorwert. Die Recheneinheit verarbeitet ihn mit Gültigkeits- und Schaltregel. Ausgabe sind AN/AUS-Befehl und gegebenenfalls Warnung. Gespeichert wird der Zustand nach dem Schritt für die nächste Entscheidung. Eine wirkliche Bewegung müsste man am echten Aktor getrennt beobachten; ein defekter Lüfter könnte trotz Befehl stehen bleiben.",
          "criteria": [
            "1 Punkt: Sensormesswert als Eingabe.",
            "1 Punkt: Regelprüfung in der gedachten Recheneinheit als Verarbeitung.",
            "1 Punkt: Lüfterbefehl und Fehlerwarnung als Ausgaben.",
            "1 Punkt: Zustand als Speicherung und fehlende Beobachtung echter Aktorwirkung richtig verbunden."
          ]
        },
        {
          "id": "mbi-luefter-2",
          "kind": "reflection",
          "points": 7,
          "writingLines": 10,
          "inputRows": 10,
          "prompt": "B. Regelkarten bauen (7 Kriterienpunkte): Baue im Lüfterlabor alle vier Karten. Teste die Zehn-Schritt-Folge. Notiere deine Werte/Schalter für Fehler, obere Grenze, untere Grenze und Zwischenbereich. Zeichne zusätzlich ein kleines Ablaufbild mit den vier Pfaden Fehler, AN, AUS, Beibehalten oder beschreibe die Verzweigung eindeutig in Worten. Falls das Labor nicht öffnet, plane dieselben Regeln ausdrücklich nur auf Papier; kennzeichne die nicht ausgeführte Bedienung.",
          "sample": "Fehlerkarte: AUS mit sichtbarer Warnung für fehlende/nicht endliche oder ausserhalb −10 bis 50 °C liegende Werte. Obere Karte: ≥28 °C → AN. Untere Karte: ≤25 °C → AUS. Sonst: vorherigen Zustand beibehalten. Reihenfolge: erst Gültigkeit, dann obere, dann untere Grenze, sonst Halten; danach Zustand und Status ausgeben und den Zustand für den nächsten Schritt merken. Im Browser ergaben sich 10/10 passende Schritte; dieses Ergebnis allein wäre durch Bedienprotokoll zu belegen.",
          "criteria": [
            "1 Punkt: Fehlerwert zuerst und sicherer Übungsausgang AUS.",
            "1 Punkt: gültiger Bereich −10 bis 50 °C einschliesslich und sichtbare Warnung.",
            "1 Punkt: obere Regel ≥28 °C führt zu AN.",
            "1 Punkt: untere Regel ≤25 °C führt zu AUS.",
            "1 Punkt: Zwischenbereich übernimmt den Zustand direkt vor diesem Schritt.",
            "1 Punkt: neuen Zustand/Status ausgeben und als nächsten Vorzustand verwenden.",
            "1 Punkt: vier Pfade als kleine Grafik oder eindeutige Verzweigung; tatsächliche Laborbedienung nur bei eigener Testbeobachtung annehmen. Ein Papierplan bleibt als Plan bewertbar, nicht als Bediennachweis."
          ]
        },
        {
          "id": "mbi-luefter-3",
          "kind": "reflection",
          "points": 7,
          "writingLines": 10,
          "inputRows": 10,
          "prompt": "C. Zustandsfolge (7 Kriterienpunkte): Schreibe für die zehn Werte der Testfolge den Lüfterzustand nach jedem Schritt als Folge von AN/AUS auf. Nenne bei welchen Schritten die Warnung erscheint. Erkläre kurz, weshalb 27 °C in Schritt 3 anders ausgeht als 27 °C in Schritt 10.",
          "sample": "1 AUS, 2 AN, 3 AN, 4 AN, 5 AUS, 6 AUS, 7 AUS mit Warnung, 8 AN, 9 AUS mit Warnung, 10 AUS. Bei 27 °C wird der vorherige Zustand behalten: In Schritt 3 ist er nach 28 °C AN, in Schritt 10 nach dem Fehler bei 51 °C AUS.",
          "criteria": [
            "1 Punkt: Schritte 1–2 AUS, AN.",
            "1 Punkt: Schritte 3–4 AN, AN durch Halten.",
            "1 Punkt: Schritte 5–6 AUS, AUS.",
            "1 Punkt: Schritt 7 AUS mit Warnung.",
            "1 Punkt: Schritt 8 AN.",
            "1 Punkt: Schritt 9 AUS mit Warnung.",
            "1 Punkt: Schritt 10 AUS und verschiedene Vorzustände bei 27 °C erklärt. Folgefehler nicht mehrfach abziehen, wenn die Regel verstanden ist."
          ]
        },
        {
          "id": "mbi-luefter-4",
          "kind": "reflection",
          "points": 4,
          "writingLines": 7,
          "inputRows": 7,
          "prompt": "D. Fehler suchen (4 Kriterienpunkte): Eine fremde Kurzregel lautet „ab 28 °C AN, sonst AUS“ und prüft fehlende Werte nicht. Nenne den ersten falschen Schritt der Testfolge mit gültigem Wert, erkläre den Fehler und gib zwei Tests bei 27 °C mit verschiedenem Zustand davor an. Welcher Zusatztest zeigt die fehlende Fehlerbehandlung?",
          "sample": "Schritt 3 ist der erste Fehler: Nach Schritt 2 ist der Zustand AN und muss bei 27 °C gehalten werden. Die Kurzregel setzt ihn fälschlich AUS. Zwei Tests: 27 °C nach AN → AN und 27 °C nach AUS → AUS. Ein fehlender Wert oder 51 °C nach AN muss AUS plus Warnung ergeben; die Kurzregel hat keinen solchen Fehlerpfad.",
          "criteria": [
            "1 Punkt: Schritt 3 als erster gültiger Fehler.",
            "1 Punkt: fehlende Halteregel erklärt.",
            "1 Punkt: beide 27-°C-Tests mit verschiedenen Vorzuständen und Ergebnissen.",
            "1 Punkt: fehlender oder ausserhalb des Bereichs liegender Wert als konkreter Test für AUS plus Warnung."
          ]
        },
        {
          "id": "mbi-luefter-5",
          "kind": "reflection",
          "points": 3,
          "writingLines": 6,
          "inputRows": 6,
          "prompt": "E. Nutzen und Nachweis (3 Kriterienpunkte): Nenne einen möglichen Nutzen und ein konkretes Risiko der gedachten Automatik. Welche drei Dinge müssten bei einem späteren beaufsichtigten echten Aufbau zusammenpassen, bevor ihr behaupten dürft, dass der Lüfter wirklich richtig schaltet? Baue oder verbinde hier nichts.",
          "sample": "Eine Automatik kann nach festgelegten Regeln auf Temperaturänderungen reagieren. Ein fehlerhafter Sensor oder klemmender Lüfter kann trotzdem zu falscher Wirkung führen. Bei einer sicheren beaufsichtigten Prüfung müssten tatsächlicher Messwert oder definierte Testeingabe, angezeigter Programmbefehl und beobachtete Lüfterbewegung zusammenpassen, auch an den Grenzen und bei Fehlerwerten.",
          "criteria": [
            "1 Punkt: plausibler Nutzen fester automatischer Reaktion.",
            "1 Punkt: konkretes Sensor- oder Aktorrisiko.",
            "1 Punkt: reale Eingabe, angezeigter Befehl und beobachtete Wirkung als drei getrennte Nachweise unter Aufsicht."
          ]
        }
      ],
      "releaseEvidence": {
        "validFor": "2027/28",
        "gradeBand": "8",
        "competencyRef": "PDF-S. 2: Klasse 7 ab 2026/27, Klasse 8 ab 2027/28. §2.2.5 PDF-S. 26–27: Sensor/Aktor, EVAS, Problemzerlegung, Algorithmus in Wort und Grafik, Implementierung, systematische Tests und Fehlersuche unter Klassenstufe 8.",
        "checkedAt": "2026-10-21"
      }
    },
    {
      "id": "mbi-buchdaten-labor",
      "subjectId": "mbi",
      "title": "Buchdaten filtern und ändern",
      "scope": "Ausblick Klasse 8 · freiwillig. Die MBI-Erprobungsfassung setzt für Klasse 7 im Schuljahr 2026/27 ein; Datenbanken stehen darin ausdrücklich unter der Zielmarke Klasse 8. Keine belegte aktuelle Schulfolge und keine vollständige Datenbankkompetenz.",
      "levelStatus": "grade8-outlook",
      "released": true,
      "prerequisite": "Für diese Übung öffnest du das fiktive Buchlabor. Es speichert nur erfundene Buch- und Exemplarzeilen im Browser und setzt sie beim Öffnen zurück. Falls dein Browser die lokale Datenbank sperrt, ist der praktische Teil hier nicht durchführbar.",
      "introduction": "Öffne zuerst das Buchlabor über den Link unten. Arbeite dort mit zwei erfundenen Tabellen: „Buch“ beschreibt Titel, „Exemplar“ konkrete Stücke. Eine Buch-ID verbindet beide. Stelle die Filter ein, führe jede Anfrage bewusst aus und beobachte, was eine Änderung an X04 bewirkt. Schreibe deine Beobachtung hier auf oder nutze das Kinderblatt. Die App kann nicht sehen, ob du die Labor-Schritte wirklich ausgeführt hast; die Antworten erhalten keine automatische Note.",
      "lab": {
        "path": "assets/mbi-buchlabor.html",
        "publicUrl": "https://wolvespsd.github.io/lotte-lea-lernatlas/assets/mbi-buchlabor.html",
        "title": "Buchlabor",
        "description": "Das Labor öffnet in einem neuen Tab. Kehre danach für die Antworten in diesen Lernatlas zurück. Alle Daten sind erfunden; beim Öffnen oder Zurücksetzen beginnt das Labor wieder mit dem Startzustand.",
        "printNote": "Alle Daten sind erfunden. Das Labor setzt sich beim Öffnen und mit dem Knopf „Startzustand wiederherstellen“ zurück. Die Direktadresse funktioniert erst nach Veröffentlichung dieses Pakets."
      },
      "tasks": [
        {
          "id": "mbi-buchlabor-1",
          "kind": "reflection",
          "points": 4,
          "writingLines": 6,
          "prompt": "Buch und Exemplar verstehen (4 Kriterienpunkte): Suche Buch-ID B1. Welche Exemplar-IDs gehören dazu? Erkläre, warum B1 und X01 verschiedene Dinge bezeichnen, und nenne das Feld, das die Tabellen verbindet.",
          "sample": "B1 ist das Buch „Sternenkarte“. Seine Exemplare sind X01 und X02. B1 steht für den Titel-Datensatz, X01 für ein konkretes Exemplar. Das Feld „Buch-ID“ in der Exemplar-Tabelle verweist auf die Buch-ID der Buch-Tabelle.",
          "criteria": [
            "2 Punkte: X01 und X02 als beide Exemplare zu B1 gefunden (je 1).",
            "1 Punkt: Titel-Datensatz und konkretes Exemplar unterschieden.",
            "1 Punkt: Buch-ID als Verweisfeld der Exemplar-Tabelle genannt."
          ]
        },
        {
          "id": "mbi-buchlabor-2",
          "kind": "reflection",
          "points": 6,
          "writingLines": 8,
          "prompt": "Drei Bedingungen als eine Anfrage (6 Kriterienpunkte): Stelle Art = Sachbuch, Regal = A und Status = bereit ein und klicke „Anfrage ausführen“. Nenne beide Exemplar-IDs mit Titeln. Warum erscheinen X03 und X02 nicht? Beschreibe, welche Filter du wirklich gesetzt hast.",
          "sample": "Mit Sachbuch, A und bereit erscheinen X01 – Sternenkarte und X04 – Musik im Alltag. X03 steht zwar in Regal A und ist bereit, gehört aber zum Roman B2. X02 gehört zum Sachbuch B1, steht jedoch in Regal B und hat Status ausgeliehen. Alle drei Filter müssen gemeinsam gelten.",
          "criteria": [
            "2 Punkte: drei Bedingungen tatsächlich gesetzt und Anfrage ausgeführt; reine Vermutung ohne Bedienung als schriftliche Vorbereitung markieren.",
            "2 Punkte: X01/Sternenkarte und X04/Musik im Alltag als Treffer (je 1).",
            "2 Punkte: X03 wegen Roman und X02 wegen Regal B/ausgeliehen ausgeschlossen (je 1)."
          ]
        },
        {
          "id": "mbi-buchlabor-3",
          "kind": "reflection",
          "points": 5,
          "writingLines": 8,
          "prompt": "Ändern und neu abfragen (5 Kriterienpunkte): Setze X04 auf ausgeliehen und klicke „X04 ändern“. Ohne die drei Filter zu ändern, führe die Anfrage erneut aus. Was ändert sich in der Exemplar-Tabelle und in der Ergebnisliste? Welche ID bleibt, warum verschwindet X04, und bleibt der Titel „Musik im Alltag“ bestehen?",
          "sample": "Die Exemplar-Zeile X04 zeigt nun ausgeliehen. Nach einer neuen Anfrage bleibt nur X01 – Sternenkarte, weil der Filter weiter Status = bereit verlangt. X04 ist noch ein Exemplar und Buch B3 „Musik im Alltag“ bleibt unverändert in der Buch-Tabelle. Eine alte Trefferliste mit X04 zeigt nur die vorige Anfrage; sie wird erst beim erneuten Ausführen aktualisiert.",
          "criteria": [
            "1 Punkt: geänderte Exemplar-Zeile X04 mit ausgeliehen beobachtet.",
            "1 Punkt: Anfrage nach der Änderung wirklich neu ausgeführt.",
            "1 Punkt: X01 als einziger neuer Treffer.",
            "1 Punkt: X04 fällt wegen Statusfilter bereit heraus.",
            "1 Punkt: Buch B3/Titel bleibt trotz Statusänderung eines Exemplars erhalten."
          ]
        },
        {
          "id": "mbi-buchlabor-4",
          "kind": "reflection",
          "points": 5,
          "writingLines": 7,
          "prompt": "Zurückstellen und einordnen (5 Kriterienpunkte): Klicke „Startzustand wiederherstellen“ und führe dieselbe Sachbuch-A-bereit-Anfrage erneut aus. Was steht jetzt bei X04 und welche zwei Treffer erscheinen? Nenne zwei Dinge, die dieses fiktive Labor über die Daten einer echten Bibliothek nicht beweist.",
          "sample": "Nach Zurücksetzen steht X04 in der Exemplar-Tabelle wieder auf bereit. Die neue Anfrage zeigt wieder X01 – Sternenkarte und X04 – Musik im Alltag. Das Labor beweist beispielsweise nicht, welche Personendaten echte Bibliotheken speichern, wer Zugriff hat oder wie lange Daten behalten werden; es enthält gar keine Ausleihenden.",
          "criteria": [
            "2 Punkte: Startzustand wiederhergestellt und gleiche Anfrage erneut ausgeführt.",
            "1 Punkt: X04 wieder bereit sowie X01 und X04 als Treffer erkannt.",
            "2 Punkte: zwei konkrete Grenzen zu realer Bibliotheks-Datenerfassung oder Zugriff/Aufbewahrung genannt (je 1); keine erfundene allgemeine Rechtsbehauptung."
          ]
        }
      ],
      "releaseEvidence": {
        "validFor": "2027/28",
        "gradeBand": "8",
        "competencyRef": "PDF-S. 2: Erprobungsfassung für Klasse 7 ab 2026/27. § 2.2.6 auf PDF-S. 27–28: Datenbanken, verknüpfte Daten, Abfragen und Ändern unter Klassenstufe 8. Dieses Labor zeigt nur Verknüpfung zweier Tabellen, kombinierten Filter und Statusänderung; der Filter läuft im Browser-JavaScript, nicht als vom Kind erstellte Datenbankabfrage.",
        "checkedAt": "2026-10-21"
      }
    },
    {
      "id": "de-karte-im-regen-vortrag",
      "subjectId": "de",
      "title": "Einen Text verstehen und auswendig vortragen",
      "scope": "Freiwillige Vorbereitung einer ausdrücklich jährlichen Klasse-7-Anforderung. Der eigens verfasste Text ist nicht als Schultext bestätigt; nur ein tatsächlich beobachteter Vortrag kann die mündliche Leistung belegen.",
      "levelStatus": "grade7",
      "released": true,
      "prerequisite": "Du brauchst Zeit zum Üben und eine zuhörende Person. Ein Foto, Audio, Konto oder Upload ist nicht nötig. Die Schule kann einen anderen Text verlangen.",
      "introduction": "Der folgende Text ist für diese Übung geschrieben. Du bearbeitest erst zwei kurze Vorbereitungsaufgaben. Danach übst du das Sprechen mit einer Person. Die App kann nicht hören, ob du den Text auswendig vorgetragen hast; die mündliche Beobachtung bleibt deshalb getrennt und wird hier nicht als erledigt markiert.",
      "passage": "Die Karte im Regen\n\nAm Tor hing eine Karte, vom Regen leicht verwischt.\nEin Pfeil zeigte zum Hügel, ein zweiter an den Bach.\n„Der kurze Weg ist schneller“, sagte jemand hinter mir.\nIch wollte dem Pfeil schon folgen, blieb aber stehen.\n\nAm Bach stand eine Brücke, die gestern noch ganz war.\nJetzt fehlten ihr drei Bretter, und das Wasser stieg darunter.\nDer Bachweg glänzte hell, doch niemand stand am Rand.\nIch las die Karte noch einmal, diesmal langsam.\n\nDer Hügelweg war länger, mit Steinen und mit Wind.\nDort sah ich frische Fußspuren und die Spur eines Rads.\nIch fragte eine Frau, die mit dem Hund zurückkam:\n„Kommt man dort sicher weiter?“ Sie nickte und erklärte den Weg.\n\nSo wählte ich den Umweg und kam vor Dunkelheit ans Ziel.\nDie Karte half beim Fragen, doch sie wusste nichts vom Regen.\nEin Pfeil kann Richtung geben, nicht den Boden unter deinen Schuhen.\nSeitdem prüfe ich den Weg, bevor ich ihm folge.",
      "tasks": [
        {
          "id": "de-karte-regen-1",
          "kind": "reflection",
          "points": 4,
          "writingLines": 7,
          "prompt": "Vorbereitung A (4 Kriterienpunkte): Schreibe zu jeder der vier Strophen einen knappen Handlungsschritt. Was ändert sich zwischen Karte, Brücke, Nachfrage und Entscheidung?",
          "sample": "Strophe 1: Die Karte zeigt zwei Wege; die Person hält vor dem Folgen inne. Strophe 2: Die Brücke am Bach ist beschädigt und das Wasser steigt. Strophe 3: Auf dem längeren Hügelweg fragt die Person eine zurückkehrende Frau nach dem Weiterweg. Strophe 4: Sie wählt den Umweg und erkennt, dass die Karte aktuelle Bedingungen nicht kennt.",
          "criteria": [
            "1 Punkt: Karte und Innehalten in Strophe 1.",
            "1 Punkt: beschädigte Brücke und Gefahr in Strophe 2.",
            "1 Punkt: Nachfrage zum Hügelweg in Strophe 3.",
            "1 Punkt: begründeter Umweg und Grenze der Karte in Strophe 4. Sinngemäße Antworten gelten."
          ]
        },
        {
          "id": "de-karte-regen-2",
          "kind": "reflection",
          "points": 2,
          "writingLines": 5,
          "prompt": "Vorbereitung B (2 Kriterienpunkte): Welches Textdetail spricht gegen den scheinbar kurzen Bachweg, und in welcher Strophe fällt die endgültige Entscheidung? Wähle außerdem eine Stelle für eine Pause oder Betonung und erkläre, was dadurch hörbar wird.",
          "sample": "Die fehlenden drei Bretter und das steigende Wasser in Strophe 2 sprechen gegen den Bachweg. Die endgültige Entscheidung für den Umweg steht in Strophe 4. Eine Pause nach „fehlten ihr drei Bretter“ kann die Gefahr hörbar machen; eine Betonung von „nicht“ in „nicht den Boden“ zeigt die Grenze der Karte. Andere passende Gestaltungen zählen.",
          "criteria": [
            "1 Punkt: Brückenschaden oder steigendes Wasser als Grund gegen den Bachweg und die endgültige Entscheidung in Strophe 4 unterschieden.",
            "1 Punkt: konkrete Pause oder Betonung mit nachvollziehbarer Wirkung statt bloß „laut sprechen“."
          ]
        }
      ],
      "practice": {
        "title": "Praxis: auswendig vortragen",
        "childNote": "Das Üben kannst du selbst steuern. Die eigentliche Leistung entsteht erst beim Vortrag vor einer zuhörenden Person; ein geschriebener Text und Vorlesen mit voller Vorlage zählen dafür nicht.",
        "childSteps": [
          "Gliedere den Text in Karte, Brücke, Nachfrage und Entscheidung. Sprich jeden Teil erst mit Vorlage, dann aus dem Gedächtnis.",
          "Verbinde die vier Teile. Eine vereinbarte knappe Gedächtnisstütze ohne vollständige Verse darf bereitliegen.",
          "Trage alle vier Strophen einer anwesenden Person vor, ohne den vollständigen Text abzulesen. Gestalte mindestens zwei sinnvolle Stellen hörbar.",
          "Sage danach mündlich, welche Stelle schwer zu erinnern war und wie du beim nächsten Mal gezielt üben würdest."
        ],
        "adultNote": "Nur nach einem wirklich gehörten Vortrag ausfüllen. Ohne Durchführung „nicht erhoben“ ankreuzen, nie 0/16 aus einer fehlenden Beobachtung ableiten. Vorher vereinbarte Hilfen sachlich notieren; die Rubrik ist formative Übungsrückmeldung, keine Schulnote.",
        "adultCriteria": [
          "Vollständigkeit und Sinnfolge (0–4): 4 = alle vier Strophen, Sinnwechsel erkennbar, höchstens zwei bedeutungsneutrale Wortvarianten; 3 = alle Strophen mit kleinen Auslassungen, Sinnfolge bleibt; 2 = längere Auslassung, Karte → Brücke → Nachfrage → Umweg noch erkennbar; 1 = nur Teile ohne Zusammenhang; 0 = kein zusammenhängender Vortrag.",
          "Gedächtnisleistung (0–4): 4 = ohne vollständige Vorlage und ohne nachgereichte Vershinweise; 3 = ein kurzer nachgereichter Hinweis, danach eigenständig; 2 = mehrere Hinweise, wesentliche Teile selbst erinnert; 1 = größere Passagen abgelesen oder vorgesagt; 0 = überwiegend abgelesen oder fremdgesprochen. Vereinbarte knappe Stichwort- oder behinderungsbedingte Hilfen sachlich gesondert notieren, nicht pauschal abwerten.",
          "Verständliche Artikulation (0–2): 2 = durchgehend verständlich; 1 = einzelne Stellen unklar, Kern verständlich; 0 = Kern auch nach normaler Nachfrage nicht verständlich. Dialekt, Akzent, Nervosität oder vereinbarte Sprechhilfe allein sind keine Fehler.",
          "Tempo und Pausen (0–2): 2 = Handlung gut folgbar und mindestens zwei passende Pausen; 1 = im Wesentlichen folgbar, streckenweise gehetzt oder monoton; 0 = Verlauf kaum folgbar. Persönliche Sprechgeschwindigkeit allein nicht abwerten.",
          "Bedeutungsbezogene Betonung (0–2): 2 = mindestens zwei hörbare passende Akzente; 1 = ein passender Akzent; 0 = keine erkennbare Gestaltung oder sinnverdrehende Akzente. Eine andere plausible Gestaltung gilt ebenso.",
          "Mündliche Reflexion (0–2): je 1 Punkt für eine konkrete schwere Erinnerungs- oder Sprechstelle und einen dazu passenden nächsten Übungsschritt; allgemeines „mehr üben“ allein genügt nicht."
        ]
      },
      "releaseEvidence": {
        "validFor": "2026/27",
        "gradeBand": "7",
        "competencyRef": "PDF-S. 2: Inkraftsetzung 2026/27 für Klasse 7. § 3.2 PDF-S. 47: In Klasse 5 bis 9 jedes Schuljahr mindestens ein Text angemessenen Umfangs auswendig lernen und präsentieren. Text und Umfang dieser Übung sind eigene Entscheidungen; schulische Anerkennung offen.",
        "checkedAt": "2026-10-21"
      }
    },
    {
      "id": "de-heidi-ganzschrift-begleiter",
      "subjectId": "de",
      "title": "Eine ganze Erzählung lesen: Heidi",
      "scope": "Freiwilliger Lese- und Schreibweg zu einem Werk der Kinder- und Jugendliteratur. Der Deutsch-Lehrplan verlangt in Klasse 7 jährlich die Behandlung einer Ganzschrift im Unterricht; ob die Schule Heidi gewählt hat und ob das Werk tatsächlich ganz gelesen und behandelt wurde, ist unbekannt. Die App bescheinigt dies nicht.",
      "levelStatus": "grade7",
      "released": true,
      "prerequisite": "Lies zuerst alle 14 Kapitel von Johanna Spyris Heidis Lehr- und Wanderjahre in der verlinkten Fassung oder einer eigenen vollständigen Ausgabe. Bei einer anderen Ausgabe können Seitenzahlen und Schreibweise abweichen; nenne Kapitel statt nur Seiten. Der Text enthält Sprache und Vorstellungen des 19. Jahrhunderts. Du kannst unbekannte Wörter klären, ohne eine Zusammenfassung an Stelle des Buchs zu lesen.",
      "introduction": "Lies das ganze Buch in Etappen: Kapitel 1–4 (Alm), 5–12 (Weggang und Frankfurt), 13–14 (Rückkehr). Halte nach jeder Etappe eine offene Frage fest und schau später, ob der Text sie beantwortet. Für die drei Aufgaben wählst du eigene Kapitelbelege aus Anfang, Mitte und Schluss. Wenn du erst einen Teil gelesen hast, notiere den Stand und bearbeite nur diesen Teil. Das Lesen einer Zusammenfassung oder ein Hörspiel ersetzt die Ganzlektüre nicht. Die Antworten bleiben in diesem Browser.",
      "reading": {
        "publicUrl": "https://www.gutenberg.org/ebooks/7500",
        "title": "Vollständiges Buch lesen",
        "linkLabel": "Heidi bei Project Gutenberg öffnen",
        "childNote": "Der Link führt zu einer externen kostenlosen Leseansicht mit allen 14 Kapiteln. Er öffnet sich erst, wenn du klickst. Du kannst auch eine eigene vollständige Ausgabe verwenden. Die App übernimmt keinen Romantext und sendet keine Lernantworten an die Buchseite.",
        "printNote": "Zuerst alle 14 Kapitel in einer vollständigen Ausgabe lesen; der Ausdruck enthält den Roman nicht. Eine eigene vollständige Druckausgabe ist ebenso geeignet. Kapitelangaben dienen als Belege.",
        "adultNote": "Diese Aufgaben setzen eine selbst gelesene vollständige Ausgabe voraus. Nur tatsächlich vorliegende Kapitelbelege beurteilen; ohne Ganzlektüre lediglich Teilbearbeitung vermerken. Die freiwillige Heimlektüre belegt nicht, dass die Schule ihre jährliche Ganzschrift im Unterricht behandelt hat. Kein automatischer Leistungsnachweis und keine Schulnote."
      },
      "tasks": [
        {
          "id": "de-heidi-ganzschrift-1",
          "kind": "reflection",
          "points": 9,
          "writingLines": 13,
          "inputRows": 10,
          "prompt": "A. Drei Leseetappen (9 Kriterienpunkte): Nenne aus jeder Etappe 1–4, 5–12 und 13–14 je eine andere konkrete Handlung oder Situation, das passende Kapitel und eine vorsichtige Erklärung: Was zeigt die Stelle über Heidis Beziehung oder Zugehörigkeit? Formuliere drei eigene Kapitelbelege.",
          "sample": "Kapitel 1–4: In Kap. 2 entsteht beim Großvater ein gemeinsamer Alltag; die anfänglichen Warnungen des Dorfes sind nicht sein ganzes Bild. Kapitel 5–12: Heidi wird in Kap. 5 nach Frankfurt gebracht; Klara und ihre Großmama bieten ihr später Beziehungen, dennoch wächst das Heimweh (Kap. 10–12). Kapitel 13–14: Nach der Rückkehr liest Heidi Peters Großmutter vor; der Großvater nähert sich dem Dorf wieder (Kap. 14). Andere zutreffende Situationen sind ebenso möglich.",
          "criteria": [
            "Je Etappe 1 Punkt für eine konkrete zutreffende Situation statt nur Ortsname (3).",
            "Je Etappe 1 Punkt für ein passendes Kapitel oder den passenden Kapiteltitel (3).",
            "Je Etappe 1 Punkt für eine begrenzte Erklärung zu Beziehung oder Zugehörigkeit (3). Andere passende eigene Belege gelten."
          ]
        },
        {
          "id": "de-heidi-ganzschrift-2",
          "kind": "reflection",
          "points": 10,
          "writingLines": 28,
          "inputRows": 18,
          "prompt": "B. Zusammenhang im ganzen Buch (10 Kriterienpunkte): Schreibe eine zusammenhängende Antwort zur Frage: Wie verändern sich Heidis Beziehungen und ihr Gefühl von Zugehörigkeit zwischen Alm, Frankfurt und Rückkehr? Verbinde Weggang und Rückkehr als Ursache und Folge, belege mindestens drei passende Kapitel über alle drei Etappen und beziehe mindestens eine andere Person ein. Trenne eine Textbeobachtung von einer vorsichtigen Deutung. Beende mit einer begrenzten Aussage zum Schluss. Etwa 220–320 Wörter helfen beim Planen, sind aber keine Punkteschwelle.",
          "sample": "Zu Beginn bringt Dete Heidi zum Großvater auf die Alm (Kap. 1). Im Dorf wird er misstrauisch beschrieben; die gemeinsamen Tage zeigen jedoch, dass er mit Heidi einen Alltag aufbaut (Kap. 2). Mit Peter und dessen Großmutter entstehen weitere Beziehungen (Kap. 3–4). Als Dete Heidi nach Frankfurt holt (Kap. 5), findet sie dort nicht nur Ablehnung: Klara wird ihr wichtig und die Großmama hilft ihr beim Lesen (etwa Kap. 10). Trotzdem wächst das Heimweh. Der Arzt rät in Kap. 12 zur Rückkehr; in Kap. 13 geschieht sie. In Kap. 14 liest Heidi Peters Großmutter vor und der Großvater sucht wieder Kontakt zum Dorf. Daraus lässt sich eine Veränderung auf beiden Seiten deuten. Ob danach alle Konflikte dauerhaft gelöst sind, erzählt das Buch nicht. Andere begründete Lesarten zählen.",
          "criteria": [
            "2 Punkte: Alm, Weggang nach Frankfurt und Rückkehr werden mit Ursache und Folge verbunden, nicht nur aufgezählt.",
            "Je 1 Punkt: drei passende Kapitelbelege aus Anfang, Mitte und Schluss (3).",
            "2 Punkte: Veränderungen Heidis und mindestens einer anderen Beziehung werden sachlich erläutert.",
            "1 Punkt: Beobachtung und Deutung oder eine vertretbare Gegenlesart sind unterscheidbar.",
            "1 Punkt: Schluss bleibt beim Belegten und erfindet keine dauerhafte Zukunft.",
            "1 Punkt: Zusammenhängender, verständlicher Text. Länge ist keine feste Punktegrenze; denselben Fehler nicht doppelt abziehen."
          ]
        },
        {
          "id": "de-heidi-ganzschrift-3",
          "kind": "reflection",
          "points": 5,
          "writingLines": 10,
          "inputRows": 8,
          "prompt": "C. Pauschale Lesart prüfen (5 Kriterienpunkte): Jemand sagt: „Frankfurt ist im Buch nur schlecht und die Alm nur gut.“ Nenne eine Stelle mit Kapitel, die diese Aussage teilweise stützt, und eine andere Stelle mit Kapitel, die sie begrenzt. Erkläre beide und formuliere ein ausgewogeneres Urteil. Du musst die religiösen oder erzieherischen Wertungen des alten Textes nicht übernehmen.",
          "sample": "Heidis Heimweh in Frankfurt (Kap. 11–12) stützt ihre schwierige Lage. Klaras Freundschaft oder die Hilfe ihrer Großmama (z. B. Kap. 10) begrenzt aber „nur schlecht“. Auch die frühen Warnungen und Spannungen um den Großvater (Kap. 1/5) verhindern „Alm nur gut“. Ausgewogen: Die Alm wird für Heidi ein wichtiges Zuhause und Frankfurt überfordert sie, doch in Frankfurt gibt es hilfreiche Menschen und auf der Alm Konflikte.",
          "criteria": [
            "1 Punkt: stützender Befund mit passendem Kapitel.",
            "1 Punkt: Erklärung, weshalb er die pauschale Aussage teilweise stützt.",
            "1 Punkt: anderer begrenzender Befund mit passendem Kapitel.",
            "1 Punkt: Erklärung, weshalb dieser Befund die Pauschalisierung begrenzt.",
            "1 Punkt: ausgewogenes Urteil ohne bloßes Gegenteil. Historische Textwertung und eigene Meinung dürfen unterschieden werden."
          ]
        }
      ],
      "releaseEvidence": {
        "validFor": "2026/27",
        "gradeBand": "7",
        "competencyRef": "PDF-S. 2: Klasse 7 ab 2026/27. § 3.2 PDF-S. 47: in Klasse 5 bis 7 jährlich mindestens ein Werk der Kinder- und Jugendliteratur als Ganzschrift im Unterricht behandeln. § 2.2.2 S. 26–27: literarische Texte, Figuren und Deutung bis Ende Klasse 8 erschließen.",
        "checkedAt": "2026-10-21"
      }
    },
    {
      "id": "de-eigene-ganzschrift-arbeitsweg",
      "subjectId": "de",
      "title": "Dein erzählendes Buch ganz lesen und verstehen",
      "scope": "Freiwilliger Arbeitsweg zu einem tatsächlich gewählten erzählenden Kinder- oder Jugendbuch. Die jährliche Klasse-7-Ganzschrift ist eine Unterrichtsanforderung; die App weiss weder, welches Buch die Schule wählt, noch ob es ganz gelesen und im Unterricht behandelt wurde. Für anders aufgebaute Werke braucht es einen anderen Arbeitsweg.",
      "levelStatus": "grade7",
      "released": true,
      "prerequisite": "Du brauchst ein vollständiges Buch und deine Ausgabe zum Nachschlagen. Du kannst mit dem ersten Teil beginnen. Fragen zum ganzen Werk bearbeitest du erst nach der vollständigen Lektüre. Die App kennt dein Buch nicht und kann deine Angaben nicht automatisch prüfen.",
      "introduction": "Nimm ein erzählendes Kinder- oder Jugendbuch zur Hand, das du wirklich liest – falls die Schule eines gewählt hat, am besten dieses. Für eine Gedichtsammlung oder ein anders aufgebautes Werk passt dieser Fragenweg möglicherweise nicht. Notiere Kapitel, Seite oder eine eindeutig auffindbare Szene aus deiner Ausgabe. Eine Seitenzahl ohne beschriebenen Inhalt genügt nicht. Schreibe keine langen Buchstellen ab. Wenn du noch nicht fertig bist, notiere deinen ehrlichen Lesestand und bearbeite nur gelesene Bereiche. Die Heidi-Beispiele in den Prüfhinweisen zeigen die Methode, sind aber keine Lösung für ein anderes Buch. Deine Eingaben bleiben lokal in diesem Browser.",
      "tasks": [
        {
          "id": "de-eigene-ganzschrift-1",
          "kind": "reflection",
          "manualBookReview": true,
          "points": 2,
          "writingLines": 6,
          "inputRows": 5,
          "prompt": "A. Buch und Lesestand (2 Kriterienpunkte): Nenne Titel, Autorin oder Autor und deine Ausgabe so, dass eine erwachsene Person dieselben Stellen finden kann. Schreibe, was du wirklich gelesen hast. Weisst du, ob die Schule genau dieses Buch im Unterricht behandelt? „Weiss ich nicht“ ist erlaubt.",
          "sample": "Johanna Spyri, Heidis Lehr- und Wanderjahre, digitale Ausgabe Project Gutenberg 7500 mit 14 Kapiteln; gelesen: Kapitel 1–14. Ob die Schule gerade dieses Werk behandelt, ist unbekannt. Für dein Buch müssen Titel, Ausgabe und Lesestand anders lauten.",
          "criteria": [
            "1 Punkt: Titel, Autorin/Autor und Ausgabe ermöglichen einen überprüfbaren Textabgleich; eine ungenaue Seitenzahl ohne Ausgabe reicht nicht.",
            "1 Punkt: wirklicher Lesestand klar benannt und schulische Behandlung getrennt als belegt, unbelegt oder unbekannt markiert. „Weiss ich nicht“ ist kein Fehler."
          ]
        },
        {
          "id": "de-eigene-ganzschrift-2",
          "kind": "reflection",
          "manualBookReview": true,
          "points": 9,
          "writingLines": 11,
          "inputRows": 12,
          "prompt": "B. Drei Fundstellen (9 Kriterienpunkte bei vollständiger Lektüre): Wähle eine Leitfrage zu einer Figur, Beziehung oder einem Konflikt. Notiere aus Anfang, Mitte und Schluss je eine andere konkrete Handlung oder Beobachtung, die Fundstelle aus deiner Ausgabe und eine vorsichtige Erklärung. Ohne Kapitel kannst du eine eindeutig benannte Szene verwenden. Noch ungelesene Bereiche markierst du ehrlich als „noch nicht gelesen“ und ergänzt sie später.",
          "sample": "Leitfrage „Wie verändert sich Zugehörigkeit?“ Anfang, Kap. 2: Heidi erlebt mit dem Grossvater einen gemeinsamen Alltag; das begrenzt die Warnungen des Dorfes. Mitte, Kap. 5 und 10–12: In Frankfurt entstehen Beziehungen zu Klara und Grossmama, aber Heidi hat Heimweh. Schluss, Kap. 14: Heidi liest Peters Grossmutter vor; nach der Rückkehr verändern sich Beziehungen erneut. Andere Bücher brauchen eigene überprüfte Stellen.",
          "criteria": [
            "Je 1 Punkt für eine im gewählten Buch zutreffende konkrete Handlung oder Beobachtung aus Anfang, Mitte und Schluss (3).",
            "Je 1 Punkt für eine in derselben Ausgabe auffindbare Kapitel-, Seiten- oder Szenenangabe (3).",
            "Je 1 Punkt für eine durch die jeweilige Stelle gestützte, begrenzte Erklärung zur eigenen Leitfrage (3). Ungelesene Bereiche bleiben nicht erhoben statt als falsche Buchbehauptung zu zählen."
          ]
        },
        {
          "id": "de-eigene-ganzschrift-3",
          "kind": "reflection",
          "manualBookReview": true,
          "points": 8,
          "writingLines": 22,
          "inputRows": 16,
          "prompt": "C. Zusammenhang im ganzen Werk (8 Kriterienpunkte, erst nach vollständiger Lektüre): Erkläre, was sich zwischen Anfang und Schluss verändert oder gleich bleibt. Verknüpfe mindestens drei verschiedene Stellen aus Anfang, Mitte und Schluss durch eine Ursache, Entscheidung oder Beziehung. Beziehe eine weitere Person oder Perspektive ein, unterscheide Textbeobachtung und eigene Deutung und schliesse mit einer begrenzten Aussage. Die Wortzahl allein entscheidet nicht.",
          "sample": "Dete bringt Heidi zum Grossvater (Kap. 1), mit dem sie einen Alltag aufbaut (Kap. 2). Nach dem Weggang nach Frankfurt (Kap. 5) helfen ihr Klara und Grossmama, doch das Heimweh wächst; der Arzt rät zur Rückkehr (Kap. 10–12). Zurück auf der Alm liest Heidi Peters Grossmutter vor, und der Grossvater sucht Dorfkontakt (Kap. 14). Das lässt eine veränderte Zugehörigkeit vermuten. Ob damit jeder spätere Konflikt gelöst ist, sagt der Text nicht. Für ein anderes Buch zählt nur ein am Werk überprüfbarer eigener Zusammenhang.",
          "criteria": [
            "Je 1 Punkt für sachlich passende, auffindbare Fundstellen aus Anfang, Mitte und Schluss (3).",
            "1 Punkt: eine konkrete Veränderung oder begründete Konstanz benannt.",
            "1 Punkt: mindestens zwei Ereignisse oder Beziehungen nachvollziehbar als Ursache, Folge oder Wechselbeziehung verbunden.",
            "1 Punkt: Textbeobachtung und eigene Deutung erkennbar getrennt.",
            "1 Punkt: weitere Person oder Gegenperspektive sachlich einbezogen.",
            "1 Punkt: begrenzter Schluss ohne unbelegte Totalbehauptung. Bei Teillektüre nicht erheben."
          ]
        },
        {
          "id": "de-eigene-ganzschrift-4",
          "kind": "reflection",
          "manualBookReview": true,
          "points": 5,
          "writingLines": 12,
          "inputRows": 10,
          "prompt": "D. Eine Deutung prüfen (5 Kriterienpunkte, erst nach vollständiger Lektüre): Formuliere eine zunächst plausible, aber vielleicht zu allgemeine Aussage über eine Figur oder einen Konflikt. Zeige mit einer Stelle, was sie stützt, und mit einer anderen Stelle, was sie begrenzt. Nenne beide Fundstellen und formuliere ein genaueres Urteil.",
          "sample": "„Frankfurt ist nur schlecht und die Alm nur gut“ wirkt durch Heidis Heimweh in Frankfurt plausibel (Kap. 11–12). Klaras Freundschaft und die Hilfe der Grossmama begrenzen das „nur schlecht“ (etwa Kap. 10). Die frühen Warnungen und Spannungen um den Grossvater (Kap. 1 und 5) begrenzen auch „Alm nur gut“. Die Alm wird für Heidi ein wichtiges Zuhause, aber beide Orte sind keine pauschalen Charakterurteile. Für dein Buch muss die Ausgangsaussage aus deinen eigenen Szenen überprüft werden.",
          "criteria": [
            "1 Punkt: eine am gewählten Werk prüfbare Ausgangsdeutung.",
            "1 Punkt: ein passender stützender Befund.",
            "1 Punkt: ein passender begrenzender Befund aus einer anderen Stelle.",
            "1 Punkt: beide Fundstellen in derselben Ausgabe auffindbar.",
            "1 Punkt: genaueres Urteil aus beiden Befunden; eine andere begründete Lesart zählt. Bei Teillektüre nicht erheben."
          ]
        }
      ],
      "releaseEvidence": {
        "validFor": "2026/27",
        "gradeBand": "7",
        "competencyRef": "PDF-S. 2: Inkraftsetzung für Klasse 7 ab 2026/27. § 3.2 PDF-S. 47: In Klassen 5–7 jährlich mindestens ein Werk der Kinder- und Jugendliteratur als Ganzschrift im Unterricht behandeln. § 2.2.2 S. 26–27: literarische Texte und begründete Deutungen im Zielhorizont Ende Klasse 8.",
        "checkedAt": "2026-10-21"
      }
    },
    {
      "id": "de-lesetreff-planungsgespraech",
      "subjectId": "de",
      "title": "Einen Lesetreff im Gespräch planen",
      "scope": "Freiwillige, gestützte 7/8-Sprechübung. Dialogisches Sprechen steht im gültigen Deutschlehrplan unter der Zielmarke Ende Klasse 8; ob es gerade Lottes Schulstoff ist, bleibt offen. Die App bereitet vor und sichert Sachangaben, sie hört und bewertet kein Gespräch.",
      "levelStatus": "grade78-flex",
      "released": true,
      "prerequisite": "Du brauchst eine zweite Person für Rolle B. Sie liest ihre verdeckte Karte selbst im Erwachsenenbereich; du siehst zuerst nur Karte A. Sprich miteinander statt einen fertigen Dialog abzulesen. Ohne Gespräch bleibt die mündliche Übung „nicht erhoben“.",
      "introduction": "Ihr plant einen erfundenen 30-minütigen Lesetreff in der Mondtal-Bibliothek. Eine zweite Person kennt Angaben, die nicht auf deiner Karte stehen. Erfrage sie, höre zu und reagiere auf einen Einwand. Ein anderer begründeter Plan ist möglich, wenn er zu allen im Gespräch bekannt gewordenen Bedingungen passt. Schreibe keine echten Namen oder Schuldaten hinein.",
      "passage": "DEINE ROLLENKARTE A\nSechs Personen möchten teilnehmen. Du hast sechs selbst geschriebene Empfehlungskarten dabei.\nZur Wahl stehen Dienstag oder Donnerstag, jeweils 15:30–16:00 Uhr. Du selbst kannst an beiden Tagen.\nDu schlägst vor: zehn Minuten still lesen und danach zwanzig Minuten Empfehlungen austauschen. Erkläre, warum dir ein ruhiger Anfang wichtig ist. Die Reihenfolge ist verhandelbar.\nDu weisst noch nicht, wann der Leseraum frei ist, ob ein Aushang fertig ist und was Rolle B am Ablauf wichtig findet.\n\nSatzhilfen: „Ich schlage ... vor, weil ...“ · „Ist der Raum dann frei?“ · „Du meinst also, dass ...?“ · „Wir könnten ...“ · „Wir halten fest: ...“",
      "tasks": [
        {
          "id": "de-lesetreff-dialog-1",
          "kind": "reflection",
          "points": 4,
          "writingLines": 6,
          "inputRows": 5,
          "prompt": "A. Vorbereitung (4 schriftliche Kriterienpunkte): Notiere einen ersten Vorschlag mit einem der beiden Tage, eine echte Frage zu einer unbekannten Angabe, einen Grund für deinen ruhigen Anfang und einen offenen Satz, mit dem du später eine gemeinsame Entscheidung zusammenfassen könntest. Schreibe keinen fertigen Dialog und erfinde Bs Antwort nicht.",
          "sample": "„Ich schlage Dienstag 15:30 Uhr vor.“ / „Ist der Leseraum dann frei?“ / „Wenn ich zuerst ruhig lese, kann ich meine Empfehlung danach besser begründen.“ / „Wir haben uns auf [Tag, Zeit, Ort und Ablauf] geeinigt; offen ist noch [ungeklärter Punkt].“ Die Lücken werden erst nach dem Gespräch gefüllt.",
          "criteria": [
            "1 Punkt: verständlicher Vorschlag mit einem Tag und dem bekannten Zeitfenster.",
            "1 Punkt: echte Rückfrage zu Raum, Aushang oder Bs Sicht; die Antwort ist auf A unbekannt.",
            "1 Punkt: nachvollziehbarer Grund für die gewünschte Lesezeit.",
            "1 Punkt: Zusammenfassungsrahmen mit Platz für die wirkliche Vereinbarung und einen möglichen offenen Punkt. Schriftliche Vorbereitung beweist kein gesprochenes Reagieren."
          ]
        },
        {
          "id": "de-lesetreff-dialog-2",
          "kind": "reflection",
          "adultOnlySolution": true,
          "points": 5,
          "writingLines": 8,
          "inputRows": 7,
          "prompt": "B. Nur nach einem wirklichen Gespräch (5 schriftliche Sachpunkte): Notiere den vereinbarten Tag, die Zeit, den Ort und einen machbaren Ablauf. Passen die Plätze für alle sechs Personen? Schreibe einen Einwand von B und deine Antwort dazu auf. Was ist über den Aushang sicher, und was bleibt offen? Ohne zweite Person und Gespräch lasse dieses Feld leer; rate nicht, was auf Karte B steht.",
          "sample": "Eine mögliche Einigung: Donnerstag 15:30–16:00 Uhr im Leseraum, sechs Plätze für sechs Personen. Zuerst zehn Minuten still lesen, danach zwanzig Minuten Empfehlungen austauschen (10 + 20 = 30). B hatte Sorge, dass zu wenig Austauschzeit bleibt; A begründete die ruhige Anfangszeit und B stimmte zu. Papier und Stifte sind da, ein handschriftlicher Hinweis kann vorbereitet werden; ein gedruckter oder bereits ausgehängter Aushang und eine echte Genehmigung sind nicht belegt. Auch ein vereinbarter 5+25-Minuten-Plan ist möglich.",
          "criteria": [
            "1 Punkt: Donnerstag 15:30–16:00 Uhr als gemeinsam bestätigtes Zeitfenster; ein neuer Termin ausserhalb der Karte wäre erst nach weiterer Bestätigung möglich.",
            "1 Punkt: Leseraum und sechs Plätze für sechs Personen korrekt.",
            "1 Punkt: machbare, von beiden getragene Aufteilung innerhalb von 30 Minuten; 10+20 und 5+25 sind Beispiele, kein Pflichtwortlaut.",
            "1 Punkt: Bs Zeit-Einwand zutreffend erfasst und eine tatsächlich besprochene Antwort oder ein Kompromiss notiert.",
            "1 Punkt: handschriftlichen Hinweis als Möglichkeit und gedruckten/veröffentlichten Aushang beziehungsweise echte Genehmigung als offen unterschieden. Ohne wirkliches Gespräch die Notiz nicht bewerten."
          ]
        }
      ],
      "practice": {
        "title": "Praxis: ein deutsches Planungsgespräch führen",
        "childNote": "Die zweite Person öffnet nur für sich die Erwachsenenkarte B. Sprich mit ihr über den Plan, frage wirklich nach und höre den Einwand an. Ein geschriebenes Drehbuch und die Notiz danach ersetzen das Gespräch nicht. Die App macht keine Aufnahme und vergibt keine mündlichen Punkte.",
        "childSteps": [
          "Gib der zweiten Person Zeit, Karte B allein zu lesen. Schau nur auf Karte A und kurze Stichwörter.",
          "Beginne mit einem Vorschlag und einer echten Frage. Lass B antworten und frage bei Unklarheit nach.",
          "Gib Bs Einwand fair wieder. Begründe deinen Vorschlag oder ändere ihn so, dass die halbe Stunde für beide passt.",
          "Fasse Tag, Uhrzeit, Ort, Ablauf und einen noch offenen Punkt zusammen. Notiere erst danach die Sachangaben in Aufgabe B."
        ],
        "observationMax": 14,
        "observationLabel": "Gespräch",
        "adultNote": "VERDECKTE PARTNERKARTE B: Der Leseraum ist Dienstag 15:30–16:00 Uhr belegt und Donnerstag 15:30–16:00 Uhr frei; ein Tisch hat sechs Plätze. Der gedruckte Aushang ist nicht fertig, Papier und Stifte sind vorhanden. Du fürchtest, dass zehn Minuten Stille zu wenig Zeit für den Austausch lassen. Antworte auf Fragen. Gib diese drei Informationen spätestens im Gespräch, aber nicht als Monolog vor der ersten Kinderfrage oder dem ersten Vorschlag. Falls A direkt Donnerstag nennt, bestätige den freien Raum und bringe dennoch Aushanggrenze und Zeiteinwand ein. Akzeptiere einen machbaren Kompromiss und lass A am Ende zusammenfassen. Nur das wirklich gehörte Gespräch beurteilen: 2 = selbstständig/deutlich, 1 = teilweise oder nach zusätzlicher neutraler Hilfe, 0 = trotz fairer Gelegenheit nicht gezeigt, — = Gelegenheit nicht gegeben. Vorab erlaubte Satzhilfen deckeln nicht automatisch; bei — keine vergleichbare Gesamtsumme. Ohne Gespräch alles „nicht erhoben“ lassen. Formative Rückmeldung, keine Schulnote und keine Aufnahme nötig.",
        "adultCriteria": [
          "Gespräch eröffnen und verständlichen Vorschlag mit Ziel geben: 0/1/2 oder —; ein tatsächlich gehörter Beleg: ____",
          "Eine unbekannte Angabe wirklich erfragen und die Antwort später aufgreifen: 0/1/2 oder —; Beleg: ____",
          "Neue Termin-/Raumangabe korrekt verarbeiten: Dienstag nach Sperrinfo verwerfen oder direkte Donnerstagverfügbarkeit bestätigen; 0/1/2 oder —; Beleg: ____",
          "Bs Zeit-Einwand sinngemäss und fair wiedergeben: 0/1/2 oder —; Beleg: ____",
          "Auf den Einwand mit begründetem, innerhalb von 30 Minuten möglichem Vorschlag reagieren: 0/1/2 oder —; Beleg: ____",
          "B ausreden lassen, anknüpfen und verständlich sprechen; Missverständnisse bei Bedarf reparieren: 0/1/2 oder —; Beleg: ____",
          "Tag, Zeit, Ort und Kernablauf begrenzt zusammenfassen, ohne offenen Aushang als Tatsache auszugeben: 2 = alle Angaben stimmig; 1 = zwei Terminangaben und Ablauf richtig oder alle drei Terminangaben richtig ohne Ablauf oder Aushanggrenze erst nach neutralem Hinweis geklärt; 0 = keine tragfähige Einigung trotz Gelegenheit; — = keine Schlussgelegenheit. Beleg: ____"
        ]
      },
      "releaseEvidence": {
        "validFor": "2026/27",
        "gradeBand": "7/8",
        "competencyRef": "PDF-S. 2: Inkraftsetzung für Klasse 7 ab 2026/27. § 2.2.3 PDF-S. 28: dialogisch sprechen, zuhören, anknüpfen und sachlich auf Gegenpositionen reagieren, Ziel Ende Klasse 8. § 3.3 PDF-S. 48–49: Planungsgespräche als Beispiel in der 7/8-Spalte.",
        "checkedAt": "2026-10-21"
      }
    },
    {
      "id": "de-bibliotheksregal-erklaeren",
      "subjectId": "de",
      "title": "Ein Bücherregal verständlich erklären",
      "scope": "Freiwillige, gestützte 7/8-Sprechübung im gültigen Deutschlehrplan. Zusammenhängendes Erklären steht unter der Zielmarke Ende Klasse 8; Lottes aktuelle Unterrichtsfolge ist unbekannt. Der Redeplan ist Vorbereitung und keine beobachtete Sprechleistung.",
      "levelStatus": "grade78-flex",
      "released": true,
      "prerequisite": "Du brauchst eine zuhörende Person. Du darfst die fiktive Regelkarte und höchstens acht Stichwörter nutzen, sollst aber keinen fertigen Absatz ablesen. Die anwesende Person stellt erst nach der Erklärung die feste Rückfrage. Ohne mündliche Durchführung bleibt der Beobachtungsbogen „nicht erhoben“.",
      "introduction": "Eine jüngere Person besucht eine erfundene Bibliothek und fragt: „Wie finde ich die Bücher, ohne nach dem ersten Buchstaben des Titels zu raten?“ Bereite eine verständliche Erklärung vor. Sprich später zu einer wirklich anwesenden Person und antworte auf ihre Rückfrage. Die App kann weder deine Stimme hören noch einen Vortrag als erledigt markieren. Alle Bücher und Regeln sind erfunden.",
      "passage": "REGELKARTE · FIKTIVE EIBENWALD-BIBLIOTHEK\nDie Bücher werden nach dem Nachnamen der Autorin oder des Autors einsortiert. Der Titelanfang entscheidet nicht. Es gibt drei Regalabschnitte: A–F, G–M und N–Z.\nDie Regelkarte sagt nur, wo ein Buch hingehört. Sie sagt nicht, ob es gerade dort steht oder ausgeliehen ist.\n\nBuch 1: „Zugvogel“ · Ada Berg\nBuch 2: „Die Wolkenwiese“ · Miro Kern\nBuch 3: „Atlas der Schatten“ · Nele Winter",
      "tasks": [
        {
          "id": "de-regal-erklaeren-1",
          "kind": "reflection",
          "points": 5,
          "writingLines": 7,
          "inputRows": 6,
          "prompt": "A. Sachkern vor dem Sprechen (5 schriftliche Kriterienpunkte): Ordne jedem der drei Bücher seinen Regalabschnitt zu und nenne jeweils den entscheidenden Nachnamen. Warum führt der Titel „Zugvogel“ nicht zu N–Z? Was kannst du aus der Regelkarte über die heutige Verfügbarkeit nicht wissen?",
          "sample": "„Zugvogel“: Berg → A–F. „Die Wolkenwiese“: Kern → G–M. „Atlas der Schatten“: Winter → N–Z. Bei „Zugvogel“ beginnt der Titel zwar mit Z, sortiert wird aber nach Berg/B. Die Karte sagt nicht, ob das Buch heute im Regal steht oder ausgeliehen ist.",
          "criteria": [
            "Je 1 Punkt für die richtige Zuordnung mit entscheidendem Nachnamen: Berg → A–F, Kern → G–M, Winter → N–Z (3).",
            "1 Punkt: Der Titelanfang Z wird ausdrücklich von der Nachnamenregel Berg/B unterschieden.",
            "1 Punkt: aktuelle Verfügbarkeit oder tatsächlicher heutiger Regalbestand bleibt aus dieser Karte unbekannt. Eine richtige Regalnennung ohne Nachnamen genügt beim jeweiligen Punkt nicht."
          ]
        },
        {
          "id": "de-regal-erklaeren-2",
          "kind": "reflection",
          "points": 3,
          "writingLines": 6,
          "inputRows": 5,
          "prompt": "B. Stichwortkarte (3 schriftliche Kriterienpunkte): Notiere höchstens acht Stichwörter oder kurze Wortgruppen in der Folge Frage/Regel → mindestens zwei richtige Buchbeispiele → Schluss mit der Verfügbarkeitsgrenze. Plane einen kurzen Übergang. Schreibe keinen fertigen Redetext; du darfst bei der Erklärung auf die Karte schauen.",
          "sample": "Frage: Titel oder Autor? · Regel: Nachname · Berg → A–F · Kern → G–M · Winter → N–Z · Titel „Zugvogel“ täuscht · Regalabschnitt laut Regel ja, heutiger Bestand offen. Das sind sieben kurze Einträge; zwei richtig erklärte Beispiele würden für den Sprechauftrag genügen.",
          "criteria": [
            "1 Punkt: Frage und Nachnamenregel als knapper Redeanfang erkennbar.",
            "1 Punkt: mindestens zwei richtige Buch-/Regalbeispiele in nachvollziehbarer Folge; andere Reihenfolge gilt.",
            "1 Punkt: knapper Schluss begrenzt die Verfügbarkeitsaussage. Ein fertiges Skript erfüllt die verlangte Stichwortform nicht automatisch. Diese drei Punkte bewerten nur die schriftliche Karte."
          ]
        }
      ],
      "practice": {
        "title": "Praxis: eine Regel frei erklären",
        "childNote": "Erkläre ungefähr 90–150 Sekunden lang für eine jüngere Person die Nachnamenregel mit mindestens zwei verschiedenen Buchbeispielen. Zeige den möglichen Titelfehler und sage, was die Karte über die heutige Verfügbarkeit nicht weiss. Eine andere verständliche Dauer ist kein automatischer Fehler. Nutze nur Regelkarte und Stichwörter; die feste Rückfrage stellt die zuhörende Person erst danach. Ohne gehörte Erklärung gibt es keine mündliche Wertung.",
        "childSteps": [
          "Beginne bei der Frage der jüngeren Person. Nenne die Nachnamenregel statt nur die richtigen Regale aufzuzählen.",
          "Erkläre mindestens zwei verschiedene Buch-Regal-Zuordnungen mit dem jeweiligen Nachnamen und den Titelfehler bei „Zugvogel“.",
          "Schliesse mit der Grenze: „Gehört zu diesem Abschnitt“ heisst nicht „steht heute dort“. Schau nur kurz auf deine Stichwörter.",
          "Antworte nach der Erklärung mündlich auf die feste Rückfrage der zuhörenden Person. Sage danach eine Stärke und einen konkreten nächsten Übungsschritt; die Selbstreflexion bekommt keine Extra-Punkte."
        ],
        "observationMax": 12,
        "observationLabel": "Erklärung",
        "adultNote": "Nur nach tatsächlich gehörter Erklärung ausfüllen. Stelle danach unverändert die feste Rückfrage: „Warum gehört Zugvogel zu A–F, obwohl der Titel mit Z beginnt? Und kannst du mit dieser Karte wissen, ob es heute im Regal steht?“ Sie zählt nicht zur ungefähren Vortragszeit. Eine normale Wiederholung ist erlaubt und wird als Hilfe notiert. Bewerte Gehörtes, nicht die vorbereiteten Textfelder. Akzent, Dialekt, Nervosität und vereinbarte barrierearme Sprechhilfen sind allein keine Fehler. Falls die Rückfrage nicht gestellt wurde, ihre zwei Punkte als „—“ markieren und keine vergleichbare Gesamtsumme bilden. Ohne Erklärung alles „nicht erhoben“, nie 0/12. Formatives Feedback, keine Schulnote oder Aufnahme.",
        "adultCriteria": [
          "Einstieg und Adressat (0–1): 1 = Frage/Ziel für eine jüngere neue Person verständlich eingeführt; sonst 0 oder — ohne Gelegenheit.",
          "Nachvollziehbare Folge (0–1): 1 = Regel → Beispiele → begrenzter Schluss erkennbar verbunden; sonst 0 oder —.",
          "Sortierregel und Titelfehler (0–2): je 1 für „Nachname statt Titel“ und richtig erklärten Zugvogel-Gegenfall; — wenn nicht beobachtbar.",
          "Beispiele im Vortrag (0–2): je 1 für zwei verschiedene richtig begründete Buch-Regal-Zuordnungen mit Nachnamen; Regal allein reicht nicht; — ohne Gelegenheit.",
          "Wissensgrenze (0–1): 1 = Verfügbarkeit ausdrücklich als aus der Karte unbekannt erklärt; blosses Weglassen genügt nicht; sonst 0 oder —.",
          "Verständlichkeit und Tempo (0–2): 2 = gut hörbar mit sinnvollen Pausen; 1 = einzelne schwierige Stellen, Kern verständlich; 0 = Kern trotz Nachfrage unverständlich; — ohne Durchführung.",
          "Stichwortnutzung (0–1): 1 = eigenständig aus Stichwörtern erklärt statt vollständigen Text abgelesen; kurze Blicke und vereinbarte Sprechhilfen sind erlaubt; sonst 0 oder —.",
          "Feste Rückfrage (0–2): je 1 für Berg/B → A–F trotz Titel-Z und „heutige Verfügbarkeit unbekannt“; verständliche sinngleiche Antwort gilt; — wenn Frage nicht gestellt."
        ]
      },
      "releaseEvidence": {
        "validFor": "2026/27",
        "gradeBand": "7/8",
        "competencyRef": "PDF-S. 2: Inkraftsetzung für Klasse 7 ab 2026/27. § 2.2.3 PDF-S. 28: monologisches Informieren/Erklären, Redeplanung und Feedback, Ziel Ende Klasse 8. § 3.3 PDF-S. 48–49: Erklärungen und Anweisungen als Beispiele der 7/8-Spalte.",
        "checkedAt": "2026-10-21"
      }
    }
  ]
});
