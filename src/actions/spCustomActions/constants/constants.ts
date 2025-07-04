export const ActionsId = {
    CREATE_CUSTOM_ACTION: "CREATE_CUSTOM_ACTION",
    DELETE_CUSTOM_ACTION: "DELETE_CUSTOM_ACTION",
    HANDLE_ASYNC_ERROR: "HANDLE_ASYNC_ERROR",
    SET_ALL_CUSTOM_ACTIONS: "SET_ALL_CUSTOM_ACTIONS",
    SET_FILTER_TEXT: "SET_FILTER_TEXT",
    SET_MESSAGE_DATA: "SET_MESSAGE_DATA",
    SET_USER_PERMISSIONS: "SET_USER_PERMISSIONS",
    SET_WORKING_ON_IT: "SET_WORKING_ON_IT",
    UPDATE_CUSTOM_ACTION: "UPDATE_CUSTOM_ACTION",
};

export const constants = {
    CANCEL_TEXT: "Cancel",
    COMPONENT_SITE_CA_DIV_ID: "spSiteCustomActionsBaseDiv",
    COMPONENT_WEB_CA_DIV_ID: "spWebCustomActionsBaseDiv",
    CONFIRM_DELETE_CUSTOM_ACTION: "Are you sure you want to remove this custom action?",
    CREATE_TEXT: "Create",
    CUSTOM_ACTION_REST_REQUEST_URL: "/usercustomactions",
    DELETE_TEXT: "Delete",
    EDIT_TEXT: "Edit",
    EMPTY_STRING: "",
    EMPTY_TEXTBOX_ERROR_MESSAGE: "The value can not be empty",
    ERROR_MESSAGE_DELETING_CUSTOM_ACTION: "Deleting the custom action",
    ERROR_MESSAGE_SETTING_CUSTOM_ACTION: "Creating or updating the custom action",
    ERROR_MESSAGE_CHECK_USER_PERMISSIONS: "An error occurred checking current user's permissions",
    ERROR_MESSAGE_CREATE_CUSTOM_ACTION: "An error occurred creating a new web custom action",
    ERROR_MESSAGE_DELETE_CUSTOM_ACTION: "An error occurred deleting the selected custom action",
    ERROR_MESSAGE_GET_ALL_CUSTOM_ACTIONS: "An error occurred getting all custom actions",
    ERROR_MESSAGE_UPDATE_CUSTOM_ACTION: "An error occurred updating the selected custom action",
    MESSAGE_CUSTOM_ACTION_CREATED: "A new custom action has been created.",
    MESSAGE_CUSTOM_ACTION_DELETED: "The selected custom action has been deleted.",
    MESSAGE_CUSTOM_ACTION_UPDATED: "The selected custom action has been updated.",
    MESSAGE_USER_NO_PERMISSIONS: "The current user does NOT have permissions to work with the web custom action.",
    MODAL_DIALOG_WIDTH: "700px",
    MODAL_SITE_CA_DIALOG_TITLE: "Site Custom Actions",
    MODAL_WEB_CA_DIALOG_TITLE: "Web Custom Actions",
    SAVE_TEXT: "Save",
    STRING_STRING: "string",
    TEXTBOX_PREFIX: "spPropInput_",
    UNDEFINED_STRING: "undefined",
};
export const CustomActionLocation = {
    Site: "Site",
    Web: "Web",
} as const;

export type CustomActionLocationType = keyof typeof CustomActionLocation;
