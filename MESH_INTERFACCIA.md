# MESH — Prima interfaccia navigabile

23 ottobre 2026.

## Identità e riferimenti

Il nome del prodotto è MESH: una rete diretta tra talento e impresa. Smart Talent Match rimane il riferimento alla challenge originaria.

L'organizzazione riprende i riferimenti Wellfound forniti dall'utente: ingressi distinti per aziende e candidati, barra superiore fissa nella home, due riquadri di ingresso, marchi aziendali in scorrimento continuo, navigazione laterale nelle aree applicative. Il codice, i marchi dimostrativi, i testi e la palette sono originali.

Palette: avorio `#f6f5ed`, petrolio `#183e38`, lime `#d5ed85`, salvia e superfici chiare. Tipografia: Space Grotesk per i titoli, DM Sans per il testo e Instrument Serif per gli accenti corsivi, con caratteri di riserva. Le animazioni rispettano la preferenza di movimento ridotto.

## Organizzazione del candidato

- Home: riepilogo e accesso alle opportunità.
- Jobs: offerte, filtri manuali e assistente conversazionale dimostrativo, salvate e nascoste.
- Profile: esclusivamente Overview, Profile e Resume / CV. Non sono presenti schede separate Preferences, Culture o AI Interview. Aspirazioni, disponibilità e aspettative sono raccolte nel percorso CV, mantenendo il controllo sulla condivisione.
- Applied: candidature, stato e feedback sulla selezione a 10 domande; accesso al rapporto lavorativo simulato e al like.
- Messages: conversazioni collegate alle aziende demo.
- MESH Plus: piano da 20 euro al mese e attivazione/disattivazione sponsorizzata simulata.

## Organizzazione aziendale

Panoramica, Offerte, Talenti, Selezioni, Messaggi e Azienda. Il workspace dimostrativo rappresenta radice studio: permette di pubblicare un'offerta con condizioni e crescita, leggere i profili, aggiornare una selezione, proporre un incontro, comunicare e compilare una valutazione professionale a 5 voci. I profili sponsorizzati sono etichettati in uno spazio distinto.

## Implementazione e dati

La prima versione usa moduli JavaScript nativi e CSS, senza un processo di installazione di dipendenze. L'archivio iniziale è in `mesh/data.js`: sei aziende, otto offerte, quattro profili e una conversazione. Le modifiche sono conservate in `localStorage` di questo browser/origine. Non è un database condiviso tra dispositivi o persone.

La modalità candidato/azienda è una simulazione di ruoli e non implementa autenticazione o isolamento server. Tutti i dati iniziali sono fittizi, incluse retribuzioni, conteggi, organico e apprezzamenti.

La ricerca conversazionale utilizza regole dimostrative dichiarate. Il CV propone una riformulazione locale limitata e una bozza modificabile: Gemini non è collegato e non si tratta di generazione AI reale. L'API sarà introdotta attraverso il server come definito nelle specifiche; nessuna chiave deve essere inserita nel frontend.

Il cuore usa il rapporto demo like/dipendenti e mostra il contesto. Le soglie temporali e l'anonimato di produzione non sono implementati: sei mesi e voti sono simulati esplicitamente. Autenticazione, database condiviso, verifica dell'organico, anonimizzazione, fonti salariali, catalogo formativo e pagamenti reali rimangono nelle fasi successive.

## Avvio locale e pubblicazione

Con Node.js installato, dalla cartella del repository:

```text
node scripts/serve-mesh.mjs
```

Aprire `http://127.0.0.1:4173`. Per preparare i file pubblicabili:

```text
node scripts/prepare-mesh.mjs
```

I sorgenti sono in `mesh/`; `dist/` contiene la copia statica generata ed è esclusa da Git. Il manifest `.openai/hosting.json` collega il progetto alla pubblicazione privata Sites. GitHub conserva sorgenti e documentazione.

## Controlli effettuati

- Sintassi dei moduli e preparazione della copia statica.
- Controllo visivo della home e delle due aree.
- Ricerca demo per design a Salerno e corrispondenza dei filtri.
- Racconto → bozza CV → conferma e salvataggio.
- Aggiornamento della candidatura lato azienda e riscontro lato candidato.
- Conteggio e salvataggio del questionario a 10 domande.
- Invio di un messaggio locale e pubblicazione di una nuova offerta demo.

Le verifiche riguardano il prototipo locale e non attestano sicurezza, privacy o correttezza di un servizio con utenti reali.
