function show() {
	var first,second,result;
	first = document.getElementById("firstElement").value;
	second = document.getElementById("secondElement").value;
	result = parseInt(first) + parseInt(second);
	document.getElementById("Result").value = result;
}