import { useState } from "react";
import { InputText } from "./styled/Inputs";
import { Button, ListButton } from "./styled/Buttons";
import { FormSection } from "./styled/Wrappers";
import { FormLi, FormUl } from "./styled/Lists";

interface ObjectArrayInputProps {
	label: string;
	value: { name: string; description: string }[];
	addToArray: (value: { name: string; description: string }) => void;
	removeFromArray?: (index: number) => void;
}

export const ObjectArrayInput = ({
	label,
	value,
	addToArray,
	removeFromArray,
}: ObjectArrayInputProps) => {
	const [name, setName] = useState("");
	const [description, setDescription] = useState("");

	const handleAdd = () => {
		if (!name || !description) return;
		addToArray({ name, description });
		setName("");
		setDescription("");
	};

	return (
		<FormSection>
			<h2>{label}</h2>
			<InputText placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} />
			<InputText
				placeholder="Description"
				value={description}
				onChange={(e) => setDescription(e.target.value)}
			/>
			<Button type="button" onClick={handleAdd}>
				Add
			</Button>

			{value.length > 0 && (
				<FormUl>
					{value.map((v, i) => (
						<FormLi key={i}>
							<h4>{v.name}</h4>
							<p>{v.description}</p>
							{removeFromArray && (
								<ListButton type="button" onClick={() => removeFromArray(i)}>
									<span className="material-symbols-outlined">close</span>
								</ListButton>
							)}
						</FormLi>
					))}
				</FormUl>
			)}
		</FormSection>
	);
};
