# MESH — Database dimostrativo

Il database è reale; i contenuti relativi a offerte e persone sono inventati. Non occorrono account per esplorare i ruoli demo.

## Dove vengono salvati i dati

- **Sul computer:** SQLite, creato automaticamente in `.mesh-data/mesh-demo.sqlite` avviando `node scripts/serve-mesh.mjs` con Node.js 24. Il file, i suoi file ausiliari e le chiavi sono esclusi da Git.
- **Sul sito ospitato:** Cloudflare D1 con binding `DB`, dichiarato in `.openai/hosting.json`. Il servizio Sites applica le migrazioni e collega il database alla pubblicazione.
- I due database sono separati: una modifica sul computer non modifica l’anteprima online.

## Struttura implementata

| Tabella | Contenuto |
| --- | --- |
| `companies` | Sei aziende con nome reale, link ufficiale e scheda dimostrativa |
| `offers` | Otto offerte iniziali, collegate alle aziende |
| `candidates` | Quattro profili interamente inventati |
| `salary_benchmarks` | Fasce dimostrative con valuta, unità, territorio, data, fonte e indicazione di simulazione |
| `demo_workspaces` | Snapshot della sessione: profilo, bozza CV, candidature, messaggi, offerte create, calendario, feedback e impostazioni |
| `ai_usage` | Conteggio orario delle richieste Gemini, senza testo delle conversazioni |

I cataloghi sono relazionali; per consentire di provare liberamente entrambi i ruoli, i dati operativi di ciascuna demo sono conservati in uno snapshot JSON versionato. Questo è un compromesso esplicito per il prototipo. Nella versione con utenti reali candidature, messaggi, rapporti e valutazioni saranno entità separate con autorizzazioni per ruolo.

Le offerte create dall’utente entrano nello snapshot della sua sessione e sono visibili nella ricerca della stessa sessione. Non diventano annunci pubblici di un’azienda reale. Il ripristino modifica soltanto il proprio snapshot.

## Sessione e salvataggio

`GET /api/bootstrap` carica il catalogo SQL e crea una sessione demo con cookie casuale `HttpOnly`, `SameSite=Strict` e `Secure` su HTTPS. La sessione dura 30 giorni nel browser. Il server non restituisce il suo identificativo nel JSON. Ogni browser riceve un archivio distinto; candidato e azienda sono due viste dello stesso scenario, non due account autenticati.

`PUT /api/state` salva lo snapshot con controllo di revisione. Se due schede salvano sulla stessa revisione, la seconda riceve un conflitto e deve ricaricare: una modifica non sovrascrive silenziosamente l’altra. L’interfaccia distingue collegamento, salvataggio in corso, salvataggio riuscito ed errore.

Il browser mantiene una cache di recupero. Se il server è indisponibile, MESH mostra **Offline** e non presenta il salvataggio locale come un salvataggio nel database. La cache offline non viene importata automaticamente in un archivio server già esistente. Non sono previsti sincronizzazione tra dispositivi o recupero dopo cancellazione dei cookie finché non verrà introdotta l’identità applicativa.

## Aziende e verosimiglianza

I nomi Accenture, IBM, Enel, IKEA, Leonardo e DHL sono reali. Le iniziali grafiche sono elementi dell’interfaccia MESH, non riproduzioni di loghi ufficiali. Nessuna delle aziende è presentata come partner.

Ruoli, località degli annunci, retribuzioni, percorsi di crescita, benefit, tempi di risposta, organico del campione e apprezzamenti sono **simulati**. Il campione di 18–46 persone non è l’organico reale dei gruppi. Le valutazioni non descrivono esperienze di dipendenti effettivi.

Fonti consultate per nomi e settori: [Accenture](https://www.accenture.com/it-it), [IBM](https://www.ibm.com/it-it), [Enel](https://www.enel.com/), [IKEA](https://www.ikea.com/it/it/), [Leonardo](https://www.leonardo.com/it/), [DHL](https://www.dhl.com/it-it/home.html).

## Migrazioni e verifica

Schema in `drizzle/0000_mesh_demo.sql`; metadati in `drizzle/meta/_journal.json`. Le migrazioni contengono soltanto lo schema. Il seed è in `mesh/data.js` e viene inserito dal server con query parametrizzate e operazioni idempotenti. Le migrazioni applicate non vanno riscritte.

```text
node --test tests/mesh-api.test.mjs
node scripts/prepare-mesh.mjs
node scripts/validate-mesh.mjs
```

I controlli verificano persistenza su riapertura SQLite, isolamento delle sessioni, conflitti, dati malformati, ricerca, limiti AI e bozza CV. Non costituiscono una certificazione di anonimato o sicurezza per l’uso con dati reali. Nella demo usare informazioni di prova.
