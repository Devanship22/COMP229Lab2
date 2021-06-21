/* 
   Student Name: Devanshi Patel StudentID: 301161377 Date: 19 June 2021 
*/

var express = require('express');
var router = express.Router();

let indexController = require("../controllers/index")

/* GET home page. */
router.get('/', indexController.displayHomePage);

/* GET about page. */
router.get('/about', indexController.displayAboutPage);

/* GET projects page. */
router.get('/projects', indexController.displayProjectPage);

/* GET services page. */
router.get('/services', indexController.displayServicePage);

/* GET contact page. */
router.get('/contactus', indexController.displayContactPage);

/* POST contact page. */
router.post('/contactus', indexController.responseToContactPageForm);
// exporting the router
module.exports = router;