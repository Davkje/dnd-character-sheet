import { NavLink, Outlet } from "react-router";
import { Footer, Header, Main, Nav } from "../components/styled/Layouts";

export const Layout = () => {
	return (
		<>
			<Header>
				<Nav>
					<NavLink to={"/"}>Home</NavLink>
					<NavLink to={"/characters"}>Characters</NavLink>
				</Nav>
			</Header>
			<Main>
				<Outlet />
			</Main>
			<Footer></Footer>
		</>
	);
};
