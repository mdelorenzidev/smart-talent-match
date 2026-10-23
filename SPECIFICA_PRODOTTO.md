# Specifica del prodotto

Versione 1.1 — 23 ottobre 2026. Fonte: descrizione dell'utente e successiva revisione su questionari e ricerca conversazionale AI, nel contesto del brief FAN Innovation.

## 1. Obiettivo

Realizzare una webapp con interfaccia candidato/lavoratore e interfaccia azienda. L'applicazione facilita un incontro informato tra persone e PMI campane attraverso offerte trasparenti, CV completi costruiti con assistenza AI, ricerca reciproca per parametri, chatbot che traduce il racconto informale delle preferenze in filtri, opportunità di crescita dichiarate e feedback distinti sulla selezione e sull'esperienza professionale.

La tutela del lavoratore resta il criterio prioritario. Il valore per l'impresa è trovare persone pertinenti con capacità comprensibili e supportate da evidenze, riducendo ambiguità sulle condizioni e sulle aspettative.

Il prodotto può aiutare a rendere visibili e migliorare le condizioni offerte. Non assume che tutti i problemi di reperimento dipendano dalla piattaforma né promette di risolvere automaticamente salari bassi o precarietà.

## 2. Principi del prodotto

1. **Trasparenza**: condizioni reali dell'offerta, limiti delle stime AI, stato della candidatura e provenienza dei dati sempre distinguibili.
2. **Reciprocità**: azienda e persona possono comprendere l'altra parte e confrontare le rispettive esigenze.
3. **Controllo della persona**: l'utente approva il CV, sceglie cosa condividere e conosce chi vede le valutazioni.
4. **Crescita professionale visibile**: la scalabilità richiesta indica progressione di ruolo, responsabilità, stipendio e benefit; non va confusa con la scalabilità tecnica del software.
5. **Capacità contestualizzate**: competenze dichiarate, documentate e verificate rimangono distinte.
6. **AI di supporto**: raccomandazioni spiegabili, nessuna esclusione automatica decisa dall'AI, nessuna esperienza o qualifica inventata.
7. **Feedback separati**: processo di selezione, cuore aziendale e valutazione del dipendente hanno soggetti, tempi e visibilità differenti.
8. **Dati proporzionati**: un CV completo è completo rispetto all'obiettivo professionale; non richiede tutta la vita privata.

## 3. Soggetti e significato dell'offerta

La persona entra come candidato e può diventare dipendente. Mantiene un solo account personale, con più candidature e possibili rapporti lavorativi nel tempo.

L'azienda pubblica offerte e gestisce selezioni attraverso account di persone autorizzate. Azienda e persona sono le due entità principali del dominio, ma il loro legame richiede due passaggi distinti:

- **Offerta**: opportunità con condizioni, requisiti e crescita.
- **Candidatura**: associazione tra una persona e una specifica versione dell'offerta.
- **Rapporto lavorativo**: nasce dall'effettivo ingresso e conserva data di inizio, condizioni accettate e modifiche successive.

Questo permette di gestire candidature non riuscite, più candidati per offerta, più posti nella stessa offerta e feedback riferiti all'esperienza corretta.

## 4. Requisiti identificati

