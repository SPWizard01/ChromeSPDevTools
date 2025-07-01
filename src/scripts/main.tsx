import { render } from "preact";
import { PopUp } from "./chromeExtension/popUp";
chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
    chrome.scripting.executeScript({
        target: { tabId: tabs[0].id as number },
        func() {
            alert("GG");
        },
    })
});
const manifestData = chrome.runtime.getManifest();
const mp = document.getElementById("popUpContent");
if (mp) {
    render(<PopUp currentVersion={manifestData.version} />, mp);
}
