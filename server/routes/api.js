const express = require('express');

const api = require('../controllers/api');

const router = express.Router();

router.post('/login', api.login);
router.post('/register', api.register);

router.get('/movie/:movieId', api.movie.getById);
router.get('/movie/:movieId', api.movie.getById);

module.exports = router;
