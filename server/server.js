const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const PORT = 5000;

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
	mathTime(numbersReceived);
	storeCalcs[storeCalcs.length - 1].answer = finalAnswer;
	res.sendStatus(201);
	console.log(storeCalcs[storeCalcs.length - 1]);
});

function mathTime(numbers) {
	let numberOne = Number(numbers.numbersArray[0]);
	let numberTwo = Number(numbers.numbersArray[1]);
	if (numbers.operator === '+') {
		finalAnswer = numberOne + numberTwo;
		return finalAnswer;
	} else if (numbers.operator === '-') {
		finalAnswer = numberOne - numberTwo;
		return finalAnswer;
	} else if (numbers.operator === '/') {
		finalAnswer = numberOne / numberTwo;
		return finalAnswer;
	} else if (numbers.operator === '*') {
		finalAnswer = numberOne * numberTwo;
		return finalAnswer;
	}
}

app.listen(PORT, () => console.log('listening on port', PORT));
