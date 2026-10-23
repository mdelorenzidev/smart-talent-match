# Questionari e rating

Versione 1.1 — 23 ottobre 2026. Revisione: selezione ridotta a 10 domande e valutazione professionale a 5 voci.

## 1. Tre strumenti da mantenere distinti

| Strumento | Autore | Oggetto | Collegamento | Forma richiesta |
|---|---|---|---|---|
| Feedback di selezione | Candidato, anche non assunto | Comunicazione, colloqui, chiarezza e miglioramenti | Candidatura e versione dell'offerta | Domande chiuse, con campi liberi facoltativi |
| Apprezzamento aziendale | Dipendente eleggibile | Esperienza aziendale e rispetto delle promesse | Rapporto lavorativo confermato | Like anonimo, nessun dislike, nessun questionario o recensione discorsiva |
| Valutazione professionale | Referente aziendale autorizzato | Comportamenti professionali osservabili | Rapporto lavorativo | Valutazione strutturata di quattro aree, con priorità all'adattamento |

Le valutazioni non sono fuse in una reputazione generale unica. In particolare, i giudizi aziendali sui dipendenti non sono il prezzo da pagare per esprimere un like o un feedback.

## 2. Tempi: giudizio sui sei mesi e proposta operativa

### 2.1 Selezione

**Richiesta dell'utente:** dopo sei mesi la persona deve poter valutare candidatura, comunicazioni, meeting e miglioramenti.

Sei mesi sono una scadenza utile di recupero e controllo, ma attendere obbligatoriamente sei mesi per raccontare un colloquio riduce tempestività e precisione del ricordo. La proposta raccomandata è:

- rendere il feedback disponibile alla chiusura della candidatura, per assunzione, rifiuto o ritiro;
- consentire un feedback sulla comunicazione già dopo 30 giorni senza aggiornamenti, descrivendo il processo come ancora aperto;
- inviare un richiamo a sei mesi dalla candidatura a chi non ha risposto, anche se il processo non ha un esito registrato;
- distinguere sempre «esperienza conclusa» ed «esperienza ancora in corso»;
- chiedere all'utente la conferma finale di questa politica prima di codificarla come definitiva.

Il trigger a 30 giorni è una proposta configurabile, non una preferenza già approvata. Se si sceglie invece di attendere sei mesi esatti, la configurazione usa `data_candidatura + 6 mesi di calendario`; il questionario rimane identico.

### 2.2 Apprezzamento del datore di lavoro

Disponibile al raggiungimento di **sei mesi di calendario dalla data effettiva di inizio del rapporto**, confermata dalle parti o da una procedura di verifica. La data di candidatura non avvia questo conteggio. Non si richiedono 180 giorni fissi: il comportamento sui mesi senza la stessa data deve essere definito e testato, usando l'ultimo giorno valido del mese come proposta.

### 2.3 Valutazione dell'azienda sul dipendente

Stessa maturazione: sei mesi dalla data di inizio del medesimo rapporto. I due riscontri sono indipendenti: l'azienda non deve sapere se il dipendente ha espresso il like per poterlo valutare, né il lavoratore deve compilare una recensione per leggere la propria valutazione.

### 2.4 Casi particolari

- Se il rapporto finisce prima di sei mesi, il requisito attuale non abilita il like. Va discusso come raccogliere in futuro anche esperienze brevi senza alterare la formula concordata. I dipendenti con contratti brevi non devono essere interpretati come insoddisfatti perché non eleggibili.
- Il questionario di selezione resta disponibile secondo la politica scelta anche a chi non viene assunto o si ritira.
- Le nuove valutazioni periodiche oltre il primo semestre sono un'evoluzione proposta, non una funzione già decisa.
- In demo un comando esplicito simula il passaggio del tempo; non si simulano sei mesi reali senza dichiararlo.

## 3. Questionario sulla selezione — 10 domande

### 3.1 Regole di compilazione

