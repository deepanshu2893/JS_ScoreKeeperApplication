const p1Button = document.querySelector("#p1Button");
const p2Button = document.querySelector("#p2Button");
const p1Display = document.querySelector("#p1Display");
const p2Display = document.querySelector("#p2Display");
const resetButton = document.querySelector("#reset");
const playTo = document.querySelector("#playTo");

let p1Score = 0;
let p2Score = 0;
let winningScore = 3;
let isGameOver = false;

p1Button.addEventListener("click", function () {
    if (!isGameOver) {
        p1Score += 1;
        if (p1Score === winningScore) {
            isGameOver = true;
            p1Display.classList.add("has-text-success");
            p2Display.classList.add("has-text-danger");
            p1Button.disabled = true;
            p2Button.disabled = true;
        }
        p1Display.innerText = p1Score;
    }
});

p2Button.addEventListener("click", function () {
    if (!isGameOver) {
        p2Score += 1;
        if (p2Score === winningScore) {
            isGameOver = true;
            p2Display.classList.add("has-text-success");
            p1Display.classList.add("has-text-danger");
            p1Button.disabled = true;
            p2Button.disabled = true;
        }
        p2Display.innerText = p2Score;
    }
});

resetButton.addEventListener("click", resetEverything)

playTo.addEventListener("change", function () {
    winningScore = parseInt(this.value);
    resetEverything();
});

function resetEverything() {
    p1Score = 0;
    p2Score = 0;
    p1Display.innerText = p1Score;
    p2Display.innerText = p2Score;
    isGameOver = false;
    p1Display.classList.remove("has-text-success", "has-text-danger");
    p2Display.classList.remove("has-text-success", "has-text-danger");
    p1Button.disabled = false;
    p2Button.disbaled = false;

}

