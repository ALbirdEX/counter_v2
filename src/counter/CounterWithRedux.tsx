import React, {useState} from 'react';

import classes from "./Counter.module.css";
import {useDispatch, useSelector} from "react-redux";
import {CounterRootStateType} from "./store";
import {increaseAC, resetAC, setMaxValueAC, setStartValueAC, StateType} from "./counter-reducer";
import {Input} from "./Input";
import {Button} from "./Button";

export const CounterWithRedux: React.FC = () => {

    const data = useSelector<CounterRootStateType, StateType>(state => state.counter)
    const dispatch = useDispatch()
    const {startData, maxData, primaryData} = data
    const [collapsed, setCollapsed] = useState<boolean>(false)

    /*    useEffect(() => {
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
        }, [startValue, maxValue])*/

    const disabledButton = primaryData >= maxData || primaryData < 0

    const outputValue = disabledButton ? "Enter correct value" : primaryData

    const onClickIncrement = () => {
        dispatch(increaseAC({data: startData}))
    }
    const onClickReset = () => {
        dispatch(resetAC({}))
    }
    const startValueHandler = (value: number) => {
        dispatch(setStartValueAC({data: value}))
    }
    const maxValueHandler = (value: number) => {
        dispatch(setMaxValueAC({data: value}))
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
                <div>
                    <Input type={"number"} value={startData} onChange={startValueHandler}/>
                </div>
                <Button name={"Apply"} data={startData} maxData={startData} startData={startData}
                        collapsed={collapsed} onClickHandler={settingHandler}/>
            </>
        )
    }

    return (
        <div className={disabledButton ? classes.errorCount : classes.count}>
            <div>
                <h1>{outputValue}</h1></div>
            <div>
                <Button onClickHandler={onClickIncrement} name={"Increment"} maxData={maxData} data={startData}
                        startData={startData} disable={disabledButton}/>
                <Button onClickHandler={onClickReset} name={"RESET"} startData={startData} data={startData}
                        maxData={maxData}
                        disable={primaryData === 0}/>
                <div>
                    {collapsed ?
                        <SettingsBlock/>
                        :
                        <Button name={"Setup menu"} data={startData} maxData={maxData} startData={startData}
                                onClickHandler={settingHandler}/>}
                </div>
            </div>
        </div>
    );
};