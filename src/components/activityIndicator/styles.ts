import styled, { keyframes } from "styled-components";

const size = 25;
const borderSize = 6;

const spinAnimation = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`

export const Container = styled.div`
align-self: center;
  border: ${borderSize}px solid ${({ theme }) => theme.colors.secondary}; 
  border-top: ${borderSize}px solid ${({ theme }) => theme.colors.primary};
  border-radius: 50%;
  width: ${size}px;
  height: ${size}px;
  animation: ${spinAnimation} 1s linear infinite;
`;