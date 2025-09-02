import { createContext, type Dispatch } from "react";
import type { Character } from "../models/Character";
import type { CharacterAction } from "../reducers/CharacterReducer";

type CharacterContextType = {
	characters: Character[];
	dispatch: Dispatch<CharacterAction>;
};

export const CharacterContext = createContext<CharacterContextType>({
	characters: [],
	dispatch: () => {},
});
