import React from 'react';
import classes from './Button.module.css'

const Button = props => {
    return (
        <button
            className={[classes.btn, [...props.class.map(cls => classes[cls])].join(' ')].join(' ')}
            type="button"
            onClick={props.onclicked} >{props.text}</button>
    )
}

export default Button