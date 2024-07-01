import React, {useEffect, useState} from 'react';
import {Button} from "./Button";
import classes from './Counter.module.css'
import {Input} from "./Input";


const START_DATA = 0
const MAX_DATA = 0

export const Counter: React.FC = () => {

    const [maxData, setMaxData] = useState<number>(START_DATA)
    const [data, setData] = useState<number>(MAX_DATA)
    const [collapsed, setCollapsed] = useState<boolean>(false)

    useEffect(() => {
        let valueAsString = localStorage.getItem("maxValue")
        let valueAsString2 = localStorage.getItem("startValue")

        if (valueAsString) {
            let newValue = JSON.parse(valueAsString)
            setMaxData(newValue)
        }
        if (valueAsString2) {
            let newValue2 = JSON.parse(valueAsString2)
            setData(newValue2)
        }
    }, []);

    useEffect(() => {
        localStorage.setItem("maxValue", JSON.stringify(maxData))
    }, [maxData])
    useEffect(() => {
        localStorage.setItem("startValue", JSON.stringify(data))
    }, [data])


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
                        :
                        <Button name={"Setup menu"} data={data} maxData={maxData} startData={data}
                                onClickHandler={settingHandler}/>}
                </div>
            </div>
        </div>
    );
};
