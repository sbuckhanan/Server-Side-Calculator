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

module.exports = mathTime;
