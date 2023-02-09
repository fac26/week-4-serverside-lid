const { checkCurrentUser } = require('../routes/current-user');
//const { filmImage } = require('../routes/add-film');


function renderCards(session, filmsFromDB) {
    const filmsUL = /*html*/ `
    <ul class="films-list">${filmsFromDB
        .map((film) => filmCardTemplate(film, session))
        .join('')}</ul>
    `;
    return filmsUL;
}

function filmCardTemplate(film, session = {}) {
    //console.log(film.image_path + 'imagepath')
    const filmTemplate = /*html*/ `
        <li class="film">
        <h4>${film.name}</h4>
        <p>${film.year}</p>   
        <p>${film.director}</p>
        <img src=${film.image_path}>
    `;
    
    if (!checkCurrentUser(film, session)) {
        return /*html*/ `
      ${filmTemplate}
  </li>
      `;
    } else {
        return /*html*/ `
    ${filmTemplate}
    ${deleteButton(film)}`;
    }
}


function deleteButton(film) {
    return /*html*/ `
    <form method="POST" action="/delete-film/${film.id}">
    <button class="Button" type="submit">Delete</button>
    </form>
    `;
}

module.exports = { renderCards };
