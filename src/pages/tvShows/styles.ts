import styled from "styled-components";

export const Container = styled.div`
    background-color: ${({ theme }) => theme.colors.background};
    flex: 1;
`;

export const Link = styled.a`
    text-decoration: none;
    color: ${({ theme }) => theme.colors.primary};
`;