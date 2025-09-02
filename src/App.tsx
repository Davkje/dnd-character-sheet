import "./style/App.scss";
import { useEffect, useReducer } from "react";
import { Button } from "./components/styled/Buttons";
import { Div, Section } from "./components/styled/Wrappers";
import { getCharacters } from "./services/CharacterService";
import { CharacterReducer } from "./reducers/CharacterReducer";

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
		<>
			<h1>DND SHEET</h1>
			<Section>
				<Div>
					<Button>Button</Button>
					{characters.length}
				</Div>
			</Section>
		</>
	);
}

export default App;
