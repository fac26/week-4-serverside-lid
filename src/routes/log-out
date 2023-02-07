const { removeSession } = require("../model/sessions");

function postSignOut(request, response) {
  const session_id = request.signedCookies.sid;
  removeSession(session_id);
  response.clearCookie("sid");
  response.redirect("/");
}

module.exports = { postSignOut };
