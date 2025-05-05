// Wait for DOM to fully load
document.addEventListener("DOMContentLoaded", () => {
    // 1. Set Username Greeting
    const username = localStorage.getItem("username") || "Guest";
    const greetingEl = document.querySelector(".user-greeting h2");
    if (greetingEl) {
      greetingEl.textContent = `Hello, ${username}`;
    }
  
    // 2. Mood Emoji Buttons: log selection (optional)
    const emojiButtons = document.querySelectorAll(".emoji-buttons button");
    emojiButtons.forEach((btn) => {
      btn.addEventListener("click", () => {
        const mood = btn.textContent;
        console.log(`Mood selected: ${mood}`);
        // You could also save this to localStorage or send to server
      });
    });
  
    // 3. Feature Boxes: Add hover or active effects if needed
    const featureBoxes = document.querySelectorAll(".feature-box");
    featureBoxes.forEach((box) => {
      box.addEventListener("mouseenter", () => {
        box.style.transform = "scale(1.05)";
      });
      box.addEventListener("mouseleave", () => {
        box.style.transform = "scale(1)";
      });
    });
  });
  