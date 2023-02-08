const server = require("../src/server.js");
const db = require("../database/db.js");
const { createUser, getUserByUsername } = require("../model/user");
const { getSession, createSession } = require("../model/session");
const { displayPosts } = require("../model/posts.js");

async function request(pathname, options = {}) {
  const app = server.listen(0);
  const { port } = app.address();
  const url = new URL(pathname, `http://localhost:${port}`);
  const response = await fetch(url, options);
  app.close();
  const body = await response.text();
  const headers = Object.fromEntries(response.headers);
  return { status: response.status, body, headers };
}

function get_sid(headers) {
  const [sid_cookie] = headers["set-cookie"].split(".");
  const encoded_sid = sid_cookie.replace("sid=s%3A", "");
  return decodeURIComponent(encoded_sid);
}

function reset() {
  db.exec(/*sql*/ `
    DELETE FROM posts;
    DELETE FROM sessions;
    DELETE FROM users;
    DELETE FROM sqlite_sequence WHERE name IN ('posts', 'sessions', 'users');
  `);
}

module.exports = {
  reset,
  get_sid,
  request,
  createUser,
  getUserByUsername,
  getSession,
  createSession,
  displayPosts,
};
