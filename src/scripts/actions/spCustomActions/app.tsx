import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { Route, Router } from "react-router";
import { AppBase } from "./../common/AppBase";
import { SpCustomModalWrapper } from "./../common/components/spCustomModalWrapper";
import Utils from "./../common/utils";
import SpCustomActions from "./components/spCustomActions";
import SpCustomActionItemEdit from "./components/spCustomActionsItemEdit";
import { CustomActionType } from "./constants/enums";
import { spCustomActionsHistory } from "./router/spCustomActionsHistory";
import { configureStore } from "./store/configureStore-dev";
import jj from "history";
export class App extends AppBase {
    private _componentsDivId: string;
    private _customActionType: CustomActionType;
    constructor(modalDialogName: string, componentsDivId: string, customActionType: CustomActionType) {
        super(modalDialogName);

        this._componentsDivId = componentsDivId;
        this._customActionType = customActionType;

        this.onCloseWrapperClick = this.onCloseWrapperClick.bind(this);
    }

    public onCloseWrapperClick() {
        spCustomActionsHistory.History.push("/");
        this.remove();
    }
    public show() {
        const that = this;
        Utils.ensureSPObject().then(() => {
            const store = configureStore(this._customActionType);

            const root = createRoot(document.getElementById(that._componentsDivId) as HTMLElement);
            root.render(
                <SpCustomModalWrapper onCloseClick={this.onCloseWrapperClick} modalDialogTitle={this.baseDivId}>
                    <div className="action-container sp-customActions">
                        <Provider store={store}>
                            <Router history={jj.createHistory()}>
                                <Route path="/" component={SpCustomActions} />
                                <Route path="newItem/:type" component={SpCustomActionItemEdit} />
                                <Route path="item/:guid" component={SpCustomActionItemEdit} />
                            </Router>
                        </Provider>
                    </div>
                </SpCustomModalWrapper >
            );
        });
    }
}
