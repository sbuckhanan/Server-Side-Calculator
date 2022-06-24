$(onReady);

function onReady() {
	console.log('We are ready');
	getCalculations();
	$('.nineButton').on('click', clickNine);
	$('.eightButton').on('click', clickEight);
	$('.sevenButton').on('click', clickSeven);
	$('.sixButton').on('click', clickSix);
	$('.fiveButton').on('click', clickFive);
	$('.fourButton').on('click', clickFour);
	$('.threeButton').on('click', clickThree);
	$('.twoButton').on('click', clickTwo);
	$('.oneButton').on('click', clickOne);
	$('.zeroButton').on('click', clickZero);
	$('.equalButton').on('click', clickEqual);
	$('.subtractButton').on('click', clickSubtract);
	$('.addButton').on('click', clickAdd);
	$('.divideButton').on('click', clickDivide);
	$('.multiplyButton').on('click', clickMultiply);
	$('.dotButton').on('click', clickDot);
}

//? get value of input field
//? update input field with number or symbol that was clicked
//? click listener for each button
//? equal button is like a submit button
//? clear button should clear input and add that info to the ul
//? should do a post request when you click enter
//? post request should add an object to the server that gets added to the array
//? maybe send back the request (req.body) and display the response to the dom instead of looping through a response array
//? update the calculated field on the dom. that should also be stored on the server in that object

let inputField = $('.numberInput');

function getCalculations() {
	console.log('In get calculations');
	$.ajax({
		type: 'GET',
		url: '/calculations',
	})
		.then(function (response) {
			console.log(response);
			renderToDom(response);
		})
		.catch(function (error) {
			console.log(error);
		});
}

function renderToDom(serverInfo) {
	for (let calc of serverInfo) {
		$('.pastCalculations').append(`
			<li>${calc}</li>
		`);
	}
}
