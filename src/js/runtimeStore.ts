import { signal } from "@preact/signals";
import type { ISharePointSiteInfo } from "../actions/common/interfaces";

export const spoRuntime = signal<ISharePointSiteInfo>({ formDigestValue: "", webFullUrl: "", siteFullUrl: "" });

export const actionData = {
    // "stylesUrl": "__%__CDN_URL__%__/styles/bundle.css",
    "actions": [{
        "title": "Search",
        "description": "SharePoint Search API Results.",
        "image": "/assets/search-64-blue.png",
        "scriptUrl": "__%__CDN_URL__%__/spSearch/spSearch.js"
    }, {
        "title": "Property bags",
        "description": "Create, Update or Delete Web Property Bags.",
        "image": "/assets/sp-bag-64-blue.png",
        "scriptUrl": "__%__CDN_URL__%__/SpPropertyBag/SpPropertyBag.js"
    },
    {
        "title": "Site lists",
        "description": "All site lists, including hidden.",
        "image": "/assets/content-management-64-blue.png",
        "scriptUrl": "__%__CDN_URL__%__/SpSiteContent/SpSiteContent.js"
    },
    {
        "title": "Site Custom Actions",
        "description": "Create, Update or Delete Site Custom Actions.",
        "image": "/assets/hammer-nailing-a-nail-in-a-wall-64-blue.png",
        "scriptUrl": "__%__CDN_URL__%__/spSiteCustomActions/spSiteCustomActions.js"
    },
    {
        "title": "Web Custom Actions",
        "description": "Create, Update or Delete Web Custom Actions.",
        "image": "/assets/hammer-nailing-a-nail-in-a-wall-64-blue.png",
        "scriptUrl": "__%__CDN_URL__%__/spWebCustomActions/spWebCustomActions.js"
    },
    {
        "title": "Site/Web Features",
        "description": "Activate, Deactivate site and web features.",
        "image": "/assets/switch-64-blue.png",
        "scriptUrl": "__%__CDN_URL__%__/spFeatures/spFeatures.js"
    }
    ]
}