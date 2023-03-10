//cookies?
//display form to sign in, display link to home page if a user don't want to proceed with sign-in
//if an error don't redirect
const bcrypt = require("bcryptjs");

const { signupLogin } = require("../templates/forms.js");

const { html, navBar } = require("../templates/html"); //if causes an error revert to original file structure

const { getUserByEmail } = require("../model/users.js");
const { createSession } = require("../model/sessions.js");

function getSignin(request, response) {
  const title = "Sign in";
  const nav = navBar(request.session);
  const content = signupLogin("/sign-in");
  const signInPage = html(title, nav, content);
  response.send(signInPage);
}

function postSignin(request, response) {
  const { email, password } = request.body;
  const user = getUserByEmail(email); //{id.hash..}
  if (!user || !email || !password) {
    return response.status(400).send("<h1>Login Failed</h1>");
  }
  bcrypt.compare(password, user.hash).then((match) => {
    if (!match) {
      return response.status(400).send("<h1>Login Failed</h1>");
    } else {
      const session_id = createSession(user.id);
      response.cookie("sid", session_id, {
        signed: true,
        maxAge: 1000 * 60 * 60 * 24 * 3,
        sameSite: "lax",
        httpOnly: true,
      });
      console.log(session_id);
      response.redirect(`/`);
    }
  });
}

module.exports = { getSignin, postSignin };
