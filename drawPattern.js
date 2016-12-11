function addNewElement(towhat, whatnew){
    var _new = document.createElement(whatnew);
    towhat.appendChild(_new);
    return _new;
}

function addText(towhat, text){
    var _text = document.createTextNode(text);
    towhat.appendChild(_text);
}

function addCell(table, color, height){
    var row = addNewElement(table, "tr");
    var cell = addNewElement(row, "td");
    cell.style = "background-color: " + color + "; height: " + height;
}

