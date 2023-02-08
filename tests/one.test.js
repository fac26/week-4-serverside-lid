const test = require("node:test");
const assert = require("node:assert");
const { createSession, getSession } = require("../src/model/sessions");
const { createUser, getUserByEmail } = require("../src/model/users");

const { reset } = require("./helper.js");

test("createSession can create a new account", async () => {
  // clears the db
  reset();
  // create a user
  const user = createUser("dominic123@yahoo.com", "asdf");
  console.log(user, "user");
  // Retrieve User
  const { email } = getUserByEmail("dominic123@yahoo.com");
  console.log(email, "email");
  assert.match(email, /dominic123/);
  // create a session id
  const session_id = createSession(user.id);
  assert.ok(
    session_id,
    `Expected: createSession to return session id, and received "${session_id}".`
  );

  assert.ok(
    session_id.length > 12,
    `Expected: sid to be more than 12 characters, and received sid of ${session_id.length} characters.`
  );

  const session = getSession(session_id);
  assert.equal(
    session.user_id,
    user.id,
    `Expected: session stores the user's id, and received session.user_id of: ${session.user_id}`
  );
});
