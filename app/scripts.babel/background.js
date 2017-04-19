'use strict';

chrome.runtime.onInstalled.addListener(details => {
  console.log('previousVersion', details.previousVersion);
});

chrome.webNavigation.onHistoryStateUpdated.addListener((e) => {
  chrome.tabs.query({
    active: true,
    currentWindow: true
  }, function(tabs) {
    chrome.tabs.get(e.tabId, function(tab) {
      if (tab.url === e.url) {
        chrome.tabs.sendMessage(tabs[0].id, {
          event: 'historyChange'
        });
      }
    });
  });
}, {
  url: [{
    hostSuffix: 'github.com'
  }]
});
