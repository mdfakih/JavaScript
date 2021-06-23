var button = document.getElementById("main");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");
var css = document.querySelector(".nuptle");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");

function inputLength() {
	return input.value.length;
}

function createElement() {
	var delbutton = document.createElement("button");
	var li = document.createElement("li");
	ul.appendChild(li);
	li.appendChild(document.createTextNode(input.value));
	li.appendChild(delbutton);
	input.value = "";
	delbutton.classList.add("delClass");
	delbutton.innerHTML = "X";
}

function addListWhenClick() {
	if (inputLength() > 0) {
		createElement();
	}
}

function addListWhenKeypress(event){
	if (inputLength() > 0 && event.which === 13){
		createElement();
	}
}

function toggleIt(task){
	if (task.target.tagName === "LI"){
		task.target.classList.toggle("done");
	}
}


function deleteTodo(element){
	if(element.target.className === "delClass"){
		element.target.parentElement.remove();
	}
}


function handleDeleteButton(element){
	toggleIt(element);
	deleteTodo(element);
}

function setGradient(){
	body.style.background = "linear-gradient(to right," 
	+ color1.value 
	+"," 
	+ color2.value 
	+")";
}

color1.addEventListener("input", setGradient);

color2.addEventListener("input", setGradient);

ul.addEventListener("click", handleDeleteButton);

button.addEventListener("click", addListWhenClick);

input.addEventListener("keypress", addListWhenKeypress);