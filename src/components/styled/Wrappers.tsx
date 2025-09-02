import styled from "styled-components";

// WRAPPERS

export const PageWrapper = styled.div`
	max-width: 1100px;
	display: flex;
	flex-direction: column;
	align-items: center;
`;

export const SheetWrapper = styled.div`
	max-width: 1100px;
	width: 100%;
	display: flex;
	flex-direction: column;
	align-items: center;
	gap: 0.5rem;
	padding: 0.5rem;
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
	flex-direction: column;
	justify-content: center;
	align-items: center;
	gap: 0.5rem;
	width: 100%;
	padding: 0.5rem;
	border-radius: 0.5rem;
	background-color: var(--c-primary-lighter);
`;

export const DivRow = styled(Div)`
	flex-direction: row;
`;

export const DivSmall = styled.div`
	display: flex;
  gap: 1rem;
`;

// CONTAINERS

export const SkillsWrapper = styled.div`
	display: flex;
  width: 100%;
  flex-direction: column;
  gap: .25rem;
`;

export const SkillContainer = styled.div`
  display: flex;
  justify-content: space-between;
  border: solid 2px var(--c-primary);
  border-radius: 0.25rem;
  padding: 0.25rem;
`;
