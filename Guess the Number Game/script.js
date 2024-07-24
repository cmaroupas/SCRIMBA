const guessInput = document.getElementById("guessInput");
const guessButton = document.getElementById("guessButton");
const resultMessage = document.getElementById("resultMessage");
const attemptsMessage = document.getElementById("attemptsMessage");

const randomNumber = Math.floor(Math.random() * 100) + 1;
let attempts = 0;

guessButton.addEventListener("click", () => {
    const userGuess = Number(guessInput.value);
    attempts++;
    if (userGuess < randomNumber) {
        resultMessage.textContent = "Too low! Try again.";
    } else if (userGuess > randomNumber) {
        resultMessage.textContent = "Too high! Try again.";
    } else {
        resultMessage.textContent = `Correct! The number was ${randomNumber}.`;
        guessButton.disabled = true;
        guessInput.disabled = true;
    }
    attemptsMessage.textContent = `Attempts: ${attempts}`;
});

