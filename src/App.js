import React from 'react';
import './App.css';
import InputData from "./components/Input/InputData";
import OutputGame from "./components/Output/OutputGame";
import {connect} from "react-redux";
import {setGameStatus} from "./redux/GameData-reducer";
import {setDrawX, setStepNumber, setValues} from "./redux/App-reducer";

function App(props) {

    const gameStart = (size) => {
        props.setValues([Array(size ** 2).fill(null)]);
        setStepNumber(1);
        setDrawX(true);
    };
    const drawFigure = (number, figure) => {
        const stepValue = props.values.slice(0, props.stepNumber + 1);
        const squares = stepValue[props.stepNumber - 1].slice();
        squares[number] = figure;
        props.setValues(stepValue.concat([
            squares
        ]));
        props.setStepNumber(stepValue.length + 1);
        if (figure === 'X') {
            props.setDrawX(false);
        } else {
            props.setDrawX(true);
        }
    };
    const moveTo = (step, myFigure) => {
        const stepValue = props.values.slice(0, step);
        props.setStepNumber(step);
        props.setValues(stepValue);
        if (myFigure === 'X' && (step % 2) === 0) {
            props.setDrawX(false)
        } else if (myFigure === 'X' && (step % 2) !== 0) {
            props.setDrawX(true);
        } else if (myFigure === 'O' && (step % 2) !== 0) {
            props.setDrawX(true);
        } else if (myFigure === 'O' && (step % 2) === 0) {
            props.setDrawX(false);
        }
    };
    return (
        <div className="app-wrapper">
            <InputData gameStart={gameStart}/>
            <OutputGame moveTo={moveTo} values={props.values} drawFigure={drawFigure} drawX={props.drawX}/>
        </div>
    );
}
let mapStateToProps = (state) => {
    return {
        values: state.GameInfo.values,
        drawX: state.GameInfo.drawX,
        stepNumber: state.GameInfo.stepNumber,
    }
};
export default connect(mapStateToProps, {setGameStatus,setValues,setDrawX,setStepNumber})(App);
