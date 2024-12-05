const answers = ["Yes", "No", "Maybe"];

document.addEventListener('DOMContentLoaded', createMagicBall()) 

function createMagicBall(){
    const body = document.body;

    const container = document.createElement('div');
    container.classList.add("container");

    const questionLabel = document.createElement('p');
    questionLabel.classList.add("questionLabel");
    questionLabel.innerText = "Чи буде завтра сонячно?";
    container.appendChild(questionLabel);

    const ballContainer = document.createElement('div');
    ballContainer.classList.add("magicBallContainer");

    const ballImage = document.createElement('img');
    ballImage.src = "Images\\Sphere.png";
    ballImage.alt = "Магічна куля";
    ballContainer.appendChild(ballImage);

    const ballText = document.createElement('div');
    ballText.classList.add("magicBallText");
    ballContainer.appendChild(ballText);

    const returnButton = document.createElement('button');
    returnButton.classList.add("return-button");
    returnButton.innerText = "Return";
    container.appendChild(returnButton);

    container.appendChild(ballContainer);
    body.appendChild(container);

    returnButton.addEventListener('click', function () {
        window.location.href = 'index.html';
    });

    ballContainer.addEventListener('click', function(){
        const randomAnswer = answers[Math.floor(Math.random() * answers.length)];
        ballText.innerText = randomAnswer;
    });
}