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
    res.render("products");
  });

  return router;
};


