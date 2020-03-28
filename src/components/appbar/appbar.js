import React from 'react';
import { useSelector } from 'react-redux'
import { Body, Title, Actions, IconHelp, IconSettings, Name } from './style';

const Appbar = () => {

    const userName = useSelector(state => state.user.profile.name);

    return (
        <Body>
            <Title>Plataforma</Title>
            <Actions>
                <IconHelp />
                <IconSettings />
            </Actions>
            <Name>{userName ? userName : null}</Name>
        </Body>
    );
};

export default Appbar;