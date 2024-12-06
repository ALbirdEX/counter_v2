import {Input} from "./Input";
import {Button} from "./Button";
import React from "react";

type SettingsBlockPropsType = {
    maxData: number;
    startData: number;
    settingHandler: () => void;
    maxValueHandler: (value: number) => void;
    startValueHandler: (value: number) => void;
}

export const SettingsBlock = (props: SettingsBlockPropsType) => {

    const {
        maxData,
        startData,
        settingHandler,
        startValueHandler,
        maxValueHandler
    } = props

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
            <Button name={"Collapse"} onClickHandler={settingHandler}/>
        </>
    )
}