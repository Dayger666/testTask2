import React from "react";
import classes from './OutputGame.module.css'
import {connect} from "react-redux";
import Line from "./GameField/Line";
import moveAI from "../../utils/ai/ai";
import {setGameStatus} from "../../redux/GameData-reducer";
import winCalculate from "../../utils/winCalculate/winCalculate";

const OutputGame = (props) => {
    let lines = [];

    for (let i = 0; i < props.size; i++) {
        lines.push(<Line key={i} size={props.size} lineNumber={i} figure={props.figure} values={props.values}
                         drawFigure={props.drawFigure} drawX={props.drawX}/>)
    }
    if (props.gameStart) {
        if (props.figure === 'O' && props.drawX) {
            props.drawFigure(moveAI(props.values), 'X');
        } else if (props.figure === 'X' && !props.drawX) {
            props.drawFigure(moveAI(props.values), 'O');
        }
    }
    const result = winCalculate(props.values, props.size);
    if (result) {
        props.setGameStatus(false);
    }
    console.log(result);
    return (
        <div className={classes.resultWrapper}>
            <div className={classes.gameField}>
                {lines}
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