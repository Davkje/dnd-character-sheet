import styled from "styled-components";

export const Input = styled.input`
	color: var(--c-primary-darker);
	background-color: var(--c-primary-lighter);
	border: solid 3px var(--c-primary-darker);
	accent-color: var(--c-primary-light);
	border-radius: 0.25rem;
  font-size: inherit;
	font-family: inherit;	
	padding: 0.25rem;

	-webkit-appearance: none;
	-moz-appearance: none;
	appearance: none;

	&::placeholder {
		color: rgba(0, 0, 0, 0.41);
	}
`;

export const Select = styled.select`
	color: var(--c-primary-darker);
	background-color: var(--c-primary-lighter);
	border: solid 3px var(--c-primary-darker);
	accent-color: var(--c-primary-light);
	border-radius: 0.25rem;
  font-size: inherit;
	font-family: inherit;	
	padding: 0.25rem;

	-webkit-appearance: none;
	-moz-appearance: none;
	appearance: none;

	&::placeholder {
		color: rgba(0, 0, 0, 0.41);
	}
`;

export const InputText = styled(Input).attrs({
  type: "text",
})`
  text-transform: uppercase;
`;