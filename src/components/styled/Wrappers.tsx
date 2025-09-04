import styled from "styled-components";

// WRAPPERS
export const Wrapper = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	gap: 0.5rem;
	width: 100%;
	padding: 0.5rem;
	border-radius: 0.5rem;
	background-color: var(--c-primary-lighter);
`;

export const WrapperRow = styled(Wrapper)`
	flex-direction: row;
`;

export const PageWrapper = styled.div`
	max-width: 1100px;
	width: 100%;
	display: flex;
	flex-direction: column;
	align-items: center;
	gap: 0.5rem;
	padding: 0.5rem;
`;

export const PageWrapperGrid = styled.div`
	max-width: 1100px;
	width: 100%;
	display: grid;
	grid-template-columns: repeat(3, 1fr);
	gap: 0.5rem;
	padding: 0.5rem;
`;

export const Block1 = styled.div`
	background-color: red;
`;

export const Section = styled.section`
	display: flex;
	flex-direction: column;
	align-items: center;
	gap: 0.5rem;
	width: 100%;
	border-radius: 0.25rem;
	/* background-color: var(--c-primary-dark); */
`;

export const SectionRow = styled(Section)`
	flex-direction: row;
`;

// DIV

export const Div = styled.div`
	display: flex;
	width: 100%;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	background-color: var(--c-white-trans);
	border-radius: 0.25rem;
	gap: 0.5rem;
`;

export const DivRow = styled(Div)`
	flex-direction: row;
`;

export const DivSmall = styled.div`
	display: flex;
	align-items: center;
	gap: 1rem;
`;

// --- IMAGE ---

export const ImageWrapper = styled(Wrapper)`
	background-color: var(--c-primary-darker);
`;

// --- SKILLS ---

export const SkillsWrapper = styled.div`
	display: flex;
	width: 100%;
	flex-direction: column;
	gap: 0.25rem;
`;

export const SkillContainer = styled.div`
	display: flex;
	justify-content: space-between;
	border: solid 2px var(--c-primary);
	border-radius: 0.25rem;
	padding: 0.25rem 1rem;
	text-transform: capitalize;
`;
