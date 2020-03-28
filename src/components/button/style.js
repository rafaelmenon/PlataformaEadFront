import styled from 'styled-components';

export const ButtonBase = styled.button`
    width: ${props => props.width ? props.width : '100%'};
    background-color: ${props => props.background ? props.background : '#000'};
    color: ${props => props.color ? props.color : '#fff'};
    border: 1px solid ${props => props.border ? props.border : '#000'};
    font-size: 14px;
    font-weight: 600;
    border-radius: 0.5rem;
    text-align: center;
    outline: 0;
    height: 36px;
    cursor: pointer;
    margin: 15px 0;
`;