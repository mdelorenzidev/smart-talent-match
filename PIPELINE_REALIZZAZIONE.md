# Pipeline completa di realizzazione

Versione 1.1 — 23 ottobre 2026. Include questionari compatti e ricerca conversazionale AI.

## 1. Percorso complessivo

Definizione dei requisiti → regole e visibilità → modello dei dati → percorsi delle due interfacce → design → fondazioni applicative → CV e offerte → ricerca conversazionale, filtri e selezione → salari e formazione → feedback compatti e cuore → verifica del percorso completo → demo/pitch → preparazione del rilascio reale.

Si può costruire una demo completa senza fingere che fonti, verifiche o anonimato di produzione siano già risolti. Le funzioni richieste restano tutte nella pipeline; le dipendenze determinano l'ordine.

## 2. Fasi e risultati verificabili

| Fase | Attività | Risultato concreto | Criterio di completamento |
|---|---|---|---|
| 0. Baseline | Consolidare ultima descrizione, brief e punti aperti | Specifica, domande, modello dati, registro decisioni e matrice requisiti | Ogni sfumatura richiesta ha un requisito e una sede nella documentazione |
| 1. Regole del prodotto | Definire tempi, visibilità, organico, rapporto, crescita, formule e limiti AI | Decisioni esplicite e ipotesi dichiarate per la demo | Nessuna regola controversa viene implementata come approvata senza tracciarla |
| 2. Casi dimostrativi | Preparare aziende, offerte, racconti, rapporti e fonti sintetiche/curate | Dataset dimostrativo con casi ordinari e difficili | Tutte le funzioni possono essere mostrate senza dati personali reali |
| 3. Flussi e contenuti | Disegnare sequenze candidato/azienda, navigazione e stati | Mappa schermate, testi, percorsi e permessi | Si percorre da racconto e offerta fino a ingresso e feedback |
| 4. Design | Definire layout, componenti e comportamento accessibile | Prototipo navigabile delle due interfacce | Condizioni, crescita, evidenze e limiti delle stime sono leggibili anche da mobile |
| 5. Fondazioni tecniche | Scegliere stack, autenticazione, dati, ruoli, versioni e autorizzazioni; definire successivamente l'integrazione API AI valutando Gemini Pro | Struttura applicativa con isolamento delle due parti e ambiente demo; configurazione AI server riservata | Nessuna azienda vede dati di altre aziende; la persona controlla il proprio profilo; nessuna chiave nel repository o nel browser |
| 6. CV AI | Implementare racconto, chiarimenti, estrazione, revisione, evidenze ed export | CV completo approvato dalla persona | L'AI non inventa esperienze; le bozze non vengono condivise senza approvazione |
| 7. Offerta e crescita | Implementare profilo azienda, organico, offerta guidata e tappe future | Offerta trasparente e versionata | Sono distinguibili condizioni attuali, opportunità future e loro condizioni |
| 8. Ricerca e selezione | Implementare chatbot informale, richiesta strutturata, filtri reciproci e manuali, spiegazioni, candidature, messaggi, meeting ed esiti | Ricerca conversazionale e incontro gestiti dentro l'applicazione | Filtri coerenti con la richiesta, modificabili e sincronizzati; le due parti vedono cronologia e condizioni della versione corretta |
| 9. Salari, gap e formazione | Integrare fonti curate, confronto competenze e catalogo | Benchmark orientativo e percorso di sviluppo | Nessun salario/corso inventato; dati insufficienti e gap restano distinti |
| 10. Rapporto e feedback | Confermare ingresso, gestire scadenze, questionario di selezione a 10 domande e valutazione professionale a 5 voci | Tre strumenti separati con permessi e trigger corretti | Moduli compatti senza domande obbligatorie aggiuntive; tempi corretti e nessun dato individuale dei like esposto |
| 11. Cuore | Calcolare aggregati coerenti, stati di copertura e visualizzazione | Cuore interattivo con spiegazione | Organico/like hanno perimetro coerente; dati assenti non diventano giudizio negativo |
| 12. Verifica integrata | Controllare funzioni, accessi, AI, date, formule e accessibilità | Demo affidabile con problemi significativi risolti | Percorsi e casi limite documentati superano le verifiche pertinenti |
| 13. Pitch | Preparare una storia dimostrativa di almeno cinque minuti | Pitch con problema, destinatari, soluzione, demo, benefici e sviluppi | Ogni beneficio presentato è mostrato o dichiarato come ipotesi da validare |
| 14. Rilascio reale | Risolvere punti aperti e integrare verifiche/fonti reali | Versione pronta per pubblicazione autorizzata | Privacy, autorizzazioni, moderazione, fonti, affidabilità e adempimenti pertinenti verificati |

