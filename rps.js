let playerA;
let playerB;

function shu () {

    pA = Math.floor(Math.random() * 3) + 1;

    if (pA === 1) {
        playerA = "rock";
    } else if (pA === 2) {
        playerA = "paper";
    } else if (pA === 3) {
        playerA = "scissors";
    }
    console.log(`Player A: ${playerA}`);

    pB = Math.floor(Math.random() * 3) + 1;
    
    if (pB === 1) {
        playerB = "rock"; 
    } else if (pB === 2) {
        playerB = "paper";
    } else if (pB === 3) {
        playerB = "scissors"
    }
    console.log(`Player B: ${playerB}`);

    var outputElement = document.getElementById("output");
    outputElement.innerHTML = `Player A: ${playerA}<br>Player B: ${playerB}`;
}


function rps (playerA,playerB) {
    if (playerA === "rock" && playerB === "rock" || playerA === "paper" && playerB === "paper" || playerA === "scissors" && playerB === "scissors") {
        result = "It's draw."
    } else if ((playerA === "rock" && playerB === "scissors") || (playerA === "paper" && playerB === "rock") || (playerA === "scissors" && playerB === "paper")) {
        result = "The winner is A"
    } else if ((playerB === "rock" && playerA === "scissors") || (playerB === "paper" && playerA === "rock") || (playerB === "scissors" && playerA === "paper")) {
        result = "The winner is B"
    }

    var printElement = document.getElementById("print");
    printElement.innerHTML = `Result: ${result}`;
}



const shuffleButton = document.querySelector("button");

function handleShuffle() {
    shu();
    rps(playerA, playerB);
}

shuffleButton.addEventListener("click",handleShuffle);