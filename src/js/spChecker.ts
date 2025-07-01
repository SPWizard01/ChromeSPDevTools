
export function spChecker() {
    var href = window.location.href;
    var lastIndex = href.lastIndexOf('/_layouts');
    if (lastIndex === -1) {
        lastIndex = href.lastIndexOf('/');
        var lastPath = href.substring(lastIndex);
        if (lastPath.lastIndexOf('.') === -1) {
            lastIndex = href.length;
        }
    }
    var requestUrl = href.substring(0, lastIndex + 1);
    if (!requestUrl.endsWith("/")) {
        requestUrl += '/';
    }
    requestUrl += '_api/contextinfo';
    var request = new XMLHttpRequest();
    request.open("POST", requestUrl, false);
    request.setRequestHeader("Accept", "application/json, text/javascript");
    request.send(null);
    var response;

    if (request.status === 200) {
        response = request.responseText;
    }
    try {
        debugger;
        var data = JSON.parse(response ?? "{}");
        if (data.FormDigestValue && data.WebFullUrl && data.SiteFullUrl) {
            return { formDigestValue: data.FormDigestValue, webFullUrl: data.WebFullUrl, siteFullUrl: data.SiteFullUrl };
        } else {
            return false;
        }
    } catch (a) {
        return false;
    }
}

export async function spCheckerFetch() {
    var href = window.location.href;
    var lastIndex = href.lastIndexOf('/_layouts');
    if (lastIndex === -1) {
        lastIndex = href.lastIndexOf('/');
        var lastPath = href.substring(lastIndex);
        if (lastPath.lastIndexOf('.') === -1)
            lastIndex = href.length;

    }
    var requestUrl = href.substring(0, lastIndex + 1);
    if (!requestUrl.endsWith("/")) {
        requestUrl += '/';
    }
    requestUrl += '_api/contextinfo';
    const resp = await fetch(requestUrl, {
        method: "POST",
        headers: {
            "Accept": "application/json"
        },
        credentials: "include"
    })

    if (resp.status === 200) {

        try {
            var data = await resp.json();
            if (data.FormDigestValue && data.WebFullUrl && data.SiteFullUrl) {
                return { formDigestValue: data.FormDigestValue, webFullUrl: data.WebFullUrl, siteFullUrl: data.SiteFullUrl };
            }
        } catch (a) {
            console.error("Error parsing response:", a);
        }
    }
    else {
        console.error("Error fetching context info:", resp.status, resp.statusText);
    }

    return { formDigestValue: "-1", webFullUrl: "-1", siteFullUrl: "-1" }

}