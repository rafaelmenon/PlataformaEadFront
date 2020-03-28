import React, { useState } from 'react'
import Input from '../../components/input';
import Button from '../../components/button';
import { useDispatch } from 'react-redux';
import { signInRequest } from '../../store/modules/auth/actions'; 
import { Body, Content, Title, Main, Separator, CreateAcc } from './style';

const Login = () => {
    const [email, setEmail] = useState(null);
    const [password, setPassword] = useState(null)

    const dispatch = useDispatch();

    const handleLogin = ev => {
        ev.preventDefault();

        if (email && password) {
            dispatch(signInRequest(email, password))
        }
    }

    return (
        <Body>
            <Content>
                <form onSubmit={handleLogin}>
                    <Title>Plataforma</Title>
                    <Main style={{ marginRight: '26px' }}>
                    <Input
                        type="email"
                        onChange={ev => setEmail(ev.target.value)}
                        placeholder="Usuário ou E-mail"
                    />
                    <Input
                        type="password"
                        onChange={ev => setPassword(ev.target.value)}
                        placeholder="Senha"
                    />
                    <Button 
                        Text="Entrar"
                        color="#fff"
                        background="#0081ff"
                        border="#0081ff"
                        type="submit"
                        width="104%"
                    />
                    <Separator />
                    <CreateAcc>Ainda não possui uma conta?</CreateAcc>
                    <Button 
                        Text="Registrar"
                        color="#212529"
                        background="#fff"
                        border="#a9a9a9"
                        width="30%"
                    />
                    </Main>
                </form>
            </Content>
        </Body>
    )
}

export default Login