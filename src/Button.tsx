import React from 'react';
import classes from './Counter/Counter.module.css'

type PropsTypeButton = {
    onClickHandler: () => void;
    name: string
}

export const Button= (props: PropsTypeButton) => {
    return (
        <button className={classes.button} onClick={props.onClickHandler}>{props.name}</button>
    );
};