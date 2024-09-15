const route = require("express").Router();

const {
  addBooks,
  GetBooks,
  updateBook,
  deleteBook,
} = require("../controllers/bookController");
const upload = require("../middlewares/uploads");

route
  .post(
    "/add",
    upload.fields([
      {
        name: "bookFile",
        maxCount: 1,
      },
      {
        name: "bookCover",
        maxCount: 1,
      },
    ]),
    addBooks
  )
  .get("/books", GetBooks)
  .put(
    "/edit/:id",
    upload.fields([
      {
        name: "bookFile",
        maxCount: 1,
      },
      {
        name: "bookCover",
        maxCount: 1,
      },
    ]),
    updateBook
  )
  .delete("/remove/:id", deleteBook);

module.exports = route;
