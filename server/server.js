const express = require('express');
const bodyParser = require('body-parser');
const app = express();
//? must be like this for heroku
const PORT = process.env.PORT || 5000;
let mathTime = require('./modules/mathstuff.js');

let storeCalcs = [];

app.use(express.static('server/public'));
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res) => console.log('Hello World!'));

app.get('/calculations', (req, res) => res.send(storeCalcs));

app.post('/calculations', (req, res) => {
	console.log(req.body);

	const num1 = Number(req.body.num1);
	const num2 = Number(req.body.num2);
	const operator = req.body.operator;
	const finalAnswer = mathTime(num1, num2, operator);

	const newCalculation = {
		num1: num1,
		num2: num2,
		operator: operator,
		answer: finalAnswer,
	};

	storeCalcs.push(newCalculation);
	res.sendStatus(201);
	// console.log(storeCalcs[storeCalcs.length - 1]);
});

app.listen(PORT, () => console.log('listening on port', PORT));
