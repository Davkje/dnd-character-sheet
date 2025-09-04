import type { abilityLabels } from "./Abilities";

export type Skill = {
	name: string;
	ability: keyof typeof abilityLabels;
};

export const ALL_SKILLS: Skill[] = [
	{ name: "acrobatics", ability: "dexterity" },
	{ name: "animal Handling", ability: "wisdom" },
	{ name: "arcana", ability: "intelligence" },
	{ name: "athletics", ability: "strength" },
	{ name: "deception", ability: "charisma" },
	{ name: "history", ability: "intelligence" },
	{ name: "insight", ability: "wisdom" },
	{ name: "intimidation", ability: "charisma" },
	{ name: "investigation", ability: "intelligence" },
	{ name: "medicine", ability: "wisdom" },
	{ name: "nature", ability: "intelligence" },
	{ name: "perception", ability: "wisdom" },
	{ name: "performance", ability: "charisma" },
	{ name: "persuasion", ability: "charisma" },
	{ name: "religion", ability: "intelligence" },
	{ name: "sleight of Hand", ability: "dexterity" },
	{ name: "stealth", ability: "dexterity" },
	{ name: "survival", ability: "wisdom" },
];
