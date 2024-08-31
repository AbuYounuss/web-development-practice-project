/*function show() {
	var first,second,result;
	first = document.getElementById("firstElement").value;
	second = document.getElementById("secondElement").value;
	result = parseInt(first) + parseInt(second);
	document.getElementById("Result").value = result;
}*/

var data = new Date();

var toYear = data.getFullYear();
var toMonth = data.getMonth() + 1;
var toDay = data.getDate();
document.getElementById("toYear").value = toYear;
document.getElementById("toMonth").value = toMonth;
document.getElementById("toDay").value = toDay;

function calculate() {
	var i = 0;
	var j = 0;
	var bDay = parseInt(document.getElementById("bDay").value);
	if(toDay < bDay) {
		toDay += 30;
		if(toDay > bDay) {
			var result = toDay - bDay;
		document.getElementById("rDay").value = result;
		}
		if(bDay > toDay) {
			var result = bDay - toDay;
			document.getElementById("rDay").value = result;
		}
		i++;
	}
	if(toDay > bDay) {
		var result = toDay - bDay;
		document.getElementById("rDay").value = result;
	}

	var bMonth = parseInt(document.getElementById("bMonth").value);
	
	if(i > 0) {
		toMonth--;
	}
	if(bMonth < toMonth) {
		var result2 = toMonth - bMonth;
		document.getElementById("rMonth").value = resut2;
	}
	if(bMonth == toMonth) {
		document.getElementById("rMonth").value = "0";
	}
	if(bMonth > toMonth) {
		document.getElementById("rMonth").value = ((12 + toMonth) - bMonth);
		j++;
	}
	var bYear = parseInt(document.getElementById("bYear").value);
	if(j > 0) {
		toYear--;
	}
	if(toYear > bYear) {
		var result2 = toYear - bYear;
		document.getElementById("rYear").value = result2;
	}


}
