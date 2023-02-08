//this is to display all the inputted films on the homepage
function movieCardTemplate(filmsFromDB) {
    const filmUL = /*html*/ `
    <ul>${filmsFromDB.map((film) => filmTemplate(film)).join('')}</ul>
    `;
    return filmUL;
}

function filmTemplate(film) {
    const filmLI = /*html*/ `
    <li class="film">
    <p>${film.name}</p>
    <p>${film.year}</p>
    <p>${film.director}</p>
    <p>${film.image}</p>
</li>
    `;
    return filmLI;
}

module.exports = { movieCardTemplate };
