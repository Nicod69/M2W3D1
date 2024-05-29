/* ESERCIZIO 1
 Scrivi una funzione chiamata "crazySum" che riceve due numeri interi come parametri.
 La funzione deve ritornare la somma di quei due valori, ma se il loro valore è lo stesso allora deve ritornare la loro somma moltiplicata per 3.
*/

function crazySum(num1, num2) {
  let sommaNumeri = num1 + num2;
  if (num1 !== num2) {
    return sommaNumeri;
  } else {
    return sommaNumeri * 3;
  }
}

console.log(crazySum(2, 2));

function crazySum2(a, b) {
  return a === b ? (a + b) * 3 : a + b;
}

console.log(crazySum2("a", "a"));

/* ESERCIZIO 2
 Scrivi una funzione chiamata "boundary", 
 che accetta un numero intero come parametro 
 e ritorna true se tale parametro è incluso tra 20 e 100 (incluso)
 o se è esattamente uguale a 400.
*/

function boundary(a) {
  if (a === 400 || (a >= 20 && a <= 100)) {
    return true;
  } else {
    return false;
  }
}

console.log(boundary(21));

function boundary2(number) {
  return (number >= 20 && number <= 100) || number === 400;
}

console.log(boundary2(400));

/* ESERCIZIO 3
 Scrivi una funzione chiamata "reverseString", 
 che accetta una stringa come parametro 
 e la ritorna invertita (es.: EPICODE => EDOCIPE).
*/

function reverseString(string) {
  return string.split("").reverse().join("");
}

console.log(reverseString("HAPPY HOUR"));

/* ESERCIZIO 4
 Scrivi una funzione chiamata "upperFirst", 
 che accetta una stringa come parametro 
 e la ritorna rendendo maiuscola ogni lettera iniziale di ogni parola.
*/

function upperFirst(stringa) {
  let parole = stringa.split(" ");
  console.log(parole);

  for (let i = 0; i < parole.length; i++) {
    parole[i] =
      parole[i].charAt(0).toUpperCase() + parole[i].slice(1).toLowerCase();
  }

  return parole.join(" ");
}

console.log(upperFirst("ciAo a TuTTi voi"));

/* ESERCIZIO 5
 Scrivi una funzione chiamata "giveMeRandom", 
 che accetta come parametro un numero chiamato n 
 e ritorna un array contenente n numeri random 
 contenuti tra 0 e 10.
*/

function giveMeRandom(n) {
  let array = [];

  for (let i = 1; i <= n; i++) {
    array.push(Math.floor(Math.random() * 11));
  }

  return array;
}

console.log(giveMeRandom(5));

//EXTRA:
/* ESERCIZIO 1
 Scrivi una funzione chiamata "area" 
 che riceve due parametri (l1, l2) 
 e calcola l'area del rettangolo associato.
*/

function area(l1, l2) {
  return l1 * l2;
}

console.log(area(23, 24));

/* ESERCIZIO 2
 Scrivi una funzione chiamata "crazyDiff" 
 che calcola la differenza assoluta 
 tra un numero fornito e 19.

 Se il valore calcolato è più grande di 19, 
 la funzione deve tornare tale risultato 
 moltiplicato per 3.
*/

function crazyDiff(number) {
  let differenzaAssoluta = Math.abs(number - 19);
  console.log(differenzaAssoluta);
  if (differenzaAssoluta > 19) {
    return differenzaAssoluta * 3;
  } else {
    return differenzaAssoluta;
  }
}

function crazyMarco(n) {
  let differenzaAssoluta = Math.abs(n - 19);
  return differenzaAssoluta > 19 ? differenzaAssoluta * 3 : differenzaAssoluta;
}

console.log(crazyDiff(19));
console.log(crazyMarco(19));

/* ESERCIZIO 3
 Scrivi una funzione chiamata "codify"
 che accetta una stringa come parametro.
 La funzione deve aggiungere la parola "code" 
 all'inizio della stringa fornita e ritornare il risultato, 
 ma se la stringa fornita comincia proprio con "code" 
 allora deve ritornarla senza modifiche.
*/

function codify(stringa) {
  if (stringa.startsWith("code")) {
    return stringa;
  } else {
    return "code" + stringa;
  }
}

console.log(codify(" di rospo"));

/* ESERCIZIO 4
 Scrivi una funzione chiamata "check3and7" 
 la quale accetta un numero intero positivo come parametro.
 La funzione deve controllare che tale parametro 
 sia un multiplo di 3 o di 7, 
 e in tal caso tornare true; 
 
 altrimenti deve tornare false.
*/

function check3and7(n) {
  if (n > 0 && Number.isInteger(n)) {
    if (n % 3 === 0 || n % 7 === 0) {
      return true;
    } else {
      return false;
    }
  } else {
    return "Il valore inserito non è positivo";
  }
}

console.log(check3and7(-2.4));

/* ESERCIZIO 5
 Scrivi una funzione chiamata "cutString", 
 che accetta una stringa come parametro 
 e la ritorna senza il primo e l'ultimo carattere.
*/

function cutString(miaStringa) {
  return miaStringa.slice(1, -1);
}

console.log(cutString("Precivitevolvissimemolmente"));
