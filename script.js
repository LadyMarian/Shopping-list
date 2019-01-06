var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");
var listItem = document.querySelectorAll("li");
var del = document.querySelectorAll("button.delete");

function inputLength() {
	return input.value.length;
}

function createListElement() {
	var li = document.createElement("li");
	var delButton = document.createElement("button");
	delButton.classList.add("delete");
	delButton.innerHTML="Delete";
	delButton.addEventListener("click",function() {
		this.parentElement.remove();
	});
	li.appendChild(delButton);
	li.appendChild(document.createTextNode(input.value));
	ul.appendChild(li);
	input.value = "";
	li.addEventListener("click", function() {
		li.classList.toggle("done");
	})
}

function addListAfterClick() {
	if (inputLength() > 0) {
		createListElement();
	}
}

function addListAfterKeypress(event) {
	if (inputLength() > 0 && event.keyCode === 13) {
		createListElement();
	}
}

listItem.forEach(function(listElement) {
	listElement.addEventListener("click", function() {
		listElement.classList.toggle("done");
	})
});

button.addEventListener("click", addListAfterClick);

input.addEventListener("keypress", addListAfterKeypress);

del.forEach(function(deleteButton) {
	deleteButton.addEventListener("click", function() {
		this.parentElement.remove();
	})
})
