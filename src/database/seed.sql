PRAGMA foreign_keys = OFF;

BEGIN;

INSERT INTO users (id, email, hash, created_at) VALUES
(1, 'a@example.com', '$2a$12$A74tKw96m82AEZpJrIEQxecZGscKayJD/hD5/I6DuqKEJoQlAlNYO', '2023-02-07 00:00:00'),
(2, 'b@example.com', '$2a$12$o2NP8ykiki.T11qRQOCnBeX68PhwXHprM/hxHkbAfqotWo2XT.vdW', '2017-12-25 00:00:00'),
(3, 'c@example.com', '$2a$12$o2NP8ykiki.T11qRQOCnBeX68PhwXHprM/hxHkbAfqotWo2XT.vdW', '2017-12-25 00:00:00'),
(4, 'd@example.com', '$2a$12$8HIQ9kqN0brBUfDigfSfB.9BlSsICw4LQ/tiw4U/zMW5QWtuTqMG6', '2017-12-25 00:00:00'),
(5, 'e@example.com', '$2a$12$vpUb03L0WVHMfrHducL2SumogekzuPfh9Ych0Il8Zkt5Baqch7QZq', '2017-12-25 00:00:00')

ON CONFLICT DO NOTHING;

INSERT INTO films (id, name, year, director, genre_id, image_path, user_id) VALUES
  (1, 'Star Wars', 1977, 'George Lucas', 1, '../uploads/starwars.webp',1),
  (2, 'Jaws', 1973, 'Steven Spielberg', 2, '../uploads/jaws.jpeg',2),
  (3, 'Schindlers List', 1993, 'Steven Spielberg',2,'../uploads/ss.webp',3),
  (4, 'The Lord of the Rings: The Return of the King', 2003, 'Peter Jackson', 2,'../uploads/lotr.jpeg',4),
  (5, 'JFK', 1991, 'Oliver Stone',2,'../uploads/jfk.jpeg',5)

ON CONFLICT DO NOTHING;

COMMIT;

INSERT INTO genres (id, genre_name) VALUES
(1, 'Science Fiction'),
(2, 'Horror'),
(3, 'Drama'),
(4, 'Fantasy'),
(5, 'Politics')

ON CONFLICT DO NOTHING;

PRAGMA foreign_keys = ON;