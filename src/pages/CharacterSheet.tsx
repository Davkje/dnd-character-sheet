import { useContext } from "react";
import { useParams } from "react-router";
import { CharacterContext } from "../contexts/CharacterContext";
import { abilityLabels } from "../models/Abilities";
import { ALL_SKILLS } from "../models/Skills";
import {
	Div,
	DivRow,
	DivSmall,
	ImageWrapper,
	PageWrapper,
	PageWrapperGrid,
	SkillContainer,
	SkillsWrapper,
	Wrapper,
} from "../components/styled/Wrappers";
import { getAbilityMod, getSavingThrowTotal, getSkillTotal } from "../utils/calculations";
import { Loader } from "../components/Loader";
import { Checked, UnChecked } from "../components/styled/Icons";

export const CharacterSheet = () => {
	const { id } = useParams();
	const { characters } = useContext(CharacterContext);

	const formatMod = (mod: number) => (mod >= 0 ? `+${mod}` : `${mod}`);

	if (id) {
		const character = characters.find((c) => c._id === id);

		if (!character) {
			return (
				<>
					<PageWrapper>{!character && <Loader />}</PageWrapper>
				</>
			);
		}

		return (
			<PageWrapperGrid>
				<h1>{character.name}</h1>
				<Wrapper>
					<Div>{character.race}</Div>
					<Div>{character.class}</Div>
					<Div>Level {character.level}</Div>
				</Wrapper>
				<ImageWrapper />
				<Wrapper>
					<h3>Hp</h3>
					<Div>{character.hp}</Div>
					<Div>Hit Dice</Div>
				</Wrapper>
				<Wrapper>
					<h3>AC</h3>
					<Div>{character.armourClass}</Div>
				</Wrapper>
				<Wrapper>
					<h3>Initiative</h3>
					<DivRow>
						<span>{formatMod(getAbilityMod(character.abilities.dexterity))}</span>
					</DivRow>
				</Wrapper>
				<Wrapper>
					<h3>Speed</h3>
					<Div>{character.speed}ft</Div>
				</Wrapper>
				<Wrapper>
					<h3>Prodiciency</h3>
					<Div>+ {character.proficiencyBonus}</Div>
				</Wrapper>
				<Wrapper>
					<h3>Spell Atk</h3>
					<Div>None</Div>
				</Wrapper>
				<Wrapper>
					<h3>SPELL DC</h3>
					<Div>None</Div>
				</Wrapper>
				{Object.entries(character.abilities).map(([ability, score]) => {
					const abilityMod = getAbilityMod(score);
					return (
						<Wrapper key={ability}>
							<h4>{abilityLabels[ability]}</h4>
							<span>{score}</span>
							<span>{formatMod(abilityMod)}</span>
						</Wrapper>
					);
				})}
				<Wrapper className="three-column">
					<h3>Abilities</h3>
					<DivRow>
						{Object.entries(character.abilities).map(([ability, score]) => {
							const abilityMod = getAbilityMod(score);
							return (
								<Div key={ability}>
									<h4>{abilityLabels[ability]}</h4>
									<span>{score}</span>
									<span>{formatMod(abilityMod)}</span>
								</Div>
							);
						})}
					</DivRow>
				</Wrapper>
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
							<span key={item}>{item}</span>
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
				<Wrapper className="three-column">
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
									<span>{formatMod(total)}</span>
									{proficient ? <Checked /> : <UnChecked />}
								</Div>
							);
						})}
					</DivRow>
				</Wrapper>
			</PageWrapperGrid>
		);
	}

	return (
		<>
			<span>No id found</span>
		</>
	);
};
