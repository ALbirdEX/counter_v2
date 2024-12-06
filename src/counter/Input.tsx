import React, {ChangeEvent, useState} from 'react';
import classes from "./Counter.module.css";

type InputPropsType = {
    type: string;
    value: number;
    onChange: (value: number) => void
}

export const Input = (props: InputPropsType) => {
    debugger

    const [meaning, setMeaning] = useState(props.value)

    const onChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
        setMeaning(Number(event.currentTarget.value))
    }
    const onBlurHandler = () => {
        props.onChange(meaning)
    }

    return (
        <input className={classes.input}
               value={meaning}
               onChange={onChangeHandler}
               onBlur={onBlurHandler}/>
    );
};