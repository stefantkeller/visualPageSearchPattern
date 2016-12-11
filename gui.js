// add a div to the page, of class vPSP
// its appearance we can control in the .css through this class name
var maindiv = document.createElement("div");
maindiv.style.height = window.outerHeight + "px";

var text = document.createTextNode("Height: " + window.outerHeight);
maindiv.appendChild(text);
addToPage(maindiv);


function addToPage(what) {
    var attr = document.createAttribute("class");
    attr.value = "vPSP";
    what.setAttributeNode(attr);
    document.body.appendChild(what);
}
