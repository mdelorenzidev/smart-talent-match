# MESH — Smart Talent Match

Progetto per favorire l'incontro tra lavoratori e PMI campane, con trasparenza delle condizioni, valorizzazione delle competenze e tutela del lavoratore.

Il repository contiene la documentazione del progetto e una prima webapp navigabile MESH, con percorsi candidato e azienda e un archivio fittizio persistente nel browser. Gemini, autenticazione e pagamenti reali saranno collegati nelle fasi successive.

## Prova la webapp

```text
node scripts/serve-mesh.mjs
```

Apri `http://127.0.0.1:4173`. Sorgenti in `mesh/`; [organizzazione dell'interfaccia, stato e limiti della demo](MESH_INTERFACCIA.md).

## Documentazione

- [MESH: identità e prima interfaccia](MESH_INTERFACCIA.md)

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

L'integrazione API AI verrà definita successivamente, valutando Gemini Pro e la chiave disponibile all'utente. Nessuna chiave o integrazione attiva è inclusa nel repository.

Anche il piano di sponsorizzazione è al momento pianificato: pagamenti e rinnovi reali non sono ancora attivi.