| ID | Requisito | Tipo |
|---|---|---|
| R01 | Due interfacce: candidato/lavoratore e azienda | Utente |
| R02 | Offerta come centro dell'incontro tra le due parti | Utente |
| R03 | Condizioni chiare su stipendio, contratto, mansioni, turni e modalità | Utente |
| R04 | CV completo generato con AI da una descrizione semplice | Utente |
| R05 | Inclusione di competenze, traguardi accademici ed esperienze di vita pertinenti | Utente |
| R06 | Percorso di crescita con ruoli successivi, cifre e benefit | Utente |
| R07 | Ricerca reciproca secondo parametri espliciti | Utente |
| R08 | Feedback sulla comunicazione e sui meeting della selezione | Utente |
| R09 | Questionario di selezione ridotto a 10 domande, prevalentemente chiuso, con spazio libero integrato e miglioramenti | Utente |
| R10 | Finestra temporale di sei mesi da definire correttamente per i feedback | Utente + proposta sui trigger |
| R11 | Apprezzamento anonimo post-assunzione dopo sei mesi, tramite like senza dislike | Utente |
| R12 | Cuore interattivo proporzionale a like e numero pubblico dei dipendenti | Utente |
| R13 | Valutazione aziendale del dipendente dopo lo stesso periodo | Utente |
| R14 | Valutazione sintetica di puntualità, dettaglio, teamwork e soprattutto adattamento, articolata in 5 voci | Utente; numero delle voci scelto operativamente |
| R15 | Stima salariale orientativa per ogni posizione, visibile alla persona | Utente |
| R16 | Stima salariale informativa, non criterio automatico di esclusione | Utente |
| R17 | Analisi AI delle competenze mancanti rispetto alle posizioni di interesse | Utente |
| R18 | Possibile intervista AI all'azienda per chiarire le competenze richieste | Utente |
| R19 | Suggerimenti di seminari e materiali formativi | Utente |
| R20 | Carenze e percorso di miglioramento visibili anche lato candidato | Utente |
| R21 | Design e codice in una fase successiva, dopo la definizione della pipeline | Utente |
| R22 | Tutela del lavoratore, raccomandazioni comprensibili e nessuna esclusione automatica AI | Brief + conversazione |
| R23 | Conservare le promesse dell'offerta per confrontarle con l'esperienza successiva | Conseguenza necessaria di R03/R06/R11 |
| R24 | Distinguere dati dichiarati, verificati, stimati e insufficienti | Conseguenza operativa della trasparenza |
| R25 | Chatbot informale che formula la richiesta di ricerca e applica filtri espliciti alle offerte/aziende, modificabili dalla persona | Utente |
| R26 | Definire successivamente integrazione API e modello AI, valutando Gemini Pro e la chiave disponibile all'utente | Utente |

## 5. Percorso del candidato e costruzione del CV

### 5.1 Racconto iniziale

L'utente può scrivere una descrizione libera e aggiungere, se desidera, un CV esistente. L'upload è una proposta aggiuntiva e non deve essere necessario. Il racconto può comprendere:

- formazione, diplomi, lauree, corsi e certificazioni;
- esperienze professionali, attività autonome e progetti;
- volontariato, associazionismo e attività familiari pertinenti;
- responsabilità svolte, strumenti utilizzati, risultati e problemi affrontati;
- lingue e capacità pratiche;
- aspirazioni, ruoli di interesse e disponibilità a imparare.

Date di nascita, foto e informazioni private non pertinenti non sono necessarie per generare un CV completo. L'AI non ricava qualità professionali da salute, convinzioni, situazione familiare o altre informazioni sensibili eventualmente presenti nel racconto.

### 5.2 Conversazione di chiarimento

L'AI estrae informazioni, evidenzia ciò che non comprende e pone domande mirate: «Quali attività svolgevi autonomamente?», «Con quale strumento?», «Puoi descrivere un risultato?». Non trasforma automaticamente un'esperienza di vita in una qualifica professionale.

Ogni affermazione generata deve essere riconducibile a un'informazione dell'utente. Le riformulazioni e le competenze suggerite richiedono conferma. In presenza di contraddizioni l'AI chiede chiarimenti, senza scegliere arbitrariamente una versione.

### 5.3 CV strutturato e approvato

Il CV contiene profilo, esperienze, formazione, competenze, progetti/esperienze pertinenti, risultati e obiettivi professionali. Le evidenze hanno uno stato distinto: dichiarata, documentata, verificata. Il contenuto approvato è versionato, modificabile ed esportabile, con anteprima prima della condivisione.

Le preferenze di ricerca — retribuzione desiderata, sede, turni e modalità — restano in un pannello distinto dal CV condiviso, salvo scelta esplicita della persona. Non si trasferiscono automaticamente eventuali informazioni private dal racconto al CV.

### 5.4 Preferenze di ricerca

