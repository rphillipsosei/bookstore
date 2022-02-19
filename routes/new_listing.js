const cookieSession = require("cookie-session")
const express = require('express');
const router  = express.Router();

  module.exports = (db) => {
    router.get("/", (req, res) => {
      let query = 
       db.query(query)
        .then(data => {
          const books = data.rows;
         const templateVars = {
           books
         }
          res.render("new_listing", templateVars);
        })
        .catch(err => {
          res
            .status(500)
            .json({ error: err.message });
        });
    });
    return router;
  };

  module.exports = (db) => {
    router.post("/create", (req, res) => {
      console.log(req.body)
      console.log("TESTING -- CREATE ROUTE")
      let query = 
      `INSERT INTO books (isbn, image_url, owner_id, genre, title, author, price, summary, condition) 
      VALUES ('${req.body.isbn}', '${req.body.photos}', 1, '${req.body.genre}', '${req.body.title}',  '${req.body.author}', ${req.body.price}, '${req.body.summary}', '${req.body.condition}');`
      db.query(query)
        .then(data => {
          const books = data.rows;
          console.log(data.rows)
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

  