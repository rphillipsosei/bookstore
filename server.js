// load .env data into process.env
require("dotenv").config();

// Web server config
const PORT = process.env.PORT || 5050;
const sassMiddleware = require("./lib/sass-middleware");
const express = require("express");
const app = express();
const morgan = require("morgan");

app.use(express.urlencoded({extended: true}));

const cookieSession = require('cookie-session')
app.use(cookieSession({
  name: 'session',
  keys: ["secret"],
  maxAge: 24 * 60 * 60 * 1000 //24 hours
}))

// Separated Routes for each Resource
// Note: Feel free to replace the example routes below with your own
const usersRoutes = require("./routes/users");
const productsRoutes = require("./routes/products");
const newListingRoutes = require("./routes/new_listing");
const loginRoute = require("./routes/login");

// const { query } = require("express");

// PG database client/connection setup
const { Pool } = require("pg");
const dbParams = require("./lib/db.js");
const db = new Pool(dbParams);
db.connect()
.then(() => {
  console.log('Connected to db')
})
.catch((error) => {
  console.log('Error while connecting to db', error)
})

// Load the logger first so all (static) HTTP requests are logged to STDOUT
// 'dev' = Concise output colored by response status for development use.
//         The :status token will be colored red for server error codes, yellow for client error codes, cyan for redirection codes, and uncolored for all other codes.
app.use(morgan("dev"));


app.set("view engine", "ejs");
// app.use(express.urlencoded({ extended: true }));

app.use(
  "/styles",
  sassMiddleware({
    source: __dirname + "/styles",
    destination: __dirname + "/public/styles",
    isSass: false, // false => scss, true => sass
  })
);

app.use(express.static("public"));

// Mount all resource routes
// Note: Feel free to replace the example routes below with your own
app.use("/users", usersRoutes(db));
app.use("/products", productsRoutes(db));
// Note: mount other resources here, using the same pattern above
app.use("/new_listing", newListingRoutes(db));
app.use("/login", loginRoute(db));

// Home page
// Warning: avoid creating more routes in this file!
// Separate them into separate routes files (see above).

app.get("/", (req, res) => {
  res.render("index");
});

// app.get("/products", (req, res) => {
//   res.render("products");
// });

// app.get("/favourites", (req, res) => {
//   res.render("products");
// });

// app.get("/register", (req, res) => {
//    res.render("register");
// });

// app.get("/login", (req, res) => {
//    res.render("login");
// });

// app.get("/new_listing", (req, res) => {
//   res.render("new_listing");
// })

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`);
});
