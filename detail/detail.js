import { getGameById } from '../fetch-utils.js';

const mainEl = document.querySelector('main');

let gameData = {};

window.addEventListener('load', async () => {
    // load one game
    const data = new URLSearchParams(window.location.search);
    const id = data.get('id');

    const game = await getGameById(id);

    // we should render out the game all pretty-like with its designer, but i'll jut use an ugly string to prove that we have the data
    mainEl.append(JSON.stringify(game));
});