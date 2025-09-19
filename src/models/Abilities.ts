export const abilityLabels: Record<string, string> = {
	strength: "STR",
	dexterity: "DEX",
	constitution: "CON",
	intelligence: "INT",
	wisdom: "WIS",
	charisma: "CHA",
};

export const ALL_SAVING_THROWS = Object.keys(abilityLabels).map((key) => ({
  name: key,   // t.ex. "strength"
  label: key,  // samma, bara fulla namnet
}));