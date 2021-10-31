import { applyMiddleware, combineReducers, compose, createStore } from "redux";
import { combineEpics, createEpicMiddleware } from "redux-observable";
import { epicFetchItem, epicFetchList } from "../epics";
import serviceFetchItemReducer from "../reducers/serviceFetchItemRedusecer/serviceFetchItemRedusecer";
import serviceFetchListReducer from "../reducers/serviceFetchListReducer/serviceFetchListReducer";

const reducer = combineReducers({
    serviceFetchList: serviceFetchListReducer,
    serviceFetchItem: serviceFetchItemReducer,
})
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const epic = combineEpics(
    epicFetchList,
    epicFetchItem,
);


const epicMiddleware = createEpicMiddleware();

const store = createStore(reducer, composeEnhancers(
    applyMiddleware(epicMiddleware)
));

epicMiddleware.run(epic);

export default store;