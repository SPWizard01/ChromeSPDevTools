
class SpCustomActionsHistory{

    private _history: any;
    public get History(): any {
        return this._history;
    }

    constructor() {
     
    }
}
export const spCustomActionsHistory = new SpCustomActionsHistory();
