const { html, navBar } = require('../templates/html');
// const { movieCardTemplate } = require('../templates/movie-templates');
// const {stillsFromDB} = require('../model/images');

function getHomePage(req, res) {
    const title = 'Favourite Movie Stills';
    //const movieStillsArray = stillsFromDB.listStills();
    const nav = navBar(req.session); //we pass on session data once this is set up in db
    const content = 'Movie images go here once setup';
    //const content = movieCardTemplate(req.session, movieStillsArray);
    const homePage = html(title, nav, content);
    res.send(homePage);
}

module.exports = { getHomePage };
