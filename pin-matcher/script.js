var generateInput;
document.getElementById('generate-btn').addEventListener('click',function() {
	let pin = '';
	for(let i = 0; i < 5; i++) {
		pin += Math.floor(Math.random() * 10);
	}
	generateInput = document.getElementById('generate-input').value = pin;
	generateInput = parseInt(generateInput);
})




document.getElementById('saven').addEventListener('click',function() {
	btnClick('saven');
});
document.getElementById('eight').addEventListener('click',function() {
	btnClick('eight');
});
document.getElementById('nine').addEventListener('click',function() {
	btnClick('nine');
});
document.getElementById('six').addEventListener('click',function() {
	btnClick('six');
});
document.getElementById('five').addEventListener('click',function() {
	btnClick('five');
});
document.getElementById('four').addEventListener('click',function() {
	btnClick('four');
});
document.getElementById('three').addEventListener('click',function() {
	btnClick('three');
});
document.getElementById('two').addEventListener('click',function() {
	btnClick('two');
});
document.getElementById('one').addEventListener('click',function() {
	btnClick('one');
});
document.getElementById('zero').addEventListener('click',function() {
	btnClick('zero');
});

var calcInputNumber;
function btnClick(id) {
	var calcInput = document.getElementById('calc-input');
	var innerNumber = document.getElementById(id).innerText;
	innerNumber = parseInt(innerNumber);
	calcInputNumber = calcInput.value += innerNumber;
}	

	var notMatch =  document.getElementById('Didnt-match');
	var pinMatch = document.getElementById('pin-match');
	pinMatch.style.display = 'none';
	notMatch.style.display = 'none';

document.getElementById('submit-btn').addEventListener('click',function() {

	if(calcInputNumber == generateInput) {
		
		pinMatch.style.display = 'block';
		notMatch.style.display = 'none';
	}else {
		pinMatch.style.display = 'none';
		notMatch.style.display = 'block';
	}
})