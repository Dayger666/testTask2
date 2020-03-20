import React from "react";
import classes from './OutputGame.module.css'
import {connect} from "react-redux";
import Line from "./GameField/Line";

const OutputGame=(props)=>{
    let lines=[];
        if(props.gameStart) {
           console.log(props.values);
            for(let i=0;i<props.size;i++){
                lines.push(<Line size={props.size} lineNumber={i} figure={props.figure} values={props.values} drawFigure={props.drawFigure} draw={props.draw}/>)
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