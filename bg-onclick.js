// Called when the user clicks on the browser action.

chrome.browserAction.onClicked.addListener(function(tabs) {
    console.log(tabs);

    new Notification('windowID: ' + tabs.windowId + ', id: ' + tabs.id + ', index: ' + tabs.index, {
        icon: tabs.favIconUrl,
        body: tabs.title
    });
});