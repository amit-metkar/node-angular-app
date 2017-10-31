var express = require('express');
var User = require('../models/user');

var router = express.Router();

router.get('/', function(req, res, next) {

    User.findOne({}, (err, doc) => {
        if (err) {
            return res.send('<h1>Error!</h1>');
        }
        res.render('node', { result: doc });
    });
});

router.post('/', function(req, res, next) {
    const email = req.body.email;
    const user = new User({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email,
        password: req.body.password
    });
    user.save((error, result) => {
        // TODO
    });
    res.redirect('/');
});

module.exports = router;