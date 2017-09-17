function doStuff(tab) {
    chrome.tabs.executeScript(tab.id, {code: "console.log('toggle on')"});
    chrome.browserAction.setIcon({path: "on.png", tabId: tab.id});
    chrome.tabs.insertCSS(tab.id, {file: "style.css"});
    chrome.tabs.executeScript(tab.id, {file: "script.js"});
}

var isToggled;

chrome.tabs.onUpdated.addListener(function(tabId,changeInfo,tab){
    if (changeInfo.url !== undefined || changeInfo.status !== "complete") {
        return
    }
    chrome.storage.local.get("isToggled", function(items) {
        isToggled = items.isToggled || false;
        if (isToggled) {
            doStuff(tab);
        }
    });
});

chrome.browserAction.onClicked.addListener(function(tab) {
    isToggled = !isToggled;
    chrome.storage.local.set({"isToggled": isToggled});
    if(isToggled){
        doStuff(tab);
    }
    else{
        chrome.tabs.executeScript(tab.id, {code: "window.location.reload()"});
    }
});
