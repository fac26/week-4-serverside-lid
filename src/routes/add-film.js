const { html, navBar } = require("../templates/html"); //all pages will have the navbar;
const { addFilmForm } = require("../templates/forms");
const { addFilm } = require("../model/films");
const { getSession } = require("../model/sessions");

//for get req-diplay form for user to add new secret
function getAddFilmForm(req, res) {
  if (!req.session) {
    return res.status(404).send(`page is only for signed users`);
  }
  const title = "Add your film!";
  const content = addFilmForm();
  const nav = navBar(req.session);
  const body = html(title, nav, content); 
  res.send(body);
}

//adding post /add-film so handleaddfilm
//stretch-are we validating image upload too? to check its only image not a file
function postAddFilmForm(req, res) {
  let { name, year, director, genre_id, image } = req.body;
  const errors = {};
  if (!name) {
    errors.name = 'Please add film name';
  }
  if (!year) {
    errors.year = 'Please add film year';
  }
  if (!director) {
    errors.director = 'Please add the name of director';
  }
  if (Object.keys(errors).length > 0) {
    const title = 'Add your film!';
    const content = addFilmForm(errors); 
    const nav = navBar(req.session);
    const body = html(title, nav, content); 
    res.send(body);
} else {
    const DBsession = getSession(req.session.id);
    addFilm(name, year, director, 1, image, DBsession.user_id)
    res.redirect(`/`);
}
}


module.exports = { getAddFilmForm, postAddFilmForm };
