import React from "react";
import classes from './InputData.module.css'
import {Field, reduxForm} from "redux-form";
import {isNumber, maxValue, minValue, requiredField} from "../../utils/validators/validators";
import {textArea} from "../FormsControls/FormsControls";
import cross from "../../images/cross.png"
import circle from "../../images/circle.png"
import {connect} from "react-redux";
import {setGameData, setGameStatus} from "../../redux/GameData-reducer";


const InputDataForm = (props) => {
    return (
        <form className={classes.inputWrapper} onSubmit={props.handleSubmit}>
            <Field placeholder={'Enter field size'} component={textArea} name={'size'} className={classes.sizeInput}
                   validate={[requiredField, isNumber, minValue, maxValue]}/>
            <div>
                <Field name={'figure'} component={'input'} type={'radio'} value={'X'} id={"figureX"}/>
                <label htmlFor="figureX"><img src={cross} alt='123'/></label>
                <Field name={'figure'} component={'input'} type={'radio'} value={'O'} id={"figureO"}/>
                <label htmlFor="figureO"><img src={circle} alt='123'/></label>
            </div>
            <div>
                <button className={classes.startBtn}>Start</button>
            </div>
        </form>
    )
};

const InputDataReduxForm = reduxForm({form: 'dataForm',})(InputDataForm);

const InputData = (props) => {
    const inputSize = (formData) => {
        props.setGameData(formData.size,formData.figure);
        props.setGameStatus(true);
        props.gameStart(formData.size,formData.figure);
    };
    return (<div>
        <InputDataReduxForm onSubmit={inputSize}/>

    </div>)
};

export default connect(null, {setGameData,setGameStatus})(InputData);
