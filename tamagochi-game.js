// tamagotchi-game.js

// Initialize variables
let health = 100; // Health bar value (hunger)
let happiness = 100; // Happiness bar value
let dirtiness = 0; // Dirtiness bar value
let timer = 0; // Timer in seconds
let petStatus = document.getElementById('petStatus');
let healthBar = document.getElementById('healthBar');
let happinessBar = document.getElementById('happinessBar');
let dirtinessBar = document.getElementById('dirtinessBar');
let timerDisplay = document.getElementById('timer');

// Function to start the game (initialize timer and intervals)
function startGame() {
    setInterval(updateGame, 1000); // Update the game every second
    setInterval(updateTimer, 1000); // Update timer every second
}

// Function to update the timer every second
function updateTimer() {
    timer++;
    let minutes = Math.floor(timer / 60);
    let seconds = timer % 60;
    timerDisplay.textContent = `Time: ${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
}

// Function to update the game (pet's needs)
function updateGame() {
    health -= 1; // Decrease health/hunger over time
    happiness -= 1; // Decrease happiness over time
    dirtiness += 2; // Increase dirtiness over time

    // Update the status bars
    healthBar.value = health;
    happinessBar.value = happiness;
    dirtinessBar.value = dirtiness;

    // Update pet status based on health, happiness, and dirtiness
    if (health <= 0) {
        petStatus.textContent = 'Your Tamagotchi is starving!';
    } else if (happiness <= 0) {
        petStatus.textContent = 'Your Tamagotchi is very sad!';
    } else if (dirtiness >= 100) {
        petStatus.textContent = 'Your Tamagotchi is very dirty!';
    } else {
        petStatus.textContent = 'Tamagotchi is happy!';
    }

    // Prevent values from going out of bounds
    if (health < 0) health = 0;
    if (happiness < 0) happiness = 0;
    if (dirtiness > 100) dirtiness = 100;
}

// Function to feed the Tamagotchi
function feedPet() {
    if (health < 100) {
        health += 10; // Increase health/hunger
        petStatus.textContent = 'Tamagotchi is eating!';
    }
}

// Function to play with the Tamagotchi
function playWithPet() {
    if (happiness < 100) {
        happiness += 15; // Increase happiness
        petStatus.textContent = 'Tamagotchi is playing!';
    }
}

// Function to clean the Tamagotchi
function cleanPet() {
    if (dirtiness > 0) {
        dirtiness -= 20; // Decrease dirtiness
        petStatus.textContent = 'Tamagotchi is clean!';
    }
}

// Set up event listeners for the buttons
document.getElementById('feedButton').addEventListener('click', feedPet);
document.getElementById('playButton').addEventListener('click', playWithPet);
document.getElementById('cleanButton').addEventListener('click', cleanPet);

// Start the game when the page loads
window.onload = startGame;