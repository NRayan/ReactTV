import { transparentize } from "polished";
import styled from "styled-components";

export const Container = styled.div`
    width: 13vw;
    min-width: 150px;
    aspect-ratio: 0.6;
    background-color: ${({ theme }) => transparentize(.5, theme.colors.secondary)};
    border-radius: 10px;
    padding: 10px 10px 0;
    position: relative;
    cursor: pointer;
`;

export const Thumbnail = styled.img`
    height: 85%;
    width: 100%;
    border-radius: 10px;
    object-fit: cover;
`;

export const TitleContainer = styled.div`
    flex: 1;
    justify-content: center;
`;

export const Title = styled.h2`
    font-size: 16px;
    color: ${({ theme }) => transparentize(.1, theme.colors.text)};
`;

export const RateContainer = styled.div`
    position: absolute;
    left: 25px;
    top: 25px;
`;