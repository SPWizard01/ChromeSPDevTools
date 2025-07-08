import { signal } from "@preact/signals";
import type { ISharePointSiteInfo } from "../actions/common/interfaces";

export const spoRuntime = signal<ISharePointSiteInfo>({ formDigestValue: "", webFullUrl: "", siteFullUrl: "" });
export const extensionManifest = signal<chrome.runtime.Manifest | null>(null);
export const actionData = {
    // "stylesUrl": "__%__CDN_URL__%__/styles/bundle.css",
    "actions": [
        {
            "title": "Test",
            "description": "SharePoint Search API Results.",
            "image": "/assets/search-64-blue.png",
            "location": "/test/bla"
        },
        {
            "title": "Search",
            "description": "SharePoint Search API Results.",
            "image": "/assets/search-64-blue.png",
            "location": "/search"
        },
        {
            "title": "Property bags",
            "description": "Create, Update or Delete Web Property Bags.",
            "image": "/assets/sp-bag-64-blue.png",
            "location": "/propertybag"
        },
        {
            "title": "Site lists",
            "description": "All site lists, including hidden.",
            "image": "/assets/content-management-64-blue.png",
            "location": "/siteLists"
        },
        {
            "title": "Site Custom Actions",
            "description": "Create, Update or Delete Site Custom Actions.",
            "image": "/assets/hammer-nailing-a-nail-in-a-wall-64-blue.png",
            "location": "/userCustomActions/site"
        },
        {
            "title": "Web Custom Actions",
            "description": "Create, Update or Delete Web Custom Actions.",
            "image": "/assets/hammer-nailing-a-nail-in-a-wall-64-blue.png",
            "location": "/userCustomActions/web"
        },
        {
            "title": "Site/Web Features",
            "description": "Activate, Deactivate site and web features.",
            "image": "/assets/switch-64-blue.png",
            "location": "/features"
        }
    ]
}