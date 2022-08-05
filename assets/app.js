const numRandom1 = Math.floor(Math.random() * 10);
const numRandom2 = Math.floor(Math.random() * 10);
const quuestionEl = document.querySelector("#question");
const formEl = document.querySelector("#form");
const inputEl = document.querySelector("#input");
quuestionEl.innerText = `What is ${numRandom1} multiply by ${numRandom2}`;
const scoreEl = document.querySelector("#score");
let score = JSON.parse(localStorage.getItem("score"));
if (!score) {
  score = 0;
}
scoreEl.innerText = `Score: ${score}`;

const correctAns = numRandom1 * numRandom2;

formEl.addEventListener("submit", () => {
  const userAns = +inputEl.value;
  if (userAns === correctAns) {
    score++;
    updateLocalStorage();
  } else {
    score--;
  }
});

// lưu vào localStorage
function updateLocalStorage() {}
