var express = require("express");
var router = express.Router();

// Import the model (user.js) to use its database functions.
var user = require("../models/user.js");
var artist = require("../models/artist.js");

router.post("/users", function(req, res) {
    user.create([
        "user_first_name",
        "user_last_name",
        "user_email",
        "user_password",
        "user_zip",
        "user_pref_gender",
        "user_pref_certified"
    ],[
        req.body.user_first_name,
        req.body.user_last_name,
        req.body.user_email,
        req.body.user_password,
        req.body.user_zip,
        req.body.options1,
        req.body.options2
    ], function(data) {
        res.redirect("/home");
    });
});

router.post("/artists", function(req, res) {
    artist.create([
        "artist_first_name",
        "artist_last_name",
        "artist_email",
        "artist_password",
        "artist_phone",
        "artist_studio",
        "artist_gender",
        "artist_certified"
    ],[
        req.body.artist_first_name,
        req.body.artist_last_name,
        req.body.artist_email,
        req.body.artist_password,
        req.body.artist_phone,
        req.body.artist_studio,
        req.body.options1,
        req.body.options2
    ], function(data) {
        res.redirect("/home");
    });
});




module.exports = router;