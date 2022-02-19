/*
 * All routes for books are defined here
 * Since this file is loaded in server.js into api/books,
 *   these routes are mounted onto /books
 * See: https://expressjs.com/en/guide/using-middleware.html#middleware.router
 */

const express = require("express");
const router = express.Router();

module.exports = (db) => {

  // GET /products
   router.get("/", (req, res) => {

    let query = `SELECT id, image_url, title, author, price, summary
    FROM books order by id asc
    LIMIT 100`;
    console.log(query);
    db.query(query)
      .then((data) => {
        const books = data.rows;
        const templateVars = {
          books,
        };
        res.render("products", templateVars);
      })
      .catch((err) => {
        res.status(500).json({ error: err.message });
      });
  });

  // POST /products = to filter items
  router.post("/", (req, res) => {
    // console.log(req.body);
    const minValue = req.body["min-price"];
    const maxValue = req.body["max-price"];

    const query = `
    SELECT * FROM books
    WHERE price BETWEEN $1 AND $2
    LIMIT 100
    `;

    db.query(query, [minValue, maxValue])
      .then((result) => {
        const books = result.rows;
        // console.log(books);
        const templateVars = {
          books,
        };
        res.render("products", templateVars);
      })
      .catch((err) => {
        res.status(500).json({ error: err.message });
      });
  });

  // POST /products/create = create new listing item
  router.post("/create", (req, res) => {
    console.log(req.body);
    const user_id = req.session.user_id;
    const { photos, title, author, genre, isbn, description, condition, price } = req.body;

    let query = `
    INSERT INTO books (user_id, title, author, genre, summary, isbn, price, condition, image_url) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9) RETURNING *
    `;
    db.query(query, [user_id, title, author, genre, description, isbn, price, condition, photos])
      .then((result) => {
        const books = result.rows;
        console.log(result.rows);
        const templateVars = {
          books,
        };
        res.render("products", templateVars);
      })
      .catch((err) => {
        res.status(500).json({ error: err.message });
      });
  });

  return router;
};


