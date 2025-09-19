import styled from "styled-components";

export const Header = styled.header`
	background-color: var(--c-bg-2);
	width: 100%;
	min-height: 50px;
	display: flex;
	justify-content: flex-end;
	align-items: center;
	padding: 0 1rem;
`;

export const Nav = styled.nav`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

export const Main = styled.main`
	background-color: var(--c-bg-1);
	flex: 1;
	display: flex;
	justify-content: center;
`;

export const Footer = styled.footer`
	background-color: var(--c-bg-2);
	width: 100%;
	min-height: 50px;
`;
