
import { App } from "./app";
import { constants } from "./constants/constants";
import { CustomActionLocation } from "./constants/constants";

const modalTitle = constants.MODAL_SITE_CA_DIALOG_TITLE;
const divId = constants.COMPONENT_SITE_CA_DIV_ID;
const caType = CustomActionLocation.Site;

window.SpSiteCustomActionsObj = new App(modalTitle, divId, caType);
window.SpSiteCustomActionsObj.show();
