/* 
   Student Name: Devanshi Patel StudentID: 301161377 Date: 19 June 2021 
*/
let mongoos = require("mongoose");

let contactModel = mongoos.Schema({
    contactName: String,
    contactNumber: Number,
    emailAddress: String,
    designation: String,
}, {
    collection: "contacts" // Collection name
});

module.exports = mongoos.model("Contact", contactModel);