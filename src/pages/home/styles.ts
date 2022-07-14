import styled from "styled-components";

type props =
    {
        backgroundImagePath: string;
    }
export const Container = styled.div<props>`
    background-color: ${({ theme }) => theme.colors.background};
    flex: 1;
    padding: ${({ theme }) => theme.paddings.vertical} ${({ theme }) => theme.paddings.horizontal};
    background-image: ${({ backgroundImagePath }) => `url(${backgroundImagePath})`} ;
    background-repeat: no-repeat;
    background-attachment: fixed;
    background-size: cover;
`;