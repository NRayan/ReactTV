import { lighten } from "polished";
import styled from "styled-components";

export const Container = styled.div`
    align-self: flex-start;
    border: 1px solid ${({ theme }) => theme.colors.secondary};
    border-radius: 7px;
    padding: 1.0rem;    
    flex-direction: row;
    align-items: center;
    margin: 4.0rem 0 3.0rem;
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
    max-width: 25rem;
    font-size: 1.6rem;

    ::placeholder,
    ::-webkit-input-placeholder {
    color: ${({ theme }) => lighten(.2, theme.colors.secondary)};
    }

    :-ms-input-placeholder {
     color: ${({ theme }) => lighten(.2, theme.colors.secondary)};
    }
`;