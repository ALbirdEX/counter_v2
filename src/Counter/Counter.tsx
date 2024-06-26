import React, {useState} from 'react';
import {Button} from "./Button";
import classes from './Counter.module.css'
import {Input} from "./Input";


const START_DATA = 0
const MAX_DATA = 0

export const Counter: React.FC = () => {
    const [maxData, setMaxData] = useState<number>(MAX_DATA)
    const [data, setData] = useState<number>(START_DATA)
    const [collapsed, setCollapsed] = useState<boolean>(false)
    let dis = data >= maxData || data < 0

    const onClickIncrement = () => {
        setData(data + 1)
    }
    const onClickReset = () => {
        setData(START_DATA)
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
        <>
            <div className={classes.count}>
                <div className={dis ? classes.error : ''}><h1>{data}</h1></div>
                <div>
                    <Button onClickHandler={onClickIncrement} name={"Increment"} maxData={maxData} data={data}
                            startData={data} disable={dis}/>
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
                            <Button name={"Setting"} data={data} maxData={maxData} startData={data}
                                    onClickHandler={settingHandler}/>}
                    </div>
                </div>
            </div>
        </>
    );
};
