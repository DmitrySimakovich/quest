import {combineReducers, createStore} from "redux";
import {reducer} from "./reducers";

const rootReducer = combineReducers({
    page: reducer
})

export type RootStateType = ReturnType<typeof rootReducer>

export const store = createStore(rootReducer)