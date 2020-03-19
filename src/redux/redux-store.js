import {combineReducers, createStore} from "redux";
import gameDataReducer from "./GameData-reducer";


let reducers=combineReducers({
    InputData:gameDataReducer,
});
let store=createStore(reducers);


export default store;