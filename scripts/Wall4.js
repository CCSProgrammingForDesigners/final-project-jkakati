function getColor(id){
	sColor = document.getElementById(id).id;
}

function changeColorBox(id){
	document.getElementById(id).style.fill = sColor;
}

function resetColor(){
	document.getElementById("Letter_D").style.fill ="DarkGray";
	document.getElementById("Letter_T").style.fill ="DarkGray";
	document.getElementById("Letter_W").style.fill ="DarkGray";
}
