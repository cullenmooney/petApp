const express = require('express');
const router = express.Router();
const pet = require('../models/pets');

router.get('/', (req, res) => {
	pet.find((err, pets) => {
		if(err) {
			res.send('there was an error with the database')
		} else {
			res.render('index', {pet: pets})
		}
	})
})

router.get('/new', (req, res) => {
	res.render('new', {})
})

router.get('/:index', (req, res) => {
	pet.find((err, pets) => {
		if(err) {
			res.send('there was an error with the database')
		} else {
			res.render('show', {pet: pets[req.params.index]})
		}
	})
})

router.get('/:index/edit', (req, res) => {
	pet.find((err, pets) => {
		if(err) {
			res.send('there was an error with the database')
		} else {
			res.render('edit', {pet: pets[req.params.index], index: req.params.index})
		}
	})
})

router.post('/create', (req, res) => {
	pet.create(req.body, (err, pets) => {
		if(err) {
			res.send('there was an error with the create')
		} else {
			res.redirect('/pets')
		}
	})
})

router.put('/:index/edit', (req, res) => {
	pet.findOneAndUpdate(req.params.index, req.body, (err, pet) => {
		if(err) {
			res.send('error in update')
		} else {
			res.redirect('/pets')
		}
	})
})

router.delete('/:index', (req, res) => {
	pets.splice(req.params.index, 1);
	res.redirect('/pets');
})

module.exports = router;