Il questionario contiene al massimo 10 domande: 9 valutative e una sui miglioramenti. Ogni risposta valutativa consente «Non applicabile / Non posso valutarlo». Le domande sui colloqui e sulle prove si mostrano solo quando pertinenti alla fase raggiunta. Lo spazio libero è facoltativo e integrato nella decima domanda, senza aggiungere altre domande; permette anche di spiegare una risposta precedente. Si invita a non inserire nomi o dati privati di terzi.

La scala standard, dove indicata, è:

1. Per niente.
2. Poco.
3. In parte.
4. Molto.
5. Del tutto.

Le domande descrivono esperienze senza presumere che vi sia stata una violazione o un disservizio.

### 3.2 Contesto ricavato dalla candidatura

Fase raggiunta, stato della candidatura e presenza di colloqui/prove provengono dalla cronologia e sono mostrati come riepilogo correggibile, senza tre ulteriori domande preliminari. Un meeting esterno può non essere registrato: la persona può correggere il contesto. Le incongruenze richiedono chiarimenti e non invalidano automaticamente il feedback.

### 3.3 Nove domande valutative, con scala standard e non applicabile

| ID | Area | Domanda |
|---|---|---|
| S01 | Chiarezza iniziale | Quanto erano chiare le informazioni iniziali su mansioni, compenso, contratto e organizzazione del lavoro? |
| S02 | Comunicazione | Quanto la comunicazione dalla presa in carico in poi è stata chiara e tempestiva, con aggiornamenti sufficienti? |
| S03 | Organizzazione degli incontri | Quanto appuntamenti, puntualità ed eventuali cambiamenti sono stati gestiti con un preavviso adeguato? |
| S04 | Rispetto | Quanto ti sei sentito trattato con rispetto durante contatti e incontri? |
| S05 | Colloqui e prove | Quanto domande, prove ed impegno richiesto erano pertinenti e proporzionati al lavoro proposto? |
| S06 | Coerenza delle condizioni | Quanto le condizioni discusse sono rimaste coerenti con l'offerta, rendendo comprensibili le eventuali variazioni prima della tua decisione? |
| S07 | Crescita | Quanto erano chiare le opportunità di crescita, i relativi compensi/benefit e le condizioni per accedervi? |
| S08 | Esito | Quanto la conclusione della selezione ti è stata comunicata in modo chiaro e tempestivo? |
| S09 | Riscontro utile | Quanto il riscontro ricevuto ti ha aiutato a comprendere l'esito e gli eventuali aspetti da migliorare? |

S03 e S05 sono non applicabili se non vi sono stati incontri o prove; S06 se non si è arrivati al confronto delle condizioni. S08–S09 sono non applicabili ai processi ancora aperti; S09 anche quando manca un riscontro valutabile. L'assenza di esito in un processo concluso può essere valutata in S08. Non si richiede di inventare informazioni per completare il modulo.

Le domande accorpano aspetti della stessa area per ridurre l'impegno; la risposta esprime una valutazione complessiva dell'area. Non è corretto ricavare da S01, per esempio, tre punteggi distinti su stipendio, turni e mansioni. S10 permette di precisare quale aspetto migliorare.

### 3.4 Decima domanda: miglioramenti e spazio libero

| ID | Domanda | Risposte |
|---|---|---|
| S10 | Quali aspetti dovrebbe migliorare l'azienda? | Scelta multipla: chiarezza delle mansioni / retribuzione / contratto e turni / tempi di risposta / aggiornamenti / organizzazione degli incontri / rispetto / pertinenza e proporzione delle prove / crescita e benefit / coerenza delle condizioni / comunicazione dell'esito / utilità del riscontro / nessuno in particolare / altro. Campo integrato facoltativo: «Dettagli, episodi o suggerimenti», disponibile per qualsiasi scelta. |

