'use strict';

function hasMergePermission() {
  return Boolean(document.querySelector('.btn-group-merge'));
}

function makeDefense() {
  const $baseRef = document.querySelector('span.base-ref');
  const $headRef = document.querySelector('span.head-ref');

  const $mergeMessage = document.querySelector('.merge-message');

  const $message = document.createElement('div');
  $message.className = 'flash flash-warn my-2';
  $message.innerHTML = chrome.i18n.getMessage('message', [$headRef.textContent, $baseRef.textContent]);

  $mergeMessage.appendChild($message);
}

hasMergePermission() && makeDefense();
