function computerChoice () {
var random = Math.floor(Math.random() * (letterList.length));
var  randomLetter= letterList[random];
console.log(randomLetter)
return randomLetter;
}

// all variables 
var letterList = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

var wins = 0;
var losses = 0;
var remaining = 9;
var yourGuess = [];
var message = [];


var computerLetter = computerChoice();

document.getElementById('wins').innerHTML = wins;
document.getElementById('losses').innerHTML = losses;
document.getElementById('guesses').innerHTML = remaining;
document.getElementById('yourGuess').innerHTML = yourGuess;
document.getElementById('message').innerHTML = message;


//main function for game
document.onkeypress = function(event) {
  var userChoice = String.fromCharCode(event.keyCode).toLowerCase();

    if (userChoice == computerLetter){
      Wins++;
      document.getElementById('wins').innerHTML = wins;
      document.getElementById("currentGuess").innerHTML = 'Nice! You must be psychic!' + userChoice + ' is the correct letter!';
      computerLetter = computerChoice();
      document.getElementById('guesses').innerHTML = (remaining = 9);
        }
    else {
        remaining--;
        document.getElementById('guesses').innerHTML = remaining;
        document.getElementById("yourGuess").innerHTML = userChoice;
        document.getElementById("message").innerHTML = 'Opps! You have ' + remaining + ' guesses left!';

        if (remaining < 1) {
            losses++;
            document.getElementById('losses').innerHTML = losses;
            document.getElementById('currentGuess').innerHTML = "You have run out of guesses!<br /> A new letter has been generated. Try again!"
            computerLetter = computerChoice();
            document.getElementById('guesses').innerHTML = (remaining = 9);
            }
        }
    } 