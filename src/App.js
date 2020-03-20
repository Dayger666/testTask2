import React, {useState} from 'react';
import './App.css';
import InputData from "./components/Input/InputData";
import OutputGame from "./components/Output/OutputGame";

function App() {

    const [values, setValues] = useState([]);
    const [drawX, setDrawX] = useState(true);
    const [stepNumber, setStepNumber] = useState(1);
    const gameStart = (size) => {
        setValues([Array(size ** 2).fill(null)]);
        setStepNumber(1);
        setDrawX(true);
    };
    const drawFigure = (number, figure) => {
        const stepValue = values.slice(0, stepNumber + 1);
        const squares = stepValue[stepNumber - 1].slice();
        squares[number] = figure;
        setValues(stepValue.concat([
            squares
        ]));
        setStepNumber(stepValue.length + 1);
        if (figure === 'X') {
            setDrawX(false);
        } else {
            setDrawX(true);
        }
    };
    const moveTo = (step, myFigure) => {
        const stepValue = values.slice(0, step);
        setStepNumber(step);
        setValues(stepValue);
        if (myFigure === 'X' && (step % 2) === 0) {
            setDrawX(false)
        } else if (myFigure === 'X' && (step % 2) !== 0) {
            setDrawX(true);
        } else if (myFigure === 'O' && (step % 2) !== 0) {
            setDrawX(true);
        } else if (myFigure === 'O' && (step % 2) === 0) {
            setDrawX(false);
        }
    };
    return (
        <div className="app-wrapper">
            <InputData gameStart={gameStart}/>
            <OutputGame moveTo={moveTo} values={values} drawFigure={drawFigure} drawX={drawX}/>
        </div>
    );
}

export default App;
