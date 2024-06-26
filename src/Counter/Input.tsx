import React, {ChangeEvent} from 'react';

type InputPropsType = {
    type: string;
    value: number;
    onChange: (value: number) => void
}

export const Input = (props: InputPropsType) => {
    const onChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
        props.onChange(Number(event.currentTarget.value))
    }
    return (
        <div>
            <input value={props.value} type={props.type} onChange={onChangeHandler}/>
        </div>
    );
};