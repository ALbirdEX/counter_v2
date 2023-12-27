import React, {useState} from 'react';
import classes from './Counter.module.css'
import {Button} from "../Button";

export const Counter: React.FC = () => {
    const [data, setData] = useState<number>(0)

    const onClickIncrement = () => {
        setData(data + 1)
    }
    const onClickReset = () => {
        setData(0)
    }
    return (
        <div>
            <div>{data}</div>
            <div>
               {/* <button className={classes.button} onClick={onClickIncrement}>Increment</button>
                <button className={classes.button} onClick={onClickReset}>RESET</button>*/}
                <Button onClickHandler={onClickIncrement} name={"Increment"}/>
                <Button onClickHandler={onClickReset} name={"RESET"}/>
            </div>
            <input placeholder={"START value"}></input>
            <input placeholder={"MAX value"}></input>
        </div>
    );
};
