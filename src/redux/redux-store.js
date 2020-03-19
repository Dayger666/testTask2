import {combineReducers, createStore} from "redux";
import gameDataReducer from "./GameData-reducer";
import {reducer as formReducer} from 'redux-form';

let reducers=combineReducers({
    InputData:gameDataReducer,
    form:formReducer,

});
let store=createStore(reducers);


export default store;