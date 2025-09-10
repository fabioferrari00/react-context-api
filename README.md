React Router Store

===

Consegna

Creiamo il frontend del nostro mini e-commerce e le sue pagine principali!
Useremo Fake Store API come backend fittizio per simulare i dati dei prodotti.

https://fakestoreapi.com/

Obiettivi

Installiamo React Router DOM: npm i react-router-dom
Creiamo almeno 3 pagine principali:
Homepage (con un messaggio di benvenuto o immagine promozionale)
Chi siamo
Prodotti (pagina che mostrerà la lista dei prodotti prendendoli da https://fakestoreapi.com/products)
Implementiamo una Navbar visibile in tutte le pagine per navigare tra di esse

===

Consegna 2

Completiamo il nostro routing aggiungendo la pagina di dettaglio prodotto!

Obiettivi

-Nella pagina Prodotti, ogni prodotto deve essere cliccabile (usa <Link>)
-Aggiungiamo la pagina di dettaglio per ogni prodotto, con le informazioni prese da https://fakestoreapi.com/products/:id
-Configuriamo il routing dinamico per leggere l’id del prodotto dalla URL

===

Consegna 3

MILESTONE 1

Create un nuovo context chiamato BudgetContext

Deve contenere uno stato budgetMode di tipo booleano (true/false)
Deve fornire anche la funzione per modificarlo (setBudgetMode)
Wrappiamo l’intera applicazione con il BudgetProvider

MILESTONE 2

Create un componente Navbar.jsx (se non lo avete già)

Inseritelo in App.jsx (oppure nel vostro componente di layout se avete organizzato l’app in questo modo)
All’interno della Navbar aggiungete un bottone “Modalità Budget” che attiva/disattiva budgetMode con un click
Il bottone deve cambiare etichetta in base allo stato (Attiva Modalità Budget / Disattiva Modalità Budget)

MILESTONE 3

Modificate la pagina dei prodotti:

Recuperate il valore budgetMode usando il context
Se budgetMode === true, mostrate solo i prodotti con price <= 30
Altrimenti, mostrare tutti i prodotti normalmente
