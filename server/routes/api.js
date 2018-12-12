const express = require('express');

const api = require('../controllers/api');

const router = express.Router();

router.post('/login', api.login);

module.exports = router;
