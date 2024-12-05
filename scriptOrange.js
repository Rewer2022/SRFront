document.addEventListener("DOMContentLoaded", () => {
    const images = [
        "ImagesOrange/apple.png",
        "ImagesOrange/pear.png",
        "ImagesOrange/lemon.png",
        "ImagesOrange/orange.png",
        "ImagesOrange/grapefruit.png"
    ];
    let rounds = 0;
    const maxRounds = 3;
    const username = prompt("Уведіть ваше ім'я:");
    document.getElementById("username").innerText = username ? `Користувач: ${username}` : "Користувач: Player";

    const generateButton = document.getElementById("generate-button");
    const restartButton = document.getElementById("restart-button");
    const result = document.getElementById("result");
    const roundInfo = document.getElementById("round-info");

    const outcomeImage = document.createElement("img");
    outcomeImage.classList.add("outcome-image");
    outcomeImage.style.display = "none";
    result.after(outcomeImage);

    function getRandomImage(exclude = []) {
        let availableImages = images.filter(img => !exclude.includes(img));
        return availableImages[Math.floor(Math.random() * availableImages.length)];
    }

    function spinReels() {
        if (rounds <= maxRounds) {
            const reelElements = [
                document.querySelectorAll("#reel1 img"),
                document.querySelectorAll("#reel2 img"),
                document.querySelectorAll("#reel3 img")
            ];

            reelElements.forEach(reel => {
                let usedImages = [];
                reel.forEach(img => {
                    const randomImage = getRandomImage(usedImages);
                    img.src = randomImage;
                    usedImages.push(randomImage);
                });
            });

            rounds++;
            outcomeImage.style.display = "none";

            let reelFirstChesk = reelElements[0][0].src === reelElements[1][0].src && reelElements[1][0].src === reelElements[2][0].src;
            let reelSecondChesk = reelElements[0][1].src === reelElements[1][1].src && reelElements[1][1].src === reelElements[2][1].src;
            let reelThirdChesk = reelElements[0][2].src === reelElements[1][2].src && reelElements[1][2].src === reelElements[2][2].src;

            if (reelFirstChesk || reelSecondChesk || reelThirdChesk) {
                result.innerText = "Ви виграли! 🎉";
                result.style.color = "#00FF00";
                generateButton.disabled = true;

                outcomeImage.src = "ImagesOrange/orange-win.png";
                outcomeImage.style.display = "block";
            } else {
                result.innerText = "Спробуйте ще раз!";
                result.style.color = "#da0808";

                if (rounds >= maxRounds) {
                    generateButton.disabled = true;
                    result.innerText = "Гра завершена!";

                    outcomeImage.src = "ImagesOrange/orange-lose.png";
                    outcomeImage.style.display = "block";
                }
            }

            roundInfo.innerText = `Спроба ${rounds} з ${maxRounds}`;
        }
    }

    function restartGame() {
        rounds = 0;
        result.innerText = "";
        roundInfo.innerText = `Спроба ${rounds} з ${maxRounds}`;
        generateButton.disabled = false;
        outcomeImage.style.display = "none";

        document.querySelectorAll(".reel img").forEach(img => img.src = "ImagesOrange/orange.png");
    }

    generateButton.addEventListener("click", spinReels);
    restartButton.addEventListener("click", restartGame);
});

document.getElementById('returnButton').addEventListener('click', () => {
    window.location.href = 'index.html';
});