Le fasi 0–2 precedono la progettazione dettagliata. La fase 5 precede la raccolta di dati reali. Le funzioni dei feedback dipendono dagli stati della candidatura e del rapporto; il cuore dipende anche dalla verifica dell'organico e dalla politica di anonimato.

L'uso della chiave API è rinviato come richiesto. Nella fase tecnica dedicata si verificheranno modello Gemini Pro disponibile all'account, quote, condizioni di gratuità/costi, dati inviati e gestione degli errori. Questa revisione documentale non configura credenziali né effettua chiamate AI; il prototipo può dichiarare una simulazione prima dell'integrazione.

## 3. Contenuto minimo del prototipo completo

### Interfaccia candidato

1. Racconto di partenza e domande AI.
2. CV modificabile con conferma e provenienza delle capacità.
3. Preferenze e ricerca offerte tramite chatbot informale e filtri manuali sincronizzati.
4. Dettaglio con condizioni, retribuzione, crescita, benchmark e profilo aziendale.
5. Gap per competenza e risorse formative.
6. Candidatura, messaggi, colloqui e stato.
7. Questionario sulla selezione con 10 domande, incluso spazio libero nella domanda sui miglioramenti.
8. Rapporto confermato, confronto con le condizioni salvate e apprezzamento dopo sei mesi.
9. Valutazione professionale ricevuta su 5 voci e possibilità di replica.

### Interfaccia azienda

1. Profilo, referenti e numero di dipendenti con stato della verifica.
2. Creazione guidata dell'offerta e delle tappe di crescita.
3. Ricerca dei candidati autorizzati e lettura di CV/evidenze.
4. Gestione candidature, messaggi, meeting, proposte ed esiti.
5. Ingresso e rapporto lavorativo.
6. Risultati di selezione e miglioramenti.
7. Cuore aggregato e relativa metodologia.
8. Valutazione del dipendente su 5 voci nelle quattro aree e formazione pertinente.

Per mantenere la demo gestibile si parte da pochi ruoli, senza eliminare moduli dal percorso. Login, invii, verifica dei rapporti e fonti possono essere simulati quando dichiarato e isolato; il comportamento centrale deve essere dimostrabile. La tecnologia AI usata in demo, se simulata, è etichettata; non si presenta un testo statico come risposta generata realmente.

## 4. Scenari da includere nel dataset

| Scenario | Funzione dimostrata |
|---|---|
| Persona con racconto informale di lavoro ed esperienza di vita | L'AI struttura il CV e chiede conferme senza inventare titoli |
| Persona che descrive informalmente azienda e lavoro desiderati | Il chatbot formula la richiesta e applica filtri visibili sul catalogo |
| Ricerca con preferenze, alternative o salario ambiguo | Distinzione fra vincoli e preferenze, operatori corretti e chiarimenti mirati |
| Ricerca senza risultati o con servizio AI indisponibile | Nessun vincolo allentato di nascosto; filtri manuali e ultima ricerca valida disponibili |
| Persona con formazione e competenze documentate | L'impresa legge evidenze pertinenti e livelli |
| Persona con competenze trasferibili | Il confronto evidenzia capacità e aspetti da approfondire |
| Persona con capacità adeguate ma orari incompatibili | La tutela delle condizioni rimane visibile |
| Offerta con percorso di crescita | Ruoli futuri, fasce economiche, benefit e condizioni sono confrontabili |
| Offerta senza promozioni definite | La trasparenza non forza promesse inventate |
| Benchmark locale insufficiente | Il sistema dichiara limiti o indisponibilità |
| Candidatura senza risposta o ritirata | Feedback disponibile secondo la politica scelta, senza esito inventato |
| Assunzione confermata e successiva modifica dell'offerta pubblica | Le condizioni accettate rimangono disponibili |
| Rapporto a 5 mesi e 29 giorni, al compimento dei 6 mesi, e concluso prima | Trigger temporali e casi brevi corretti |
| Azienda con 20 dipendenti, 12 eleggibili noti e 8 like | Formula del cuore e distinzione dalla soddisfazione |
| Microimpresa con contributo identificabile | Risultato trattenuto o aggregato secondo la politica scelta |
| Organico sconosciuto, zero, obsoleto o inferiore ai like | Stato non valutabile, errore esplicito e nessun numero ingannevole |
| Dipendente senza occasione di apprendere un nuovo strumento | Adattabilità non osservabile, nessun voto negativo automatico |

