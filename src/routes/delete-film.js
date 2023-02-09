const { deleteFilm } = require('../model/films');

function handleDeleteFilm(req, res) {
    const id = req.params.id;
    deleteFilm(id);
    res.redirect('/');
}

module.exports = { handleDeleteFilm };
