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

export const Subtitle = styled.h3`
    color: ${({ theme }) => theme.colors.text};
    margin-bottom: 50px;
`;