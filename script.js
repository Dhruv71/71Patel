const color1= document.querySelector(".color1");
const color2= document.querySelector(".color2");
const body= document.getElementById("col");

function setGradient() {
	body.style.background =
	        "linear-gradient(to right," 
	         + color1.value
	         +","
	         +color2.value
	         +")";
}

color1.addEventListener("input", setGradient);

color2.addEventListener("input", setGradient);