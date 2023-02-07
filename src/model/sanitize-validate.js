const { getUserByEmail } = require("../model/users.js");
const { createSession } = require("../model/sessions.js");
const { email } = require("../model/log-in.js");

function sanitize(unsafe) {
  return unsafe.replace(/</g, "&lt;");
}

function validation(email, response) {
  const user = getUserByEmail(email); //{id.hash..}
  if (user) {
    return response.status(400).send("<h1>This email already exists</h1>");
  } else {
    createSession;
  }
}

module.exports = { sanitize, validation };
