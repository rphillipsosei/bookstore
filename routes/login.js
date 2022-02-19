const express = require('express');
const router  = express.Router();


module.exports = (db) => {

  // GET /login
  router.get("/", (req, res) => {
    res.render("login");

  });

  // POST /login
  router.post("/", (req, res) => {

    const email = req.body.email;
    // const password = req.body.password;

    db.query('SELECT id FROM users WHERE email = $1;', [email])
      .then((result) => {
        // console.log(result.rows);
        req.session["user_id"] = result.rows[0].id;
        res.redirect("/");
      })
      .catch(err => {
        res
          .status(500)
          .json({ error: err.message });
      });
  });

  return router;
};
