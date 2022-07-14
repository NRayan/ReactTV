import styled from "styled-components";

export const PageTitle = styled.h1`
   color: ${({ theme }) => theme.colors.text};
    
    font-size: 4.4rem;
    font-weight: 600;
`;

export const PageSubtitle = styled.h2`
    color: ${({ theme }) => theme.colors.text};
    font-size: 2.0rem;
    font-weight: 300;
`;