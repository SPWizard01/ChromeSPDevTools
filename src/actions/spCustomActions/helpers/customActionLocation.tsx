import type { IContextualMenuItem } from "@fluentui/react";
import { Link } from "react-router";
import SpCustomActionsItemFormScriptLink from "../components/spCustomActionsItemFormScriptLink";
import SpCustomActionsItemFormStandarMenu from "../components/spCustomActionsItemFormStandarMenu";
import type { ICustomAction } from "../interfaces/spCustomActionsInterfaces";
import type { JSX } from "preact";

export interface ICustomActionType extends IContextualMenuItem {
    type: string;
}

export interface ILocationItem {
    filterItem: (item: any) => boolean;
    key: string;
    type: string;
    name: string;
    spLocationName: string;
    renderForm: (item: ICustomAction, onChange: (value: string, key: string) => void) => JSX.Element;
    validateForm: (item: ICustomAction) => boolean;
}
class CustomActionLocationHelper {
    protected _location: ILocationItem[] = [
        {
            filterItem: (item: any) => {
                return item.Location === "ScriptLink" && !!item.ScriptSrc;
            },
            key: "ScriptSrc",
            name: "Script Src",
            renderForm: (item: ICustomAction, onChange: (value: string, key: string) => void): JSX.Element => {
                return <SpCustomActionsItemFormScriptLink item={item} onInputChange={onChange} isScriptBlock={false} />;
            },
            spLocationName: "ScriptLink",
            type: "ScriptSrc",
            validateForm: (item: ICustomAction): boolean => {
                return item.sequence > 0 && item.scriptSrc !== "";
            }
        },
        {
            filterItem: (item: any) => {
                return item.Location === "ScriptLink" && !!item.ScriptBlock;
            },
            key: "ScriptBlock",
            name: "Script Block",
            renderForm: (item: ICustomAction, onChange: (value: string, key: string) => void): JSX.Element => {
                return <SpCustomActionsItemFormScriptLink item={item} onInputChange={onChange} isScriptBlock={true} />;
            },
            spLocationName: "ScriptLink",
            type: "ScriptBlock",
            validateForm: (item: ICustomAction): boolean => {
                return item.sequence > 0 && item.scriptBlock !== "";
            }
        },
        {
            filterItem: (item: any) => {
                const allowedGroups = ["ActionsMenu", "SiteActions"];
                return item.Location === "Microsoft.SharePoint.StandardMenu" && allowedGroups.indexOf(item.Group) >= 0;
            },
            key: "StandardMenu",
            name: "Standard Menu",
            renderForm: (item: ICustomAction, onChange: (value: string, key: string) => void): JSX.Element => {
                return <SpCustomActionsItemFormStandarMenu item={item} onInputChange={onChange} />;
            },
            spLocationName: "Microsoft.SharePoint.StandardMenu",
            type: "StandardMenu",
            validateForm: (item: ICustomAction): boolean => {
                return item.sequence > 0 && item.group !== "" && item.url !== "";
            }
        }
    ];
    public get supportedCustomActions(): string[] {
        return this._location.map((item: ILocationItem) => {
            return item.spLocationName;
        });
    }
    public get supportedCustomActionsFilter(): Array<(item: any) => boolean> {
        return this._location.map((item: ILocationItem) => {
            return item.filterItem;
        });
    }
    public get contextMenuItems(): ICustomActionType[] {
        return this._location.map((item: ILocationItem) => {
            return {
                className: "ms-ContextualMenu-item",
                key: item.key,
                name: item.name,
                onRender: this._renderCharmMenuItem,
                type: item.type,
            };
        });
    }
    public getFormComponent(item: ICustomAction, onChange: (value: string, key: string) => void): JSX.Element {
        let filtered: ILocationItem[];
        if (item.location === "ScriptLink") {
            filtered = this._location.filter((location: ILocationItem) => {
                if (item.scriptBlock) {
                    return location.type === "ScriptBlock";
                } else {
                    return location.type === "ScriptSrc";
                }
            });
        } else {
            filtered = this._location.filter((location: ILocationItem) => {
                return location.spLocationName === item.location;
            });
        }

        return filtered[0]?.renderForm(item, onChange);
    }
    public getLocationItem(item: ICustomAction) {
        let filtered: ILocationItem[];
        if (item.location === "ScriptLink") {
            filtered = this._location.filter((location: ILocationItem) => {
                if (item.scriptBlock) {
                    return location.type === "ScriptBlock";
                } else {
                    return location.type === "ScriptSrc";
                }
            });
        } else {
            filtered = this._location.filter((location: ILocationItem) => {
                return location.spLocationName === item.location;
            });
        }

        return filtered[0];
    }

    public getLocationByKey(key: string) {
        const filtered: ILocationItem[] = this._location.filter((location: ILocationItem) => {
            return location.key === key;
        });

        return filtered[0];
    }

    public getSpLocationNameByType(type: string) {
        const loc = this.getLocationByKey(type);
        return loc.spLocationName;
    }

    private _renderCharmMenuItem(item: ICustomActionType) {
        return (
            <Link className="ms-ContextualMenu-link" to={"newItem/" + item.type} key={item.name}>
                <div className="ms-ContextualMenu-linkContent">
                    <span className="ms-ContextualMenu-itemText ms-fontWeight-regular">{item.name}</span>
                </div>
            </Link>);
    }
}

export const customActionLocationHelper = new CustomActionLocationHelper();