Il candidato indica ruoli, competenze che desidera utilizzare o sviluppare, area e distanza accettabile, modalità in presenza/ibrida/remota, turni e ore, disponibilità di inizio, tipo di contratto, fascia retributiva e prospettive di crescita desiderate. Distingue preferenze flessibili e condizioni essenziali, modificabili in ogni momento.

### 5.5 Chatbot per descrivere l'azienda e il lavoro cercati

La persona può dialogare in modo informale con un chatbot distinto, per scopo, dalla costruzione del CV. Descrive l'azienda desiderata e le condizioni del lavoro; l'AI formula la richiesta in criteri strutturati e filtra la ricerca. La conversazione può raffinare una ricerca già avviata senza obbligare a compilare tutti i filtri a mano.

Si possono esprimere settore, dimensione aziendale, territorio, modalità, ruolo, contratto, compenso, turni, benefit e opportunità di crescita, limitatamente ai dati disponibili nel catalogo. Le richieste comprensibili vengono applicate direttamente come filtri visibili e correggibili; si chiedono chiarimenti mirati quando un'ambiguità cambia il risultato, per esempio su lordo/netto o modalità alternative.

I requisiti essenziali sono distinti dalle preferenze. Il chatbot non inventa dati aziendali, non deduce vincoli da informazioni private e non trasforma una preferenza in un'esclusione rigida. In assenza di risultati propone quali criteri rivedere, senza allentarli di nascosto. Il CV e il profilo persistente non sono modificati automaticamente dalla conversazione di ricerca.

La specifica completa del percorso, dei limiti e dei criteri di verifica è in [Ricerca conversazionale AI](RICERCA_CONVERSAZIONALE_AI.md).

## 6. Percorso dell'azienda e offerta trasparente

### 6.1 Profilo aziendale

Ragione sociale, settore, sedi, descrizione delle attività, referente autorizzato, numero di dipendenti con data e provenienza, stato della verifica dell'identità aziendale. Nessun valore aziendale autodichiarato viene presentato come certificazione.

Il conteggio dei dipendenti riguarda l'azienda nel perimetro mostrato: se la scheda rappresenta una sede, una società o un gruppo, tale perimetro deve essere esplicito e coerente con il cuore.

### 6.2 Campi dell'offerta

| Area | Dati necessari |
|---|---|
| Lavoro | Titolo comprensibile, attività effettive, responsabilità, strumenti e autonomia |
| Compenso | Fascia lorda, unità oraria/mensile/annuale, ore contrattuali, mensilità se rilevanti, componenti fisse e variabili distinte |
| Contratto | Tipologia, durata se a termine, inquadramento e riferimento contrattuale se disponibile/pertinente, eventuale prova |
| Organizzazione | Sede, modalità, ore settimanali, turni, weekend/notte se previsti, prevedibilità degli orari, straordinari e relativo trattamento dichiarato |
| Benefici | Benefit effettivamente offerti, destinatari e condizioni di accesso |
| Requisiti | Competenze e livelli, requisiti essenziali/preferibili, motivazione e possibilità di apprendimento |
| Crescita | Ruoli successivi, fasce retributive/benefit, criteri, opportunità formative e tempi indicativi |
| Selezione | Numero previsto di passaggi, referenti, modalità dei colloqui e tempi orientativi di risposta |
| Stato | Posti disponibili, scadenza, data di aggiornamento e versione |

La retribuzione promessa deve essere precisa quanto necessario a capire l'offerta; l'approssimazione riguarda il benchmark di mercato, non le condizioni del contratto. Non si presenta come netto certo una conversione che dipende dalla situazione personale.

### 6.3 Crescita professionale, elemento centrale

Ogni passaggio della crescita riporta titolo del ruolo successivo, responsabilità, competenze da acquisire, criteri di accesso, fascia di stipendio, benefit aggiuntivi ed eventuale orizzonte temporale.

Si distingue tra condizioni garantite e opportunità subordinate a risultati, disponibilità di posizioni o altre condizioni esplicite. Il prodotto non deve indurre l'azienda a inventare promozioni. Se non esiste un percorso definito, la scheda lo dichiara; questo resta un elemento valutabile dal candidato. Eventuali aumenti o crescita di competenze nello stesso ruolo possono essere descritti senza inventare livelli gerarchici.

