let player = {
    name: "Cynthia",
    chips: 145
}
let cards = []
let sum = 0
let hasBlackJack = false
let isAlive = false
let message = ""
let messageEl = document.getElementById("message-el")
let sumEl = document.getElementById("sum-el")
let cardsEl = document.getElementById("cards-el")
let playerEl = document.getElementById("player-el")

playerEl.textContent = player.name + ": $" + player.chips

function getRandomCard() {
    let randomNumber = Math.floor(Math.random() * 13) + 1
    if (randomNumber > 10) {
        return 10
    } else if (randomNumber === 1) {
        return 11 // Aces are returned as 11
    } else {
        return randomNumber
    }
}

function updateAceValue() {
    // If the sum is over 21 and we have an Ace valued at 11, convert it to 1
    for (let i = 0; i < cards.length; i++) {
        if (cards[i] === 11 && sum > 21) {
            sum -= 10; // Convert Ace from 11 to 1
            cards[i] = 1; // Update the card value
        }
    }
}

function startGame() {
    isAlive = true
    hasBlackJack = false
    let firstCard = getRandomCard()
    let secondCard = getRandomCard()
    cards = [firstCard, secondCard]
    sum = firstCard + secondCard
    renderGame()
}

function renderGame() {
    cardsEl.innerHTML = "Cards: " 
    let suits = ['♦', '♥', '♠', '♣'];
    let suitColors = {
        '♦': 'red',
        '♥': 'red',
        '♠': 'black',
        '♣': 'black'
    };
    
    for (let i = 0; i < cards.length; i++) {
        let cardElement = document.createElement("div")
        cardElement.classList.add("card")
        
        let cardValue = cards[i] === 1 ? 'A' : cards[i] > 10 ? ['J', 'Q', 'K'][cards[i] - 11] : cards[i];
        let cardSuit = suits[Math.floor(Math.random() * suits.length)];
        let cardSuitColor = suitColors[cardSuit];
        
        cardElement.innerHTML = `
            <div class="card-value">${cardValue}</div>
            <div class="card-suit" style="color: ${cardSuitColor};">${cardSuit}</div>
        `;
        
        cardsEl.appendChild(cardElement)
    }

    updateAceValue(); // Check and adjust Ace values if needed
    
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

function newCard() {
    if (isAlive === true && hasBlackJack === false) {
        let card = getRandomCard()
        sum += card
        cards.push(card)
        renderGame()
    }
}
