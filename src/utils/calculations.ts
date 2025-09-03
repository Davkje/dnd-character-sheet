import type { AbilityScores, Character } from "../models/Character";

export const getAbilityMod = (score: number): number => Math.floor((score - 10) / 2);

export const getSkillTotal = (
	character: Character,
	ability: keyof AbilityScores,
	skillName: string
): number => {
	const abilityMod = getAbilityMod(character.abilities[ability]);
	const proficient = character.proficientSkills.includes(skillName);
	return abilityMod + (proficient ? character.proficiencyBonus : 0);
};

export const getSavingThrowTotal = (character: Character, ability: keyof AbilityScores): number => {
	const abilityMod = getAbilityMod(character.abilities[ability]);
	const proficient = character.proficientSavingThrows.includes(ability);
	return abilityMod + (proficient ? character.proficiencyBonus : 0);
};
