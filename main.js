//--------------------------------------------------------
//-----------ESERCIZI 16/11 ----------(sotto ci sono quelli del 17/11)
//--------------------------------------------------------

/*
1. Crea una funzione safeParseJSON che prende una stringa e tenta di analizzarla come JSON. 
Se l'analisi fallisce, la funzione dovrebbe restituire null invece di generare un errore. 
Inoltre, la funzione dovrebbe stampare in console se l'analisi è stata un successo o meno.
*/

/*
const safeParseJSON = (stringa) => {
  try {
    const obj = JSON.parse(stringa);
    console.log("Analisi riuscita");
    return obj;
  } catch (error) {
    console.warn("Analisi non riuscita");
    return null;
  }
};

const stringaJson = `{
  "name": "tizio",
  "age": 21
}`;

const result = safeParseJSON(stringaJson);
console.log(result);
*/

/*
2. Crea una funzione chiamata logElements che prende un array e stampa in console 
ogni elemento utilizzando il metodo .forEach().
*/

/*
const array = [1, 2, 3, 4, 5, 6];

const logElements = (array) => {
  array.forEach((elem) => {
    console.log(elem);
  });
  console.log(item);
};

logElements(array);
*/

/*
3. Scrivi una funzione chiamata divide che prende due parametri, dividendo e divisore. 
Se il divisore è 0, genera un nuovo errore con il messaggio "Impossibile dividere per zero". 
Altrimenti, restituisci il risultato della divisione.
*/

/*
const divide = (dividendo, divisore) => {
  try {
    if (divisore === 0) {
      throw new Error("Impossibile dividere per zero");
    }
    return dividendo / divisore;
  } catch (error) {
    console.error(error);
    return null;
  }
};

const test = divide(10, 0);
console.log(test);
*/

/*
4. Scrivi una funzione processNumbers che prende un array, 
convalida che contenga solo numeri e restituisce un nuovo array 
con ogni numero elevato al quadrato. Se un elemento dell'array non è un numero, 
genera un errore indicando a quale indice si trova il valore non numerico.
*/

/*
const processNumbers = (array) => {
  array.forEach((elem, i) => {
    const verisonNum = Number(elem);

    if (typeof verisonNum !== "number" || isNaN(verisonNum)) {
      throw new Error(`The element at index ${i} is not a number`);
    }
  });

  const squareNumbers = array.map((n) => n ** 2);
  return squareNumbers;
};

const numbers = [23, 5, 6, 75, 3, "piero", 3, 0];
const test = processNumbers(numbers);
console.log(test);
*/

/*
5. Scrivi una funzione mapWithIndex che prende un array e restituisce 
un nuovo array in cui ogni elemento è una stringa che contiene l'elemento 
originale e il suo indice, formattato come "Elemento [indice]: [elemento]".
*/

/*
const mapWithIndex = (array) => {
  const newArray = array.map((element, i) => `Element [${i}]: ${element}`);
  return newArray;
};

console.log(mapWithIndex([20, 55, 34]));
*/

/*
6. Crea una funzione removeShortWords che prende un array di stringhe e 
una lunghezza minima. Dovrebbe restituire un nuovo array contenente solo 
le stringhe che sono più lunghe della lunghezza minima. Usa .filter().
*/

/*
const removeShortWords = (array, minLength) => {
  const filteredArray = array.filter((stringa) => stringa.length > minLength);
  return filteredArray;
};

const testArray = ["verde", "giallo", "seg", "gesargheq"];
const risultato = removeShortWords(testArray, 4);
console.log(risultato);
*/

//--------------------------------------------------------
//-----------ESERCIZI 17/11 ------------------------------
//--------------------------------------------------------

/*
1. Ordina e Visualizza Film

   JSON di partenza: `[
    { id: 1, title: "Inception", year: 2010 }, 
   { id: 2, title: "The Matrix", year: 1999 }, 
   { id: 3, title: "Interstellar", year: 2014 }
  ]`

   - Esercizio: Crea una funzione `displaySortedFilms` che prende un array 
   di film e li ordina per anno di uscita in ordine crescente. La funzione 
   dovrebbe poi creare e aggiungere un elenco di elementi `<li>` al DOM, 
   ognuno contenente il titolo del film e l'anno di uscita.
*/

