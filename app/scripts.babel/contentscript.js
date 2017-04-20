'use strict';

function hasMergePermission() {
  return Boolean(document.querySelector('.btn-group-merge'));
}

function makeDefense() {
  // checking if message exist
  if (document.querySelector('.merge-gatekeeper-for-github__message')) {
    return;
  }

  const $baseRef = document.querySelector('span.base-ref');
  const $headRef = document.querySelector('span.head-ref');

  const $mergeMessage = document.querySelector('.merge-message');

  const $message = document.createElement('div');
  $message.className = 'merge-gatekeeper-for-github__message flash flash-warn my-2';
  $message.innerHTML = chrome.i18n.getMessage('message', [$headRef.textContent, $baseRef.textContent]);

  $mergeMessage.appendChild($message);
}

hasMergePermission() && makeDefense();

chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {
    if (request.event == 'historyChange') {
      hasMergePermission() && makeDefense();
    }
  }
);
