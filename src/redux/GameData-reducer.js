const SET_GAME_DATA = 'SET-GAME-DATA';
const SET_GAME_STATUS = 'SET-GAME-STATUS';

let initialState = {
    size: null,
    figure: null,
    gameStart: false,
};
const gameDataReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_GAME_DATA:
            return {
                ...state,
                ...action.data,
            };
        case SET_GAME_STATUS:
            return {
                ...state,
                ...action.data,
            };
        default:
            return state;
    }

};
export let setGameData = (size, figure = 'X') => {
    return {
        type: SET_GAME_DATA,
        data: {
            size,
            figure
        }
    }
};
export let setGameStatus = (gameStart) => {
    return {
        type: SET_GAME_STATUS,
        data: {
            gameStart,
        }
    }
};

export default gameDataReducer;