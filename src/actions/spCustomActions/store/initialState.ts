import { MessageBarType } from "@fluentui/react";
import type { IInitialState } from "../interfaces/spCustomActionsInterfaces";
import { constants } from "./../constants/constants";
import { CustomActionLocation } from "./../constants/constants";

export const initialState: IInitialState = {
    customActionType: CustomActionLocation.Web,
    customActions: [],
    filterText: constants.EMPTY_STRING,
    isWorkingOnIt: true,
    messageData: {
        message: constants.EMPTY_STRING,
        showMessage: false,
        type: MessageBarType.info
    },
    userHasPermission: false
};
