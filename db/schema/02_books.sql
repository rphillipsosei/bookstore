DROP TABLE IF EXISTS books CASCADE;

CREATE TABLE books (
    id SERIAL PRIMARY KEY NOT NULL,
    user_id INTEGER REFERENCES users(id) ON DELETE CASCADE,
    title VARCHAR(255) NOT NULL,
    author VARCHAR(255) NOT NULL,
    genre VARCHAR(255) NOT NULL,
    summary VARCHAR(255) NOT NULL,
    isbn VARCHAR (255) NOT NULL,
    price DOUBLE PRECISION NOT NULL,
    condition VARCHAR (255) NOT NULL,
    image_url VARCHAR (255) NOT NULL
);