/*
const movies = [
  { id: 1, title: "Inception", year: 2010 },
  { id: 2, title: "The Matrix", year: 1999 },
  { id: 3, title: "Interstellar", year: 2014 },
  { id: 4, title: "Thrix", year: 1979 },
];

window.addEventListener("load", () => {
  const displaySortedFilms = movies.sort((a, b) => {
    return a.year - b.year;
  });

  const body = document.body;
  const ul = document.createElement("ul");
  body.appendChild(ul);
  movies.forEach((movie) => {
    const li = document.createElement("li");
    li.innerText = `${movie.title}, ${movie.year}`;
    ul.appendChild(li);
  });
});
*/

/*
2. Crea una Lista di Libri Raccomandati
   - JSON di partenza: `[{ id: 1, title: "1984", author: "George Orwell", rating: 4.5 }, { id: 2, title: "The Hobbit", author: "J.R.R. Tolkien", rating: 4.7 }, { id: 3, title: "Brave New World", author: "Aldous Huxley", rating: 4.2 }]`
   - Esercizio: Scrivi una funzione `listRecommendedBooks` che prende 
   un array di libri e un punteggio minimo. La funzione dovrebbe filtrare 
   i libri con un rating superiore o uguale al punteggio minimo, ordinarli 
   per rating in ordine decrescente e creare una lista ordinata `<ol>` nel 
   DOM con i titoli e gli autori dei libri raccomandati.
*/

/*
const libri = [
  { id: 1, title: "1984", author: "George Orwell", rating: 4.5 },
  { id: 2, title: "The Hobbit", author: "J.R.R. Tolkien", rating: 4.7 },
  { id: 3, title: "Brave New World", author: "Aldous Huxley", rating: 4.2 },
  { id: 4, title: "Brave New World", author: "Aldous Huxley", rating: 5.2 },
];

window.addEventListener("load", () => {
  const listRecommendedBooks = (listaLibri, punteggioMin) => {
    const filtro = listaLibri.filter((numero) => numero.rating >= punteggioMin);

    const ordina = filtro.sort((a, b) => {
      if (a.rating > b.rating) {
        return -1;
      } else {
        return 1;
      }
    });

    const body = document.body;
    const ol = document.createElement("ol");
    body.appendChild(ol);
    ordina.forEach((libro) => {
      const li = document.createElement("li");
      li.innerText = `${libro.title}, ${libro.author}`;
      ol.appendChild(li);
    });
  };

  listRecommendedBooks(libri, 4.5);
});
*/

/*
3. Elenco Utenti Ordinati per Età
   - JSON di partenza: `[{ id: 1, name: "Alice", age: 30 }, { id: 2, name: "Bob", age: 24 }, { id: 3, name: "Charlie", age: 28 }]`
   
   - Esercizio: Implementa una funzione `displayUsersByAge`
    che prende un array di utenti e li ordina per età in ordine crescente. 
    La funzione dovrebbe poi creare una tabella nel DOM con le righe che 
    rappresentano gli utenti, mostrando il nome e l'età.
*/

/*
const persone = [
  { id: 1, name: "Alice", age: 30 },
  { id: 2, name: "Bob", age: 24 },
  { id: 3, name: "Charlie", age: 28 },
];

window.addEventListener("load", () => {
  const displayUsersByAge = persone.sort((a, b) => {
    if (a.age < b.age) {
      return -1;
    } else {
      return 1;
    }
  });

  const body = document.body;
  const table = document.createElement("table");
  body.appendChild(table);

  table.innerHTML += `<tr><th>NAME</th><th>AGE</th></tr>`;

  displayUsersByAge.forEach((persona) => {
    const tr = document.createElement("tr");
    tr.innerHTML = `<td>${persona.name}</td>`;
    tr.innerHTML += `<td>${persona.age}</td>`;
    table.appendChild(tr);
  });
});
*/

