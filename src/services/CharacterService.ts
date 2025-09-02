import type { Character } from "../models/Character";

export const getCharacters = async () => {
	const response = await fetch("https://dnd-character-api.onrender.com/characters");
	const characters: Character[] = await response.json();

	return characters;
};
