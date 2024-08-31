// document.getElementById('btn').addEventListener('click', function() {
// 	var num1 = parseInt(document.getElementById('num1').value);
// 	var num2 = parseInt(document.getElementById('num2').value);
// 	function sum() {
// 		return num1 + num2;
// 	}
// 	document.getElementById('display').value = sum();
// });


var btn = document.getElementById('btn');
var loginArea = document.getElementById('login-area');
btn.addEventListener('click',function() {
	loginArea.style.display = 'none';
	var transitionArea = document.getElementById('transition-area');
	transitionArea.style.display = 'block';
	
});

var addDeposit = document.getElementById('addDeposit');
addDeposit.addEventListener('click',function() {
	var depositNumber = getInputNumber("depositAmount");

	updateSpanText("currentDeposit", depositNumber);
    updateSpanText("currentBalance", depositNumber);
    document.getElementById("depositAmount").value;
});
var addWithdraw  = document.getElementById('addWithdraw');
addWithdraw.addEventListener('click',function() {
	const withdrawNumber = getInputNumber("withdrawAmount");
	updateSpanText("currentWithdraw",withdrawNumber);
	updateSpanText("currentBalance",-1 * withdrawNumber);
	document.getElementById('withdrawAmount').value = ""; 
});

function getInputNumber(id) {
	const amount = document.getElementById(id).value;
	const amountNumber = parseFloat(amount);
	return amountNumber;
}
function updateSpanText(id,addedNumber) {
	const current = document.getElementById(id).innerText;
	const currentNumber = parseFloat(current);
	const totalAmount  = addedNumber + currentNumber;
	document.getElementById(id).innerText = totalAmount;
}


