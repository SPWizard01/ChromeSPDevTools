import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { spCustomActionSliceReducer } from "./spCustomActionSlice";


export const store = configureStore({
    reducer: combineReducers({
        spCustomActions: spCustomActionSliceReducer
    }),
    middleware(getDefaultMiddleware) {
        return getDefaultMiddleware({
            serializableCheck: false, // Disable serializable check for custom actions
        })
    },
})


// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch