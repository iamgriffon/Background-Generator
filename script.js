var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var btn = document.getElementById("btn");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");



setGradient = () => {
	body.style.background = 
	"linear-gradient(to right, " 
	+ color1.value 
	+ ", " 
	+ color2.value 
	+ ")";

	css.textContent = body.style.background + ";";
}

randomNumber = (min, max) => {
	min = 0;
	max = 255;
	return Math.floor(Math.random() * max) + min;
  }


randomRGB = () => {
	var randomcolor = "rgb("
		+randomNumber()
		+","
		+randomNumber()
		+","
		+randomNumber()+")";
		return randomcolor;	
}

randomColor = () => {
	body.style.background = 
	"linear-gradient(to right, "
	+randomRGB() 	
	+","
	+randomRGB()
	+")";

	css.textContent = body.style.background + ";";
}

btn.addEventListener("click",randomColor);


