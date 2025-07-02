
import type { ActionCreator, ActionCreatorsMapObject, Dispatch } from "redux";
import type { IAction, IMessageData } from "./../../common/interfaces";
import type { CustomActionLocationType } from "./../constants/constants";

export interface ICustomAction {
    name: string;
    description: string;
    id: string;
    title: string;
    group: string;
    registrationType: number;
    scriptSrc: string;
    scriptBlock: string;
    location: string;
    sequence: number;
    imageUrl: string;
    url: string;
    [key: string]: any; // To allow index references with ICustomAction objects
}

export interface IInitialState {
    isWorkingOnIt: boolean;
    userHasPermission: boolean;
    filterText: string;
    messageData: IMessageData;
    customActions: ICustomAction[];
    customActionType: CustomActionLocationType;
}

export interface ISpCustomActionsActionCreatorsMapObject extends ActionCreatorsMapObject {
    createCustomAction: (customAction: ICustomAction, caType: CustomActionLocationType) =>
        (dispatch: Dispatch<IAction<ICustomAction>>) => Promise<void>;
    updateCustomAction: (customAction: ICustomAction, caType: CustomActionLocationType) =>
        (dispatch: Dispatch<IAction<ICustomAction>>) => Promise<void>;
    deleteCustomAction: (customAction: ICustomAction, caType: CustomActionLocationType) =>
        (dispatch: Dispatch<IAction<ICustomAction>>) => Promise<void>;
    getAllCustomActions: (caType: CustomActionLocationType) =>
        (dispatch: Dispatch<IAction<ICustomAction[]>>) => Promise<void>;
    checkUserPermissions: (permissionKing: SP.PermissionKind, caType: CustomActionLocationType) =>
        (dispatch: Dispatch<IAction<ICustomAction[]>>) => Promise<void>;
    setFilterText: ActionCreator<IAction<string>>;
    setWorkingOnIt: ActionCreator<IAction<boolean>>;
    setUserHasPermissions: ActionCreator<IAction<boolean>>;
    setMessageData: ActionCreator<IAction<IMessageData>>;
}

export interface IMapDispatchToProps {
    actions: ISpCustomActionsActionCreatorsMapObject;
}

export interface ISpCustomActionsProps {
    currentUserHasPermissions: boolean;
    isWorkingOnIt: boolean;
    customActions: ICustomAction[];
    messageData: IMessageData;
    filterText: string;
    customActionType: CustomActionLocationType;
    actions: ISpCustomActionsActionCreatorsMapObject;
}

export interface IMapStateToProps {
    currentUserHasPermissions: boolean;
    customActions: ICustomAction[];
    isWorkingOnIt: boolean;
    messageData: IMessageData;
    filterText: string;
    customActionType: CustomActionLocationType;
}
export interface IMapStateToPropsState {
    spCustomActionsReducer: IInitialState;
}

export interface IMapStateToProps {
    currentUserHasPermissions: boolean;
    customActions: ICustomAction[];
    isWorkingOnIt: boolean;
    messageData: IMessageData;
    filterText: string;
    customActionType: CustomActionLocationType;
}
