function getColor(id){
	sColor = document.getElementById(id).id;
}

function changeColorBox(id){
	document.getElementById(id).style.backgroundColor = sColor;
}

function resetColor(){
	document.getElementById("colorchangeD").style.backgroundColor ="lightgray";
    document.getElementById("colorchangeD").style.borderColor ="Black";
    document.getElementById("colorchangeE").style.backgroundColor ="lightgray";
    document.getElementById("colorchangeE").style.borderColor ="Black";
    document.getElementById("colorchangeT").style.backgroundColor ="lightgray";
	document.getElementById("colorchangeT").style.borderColor ="Black";
	document.getElementById("colorchangeR").style.backgroundColor ="lightgray";
	document.getElementById("colorchangeR").style.borderColor ="Black";
	document.getElementById("colorchangeO").style.backgroundColor ="lightgray";
	document.getElementById("colorchangeO").style.borderColor ="Black";
	document.getElementById("colorchangeI").style.backgroundColor ="lightgray";
	document.getElementById("colorchangeI").style.borderColor ="Black";
	document.getElementById("colorchangeT2").style.backgroundColor ="lightgray";
	document.getElementById("colorchangeT2").style.borderColor ="Black";
}
