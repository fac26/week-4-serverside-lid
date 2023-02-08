//adding film data including pictures
//then creating a filmname.js file to filter through the films 

const db = require('../database/db');

//add film to db-user enters on the 'POST secret' page their film (including pic, director, year etc)
//the films table also accepts the user_id (to know the user signed in can add their film)

// const add_film = db.prepare(`
//     INSERT INTO films (name, year, director, genre_id)
//     VALUES (?, ?, ?, ?);

//     INSERT INTO photos (photo, film_id, user_id)
//     VALUES (?, (SELECT last_insert_rowid() FROM film), ?);
// `);

const add_film = db.prepare(`
    INSERT INTO films (name, year, director, genre_id, photo)
    VALUES (?, ?, ?, ?, ?);
`);


function addFilm(name, year, director, genre_id, photo) {
    return add_film.run({ name, year, director, genre_id, photo});
}

//you're using run instead of get because you arent returning any rows, get makes sense for displaying not inputting

const view_all_films = db.prepare(`
    SELECT
    films.id, 
    films.name,
    films.year,
    films.director,
    films.genre_id,
    photos.photo
    FROM films
    JOIN photos WHERE photos.film_id = films.id
`);

function listFilms() {
    return view_all_films.all();
}

console.log(listFilms())

module.exports = { addFilm, listFilms }