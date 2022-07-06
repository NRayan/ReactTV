import { transparentize } from "polished";
import styled from "styled-components";

export const Container = styled.div`
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 10vh;
`

export const Image = styled.img`
    height: 34px;
    width: 34px;
`;

export const ButtonsContainer = styled.div`
    flex-direction: row;
    column-gap: 20px;
`;

export const Button = styled.button`
    color: ${({ theme }) => transparentize(.2, theme.colors.text)};
    font-size: 18px;
`;
