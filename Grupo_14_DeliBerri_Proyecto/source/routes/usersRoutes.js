const path = require("path");
const express = require("express");

// ************ Middlewares ************

const guestMiddleware = require("../middlewares/guestMiddleware");
const authMiddleware = require("../middlewares/authMiddleware");
const uploadAvatar = require("../middlewares/multerMiddleware");
const router = express.Router();
const usersController = require("../controllers/usersController");
const userLoggedMiddleware = require("../middlewares/userLoggedMiddleware");
const validationsMiddlewareUser = require("../middlewares/validationsMiddlewareUser");

//************ Login ************
router.get("/login", guestMiddleware, usersController.login);
router.post("/login", validationsMiddlewareUser, userLoggedMiddleware, usersController.loginProcess);
router.get("/profile", authMiddleware, usersController.profile);
router.get("/profileToEdit/:id", authMiddleware, usersController.edit);
router.post("/profileToEdit/:id", validationsMiddlewareUser, authMiddleware, uploadAvatar.any("avatar"), usersController.update);
router.get("/logout", usersController.logout);
//************ Register ************
router.get("/register", guestMiddleware, usersController.register);
router.post("/register", uploadAvatar.any("avatar"), validationsMiddlewareUser, usersController.processRegister);

module.exports = router;
