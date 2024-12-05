document.addEventListener("DOMContentLoaded", () => {
  const games = [
    { name: "Game 1", img: "Images/OrangeGame.png", link: "orange.html" },
    { name: "Game 2", img: "Images/Sphere.png", link: "sphere.html" },
    { name: "Game 3", img: "Images/Card.png", link: "card.html" },
    { name: "Game 4", img: "Images/Random.png", link: "random.html" }
  ];
  let currentGame = 0;

  const gameContainer = document.querySelector(".game-container");
  const playButton = document.getElementById('playGame');
  const prevButton = document.getElementById("prevGame");
  const nextButton = document.getElementById("nextGame");

  function createImageElement(src, direction) {
      const img = document.createElement("img");
      img.src = src;
      img.alt = "Game Image";
      img.className = `game-image ${direction === "left" ? "slide-left-enter" : "slide-right-enter"}`;
      gameContainer.appendChild(img);

      requestAnimationFrame(() => {
          img.classList.add("visible");
      });

      return img;
  }

  function updateGameDisplay(direction) {
      const currentImage = document.querySelector(".game-image.visible");
      if (currentImage) {
          currentImage.classList.remove("visible");
          currentImage.classList.add(direction === "left" ? "slide-left-exit" : "slide-right-exit");
          setTimeout(() => currentImage.remove(), 500);
      }

      const nextGame = games[currentGame];
      createImageElement(nextGame.img, direction);
  }

  prevButton.addEventListener("click", () => {
      currentGame = (currentGame - 1 + games.length) % games.length;
      updateGameDisplay("right");
  });

  nextButton.addEventListener("click", () => {
      currentGame = (currentGame + 1) % games.length;
      updateGameDisplay("left");
  });

  playButton.addEventListener('click', () => {
    window.location.href = games[currentGame].link;
});

  createImageElement(games[currentGame].img, "left");
});
