import type { abilityLabels } from "./Abilities";

export type Skill = {
	name: string;
	ability: keyof typeof abilityLabels;
};

export const ALL_SKILLS: Skill[] = [
	{ name: "Acrobatics", ability: "dexterity" },
	{ name: "Animal Handling", ability: "wisdom" },
	{ name: "Arcana", ability: "intelligence" },
	{ name: "Athletics", ability: "strength" },
	{ name: "Deception", ability: "charisma" },
	{ name: "History", ability: "intelligence" },
	{ name: "Insight", ability: "wisdom" },
	{ name: "Intimidation", ability: "charisma" },
	{ name: "Investigation", ability: "intelligence" },
	{ name: "Medicine", ability: "wisdom" },
	{ name: "Nature", ability: "intelligence" },
	{ name: "Perception", ability: "wisdom" },
	{ name: "Performance", ability: "charisma" },
	{ name: "Persuasion", ability: "charisma" },
	{ name: "Religion", ability: "intelligence" },
	{ name: "Sleight of Hand", ability: "dexterity" },
	{ name: "Stealth", ability: "dexterity" },
	{ name: "Survival", ability: "wisdom" },
];
