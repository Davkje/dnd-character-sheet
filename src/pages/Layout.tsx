import { NavLink, Outlet } from "react-router";
import { Footer, Header, Main, Nav } from "../components/styled/Layouts";
import { PageWrapper } from "../components/styled/Wrappers";

export const Layout = () => {
	return (
		<>
			<Header>
				<Nav>
					<NavLink to={"/"}>Home</NavLink>
					<NavLink to={"/characters"}>Characters</NavLink>
					<NavLink to={"/create"}>New Character</NavLink>
				</Nav>
			</Header>
			<Main>
				<PageWrapper>
					<Outlet />
				</PageWrapper>
			</Main>
			<Footer></Footer>
		</>
	);
};
