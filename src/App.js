import React, {useState} from 'react';
import './App.css';
import InputData from "./components/Input/InputData";
import OutputGame from "./components/Output/OutputGame";

function App() {

    const [values, setValues] = useState([]);
    const [drawX, setDrawX] = useState(true);
    const gameStart = (size) => {
        setValues(Array(size ** 2).fill(null));
        setDrawX(true);
    };
    const drawFigure = (number, figure) => {
        const squares = values.slice();
        squares[number] = figure;
        setValues(squares);
        if (figure === 'X') {
            setDrawX(false);
        } else {
            setDrawX(true);
        }
    };
    return (
        <div className="app-wrapper">
            <InputData gameStart={gameStart}/>
            <OutputGame values={values} drawFigure={drawFigure} drawX={drawX}/>
        </div>
    );
}

export default App;
