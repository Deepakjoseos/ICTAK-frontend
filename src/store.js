import { createStore , applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";
import {composeWithDevTools} from "redux-devtools-extension";
import { courceCreateReducer, courceDeleteReducer, courceListReducers, courceUpdateReducer } from "./reducers/courceReducers";

const reducer = combineReducers({
    courceList : courceListReducers,
    courceCreate : courceCreateReducer,
    courceUpdate : courceUpdateReducer, 
    courceDelete : courceDeleteReducer,
});

const initialState = {};

const middleware =[thunk];
const store = createStore(
    reducer ,
    initialState,
    composeWithDevTools(applyMiddleware(...middleware))
);

export default store;