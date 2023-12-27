import React from 'react';
import classes from './Counter/Counter.module.css'

type PropsTypeButton = {
    name: string;
    data: number;
    maxData?: number;
    startData?: number
    onClickHandler: () => void;
}

export const Button = (props: PropsTypeButton) => {
    let bool = props.data === props.startData || props.data === props.maxData;
    return (
        <button className={classes.button}
                onClick={props.onClickHandler}
                disabled={bool}>
            {props.name}
        </button>
    );
};