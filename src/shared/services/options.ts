export interface Options {
  intervalSec: number;
}

export const DEFAULT_INTERVAL_SEC = 3;

export function restoreOptions(callback?: (options: Options) => void) {
  chrome.storage.sync.get(["intervalSec"], result => {
    const { intervalSec } = result;
    const options = {
      intervalSec: intervalSec || DEFAULT_INTERVAL_SEC
    };
    if (typeof callback === "function") {
      callback(options);
    }
  });
}

export function storeOptions(options: Options, callback?: (options: Options) => void) {
  chrome.storage.sync.set(options, () => {
    if (typeof callback === "function") {
      callback(options);
    }
  });
}
