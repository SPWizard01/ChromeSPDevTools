
import { App } from "./app";
import { constants } from "./constants/constants";
import { CustomActionLocation } from "./constants/constants";

const modalTitle = constants.MODAL_WEB_CA_DIALOG_TITLE;
const divId = constants.COMPONENT_WEB_CA_DIV_ID;
const caType = CustomActionLocation.Web;

window.SpWebCustomActionsObj = new App(modalTitle, divId, caType);
window.SpWebCustomActionsObj.show();
