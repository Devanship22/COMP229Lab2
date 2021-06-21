/* 
  Student Name: Devanshi Patel StudentID: 301161377 Date: 19 June 2021 
*/

let mongoos = require("mongoose");
let passportLocalMongoose = require("passport-local-mongoose")

let User = mongoos.Schema({
    username: {
        type: String,
        default: "",
        trim: true,
        required: "Username is required."
    },
    password: {
        type: String,
        default: "",
        trim: true,
        required: "Password is required."
    },
    email: {
        type: String,
        default: "",
        trim: true,
        required: "Email address is required"
    },
    displayName: {
        type: String,
        default: "",
        trim: true,
        required: "Display name is required"
    },
    created: {
        type: Date,
        default: Date.now,
    },
    update: {
        type: Date,
        default: Date.now,
    }
}, {
    collection: "users"
}
);

// Config option for user model.
let options = ({missingPasswordError: "Wrong / Missing Password"})
// adding options to the plugins.
User.plugin(passportLocalMongoose, options)
module.exports.User =  mongoos.model("User", User);
