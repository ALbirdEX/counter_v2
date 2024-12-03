import React, {ChangeEvent} from 'react';
import classes from "./Counter.module.css";

type InputPropsType = {
    type: string;
    value: number;
    onChange: (value: number) => void
}

export const Input = (props: InputPropsType) => {

    const onChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
        props.onChange(Number(event.currentTarget.value))
    }

    return (
        <input className={classes.input}
               value={props.value}
               type={props.type}
               onChange={onChangeHandler}
        />
    );
};