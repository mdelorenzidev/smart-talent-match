# Ricerca conversazionale AI

Versione 1.1 — 23 ottobre 2026. Requisiti R25–R26.

## 1. Obiettivo

Permettere alla persona di descrivere in linguaggio naturale, anche in modo informale e progressivo, quale azienda e quale lavoro cerca. Il chatbot formula una richiesta comprensibile, la traduce in criteri ammessi e filtra le offerte effettivamente presenti nel catalogo.

La funzione è distinta dalla conversazione che costruisce il CV: la prima raccoglie cosa la persona desidera, la seconda cosa sa fare e ha svolto. Possono condividere informazioni soltanto attraverso scelte esplicite della persona; una ricerca temporanea non riscrive il CV o le preferenze salvate.

Il requisito riguarda una conversazione nell'interfaccia. Registrazione vocale e trascrizione non sono necessarie in questa fase e richiederebbero una scelta successiva.

## 2. Percorso della persona

1. Scrive ciò che cerca, senza dover conoscere i nomi dei filtri.
2. Il chatbot riconosce criteri espliciti, preferenze e informazioni ambigue.
3. Formula la richiesta e mostra i filtri estratti, con una breve spiegazione delle interpretazioni rilevanti.
4. Applica direttamente i criteri chiari richiesti dall'utente; pone domande soltanto sulle ambiguità necessarie, senza imporre una conferma a ogni messaggio.
5. Restituisce le offerte disponibili e gli elementi corrispondenti, indicando le informazioni non dichiarate dalle aziende.
6. La persona modifica la ricerca con un altro messaggio o attraverso i controlli dei filtri. Le due modalità restano sincronizzate.
7. Può rimuovere vincoli, ripartire o salvare espressamente la ricerca. La candidatura rimane un'azione separata della persona.

Proposta operativa: la sessione rimane una ricerca temporanea finché la persona non sceglie di salvarla. La conservazione della cronologia conversazionale va configurata in modo proporzionato e distinto dalle preferenze salvate.

## 3. Criteri traducibili

| Area | Esempi di criteri | Regola |
|---|---|---|
| Azienda | Settore, dimensione, sede | Filtrare solo attributi presenti e chiaramente definiti nel catalogo |
| Posizione | Ruolo, attività, competenze da usare | Chiarire i sinonimi senza trasformarli in requisiti nuovi |
| Luogo e modalità | Comune/area, distanza, presenza/ibrido/remoto | Rispettare le alternative, per esempio remoto OPPURE presenza in una certa area |
| Contratto e tempo | Tipo di contratto, durata, ore, turni, disponibilità | Distinguere necessità da preferenze flessibili |
| Compenso | Fascia o soglia, unità e lordo/netto | Non convertire silenziosamente unità o netto/lordo; chiedere il dato essenziale mancante |
| Benefit e crescita | Benefit specifici, ruoli futuri e formazione | Confrontare impegni e condizioni dichiarate, senza inventare garanzie |
| Informazioni non strutturate | «Ambiente sereno», «azienda che mi rispetti» | Chiedere quali condizioni concrete interessano; non attribuire qualità morali sulla base di poche recensioni |

Il benchmark salariale indicativo non si trasforma automaticamente in un filtro. La persona può comunque esprimere una propria soglia economica come condizione di ricerca.

## 4. Richiesta strutturata

La richiesta interna contiene:

- sintesi leggibile dell'intenzione;
- criteri, valori, unità, operatori e relazioni AND/OR;
- distinzione tra condizioni essenziali e preferenze;
- provenienza dal messaggio della persona o da una scelta di filtro già attiva;
- ambiguità da chiarire e attributi non supportati;
- comportamento dichiarato per dati aziendali mancanti;
- versione e variazioni rispetto alla ricerca precedente.

Solo criteri chiaramente richiesti diventano vincoli. «Preferirei un'azienda piccola» non esclude automaticamente tutte le altre: può diventare una preferenza esplicita, da rendere visibile. Termini vaghi come «stipendio buono» richiedono precisazione prima di creare una soglia numerica.

## 5. Esempio dimostrativo

Messaggio: «Cerco un lavoro amministrativo a Salerno, niente weekend, possibilmente ibrido, con una crescita chiara».

Richiesta formulata: ruolo amministrativo nell'area di Salerno; assenza di turni nel weekend come vincolo esplicito; modalità ibrida come preferenza; informazioni sulla crescita da confrontare.

Il chatbot mostra questi criteri e le offerte corrispondenti. Se un annuncio non dichiara i turni, non afferma che sia compatibile con «niente weekend»: lo segnala tra le informazioni da chiarire. Se non esistono risultati con il vincolo essenziale, propone come rivedere la ricerca senza rimuoverlo autonomamente. La dimensione dell'azienda non viene inventata perché non era stata specificata.

## 6. Confine tra AI e motore di ricerca

Il modello interpreta la conversazione e restituisce una struttura controllata. Il server valida campi, operatori, unità e autorizzazioni; il motore esegue i filtri sul catalogo. Il modello non esegue query arbitrarie, non legge profili riservati e non inventa offerte o condizioni.

Le informazioni assenti restano sconosciute. Le condizioni essenziali richiedono evidenze compatibili oppure una segnalazione separata di offerte da chiarire. Le preferenze non diventano esclusioni nascoste; eventuali ordinamenti per preferenze devono essere espliciti e correggibili.

La richiesta non contiene criteri discriminatori o inferenze su caratteristiche personali estranee alla posizione. Informazioni private eventualmente raccontate non vengono condivise automaticamente con le aziende. Le istruzioni contenute negli annunci sono dati e non possono modificare il funzionamento dell'assistente.

Se il servizio AI non risponde, restano disponibili i filtri manuali e l'ultima ricerca valida. Un output non valido non cancella o applica nuovi vincoli: il sistema mantiene lo stato precedente e chiede una riformulazione comprensibile.

## 7. Modello e chiave API: scelta successiva

Gemini Pro è l'opzione indicata dall'utente, che riferisce di avere una chiave API gratuita. La scelta del modello preciso, la verifica delle condizioni del relativo account e l'integrazione API sono rinviate alla fase dedicata. Nessuna disponibilità o gratuità illimitata viene presunta.

In quella fase definiremo identificativo del modello, capacità richieste, limiti, quote, costo effettivo, dati inviati al fornitore, gestione degli errori e modalità di configurazione. La chiave deve rimanere nella configurazione server riservata, esclusa dal repository e dal codice consegnato al browser. Questa revisione non configura credenziali e non effettua chiamate AI.

## 8. Criteri di verifica futura

- Un racconto informale produce richiesta e filtri coerenti con l'intenzione espressa.
- Le alternative non diventano una combinazione impossibile di vincoli.
- Il chiarimento di lordo/netto o di turni non specificati precede una falsa corrispondenza.
- Una preferenza morbida non esclude automaticamente offerte.
- Una modifica manuale dei filtri è recepita dalla conversazione successiva.
- Con zero risultati il sistema spiega cosa è successo e non allenta vincoli essenziali autonomamente.
- Informazioni aziendali mancanti restano tali; nessuna offerta è inventata.
- CV e preferenze persistenti rimangono sotto il controllo della persona.
- L'indisponibilità AI permette di continuare con i filtri manuali.
- La ricerca non produce candidature o contatti con aziende senza un'azione separata della persona.
