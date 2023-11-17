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

const removeShortWords = (array, minLength) => {
  const filteredArray = array.filter((stringa) => stringa.length > minLength);
  return filteredArray;
};

const testArray = ["verde", "giallo", "seg", "gesargheq"];
const risultato = removeShortWords(testArray, 4);
console.log(risultato);
