import React from "react";

const Input = ({ name, label, value, onChange }) => {
    return (
        <div className='flex  text-gray-600 gap-2 items-baseline'>
            <label htmlFor={name} className='label'>
                {label}
            </label>
            <input
                className=' input'
                id={name}
                name={name}
                type='text'
                value={value}
                onChange={onChange}
            ></input>
        </div>
    );
};

export default Input;
