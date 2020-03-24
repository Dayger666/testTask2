import React from "react";
import classes from './OutputGame.module.css'
import {connect} from "react-redux";
import Line from "./GameField/Line";
import moveAI from "../../utils/ai/ai";
import {setGameStatus} from "../../redux/GameData-reducer";
import winCalculate from "../../utils/winCalculate/winCalculate";

const OutputGame = (props) => {
    let currentValue = props.values[props.values.length - 1] || [];
    let lines = [];
    const history = props.values.map((arr, move) => {
        const desc = move ? 'Go to move ->' + move : false;
        return (
            <div key={move}>
                {desc ? <button onClick={() => {
                    props.setGameStatus(true);
                    props.moveTo(move, props.figure);
                }}>{desc}</button> : "Steps"}
            </div>
        );
    });
    for (let i = 0; i < props.size; i++) {
        lines.push(<Line key={i} size={props.size} lineNumber={i} figure={props.figure} values={currentValue}
                         drawFigure={props.drawFigure} drawX={props.drawX} gameStart={props.gameStart}/>)
    }
    if (props.gameStart) {
        if (props.figure === 'O' && props.drawX) {
            props.drawFigure(moveAI(currentValue), 'X');
        } else if (props.figure === 'X' && !props.drawX) {
            props.drawFigure(moveAI(currentValue), 'O');
        }
    }
    const result = winCalculate(currentValue, props.size);
    if (result) {
        props.setGameStatus(false);
    }

    return (
        <div className={classes.resultWrapper}>
            <div className={classes.resultText}>{result ? result : null}</div>
            <div className={classes.gameField}>
                {lines}
            </div>
            <div className={classes.history}>
                <ol>{history}</ol>
            </div>
        </div>
    )
};

let mapStateToProps = (state) => {
    return {
        size: state.InputData.size,
        figure: state.InputData.figure,
        gameStart: state.InputData.gameStart,
    }
};
export default connect(mapStateToProps, {setGameStatus})(OutputGame);