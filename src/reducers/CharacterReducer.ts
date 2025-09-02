import type { Character } from "../models/Character";

export type CharacterAction = {
	type: string;
	payload: string;
};

export const CharacterReducer = (characters: Character[], action: CharacterAction) => {
	if (action.type === "LOADED") {
    return JSON.parse(action.payload);
	}
  // if (action.type === "SELECTED") {
    
	// }
  return characters;
};
