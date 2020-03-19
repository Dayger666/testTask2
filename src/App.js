import React from 'react';
import './App.css';
import InputData from "./components/Input/InputData";
import OutputGame from "./components/Output/OutputGame";

function App() {

  return (
    <div className="app-wrapper">
      <InputData/>
      <OutputGame/>
    </div>
  );
}

export default App;
