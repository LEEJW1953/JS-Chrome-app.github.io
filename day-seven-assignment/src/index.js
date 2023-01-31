const randomGame = document.querySelector("#random-game");
const rangeInput = document.querySelector("#range-input");
const guessInput = document.querySelector("#guess-input");
const randomNumber = document.querySelector("#random-number");
const gameResult = document.querySelector("#game-result");
const HIDDEN_CLASSNAME = "hidden";

function onSubmit(event) {
  event.preventDefault();
  randomNumber.classList.remove(HIDDEN_CLASSNAME);
  gameResult.classList.remove(HIDDEN_CLASSNAME);
  const rangeNum = parseInt(rangeInput.value, 10);
  const guessNum = parseInt(guessInput.value, 10);
  showResult(rangeNum, guessNum);
}

function showResult(rangeNum, guessNum) {
  const randomNum = Math.ceil(Math.random() * parseInt(rangeNum, 10));
  randomNumber.innerText = `You chose: ${guessNum},the machine chose: ${randomNum}.`;
  if (randomNum === guessNum) {
    gameResult.innerHTML = "<b>You won!</b>";
  } else {
    gameResult.innerHTML = "<b>You lost!</b>";
  }
}

randomGame.addEventListener("submit", onSubmit);
