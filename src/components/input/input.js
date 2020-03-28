import React from 'react'
import { InputBase } from './style'

const Input = ({ placeholder, onChange, disabled, type }) => {
    return (
        <InputBase 
            placeholder={placeholder}
            onChange={onChange}
            disabled={disabled}
            type={type}
        />
    );
};

export default Input;