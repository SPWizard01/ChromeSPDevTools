import { render } from "preact";
import { PopUp } from "./popUp";
import { spCheckerFetch } from "./spChecker";
import { spoRuntime } from "./runtimeStore";
import "./assetImports";
// await import("./styles.scss");
// chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
//     chrome.scripting.executeScript({
//         target: { tabId: tabs[0].id as number },
//         func() {
//             alert("GG");
//         },
//     })
// });
const manifestData = chrome.runtime.getManifest();
chrome.tabs.query({ active: true, currentWindow: true }, (tab) => {
    chrome.scripting.executeScript(
        {
            target: { tabId: tab[0].id as number },
            world: "MAIN",
            func: spCheckerFetch,
        },
        (retValue) => {
            if (retValue && retValue[0]?.result) {
                spoRuntime.value = {
                    formDigestValue: retValue[0].result.formDigestValue,
                    webFullUrl: retValue[0].result.webFullUrl,
                    siteFullUrl: retValue[0].result.siteFullUrl,
                };
            }
        }
    );
});
const mp = document.getElementById("app");
if (mp) {
    render(<PopUp currentVersion={manifestData.version} />, mp);
} else {
    window.document.body.innerHTML = `error: popUpContent element not found`;
}
