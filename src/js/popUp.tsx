import { List, Stack, ThemeProvider, type PartialTheme } from "@fluentui/react";
import { Spinner, SpinnerSize } from "@fluentui/react";
import { ActionItem } from "./actionItem";
import type { ISharePointSiteInfo } from "../actions/common/interfaces";
import { useEffect, useState } from "preact/hooks";
import { useSignalEffect } from "@preact/signals";
import { actionData, spoRuntime } from "./runtimeStore";
const lightTheme: PartialTheme = {
    semanticColors: {
        bodyBackground: "white",
        bodyText: "black",
    },
};
interface IActionData {
    title: string;
    description: string;
    image: string;
    scriptUrl: string;
}

interface IPopUpProps {
    currentVersion?: string;
}
interface IPopUpState {
    actions: IActionData[];
    stylesUrl: string;
    isSp: boolean;
    loading: boolean;
    sharePointInfo: ISharePointSiteInfo | null;
}

export function PopUp(props: IPopUpProps) {
    const [actions, setActions] = useState(actionData.actions);
    const [stylesUrl, setStylesUrl] = useState("");
    const [loading, setLoading] = useState(true);
    const [isSp, setIsSp] = useState(false);

    useSignalEffect(() => {
        if (
            spoRuntime.value.formDigestValue &&
            spoRuntime.value.webFullUrl &&
            spoRuntime.value.siteFullUrl
        ) {
            setLoading(false);
        }
        if (spoRuntime.value.formDigestValue !== "-1") {
            setIsSp(true);
        }
    });
    if (loading) {
        return (
            <div className="container">
                <Spinner
                    size={SpinnerSize.large}
                    label="Making sure everything is in order..."
                />
            </div>
        );
    }
    if (!isSp) {
        return (
            <div className="container">
                <span className="ms-font-xl ms-fontColor-themePrimary ms-fontWeight-semibold">
                    Not a SharePoint site
                </span>
                <hr />
                <div className="ms-font-m ms-fontWeight-light tool-version">
                    <span>Try opening the tool on a SharePoint Tab</span>
                </div>
            </div>
        );
    }

    return (
        <ThemeProvider theme={lightTheme} className={"container"} style={{width: "300px"}}>
            <span className="ms-font-xl ms-fontColor-themePrimary ms-fontWeight-semibold">
                Chrome SP Dev Tools
            </span>
            <hr />
            <Stack>
                <List
                    items={actions}
                    onRenderCell={renderItem}
                    renderedWindowsAhead={4}
                />
            </Stack>
            <div className="ms-font-mi ms-fontWeight-light tool-version">
                <span>Version {props.currentVersion}</span>
            </div>
        </ThemeProvider>
    );

    function renderItem(item?: IActionData, index?: number) {
        return <ActionItem item={item} key={index} stylesUrl={stylesUrl} />;
    }
}
