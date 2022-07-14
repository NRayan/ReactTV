import styled from "styled-components";

export const Container = styled.div`
    flex: 1;
`;

export const Link = styled.a`
    text-decoration: none;
    color: ${({ theme }) => theme.colors.primary};
`;