function html(title, nav, content) {
  return /*html*/ `
<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8">
    <title>${title}</title>
    <link rel="stylesheet" href="/styles.css" />
  </head>
  <body>
  <header>
  <nav role="navigation" class="nav-bar">
    ${nav}
  </nav>
</header>
      <main>
        <h1>${title}</h1>
        ${content}
      </main>
    </div>
  </body>
</html>
`;
}
function navBar(session) {
  return /*html*/ `<ul class="nav-bar">
  <li><a href='/'>Home</a>
  ${
    session
      ? /*html*/ `<li><a href="/add-film">Add an image from your favourite film!</a></li>
                  <li><form method="POST" action="/log-out"><button class="Button">Log out</button></form></li>`
      : /*html*/ `<li><a href="/sign-up">Sign up</a></li>
                  <li><a href="/sign-in">log in</a></li>`
  }
  </ul>`;
}

function existingUser() {
<<<<<<< HEAD
  return /*html */ `
    <div class="home_container">
    <h1>This email already exists on our database</h1>
    <p>Please either sign up or try to log in</p>
    <div class="button_container">
    <a href="/log-in">Log in</a>
    or
    <a href="/sign-up">Sign up</a>
    </div>
    </div>
  `;
=======
  return `<span>This email already exists on our database.</span>
  <li><a href="/">Back to Homepage</a></li>`;
>>>>>>> main
}

module.exports = { html, navBar, existingUser };
