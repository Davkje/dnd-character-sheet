import { useContext } from "react";
import { Section } from "../components/styled/Wrappers";
import { CharacterContext } from "../contexts/CharacterContext";
import { CharacterPresentation } from "../components/CharacterPresentation";
import { Loader } from "../components/Loader";

export const CharactersList = () => {
	const { characters } = useContext(CharacterContext);

	return (
		<>
			<h1>CHARACTERS</h1>
			{!characters || characters.length === 0 ? (
				<Loader />
			) : (
				<Section>
					{characters.map((char) => (
						<CharacterPresentation key={char._id} character={char} />
					))}
				</Section>
			)}
		</>
	);
};
