# SMART TALENT MATCH — Base di lavoro

Versione 1.0 — 23 ottobre 2026.

## Scopo

Questa documentazione traduce l'ultima definizione dell'utente in requisiti e in una pipeline per progettare e realizzare successivamente la webapp. Non contiene ancora design definitivo o codice applicativo.

Il principio guida è la trasparenza reciproca, con priorità alla tutela del lavoratore. Le aziende ricevono profili ricchi e competenze accompagnate da evidenze; i candidati conoscono condizioni, prospettive di crescita e svolgimento della selezione. Dopo l'inserimento, il sistema raccoglie apprezzamenti anonimi sull'esperienza aziendale e valutazioni professionali dell'impresa sul dipendente.

## Ordine di lettura

1. [Specifica del prodotto](SPECIFICA_PRODOTTO.md): obiettivi, requisiti, funzioni AI, due interfacce e perimetro.
2. [Questionari e rating](QUESTIONARI_E_RATING.md): domande complete, tempi, visibilità, cuore, formule e limiti.
3. [Modello dei dati e flussi](MODELLO_DATI_E_FLUSSI.md): entità, relazioni, stati, permessi e regole tecniche da preservare.
4. [Pipeline di realizzazione](PIPELINE_REALIZZAZIONE.md): fasi, dipendenze, risultati attesi, verifiche e matrice di copertura dei requisiti.
5. [Decisioni e fonti](DECISIONI_E_FONTI.md): scelte dell'utente, proposte dell'assistente, punti aperti e riferimenti.

## Come interpretare le decisioni

- **Requisito utente**: contenuto nell'ultima descrizione e da mantenere.
- **Proposta operativa**: scelta suggerita per rendere il requisito realizzabile; non equivale a una decisione già approvata.
- **Punto aperto**: questione che può essere simulata nel prototipo, ma va risolta prima del relativo rilascio con dati reali.

L'ultima descrizione dell'utente è la fonte funzionale principale. Gli [appunti precedenti](APPUNTI_PROGETTO.md) documentano l'evoluzione dell'idea; le alternative precedenti non prevalgono sui requisiti attuali.

## Decisioni principali ancora da confermare

- Feedback di selezione: attendere sei mesi dalla candidatura oppure raccoglierlo alla conclusione, con richiamo entro sei mesi. Si raccomanda la seconda opzione.
- Feedback di selezione: visibilità del singolo all'azienda e pubblicazione di soli aggregati, oppure altra modalità. La prima è la proposta operativa; l'utente ha richiesto anonimato specificamente per il cuore post-assunzione.
- Denominatore del cuore: tutti i dipendenti dell'azienda, come richiesto, oppure la sola popolazione verificata ed eleggibile. La formula documentata conserva il primo e mostra separatamente copertura ed eleggibilità.
- Visibilità e possibilità di condivisione delle valutazioni aziendali sul lavoratore. Si propone accesso limitato a lavoratore e azienda autrice, senza pubblicazione automatica.
- Origine e verifica del numero dei dipendenti, fonti salariali e catalogo formativo.
- Soglie e modalità di aggregazione necessarie a proteggere l'identità nelle piccole aziende.

Questi punti non impediscono di progettare il prototipo con ipotesi dichiarate. Impediscono di presentare come definitiva una politica di pubblicazione o una garanzia di verifica ancora non definita.
