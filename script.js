const body = document.body;
let input;
let button;
let ul;
const arr = ["Notebook", "Jello", "Spinach", "Rice", "Birthday Cake", "Candles"];

function createInitialElements() {
	const h1 = document.createElement("h1");
	h1.appendChild(document.createTextNode("Shopping List"));
	body.appendChild(h1);

	const p1 = document.createElement("p"); 
	p1.appendChild(document.createTextNode("Get it done today"));
	p1.setAttribute("id", "first");
	body.appendChild(p1);

	input = document.createElement("input"); 
	input.setAttribute("placeholder", "enter items");
	input.setAttribute("type", "text");
	input.setAttribute("id", "userinput");
	body.appendChild(input);

	button = document.createElement("button"); 
	button.appendChild(document.createTextNode("Enter"));
	button.setAttribute("id", "enter");
	body.appendChild(button);

	ul = document.createElement("ul");
	body.appendChild(ul);
	arr.forEach(element => createListItem(element));
}

function createListElement() {
	createListItem(input.value.trim());
	input.value = "";
}

function createListItem(textElement) {
	const li = document.createElement("li"); 
	li.appendChild(document.createTextNode(textElement)); 
	const buttonDel = document.createElement("button"); 
	buttonDel.classList.add("buttonDel"); 
	buttonDel.appendChild(document.createTextNode("x")); 
	li.appendChild(buttonDel); 
	ul.appendChild(li); 
}

function inputLength() {
	return input.value.trim().length; 
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

function toggleDone(event) {
	const selectedHtmlElement = event.target; 
	if (selectedHtmlElement.nodeName === 'LI') {
		selectedHtmlElement.classList.toggle("done");
	}
}

function deleteListElement(event) {
	const selectedHtmlElement = event.target;
	if (selectedHtmlElement.nodeName === "BUTTON") {
		selectedHtmlElement.parentElement.remove();
	}
}

createInitialElements();

button.addEventListener("click", addListAfterClick);

input.addEventListener("keypress", addListAfterKeypress);

ul.addEventListener("click", toggleDone);

ul.addEventListener("click", deleteListElement);


// 1. If you click on the list item

// 1.1 make list items clickable +
// создать переменную +
// узнать как выбрать list item +
// присвоить ей значение list item +
// сделать кликабельным list item +


// 2. it toggles the .done class on and off. +
// написать функцию, которая будет убирать и добавлять класс .done +
// подключить эту функцию к list items +

// 2. Add buttons next to each list item to delete the item when clicked on its corresponding delete button.
// узнать, как добавить кнопку элементу +
// эта кнопка должна добавляться к каждому новому элементу списка +
// для кнопки прописать механизм удаления элемента (и кнопки) +
// кнопка удаления должна быть у каждого элемента 

// 3. 
// Создать масссив строк Notebook, Jello, Spinach, Rice, Birthday Cake, Candles +
// создать функцию CreateInitElement +
// создать UL +
// внутри UL из массива строк создать список LI +
// где у элементов будет возможность зачеркивания + 
// и кнопка удаления +