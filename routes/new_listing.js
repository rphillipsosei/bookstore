const express = require('express');
const router  = express.Router();

module.exports = (db) => {

  // GET /new_listing
  router.get("/", (req, res) => {
    res.render("new_listing");
  });
  return router;
};
