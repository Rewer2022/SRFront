let userScore = 0;
let computerScore = 0;

document.addEventListener("DOMContentLoaded", () => {
    const generateButton = document.getElementById("generate-button");
    const restartButton = document.getElementById("restart-button");
    const userName = document.getElementById("user");
    userName.innerText = prompt("Уведіть ім'я користувача");

    generateButton.addEventListener("click", generateNumbers);
    restartButton.addEventListener("click", restart);
});

function generateNumbers() {
    const userNumber = Math.floor(Math.random() * 10) + 1;
    const computerNumber = Math.floor(Math.random() * 10) + 1;

    document.getElementById("user-number").innerText = userNumber;
    document.getElementById("computer-number").innerText = computerNumber;

    if (userNumber > computerNumber) {
        userScore++;
        document.getElementById("result").innerText = "Користувач виграв цей раунд!";
    } else if (computerNumber > userNumber) {
        computerScore++;
        document.getElementById("result").innerText = "Комп’ютер виграв цей раунд!";
    } else {
        document.getElementById("result").innerText = "Нічия!";
    }

    document.getElementById("user-score").innerText = userScore;
    document.getElementById("computer-score").innerText = computerScore;

    if (userScore === 3 || computerScore === 3) {
        document.getElementById("result").innerText = userScore === 3 ? "Користувач виграв гру!" : "Комп’ютер виграв гру!";        
        document.getElementById("generate-button").disabled = true;
    }
}

function restart(){
    document.getElementById("generate-button").disabled = false;
    userScore = 0;
    computerScore = 0;
    document.getElementById("result").innerText = "";
    document.getElementById("user-score").innerText = 0;
    document.getElementById("computer-score").innerText = 0;
    document.getElementById("user-number").innerText = 0;
    document.getElementById("computer-number").innerText = 0;
}

document.getElementById('returnButton').addEventListener('click', () => {
    window.location.href = 'index.html';
});