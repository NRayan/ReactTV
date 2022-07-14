import { transparentize } from "polished";
import styled from "styled-components";

export const Container = styled.header`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 5.0rem;
`

export const Image = styled.img`
    cursor: pointer;
    height: 34px;
    width: 34px;
`;

export const NavigationContainer = styled.nav`
    display: flex;
    flex-direction: row;
    column-gap: 20px;
`;

export const UnordernedList = styled.ul`
    display: flex;
    flex-direction: row;
    column-gap: 20px;
`;

export const ListItem = styled.li`

`;

export const Button = styled.a`
    cursor: pointer;
    color: ${({ theme }) => transparentize(.2, theme.colors.text)};
    font-size: 1.6rem;
`;
