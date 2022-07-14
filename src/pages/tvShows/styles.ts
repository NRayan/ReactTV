import styled from "styled-components";

export const Container = styled.section`
    display: flex;
    flex-direction: column;
`;

export const Link = styled.a`
    text-decoration: none;
    color: ${({ theme }) => theme.colors.primary};
`;