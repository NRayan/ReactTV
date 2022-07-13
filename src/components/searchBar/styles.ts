import { lighten } from "polished";
import styled from "styled-components";

export const Container = styled.div`
    align-self: flex-start;
    border: 1px solid ${({ theme }) => theme.colors.secondary};
    border-radius: 10px;
    padding: 10px;    
    flex-direction: row;
    align-items: center;
    margin: 6vh 0 5vh;
`;

export const Icon = styled.img`
    height: 25px;
    width: 25px;
`;

export const Input = styled.input`
    margin-left: 10px;
    background-color: transparent;
    border: none;
    color: ${({ theme }) => theme.colors.text};
    max-width: 250px;
    font-size: 1.5vh;

    ::placeholder,
    ::-webkit-input-placeholder {
    color: ${({ theme }) => lighten(.2, theme.colors.secondary)};
    }

    :-ms-input-placeholder {
     color: ${({ theme }) => lighten(.2, theme.colors.secondary)};
    }

    @media(min-width:1080px)
    {
        font-size: 16px;
    }
`;