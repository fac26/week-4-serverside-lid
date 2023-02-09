const { html, navBar } = require("../templates/html");
const { filmCardsTemplate } = require("../templates/film-card-template");
const Films = require("../model/films");

function getHomePage(req, res) {
  const title = "Favourite Movie Stills";
  console.log(Films.listFilms());
  const nav = navBar(req.session); //we pass on session data once this is set up in db
  const content = filmCardsTemplate(req.session, Films.listFilms());
  const homePage = html(title, nav, content);
  res.send(homePage);
}

module.exports = { getHomePage };
