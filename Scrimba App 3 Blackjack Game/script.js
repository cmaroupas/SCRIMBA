// Player object with name and starting chips
let player = {
    name: "Cynthia",
    chips: 145
}

// Variables to keep track of game state
let cards = []
let sum = 0
let hasBlackJack = false
let isAlive = false
let message = ""

// Get references to the HTML elements that we'll update
let messageEl = document.getElementById("message-el")
let sumEl = document.getElementById("sum-el")
let cardsEl = document.getElementById("cards-el")
let playerEl = document.getElementById("player-el")

// Display player info (name and chips) at the top of the page
playerEl.textContent = player.name + ": $" + player.chips

// Function to get a random card value
// Face cards are worth 10, Aces are 11
function getRandomCard() {
    let randomNumber = Math.floor(Math.random() * 13) + 1
    if (randomNumber > 10) {
        return 10 // Face cards (J, Q, K) are all worth 10
    } else if (randomNumber === 1) {
        return 11 // Ace is worth 11
    } else {
        return randomNumber // Number cards are worth their face value
    }
}

// Adjust the value of Aces if the total goes over 21
function updateAceValue() {
    for (let i = 0; i < cards.length; i++) {
        if (cards[i] === 11 && sum > 21) {
            sum -= 10   // Change Ace from 11 to 1
            cards[i] = 1 // Update the card value in the array
        }
    }
}

// Start a new game by setting up the initial cards and sum
function startGame() {
    isAlive = true
    hasBlackJack = false
    let firstCard = getRandomCard()
    let secondCard = getRandomCard()
    cards = [firstCard, secondCard]
    sum = firstCard + secondCard
    renderGame()
}

// Update the page with the current cards, sum, and message
function renderGame() {
    // Clear out the old cards and display the new ones
    cardsEl.innerHTML = "Cards: " 
    let suits = ['♦', '♥', '♠', '♣']
    let suitColors = {
        '♦': 'red',
        '♥': 'red',
        '♠': 'black',
        '♣': 'black'
    }
    
    // Show each card
    for (let i = 0; i < cards.length; i++) {
        let cardElement = document.createElement("div")
        cardElement.classList.add("card")
        
        // Determine card value and suit
        let cardValue = cards[i] === 1 ? 'A' :
                        cards[i] > 10 ? ['J', 'Q', 'K'][cards[i] - 11] :
                        cards[i]
        let cardSuit = suits[Math.floor(Math.random() * suits.length)]
        let cardSuitColor = suitColors[cardSuit]
        
        // Create HTML for the card and add it to the page
        cardElement.innerHTML = `
            <div class="card-value">${cardValue}</div>
            <div class="card-suit" style="color: ${cardSuitColor};">${cardSuit}</div>
        `
        cardsEl.appendChild(cardElement)
    }

    // Adjust Ace values if needed
    updateAceValue() 
    
    // Update the sum and show the appropriate message
    sumEl.textContent = "Sum: " + sum
    if (sum <= 20) {
        message = "Do you want to draw a new card?"
    } else if (sum === 21) {
        message = "You've got Blackjack!"
        hasBlackJack = true
    } else {
        message = "You're out of the game!"
        isAlive = false
    }
    messageEl.textContent = message
}

// Draw a new card if the game is still active and hasn't been won
function newCard() {
    if (isAlive === true && hasBlackJack === false) {
        let card = getRandomCard()
        sum += card
        cards.push(card)
        renderGame()
    }
}
