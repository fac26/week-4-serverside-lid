const express = require("express");
const cookieParser = require("cookie-parser");
// const multer = require("multer");
const cookies = cookieParser(process.env.COOKIE_SECRET); //process.env.COOKIE_SECRET
const bodyParser = express.urlencoded({ extended: false });

const staticHandler = express.static("public");

const { getHomePage } = require("./routes/home");
const { getSignUp, postSignUp } = require("./routes/sign-up");
const { getSignin, postSignin } = require("./routes/log-in");

const { getSession, removeSession } = require("./model/sessions"); //getSession(sid), removeSession(sid);
const { getAddFilmForm, postAddFilmForm } = require("./routes/add-film");
const { postSignOut } = require("./routes/log-out");
// const db = require("./database/db");

const server = express();

// const storage = multer.diskStorage({
//   destination: function (req, file, cb) {
//     cb(null, './uploads/');
//   },
//   filename: function (req, file, cb) {
//     cb(null, file.fieldname + '-' + Date.now());
//   }
// });

// const upload = multer({ storage: storage });

// server.post('/add-film', upload.single('image'), (req, res) => {
//   const insertFilm = db.prepare(`
//     INSERT INTO films (title, image)
//     VALUES (?, ?)
//   `);
//   insertFilm.run(req.body.title, req.file.path);

//   res.send('Film added to database!');
// });


server.use(staticHandler);
server.use(cookies);
server.use(sessions);

server.get("/", getHomePage);

// add sign-up callback function
server.get("/sign-up", confirmLogin, getSignUp); //html page
server.post("/sign-up", bodyParser, postSignUp);

// add sign-in callback function
server.get("/sign-in", getSignin);
server.post("/sign-in", bodyParser, postSignin);

server.get("/add-film", confirmLoggedOut, getAddFilmForm);

// add log-out callback function
server.post("/log-out", postSignOut);

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

function confirmLogin(req, res, next) {
  const isLoggedIn = req.session;
  if (isLoggedIn) {
    return res.redirect("/");
  }
  next();
}

//middle ware to be added to add-film route
function confirmLoggedOut(req, res, next) {
  const isLoggedIn = req.session;
  if (!isLoggedIn) {
    res.redirect("/");
  }
  next();
}

module.exports = server;
