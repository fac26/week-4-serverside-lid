PRAGMA foreign_keys = OFF;

BEGIN;

INSERT INTO films VALUES
(1, 'Star Wars', 1977, 'George Lucas', 1),
(2, 'The Exorcist', 1973, 'William Friedkin', 2),
(3, 'Schindlers List', 1993, 'Steven Spielberg', 3),
(4, 'The Lord of the Rings: The Return of the King', 2003, 'Peter Jackson', 4),
(5, 'JFK', 1991, 'Oliver Stone', 5)

ON CONFLICT DO NOTHING;

INSERT INTO genres VALUES
(1, 'Science Fiction'),
(2, 'Horror'),
(3, 'Drama'),
(4, 'Fantasy'),
(5, 'Politics')

ON CONFLICT DO NOTHING;

INSERT INTO photo () VALUES

ON CONFLICT DO NOTHING;



COMMIT;

PRAGMA foreign_keys = ON;