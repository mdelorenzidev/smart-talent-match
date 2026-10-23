# Piano utente e sponsorizzazione del profilo

Versione 1.2 — 23 ottobre 2026. Requisito R27.

## 1. Funzione richiesta

Prevedere un piano facoltativo dal lato candidato/lavoratore al prezzo di **20 euro al mese**, che offre una sponsorizzazione del profilo per renderlo più facilmente visibile alle aziende. Il beneficio acquistato è maggiore esposizione del profilo, non un'assunzione, un colloquio o un giudizio positivo garantiti.

Prezzo e funzione sono richiesti dall'utente. Posizionamenti, rotazione, rinnovo, soglie di esposizione e fornitore di pagamento sono proposte operative o decisioni successive, non dettagli già approvati.

## 2. Esperienza del candidato

L'interfaccia personale presenta una pagina del piano con prezzo mensile, funzionamento della sponsorizzazione, durata, condizioni di rinnovo e modalità di disattivazione. Prima del pagamento mostra il prezzo totale applicato e le eventuali condizioni; la definizione fiscale e commerciale va completata prima della vendita reale, conservando come prezzo di progetto 20 euro al mese.

La persona sceglie di attivare il piano, completa il pagamento e vede lo stato dell'abbonamento, il periodo coperto, l'eventuale prossimo rinnovo e il controllo per disattivarlo. Può sospendere la visibilità sponsorizzata senza che questo implichi automaticamente un rimborso o la disdetta: le tre azioni devono avere effetti distinti e comprensibili.

La sponsorizzazione opera soltanto entro la visibilità del profilo già autorizzata. Acquistare il piano non rende pubblici nuovi dati, non invia candidature o messaggi e non amplia le aziende autorizzate a vedere il CV. Se il profilo è nascosto o non è disponibile alla ricerca, il pannello spiega che il boost non può produrre esposizione, senza modificare i permessi da solo.

Proposta per il prodotto: il percorso standard mantiene ricerca, candidatura e feedback accessibili anche senza questo abbonamento; il prezzo riguarda la visibilità aggiuntiva.

## 3. Esperienza dell'azienda e maggiore visibilità

Proposta concreta: includere un riquadro o posizioni dedicate ai **profili sponsorizzati** nella parte iniziale dei risultati di ricerca dei candidati, con indicazione evidente «Sponsorizzato» e spiegazione del posizionamento a pagamento. La scheda conserva gli stessi dati professionali e le stesse evidenze del profilo ordinario.

Si applicano prima autorizzazioni e criteri espliciti della ricerca aziendale. Il pagamento non rende pertinente un profilo incompatibile e non attribuisce competenze, certificazioni o valutazioni migliori. Un profilo non eleggibile per quella ricerca non entra negli spazi sponsorizzati. La sponsorizzazione non modifica gap, benchmark salariali, rating professionali, feedback o cuore aziendale.

Quando esistono più profili sponsorizzati pertinenti, si prevede una rotazione con limiti di esposizione e una regola trasparente da definire. Numero di spazi e frequenza vanno progettati per conservare visibilità ai risultati ordinari. Evitare duplicazioni della stessa scheda nella medesima pagina. Un abbonamento attivo non garantisce un numero di impressioni prima di aver definito e validato tali condizioni.

La ricerca conversazionale dell'utente continua a cercare aziende e offerte secondo le sue preferenze. Il boost riguarda invece l'esposizione del suo profilo nella ricerca delle aziende: non altera i filtri o le opportunità che il chatbot gli mostra.

## 4. Abbonamento, pagamento e scadenza

Flusso proposto: selezione del piano → riepilogo delle condizioni → pagamento in attesa → conferma verificata dal servizio di pagamento → periodo attivo → rinnovo oppure scadenza.

L'attivazione non dipende da un semplice ritorno alla pagina di successo: il server deve verificare il pagamento. Importo, valuta EUR, utente, piano e periodo devono corrispondere. Gli eventi ripetuti non duplicano periodi o vantaggi.

Proposta di rinnovo mensile: la persona può disattivare il rinnovo mantenendo il beneficio fino alla fine del periodo già pagato. Questa politica, insieme a rimborsi, pagamenti falliti e contestazioni, va consolidata prima della vendita reale. Un piano scaduto non mantiene una sponsorizzazione attiva; nessuna riduzione automatica del giudizio professionale deriva dalla disdetta.

Stati da modellare: pagamento in attesa, abbonamento attivo, rinnovo disattivato con periodo ancora valido, pagamento da regolarizzare, scaduto e annullato. La visibilità sponsorizzata ha inoltre uno stato separato attivo/sospeso/non eleggibile.

## 5. Dati, autorizzazioni e misure

Conservare identificativo del piano, prezzo/versione, valuta, account, periodo, stato del pagamento, riferimenti al fornitore e preferenza di rinnovo. Eventuali dati di carta sono gestiti dal fornitore scelto e non memorizzati dal prodotto. Le aziende vedono il badge e il profilo autorizzato, non lo storico dei pagamenti della persona.

Proposta aggiuntiva: mostrare al candidato visualizzazioni del profilo e contatti ricevuti durante il periodo sponsorizzato, distinguendo i dati realmente misurati. Questi numeri non dimostrano da soli che il boost abbia causato un'assunzione. Le statistiche non espongono dati privati di altri candidati o aziende.

## 6. Inserimento nella pipeline

La pianificazione deve includere pagina del piano e gestione abbonamento lato utente, componente sponsorizzato lato azienda, modello di dati e permessi, regole di eleggibilità/rotazione, integrazione del pagamento e verifiche.

Il prototipo può mostrare attivazione, badge, posizionamento e scadenza tramite dati e pagamenti simulati chiaramente indicati. Attivazione di addebiti reali, scelta del fornitore e pubblicazione commerciale restano fasi successive; questa revisione modifica soltanto la documentazione.

## 7. Verifiche future

- Prezzo del piano pari a 20 euro al mese e condizioni comprensibili prima dell'acquisto.
- Vantaggio visibile nei risultati aziendali con badge chiaro e criteri pertinenti rispettati.
- Profili non paganti ancora visibili nei risultati ordinari, senza modifica delle competenze o dei giudizi.
- Nessuna esposizione di profili nascosti e nessun ampliamento implicito dei permessi.
- Attivazione solo dopo conferma di pagamento valida; gestione idempotente degli eventi.
- Periodo, rinnovo, disattivazione, scadenza e visibilità sospesa coerenti.
- Nessun boost al cuore aziendale, alle recensioni o ai punteggi di compatibilità professionale.
- Errori o indisponibilità del pagamento non impediscono l'uso del percorso standard.
