# MESH — Smart Talent Match

Progetto per favorire l'incontro tra lavoratori e PMI campane, con trasparenza delle condizioni, valorizzazione delle competenze e tutela del lavoratore.

Il repository contiene la documentazione del progetto e una prima webapp navigabile MESH, con percorsi candidato e azienda, database demo persistente SQLite/D1 e collegamento server a Gemini predisposto. Autenticazione e pagamenti applicativi restano simulati; Gemini si attiva configurando la propria chiave.

## Prova la webapp

```text
node scripts/serve-mesh.mjs
```

Richiede Node.js 24. Apri `http://127.0.0.1:4173` senza registrazione. Il database viene creato automaticamente in `.mesh-data/`. Sorgenti in `mesh/`; [organizzazione dell'interfaccia, stato e limiti della demo](MESH_INTERFACCIA.md).

## Documentazione

- [MESH: identità e interfaccia](MESH_INTERFACCIA.md)
- [Database demo, struttura e sessioni](DATABASE_DEMO.md)
- [Configurazione Gemini: chiave, modello e test](GEMINI_SETUP.md)

- [Guida alla documentazione e stato delle decisioni](README_PROGETTO.md)
- [Specifica del prodotto](SPECIFICA_PRODOTTO.md)
- [Questionari, valutazioni e cuore aziendale](QUESTIONARI_E_RATING.md)
- [Chatbot e ricerca conversazionale AI](RICERCA_CONVERSAZIONALE_AI.md)
- [Piano utente da 20 euro al mese e sponsorizzazione](PIANO_UTENTE_E_SPONSORIZZAZIONE.md)
- [Modello dei dati e flussi](MODELLO_DATI_E_FLUSSI.md)
- [Pipeline di realizzazione](PIPELINE_REALIZZAZIONE.md)
- [Decisioni e fonti](DECISIONI_E_FONTI.md)
- [Appunti iniziali e storico dell'idea](APPUNTI_PROGETTO.md)

## Principi

- Condizioni economiche, organizzazione del lavoro e prospettive di crescita comprensibili.
- CV costruito con assistenza AI e confermato dalla persona.
- Ricerca reciproca tra candidati e aziende secondo competenze e condizioni.
- Chatbot informale che formula la richiesta e applica filtri visibili e modificabili.
- Feedback sulla selezione distinto dagli apprezzamenti anonimi dopo l'inserimento.
- Moduli compatti: 10 domande sulla selezione e 5 voci nella valutazione professionale.
- Piano facoltativo candidato da 20 euro al mese per maggiore visibilità sponsorizzata presso le aziende, distinta da competenze e rating.
- Raccomandazioni comprensibili e nessuna esclusione automatica decisa dall'AI.

Le proposte ancora da confermare sono indicate nei documenti; non sono presentate come decisioni definitive.

Il collegamento REST Gemini è implementato per ricerca e CV; senza chiave funziona come assistente demo. La configurazione è descritta in `GEMINI_SETUP.md`. Nessuna chiave è inclusa nel repository e non è stata effettuata una prova live con Google.

Anche il piano di sponsorizzazione è al momento pianificato: pagamenti e rinnovi reali non sono ancora attivi.
