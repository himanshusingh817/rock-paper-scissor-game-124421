const btnEle = document.querySelectorAll("button");

const userscoreEle = document.getElementById("user-score");
const compscoreEle = document.getElementById("comp-score");
const resultEle = document.getElementById("result");

let userscore = 0;
let compscore = 0;

btnEle.forEach((btn) => {
    btn.addEventListener("click", () => {
        const userChoice = btn.id;
        const computerChoice = compchoice(userChoice); // Pass user's choice to favor them
        const result = playround(userChoice, computerChoice);

        resultEle.textContent = result; // Display result message
    });
});

function compchoice(userChoice) {
    const choices = ["rock", "paper", "siccior"];
    const randomChance = Math.random(); 

    // Favor user by choosing a losing option for the computer most of the time
    if (randomChance < 0.2) {
        // 70% chance to favor the user
        if (userChoice === "rock") return "siccior";
        if (userChoice === "paper") return "rock";
        if (userChoice === "siccior") return "paper";
    } else {
        // 30% chance to choose randomly
        const randomchoice = Math.floor(Math.random() * choices.length);
        return choices[randomchoice];
    }
}

function playround(userselection, compselection) {
    if (userselection === compselection) {
        return "It's a tie!";
    } else if (
        (userselection === "rock" && compselection === "siccior") ||
        (userselection === "siccior" && compselection === "paper") ||
        (userselection === "paper" && compselection === "rock")
    ) {
        userscore++;
        userscoreEle.textContent = userscore; // Update user's score
        return `You win! ${userselection} beats ${compselection}`;
    } else {
        compscore++;
        compscoreEle.textContent = compscore; // Update computer's score
        return `You lose! ${compselection} beats ${userselection}`;
    }
}
// const btnEle = document.querySelectorAll("button");
// const userscoreEle = document.getElementById("user-score");
// const compscoreEle = document.getElementById("comp-score");
// const resultEle = document.getElementById("result");
// const resetBtn = document.getElementById("reset-btn"); // Reset button

// // Retrieve scores from localStorage (if available)
// let userscore = localStorage.getItem("userScore") ? parseInt(localStorage.getItem("userScore")) : 0;
// let compscore = localStorage.getItem("compScore") ? parseInt(localStorage.getItem("compScore")) : 0;

// // Display initial scores
// userscoreEle.textContent = userscore;
// compscoreEle.textContent = compscore;

// btnEle.forEach((btn) => {
//     btn.addEventListener("click", () => {
//         if (userscore < 10 && compscore < 10) { // Allow play only if no one has won yet
//             const userChoice = btn.id;
//             const computerChoice = compchoice(userChoice);
//             const result = playround(userChoice, computerChoice);

//             resultEle.textContent = result;
//             checkWinner();
//         }
//     });
// });

// function compchoice(userChoice) {
//     const choices = ["rock", "paper", "scissors"];
//     const randomChance = Math.random();

//     // 60% chance to favor the user
//     if (randomChance < 0.5) {
//         return getLosingChoice(userChoice);
//     } else {
//         return choices[Math.floor(Math.random() * choices.length)];
//     }
// }

// function getLosingChoice(userChoice) {
//     if (userChoice === "rock") return "scissors";
//     if (userChoice === "paper") return "rock";
//     if (userChoice === "scissors") return "paper";
// }

// function playround(userselection, compselection) {
//     if (userselection === compselection) {
//         return "It's a tie!";
//     } else if (isUserWinner(userselection, compselection)) {
//         userscore++;
//         userscoreEle.textContent = userscore;
//         localStorage.setItem("userScore", userscore);
//         return `You win! ${userselection} beats ${compselection}`;
//     } else {
//         compscore++;
//         compscoreEle.textContent = compscore;
//         localStorage.setItem("compScore", compscore);
//         return `You lose! ${compselection} beats ${userselection}`;
//     }
// }

// function isUserWinner(user, comp) {
//     return (
//         (user === "rock" && comp === "scissors") ||
//         (user === "scissors" && comp === "paper") ||
//         (user === "paper" && comp === "rock")
//     );
// }

// function checkWinner() {
//     if (userscore === 10) {
//         resultEle.textContent = "🎉 Congratulations! You win the game! 🎉";
//         disableButtons();
//     } else if (compscore === 10) {
//         resultEle.textContent = "😞 Game Over! The computer wins. Try again!";
//         disableButtons();
//     }
// }

// function disableButtons() {
//     btnEle.forEach((btn) => {
//         btn.disabled = true; // Disable all game buttons
//     });
// }

// resetBtn.addEventListener("click", () => {
//     userscore = 0;
//     compscore = 0;
//     userscoreEle.textContent = userscore;
//     compscoreEle.textContent = compscore;
//     localStorage.setItem("userScore", userscore);
//     localStorage.setItem("compScore", compscore);
//     resultEle.textContent = "Let's Play!";
    
//     btnEle.forEach((btn) => {
//         btn.disabled = false; // Re-enable game buttons
//     });
// });