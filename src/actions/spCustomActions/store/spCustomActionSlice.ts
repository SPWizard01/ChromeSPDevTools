import { createSlice, type ActionCreatorWithPayload, type PayloadAction } from "@reduxjs/toolkit";
import { initialState } from "./initialState";
import type { ICustomAction } from "../interfaces/spCustomActionsInterfaces";
import { MessageBarType } from "@fluentui/react";
import { constants, type CustomActionLocationType } from "../constants/constants";
import type { IMessageData } from "../../common/interfaces";

export const spCustomActionSlice = createSlice({
    name: "spCustomActions",
    initialState,
    reducers: {
        createCustomAction: (state, action: PayloadAction<ICustomAction>) => {
            const newCustomAction = action.payload;
            const newArray = state.customActions.slice();
            newArray.splice(0, 0, newCustomAction);
            state.customActions = newArray;
            state.isWorkingOnIt = false;
            state.messageData = {
                message: constants.MESSAGE_CUSTOM_ACTION_CREATED,
                showMessage: true,
                type: MessageBarType.success
            };
        },

        deleteCustomAction: (state, action: PayloadAction<ICustomAction>) => {
            state.customActions = [...state.customActions.filter((prop) => prop.id !== action.payload.id)];
            state.isWorkingOnIt = false;
            state.messageData = {
                message: constants.MESSAGE_CUSTOM_ACTION_DELETED,
                showMessage: true,
                type: MessageBarType.success
            }
        },

        updateCustomAction: (state, action: PayloadAction<ICustomAction>) => {
            const filtered = state.customActions.map((prop: ICustomAction) => {
                if (prop.id === action.payload.id) {
                    return action.payload;
                } else {
                    return prop;
                }
            });
            state.customActions = filtered;
            state.isWorkingOnIt = false;
            state.messageData = {
                message: constants.MESSAGE_CUSTOM_ACTION_UPDATED,
                showMessage: true,
                type: MessageBarType.success
            }
        },
        setFilterText(state, action: PayloadAction<string>) {
            state.filterText = action.payload;
        },
        setMessageData(state, action: PayloadAction<IMessageData>) {
            state.messageData = action.payload;
        },


        setUserHasPermission(state, action: PayloadAction<boolean>) {
            state.userHasPermission = action.payload;
        }
        ,
        setAllCustomActions: (state, action: PayloadAction<ICustomAction[]>) => {
            state.customActions = action.payload;
            state.isWorkingOnIt = false;
        },

        setIsWorkingOnIt(state, action: PayloadAction<boolean>) {
            state.isWorkingOnIt = action.payload;
        },
        setCustomActionType: (state, action: PayloadAction<CustomActionLocationType>) => {
            state.customActionType = action.payload;
        }
    }
})

export const spCustomActionSliceReducer = spCustomActionSlice.reducer;
export const {
    createCustomAction,
    deleteCustomAction,
    updateCustomAction,
    setAllCustomActions,
    setFilterText,
    setIsWorkingOnIt,
    setMessageData,
    setUserHasPermission
} = spCustomActionSlice.actions;