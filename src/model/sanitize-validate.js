const { email } = require("../routes/log-in.js");
console.log(email);

function sanitize(unsafe) {
  return unsafe.replace(/</g, "&lt;");
}

function validation(message) {
  if (message) {
    return `<span style="color: red">${message}</span>`;
  } else {
    return "";
  }
}

// function emailDuplicationCheck(request, response) {
//   let email = request.body.email;
//   const emailExists = getUserByEmail(email) || null; //{id.hash..}
//   if (emailExists) {
//     return response.status(400).send("<h1>This email already exists</h1>");
//   } else {
//     createSession;
//   }
// }

module.exports = { sanitize, validation };
