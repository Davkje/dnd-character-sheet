import { deleteCharacter } from "../services/CharacterService";
import { Button } from "./styled/Buttons";
import { Div, DivRow, Modal, ModalOverlay } from "./styled/Wrappers";
import { abilityLabels } from "../models/Abilities";
import type { Character } from "../models/Character";

type Props = {
	onClose: () => void;
	character: Character;
	selectedPrimaryAbility: "spell" | "weapon";
	onPrimaryChange?: (choice: "spell" | "weapon") => void;
	onDeleted?: () => void;
};

export const CharacterSettings = ({
	onClose,
	character,
	onDeleted,
	onPrimaryChange,
	selectedPrimaryAbility,
}: Props) => {
	const handleDelete = async () => {
		if (!confirm("Är du säker på att du vill radera din karaktär?")) return;

		try {
			await deleteCharacter(character._id!);
			alert("Karaktär raderad!");
			onClose();
			onDeleted?.();
		} catch (error) {
			console.error(error);
			alert("Misslyckades att radera karaktär!");
		}
	};

	return (
		<ModalOverlay onClick={onClose}>
			<Modal onClick={(e) => e.stopPropagation()}>
				<h3>Settings</h3>

				<Div>
					<h4>Primary Ability</h4>
					<DivRow>
						<Button
							onClick={() => onPrimaryChange?.("spell")}
							disabled={selectedPrimaryAbility === "spell"} // ← jämför med prop
						>
							{abilityLabels[character.primarySpellAbility]} (Spell)
						</Button>
						<Button
							onClick={() => onPrimaryChange?.("weapon")}
							disabled={selectedPrimaryAbility === "weapon"} // ← jämför med prop
						>
							{abilityLabels[character.primaryWeaponAbility]} (Weapon)
						</Button>
					</DivRow>
				</Div>

				<Button onClick={handleDelete}>Delete</Button>
				<Button onClick={onClose}>Close</Button>
			</Modal>
		</ModalOverlay>
	);
};
