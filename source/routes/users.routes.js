const express = require("express");
const router = express.Router();

const usersController = require("../controllers/usersController");

const uploadFile = require("../middlewares/multerMiddleware");
const validations = require("../middlewares/validateRegisterMiddleware");
const guestMiddleware = require("../middlewares/guestMiddleware");
const authMiddleware = require("../middlewares/authMiddleware");

router.get("/register", guestMiddleware, usersController.register); // href /usuarios/register
router.post("/register",
  uploadFile.single("avatar"),
  usersController.processingRegister
);
router.get("/login", guestMiddleware, usersController.login); // href /usuarios/login
router.post("/login", usersController.loginProcess); // href /usuarios/login
router.get("/profile", authMiddleware, usersController.profile);
router.get("/logout", usersController.logout);
//router.post('/access', usersController.access ); // action /usuarios/access
//router.post('/save', usersController.save ); // action /usuarios/save

module.exports = router;
