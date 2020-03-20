import React from "react";
import classes from './OutputGame.module.css'
import {connect} from "react-redux";
import Line from "./GameField/Line";
import moveAI from "../../utils/ai/ai";

const OutputGame=(props)=>{
    let lines=[];
        if(props.gameStart) {
            for(let i=0;i<props.size;i++){
                lines.push(<Line size={props.size} lineNumber={i} figure={props.figure} values={props.values} drawFigure={props.drawFigure} drawX={props.drawX}/>)
            }
            if(props.figure==='O'&&props.drawX){
                props.drawFigure(moveAI(props.values),'X');
            }
            else if(props.figure==='X'&&!props.drawX){
                props.drawFigure(moveAI(props.values),'O');
            }
        }
    return(
        <div className={classes.gameField}>
            {lines}

        </div>
    )
};

let mapStateToProps = (state) => {
    return {
        size:state.InputData.size,
        figure:state.InputData.figure,
        gameStart:state.InputData.gameStart,
    }
};
export default connect(mapStateToProps,null)(OutputGame);