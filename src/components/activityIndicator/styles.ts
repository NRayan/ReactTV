import styled, { keyframes } from "styled-components";

const size = "4.5rem";
const borderSize = "1rem";

const spinAnimation = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`

export const SpinnerDiv = styled.div`
  margin-top:15rem;
  align-self: center;
  border: ${borderSize} solid ${({ theme }) => theme.colors.secondary}; 
  border-top: ${borderSize} solid ${({ theme }) => theme.colors.primary};
  border-radius: 50%;
  width: ${size};
  height: ${size};
  animation: ${spinAnimation} 1s linear infinite;
`;