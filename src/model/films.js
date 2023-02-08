//adding film data including pictures
//then creating a filmname.js file to filter through the films

const db = require("../database/db");

//add film to db-user enters on the 'POST secret' page their film (including pic, director, year etc)
//the films table also accepts the user_id (to know the user signed in can add their film)

const add_film = db.prepare(`
    INSERT INTO films (name, year, director, genre_id)
    VALUES ($name, $year, $director, $genre_id);
`);

//so when the user fills in the add film form:
//name, year, director and genre_id (from drop down box) are added into the film table from user input
//that will automatically generate a new id from the film table because a new row is added (from autoincrement)
//and then the photos table will create a new row of the new image added along with the last inserted row id
//which is the most recent/last added row id of the film added in the films table
//so if i added my 5th film called 'hunger games', and added two pictures:
//a new row is created in the film table that shows: [5, 'hunger games', 2012, Gary Ross, Science Fiction]
//then two new rows is created in the photos table that shows [1, 'katniss.png', 5, 1], [2, 'peta.png', 5, 1] (first user so user_id is 1)

function addFilm(name, year, director, genre_id) {
  return add_film.run({ name, year, director, genre_id });
}
//you're using run instead of get because you arent returning any rows, get makes sense for displaying not inputting

const view_all_films = db.prepare(`
    SELECT
    films.id,
    films.name,
    films.year,
    films.director,
    films.genre_id
    FROM films
`);

function listFilms() {
  return view_all_films.all();
}

console.log(listFilms());

module.exports = { addFilm, listFilms };
