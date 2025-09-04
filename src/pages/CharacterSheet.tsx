import { useContext } from "react";
import { useParams } from "react-router";
import { CharacterContext } from "../contexts/CharacterContext";
import { abilityLabels } from "../models/Abilities";
import { ALL_SKILLS } from "../models/Skills";
import {
	Div,
	DivRow,
	DivSmall,
	PageWrapper,
	SkillContainer,
	SkillsWrapper,
	Wrapper,
	WrapperRow,
} from "../components/styled/Wrappers";
import { getAbilityMod, getSavingThrowTotal, getSkillTotal } from "../utils/calculations";
import { Loader } from "../components/Loader";

export const CharacterSheet = () => {
	const { id } = useParams();
	const { characters } = useContext(CharacterContext);

	if (id) {
		const character = characters.find((c) => c._id === id);

		if (!character) {
			return <>No character found</>;
		}

		return (
			<PageWrapper>
				<h1>{character.name}</h1>
				{!character && <Loader />}
				<WrapperRow>
					<Div>{character.race}</Div>
					<Div>{character.class}</Div>
					<Div>Level {character.level}</Div>
				</WrapperRow>
				<WrapperRow>
					<Div>{character.armourClass} AC</Div>
					<Div>{character.hp} HP</Div>
					<Div>{character.speed}ft</Div>
					<Div>{character.proficiencyBonus} Prof</Div>
				</WrapperRow>
				<Wrapper>
					<h3>Abilities</h3>
					<DivRow>
						{Object.entries(character.abilities).map(([ability, score]) => {
							const abilityMod = getAbilityMod(score);
							return (
								<Div key={ability}>
									<h4>{abilityLabels[ability]}</h4>
									<span>{score}</span>
									<span>{abilityMod}</span>
								</Div>
							);
						})}
					</DivRow>
				</Wrapper>
				<Wrapper>
					<h3>Features</h3>
					{character.features.map((feat) => (
						<DivRow key={feat.name}>
							<h4>{feat.name}</h4>
							<Div>{feat.description}</Div>
						</DivRow>
					))}
				</Wrapper>
				<Wrapper>
					<h3>Spells</h3>
					{character.spells.map((spell) => (
						<DivRow key={spell.name}>
							<h4>{spell.name}</h4>
							<Div>{spell.description}</Div>
						</DivRow>
					))}
				</Wrapper>
				<Wrapper>
					<h3>Items</h3>
					<DivRow>
						{character.items.map((item) => (
							<span key={item}>{item}</span>
						))}
					</DivRow>
				</Wrapper>

				<Wrapper>
					<h3>Skills</h3>
					<SkillsWrapper>
						{ALL_SKILLS.map((skill) => {
							const skillTotal = getSkillTotal(
								character,
								skill.ability as keyof typeof character.abilities,
								skill.name
							);
							const proficient = character.proficientSkills.includes(skill.name);
							return (
								<SkillContainer key={skill.name}>
									<DivSmall>
										<span>{proficient ? "Yes" : "No"}</span>
										<span>{skill.name}</span>
										<span>{abilityLabels[skill.ability]}</span>
									</DivSmall>
									<span>{skillTotal}</span>
								</SkillContainer>
							);
						})}
					</SkillsWrapper>
				</Wrapper>
				<Wrapper>
					<h3>Saving Throws</h3>
					<h4>{character.proficientSavingThrows}</h4>
					<DivRow>
						{Object.entries(character.abilities).map(([ability]) => {
							const total = getSavingThrowTotal(
								character,
								ability as keyof typeof character.abilities
							);
							const proficient = character.proficientSavingThrows.includes(ability);

							return (
								<Div key={ability}>
									<h4>{abilityLabels[ability]}</h4>
									<span>{total}</span>
									<span>{proficient ? "Yes" : "No"}</span>
								</Div>
							);
						})}
					</DivRow>
				</Wrapper>
			</PageWrapper>
		);
	}

	return (
		<>
			<span>No id found</span>
		</>
	);
};
