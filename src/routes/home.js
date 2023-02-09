const { html, navBar } = require("../templates/html");
const { renderCards } = require("../templates/film-card-template");
const { listAllFilms } = require("../model/films");

function getHomePage(req, res) {
  const title = "Favourite Movie Stills";
  console.log(listAllFilms());
  const nav = navBar(req.session); //we pass on session data once this is set up in db
  const content = renderCards(req.session, listAllFilms());
  const homePage = html(title, nav, content);
  res.send(homePage);
}

module.exports = { getHomePage };
