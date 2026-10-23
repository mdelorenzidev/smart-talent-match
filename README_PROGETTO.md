# SMART TALENT MATCH — Base di lavoro

Versione 1.2 — 23 ottobre 2026.

## Scopo

Questa documentazione traduce la definizione dell'utente in requisiti e in una pipeline per la webapp. La prima implementazione navigabile si chiama **MESH** ed è descritta in [MESH: interfaccia e stato della demo](MESH_INTERFACCIA.md); il codice è in `mesh/`. L'archivio locale, i ruoli e gli assistenti sono dimostrativi; le integrazioni di produzione restano da realizzare.

Il principio guida è la trasparenza reciproca, con priorità alla tutela del lavoratore. Le aziende ricevono profili ricchi e competenze accompagnate da evidenze; i candidati conoscono condizioni, prospettive di crescita e svolgimento della selezione. Dopo l'inserimento, il sistema raccoglie apprezzamenti anonimi sull'esperienza aziendale e valutazioni professionali dell'impresa sul dipendente.

La revisione corrente contiene 27 requisiti: il questionario di selezione ha 10 domande e la valutazione professionale 5 voci su 4 aree. Il chatbot traduce le preferenze informali dell'utente in richieste strutturate e filtri modificabili. È inoltre pianificato un piano facoltativo candidato/lavoratore da 20 euro al mese per sponsorizzare il profilo presso le aziende, con maggiore esposizione chiaramente etichettata. La scelta del modello e l'uso della chiave API restano alla fase successiva, valutando Gemini Pro come indicato dall'utente.

## Ordine di lettura

1. [Specifica del prodotto](SPECIFICA_PRODOTTO.md): obiettivi, requisiti, funzioni AI, due interfacce e perimetro.
2. [Questionari e rating](QUESTIONARI_E_RATING.md): 10 domande sulla selezione, 5 voci professionali, tempi, visibilità, cuore, formule e limiti.
3. [Ricerca conversazionale AI](RICERCA_CONVERSAZIONALE_AI.md): chatbot informale, formulazione della richiesta, filtri e integrazione API rinviata.
4. [Piano utente e sponsorizzazione](PIANO_UTENTE_E_SPONSORIZZAZIONE.md): piano da 20 euro al mese, visibilità aggiuntiva e abbonamento.
5. [Modello dei dati e flussi](MODELLO_DATI_E_FLUSSI.md): entità, relazioni, stati, permessi e regole tecniche da preservare.
6. [Pipeline di realizzazione](PIPELINE_REALIZZAZIONE.md): fasi, dipendenze, risultati attesi, verifiche e matrice di copertura dei requisiti.
7. [Decisioni e fonti](DECISIONI_E_FONTI.md): scelte dell'utente, proposte dell'assistente, punti aperti e riferimenti.

## Come interpretare le decisioni

- **Requisito utente**: contenuto nell'ultima descrizione e da mantenere.
- **Proposta operativa**: scelta suggerita per rendere il requisito realizzabile; non equivale a una decisione già approvata.
- **Punto aperto**: questione che può essere simulata nel prototipo, ma va risolta prima del relativo rilascio con dati reali.

La descrizione dell'utente e le successive revisioni su questionari, chatbot e sponsorizzazione sono la fonte funzionale corrente. Gli [appunti precedenti](APPUNTI_PROGETTO.md) documentano l'evoluzione dell'idea; le alternative precedenti non prevalgono sui requisiti attuali.

## Decisioni principali ancora da confermare

- Feedback di selezione: attendere sei mesi dalla candidatura oppure raccoglierlo alla conclusione, con richiamo entro sei mesi. Si raccomanda la seconda opzione.
- Feedback di selezione: visibilità del singolo all'azienda e pubblicazione di soli aggregati, oppure altra modalità. La prima è la proposta operativa; l'utente ha richiesto anonimato specificamente per il cuore post-assunzione.
- Denominatore del cuore: tutti i dipendenti dell'azienda, come richiesto, oppure la sola popolazione verificata ed eleggibile. La formula documentata conserva il primo e mostra separatamente copertura ed eleggibilità.
- Visibilità e possibilità di condivisione delle valutazioni aziendali sul lavoratore. Si propone accesso limitato a lavoratore e azienda autrice, senza pubblicazione automatica.
- Origine e verifica del numero dei dipendenti, fonti salariali e catalogo formativo.
- Soglie e modalità di aggregazione necessarie a proteggere l'identità nelle piccole aziende.
- Nella fase dedicata: modello Gemini Pro effettivamente disponibile, configurazione API, quote e condizioni economiche dell'account; nessuna chiave viene inserita in questa documentazione.
- Sponsorizzazione: posizionamenti e rotazione, condizioni di rinnovo/disdetta, fornitore di pagamento e definizione fiscale/commerciale prima della vendita reale; prezzo di progetto 20 euro al mese.

Questi punti non impediscono di progettare il prototipo con ipotesi dichiarate. Impediscono di presentare come definitiva una politica di pubblicazione o una garanzia di verifica ancora non definita.
