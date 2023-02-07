PRAGMA foreign_keys = OFF;

BEGIN;

INSERT INTO films (id, name, year, director, genre_id) VALUES
(1, 'Star Wars', 1977, 'George Lucas', 1),
(2, 'Jaws', 1973, 'Steven Spielberg', 2),
(3, 'Schindlers List', 1993, 'Steven Spielberg', 3),
(4, 'The Lord of the Rings: The Return of the King', 2003, 'Peter Jackson', 4),
(5, 'JFK', 1991, 'Oliver Stone', 5)

ON CONFLICT DO NOTHING;

INSERT INTO genres (id, genre_name) VALUES
(1, 'Science Fiction'),
(2, 'Horror'),
(3, 'Drama'),
(4, 'Fantasy'),
(5, 'Politics')

ON CONFLICT DO NOTHING;

INSERT INTO photo (id_ photo, film_id, user_id) VALUES
(1, photo, 1, 1)
(2, photo, 2, 2)

ON CONFLICT DO NOTHING;

INSERT INTO users (id, email, hash, created_at) VALUES
(1, 'a@example.com', '$2a$12$A74tKw96m82AEZpJrIEQxecZGscKayJD/hD5/I6DuqKEJoQlAlNYO', '2023-02-07 00:00:00'),
(2, 'b@example.com', '$2a$12$o2NP8ykiki.T11qRQOCnBeX68PhwXHprM/hxHkbAfqotWo2XT.vdW', '2017-12-25 00:00:00')

ON CONFLICT DO NOTHING;

INSERT INTO sessions (id, user_id, expires_at, created_at) VALUES
(1, 1, '2023-02-15 00:00:00', '2023-02-07 00:00:00'),


COMMIT;

PRAGMA foreign_keys = ON;

INSERT INTO tables ()
