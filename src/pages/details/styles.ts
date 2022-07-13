import { transparentize } from "polished";
import styled from "styled-components";

export const Container = styled.div`
flex: 1;
align-items: center;
`;

export const ContentContainer = styled.div`
flex: 1;
padding: 0 10%;
flex-direction: row;
align-items: flex-start;
justify-content: space-between;
column-gap: 4%;
`;

export const ThumbContainer = styled.div`
    width: 40%;
    aspect-ratio: 0.7;
    border-radius: 10px; 
    overflow: hidden;
    position: relative;
`;

export const ThumbImage = styled.img`
    height: 100%;
    width: 100%;
    object-fit: cover;
`;

export const FavoriteContainer = styled.button`
    display: flex;
    position: absolute;
    height: 50px;
    width: 50px;
    justify-content: center;
    align-items: center;
    background-color: rgba(0,0,0,.7);
    border-radius: 100%;
    right: 5%;
    top: 5%;
`;

export const DetailsContainer = styled.div`
    flex: 1;
    align-items: flex-start;
    row-gap: 5px;

    @media(min-width:1080px)
    {
         row-gap: 15px;
    }
`;

export const Title = styled.h1`
    font-size: 2.5vw;
    @media(min-width:1080px)
    {
        font-size: 32px;
    }
    color: ${({ theme }) => theme.colors.text};
    font-weight: 700;
`;

export const Summary = styled.h3`
    color: ${({ theme }) => transparentize(.2, theme.colors.text)};
    font-weight: 300;
    line-height: 170%;
    
    font-size: 1.3vw;
    @media(min-width:1080px)
    {
        font-size: 16px;
    }
`;

export const LabelValueContainer = styled.div`

`;

export const Label = styled.h3`
    color: ${({ theme }) => transparentize(.3, theme.colors.text)};
    font-weight: 300;
    font-size: 1.1vw;
    @media(min-width:1080px)
    {
        font-size: 14px;
    }
`;

export const Value = styled.h3`
    color: ${({ theme }) => transparentize(.1, theme.colors.text)};
    font-weight: 400;
    font-size: 1.3vw;
    @media(min-width:1080px)
    {
        font-size: 16px;
    }
`;