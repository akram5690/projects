let gamefolder = document.querySelector(".game-folder");
let box = document.querySelectorAll(".box");
let span = document.querySelectorAll(".play");
let win = document.querySelector(".win");
let btn = document.querySelector(".btn");

let gamebox = ["", "", "", "", "", "", "", "", ""];
let currentPlayer = "X";

let gameover = false;

let music = new Audio("button-3.wav");
let xwin = new Audio("xwin.mp3");
let owin = new Audio("owin.mp3");
// let opwin = new Audio("race-start-beeps-125125.mp3");
// let xpwin = new Audio("bomb-countdown-beeps-6868.mp3");


const checkWin = () => {
    let winConditions = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
    ];

    for (const pattern of winConditions) {
        if (
            gamebox[pattern[0]] && gamebox[pattern[0]] === gamebox[pattern[1]] && gamebox[pattern[1]] === gamebox[pattern[2]]
        ) {
            win.innerHTML = `${gamebox[pattern[0]]} win!`;
            gameover = true;

            if (gamebox[pattern[0]] === "X") {
                // opwin.play()       
                xwin.play();
            } else {
                owin.play()
                // owin.play();
                return true;
            }
        }
    }
    if (!gamebox.includes("")) {
        win.innerHTML = "It's a Draw!";
        gameover = true;
    }
    return false;
}

box.forEach((element, index) => {
    element.addEventListener("click", () => {
        if (gamebox[index] !== "" || gameover) return;
        gamebox[index] = currentPlayer;
        element.innerHTML = `<span class="play">${currentPlayer}</span>`;
        if (checkWin()) return;
        music.play();
        currentPlayer = currentPlayer === "X" ? "O" : "X";
    });
});

btn.addEventListener("click", () => {
    currentPlayer = "X";
    gamebox = ["", "", "", "", "", "", "", "", ""];
    win.textContent = "play again";
    gameover = false;
    box.forEach(e => {
        e.textContent = "";
    });
})