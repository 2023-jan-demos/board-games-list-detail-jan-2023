/* Imports */
import { getGames } from './fetch-utils.js';
import { renderGame } from './render-utils.js';

/* Get DOM Elements */
const mainEl = document.querySelector('main');


/* State */
let gamesData = [];

/* Events */
window.addEventListener('load', async () => {
    // - talk to supabase to get all games data
    const games = await getGames();

    // - dump the data into state (good habit)
    gamesData = games;

    // - refactor into a display function (good habit)
    displayGames();
});
/* Display Functions */

// (don't forget to call any display functions you want to run on page load!)
function displayGames() {
    mainEl.textContent = '';
    // - loop through our games in state
    for (let game of gamesData) {
        //     - for each game, render a game div
        // - refactor into a render function
        const gameEl = renderGame(game);
        //  - then append that div to our HTML skeleton
        mainEl.append(gameEl);
    } 
}