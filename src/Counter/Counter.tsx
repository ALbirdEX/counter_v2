import React, {ChangeEvent, useState} from 'react';
import {Button} from "../Button";
import classes from './Counter.module.css'

let startData = 0
let maxData = 0

export const Counter: React.FC = () => {
    const [data, setData] = useState<number>(startData)

    const onClickIncrement = () => {
        setData(data + 1)
    }
    const onClickReset = () => {
        setData(startData)
    }

    const startValueHandler = (event: ChangeEvent<HTMLInputElement>) => {
        const numStart = Number(event.currentTarget.value)
        startData = numStart;
        setData(numStart)
    }
    const maxValueHandler = (event: ChangeEvent<HTMLInputElement>) => {
        //const numMax = Number(event.currentTarget.value)
        maxData = Number(event.currentTarget.value);
        //setData(startData)
    }
    return (
        <div className={classes.div}>
            <div><h1>{data}</h1></div>
            <div>
                <Button onClickHandler={onClickIncrement} name={"Increment"} maxData={maxData} data={data}/>
                <Button onClickHandler={onClickReset} name={"RESET"} startData={startData} data={data}/>
            </div>
            <input placeholder={"START value"} onChange={startValueHandler}></input>
            <input placeholder={"MAX value"} onChange={maxValueHandler}></input>
        </div>
    );
};
