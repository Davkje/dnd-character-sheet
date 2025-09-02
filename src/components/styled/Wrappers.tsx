import styled from "styled-components";

export const Section = styled.section`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	gap: 0.25rem;
	width: 100%;
	padding: 0.25rem;
	border-radius: 0.25rem;
	background-color: var(--c-primary-dark);
`;

export const SectionRow = styled(Section)`
	flex-direction: row;
`;

export const Div = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	width: 100%;
	padding: 0.25rem;
	border-radius: 0.25rem;
	background-color: var(--c-primary-lighter);
`;

export const DivRow = styled(Div)`
	flex-direction: row;
`;
