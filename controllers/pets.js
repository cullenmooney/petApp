const express = require('express');
const router = express.Router();
const pet = require('../models/pets');

router.get('/', (req, res) => {
	res.render('index', {})
})

router.get('/new', (req, res) => {
	res.render('new', {})
})

module.exports = router;