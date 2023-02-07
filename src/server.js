const express = require("express");
const cookieParser = require("cookie-parser");
const cookies = cookieParser(process.env.COOKIE_SECRET); //process.env.COOKIE_SECRET
const bodyParser = express.urlencoded({ extended: false });

const staticHandler = express.static("public");

const { getHomePage } = require("./routes/home");
const { getSignUp, postSignUp } = require("./routes/sign-up");
const { getSignin, postSignin } = require("./routes/log-in");
const { getSession, removeSession } = require("./model/sessions"); //getSession(sid), removeSession(sid);

const server = express();

server.use(staticHandler);
server.use(cookies);
server.use(sessions);

server.get("/", getHomePage);

// add sign-up callback function
server.get("/sign-up", getSignUp); //html page
server.post("/sign-up", bodyParser, postSignUp);

// add sign-in callback function
server.get("/sign-in", getSignin);
server.post("/sign-in", bodyParser, postSignin);
server.post("/log-out", bodyParser, postSignin);

function sessions(req, res, next) {
  const sid = req.signedCookies.sid; //undefined if there is not a sid
  const session = getSession(sid); //undefined if there is no session
  if (session) {
    const expiry = new Date(session.expires_at);
    const today = new Date();
    if (expiry < today) {
      removeSession(sid);
      res.clearCookie("sid");
    } else {
      req.session = session;
    }
  }
  next();
}

module.exports = server;
