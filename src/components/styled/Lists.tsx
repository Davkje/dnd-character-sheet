import { styled } from "styled-components";
import { Button } from "./Buttons";

export const FormUl = styled.ul`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	/* gap: .25rem; */
	border: solid 2px var(--c-div);
	border-radius: 0.5rem;
`;

export const FormLi = styled.li`
	text-transform: capitalize;
	width: 100%;
	display: flex;
	flex-direction: row;
	flex: 1;
	justify-content: space-between;
	align-items: center;
	padding-left: 0.5rem;
`;

export const ListButton = styled(Button)`
	padding: 0.25rem;
	margin: 4px;
	background-color: transparent;
	border: none;
`;
