const mongoose = require('mongoose');

const connectionString = 'mongodb://localhost/pets';

mongoose.connect(connectionString);

mongoose.connection.on('connected', () => {
	console.log('mongoose connect to ' + connectionString)
})

mongoose.connection.on('error', (error) => {
	console.log('mongoose connected to ' + error)
})

mongoose.connection.on('disconnected', () => {
	console.log('mongoose disconnected')
})