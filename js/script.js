/*
Il computer deve generare 16 numeri casuali tra 1 e 100.
I numeri non possono essere duplicati.
In seguito deve chiedere all'utente (100 - 16) volte di inserire un numero alla volta, sempre compreso tra 1 e 100.
L'utente non può inserire più volte lo stesso numero.
Se il numero è presente nella lista dei numeri generati, la partita termina, altrimenti si continua chiedendo all'utente un altro numero.
La partita termina quando il giocatore inserisce un numero "vietato" o raggiunge il numero massimo possibile di numeri consentiti.
Al termine della partita il software deve comunicare il punteggio, cioè il numero di volte che l'utente ha inserito un numero consentito.

all'inizio il software richiede anche una difficoltà all'utente che cambia il range di numeri casuali:
con difficoltà 0 => tra 1 e 100
con difficoltà 1 => tra 1 e 80
con difficoltà 2 => tra 1 e 50
*/

// -------------------------VARIABILI-------------------------
var bombs = [];
var attempts = [];
var bombsNumber = 16;
var minBombs = 1;
var maxBombs = 100;
var maxAttempts = 84;
// -------------------------/VARIABILI------------------------

// -------------------------FUNZIONI--------------------------
function randomNumber (min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

function isInArray (number, array) {

    for (i = 0; i < array.length; i++) {
        if (number == array[i]) {
            return true;
        }
    }
    return false;

}

function bombsGenerator (array, bombsNumber, min, max) {

    while (array.length < bombsNumber) {
        var number = (randomNumber(min, max))

        if (!isInArray(number, array)) {
            array.push(number);
        }

    }

    return array;

}

// -------------------------/FUNZIONI-------------------------

// GIOCO
var bombs = bombsGenerator (bombs, bombsNumber, minBombs, maxBombs);
console.log("Array Bombs", bombs);


// /GIOCO