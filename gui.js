// add a div to the page, the height should correspond to the one of the open window
var maindiv = document.createElement("div");
maindiv.style.height = window.outerHeight + "px"; // this number we can't figure out in pure css, have to add it here dynamically
document.body.appendChild(maindiv); // finally, ad to the page

// maindiv's appearance we can control in the .css through this class name:
var attr = document.createAttribute("class");
attr.value = "vPSP";
maindiv.setAttributeNode(attr);

// to populate maindiv with content we use:
var text = document.createTextNode("Height: " + window.outerHeight);
maindiv.appendChild(text);


