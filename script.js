var button = document.getElementById("main");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");

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
	delbutton.innerHTML = "Delete";
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

ul.addEventListener("click", handleDeleteButton);

button.addEventListener("click", addListWhenClick);

input.addEventListener("keypress", addListWhenKeypress);