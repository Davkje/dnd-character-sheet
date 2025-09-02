import "./style/App.scss";
import { useEffect, useReducer } from "react";
import { getCharacters } from "./services/CharacterService";
import { CharacterReducer } from "./reducers/CharacterReducer";
import { CharacterContext } from "./contexts/CharacterContext";
import { RouterProvider } from "react-router";
import { router } from "./Router";

function App() {
	const [characters, dispatch] = useReducer(CharacterReducer, []);

	useEffect(() => {
		const getData = async () => {
			const fetchedCharacters = await getCharacters();
			dispatch({
				type: "LOADED",
				payload: JSON.stringify(fetchedCharacters),
			});
		};
		if (characters.length > 0) return; // Om vi redan hämtat datan, kör INTE IGEN!
		getData(); // Om det inte finns data, HÄMTA!
	});

	return (
		<CharacterContext.Provider value={{ characters, dispatch }}>
			<RouterProvider router={router}>
			</RouterProvider>
		</CharacterContext.Provider>
	);
}

export default App;
