# MESH — Prima interfaccia navigabile

23 ottobre 2026.

## Identità e riferimenti

Il nome del prodotto è MESH: una rete diretta tra talento e impresa. Smart Talent Match rimane il riferimento alla challenge originaria.

L'organizzazione riprende i riferimenti Wellfound forniti dall'utente: ingressi distinti per aziende e candidati, barra superiore fissa nella home, due riquadri di ingresso, marchi aziendali in scorrimento continuo, navigazione laterale nelle aree applicative. Il codice, i testi, le iniziali grafiche e la palette sono originali. I nomi di sei aziende note sono usati in scenari esplicitamente simulati e senza affiliazione.

Palette home e candidati: avorio `#f6f5ed`, petrolio `#183e38`, lime `#d5ed85`, salvia e superfici chiare. Tipografia: Space Grotesk per i titoli, DM Sans per il testo e Instrument Serif per gli accenti corsivi, con caratteri di riserva. Le animazioni rispettano la preferenza di movimento ridotto.

L’area aziende ha un tema dedicato: navy `#162b49`, platino `#f3f5f8`, oro tenue `#e2c994`, fondo bianco e testo scuro. Il tema è circoscritto al workspace aziendale e ai suoi modali.

## Organizzazione del candidato

- Home: riepilogo e accesso alle opportunità.
- Jobs: offerte, filtri manuali e assistente conversazionale dimostrativo, salvate e nascoste.
- Profile: esclusivamente Overview, Profile e Resume / CV. Non sono presenti schede separate Preferences, Culture o AI Interview. Aspirazioni, disponibilità e aspettative sono raccolte nel percorso CV, mantenendo il controllo sulla condivisione.
- Applied: candidature, stato e feedback sulla selezione a 10 domande; accesso al rapporto lavorativo simulato e al like.
- Messages: conversazioni collegate alle aziende demo.
- MESH Plus: piano da 20 euro al mese e attivazione/disattivazione sponsorizzata simulata.

## Organizzazione aziendale

Panoramica, Offerte, Talenti, Selezioni, Messaggi e Azienda. Il workspace dimostrativo usa il nome Accenture, senza affiliazione: permette di pubblicare un'offerta con condizioni e crescita, leggere i profili, aggiornare una selezione, proporre un incontro, comunicare e compilare una valutazione professionale a 5 voci. I profili sponsorizzati sono etichettati in uno spazio distinto.

## Implementazione e dati

Moduli JavaScript nativi e CSS, server Node.js 24 in locale, Worker ESM online. Il seed in `mesh/data.js` inizializza sei aziende con nome reale, otto offerte simulate, quattro profili e una conversazione. SQLite/D1 conserva catalogo e snapshot delle sessioni; il browser mantiene solo una cache di recupero. Dettagli in [Database demo](DATABASE_DEMO.md).

Candidato/azienda sono viste di uno scenario demo, senza autenticazione applicativa. Il server separa gli archivi per sessione anonima tramite cookie casuale. Retribuzioni, ruoli, località degli annunci, conteggi, organico e apprezzamenti sono fittizi; i nomi aziendali sono reali. La distinzione compare nel banner e nelle offerte.

Ricerca conversazionale e bozza CV usano endpoint server che chiamano Gemini quando configurato. Senza chiave utilizzano regole dimostrative dichiarate. Le risposte sono validate, i filtri restano modificabili e il CV richiede conferma. Nessuna chiave nel frontend: vedere [Configurazione Gemini](GEMINI_SETUP.md). Non è ancora stato eseguito un test live con una chiave reale.

Il cuore usa il rapporto demo like/dipendenti e mostra il contesto. Le soglie temporali e l'anonimato di produzione non sono implementati: sei mesi e voti sono simulati esplicitamente. Autenticazione applicativa, condivisione tra account, verifica dell'organico, anonimizzazione, fonti salariali, catalogo formativo e pagamenti reali rimangono nelle fasi successive.

## Avvio locale e pubblicazione

Con Node.js installato, dalla cartella del repository:

```text
node scripts/serve-mesh.mjs
```

Aprire `http://127.0.0.1:4173`. Per preparare i file pubblicabili:

```text
node scripts/prepare-mesh.mjs
```

I sorgenti frontend sono in `mesh/`, il backend in `server/` e il punto d’ingresso ospitato in `worker/`. `dist/` contiene il Worker generato con asset incorporati ed è escluso da Git. Il manifest `.openai/hosting.json` collega il progetto alla pubblicazione privata Sites. GitHub conserva sorgenti e documentazione.

## Controlli effettuati

- Sintassi dei moduli e preparazione/validazione del Worker.
- Dodici test API: SQLite persistente, isolamento sessioni, conflitti, rifiuto richieste malformate, filtri AI, gestione quota e bozza CV.
- Controllo visivo della home e delle due aree.
- Ricerca demo per design a Salerno e corrispondenza dei filtri.
- Racconto → bozza CV → conferma e salvataggio.
- Aggiornamento della candidatura lato azienda e riscontro lato candidato.
- Conteggio e salvataggio del questionario a 10 domande.
- Invio di un messaggio locale e pubblicazione di una nuova offerta demo.

Le verifiche riguardano il prototipo locale e non attestano sicurezza, privacy o correttezza di un servizio con utenti reali.
