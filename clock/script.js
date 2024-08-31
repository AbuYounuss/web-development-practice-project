/*function show() {
	var first,second,result;
	first = document.getElementById("firstElement").value;
	second = document.getElementById("secondElement").value;
	result = parseInt(first) + parseInt(second);
	document.getElementById("Result").value = result;
}*/

const intv = setInterval(clock,1000);
function clock() {
	var h = document.getElementById("h").value;
	var m = document.getElementById("m").value;
	var s = document.getElementById("s").value;
	// var f = document.getElementById("f").value;
	s++;
	if(s == 60) {
		s = 0;
		m++;
		if(m == 60) {
			m = 0;
			h++;
			if(h == 12) {
				h = 0;
			}
		}
	}
	
	document.getElementById("s").value = s;
	document.getElementById("m").value = m;
	document.getElementById("h").value = h;
	// document.getElementById("f").value = f;
}
function stop() {
	clearInterval(intv);
}