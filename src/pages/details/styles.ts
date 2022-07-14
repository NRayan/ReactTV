import { transparentize } from "polished";
import styled from "styled-components";

export const Container = styled.div`
flex: 1;
align-items: center;
`;

export const ContentContainer = styled.div`
width: 100%;
flex-direction: row;
align-items: flex-start;
justify-content: space-between;
column-gap: 4%;
`;

export const ThumbContainer = styled.div`
    aspect-ratio: 0.7;
    width: 40%;
    max-height: 85vh;
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
    height: 5.0rem;
    width: 5.0rem;
    justify-content: center;
    align-items: center;
    background-color: rgba(0,0,0,.7);
    border-radius: 100%;
    right: 4%;
    top: 4%;
`;

export const DetailsContainer = styled.div`
    flex: 1;
    align-items: flex-start;
    row-gap: 1.5rem;
`;

export const Title = styled.h1`
    font-size: 3.0rem;
    color: ${({ theme }) => theme.colors.text};
    font-weight: 700;
`;

export const Summary = styled.h3`
    font-size: 1.5rem;
    color: ${({ theme }) => transparentize(.2, theme.colors.text)};
    font-weight: 300;
    line-height: 170%;    
`;

export const LabelValueContainer = styled.div`

`;

export const Label = styled.h3`
    color: ${({ theme }) => transparentize(.3, theme.colors.text)};
    font-weight: 300;
    font-size: 1.4rem;
`;

export const Value = styled.h3`
    color: ${({ theme }) => transparentize(.1, theme.colors.text)};
    font-weight: 400;
    font-size: 1.6rem;
`;