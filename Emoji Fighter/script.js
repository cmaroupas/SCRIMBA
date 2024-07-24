let fighters = [
    "🐉", "🐥", "🐊", "🦍", "🐢", "🦀", "🐝", "🤖", "🐘", "🐸", "🦕", "🦁", "🦒", "🦓", "🦖", "🦄", 
    "🦩", "🦔", "🦚", "🦉", "🦇", "🦘", "🦨", "🐆", "🐅", "🦌", "🦏", "🦢", 
];

let stageEl = document.getElementById("stage");
let fightButton = document.getElementById("fightButton");

fightButton.addEventListener("click", function () {
    
    fightButton.disabled = true;

    
    stageEl.classList.add("animate", "shake");
    setTimeout(() => {
        stageEl.classList.remove("animate", "shake");
    }, 500);

    
    let fighter1Index = Math.floor(Math.random() * fighters.length);
    let fighter2Index;
    do {
        fighter2Index = Math.floor(Math.random() * fighters.length);
    } while (fighter2Index === fighter1Index);

    let fighter1 = fighters[fighter1Index];
    let fighter2 = fighters[fighter2Index];

   
    stageEl.textContent = `${fighter1} vs ${fighter2}`;

    
    let countdown = 3;
    let countdownInterval = setInterval(() => {
        stageEl.textContent = `${fighter1} vs ${fighter2} - ${countdown}`;
        countdown--;
        if (countdown < 0) {
            clearInterval(countdownInterval);

           
            let winner = Math.random() < 0.5 ? fighter1 : fighter2;
            stageEl.textContent = `${fighter1} vs ${fighter2} - Winner: ${winner}`;

            
            fightButton.disabled = false;
        }
    }, 1000); 
});
