/*
1. Crea una funzione safeParseJSON che prende una stringa e tenta di analizzarla come JSON. 
Se l'analisi fallisce, la funzione dovrebbe restituire null invece di generare un errore. 
Inoltre, la funzione dovrebbe stampare in console se l'analisi è stata un successo o meno.
*/

/*
NOT WORKING!
const stringaJson = `["pomodori", "carne", "latte", "funghi", "cereali"]`;

const safeParseJSON = JSON.parse(stringaJson);
if (!safeParseJSON) {
  stringaJson = null;
  throw new Error(stringaJson);
  console.log("Error");
} else {
  console.log("Success");
}
*/

/*
2. Crea una funzione chiamata logElements che prende un array e stampa in console 
ogni elemento utilizzando il metodo .forEach().
*/

/*
const array = ["pomodori", "carne", "latte", "funghi", "cereali"];

const logElements = (item) => {
  console.log(item);
};

array.forEach(logElements);
*/

/*
3. Scrivi una funzione chiamata divide che prende due parametri, dividendo e divisore. 
Se il divisore è 0, genera un nuovo errore con il messaggio "Impossibile dividere per zero". 
Altrimenti, restituisci il risultato della divisione.
*/

/*
const divide = (dividendo, divisore) => {
  if (divisore === 0) {
    throw new Error("Impossibile dividere per zero");
    console.log(Error);
  } else {
    const result = dividendo / divisore;
    console.log(result);
  }
};

divide(10, 0);
*/

/*
4. Scrivi una funzione processNumbers che prende un array, convalida che contenga solo numeri e restituisce un nuovo array con ogni numero elevato al quadrato. Se un elemento dell'array non è un numero, genera un errore indicando a quale indice si trova il valore non numerico.
*/

/*
5. Scrivi una funzione mapWithIndex che prende un array e restituisce un nuovo array in cui ogni elemento è una stringa che contiene l'elemento originale e il suo indice, formattato come "Elemento [indice]: [elemento]".

6. Crea una funzione removeShortWords che prende un array di stringhe e una lunghezza minima. Dovrebbe restituire un nuovo array contenente solo le stringhe che sono più lunghe della lunghezza minima. Usa .filter() e assicurati che la funzione non tenga conto delle maiuscole e minuscole.
*/
