-- Drop and recreate Users table (Example)

DROP TABLE IF EXISTS users CASCADE;
CREATE TABLE users (
  id SERIAL PRIMARY KEY NOT NULL,
  owner_id INT
  title VARCHAR(20) NOT NULL,
  author VARCHAR(12) NOT NULL,
  genre VARCHAR(20),
  isbn VARCHAR(20),
  price BOOLEAN,
  condition, VARCHAR(15)
  is_sold BOOLEAN,
  image_url VARCHAR(100)  
);
