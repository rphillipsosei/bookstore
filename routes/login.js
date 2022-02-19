const cookieSession = require("cookie-session")
const express = require('express');
const router  = express.Router();


//need to track cookies after log in  
// req.session.user_id = user.id;

module.exports = (db) => {
    router.get("/", (req, res) => {
      let query = 
       db.query(query)
        .then(data => {
          const users = data.rows;
         const templateVars = {
           users
         }
          res.render("login", templateVars);
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
      let query = 
      `INSERT INTO books (username, password, email, country, is_admin) 
      VALUES ('${req.body.username}', '${req.body.password}', 'example@example.com', 'Canada', true);`
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

app.get("/login", (req, res) => {
    res.render("login");
 });