const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const methodOverride = require('method-override');
require('./db/db');

const petController = require('./controllers/pets');

app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');

app.use(express.static('public'))

app.use(bodyParser.urlencoded({extended: false}));

app.use(methodOverride('_method'));

app.use('/pets', petController);

app.listen(3000, () => {
	console.log('app is listening on port 3000')
})