/*
   4. Filtro e Ordinamento di Prodotti
   - JSON di partenza: `[{ id: 1, name: "Laptop", price: 999.99 }, { id: 2, name: "Smartphone", price: 599.99 }, { id: 3, name: "Tablet", price: 399.99 }]`
   
   - Esercizio: Crea una funzione `filterAndSortProducts` che prende un 
   array di prodotti e un prezzo massimo. La funzione dovrebbe filtrare 
   i prodotti che hanno un prezzo inferiore o uguale al prezzo massimo, 
   ordinarli per prezzo in ordine crescente e visualizzare i risultati in
   una lista `<ul>` nel DOM, mostrando il nome e il prezzo di ciascun prodotto.
*/

/*
const productList = [
  { id: 1, name: "Laptop", price: 999.99 },
  { id: 2, name: "Smartphone", price: 599.99 },
  { id: 3, name: "Tablet", price: 399.99 },
  { id: 4, name: "Hadphones", price: 499.99 },
];

window.addEventListener("load", () => {
  const filterAndSortProducts = (products, maxPrice) => {
    const filteredList = productList.filter(
      (product) => product.price <= maxPrice
    );

    const orderedList = filteredList.sort((a, b) => {
      if (a.price < b.price) {
        return -1;
      } else {
        return 1;
      }
    });

    console.log(orderedList);

    const body = document.body;
    const ul = document.createElement("ul");
    body.appendChild(ul);
    orderedList.forEach((product) => {
      const li = document.createElement("li");
      li.innerText = `${product.name}, ${product.price}`;
      ul.appendChild(li);
    });
  };

  filterAndSortProducts(productList, 600);
});
*/

/*
5. Genera un Elenco di Punti di Interesse
   - JSON di partenza: `[{ id: 1, name: "Eiffel Tower", location: "Paris", visited: true }, { id: 2, name: "Colosseum", location: "Rome", visited: false }, { id: 3, name: "Statue of Liberty", location: "New York", visited: true }]`
  
   - Esercizio: Scrivi una funzione `createPOIList` che prende un array 
   di punti di interesse (POI) e genera un elenco nel DOM. I POI dovrebbero 
   essere ordinati alfabeticamente per nome e ogni elemento dell'elenco 
   dovrebbe includere il nome del POI e la sua posizione. Aggiungi una classe 
   CSS `visited` agli elementi che rappresentano i POI già visitati.
*/

const POI = [
  { id: 1, name: "Eiffel Tower", location: "Paris", visited: true },
  { id: 2, name: "Colosseum", location: "Rome", visited: false },
  { id: 3, name: "Statue of Liberty", location: "New York", visited: true },
];

window.addEventListener("load", () => {
  const createPOIList = (points) => {
    const orderedPOI = POI.sort((point1, point2) => {
      if (point1.name > point2.name) {
        return 1;
      } else {
        return -1;
      }
    });

    const addVisitedClass = console.log(orderedPOI);

    const body = document.body;
    const ul = document.createElement("ul");
    body.appendChild(ul);

    orderedPOI.forEach((point) => {
      const li = document.createElement("li");

      if (point.visited === true) {
        li.className = "visited";
      }
      li.innerText = `${point.name}, ${point.location}`;
      ul.appendChild(li);
    });
  };

  createPOIList(POI);
});

/*
   6. Classifica e Mostra Risultati di Gare
   - JSON di partenza: `[{ id: 1, name: "John Doe", time: "00:23:15" }, { id: 2, name: "Jane Smith", time: "00:22:05" }, { id: 3, name: "Emily Davis", time: "00:25:30" }]`
   - Esercizio: Implementa una funzione `displayRaceResults` che prende un array di risultati di gare e li ordina in base al tempo di completamento (dal più veloce al più lento). La funzione dovrebbe poi creare una lista `<ul>` nel DOM, dove ogni elemento `<li>` mostra il nome del partecipante e il suo tempo di gara.
*/
