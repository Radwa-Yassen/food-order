
import React from 'react';
import classes from './Input.module.css';


const Input = React.forwardRef((props,ref) => {


    return (
        <div className={classes.input}>
            <lable htmlFor={props.input.id}>{props.lable}</lable>
            <input {...props.input} ref={ref}></input>
        </div>
    );
});

export default Input;