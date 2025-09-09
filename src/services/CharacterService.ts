import type { Character } from "../models/Character";

const API_URL = "https://dnd-character-api.onrender.com/characters";

export const getCharacters = async () => {
	const response = await fetch(`${API_URL}`);
	const characters: Character[] = await response.json();

	return characters;
};

export const deleteCharacter = async (id: string) => {
	const response = await fetch(`${API_URL}/${id}`, {
		method: "DELETE",
	});

	if (!response.ok) {
		const errorData = await response.json().catch(() => ({}));
		throw new Error(errorData.error || "Failed to delete Character");
	}
};
