var colors = generateRandonColors(6);
var shape = document.querySelectorAll(".square");
var pickedColor = pickedColor();
var picked = document.querySelector("#picked");
var h1 = document.querySelector("h1")
var tryagain = document.querySelector("#tryagain")
var reset = document.querySelector("#reset");
var easy = document.querySelector("#easy")
var hard = document.querySelector("#hard")

easy.addEventListener("click", function(){
	easy.style.background = "green"
	hard.style.background = "white"
	colors = generateRandonColors(3);
    shape[3].style.display = "none"
    shape[4].style.display = "none"
    shape[5].style.display = "none"
});
hard.addEventListener("click", function(){
	easy.style.background = "white"
	hard.style.background = "green"
	 shape[0].style.display = "block"
    shape[1].style.display = "block"
    shape[2].style.display = "block" 
    shape[3].style.display = "block"
    shape[4].style.display = "block"
    shape[5].style.display = "block"
});
reset.addEventListener("click", function(){
	document.location.reload()
})

 picked.textContent = "Guess this color----"   + pickedColor;

for(var i = 0; i < shape.length; i++){
	// add initial colors to squares
	shape[i].style.background = colors[i];

	//add click listeners to squares
	shape[i].addEventListener("click", function() {
		//grab color of clicked squares
		var clickedColor = this.style.background;
		//compare color to pickedColor
		if(clickedColor === pickedColor) {
		tryagain.textContent = " Yay! Correct";
		h1.style.background = clickedColor
		shape[0].style.background = clickedColor
		shape[1].style.background = clickedColor
		shape[2].style.background = clickedColor
		shape[3].style.background = clickedColor
		shape[4].style.background = clickedColor
		shape[5].style.background = clickedColor
		} else {
		this.style.background = "#1e1f21"
		tryagain.textContent = "Try Again"
		}
	});
}
  
function pickedColor(){
	var random = Math.floor(Math.random() * colors.length);
	return colors[random];
}
function generateRandonColors(num){
	var arr =[]
	for(var i = 0; i<num; i++){
arr.push(randomColor())
	}
	return arr;
}
function randomColor() {
	//pick a "red" from 0 - 255
	var r = Math.floor(Math.random() * 256);
	//pick a "green" from 0 - 255
	var g = Math.floor(Math.random() * 256);
	//pick a "blue" from 0 - 255
	var b = Math.floor(Math.random() * 256);
	return "rgb(" + r + ", " + g + ", " + b + ")";
}
easy.addEventListener("click", function(){
	hard.Classlist.remove("selected");
	easy.Classlist.add("selected");
});