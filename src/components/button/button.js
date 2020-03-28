import React from 'react';
import { ButtonBase } from './style';

const Button = ({ Text, type, color, background, border, onClick, width }) => {
    return (
        <ButtonBase 
            type={type}
            color={color}
            background={background}
            border={border}
            onClick={onClick}
            width={width}
        >
            {Text}
        </ButtonBase>
    );
};

export default Button;