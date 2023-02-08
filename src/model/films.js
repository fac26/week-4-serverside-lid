const db = require("../database/db");

const view_all_films = db.prepare(`
    SELECT
    id, 
    name,
    year,
    director,
    genre_id,
    image_path,
    user_id
    FROM films
`);

function listAllFilms() {
    return view_all_films.all();
}

const get_films = db.prepare(/*sql*/ `
   SELECT 
     id,
     name, 
     year,
     director,
     genre_id,
     image_path,
     user_id
   FROM films 
   WHERE user_id = ?
`);

function getFilmsbyUser(user_id) {
  return get_films.all(user_id);
}

const add_film = db.prepare(/*sql*/ `
  INSERT INTO films (name, year, director, genre_id, image_path, user_id)
  VALUES ($name, $year, $director, $genre_id, $image_path, $user_id)
  `);

function addFilm(name, year, director, genre_id, image_path, user_id) {
  return add_film.run({name, year, director, genre_id, image_path, user_id})
}


module.exports = { listAllFilms, getFilmsbyUser, addFilm };

