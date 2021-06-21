/* 
  Student Name: Devanshi Patel StudentID: 301161377 Date: 19 June 2021 
*/

let express = require('express');
let router = express.Router();
// importing user controller.
let userController = require("../controllers/user");

router.get("/login", userController.displayLoginPage);

router.post("/login", userController.displayContactListPage);

router.get("/logout", userController.logout);

module.exports = router