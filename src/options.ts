import { I18nService, OptionsService } from "./shared/services";

I18nService.applyMassageOnPage();

const $intervalSec = document.getElementById("interval_sec") as HTMLInputElement;

document.addEventListener("DOMContentLoaded", () => {
  OptionsService.restoreOptions(options => {
    $intervalSec.value = options.intervalSec.toString();
  });
});

$intervalSec.addEventListener("input", e => {
  const { value } = e.target as HTMLInputElement;
  OptionsService.storeOptions({ intervalSec: parseInt(value, 10) || 0 });
});
