// games.js

// Get references to search input and game list
const searchInput = document.getElementById('gameSearch');
const gameList = document.getElementById('gameList');
const gameItems = gameList.getElementsByClassName('game-item');

// Listen for input changes in the search bar
searchInput.addEventListener('input', function () {
    const searchTerm = searchInput.value.toLowerCase();

    // Loop through each game item and check if it matches the search term
    Array.from(gameItems).forEach(function (item) {
        const gameName = item.textContent.toLowerCase();

        // Toggle visibility based on whether the search term is present in the game name
        if (gameName.includes(searchTerm)) {
            item.style.display = 'block'; // Show matching games
        } else {
            item.style.display = 'none'; // Hide non-matching games
        }
    });
});
