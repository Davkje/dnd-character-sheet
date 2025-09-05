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

export const getPrimaryAttackBonus = (character: Character): number => {
	const abilityMod = getAbilityMod(
		character.abilities[character.primaryAbility as keyof typeof character.abilities]
	);
	return abilityMod + character.proficiencyBonus;
};

export const getPrimarySaveDC = (character: Character): number => {
	const abilityMod = getAbilityMod(
		character.abilities[character.primaryAbility as keyof typeof character.abilities]
	);
	return abilityMod + character.proficiencyBonus + 8;
};

export const formatMod = (mod: number) => (mod >= 0 ? `+${mod}` : `${mod}`);