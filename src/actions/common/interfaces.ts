import { MessageBarType } from "@fluentui/react";

export interface IMessageData {
    showMessage: boolean;
    message: string;
    type: MessageBarType;
}

export interface IAction<T> {
    readonly type: string;
    readonly payload: T;
}

export interface ISharePointSiteInfo {
    formDigestValue: string;
    webFullUrl: string;
    siteFullUrl: string;
}