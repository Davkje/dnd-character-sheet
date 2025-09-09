import { useState } from "react";
import { InputText } from "./styled/Inputs";
import { Button } from "./styled/Buttons";

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
		<div>
			<h4>{label}</h4>
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
			<ul>
				{value.map((v, i) => (
					<li key={i}>
						{isObject
							? `${(v as { name: string; description: string }).name}: ${
									(v as { name: string; description: string }).description
							  }`
							: (v as React.ReactNode)}
						{removeFromArray && (
							<Button type="button" onClick={() => removeFromArray(field, i)}>
								×
							</Button>
						)}
					</li>
				))}
			</ul>
		</div>
	);
};
