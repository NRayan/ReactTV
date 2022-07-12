import styled from "styled-components";

export const Container = styled.div`
    background-color: ${({ theme }) => theme.colors.background};
    flex: 1;
`;

export const Title = styled.h1`
    color: ${({ theme }) => theme.colors.text};
    font-size: 48px;
    font-weight: 600;
`;