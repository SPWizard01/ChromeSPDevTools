import { List } from "office-ui-fabric-react/lib/List";
import { Spinner, SpinnerType } from "office-ui-fabric-react/lib/Spinner";
import ActionItem from "./ActionItem";
import "./styles/chromeExtePopUp.scss";
import type { ISharePointSiteInfo } from "../actions/common/interfaces";
import { useState } from "preact/hooks";
import { spChecker } from "./spChecker";

interface IActionData {
    title: string;
    description: string;
    image: string;
    scriptUrl: string;
};

interface IPopUpProps {
    currentVersion: string;
}
interface IPopUpState {
    actions: IActionData[];
    stylesUrl: string;
    isSp: boolean;
    loading: boolean;
    sharePointInfo: ISharePointSiteInfo | null;
}

export function PopUp(props: IPopUpProps) {
    const [actions, setActions] = useState([]);
    const [stylesUrl, setStylesUrl] = useState("");
    const [loading, setLoading] = useState(true);
    const [isSp, setIsSp] = useState(false);
    const [sharePointInfo, setSharePointInfo] = useState<ISharePointSiteInfo>();
    if (loading) {
        return (
            <div className="container">
                <Spinner type={SpinnerType.large} label="Making sure everything is in order..." />
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
                <div className="ms-font-m ms-fontWeight-light tool-version" >
                    <span>
                        Try opening the tool on a SharePoint Tab
                    </span>
                </div>
            </div>
        );
    }



    return (
        <div className="container">
            <span className="ms-font-xl ms-fontColor-themePrimary ms-fontWeight-semibold">Chrome SP Dev Tools</span>
            <hr />
            <List items={actions} onRenderCell={renderItem} renderedWindowsAhead={4} />
            <div className="ms-font-mi ms-fontWeight-light tool-version" >
                <span>Version {currentVersion}</span>
            </div>
        </div>
    );


    function getActions(spInfo: ISharePointSiteInfo) {
        const xobj: XMLHttpRequest = new XMLHttpRequest();
        xobj.overrideMimeType("application/json");
        xobj.open("GET", "data/actions.json", true);
        xobj.onreadystatechange = () => {
            if (xobj.readyState === 4 && xobj.status === 200) {
                const data = JSON.parse(xobj.responseText);
                that.setState({
                    actions: data.actions,
                    stylesUrl: data.stylesUrl,
                    isSp: true,
                    loading: false,
                    sharePointInfo: spInfo
                });
            }
        };
        xobj.send(null);

    }
    function renderItem(item?: IActionData, index?: number) {
        return <ActionItem item={item} key={index} stylesUrl={stylesUrl} spInfo={sharePointInfo} />;
    }
    function checkIfSharePoint() {
        const { promise, resolve } = Promise.withResolvers<boolean>();
        chrome.tabs.query({ active: true, currentWindow: true }, (tab) => {
            chrome.scripting.executeScript({
                target: { tabId: tab[0].id as number },
                world: "MAIN",
                func() {
                    return spChecker()
                }
            }, (retValue) => {
                !!retValue && retValue[0];
            });
        });
        return promise;

    }
}
