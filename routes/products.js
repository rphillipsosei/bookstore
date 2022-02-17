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
    // console.log("testing")
    let query =
    `SELECT id, image_url, title, author, price, summary
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

  router.post("/", (req, res) => {
    // console.log(req.body);
    const minValue = req.body["min-price"];
    const maxValue = req.body["max-price"];

    const query = `
    SELECT * FROM books
    WHERE price BETWEEN $1 AND $2
    LIMIT 9
    `;

    db.query(query, [minValue, maxValue])
      .then(result => {
        const books = result.rows;
        // console.log(books);
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

  // router.get("/favourites", (req, res) => {
  //   const user_id = 1;

  //   let queryProduct =
  //   `SELECT books.id, image_url, title, author, price, summary
  //   FROM books
  //   JOIN favouritebooks ON favouritebooks.book_id = books.id
  //   WHERE user_id = $1
  //   `;

  //   db.query(queryProduct, [user_id])
  //     .then(data => {
  //       const favouriteBooks = data.rows;
  //      const templateVars = {
  //        favouriteBooks
  //      }
  //       res.render("products", templateVars);
  //     })
  //     .catch(err => {
  //       res
  //         .status(500)
  //         .json({ error: err.message });
  //     });
  //   });


  // router.post("/:bookID/favourites", (req, res) => {
  //   const user_id = 1;
  //   const book_id = req.params.bookID;
  //   const favourite_id = Math.ceil(Math.random() * 1000);
  //   let query = `
  //   INSERT INTO favouritebooks (id, user_id, book_id)  VALUES ($1, $2, $3)
  //   RETURNING *;
  //   `
  //   db.query(query, [favourite_id, user_id, book_id])
  //   .then(result => {
  //     // const books = result.rows;
  //     // console.log(books);
  //     // const templateVars = {
  //     //   books
  //     // }
  //     // res.render("products", templateVars);


  //   })

  //   .catch(err => {
  //     res
  //     .status(500)
  //     .json({ error: err.message });
  //   });
  // });


  return router;
};


