const { html, navBar } = require("../templates/html"); //all pages will have the navbar;
const { addFilmForm } = require("../templates/forms");
const { addFilm } = require("../model/films");
const { getSession } = require("../model/sessions");
<<<<<<< HEAD
=======

>>>>>>> main

//for get req-diplay form for user to add new secret
function getAddFilmForm(req, res) {
  if (!req.session) {
    return res.status(404).send(`page is only for signed users`);
  }
  const title = "Add your film!";
  const content = addFilmForm();
  const nav = navBar(req.session);
<<<<<<< HEAD
  const body = html(title, nav, content);
=======
  const body = html(title, nav, content); 
  // const filmsList = getFilms(DBsession);
>>>>>>> main
  res.send(body);
}

//adding post /add-film so handleaddfilm
//stretch-are we validating image upload too? to check its only image not a file
function postAddFilmForm(req, res) {
<<<<<<< HEAD
  let { name, year, director, genre_id } = req.body;
=======
  let { name, year, director, genre_id, file } = req.body;
>>>>>>> main
  const errors = {};
  if (!name) {
    errors.name = "Please add film name";
  }
  if (!year) {
    errors.year = "Please add film year";
  }
  if (!director) {
    errors.director = "Please add the name of director";
  }
  if (Object.keys(errors).length > 0) {
    const title = "Add your film!";
    const content = addFilmForm(errors);
    const nav = navBar(req.session);
    const body = html(title, nav, content);
    res.send(body);
<<<<<<< HEAD
  } else {
    const DBsession = getSession(req.session.id);
    addFilm(name, year, director, 1, DBsession.user_id);
=======
} else {
    const filmImage = req.file.path.replace("public", "..");
    console.log(filmImage);
    const DBsession = getSession(req.session.id);
    addFilm(name, year, director, 1, filmImage, DBsession.user_id)
>>>>>>> main
    res.redirect(`/`);
  }
}
<<<<<<< HEAD
=======
}
>>>>>>> main

module.exports = { getAddFilmForm, postAddFilmForm };
