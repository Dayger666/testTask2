import React from "react";
import classes from './Line.module.css'
import Square from "./Square/Square";

let Line = (props) => {

let squares=[];
for(let i=0;i<props.size;i++) {
  squares.push(<Square value={props.values[props.lineNumber*props.size+i]} onClick={() => {
      if((props.figure==='X'&&props.draw)||(props.figure==='O'&&!props.drawFigure)) {
          props.drawFigure(props.lineNumber * props.size + i, props.figure)
      }
  }
  } draw={props.draw}/>);
}
    return (
        <div className={classes.lineWrapper}>
          {squares}
    </div>)
};
export default Line;