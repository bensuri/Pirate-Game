const express = require("express"),
    router = express.Router(),
    barrel = require('../controllers/barrel');


router.get('/', barrel.barrel);

module.exports = router;