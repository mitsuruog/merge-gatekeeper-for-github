import { OptionsService } from "./shared/services";

function hasMergePermission() {
  return Boolean(document.querySelector(".js-merge-box"));
}

function makeDefense() {
  // checking if message exist
  if (document.querySelector("#merge-gatekeeper-for-github__message")) {
    return;
  }

  const $baseRef = document.querySelector("span.base-ref");
  const $headRef = document.querySelector("span.head-ref");

  const $container = document.querySelector(".merge-message");

  const $message = document.createElement("div");
  $message.id = "merge-gatekeeper-for-github__message";
  $message.className = "flash flash-warn my-2";
  $message.innerHTML = chrome.i18n.getMessage("message", [$headRef.textContent, $baseRef.textContent]);

  $container.appendChild($message);
}

if (hasMergePermission()) {
  makeDefense();
}

// TODO: add chrome.storage.onChanged.addListener to update interval automatically.
OptionsService.restoreOptions(options => {
  window.setInterval(() => {
    if (hasMergePermission()) {
      makeDefense();
    }
  }, options.intervalSec * 1000);
});

