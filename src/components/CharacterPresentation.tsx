import { Link } from "react-router";
import type { Character } from "../models/Character";
import { Div, DivRow, Wrapper } from "./styled/Wrappers";

type CharacterPresentationProps = {
	character: Character;
};

export const CharacterPresentation = ({ character }: CharacterPresentationProps) => {
	return (
		<>
			<Wrapper>
				<h3>{character.name}</h3>
				<DivRow>
					<Div>{character.race}</Div>
					<Div>{character.class}</Div>
					<Div>{character.level}</Div>
				</DivRow>
				<Link to={`/character/${character._id}`}>More</Link>
			</Wrapper>
		</>
	);
};
