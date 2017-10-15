const express = require('express');
const router = express.Router();
const pets = require('../models/pets');

router.get('/', (req, res) => {
	res.render('index', {pet: pets})
})

router.get('/new', (req, res) => {
	res.render('new', {})
})

router.get('/:index', (req, res) => {
	res.render('show', {pet: pets[req.params.index]})
})

router.get('/:index/edit', (req, res) => {
	res.render('edit', {pet: pets[req.params.index], index: req.params.index})
	res.redirect('/pets');
})

router.post('/create', (req, res) => {
	pets.push(req.body)
	res.redirect('/pets')
})

router.put('/:index/edit', (req, res) => {
	pets[req.params.index] = req.body
	res.redirect('/pets')
})

router.delete('/:index', (req, res) => {
	pets.splice(req.params.index, 1);
	res.redirect('/pets');
})

module.exports = router;