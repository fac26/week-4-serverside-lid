const { html, navBar } = require("../templates/html");
const { filmCardsTemplate } = require("../templates/film-card-template");
const { listFilms } = require("../model/films");

function getHomePage(req, res) {
  const title = "Favourite Movie Stills";
  const movieStillsArray = listFilms();
  const nav = navBar(req.session); //we pass on session data once this is set up in db
  const content = filmCardsTemplate(req.session, movieStillsArray);
  const homePage = html(title, nav, content);
  res.send(homePage);
}

module.exports = { getHomePage };
