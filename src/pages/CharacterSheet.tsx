import { useContext } from "react";
import { useParams } from "react-router";
import { CharacterContext } from "../contexts/CharacterContext";
import { CharacterPresentation } from "../components/CharacterPresentation";

export const CharacterSheet = () => {
	const { id } = useParams();
	const { characters } = useContext(CharacterContext);

	if (id) {
		const foundCharacter = characters.find((c) => c._id === id);

		if (!foundCharacter) {
			return <>No character found</>;
		}

		return <CharacterPresentation character={foundCharacter}></CharacterPresentation>;
	}

	return <>No id found</>;
};
