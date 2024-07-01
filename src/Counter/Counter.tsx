import React, {useEffect, useState} from 'react';
import {Button} from "./Button";
import classes from './Counter.module.css'
import {Input} from "./Input";


const START_DATA = 0
const MAX_DATA = 0

export const Counter: React.FC = () => {

    const [data, setData] = useState<number>(START_DATA)
    const [maxData, setMaxData] = useState<number>(MAX_DATA)
    const [collapsed, setCollapsed] = useState<boolean>(false)

    useEffect(() => {
        let maxValueAsString = localStorage.getItem("maxValue")
        let startValueAsString = localStorage.getItem("startValue")

        if (startValueAsString) {
            let startValue = JSON.parse(startValueAsString)
            setData(startValue)
        }
        if (maxValueAsString) {
            let maxValue = JSON.parse(maxValueAsString)
            setMaxData(maxValue)
        }
    }, []);

    useEffect(() => {
        localStorage.setItem("startValue", JSON.stringify(data))
        localStorage.setItem("maxValue", JSON.stringify(maxData))
    }, [data, maxData])

    const disabledButton = data >= maxData || data < 0

    const outputValue = disabledButton ? "Enter correct data" : data

    const onClickIncrement = () => {
        setData(data + 1)
    }
    const onClickReset = () => {
        setData(START_DATA)
        setMaxData(MAX_DATA)
    }
    const startValueHandler = (value: number) => {
        setData(value)
    }
    const maxValueHandler = (value: number) => {
        setMaxData(value)
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
                <Input type={"number"} value={maxData} onChange={maxValueHandler}/>
                <div>
                    START value:
                </div>
                <Input type={"number"} value={data} onChange={startValueHandler}/>
                <Button name={"Apply"} data={data} maxData={data} startData={data}
                        collapsed={collapsed} onClickHandler={settingHandler}/>
            </>
        )
    }

    return (
        <div className={disabledButton ? classes.errorCount : classes.count}>
            <div>
                <h1>{outputValue}</h1></div>
            <div>
                <Button onClickHandler={onClickIncrement} name={"Increment"} maxData={maxData} data={data}
                        startData={data} disable={disabledButton}/>
                <Button onClickHandler={onClickReset} name={"RESET"} startData={data} data={data} maxData={maxData}
                        disable={data === 0}/>
                <div>
                    {collapsed ?
                        <SettingsBlock/>
                        :
                        <Button name={"Setup menu"} data={data} maxData={maxData} startData={data}
                                onClickHandler={settingHandler}/>}
                </div>
            </div>
        </div>
    );
};
