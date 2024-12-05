let userScore = 0;
let computerScore = 0;
let rounds = 0;
const maxRounds = 3;

const cards = [
    { name: "6", value: 6, image: "ImagesCard/6.png" },
    { name: "7", value: 7, image: "ImagesCard/7.png" },
    { name: "8", value: 8, image: "ImagesCard/8.png" },
    { name: "9", value: 9, image: "ImagesCard/9.png" },
    { name: "10", value: 10, image: "ImagesCard/10.png" },
    { name: "Валет", value: 2, image: "ImagesCard/jack.png" },
    { name: "Дама", value: 3, image: "ImagesCard/queen.png" },
    { name: "Король", value: 4, image: "ImagesCard/king.png" },
    { name: "Туз", value: 11, image: "ImagesCard/ace.png" }
];

document.addEventListener("DOMContentLoaded", () => {
    const generateButton = document.getElementById("generate-button");
    const restartButton = document.getElementById("restart-button");
    const userName = document.getElementById("user");
    userName.innerText = prompt("Уведіть ім'я користувача");

    generateButton.addEventListener("click", generateCards);
    restartButton.addEventListener("click", restart);
});

function generateCards() {
    if (rounds < maxRounds) {
        rounds++;

        const userCard = cards[Math.floor(Math.random() * cards.length)];
        const computerCard = cards[Math.floor(Math.random() * cards.length)];

        document.getElementById("user-card").src = userCard.image;
        document.getElementById("computer-card").src = computerCard.image;

        userScore += userCard.value;
        computerScore += computerCard.value;

        document.getElementById("user-score").innerText = userScore;
        document.getElementById("computer-score").innerText = computerScore;

        document.getElementById("result").innerText = `Спроба ${rounds} з ${maxRounds}`;

        if (rounds === maxRounds) {
            if (userScore > computerScore) {
                document.getElementById("result").innerText = "Користувач виграв гру!";
            } else if (computerScore > userScore) {
                document.getElementById("result").innerText = "Комп’ютер виграв гру!";
            } else {
                document.getElementById("result").innerText = "Гра закінчилася внічию!";
            }

            document.getElementById("generate-button").disabled = true;
        }
    }
}

function restart(){
    document.getElementById("generate-button").disabled = false;
    userScore = 0;
    computerScore = 0;
    rounds = 0;
    document.getElementById("result").innerText = "";
    document.getElementById("user-score").innerText = 0;
    document.getElementById("computer-score").innerText = 0;
    document.getElementById("user-card").src = "ImagesCard/ace.png";
    document.getElementById("computer-card").src = "ImagesCard/ace.png";
}

document.getElementById('returnButton').addEventListener('click', () => {
    window.location.href = 'index.html';
});
