//cookies?
//display form to sign up, display link to home page if a user don't want to proceed with sign-in
//if an error don't redirect
const bcrypt = require('bcryptjs');

const { html, existingUser } = require('../templates/html');
const { signupLogin } = require('../templates/forms');
const { sanitize } = require('../model/sanitize-validate');
const { getUserByEmail} = require('../model/users');

const { createUser, getUserByEmail } = require('../model/users');
const { createSession } = require('../model/sessions');

function getSignUp(req, res) {
    const title = 'Create an account';
    const nav = /*html*/ `<ul>
    <li><a href='/'>Home</a><ul>`;
    const content = signupLogin('/sign-up');
    const signUpPage = html(title, nav, content);
    res.send(signUpPage);
}

function postSignUp(req, res) {
    let { email, password } = req.body;
    const user = getUserByEmail(email);
    if (user) return res.send(existingUser());
    if (!email || !password) {
        res.status(400).send('Bad input');
    } else {
        bcrypt
            .hash(password, 12)
            .then((hash) => {
                email = sanitize(email);
                const user = createUser(email, hash);
                const session_id = createSession(user.id); //returns session id
                res.cookie('sid', session_id, {
                    signed: true,
                    maxAge: 1000 * 60 * 60 * 24 * 3, // 3 days
                    sameSite: 'lax',
                    httpOnly: true,
                });

                res.status(200).redirect('/');
            })
            .catch((err) =>
                console.log(
                    'Error from hashing the password, something went wrong with bcrypt.hash',
                    err
                )
            );
    }
}

module.exports = { getSignUp, postSignUp };

//add npm run seed function in package.json
//dependency bcryptjs
