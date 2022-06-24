const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const PORT = 5000;
let mathTime = require('./modules/mathstuff.js');

let numbersReceived;
let finalAnswer;

let storeCalcs = [];

app.use(express.static('server/public'));
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res) => console.log('Hello World!'));

app.get('/calculations', (req, res) => res.send(storeCalcs));
app.post('/calculations', (req, res) => {
	console.log(req.body);

	storeCalcs.push(req.body);
	numbersReceived = req.body;
	finalAnswer = mathTime(numbersReceived);
	storeCalcs[storeCalcs.length - 1].answer = finalAnswer;
	res.sendStatus(201);
	console.log(storeCalcs[storeCalcs.length - 1]);
});

// app.delete('/calculations/', (req,res) => {

// 	res.send('Deleted')
// });

app.listen(PORT, () => console.log('listening on port', PORT));
