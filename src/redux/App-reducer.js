const SET_VALUES = 'SET-VALUES';
const SET_DRAW_X = 'SET-DRAW-X';
const SET_STEP_NUMBER = 'SET-STEP-NUMBER';

let initialState = {
    values: [],
    drawX: true,
    stepNumber: 1,
};
const appReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_VALUES:
            return {
                ...state,
                values:[...state.values,...action.data],
            };
        case SET_DRAW_X:
            return {
                ...state,
                ...action.data,
            };
        case SET_STEP_NUMBER:
            return {
                ...state,
                ...action.data,
            };
        default:
            return state;
    }

};
export let setValues = (values) => {
    return {
        type: SET_VALUES,
        data: {
            values,
        }
    }
};
export let setDrawX = (drawX) => {
    return {
        type: SET_DRAW_X,
        data: {
            drawX,
        }
    }
};
export let setStepNumber = (stepNumber) => {
    return {
        type: SET_STEP_NUMBER,
        data: {
            stepNumber,
        }
    }
};

export default appReducer;