### 6.4 Intervista AI all'azienda

L'AI può chiedere: «Quali attività deve svolgere già dal primo giorno?», «Quali strumenti può imparare qui?», «Quale evidenza dimostrerebbe questa competenza?», «Cosa cambia concretamente nel ruolo successivo?». Restituisce una bozza di requisiti e crescita che l'azienda deve approvare.

## 7. Ricerca reciproca e candidatura

Lato candidato, i filtri operano sulle condizioni e sulle caratteristiche dell'offerta. Lato azienda, la ricerca riguarda profili che hanno autorizzato quella visibilità, competenze pertinenti, evidenze, disponibilità e condizioni professionali compatibili.

Le due direzioni producono spiegazioni: elementi corrispondenti, differenze, informazioni da chiarire. La mancanza di un dato non è trasformata automaticamente in una carenza.

I filtri selezionati esplicitamente dalla persona, anche espressi in linguaggio naturale al chatbot, sono visibili, modificabili e rimovibili. Il chatbot traduce l'intenzione espressa; il motore di ricerca esegue solo criteri validati. Un filtro scelto dall'utente non equivale a una decisione di esclusione dell'AI. Le raccomandazioni AI non rifiutano candidature, non cancellano opportunità e non decidono assunzioni. Una disponibilità o una condizione incompatibile viene mostrata e può essere approfondita dalle parti.

La candidatura conserva la versione del CV condivisa e dell'offerta accettata come base del processo. Messaggi, appuntamenti, esiti e cambiamenti rilevanti hanno una cronologia accessibile alle parti. Un'offerta modificata non riscrive le promesse precedenti; le variazioni vengono evidenziate prima dell'accettazione.

## 8. Retribuzione orientativa AI

Per ciascuna posizione la piattaforma presenta, quando dispone di dati sufficienti, una fascia o un valore centrale accompagnato da intervallo orientativo. Specifica lordo, unità, orario, ruolo/livello, territorio, settore, data delle fonti e ampiezza/copertura dei dati quando disponibile.

Il sistema recupera dati da fonti selezionate; il modello linguistico spiega la stima e la sua comparabilità. Non inventa una media dalla sola conoscenza del modello. Se i dati locali sono scarsi, amplia il confronto dichiarandolo; se non esiste una base adeguata, mostra «stima non disponibile».

La scheda distingue chiaramente:

- condizioni offerte dall'azienda;
- riferimento di mercato approssimativo;
- eventuali riferimenti contrattuali, che richiedono una verifica separata e non coincidono con la media di mercato.

Il benchmark non è un filtro automatico né un bollino che certifichi la correttezza dell'offerta. Il candidato mantiene la propria soglia salariale. L'intervallo non va allargato artificialmente per rendere appetibile uno stipendio basso; la trasparenza include anche un confronto sfavorevole quando supportato dai dati.

## 9. Gap di competenze e formazione

Il confronto riguarda una posizione specifica o una posizione successiva nel percorso di crescita. L'AI confronta requisiti approvati dall'azienda con competenze confermate dall'utente e relative evidenze.

Per ogni requisito distingue:

1. capacità documentata o verificata al livello richiesto;
2. capacità dichiarata, da approfondire;
3. competenza trasferibile da verificare;
4. livello parziale o competenza esplicitamente da acquisire;
5. informazioni insufficienti;
6. requisito abilitante/certificazione da controllare separatamente.

Se si mostra un indice numerico, devono comparire formula, copertura dei dati e requisiti coinvolti. Un'informazione sconosciuta non equivale a zero competenza. L'indice non produce un'esclusione automatica.

L'azienda può vedere, nel perimetro autorizzato, quali aspetti richiedono approfondimento o formazione. La persona vede le stesse differenze e un percorso praticabile per colmarle. Le analisi aggregate dei fabbisogni mostrano quanti profili sono stati effettivamente osservati e non si presentano come censimento del territorio.

