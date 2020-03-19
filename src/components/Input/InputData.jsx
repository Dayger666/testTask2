import React from "react";
import classes from './InputData.module.css'
import {Field, reduxForm} from "redux-form";
import {isNumber, requiredField, valueOfNumber} from "../../utils/validators/validators";

const InputDataForm = (props) => {
    return (
        <form className={classes.inputWrapper} onSubmit={props.handleSubmit}>
            <Field placeholder={'Enter field size'} component={'input'} name={'size'} className={classes.sizeInput}  validate={[requiredField,isNumber,valueOfNumber]}/>
            <div>
                <button className={classes.startBtn}>Start</button>
            </div>
        </form>
    )
};

const InputDataReduxForm = reduxForm({form: 'sizeForm',})(InputDataForm);

const InputData = (props) => {
    const inputSize=(formData)=>{
    console.log(formData)
    };
    return (<div>
        <InputDataReduxForm onSubmit={inputSize}/>
    </div>)
};
export default InputData;
