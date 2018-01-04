
var letterChoices = ['a', 'b', 'c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']

var wins = 0;
var losses = 0;
var guesses = 9;
var guessesLeft = 9;
var guessedLetters = [];
var letterToGuess = null;

var computerGuess = letterChoices [Math.floor(Math.random()*letterChoices.length)];

var updateGuessesLeft = function() {
    document.getElementById('guessNo').innerHTML = guessesLeft;
};


var updateletterToGuess = function(){
    this.letterToGuess = this.letterChoices[Math.floor(Math.random() * this.letterChoices.length)];
    console.log(letterToGuess)
};

var updateGuessesSoFar = function(){
    document.getElementById('guesses').innerHTML = guessedLetters.join(', ');
};


var reset = function(){
    totalGuesses = 9;
    guessesLeft = 9;
    guessedLetters = [];

   updateletterToGuess();
    updateGuessesSoFar();
    updateGuessesLeft();

};

updateGuessesLeft();
updateletterToGuess();


document.onkeyup = function(event) {
    guessesLeft--;
    var userGuess = event.key;
    console.log(userGuess)

   guessedLetters.push(userGuess);
    updateGuessesLeft();
    updateGuessesSoFar();

       if (guessesLeft > 0){
            if (userGuess == letterToGuess){
                wins++;
                document.getElementById('winNo').innerHTML = wins;
                alert("How did you know!?!");
                reset();
            }
        } else if (guessesLeft == 0){
            losses++;
            document.getElementById('lossNo').innerHTML = losses;
            alert("Sorry, you're not a psychic!");

           reset();
        }
}