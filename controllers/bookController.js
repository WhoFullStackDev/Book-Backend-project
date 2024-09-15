const book = require("../models/bookSchema");

const addBooks = async (req, res) => {
  try {
    const { title, description } = req.body;

    const bookCover = req.files["bookCover"]
      ? req.files["bookCover"][0].path
      : null;
    const bookFile = req.files["bookFile"]
      ? req.files["bookFile"][0].path
      : null;

    if (!title || !description || !bookCover || !bookFile) {
      return res.status(400).json({ message: "Fill all fields" });
    }
    await book.create({
      title,
      description,
      bookCover,
      bookFile,
    });
    res.status(201).json({ message: "Successfully add you new book" });
  } catch (error) {
    res.status(500).json(error);
  }
};

const GetBooks = async (req, res) => {
  try {
    const books = await book.find();
    res.status(200).json(books);
  } catch (error) {
    res.status(500).json(error);
  }
};

const updateBook = async (req, res) => {
  try {
    const { title, description } = req.body;

    const bookCover = req.files["bookCover"]
      ? req.files["bookCover"][0].path
      : null;
    const bookFile = req.files["bookFile"]
      ? req.files["bookFile"][0].path
      : null;
    console.log(title);
    const newBook = {};
    if (title) {
      newBook.title = title;
    }
    if (description) {
      newBook.description = description;
    }
    if (bookCover) {
      newBook.bookCover = bookCover;
    }
    if (bookFile) {
      newBook.bookFile = bookFile;
    }

    await book.findByIdAndUpdate(req.params.id, newBook, {
      new: true,
    });

    res.status(200).json({ message: "Successfully update you book" });
  } catch (error) {
    res.status(500).json(error);
  }
};

const deleteBook = async (req, res) => {
  try {
    await book.findByIdAndDelete(req.params.id);

    res.status(200).json({ message: "Successfully delete you book" });
  } catch (error) {
    res.status(500).json(error);
  }
};

module.exports = { addBooks, GetBooks, updateBook, deleteBook };
