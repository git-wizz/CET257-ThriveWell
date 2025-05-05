const colors = ["Red", "Blue", "Green", "Yellow", "Orange", "Purple"];
let targetColor = "";
const targetColorEl = document.getElementById("targetColor");
const colorButtonsEl = document.querySelector(".color-buttons");
const feedbackEl = document.getElementById("feedback");
const nextBtn = document.getElementById("nextBtn");

function pickTargetColor() {
  targetColor = colors[Math.floor(Math.random() * colors.length)];
  targetColorEl.textContent = targetColor;
}

function renderButtons() {
  colorButtonsEl.innerHTML = "";
  const shuffledColors = [...colors].sort(() => 0.5 - Math.random());

  shuffledColors.forEach(color => {
    const btn = document.createElement("button");
    btn.textContent = "";
    btn.style.backgroundColor = color.toLowerCase();
    btn.className = "color-btn";
    btn.addEventListener("click", () => checkAnswer(color));
    colorButtonsEl.appendChild(btn);
  });
}

function checkAnswer(selectedColor) {
  if (selectedColor === targetColor) {
    feedbackEl.textContent = "✅ Correct!";
    feedbackEl.style.color = "green";
  } else {
    feedbackEl.textContent = "❌ Try again.";
    feedbackEl.style.color = "red";
  }
}

nextBtn.addEventListener("click", () => {
  pickTargetColor();
  renderButtons();
  feedbackEl.textContent = "";
});

window.onload = () => {
  pickTargetColor();
  renderButtons();
};
