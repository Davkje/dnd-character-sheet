import styled from "styled-components";

export const Input = styled.input`
	color: var(--c-text-1);
	background-color: var(--c-bg-1);
	border: solid 2px var(--c-div);
	accent-color: var(--c-text-1);
	border-radius: 0.5rem;
	font-size: inherit;
	font-family: inherit;
	padding: 0.5rem;

	-webkit-appearance: none;
	-moz-appearance: none;
	appearance: none;

	&::placeholder {
		color: var(--c-div);
	}
`;

export const Select = styled.select`
	color: var(--c-text-1);
	background-color: var(--c-bg-1);
	border: solid 2px var(--c-div);
	accent-color: var(--c-text-1);
	border-radius: 0.5rem;
	font-size: inherit;
	font-family: inherit;
	padding: 0.5rem;
  text-transform: capitalize;

	-webkit-appearance: none;
	-moz-appearance: none;
	appearance: none;

	&::placeholder {
		color: var(--c-trans-1);
	}
`;

export const InputText = styled(Input).attrs({
	type: "text",
})`
	/* text-transform: uppercase; */
`;
