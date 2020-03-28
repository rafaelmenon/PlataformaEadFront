import styled from 'styled-components';
import SettingsIcon from '@material-ui/icons/Settings';
import HelpOutlineIcon from '@material-ui/icons/HelpOutline';

export const Body = styled.div`
    width: 100%;
    height: 80px;
    background-color: #313852;
    color: #c7c7c7;
    display: flex;
    align-items: center;
    padding: 0 30px;
`;

export const Title = styled.h1`
    font-size: 28px;
`;

export const Actions = styled.div`
    display: flex;
    width: 75%;
    justify-content: flex-end;
   
`;

export const IconHelp = styled(HelpOutlineIcon)`
    color: #c7c7c7 !important;
    margin: 0 10px !important;  
    cursor: pointer !important;
`;

export const IconSettings = styled(SettingsIcon)`
    color: #c7c7c7 !important;
    margin: 0 10px !important; 
    cursor: pointer !important; 
`;

export const Name = styled.p`
    padding-left: 10px;
    cursor: pointer;
`;