const express = require('express');
const router = express.Router();
const User = require('../models/users');
const { render } = require('ejs');

// GET route for rendering signup page
router.get('/signup/', (req, res) => {
    return res.render("signup"); // Make sure there's a 'signup.ejs' file in your views directory
});

router.get('/signin/', (req, res) => {
    return res.render("signin"); // Corrected typo from 'sigin'
});

router.get('/signout', (req, res) => {
    return res.render("signout");
});

router.post('/signup/', async (req, res) => {
    const { fullName, email, password } = req.body;
    await User.create({
        fullName,
        email,
        password,
    });
    return res.redirect("/");
});

module.exports = router;
