import {combineReducers, createStore} from "redux";
import gameDataReducer from "./GameData-reducer";
import {reducer as formReducer} from 'redux-form';
import appReducer from "./App-reducer";

let reducers = combineReducers({
    InputData: gameDataReducer,
    GameInfo:appReducer,
    form: formReducer,

});
let store = createStore(reducers);


export default store;