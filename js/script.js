// -------------------------VARIABILI-------------------------
var bombs;
var attempts;
var stopCycle;
var bombsNumber;
var minBombs;
var maxBombs;
var maxAttempts;
var cycleTurn;
var choiceControl;
var difficultyLevel = document.getElementById("difficulty-level");
var bombsArray = document.getElementById("bombs-array");
var userArray = document.getElementById("user-array");
var result = document.getElementById("result");
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

function arrayGeneratorWithoutRepetition (array, elementNumber, min, max) {

    while (array.length < elementNumber) {
        var number = (randomNumber(min, max))

        if (!isInArray(number, array)) {
            array.push(number);
        }

    }
    return array;

}

function playMinefield (bombsNumber, minBombs, maxBombs, maxAttempts) {

    bombs = [];
    attempts = [];
    stopCycle = false;
    cycleTurn = 0;
    choiceControl = "";
    bombsArray.innerHTML = "";
    userArray.innerHTML = "";
    result.innerHTML = "";

    bombs = arrayGeneratorWithoutRepetition (bombs, bombsNumber, minBombs, maxBombs);
    bombsArray.innerHTML = bombs;


    while (attempts.length < maxAttempts && stopCycle == false) {
        var choice = parseInt(prompt("Choose a number from " + minBombs + " to " + maxBombs + ", please. Your choices are = [" + choiceControl + "]"))

        if (isNaN(choice) || choice < minBombs || choice > maxBombs) {
            alert("Error! The selected number is invalid.");
        } else if (isInArray(choice, bombs)) {
            result.innerHTML = "YOU LOST... Your final score is " + attempts.length + "<br> <img src=\"img/smile-2.png\" alt=\"Image Smile\">";
            stopCycle = true;
        } else if (!isInArray(choice, attempts)) {
            attempts.push(choice);
            choiceControl += (attempts[cycleTurn]) + ", ";
            cycleTurn++
        } else {
            alert("You have already chosen this number. Please enter a new number.");
        }

    }
    if (attempts.length == maxAttempts) {
        result.innerHTML = "YOU WON! Your final score is " + attempts.length + "<br> <img src=\"img/smile-1.png\" alt=\"Image Smile\">";
    }
    userArray.innerHTML = attempts;

}
// -------------------------/FUNZIONI-------------------------

// GIOCO
function easy () {

    difficultyLevel.innerHTML = "Easy";
    playMinefield (16, 1, 100, 84);

}

function normal() {

    difficultyLevel.innerHTML = "Normal";
    playMinefield (16, 1, 80, 64);

}

function hard() {

    difficultyLevel.innerHTML = "Hard";
    playMinefield (16, 1, 50, 34);

}
// /GIOCO

/* GIOCO CON SWITCH CASE
var difficultyLevel = prompt("Enter the difficulty level = \"Easy\", \"Normal\", \"Hard\".");

switch (difficultyLevel) {

    case "Easy":
        difficultyLevel.innerHTML = "Easy";
        playMinefield (16, 1, 100, 84);
        break;

    case "Normal":
        difficultyLevel.innerHTML = "Normal";
        playMinefield (16, 1, 80, 64);
        break;

    case "Hard":
        difficultyLevel.innerHTML = "Hard";
        playMinefield (16, 1, 50, 34);
        break;

    default:
        alert("The entered level is invalid.");
}
 /GIOCO CON SWITCH CASE */