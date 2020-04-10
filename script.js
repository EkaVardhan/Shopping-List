var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");
var li = document.getElementsByTagName("li");

function inputLength() {
    return input.value.length;
}

function createListElement() {
    var li= document.createElement("li");
    var button1= document.createElement("button");
    button1.innerHTML= "Delete";
    li.appendChild(document.createTextNode(input.value));
    ul.appendChild(li);
    li.appendChild(button1);
    input.value ="";
    clickList();
    buttonListElement();
}

function addListAfterClick() {
    if (inputLength() > 0) {
        createListElement();
    }
}

function addListAfterKeypress(event) {
    if (inputLength() > 0 && event.which === 13) {
        createListElement();
    }
}

function clickList() {
    for(var i=0; i<li.length; i++){
        console.log(i);
        li[i].addEventListener('click', listToggle);
    }
}

function listToggle() {
    this.classList.toggle("done");
}

function buttonListElement(){
	var button = document.querySelectorAll('li button');
	for( i=0; i<button.length; i++){
	button[i].addEventListener('click', clearElement)
	}
}

function clearElement(){
	for(var i=0; i<li.length; i++){
		this.parentNode.remove()
	}
}

clickList()

buttonListElement();

button.addEventListener("click", addListAfterClick);

input.addEventListener("keypress", addListAfterKeypress);