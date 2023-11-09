const express = require('express');
const router = express.Router();
const Usercontroller = require('../controller/user.controller');

router.post("/" , Usercontroller.register)

module.exports = router;