const express = require("express");
const indexRoute = express.Router();
const request = require('request');
const bodyParser = require('body-parser');
const isLoggedIn = require('../middleware/isLoggedIn');

// user model
const db = require('../models/user');

indexRoute.get("/", function (req, res) {
    res.render('index');
});


module.exports = indexRoute;
