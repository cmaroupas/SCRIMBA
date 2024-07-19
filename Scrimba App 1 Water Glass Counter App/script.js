// Get elements from the HTML
let saveEl = document.getElementById("save-el")
let countEl = document.getElementById("count-el")

// Initialize count to 0
let count = 0

// Function to increase the count
function increment() {
    count += 1 // Add 1 to count
    countEl.textContent = count // Update the count display
}

// Function to save the count and reset
function save() {
    let countStr = count + " - " // Create a string with the count
    saveEl.textContent += countStr // Add the string to saved counts
    countEl.textContent = 0 // Reset the count display to 0
    count = 0 
}