«Nessuno in particolare» è incompatibile con altre scelte della stessa domanda. Lo spazio libero non modifica automaticamente i punteggi e non diventa obbligatorio selezionando «altro». L'AI può proporre un riassunto delle ricorrenze, riferito al numero effettivo di risposte, senza trasformare opinioni in fatti accertati.

### 3.5 Calcolo e presentazione

Proposta: mostrare la distribuzione e la media delle risposte valide di ciascuna area S01–S09, senza voto complessivo al lancio. S10 raccoglie frequenze dei miglioramenti e non entra nelle medie. Le risposte non applicabili non entrano nel denominatore. Non si confrontano candidati arrivati al colloquio con persone che hanno soltanto inviato la candidatura senza distinguere la fase. La versione 1.1 del questionario distingue queste 10 domande dalle 21 della versione iniziale; i risultati storici non vengono fusi automaticamente.

Accanto ai risultati aggregati: periodo, candidati unici, persone che hanno risposto, distribuzione delle fasi e selezioni ancora aperte. Il rapporto tra risposte e candidati indica partecipazione al feedback, non soddisfazione. I nomi dei candidati non devono essere pubblicati con le statistiche.

### 3.6 Visibilità proposta

L'utente ha richiesto esplicitamente anonimato per i like post-assunzione, distinguendoli dai feedback di selezione. Non si presume quindi che questi ultimi siano anonimi.

Proposta da confermare: il candidato vede prima dell'invio che il singolo feedback di selezione è riconducibile a lui e visibile solo a sé, ai referenti autorizzati dell'azienda e alla gestione autorizzata delle segnalazioni. Al pubblico vanno esclusivamente aggregati sufficientemente protetti. L'azienda non può cancellare riscontri legittimi perché negativi; sono previste replica e segnalazione secondo regole trasparenti. Questa visibilità va confermata prima della raccolta reale.

## 4. Like anonimo e cuore aziendale

### 4.1 Interazione richiesta

Il lavoratore eleggibile vede una sola azione di apprezzamento, collegata al datore di lavoro e alle condizioni salvate all'ingresso. Testo proposto:

> Dopo almeno sei mesi di lavoro, vuoi esprimere apprezzamento per come questa azienda tratta le persone e rispetta le condizioni concordate?

Pulsante: **Esprimi apprezzamento**. È possibile non esprimerlo. Non esistono dislike, motivazione obbligatoria, testo libero o domande chiuse in questo strumento. Un like non certifica che ogni promessa sia stata rispettata e non permette di distinguere quale aspetto la persona stia apprezzando.

Proposta: consentire di ritirare l'apprezzamento dal proprio spazio riservato, senza mostrarlo come un voto negativo. La mancata interazione, l'astensione e il ritiro non vengono comunicati individualmente all'impresa.

### 4.2 Unicità e autenticità

- Un solo apprezzamento attivo per persona e azienda, anche con più offerte o rapporti contemporanei.
- Accesso solo con un rapporto confermato e anzianità sufficiente.
- L'azienda non può approvare, rifiutare, inserire o modificare like al posto del lavoratore.
- L'azienda non può ottenere l'elenco delle persone che hanno votato o non votato.
- Il sistema verifica l'eleggibilità; questo richiede dati di controllo riservati. «Anonimo per l'azienda e per il pubblico» non equivale automaticamente ad anonimato assoluto per il gestore. L'architettura e l'informativa devono descrivere il livello effettivo.

### 4.3 Formula che preserva la proposta dell'utente

Per uno stesso perimetro aziendale e istante di riferimento:

- **N** = numero totale dei dipendenti attivi nel perimetro, pubblico con data, fonte e stato della verifica;
- **L** = numero di persone uniche, dipendenti attivi, eleggibili e verificate, con apprezzamento attivo;
- **E** = dipendenti attivi verificati sulla piattaforma che hanno maturato i sei mesi;
- **F = 100 × L / N** = riempimento percentuale grezzo del cuore.