I numeri degli scenari sono sintetici; non sono statistiche sul mercato o recensioni reali.

## 5. Verifiche necessarie durante l'implementazione

### Flussi e accessi

- Una candidatura collega persona, CV e offerta nelle versioni effettivamente condivise.
- Due referenti della stessa azienda hanno solo i permessi concessi; un referente esterno non legge messaggi o CV riservati.
- La bozza del racconto e le preferenze riservate non compaiono automaticamente nel profilo aziendale.
- Il numero pubblico dei candidati, se mostrato, conta persone uniche e indica periodo e stato dell'offerta.

### CV e AI

- Racconti ambigui producono domande e non informazioni inventate.
- Informazioni private non necessarie non vengono riportate automaticamente nel CV.
- Documenti e offerte contenenti istruzioni malevole non modificano regole o autorizzazioni.
- Indisponibilità del servizio AI lascia modificabili contenuti e bozze, con errore comprensibile.
- Un requisito non documentato resta distinto da una competenza sicuramente mancante.

### Ricerca conversazionale

- La richiesta informale produce criteri ammessi coerenti con il testo, con distinzione tra vincoli e preferenze.
- Le alternative AND/OR e le unità economiche sono rispettate; le ambiguità significative producono chiarimenti.
- Chat e filtri manuali rimangono sincronizzati; il modello non esegue query arbitrarie.
- Nessun risultato o dato mancante porta a inventare offerte, condizioni o corrispondenze.
- L'assistente non allenta vincoli essenziali autonomamente e non modifica CV o preferenze salvate senza scelta della persona.
- In caso di indisponibilità AI resta disponibile la ricerca manuale; nessuna candidatura o comunicazione aziendale parte dalla sola ricerca.

### Salario, crescita e formazione

- Le unità economiche sono confrontabili: lordo/netto, ore e mensilità non vengono mescolati.
- Il benchmark mostra periodo e fonte; la mancanza di dati non produce una cifra inventata.
- Promozioni condizionate non sono descritte come certe.
- Un materiale formativo non pertinente, scaduto o inesistente non viene suggerito come disponibile.

### Feedback e tempo

- Scadenze in mesi di calendario, fine mese, anno bisestile e date Europe/Rome.
- I sei mesi del rapporto partono dall'ingresso, non dalla candidatura.
- Solleciti ripetuti e riaperture non duplicano risposte o like.
- Le domande non applicabili non abbassano medie e non obbligano risposte inventate.
- Il questionario di selezione contiene esattamente 10 domande al massimo, con contesto precompilato e spazio libero integrato; la valutazione professionale ha 5 voci su 4 aree.
- La versione dei questionari impedisce di fondere automaticamente aggregati delle vecchie domande con quelle nuove.
- L'azienda non riceve identità o azioni individuali dei like nemmeno attraverso API, esportazioni o variazioni in tempo reale.
- La persona può leggere e contestualizzare la propria valutazione professionale secondo i permessi definiti.

### Cuore e dati

- Numeratore e denominatore coerenti, unicità per persona/azienda e aggiornamento controllato dell'organico.
- Azienda nuova, pochi dati e risultato trattenuto hanno stati distinti dal cuore a zero apprezzamenti.
- Ritiro del like, uscita di un dipendente e aggiornamento dell'organico rispettano la politica di aggregazione.
- Il dettaglio del cuore non rivela indirettamente ciò che il componente principale nasconde.

### Esperienza d'uso

- Entrambe le interfacce funzionano da mobile e da tastiera.
- Condizioni, crescita e limiti delle stime restano leggibili senza dipendere da colori o animazioni.
- Campi necessari, facoltativi, errori e contenuti simulati sono riconoscibili.

