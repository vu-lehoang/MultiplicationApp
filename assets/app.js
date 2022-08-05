const quuestionEl = document.querySelector("#question");
const formEl = document.querySelector("#form");
const inputEl = document.querySelector("#input");
const scoreEl = document.querySelector("#score");
let score = 0;

var numRandom1 = Math.floor(Math.random() * 10);
var numRandom2 = Math.floor(Math.random() * 10);
quuestionEl.innerText = `What is ${numRandom1} multiply by ${numRandom2}`;
let correctAns = numRandom1 * numRandom2;

formEl.addEventListener("submit", async function (e) {
  e.preventDefault(); // ngặn chặn load form
  const userAns = +inputEl.value;

  if (userAns === correctAns) {
    score++;
    var numRandom1 = Math.floor(Math.random() * 10);
    var numRandom2 = Math.floor(Math.random() * 10);
    correctAns = numRandom1 * numRandom2;
    inputEl.value = "";
    quuestionEl.innerText = `What is ${numRandom1} multiply by ${numRandom2}`;
  } else {
    score = 0;
    inputEl.value = "Answer's wrong";
    setTimeout(() => {
      inputEl.value = "";
    }, 1000);
  }
  scoreEl.innerText = `Score: ${score}`;
  return correctAns;
});
