import { createBrowserRouter } from "react-router";
import { Layout } from "./pages/Layout/Layout";
import { CharacterSheet } from "./pages/CharacterSheet";
import { CharactersList } from "./pages/CharactersList";
import { Home } from "./pages/Home";
import { Error } from "./pages/Error";

export const router = createBrowserRouter([
	{
		path: "/",
    errorElement: <Error />,
		element: <Layout />,
		children: [
			{
				path: "/",
				element: <Home />,
			},
			{
				path: "/characters",
				element: <CharactersList />,
			},
			{
				path: "/character/:id",
				element: <CharacterSheet />,
			},
		],
	},
]);
