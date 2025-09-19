import { useState } from "react";
import { InputText } from "./styled/Inputs";
import { Button, ListButton } from "./styled/Buttons";
import { FormSection } from "./styled/Wrappers";
import { FormLi, FormUl } from "./styled/Lists";

// Union av alla array-fält i Character
export type ArrayFields =
	| "proficientSkills"
	| "proficientSavingThrows"
	| "items"
	| "features"
	| "spells";

interface ArrayInputProps<T> {
	label: string;
	field: ArrayFields;
	value: T[];
	addToArray: (field: ArrayFields, value: T) => void;
	removeFromArray?: (field: ArrayFields, index: number) => void;
	isObject?: boolean;
}

export const ArrayInput = <T,>({
	label,
	field,
	value,
	addToArray,
	removeFromArray,
	isObject = false,
}: ArrayInputProps<T>) => {
	const [input, setInput] = useState("");
	const [name, setName] = useState("");
	const [description, setDescription] = useState("");

	const handleAdd = () => {
		if (isObject) {
			if (!name || !description) return;
			addToArray(field, { name, description } as T);
			setName("");
			setDescription("");
		} else {
			if (!input) return;
			addToArray(field, input as T);
			setInput("");
		}
	};

	return (
		<FormSection>
			<h2>{label}</h2>
			{isObject ? (
				<>
					<InputText
						placeholder="Name"
						value={name}
						onChange={(e) => setName(e.target.value)}
					/>
					<InputText
						placeholder="Description"
						value={description}
						onChange={(e) => setDescription(e.target.value)}
					/>
				</>
			) : (
				<InputText
					placeholder={label}
					value={input}
					onChange={(e) => setInput(e.target.value)}
				/>
			)}
			<Button type="button" onClick={handleAdd}>
				Add
			</Button>

			{/* Lista redan tillagda element */}

			{value.length > 0 && (
				<FormUl>
					{value.map((v, i) => (
						<FormLi key={i}>
							{isObject
								? `${(v as { name: string; description: string }).name}: ${
										(v as { name: string; description: string }).description
								  }`
								: (v as React.ReactNode)}
							{removeFromArray && (
								<ListButton type="button" onClick={() => removeFromArray(field, i)}>
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
