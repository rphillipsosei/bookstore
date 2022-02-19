const cookieSession = require("cookie-session")

const express = require('express');
const router  = express.Router();




module.exports = (db) => {
    router.get("/", (req, res) => {
      let query =
      `SELECT id, username, password, email, country, is_admin
      FROM users`;
      db.query(query)
        .then(data => {
          const users = data.rows;
         const templateVars = {
           users
         }
          res.render("messages", templateVars);
        })
        .catch(err => {
          res
            .status(500)
            .json({ error: err.message });
        });
    });
    router.post("/", (req, res) => {
      let query = 
      `INSERT INTO books (id, book_id, message) 
      VALUES ('${req.body.book_id}', '${req.body.message}');`
      db.query(query)
        .then(data => {
          const books = data.rows;
          console.log(data.rows)
         const templateVars = {
           books
         }
          res.redirect("/messageSent", templateVars);
        })
        .catch(err => {
          res
            .status(500)
            .json({ error: err.message });
        });
    });
    return router
};


