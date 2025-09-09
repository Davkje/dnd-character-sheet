import styled from "styled-components";

export const Button = styled.button`
	background-color: var(--c-primary);
	color: var(--c-primary-darker);
	accent-color: var(--c-primary-darker);
	border: 3px solid var(--c-primary-darker);
	border-radius: 0.5rem;
	padding: 0.4em 1.2em;
	display: flex;
	justify-content: center;
	align-items: center;
	font-size: 1em;
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

export const PrimaryAbilityButton = styled(Button)`
	background-color: var(--c-primary-lighter);
	padding: 0.25rem;
	border: none;
	width: 100%;
`;

export const AbilityButton = styled(Button)`
	background-color: var(--c-primary-lighter);
	flex-direction: column;
`;
