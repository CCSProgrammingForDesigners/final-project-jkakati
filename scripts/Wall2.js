function getColor(id){
	sColor = document.getElementById(id).id;
}

function changeColorBox(id){
	document.getElementById(id).style.backgroundColor = sColor;
}

function resetColor(){
	document.getElementById("colorchange1").style.backgroundColor ="lightgray";
    document.getElementById("colorchange1").style.borderColor ="Black";
    document.getElementById("colorchange2").style.backgroundColor ="lightgray";
    document.getElementById("colorchange2").style.borderColor ="Black";
    document.getElementById("colorchange3").style.backgroundColor ="lightgray";
	document.getElementById("colorchange3").style.borderColor ="Black";
}
