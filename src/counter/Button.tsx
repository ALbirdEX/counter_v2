import React from 'react';
import classes from './Counter.module.css'

type ButtonPropsType = {
    name: string;
    data?: number;
    maxData?: number;
    disable?: boolean;
    startData?: number;
    collapsed?: boolean
    onClickHandler: () => void;
}

export const Button = (props: ButtonPropsType) => {
    return (
        <button className={classes.button}
                onClick={props.onClickHandler}
                disabled={props.disable}>
            {props.name}
        </button>
    );
};