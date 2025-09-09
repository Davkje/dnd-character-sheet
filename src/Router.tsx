import { createBrowserRouter } from "react-router";
import { Layout } from "./pages/Layout";
import { CharacterSheet } from "./pages/CharacterSheet";
import { CharactersList } from "./pages/CharactersList";
import { Home } from "./pages/Home";
import { Error } from "./pages/Error";
import { CreatePage } from "./pages/CreatePage";

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
				path: "/create",
				element: <CreatePage />,
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
