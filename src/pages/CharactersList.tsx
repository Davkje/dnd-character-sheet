import { useContext } from "react";
import { Section, PageWrapper } from "../components/styled/Wrappers";
import { CharacterContext } from "../contexts/CharacterContext";
import { CharacterPresentation } from "../components/CharacterPresentation";
import { Loader } from "../components/Loader";

export const CharactersList = () => {
	const { characters } = useContext(CharacterContext);

	return (
		<PageWrapper>
			<h1>CHARACTERS</h1>
			<Section>
        {!characters && <Loader/>}
				{characters.map((char) => (
					<CharacterPresentation key={char._id} character={char} />
				))}
			</Section>
		</PageWrapper>
	);
};
