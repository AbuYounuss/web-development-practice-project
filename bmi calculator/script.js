function show() {
	var weight = parseInt(document.getElementById("weight").value);
	var feet = parseInt(document.getElementById("feet").value);
	var inch = parseInt(document.getElementById("inch").value);

	var meter = (((feet * 12) + inch) * .0254);
	var bmi = ( (weight) / (meter * meter));
	document.getElementById("result").value = bmi.toFixed(2);
}
