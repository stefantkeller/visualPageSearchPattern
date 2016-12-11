browser.contextMenus.create({
    id: "visualPageSearchPattern",
    title: "Visualize pattern for on page search"
});

browser.contextMenus.onClicked.addListener(function(info, tab){
    if (info.menuItemId == "visualPageSearchPattern") {
        browser.tabs.executeScript({
            file: "gui.js"
        });
        browser.tabs.insertCSS({
            file: "gui.css"
        });
    }
});