Le verifiche si traducono in test proporzionati all'implementazione: automatici sulle formule, autorizzazioni e transizioni critiche; prove del percorso e controllo visivo sulle interfacce. Non si considera il prodotto verificato perché le schermate appaiono corrette.

## 6. Misure di efficacia da progettare

Non sono risultati già ottenuti:

- completezza delle condizioni e dei percorsi di crescita dichiarati;
- percentuale di CV confermati e capacità con evidenze leggibili;
- candidature considerate pertinenti da entrambe le parti;
- tempi e chiarezza della comunicazione;
- ragioni dichiarate di rinuncia, raccolte in modo proporzionato;
- comprensione del benchmark e dei suoi limiti;
- coerenza dei filtri formulati dal chatbot e facilità di correggere la ricerca;
- utilizzo di risorse formative pertinenti e successiva conferma di competenze;
- copertura dei feedback e del cuore, senza trasformare mancata partecipazione in insoddisfazione;
- capacità del lavoratore di riconoscere differenze tra promesse e condizioni successive.

Il cuore a like unico non misura separatamente tutti gli aspetti del rispetto delle promesse. La demo deve presentare questa limitazione, senza attribuirgli una diagnosi che non raccoglie.

## 7. Matrice di copertura dei requisiti

| Requisiti | Documento di dettaglio | Fasi | Evidenza di completamento futura |
|---|---|---|---|
| R01 | Specifica §11; modello §4 | 3–5 | Due percorsi distinti e permessi corretti |
| R02 | Specifica §3; modello §1–3 | 5, 7–8 | Offerta, candidatura e rapporto collegati |
| R03 | Specifica §6.2 | 7–8 | Condizioni leggibili e versionate |
| R04–R05 | Specifica §5; modello §5 | 6 | Racconto → chiarimenti → CV approvato |
| R06 | Specifica §6.3 | 7 | Tappe, cifre, benefit e condizioni |
| R07 | Specifica §7 | 8 | Filtri su entrambi i lati e spiegazioni |
| R08–R09 | Questionari §3 | 10 | 10 domande complessive, contesto precompilato e spazio libero integrato in S10 |
| R10 | Questionari §2 | 1, 10 | Trigger e calendario corretti, scelta temporale tracciata |
| R11 | Questionari §4.1–4.2 | 10 | Like anonimo eleggibile, nessun dislike |
| R12 | Questionari §4.3–4.6 | 11 | Formula, organico pubblico e cuore accessibile |
| R13–R14 | Questionari §5 | 10 | 5 voci su 4 aree, con due voci sull'adattamento |
| R15–R16 | Specifica §8 | 9 | Stima documentata, nessun filtro automatico di mercato |
| R17–R18 | Specifica §6.4 e §9; modello §6 | 7, 9 | Requisiti confermati, gap e copertura |
| R19–R20 | Specifica §9 e §11 | 9 | Formazione verificata e differenze visibili alla persona |
| R21 | Questa pipeline | 0–4 | Documentazione prima del codice |
| R22 | Specifica §2/§7; modello §4/§8 | Tutte | Controllo umano, privacy e nessuna esclusione automatica AI |
| R23 | Specifica §7; modello §2–3 | 5, 7–8, 10 | Promesse iniziali ancora ricostruibili |
| R24 | Specifica §5/§8/§9; questionari §4 | Tutte | Etichette corrette per dati ed evidenze |
| R25 | Specifica §5.5/§7; ricerca conversazionale §2–§6; modello §3/§5 | 3–5, 8, 12 | Richiesta informale → criteri validati → filtri visibili → risultati modificabili |
| R26 | Specifica §12.1; ricerca conversazionale §7; registro P20 | 5, successiva integrazione AI | Valutazione Gemini Pro e configurazione API documentate nella fase dedicata, senza chiavi nel repository |

## 8. Prima attività dopo la revisione di questa pipeline

Consolidare le decisioni del registro e costruire la mappa navigabile delle due interfacce, usando un caso azienda/offerta e tre profili. Successivamente scegliere linguaggio visivo e stack. Il codice implementerà queste regole; non deve introdurre formule o visibilità nuove senza aggiornare la specifica.
