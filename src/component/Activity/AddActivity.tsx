import React, { useReducer } from "react";
import Button from "../UI/Button/Button";
import Checkbox from "../UI/Checkbox/Checkbox";
import DateInput from "../UI/DateInput/Dateinput";
import Input from "../UI/Input/Input";

interface ActivityForm {
    name: string;
    startDate: string;
    endDate: string;
    mon: boolean;
    tues: boolean;
    wed: boolean;
    thus: boolean;
    fri: boolean;
    sat: boolean;
    sun: boolean;
}

type Action =
    | { type: "name"; value: string }
    | { type: "startDate"; value: string }
    | { type: "endDate"; value: string }
    | { type: "day"; day: keyof ActivityForm };

const initState: ActivityForm = {
    name: "",
    startDate: "",
    endDate: "",
    mon: false,
    tues: false,
    wed: false,
    thus: false,
    fri: false,
    sat: false,
    sun: false,
};
const activityReducer = (
    initState: ActivityForm,
    action: Action
): ActivityForm => {
    switch (action.type) {
        case "name":
            return { ...initState, name: action.value };
        case "startDate":
            return { ...initState, startDate: action.value };
        case "endDate":
            return { ...initState, endDate: action.value };
        case "day":
            return {
                ...initState,
                [action.day]: !initState[action.day],
            };
        default:
            new Error("Invalid action type!");
            return initState;
    }
};

const Activity: React.FC = () => {
    const [state, dispatch] = useReducer(activityReducer, initState);
    return (
        <div className='flex flex-col gap-8 items-start max-w-lg p-4 flex-1  rounded-md'>
            <Input
                name='name'
                label='Name'
                value={state.name}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                    dispatch({ type: "name", value: e.target.value })
                }
            />
            <DateInput
                name='startDate'
                label='Start Date'
                value={state.startDate}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                    dispatch({ type: "startDate", value: e.target.value })
                }
            />
            <DateInput
                name='endDate'
                label='End Date'
                value={state.endDate}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                    dispatch({ type: "endDate", value: e.target.value })
                }
            />
            <div className=' border p-2 rounded-md shadow-md  w-full'>
                <p> Repeat</p>
                <div className='flex gap-4 w-full flex-wrap mt-2'>
                    <Checkbox
                        label='Monday'
                        id='mon'
                        checked={state.mon}
                        onChange={() => dispatch({ type: "day", day: "mon" })}
                    />
                    <Checkbox
                        label='Tuesday'
                        id='tues'
                        checked={state.tues}
                        onChange={() => dispatch({ type: "day", day: "tues" })}
                    />
                    <Checkbox
                        label='Wednesday'
                        id='wed'
                        checked={state.wed}
                        onChange={() => dispatch({ type: "day", day: "wed" })}
                    />
                    <Checkbox
                        label='Thusday'
                        id='thus'
                        checked={state.thus}
                        onChange={() => dispatch({ type: "day", day: "thus" })}
                    />
                    <Checkbox
                        label='Friday'
                        id='fri'
                        checked={state.fri}
                        onChange={() => dispatch({ type: "day", day: "fri" })}
                    />
                    <Checkbox
                        label='Saterday'
                        id='sat'
                        checked={state.sat}
                        onChange={() => dispatch({ type: "day", day: "sat" })}
                    />
                    <Checkbox
                        label='Sunday'
                        id='sun'
                        checked={state.sun}
                        onChange={() => dispatch({ type: "day", day: "sun" })}
                    />
                </div>
            </div>

            <div className='flex gap-2 justify-end items-end w-full'>
                <Button label='Save' type='primary' onClick={() => {}} />
                <Button label='Cancel' type='secondary' onClick={() => {}} />
            </div>
        </div>
    );
};

export default Activity;
