const { sanitize } = require("../src/routes/sign-up.js")

function signupLogin(path, errors = {}, values= {}) {
    const credentialshtml = /*html*/ `
    <div class="credentials-form">
      <form method="POST" class="Row" action="${path}">
        <div class="form-div">
          <label for="email">email</label>
          <input type="email" id="email" name="email" required
          value="${values.email ? sanitize(values.email) : ''}">
               ${validation(errors.email)}>
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

function validation(message) {
    if (message) {
        return `<span style="color: red">${message}</span>`;
    } else {
        return '';
    }
}
module.exports = { signupLogin }
