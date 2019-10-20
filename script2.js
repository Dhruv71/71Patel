/*var button = document.getElementsByTagName("button")[0]

button.addEventListener("click",function style(){
	document.querySelector("button").style.background="yellow";
	document.querySelectorAll("button")[1].style.background="white";
var body=document.querySelector("body")
body.className ="change"
});

var but = document.getElementsByTagName("button")[1]

but.addEventListener("click", function stayle2 (){
	document.querySelector("button").style.background="white";
	document.querySelectorAll("button")[1].style.background="green";
	var body = document.querySelector("body");
	//body.className= "change2"
})*/

var c1 = document.getElementsByClassName("color1");
var c2 = document.getElementsByClassName("color2");
var body = document.getElementsById("col");

function backgroundgenerator (){
	body.style.background= "linear-gradient ( to right,"
		                    + color1.value 
		                    + ","
		                    + color2.value 
		                    +  "   )"; 
}
c1.addEventListener("input", backgroundgenerator);
c1.addEventListener("input", backgroundgenerator);
