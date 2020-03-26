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
                values: action.data,
            };
        case SET_DRAW_X:
            console.log(action.data);
            return {
                ...state,
                drawX:action.data,
            };
        case SET_STEP_NUMBER:
            return {
                ...state,
                stepNumber:action.data,
            };
        default:
            return state;
    }

};
export let setValues = (values) => {
    console.log(values);
    return {
        type: SET_VALUES,
        data: values,
    }
};
export let setDrawX = (drawX) => {
    console.log(drawX);
    return {
        type: SET_DRAW_X,
        data: drawX,
    }
};
export let setStepNumber = (stepNumber) => {
    console.log(stepNumber);
    return {
        type: SET_STEP_NUMBER,
        data: stepNumber,
    }
};

export default appReducer;