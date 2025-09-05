import { useContext, useState } from "react";
import { useParams } from "react-router";
import { CharacterContext } from "../contexts/CharacterContext";
import { abilityLabels } from "../models/Abilities";
import { ALL_SKILLS } from "../models/Skills";
import {
	Div,
	DivRow,
	DivSmall,
	ImageWrapper,
	PageWrapperGrid,
	SkillContainer,
	SkillsWrapper,
	Wrapper,
} from "../components/styled/Wrappers";
import {
	formatMod,
	getAbilityMod,
	getPrimaryAttackBonus,
	getPrimarySaveDC,
	getSkillTotal,
} from "../utils/calculations";
import { Loader } from "../components/Loader";
import { Checked, UnChecked } from "../components/styled/Icons";
import { AbilityButton } from "../components/styled/Buttons";
import { AbilityModal } from "../components/AbilityModal";
import type { AbilityScores } from "../models/Character";

export const CharacterSheet = () => {
	const { id } = useParams();
	const { characters } = useContext(CharacterContext);
	const [selectedAbility, setSelectedAbility] = useState<keyof AbilityScores | null>(null);

	if (id) {
		const character = characters.find((c) => c._id === id);

		if (!character) {
			return (
				<>
					<Loader />
				</>
			);
		}

		return (
			<>
				<h1>{character.name}</h1>
				<PageWrapperGrid>
					<Wrapper>
						<Div>{character.race}</Div>
						<Div>{character.class}</Div>
						<Div>Level {character.level}</Div>
					</Wrapper>
					<ImageWrapper />
					<Wrapper>
						<h3>Hp</h3>
						<Div>{character.hp}</Div>
						<Div>
							{character.proficiencyBonus}
							{character.hitDie}
						</Div>
					</Wrapper>
					<Wrapper>
						<h3>AC</h3>
						<Div>{character.armourClass}</Div>
					</Wrapper>
					<Wrapper>
						<h3>Init</h3>
						<DivRow>
							<span>{formatMod(getAbilityMod(character.abilities.dexterity))}</span>
						</DivRow>
					</Wrapper>
					<Wrapper>
						<h3>Speed</h3>
						<Div>{character.speed}ft</Div>
					</Wrapper>
					<Wrapper>
						<h3>Prof Bonus</h3>
						<Div>{formatMod(character.proficiencyBonus)}</Div>
					</Wrapper>
					<Wrapper>
						<h3>Primary Atk</h3>
						<Div>{formatMod(getPrimaryAttackBonus(character))}</Div>
					</Wrapper>
					<Wrapper>
						<h3>Primary DC</h3>
						<Div>{getPrimarySaveDC(character)}</Div>
					</Wrapper>

					{/* ABILITY BUTTONS */}

					{Object.entries(character.abilities).map(([ability, score]) => {
						const abilityMod = getAbilityMod(score);
						return (
							<AbilityButton
								key={ability}
								onClick={() => setSelectedAbility(ability as keyof AbilityScores)}
							>
								<h4>{abilityLabels[ability]}</h4>
								<span>{formatMod(abilityMod)}</span>
							</AbilityButton>
						);
					})}
					<Wrapper className="three-column">
						<h3>Features</h3>
						{character.features.map((feat) => (
							<DivRow key={feat.name}>
								<h4>{feat.name}</h4>
								<Div>{feat.description}</Div>
							</DivRow>
						))}
					</Wrapper>
					<Wrapper className="three-column">
						<h3>Spells</h3>
						{character.spells.map((spell) => (
							<DivRow key={spell.name}>
								<h4>{spell.name}</h4>
								<Div>{spell.description}</Div>
							</DivRow>
						))}
					</Wrapper>
					<Wrapper className="three-column">
						<h3>Items</h3>
						<DivRow>
							{character.items.map((item) => (
								<span key={item}>{item}, </span>
							))}
						</DivRow>
					</Wrapper>
					<Wrapper className="three-column">
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
											{proficient ? <Checked /> : <UnChecked />}
											<span>{skill.name}</span>
											<span>{abilityLabels[skill.ability]}</span>
										</DivSmall>
										<span>{formatMod(skillTotal)}</span>
									</SkillContainer>
								);
							})}
						</SkillsWrapper>
					</Wrapper>
				</PageWrapperGrid>

				{/* ABILITY MODAL */}

				{selectedAbility && (
					<AbilityModal
						ability={selectedAbility}
						character={character}
						onClose={() => setSelectedAbility(null)}
					/>
				)}
			</>
		);
	}

	return (
		<>
			<span>No id found</span>
		</>
	);
};
