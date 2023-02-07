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
function navBar(/* session */) {
  return /*html*/ `<ul class="nav-bar">
  <li><a href='/'>Home</a>
  <li><a href="/add-secret">Add new secret</a><form method="POST" action="/log-out">
  <li><button class="Button">Log out</button></form>
  </ul>`;
}

module.exports = { html, navBar };
