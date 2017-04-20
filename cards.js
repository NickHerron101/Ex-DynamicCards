console.log("hello");

//assigning the elements ids
var card = document.getElementById("domElement")
var textInput = document.getElementById("text");
var button = document.getElementById("button");
// sticking an event listener on the button and running a function that creates a div element with a delete button that can delete the element..targeted within the id.
button.addEventListener("click", function(event){
	var newElement = document.createElement("div");
	var deleteButton = document.createElement("button");
	newElement.innerHTML = textInput.value + "<br>";
	newElement.appendChild(deleteButton);
	card.appendChild(newElement);
	var btn = document.createTextNode("delete");
	deleteButton.appendChild(btn);
	deleteButton.addEventListener("click", removeDiv)
	console.log(newElement);
});
// created a function that is called by eventlistener placed on the deletebutton on the element added to the dom, which
function removeDiv(event) {
	card.removeChild(event.target.parentElement);
	console.log(event.target.parentElement);
}




//target button created on element.
//clicked delete the card that it's in.
//
