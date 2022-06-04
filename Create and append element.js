let myElem = document.createElement("div");
let myAttr = document.createAttribute("data-custom");
let mytext = document.createTextNode("Product One");
let myComment = document.createComment("This is a Div");

myElem.className = "product";
myElem.setAttributeNode(myAttr);
myElem.setAttribute("data-test", "Testing");
console.log(myElem);

// Append text to element
myElem.appendChild(mytext);

// Append comment to element

myElem.appendChild(myComment);

// Append element to body
document.body.appendChild(myElem);
