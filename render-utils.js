export function renderGame(game) {
    const gameEl = document.createElement('a');
    const nameEl = document.createElement('p');
    const categoryEl = document.createElement('p');

    nameEl.textContent = game.name;
    categoryEl.textContent = game.category;

    gameEl.href = `./detail/?id=${game.id}`;
    gameEl.classList.add('game');
    gameEl.append(nameEl, categoryEl);

    return gameEl;
}