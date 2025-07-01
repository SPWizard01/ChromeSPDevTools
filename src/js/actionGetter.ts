import type { ISharePointSiteInfo } from "../actions/common/interfaces";

export async function getActions(spInfo: ISharePointSiteInfo) {
    const data = await fetch("data/actions.json", { headers: { "Accept": "application/json" } });
    if (!data.ok) {
        throw new Error(`Failed to fetch actions: ${data.statusText}`);
    }
    const jsonData = await data.json();
    const xobj: XMLHttpRequest = new XMLHttpRequest();
    xobj.overrideMimeType("application/json");
    xobj.open("GET", "data/actions.json", true);
    xobj.onreadystatechange = () => {
        if (xobj.readyState === 4 && xobj.status === 200) {
            const data = JSON.parse(xobj.responseText);
            // that.setState({
            //     actions: data.actions,
            //     stylesUrl: data.stylesUrl,
            //     isSp: true,
            //     loading: false,
            //     sharePointInfo: spInfo,
            // });
        }
    };
    xobj.send(null);
}