import React, {ChangeEvent, KeyboardEvent, useState} from 'react';
import classes from "./Counter.module.css";

type InputPropsType = {
    type: string;
    value: number;
    onChange: (value: number) => void
}

export const Input = (props: InputPropsType) => {

    const [value, setValue] = useState(props.value)

    const onChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
        setValue(Number(event.currentTarget.value))
    }
    const onKeyDownHandler = (event: KeyboardEvent<HTMLInputElement>) => {
        if (event.key === "Enter") {
            props.onChange(Number(value))
        }
    }
    const onBlurHandler = () => {
        props.onChange(Number(value))
    }

    return (
        <input className={classes.input}
               value={value}
               type={props.type}
               onChange={onChangeHandler}
               onKeyDown={onKeyDownHandler}
               onBlur={onBlurHandler}
        />
    );
};