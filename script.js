const css = document.querySelector("h3");
const [color1, color2] = document.querySelectorAll('.color');
var btn = document.getElementById("btn");
var body = document.getElementById("gradient");


setGradient = () => {
	body.style.background = _linearGradient();
	css.textContent = `${body.style.background}`;
}

_linearGradient = () => {
	return `linear-gradient(to right, ${color1.value}, ${color2.value})`;
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
	body.style.background = `linear-gradient(to right, ${randomRGB()}, ${randomRGB()})`;
	css.textContent = `${body.style.background}`;
}

btn.addEventListener("click",randomColor);


