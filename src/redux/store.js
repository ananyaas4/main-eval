import { applyMiddleware, legacy_createStore as createStore } from "redux";
import { thunk } from "redux-thunk";
import { sampleReducer } from "./reducers/sampleReducer";



export const store = createStore(sampleReducer, applyMiddleware(thunk))