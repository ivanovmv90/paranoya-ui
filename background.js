var toggle = false;

chrome.browserAction.onClicked.addListener(function(tab) {
    toggle = !toggle;
    if(toggle){
        chrome.tabs.executeScript(tab.id, {code: "console.log('toggle on')"});
        chrome.browserAction.setIcon({path: "on.png", tabId:tab.id});
        chrome.tabs.insertCSS(tab.id, {file:"style.css"});
        chrome.tabs.executeScript(tab.id, {file: script.js});
    }
    else{
        chrome.tabs.executeScript(tab.id, {code: "window.location.reload()"});
    }
});