const imageArray = [
    {
        src: "./assets/assets.jpg",
        class: "rock"
    },
    {
        src: "./assets/paper.jpg",
        class: "paper"
    },
    {
        src: "./assets/scir.png",
        class: "scissor"
    }
]

const imageContainer = document.querySelector(".images");
const userChosenValue = document.querySelector(".user-value");
let result = document.querySelector(".outcome");

const displayItems = () => {
    imageArray.forEach(image => {
        const main = document.createElement("div");
        main.classList.add(`${image.class}`);
        main.innerHTML = `<img src="${image.src}" alt="${image.class}">`;
        imageContainer.appendChild(main);
        main.addEventListener("click", selectAndGenerateChoices);
    })
}

const selectAndGenerateChoices = (e) => {
    //user value first
    let chosen = e.currentTarget.className;
    imageContainer.style.pointerEvents = "none";
    chosen = chosen.charAt(0).toUpperCase() + chosen.slice(1);
    userChosenValue.innerHTML = chosen;

    //computer generated value
    let generatedValue = document.querySelector(".comp-value");
    let computerChoice = ["Rock", "Paper", "Scissor"];
    computerChoice = computerChoice[Math.floor(Math.random() * computerChoice.length)];
    generatedValue.textContent = computerChoice;
    findWinner(chosen, computerChoice);
}

const findWinner = (x, y) => {
    if (x === y) {
        result.innerHTML = "It's a draw";
    }
    if (x === "Rock" && y === "Paper") {
        result.innerHTML = "You win";
        result.style.color = "green";
    }
    if (x === "Rock" && y === "Scissor") {
        result.innerHTML = "You lose";
        result.style.color = "red";
    }
    if (x === "Paper" && y === "Scissor") {
        result.innerHTML = "You win";
        result.style.color = "green";
    }
    if (x === "Paper" && y === "Rock") {
        result.innerHTML = "You lose";
        result.style.color = "red";
    }
    if (x === "Scissor" && y === "Rock") {
        result.innerHTML = "You win";
        result.style.color = "green";
    }
    if (x === "Scissor" && y === "Paper") {
        result.innerHTML = "You lose";
        result.style.color = "red";
    }
    reload()
}

const reload = () => {
    let timer;
    timer = setInterval(reloadPage, 1000)
}

const reloadPage = () => {
    location.reload();
}
displayItems()