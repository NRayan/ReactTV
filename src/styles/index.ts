import styled from "styled-components";

export const PageTitle = styled.h1`
   color: ${({ theme }) => theme.colors.text};
    
    font-size: 5vw;
    font-weight: 600;

    @media(min-width:1080px)
    {
        font-size: 48px;
    }
`;

export const PageSubtitle = styled.h2`
    color: ${({ theme }) => theme.colors.text};
    font-size: 2vw;
    font-weight: 300;

    @media(min-width:1080px)
    {
        font-size: 18px;
    }
`;