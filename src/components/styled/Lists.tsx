import { styled } from "styled-components";

export const FormUl = styled.ul`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	padding: 0.5rem;
	border: solid 2px var(--c-div);
	border-radius: 0.5rem;
	gap: 1rem;
`;
export const FormLi = styled.li`
	width: 100%;
	display: flex;
	align-items: flex-start;
  /* justify-content: center; */
	/* border-bottom: solid 2px var(--c-trans-2); */
	gap: 0.5rem;
	/* padding-bottom: 0.5rem; */

	h4 {
		display: flex;
		align-items: flex-start;
		text-align: left;
		height: 100%;
		flex: 1;
		margin: 0;
	}
	p {
		display: flex;
		align-items: flex-start;
		flex: 4;
		height: 100%;
	}
`;
