import styled from "styled-components";

export const Container = styled.div`
    background-color: ${({ theme }) => theme.colors.background};
    flex: 1;
    padding: ${({ theme }) => theme.paddings.vertical} ${({ theme }) => theme.paddings.horizontal};    
    background-image: url(/ReactTV/src/assets/Background.png) ;
    background-repeat: no-repeat;
    background-attachment: fixed;
    background-size: cover;
`;