Seminari, corsi e materiali riportano competenza collegata, ente/autore, fonte/link, costo, durata, modalità, prerequisiti e data di aggiornamento se disponibili. Le risorse devono esistere ed essere verificate nel catalogo; il prototipo può utilizzare un catalogo curato o dimostrativo dichiarato. La formazione non promette automaticamente assunzione o promozione.

## 10. Feedback e valutazioni

Tre strumenti indipendenti:

- questionario sulla selezione collegato alla candidatura;
- like anonimo al datore di lavoro dopo sei mesi di rapporto, rappresentato dal cuore;
- valutazione professionale aziendale del dipendente dopo sei mesi di rapporto.

Il questionario di selezione contiene 10 domande complessive, incluso il miglioramento con spazio libero integrato. La valutazione professionale contiene 5 voci su 4 aree, con due voci sull'adattamento. Tempi, domande, denominatori, anonimato e visibilità sono definiti nel documento dedicato. Nessun punteggio del lavoratore alimenta il cuore aziendale; il questionario di selezione non si confonde con i like post-assunzione.

## 11. Interfacce da progettare

### Candidato/lavoratore

- accesso e impostazioni di condivisione;
- racconto iniziale e conversazione AI;
- editor/anteprima del CV e raccolta delle evidenze;
- preferenze e ricerca offerte, con chatbot informale, riepilogo della richiesta e filtri modificabili;
- dettaglio offerta: condizioni, crescita, benchmark, profilo aziendale e cuore;
- confronto delle competenze e formazione;
- candidatura, messaggi, colloqui e stato;
- questionario di selezione;
- rapporto lavorativo, promesse salvate e like eleggibile;
- valutazioni ricevute dall'azienda, replica/rettifica e obiettivi di sviluppo.

### Azienda

- accesso, organizzazione e autorizzazioni dei referenti;
- profilo aziendale, sedi e organico;
- creazione guidata dell'offerta, intervista AI e percorso di crescita;
- anteprima e pubblicazione/versionamento;
- ricerca dei candidati autorizzati e lettura delle evidenze;
- gestione candidature, comunicazioni, colloqui ed esito;
- registrazione e conferma dell'ingresso;
- risultati aggregati della selezione e suggerimenti di miglioramento;
- visualizzazione del cuore e della sua copertura senza identità dei votanti;
- valutazione professionale del dipendente e proposte formative.

### Funzioni di gestione interna

Servono strumenti operativi per verificare accessi, gestire segnalazioni, cataloghi, fonti e abusi. Non sono un terzo percorso pubblico equivalente alle due interfacce richieste.

## 12. Prototipo e prodotto successivo

Il prototipo dimostra un percorso completo con dati sintetici e ruoli distinti. Include tutte le funzioni centrali, anche con fonti curate, verifiche simulate e tempo simulato dichiarato. Non può presentare queste simulazioni come servizi già operativi.

Integrazioni contrattuali, verifica reale dell'organico, anonimizzazione in produzione, invio di notifiche, raccolta sistematica di dati salariali e formazione aggiornata richiedono implementazioni e verifiche prima del rilascio con dati reali.

La selezione della tecnologia e il design definitivo avvengono dopo il consolidamento delle regole. Questa specifica non autorizza da sola la pubblicazione online né introduce credenziali, servizi o fornitori non scelti.

### 12.1 Integrazione API AI rinviata

L'utente propone di valutare Gemini Pro e segnala di avere una chiave API gratuita. Questa revisione registra la preferenza, senza selezionare un identificativo di modello né configurare o usare una chiave. Disponibilità del modello, accessi, condizioni di utilizzo, eventuale gratuità, quote e costi saranno verificati nella fase dedicata, come richiesto dall'utente.

Il progetto deve poter distinguere il comportamento funzionale dell'assistente dal fornitore AI. La futura chiave sarà gestita sul server tramite configurazione riservata, non nei file del repository o nel browser. Per questa modifica documentale non servono credenziali né chiamate reali a servizi AI.
