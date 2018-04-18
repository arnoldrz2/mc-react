var express = require("express");
var router = express.Router();

// Import the model (user.js) to use its database functions.
var user = require("../models/user.js");

router.post("/users", function(req, res) {
    user.create([
        "user_first_name",
        "user_last_name",
        "user_email",
        "user_password",
        "user_zip"
    ],[
        req.body.user_first_name,
        req.body.user_last_name,
        req.body.user_email,
        req.body.user_password,
        req.body.user_zip
    ], function(data) {
        res.redirect("/home");
    });
});


module.exports = router;