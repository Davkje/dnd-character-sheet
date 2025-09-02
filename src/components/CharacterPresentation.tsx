import { Link } from "react-router";
import type { Character } from "../models/Character";
import { Div, DivRow } from "./styled/Wrappers";

type CharacterPresentationProps = {
	character: Character;
};

export const CharacterPresentation = ({ character }: CharacterPresentationProps) => {
	return (
		<>
			<Div>
				<h3>{character.name}</h3>
				<DivRow>
					<Div>{character.race}</Div>
					<Div>{character.class}</Div>
					<Div>{character.level}</Div>
				</DivRow>
				<Link to={`/character/${character._id}`}>More</Link>
			</Div>
		</>
	);
};
