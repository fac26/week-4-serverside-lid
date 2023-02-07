const { sanitize, validation } = require('../model/sanitize-validate');

function signupLogin(path, errors = {}, values= {}) {
    const credentialshtml = /*html*/ `
    <div class="credentials-form">
      <form method="POST" class="Row" action="${path}">
        <div class="form-div">
          <label for="email">email</label>
          <input type="email" id="email" name="email" required
          value="${values.email ? sanitize(values.email) : ''}">
               ${validation(errors.email)}
        </div>
        <div class="form-div">
          <label for="password">password</label>
          <input type="password" id="password" name="password" required 
          value="${values.password ? sanitize(values.password) : ''}">
               ${validation(errors.password)}
        </div>
        <button class="Button" type="submit">Submit</button>
      </form>
    </div>
  `;
  return credentialshtml;
}

function addFilmForm(errors = {}, values = {}) {
  const formhtml = /*html*/ `
  <form method="POST" action="/add-film">
  <div>
    <label for="name">Film Title</label> 
    <input name="name" id="name" required value="${values.name ? sanitize(values.name) : ''}">
    ${validation(errors.name)}
  </div>
  <div>
    <label for="year">Year Released</label> 
    <input name="year" type="number" id="year" required value="${values.year ? sanitize(values.year) : ''}">
    ${validation(errors.year)}
  </div>
  <div>
    <label for="director">Director</label>
    <input name="director" id="director" required value="${values.director ? sanitize(values.director) : ''}">
    ${validation(errors.director)}
  </div>
  <div>
  <label for="image">Upload image</label>
  <input name="imagename" id="image" type="file"> 
</div>
  <button class="Button" type="Submit">Add &plus;</button>
  </form>
  `;
  return formhtml;
}

module.exports = { signupLogin, addFilmForm }

