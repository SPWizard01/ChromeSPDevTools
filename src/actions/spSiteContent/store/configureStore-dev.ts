

import { applyMiddleware, compose } from "redux";
import { thunk } from "redux-thunk";
import { rootReducer } from "../reducers/index";
import { configureStore } from "@reduxjs/toolkit";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const cfgStore = (initialState: any) => {
    return configureStore({
        reducer: rootReducer,
        preloadedState: initialState,
        middleware(getDefaultMiddleware) {
            return composeEnhancers(applyMiddleware(thunk))
        },
    });
};
