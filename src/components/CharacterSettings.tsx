import { Button } from "./styled/Buttons";
import { Modal, ModalOverlay } from "./styled/Wrappers";

type Props = {
	onClose: () => void;
};

export const CharacterSettings = ({ onClose }: Props) => {
	return (
		<>
			<ModalOverlay onClick={onClose}>
				<Modal onClick={(e) => e.stopPropagation()}>
					<h3>Settings</h3>
					<ul>
						<li>1</li>
						<li>2</li>
						<li>3</li>
					</ul>
				<Button onClick={onClose}>Close</Button>
				</Modal>
			</ModalOverlay>
		</>
	);
};
