const multer = require("multer");
const path = require("path");

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    let upload;
    if (file.fieldname === "bookFile") {
      upload = "uploads/bookFile/";
    } else if (file.fieldname === "bookCover") {
      upload = "uploads/bookCover/";
    } else {
      upload = "uploads/";
    }

    cb(null, upload);
  },
  filename: (req, file, cb) => {
    cb(
      null,
      file.fieldname + "-" + Date.now() + path.extname(file.originalname)
    );
  },
});

const upload = multer({ storage: storage });

module.exports = upload;
