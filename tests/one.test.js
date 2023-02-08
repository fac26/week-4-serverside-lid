const test = require("node:test");
const assert = require("node:assert");
const { createUser, createSession, getSession, reset } = require("./helper.js");

test("User can create a new account", async () => {
  // clears the db
  reset();
  // create a user
  const user = createUser("MrTest", "abc");
  // create a session id
  const sid = createSession(user.id);
  assert.ok(
    sid,
    `Expected: createSession to return sid, and received "${sid}".`
  );

  assert.ok(
    sid.length > 12,
    `Expected: sid to be above 12 characters, and received sid of ${sid.length} characters.`
  );

  const session = getSession(sid);
  assert.equal(
    session.user_id,
    user.id,
    `Expected: session stores the user's id, and received session.user_id of: ${session.user_id}`
  );
});