La formula è la proporzione richiesta. E non sostituisce N di nascosto. E/N è un indicatore distinto di copertura degli eleggibili conosciuti, non il tasso di partecipazione al feedback. In assenza di una risposta esplicita non si sa quante persone abbiano scelto consapevolmente di non mettere like.

Esempio esclusivamente dimostrativo: N=20, E=12, L=8. Riempimento grezzo 40%; eleggibili verificati noti alla piattaforma 12 su 20. Non significa che il restante 60% sia insoddisfatto. Parte dell'organico potrebbe non essere iscritta o non avere ancora sei mesi di anzianità.

Il cuore misura **apprezzamenti registrati rispetto all'organico**, non una percentuale certificata di soddisfazione. Questa descrizione deve essere chiara e vicina al componente.

### 4.4 Coerenza dei dati

- Numeratore e denominatore devono riferirsi allo stesso perimetro e periodo: nessun conteggio di ex dipendenti contro un organico solo attuale.
- La proposta attuale esclude dal numeratore pubblico i rapporti conclusi; l'esperienza degli ex dipendenti richiede un eventuale indicatore distinto futuro, non un'aggiunta nascosta alla formula.
- L'organico deve essere aggiornato e verificabile. Un dato autodichiarato è etichettato e non produce una precisione fittizia.
- Se N è assente, zero, obsoleto o incoerente, il cuore non mostra una percentuale affidabile. L>N o E>N è un'anomalia da risolvere, non da nascondere troncando il risultato a 100.
- Un nuovo organico può modificare F anche senza nuovi apprezzamenti; data e spiegazione evitano di presentarlo automaticamente come miglioramento o peggioramento del trattamento.
- Un solo like non diventa una moltiplicazione di voti attraverso nuovi contratti o sedi.

### 4.5 Protezione dell'identità e stati del componente

In un'impresa piccola, il cambiamento del cuore può far riconoscere l'unica persona divenuta eleggibile. La produzione deve quindi usare una politica di aggregazione e pubblicazione progettata per questo caso.

Proposta: aggiornamenti per gruppi e finestre temporali, assenza di timestamp individuali, soglie di pubblicazione basate su popolazione e contributi, e intervalli/arrotondamenti del risultato dove necessario. Non basta scegliere automaticamente una soglia, per esempio cinque persone, e dichiarare l'anonimato garantito. Le soglie effettive richiedono valutazione prima del rilascio.

Stati necessari:

1. Non ancora disponibile: organico mancante o non verificabile.
2. Raccolta iniziale: copertura ancora limitata.
3. Risultato non pubblicabile: protezione dell'identità o numero insufficiente di contributi.
4. Risultato aggregato disponibile: cuore con riempimento, informazioni di contesto e data.
5. Dati da aggiornare/incoerenti: nessuna percentuale mostrata come affidabile.

Un cuore non valutabile non appare vuoto con significato negativo. Il numero dei dipendenti resta una voce pubblica secondo la richiesta; il dettaglio di eleggibilità o dei contributi è mostrato solo quando non rende identificabile una persona. La modalità precisa va validata prima di usare dati reali.

### 4.6 Comportamento interattivo e accessibilità

Il cuore si riempie in proporzione al valore pubblicabile, e al clic apre la spiegazione del metodo, i dati pubblicabili e il riferimento temporale. La grafica non sostituisce la descrizione testuale. Prevedere navigazione da tastiera, etichetta comprensibile e riduzione delle animazioni per chi la preferisce.

## 5. Valutazione professionale dell'azienda sul dipendente

### 5.1 Scopo e visibilità

Richiesta: dopo sei mesi l'azienda valuta puntualità, cura del dettaglio, teamwork e soprattutto capacità di adattarsi alle evoluzioni del mercato.

Proposta operativa: la valutazione descrive il lavoro nel ruolo e nel periodo osservato, rimane visibile al dipendente e ai referenti aziendali autorizzati e non diventa automaticamente una reputazione pubblica o un filtro per altre aziende. Qualsiasi condivisione futura richiede una decisione esplicita sul prodotto e sulle condizioni di utilizzo.

