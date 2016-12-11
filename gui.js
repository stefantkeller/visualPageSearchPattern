// add a div to the page, the height should correspond to the one of the open window
var maindiv = document.createElement("div");
maindiv.style.height = window.outerHeight + "px"; // this number we can't figure out in pure css, have to add it here dynamically
document.body.appendChild(maindiv); // finally, ad to the page

// maindiv's appearance we can control in the .css through this class name:
var attr = document.createAttribute("class");
attr.value = "vPSP";
maindiv.setAttributeNode(attr);

// to populate maindiv with content we use:
//var text = document.createTextNode("Height: " + window.outerHeight);
//maindiv.appendChild(text);
addText(maindiv, "Height: " + window.outerHeight);

// add table whose cells dimensions are defined in the css and the colors draw the pattern
var table = addNewElement(maindiv, "table");
var headrow = addNewElement(table, "tr");
var headcell = addNewElement(headrow, "th");

addText(headcell, "Head cell");

var cellHeight = 20 + "px";
console.log(cellHeight)

addCell(table, "#0f0", cellHeight);
addCell(table, "#00f", cellHeight);
addCell(table, "#0ff", cellHeight);

