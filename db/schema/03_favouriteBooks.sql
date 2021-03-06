DROP TABLE IF EXISTS favouritebooks CASCADE;
CREATE TABLE favouritebooks (
  id SERIAL PRIMARY KEY,
  user_id INTEGER REFERENCES users(id) ON DELETE CASCADE,
  book_id INTEGER REFERENCES books(id) ON DELETE CASCADE
);
