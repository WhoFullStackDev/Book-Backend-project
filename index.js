require("dotenv").config();
const express = require("express");
const path = require("path");

const connected = require("./db");
const bookRoute = require("./routes/bookRoute");

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use("/uploads", express.static("uploads"));
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

// connect to database
connected();

app.get("/", (req, res) => {
  res.render("home");
});

app.use("/book", bookRoute);

app.listen(4000, () => {
  console.log("http://localhost:4000");
});
