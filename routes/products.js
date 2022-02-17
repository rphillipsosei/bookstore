/*
 * All routes for books are defined here
 * Since this file is loaded in server.js into api/books,
 *   these routes are mounted onto /books
 * See: https://expressjs.com/en/guide/using-middleware.html#middleware.router
 */

const express = require('express');
const router  = express.Router();



module.exports = (db) => {
  router.get("/", (req, res) => {
    console.log("testing")
    let query =
    `SELECT image_url, title, author, price, summary
    FROM books order by id asc
    LIMIT 5`;
    console.log(query);
    db.query(query)
      .then(data => {
        const books = data.rows;
       const templateVars = {
         books
       }
        res.render("products", templateVars);
      })
      .catch(err => {
        res
          .status(500)
          .json({ error: err.message });
      });
  });
  return router;
};
