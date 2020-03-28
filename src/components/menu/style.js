import styled from 'styled-components';
import ArrowRightIcon from '@material-ui/icons/ArrowRight';

export const Body = styled.div`
    background-color: #fff;
    box-shadow: 0 4px 25px 0 rgba(0, 0, 0, 0.1);
    width: 250px;
    position: fixed;
    top: 80px;
    bottom: 0;
    left: 0;
    padding: 15px;
    color: #505050;
`;

export const Title = styled.p`
    text-align: center;
    font-family: 'Inter Extra Light BETA' !important;
    color: #a7abc3;
    padding: 10px 0;
    margin-top: 0;
`;

export const Option = styled.div`
    color: #0081ff;
    font-weight: 600;
    background-color: #e1e9fe;
    border-radius: 0.5rem;
    padding: 15px 5px;
    cursor: pointer;
    display: flex;
`;

export const Arrow = styled(ArrowRightIcon)`
    color: #0081ff !important;
    margin-top: -3px !important;
`;