import React, {useEffect, useState} from 'react';
import classes from './Counter.module.css'
import {Input} from "./Input";
import {Button} from "./Button";


const START_DATA = 0
const MAX_DATA = 0

export const Counter: React.FC = () => {

    const [startValue, setStartValue] = useState<number>(START_DATA)
    const [maxValue, setMaxValue] = useState<number>(MAX_DATA)
    const [collapsed, setCollapsed] = useState<boolean>(false)

    useEffect(() => {
        let maxValueAsString = localStorage.getItem("maxValue")
        let startValueAsString = localStorage.getItem("startValue")

        if (startValueAsString) {
            let startValue = JSON.parse(startValueAsString)
            setStartValue(startValue)
        }
        if (maxValueAsString) {
            let maxValue = JSON.parse(maxValueAsString)
            setMaxValue(maxValue)
        }
    }, []);

    useEffect(() => {
        localStorage.setItem("startValue", JSON.stringify(startValue))
        localStorage.setItem("maxValue", JSON.stringify(maxValue))
    }, [startValue, maxValue])

    const disabledButton = startValue >= maxValue || startValue < 0

    const outputValue = disabledButton ? "Enter correct value" : startValue

    const onClickIncrement = () => {
        setStartValue(startValue + 1)
    }
    const onClickReset = () => {
        setStartValue(START_DATA)
        //setMaxValue(MAX_DATA)
    }
    const startValueHandler = (value: number) => {
        setStartValue(value)
    }
    const maxValueHandler = (value: number) => {
        setMaxValue(value)
    }
    const settingHandler = () => {
        setCollapsed(!collapsed)
    }

    const SettingsBlock = () => {
        return (
            <>
                <div>
                    MAX value:
                </div>
                <Input type={"number"} value={maxValue} onChange={maxValueHandler}/>
                <div>
                    START value:
                </div>
                <div>
                    <Input type={"number"} value={startValue} onChange={startValueHandler}/>
                </div>
                <Button name={"Apply"} data={startValue} maxData={startValue} startData={startValue}
                        collapsed={collapsed} onClickHandler={settingHandler}/>
            </>
        )
    }

    return (
        <div className={disabledButton ? classes.errorCount : classes.count}>
            <div>
                <h1>{outputValue}</h1></div>
            <div>
                <Button onClickHandler={onClickIncrement} name={"Increment"} maxData={maxValue} data={startValue}
                        startData={startValue} disable={disabledButton}/>
                <Button onClickHandler={onClickReset} name={"RESET"} startData={startValue} data={startValue}
                        maxData={maxValue}
                        disable={startValue === 0}/>
                <div>
                    {collapsed ?
                        <SettingsBlock/>
                        :
                        <Button name={"Setup menu"} data={startValue} maxData={maxValue} startData={startValue}
                                onClickHandler={settingHandler}/>}
                </div>
            </div>
        </div>
    );
};
