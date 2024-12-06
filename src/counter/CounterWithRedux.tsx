import React, {useEffect, useState} from 'react';
import classes from "./Counter.module.css";
import {useDispatch, useSelector} from "react-redux";
import {CounterRootStateType} from "./store";
import {increaseAC, resetAC, setMaxValueAC, setStartValueAC, StateType} from "./counter-reducer";
import {Button} from "./Button";
import {SettingsBlock} from "./SettingBlock";
import {useAutoAnimate} from "@formkit/auto-animate/react";

export const CounterWithRedux: React.FC = () => {

    const [animationRef] = useAutoAnimate<HTMLDivElement>()

    const data = useSelector<CounterRootStateType, StateType>(state => state.counter)
    const dispatch = useDispatch()
    const {startData, maxData, primaryData} = data
    const [collapsed, setCollapsed] = useState<boolean>(false)

    useEffect(() => {
        let maxValueAsString = localStorage.getItem("maxValue")
        let startValueAsString = localStorage.getItem("startValue")

        if (startValueAsString) {
            dispatch(setStartValueAC({data: JSON.parse(startValueAsString)}))
        }
        if (maxValueAsString) {
            dispatch(setMaxValueAC({data: JSON.parse(maxValueAsString)}))
        }
    }, []);
    useEffect(() => {
        if (startData !== 0 || maxData !== 0) {
            localStorage.setItem("startValue", JSON.stringify(startData))
            localStorage.setItem("maxValue", JSON.stringify(maxData))
        }
    }, [startData, maxData])

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

    return (
        <div className={disabledButton ? classes.errorCount : classes.count}>
            <div>
                <h1>{outputValue}</h1>
            </div>
            <div ref={animationRef}>
                {collapsed
                    ? <SettingsBlock maxData={maxData}
                                     startData={startData}
                                     settingHandler={settingHandler}
                                     maxValueHandler={maxValueHandler}
                                     startValueHandler={startValueHandler}/>
                    : <div>
                        <div><h5>START: {startData} MAX: {maxData}</h5></div>
                        <Button onClickHandler={onClickIncrement} name={"Increment"} disable={disabledButton}/>
                        <Button onClickHandler={onClickReset} name={"RESET"} disable={primaryData === 0}/>
                        {/*<div ref={animationRef}>*/}
                        <div>
                            <Button name={"Setup menu"}
                                    onClickHandler={settingHandler}/>
                        </div>
                    </div>
                }
            </div>
        </div>
    );
};