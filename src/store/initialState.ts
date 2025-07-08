import { MessageBarType } from "@fluentui/react";
import type { IInitialState } from "../actions/spCustomActions/interfaces/spCustomActionsInterfaces";
import { constants } from "../actions/spCustomActions/constants/constants";
import { CustomActionLocation } from "../actions/spCustomActions/constants/constants";

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
