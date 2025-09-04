import styled, { keyframes } from "styled-components";

const spin = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

export const Spinner = styled.div`
	width: 44px;
	height: 44px;
	border-radius: 50%;
	border: 5px solid var(--c-primary-darker);
	border-top: 5px solid var(--c-primary-light);
	animation: ${spin} 1s linear infinite;
`;
