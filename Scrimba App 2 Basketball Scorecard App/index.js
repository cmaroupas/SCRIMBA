// Home Counter
let homeScoreEl = document.getElementById("home-score"); // Find where to show the home team's score
let homeScore = 0; // Start with zero points for the home team

function homeAddOne() { // When a button is clicked, add 1 point for the home team
    homeScore += 1; // Increase the home team's score by 1
    homeScoreEl.textContent = homeScore; // Show the new score on the screen
}

function homeAddTwo() { // When another button is clicked, add 2 points for the home team
    homeScore += 2; // Increase the home team's score by 2
    homeScoreEl.textContent = homeScore; // Show the new score on the screen
}

function homeAddThree() { // When a different button is clicked, add 3 points for the home team
    homeScore += 3; // Increase the home team's score by 3
    homeScoreEl.textContent = homeScore; // Show the new score on the screen
}

// Guest Counter
let guestScoreEl = document.getElementById("guest-score"); // Find where to show the guest team's score
let guestScore = 0; // Start with zero points for the guest team

function guestAddOne() { // When a button is clicked, add 1 point for the guest team
    guestScore += 1; // Increase the guest team's score by 1
    guestScoreEl.textContent = guestScore; // Show the new score on the screen
}

function guestAddTwo() { // When another button is clicked, add 2 points for the guest team
    guestScore += 2; // Increase the guest team's score by 2
    guestScoreEl.textContent = guestScore; // Show the new score on the screen
}

function guestAddThree() { // When a different button is clicked, add 3 points for the guest team
    guestScore += 3; // Increase the guest team's score by 3
    guestScoreEl.textContent = guestScore; // Show the new score on the screen
}

// Clear Score
function reset() { // When a special button is clicked, reset both teams' scores to zero
    homeScore = 0; // Set the home team's score back to zero
    guestScore = 0; // Set the guest team's score back to zero
    homeScoreEl.textContent = homeScore; // Show the new score (zero) for the home team
    guestScoreEl.textContent = guestScore; // Show the new score (zero) for the guest team
}
