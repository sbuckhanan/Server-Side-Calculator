const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const PORT = 5000;

let storeCalcs = [
	{
		valueOne: 23,
		valueTwo: 2,
		answer: 23,
	},
];

app.use(express.static('server/public'));
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res) => console.log('Hello World!'));

app.get('/calculations', (req, res) => res.send(storeCalcs));
app.post('/calculations', (req, res) => {
	console.log(req.body);

	storeCalcs.push(req.body);

	res.sendStatus(201);
});

app.listen(PORT, () => console.log('listening on port', PORT));
