import React, {useState} from 'react';
import './App.css';
import InputData from "./components/Input/InputData";
import OutputGame from "./components/Output/OutputGame";

function App() {

    const [values,setValues]=useState([]);
    const [drawX,setDrawX]=useState(true);
    const gameStart=(size,figure)=>{
        setValues(Array(size**2).fill(null));
        setDrawX(true);
        if(figure==='O')
        {
                    
        }
    };
    const drawFigure=(number,figure)=>{
        const squares = values.slice();
        squares[number] = figure;
        setValues(squares);
        if(figure==='X'){
            setDrawX(false);
        }
        else{
           setDrawX(true);
        }
    };
  return (
    <div className="app-wrapper">
      <InputData gameStart={gameStart}/>
      <OutputGame values={values} drawFigure={drawFigure} draw={drawX}/>
    </div>
  );
}

export default App;
