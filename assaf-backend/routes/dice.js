const express = require("express"),
    router = express.Router(),
    dice = require('../controllers/dice');


router.get('/', dice.dice);

module.exports = router;