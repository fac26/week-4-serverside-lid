const { html, navBar } = require("../templates/html"); //all pages will have the navbar;
const { addFilmForm } = require("../templates/forms");

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

module.exports = { getAddFilmForm };
