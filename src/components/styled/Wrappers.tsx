import styled from "styled-components";

// --- WRAPPERS ---

export const Wrapper = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: flex-start;
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
`;

export const Section = styled.section`
	display: flex;
	flex-direction: column;
	align-items: center;
	gap: 0.5rem;
	width: 100%;
	border-radius: 0.25rem;
`;

export const SectionRow = styled(Section)`
	flex-direction: row;
`;

// --- DIV ---

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
  justify-content: space-between;
`;

export const DivSmall = styled.div`
	display: flex;
	align-items: center;
	gap: 1rem;
`;

// --- CHARACTER LIST ---

export const CharacterList = styled(Wrapper)`
  background-color: var(--c-primary);
  display: grid;
  grid-template-columns: repeat(6, 1fr);
`;

export const CharacterListItem = styled(Wrapper)`
  grid-column: span 6;

  a {
    color: var(--c-primary-darker);
    &:hover {
      color: var(--c-primary);
    }
  }


  @media screen and (min-width: 600px) {
    grid-column: span 3;
  }

  @media screen and (min-width: 900px) {
    grid-column: span 2;
  }
`;

// --- IMAGE ---

export const ImageWrapper = styled(Wrapper)`
	min-height: 170px;
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
	padding: 0.25rem .5rem;
	text-transform: capitalize;
`;

// --- MODAL ---

export const ModalOverlay = styled(Div)`
	position: fixed;
	background-color: var(--c-black-trans);
	padding: .5rem;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`;

export const Modal = styled(Div)`
	background-color: var(--c-primary-light);
  border: solid 3px var(--c-primary-darker);
  border-radius: 0.5rem;
  max-width: 300px;
  padding: 1rem;
`;

// Settings

