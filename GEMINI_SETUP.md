# MESH — Collegare Gemini

Il collegamento server è implementato per ricerca conversazionale e bozza CV. **Nessuna chiave è inclusa e nessuna chiamata live è stata eseguita:** senza configurazione l’interfaccia mostra “Assistente demo”. Le prove dell’integrazione usano risposte simulate dell’API.

## Attivazione sul computer

1. Crea o recupera la chiave del tuo progetto in [Google AI Studio](https://aistudio.google.com/api-keys). Non condividerla nella chat e non inserirla in un file JavaScript del sito.
2. Nella cartella del progetto copia `.env.example` in `.env`. Compila sul tuo computer:

```dotenv
GEMINI_API_KEY=la_tua_chiave
GEMINI_MODEL=gemini-3.5-flash-lite
```

3. Arresta il server locale, se già attivo, e riavvialo:

```text
node scripts/serve-mesh.mjs
```

4. Ricarica MESH. Jobs e Resume / CV mostreranno **Gemini attivo**. Prova “Cerco un lavoro da remoto, senza weekend” e un racconto professionale inventato. La scritta indica che la chiave è configurata: la prima richiesta conferma che chiave, modello e quota funzionano effettivamente.

`.env` è escluso da Git e viene letto solo all’avvio. Dopo ogni modifica occorre riavviare il server. Non occorre installare un SDK: il server usa la API REST ufficiale. L’interfaccia non contiene un campo per memorizzare la chiave nel browser.

## Attivazione online

Il file `.env` locale non viene pubblicato. Nel sito ospitato occorre configurare separatamente `GEMINI_API_KEY` come **segreto runtime** e `GEMINI_MODEL` come configurazione del servizio Sites, quindi pubblicare con quei valori. La funzione nativa Sites per aggiornare le variabili d’ambiente è disponibile; va utilizzata tramite un passaggio sicuro della chiave, senza commetterla o mostrarla in chat. Non aggiungere valori sensibili a `.openai/hosting.json`.

## Come viene usata l’API

```text
Browser → server MESH → Gemini
                    ↘ database demo
```

- `POST /api/ai/search`: riceve messaggio, filtri correnti e pochi messaggi precedenti. Il server fornisce il catalogo pertinente, chiede JSON strutturato, valida i campi ammessi e conta soltanto offerte realmente presenti nel database. I filtri applicati rimangono visibili e modificabili. Ambiguità sul compenso richiedono chiarimenti.
- `POST /api/ai/cv`: riceve racconto e aspettative; usa informazioni professionali del profilo, escludendo nome ed email dai campi inviati automaticamente. Il testo libero è inviato così come scritto: usare dati di prova. La risposta produce una **bozza**, eventuali domande e competenze dichiarate da controllare. Il CV definitivo cambia soltanto con “Conferma e salva”.

Gemini non riceve accesso libero al database, non esegue SQL e non può pubblicare offerte, inviare messaggi o modificare valutazioni. La chiave viene inviata da server a Google nell’header `x-goog-api-key`; non viene mai restituita da bootstrap o errori.

Sono previsti timeout, validazione JSON ed enum, limiti di lunghezza, conflitti di salvataggio e limite demo di 30 richieste AI per sessione/ora. Un errore o una quota esaurita vengono comunicati: non si sostituisce di nascosto una risposta Gemini con una simulazione.

## Stipendi e gap

Le fasce visualizzate sono lette da `salary_benchmarks`, con fonte e data dimostrative. **Gemini non genera né aggiorna autonomamente medie salariali:** per dati reali servirà una fonte verificabile, un aggiornamento controllato e una distinzione fra RAL, netto, territorio e seniority.

Il confronto di competenze è disponibile per requisiti dichiarati e profilo. L’integrazione generativa per spiegare gap e suggerire risorse verificate rimane un’estensione successiva; il server non presenta corsi o opportunità inventati come reali.

## Modello, gratuità e condizioni

Il modello è configurabile. La scelta iniziale `gemini-3.5-flash-lite` segue il [catalogo ufficiale](https://ai.google.dev/gemini-api/docs/models); non presume che la chiave disponga di Gemini Pro gratuito. Se il tuo progetto non abilita quel modello, configura un modello compatibile con output JSON strutturato disponibile nel tuo account.

Quote e prezzi dipendono da modello e progetto: controlla [prezzi](https://ai.google.dev/gemini-api/docs/pricing) e [limiti](https://ai.google.dev/gemini-api/docs/rate-limits) prima di abilitarlo. La disponibilità di una quota gratuita per sviluppo non equivale a uso pubblico illimitato gratuito. Le [condizioni Gemini API](https://ai.google.dev/gemini-api/terms) richiedono Paid Services quando si rendono API client disponibili a utenti SEE, Regno Unito e Svizzera; verificare quindi il piano prima del rilascio italiano con utenti reali. Le condizioni distinguono anche il trattamento dei dati per area e tipo di servizio.

Riferimenti tecnici consultati il 23 ottobre 2026: [chiavi API](https://ai.google.dev/gemini-api/docs/api-key), [generateContent](https://ai.google.dev/api/generate-content#v1beta.GenerationConfig), [output strutturati](https://ai.google.dev/gemini-api/docs/structured-output).
