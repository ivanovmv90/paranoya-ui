var toggle = false;
chrome.browserAction.onClicked.addListener(function(tab) {
    toggle = !toggle;
    if(toggle){
        chrome.browserAction.setIcon({path: "on.png", tabId:tab.id});
        chrome.tabs.executeCSS(tab.id, {file:"style.css"});
        chrome.tabs.executeScript(tab.id, {file: script.js});
    }
    else{
        chrome.browserAction.setIcon({path: "off.png", tabId:tab.id});
        chrome.tabs.insertCSS(tab.id, {file:"style.css"});
        chrome.tabs.executeScript(tab.id, {code: "window.location.reload()"});
    }
});