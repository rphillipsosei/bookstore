/*
 * All routes for books are defined here
 * Since this file is loaded in server.js into api/books,
 *   these routes are mounted onto /books
 * See: https://expressjs.com/en/guide/using-middleware.html#middleware.router
 */

const express = require('express');
const router  = express.Router();

//PRODUCTS.JS
module.exports = (db) => {
  router.get("/products", (req, res) => {
    let query = 
    `SELECT image_url, title, author, price 
    FROM books
    LIMIT 30`;
    console.log(query);
    db.query(query)
      .then(data => {
        const books = data.rows;
        // SERVER.JS
        res.render("index", books);
      })
      .catch(err => {
        res
          .status(500)
          .json({ error: err.message });
      });
  });
  return router;
};
