import React from "react";
import classes from './InputData.module.css'

const InputData = (props) => {

    return (
        <div className={classes.inputWrapper}>
                <textarea  placeholder={'Enter field size'} className={classes.sizeInput}/>
            <div>
            <button className={classes.startBtn} type='button'>Start</button>
            </div>
        </div>
    )
};

export default InputData