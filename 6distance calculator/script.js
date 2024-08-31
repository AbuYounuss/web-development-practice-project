/*function show() {
	var first,second,result;
	first = document.getElementById("firstElement").value;
	second = document.getElementById("secondElement").value;
	result = parseInt(first) + parseInt(second);
	document.getElementById("Result").value = result;
}*/

function show() {
	var theoryMark,pacticalMark,totalMark,totalPoint;
	theoryMark = document.getElementById("Tmark").value;
	pacticalMark = document.getElementById("Pmark").value;
	/*totalMark = document.getElementById("Total").value;
	totalPoint = document.getElementById("Point").value;*/
	totalMark = parseInt(theoryMark) + parseInt(pacticalMark);

	if(totalMark <= 80 && totalMark >= 100) {
		document.getElementById("Total").value = totalMark;
		document.getElementById("Point").value = "A+";
	}
	else if(totalMark <= 60 && totalMark >= 79) {
		document.getElementById("Total").value = totalMark;
		document.getElementById("Point").value = "A";
	}
	else if(totalMark <= 40 && totalMark >= 59) {
		document.getElementById("Total").value = totalMark;
		document.getElementById("Point").value = "B";
	}
	else{
		document.getElementById("Total").value = totalMark;
		document.getElementById("Point").value = "Fail";
	}


}