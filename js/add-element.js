/*
 * Practice on Elements
 */

// get all the hot class elements
var nlist = document.querySelectorAll("li.hot");
for (var i = 0; i < nlist.length; i++) {
  nlist[i].setAttribute("class", "cool");
}

// traverse the elements
var e1 = document.getElementById("one");
var e2 = e1.parentNode.previousSibling.previousSibling;
e2.childNodes[1].nodeValue = "Groceries Lists";

nlist = document.querySelectorAll("li");
for (var i = 0; i < nlist.length; i++) {
  nlist[i].addEventListener("click", changeStyle);
}

// add a new element
var newE1 = document.createElement("li");
var newText = document.createTextNode("quinoa");
newE1.appendChild(newText);
newE1.setAttribute("class", "cool");
newE1.addEventListener("click", changeStyle);

var position = document.getElementById("todo");

position.appendChild(newE1);

// add by click
document.getElementById("add").addEventListener("click", addElement);

function addElement() {
  // add a new element
  var newE1 = document.createElement("li");
  // var newText = document.createTextNode('quinoa');
  var newText = document.createElement("input");
  newText.setAttribute("type", "text");
  newText.addEventListener("blur", changeText);

  newE1.appendChild(newText);
  newE1.setAttribute("class", "cool");

  var position = document.getElementById("todo");

  position.appendChild(newE1);
}

function changeText() {
  var val = this.value;
  var newText = document.createTextNode(this.value);

  var container = this.parentNode;
  container.appendChild(newText);
  container.onclick = changeStyle;
  container.removeChild(this);
}

function changeStyle() {
  var className = this.getAttribute("class");
  if (className == "complete") {
    this.setAttribute("class", "cool");
  } else {
    this.setAttribute("class", "complete");
  }
}

// delete by click
document.getElementById("remove").addEventListener("click", removeElement);

function removeElement() {
  var nlist = document.querySelectorAll("li.complete");
  for (var i = 0; i < nlist.length; i++) {
    var position = document.getElementById("todo");
    position.removeChild(nlist[i]);
  }
}



