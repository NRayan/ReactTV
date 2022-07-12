import { transparentize } from "polished";
import styled from "styled-components";

export const Container = styled.div`
flex: 1;
align-items: center;
`;

export const ContentContainer = styled.div`
padding: 0 10%;
flex-direction: row;
align-items: flex-start;
justify-content: space-between;
column-gap: 4%;
`;

export const ThumbImage = styled.img`
    width: 40%;
    aspect-ratio: 0.7;
    border-radius: 10px;
    object-fit: cover;
`;

export const DetailsContainer = styled.div`
    align-items: flex-start;
    row-gap: 20px;
`;

export const Title = styled.h1`
    font-size: 34px;
    color: ${({ theme }) => theme.colors.text};
    font-weight: 700;
`;

export const Summary = styled.h3`
    font-size: 16px;
    color: ${({ theme }) => transparentize(.2, theme.colors.text)};
    font-weight: 300;
    line-height: 170%;
`;

export const LabelValueContainer = styled.div`

`;

export const Label = styled.h3`
    font-size: 14px;
    color: ${({ theme }) => transparentize(.3, theme.colors.text)};
    font-weight: 300;
`;

export const Value = styled.h3`
    font-size: 16px;
    color: ${({ theme }) => transparentize(.1, theme.colors.text)};
    font-weight: 400;
`;