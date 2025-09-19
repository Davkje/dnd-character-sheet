import styled from "styled-components";

export const Button = styled.button`
	background-color: var(--c-bg-2);
	color: var(--c-text-1);
	accent-color: var(--c-text-1);
	border: 2px solid var(--c-div);
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
		background-color: var(--c-trans-2);
	}
	&:disabled {
    color: var(--c-div);
	}
`;

export const AbilityButton = styled(Button)`
	background-color: var(--c-bg-1);
	flex-direction: column;
`;

export const SettingsButton = styled(Button)`
	background-color: transparent;
	border: none;
	padding: 0.5rem;
`;

export const ThemeButton = styled(Button)`
	background-color: transparent;
	border: none;
	padding: 0.5rem;
`;

export const ListButton = styled(Button)`
  color: var(--c-bg-2);
	padding: 0;
	/* margin: 4px; */
	background-color: transparent;
	border: none;
  transition: color .25s ease;
  &:hover {
    color: var(--c-text-1);
    background-color: var(--c-bg-1);
  }
`;