L'azienda autrice e il periodo sono identificabili per il lavoratore. La persona può aggiungere una replica e chiedere rettifica di errori fattuali. Le contestazioni e le versioni devono restare tracciabili.

### 5.2 Scala comportamentale

Scala proposta, riferita agli obiettivi concordati e alle occasioni effettivamente disponibili:

1. Comportamento raramente osservato, con necessità frequente di supporto.
2. Comportamento osservato in modo discontinuo.
3. Comportamento generalmente coerente con quanto atteso nel ruolo.
4. Comportamento costante, anche in situazioni più complesse.
5. Comportamento costante e contributo dimostrabile al miglioramento del lavoro.

Sempre disponibile «Non osservabile / Opportunità insufficienti». Non equivale a un voto basso. Nessuna inferenza automatica di personalità o adattabilità dal CV, dal volto, dalla voce o dalle esperienze private.

### 5.3 Cinque voci sulle quattro aree

| ID | Area | Affermazione da valutare |
|---|---|---|
| D01 | Puntualità | Rispetta gli orari e gli impegni concordati e comunica per tempo gli impedimenti, nel contesto delle condizioni del ruolo. |
| D02 | Cura del dettaglio | Produce un lavoro accurato e completo, correggendo gli errori sulla base dei riscontri ricevuti. |
| D03 | Teamworking | Collabora con rispetto e condivide le informazioni necessarie agli obiettivi del gruppo. |
| D04 | Adattamento e apprendimento | Apprende e applica nuovi strumenti, procedure o conoscenze pertinenti, con il supporto disponibile. |
| D05 | Adattamento e apprendimento | Integra evoluzioni del settore e cambiamenti concordati nel lavoro, individuando soluzioni o miglioramenti quando il ruolo lo prevede. |

Le cinque voci sostituiscono le undici iniziali e mantengono le quattro aree: una voce per puntualità, dettaglio e teamwork; due per adattamento. Si mostrano risultati separati e quantità di risposte osservabili. Per l'adattamento la sintesi dell'area usa solo le risposte osservabili di D04–D05, mantenendo visibile anche il dettaglio. La maggiore attenzione all'adattamento non introduce un peso complessivo nascosto. Se in futuro si desidera un punteggio unico, i pesi devono essere discussi e pubblicati, senza trasformarlo in un sistema automatico di esclusione. Anche questa valutazione conserva la versione del questionario.

### 5.4 Contesto e sviluppo

Ruolo e periodo provengono dal rapporto e sono mostrati come contesto correggibile. Un unico spazio facoltativo permette di indicare esempi, obiettivi comunicati, supporto/formazione offerti e azioni di sviluppo, senza altri questionari obbligatori. I fatti non osservati non sono inventati per completare il modulo.

L'adattabilità riguarda nuove conoscenze e metodi pertinenti al lavoro. Non misura disponibilità illimitata, accettazione di condizioni peggiori o rinuncia ai propri limiti. Assenze o condizioni tutelate non diventano automaticamente indizi di scarsa puntualità o collaborazione.

## 6. Indipendenza, integrità e gestione delle contestazioni

- Nessun pagamento modifica i voti o sblocca la cancellazione di riscontri legittimi.
- Il like anonimo non sblocca la valutazione aziendale e non ne modifica il contenuto.
- Le variazioni del cuore sono aggregate per evitare correlazioni con singoli comportamenti.
- Una discordanza tra valutazione e cronologia viene segnalata per approfondimento, senza considerare falsa una recensione solo perché diversa dalle altre.
- Si limita il contributo duplicato attraverso identificativi riservati e regole per candidatura/rapporto.
- Le politiche di cancellazione, rettifica, conservazione e contestazione devono essere definite prima del rilascio reale.
- Il prototipo usa casi sintetici per verificare anche pochi dipendenti, dati assenti, rapporti brevi, astensione, revoca e cambi di organico.
