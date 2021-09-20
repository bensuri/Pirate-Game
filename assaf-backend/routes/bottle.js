const express = require("express"),
    router = express.Router(),
    bottle = require('../controllers/bottle');


router.get('/', bottle.bottle);

module.exports = router;