import React from "react";
import classes from './Square.module.css'

let Square=(props)=>{
    return(<div className={classes.squareWrapper}>
        <button className="square" onClick={()=>{props.onClick()}}>
            {props.value}
        </button>
    </div>)
};

export default Square;