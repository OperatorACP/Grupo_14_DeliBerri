const path = require("path");
const multer = require("multer");

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    let folder = path.resolve(__dirname, "../../public/users");
    cb(null, folder);
  },
  filename: (req, file, cb) => {
    let filename = `${Date.now()}_img${path.extname(file.originalname)}`;
    cb(null, filename);
  },
});

const uploadFile = multer({ storage });

module.exports = uploadFile;
