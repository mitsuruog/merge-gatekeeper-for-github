'use strict';

chrome.runtime.onInstalled.addListener(details => {
  console.log('previousVersion', details.previousVersion);
});

chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
  if (tab.active && tab.status === 'complete') {
    chrome.tabs.sendMessage(tabId, {
      event: 'historyChange'
    });
  }
});