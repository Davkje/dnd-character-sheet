import { useContext } from "react";
import { useParams } from "react-router";
import { CharacterContext } from "../contexts/CharacterContext";
import {
	Div,
	DivRow,
	DivSmall,
	SheetWrapper,
	SkillContainer,
	SkillsWrapper,
} from "../components/styled/Wrappers";
import { ALL_SKILLS } from "../models/skills";
import { abilityLabels } from "../models/Abilities";

export const CharacterSheet = () => {
	const { id } = useParams();
	const { characters } = useContext(CharacterContext);

	if (id) {
		const character = characters.find((c) => c._id === id);

		if (!character) {
			return <>No character found</>;
		}

		return (
			<SheetWrapper>
				<h1>{character.name}</h1>
				<DivRow>
					<Div>{character.race}</Div>
					<Div>{character.class}</Div>
					<Div>Level {character.level}</Div>
				</DivRow>
				<DivRow>
					<Div>{character.armourClass} AC</Div>
					<Div>{character.hp} HP</Div>
					<Div>{character.speed}ft</Div>
					<Div>{character.proficiencyBonus} Prof</Div>
				</DivRow>
				<Div>
					<h3>Abilities</h3>
					<DivRow>
						{Object.entries(character.abilities).map(([ability, score]) => (
							<Div key={ability}>
								<h4>{abilityLabels[ability]}</h4>
								<span>{score}</span>
							</Div>
						))}
					</DivRow>
				</Div>
				<Div>
					<h3>Features</h3>
					{character.features.map((feat) => (
						<DivRow key={feat.name}>
							<h4>{feat.name}</h4>
							<Div>{feat.description}</Div>
						</DivRow>
					))}
				</Div>
				<Div>
					<h3>Spells</h3>
					{character.spells.map((spell) => (
						<DivRow key={spell.name}>
							<h4>{spell.name}</h4>
							<Div>{spell.description}</Div>
						</DivRow>
					))}
				</Div>
				<Div>
					<h3>Items</h3>
					<DivRow>
						{character.items.map((item) => (
							<span key={item}>{item}</span>
						))}
					</DivRow>
				</Div>

				<Div>
					<h3>Skills</h3>
					<SkillsWrapper>
						{ALL_SKILLS.map((skill) => {
							const proficient = character.proficientSkills.includes(skill.name);
							const abilityScore =
								character.abilities[
									skill.ability as keyof typeof character.abilities
								];
							const abilityMod = Math.floor((abilityScore - 10) / 2);
							const total =
								abilityMod + (proficient ? character.proficiencyBonus : 0);
							return (
								<SkillContainer key={skill.name}>
									<DivSmall>
										<span>{proficient ? "Yes" : "No"}</span>
										<span>{skill.name}</span>
										<span>{abilityLabels[skill.ability]}</span>
									</DivSmall>
									<span>{total}</span>
								</SkillContainer>
							);
						})}
					</SkillsWrapper>
				</Div>
			</SheetWrapper>
		);
	}

	return <>No id found</>;
};
