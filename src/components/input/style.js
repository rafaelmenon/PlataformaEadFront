import styled from 'styled-components'

export const InputBase = styled.input`
    width: 100%;
    height: 30px;
    outline: 0 !important;
    font-size: 0.875rem;
    border: 1px solid #e1e1e1;
    border-radius: 0.5rem;
    padding: 3px 8px;
    margin: 15px 0; 

    &:hover {
        border: 1px solid #1771fa;
    }

    &:focus {
        border: 1px solid #1771fa;
    }
`;