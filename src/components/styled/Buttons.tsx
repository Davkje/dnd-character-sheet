import styled from "styled-components";

export const Button = styled.button`
	background-color: var(--c-primary);
	color: var(--c-primary-darker);
	accent-color: var(--c-primary-darker);
	border: 3px solid var(--c-primary-darker);
	border-radius: 0.5rem;
	padding: 0.6em 1.2em;
	font-size: 1.1em;
	font-weight: bold;
	font-family: inherit;
	text-transform: uppercase;
	transition: background-color 0.25s;
	-webkit-appearance: none;
	-moz-appearance: none;
	appearance: none;
	cursor: pointer;
	&:hover {
		background-color: var(--c-primary-light);
	}
  &:disabled {
    background-color: var(--c-black-trans);
  }
`;

type ButtonProps = {
	bgColor?: string;
};

export const ButtonCustom = styled(Button)<ButtonProps>`
	background-color: ${(props) => props.bgColor || "red"};
`;


export const AbilityButton = styled(Button)`
  background-color: var(--c-primary-lighter);
`;
