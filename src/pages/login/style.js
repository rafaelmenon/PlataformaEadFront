import styled from 'styled-components'

export const Body = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    margin: 0 auto;
    align-items: center;
    background-color: #f8fafb;
`;

export const Content = styled.div`
    box-shadow: 0 3px 10px rgba(62, 85, 120, 0.045);
    background-color: #fff;
    padding: 1rem;
    border-radius: 0.5rem;
    width: 430px;
    text-align: center;
`;

export const Title = styled.h1`
    font-weight: 500;
    font-size: 30px;
    color: #000;
`;

export const Main = styled.div`
    margin: 0 auto;
    width: 92%;
`;

export const Separator = styled.div`
    border-style: solid;
    border-color: #dcdcdc;
    border-width: 1px 0 0 0;
    margin: 30px 0;
    width: 104%;
`;

export const CreateAcc = styled.p`
    color: #a7abc3;
    text-align: center;
`;