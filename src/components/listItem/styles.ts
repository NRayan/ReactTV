import { transparentize } from "polished";
import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    background-color: ${({ theme }) => transparentize(.5, theme.colors.secondary)};
    border-radius: 10px;
    position: relative;
    padding: 1.0rem 1.0rem 0;
    cursor: pointer;
`;

export const Thumbnail = styled.img`
    width: 100%;
    height: 85%;
    aspect-ratio: 0.7;
    border-radius: 10px;
    object-fit: cover;
`;

export const TitleContainer = styled.div`
    flex: 1;
    justify-content: center;
`;

export const Title = styled.h2`
    font-size: 1.6rem;
    color: ${({ theme }) => transparentize(.1, theme.colors.text)};
`;

export const RateContainer = styled.div`
    position: absolute;
    left: 2.5rem;
    top: 2.5rem;
`;