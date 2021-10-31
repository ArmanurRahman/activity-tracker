import React from "react";

const DateInput = ({ name, label, value, onChange }) => {
    return (
        <div className='flex gap-2 text-gray-600 items-baseline'>
            <label htmlFor={name} className='label'>
                {label}
            </label>
            <input
                className=' input'
                id={name}
                name={name}
                type='date'
                value={value}
                onChange={onChange}
            ></input>
        </div>
    );
};

export default DateInput;
