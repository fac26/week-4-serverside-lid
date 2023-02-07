PRAGMA foreign_keys = OFF;
BEGIN;

INSERT INTO authors VALUES
(1, 'J.R.R Tolkien'),
(2, 'Stephen King'),
(3, 'Arthur C. Clarke'),
(4, 'George Orwell'),
(5, 'Unknown')

ON CONFLICT DO NOTHING;

INSERT INTO genres VALUES
(1, 'Fantasy'),
(2, 'Horror'),
(3, 'Science Fiction'),
(4, 'Drama'),
(5, 'Politics')

ON CONFLICT DO NOTHING;

INSERT INTO books (name, author_id, year, genres_id) VALUES
  ('The Lord of the Rings', 1, 1955, 1),
  ('The Hobbit', 1,  1937, 1),
  ('It', 2, 1986, 2),
  ('The Stand', 2, 1978, 2),
  ('2001: A Space Oddysey', 3, 1968, 3),
  ('Rendezvous With Rama', 3, 1973, 3),
  ('1984', 4, 1948, 4),
  ('Homage to Catalonia', 4, 1938, 5)

ON CONFLICT DO NOTHING;
COMMIT;
PRAGMA foreign_keys = ON;