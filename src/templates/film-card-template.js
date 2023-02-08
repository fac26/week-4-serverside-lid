const { checkCurrentUser } = require("../routes/current-user");

function filmCardsTemplate(session, filmsFromDB) {
  const filmsUL = /*html*/ `
    <ul class="films-list">${filmsFromDB
      .map((film) => filmCardTemplate(film, session))
      .join("")}</ul>
    `;
  return filmsUL;
}

function filmCardTemplate(film, session = {}) {
  const filmTemplate = /*html*/ `
        <li class="film">
        <h4>${film.name}</h4>
        <p>${film.year}</p>   
        <p>${film.director}</p> 
    `;
  if (checkCurrentUser(film, session) === false) {
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

module.exports = { filmCardsTemplate };
