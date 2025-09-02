import "./style/App.scss";
import { useEffect, useReducer } from "react";
import { Div, DivRow, Section } from "./components/styled/Wrappers";
import { getCharacters } from "./services/CharacterService";
import { CharacterReducer } from "./reducers/CharacterReducer";
import { CharacterContext } from "./contexts/CharacterContext";

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
			<h1>DND SHEET</h1>
			<Section>
				{characters.map((char) => (
					<Div key={char.id}>
						<h3>{char.name}</h3>
						<DivRow>
							<Div>{char.race}</Div>
							<Div>{char.class}</Div>
							<Div>{char.level}</Div>
						</DivRow>
					</Div>
				))}
			</Section>
		</CharacterContext.Provider>
	);
}

export default App;
