import type { Character } from "../models/Character";
import {
	formatMod,
	getAbilityMod,
	getSavingThrowTotal,
	getSkillTotal,
} from "../utils/calculations";
import { Button } from "./styled/Buttons";
import {
	Div,
	DivRow,
	DivSmall,
	Modal,
	ModalOverlay,
	SkillContainer,
	SkillsWrapper,
} from "./styled/Wrappers";

import type { AbilityScores } from "../models/Character";
import { ALL_SKILLS } from "../models/Skills";
import { Checked, UnChecked } from "./styled/Icons";
import { abilityLabels } from "../models/Abilities";

type Props = {
	ability: keyof AbilityScores;
	character: Character;
	onClose: () => void;
};

export const AbilityModal = ({ ability, character, onClose }: Props) => {
	const score = character.abilities[ability];
	const modifier = getAbilityMod(score);

	// Saving Throws
	const savingThrow = getSavingThrowTotal(character, ability as keyof typeof character.abilities);
	const savingThrowProficient = character.proficientSavingThrows.includes(ability);

	// Related Skills
	const relatedSkills = ALL_SKILLS.filter((s) => s.ability === ability).map((skill) => {
		const total = getSkillTotal(
			character,
			ability as keyof typeof character.abilities,
			skill.name
		);
		const proficient = character.proficientSkills.includes(skill.name);
		return { ...skill, total, proficient };
	});

	return (
		<ModalOverlay onClick={onClose}>
			<Modal onClick={(e) => e.stopPropagation()}>
				<Div>
					<h2>{ability}</h2>
					<DivRow>
						<p>Score: {score}</p>
						<p>Mod: {formatMod(modifier)}</p>
					</DivRow>
				</Div>
				<Div>
					<h4>Saving Throw</h4>
					<DivRow>
						<span>{formatMod(savingThrow)}</span>
						{savingThrowProficient ? <Checked /> : <UnChecked />}
					</DivRow>
				</Div>

				{relatedSkills.length > 0 && (
					<Div>
						<h4>{abilityLabels[ability]} Skills</h4>
						<SkillsWrapper>
							{relatedSkills.map((skill) => (
								<SkillContainer key={skill.name}>
									<DivSmall>
										{skill.proficient ? <Checked /> : <UnChecked />}
										<span>{skill.name}</span>
									</DivSmall>
									<span>{formatMod(skill.total)}</span>
								</SkillContainer>
							))}
						</SkillsWrapper>
					</Div>
				)}
				<Button onClick={onClose}>Close</Button>
			</Modal>
		</ModalOverlay>
	);
};
