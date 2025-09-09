import { useState, type ChangeEvent, type FormEvent } from "react";
import { Button } from "../components/styled/Buttons";
import { Input, Select } from "../components/styled/Inputs";
import { ArrayInput, type ArrayFields } from "../components/ArrayInput";
import type { Character, Item, Feature, Spell } from "../models/Character";

export const CreatePage = () => {
	const [formData, setFormData] = useState<Character>({
		name: "",
		class: "",
		race: "",
		level: 1,
		hp: 0,
		hitDie: "",
		primaryWeaponAbility: "",
		primaryAbility: "",
		primarySpellAbility: "",
		speed: 0,
		armourClass: 0,
		abilities: {
			strength: 10,
			dexterity: 10,
			constitution: 10,
			intelligence: 10,
			wisdom: 10,
			charisma: 10,
		},
		proficiencyBonus: 2,
		proficientSkills: [],
		proficientSavingThrows: [],
		items: [],
		features: [],
		spells: [],
	});

	const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
		const { name, value } = e.target;
		setFormData((prev) => ({ ...prev, [name]: value }));
	};

	const handleAbilityChange = (e: ChangeEvent<HTMLInputElement>) => {
		const { name, value } = e.target;
		setFormData((prev) => ({
			...prev,
			abilities: { ...prev.abilities, [name]: Number(value) },
		}));
	};

	const addToArray = <T,>(field: ArrayFields, value: T) => {
		if (!value) return;
		setFormData((prev) => ({
			...prev,
			[field]: [...((prev[field] as T[]) ?? []), value],
		}));
	};

	const removeFromArray = <T,>(field: ArrayFields, index: number) => {
		setFormData((prev) => ({
			...prev,
			[field]: [
				...((prev[field] as T[]) ?? []).slice(0, index),
				...((prev[field] as T[]) ?? []).slice(index + 1),
			],
		}));
	};

	const createNewCharacter = async (e: FormEvent) => {
		e.preventDefault();

		try {
			const res = await fetch("https://dnd-character-api.onrender.com/characters", {
				method: "POST",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify({
					...formData,
					hp: Number(formData.hp),
					speed: Number(formData.speed),
					armourClass: Number(formData.armourClass),
					level: Number(formData.level),
					proficiencyBonus: Number(formData.proficiencyBonus),
				}),
			});

			if (!res.ok) throw new Error("Failed to create character");

			const data = await res.json();
			console.log("Character Created:", data);
			alert(`Character ${data.name} created!`);
		} catch (error) {
			console.error(error);
			alert("Error creating character");
		}
	};

	return (
		<>
			<h1>Create New Character</h1>
			<h3>Fill in this form to make a new character</h3>
			<form onSubmit={createNewCharacter}>
				<h2>Basic Info</h2>
				<label>
					Name
					<Input
						name="name"
						placeholder="Name"
						value={formData.name}
						onChange={handleChange}
						required
					/>
				</label>
				<label>
					Class
					<Input
						name="class"
						placeholder="Class"
						value={formData.class}
						onChange={handleChange}
						required
					/>
				</label>
				<label>
					Race
					<Input
						name="race"
						placeholder="Race"
						value={formData.race}
						onChange={handleChange}
						required
					/>
				</label>
				<label>
					Level
					<Input
						name="level"
						type="number"
						placeholder="Level"
						value={formData.level}
						onChange={handleChange}
						required
						min="1"
						max="20"
					/>
				</label>

				<h2>Combat Stats</h2>
				<label>
					HP
					<Input
						name="hp"
						type="number"
						placeholder="HP"
						value={formData.hp}
						onChange={handleChange}
						required
						min="1"
					/>
				</label>
				<label>
					Armour Class
					<Input
						name="armourClass"
						type="number"
						placeholder="Armour Class"
						value={formData.armourClass}
						onChange={handleChange}
						required
						min="1"
					/>
				</label>
				<label>
					Speed
					<Input
						name="speed"
						type="number"
						placeholder="Speed"
						value={formData.speed}
						onChange={handleChange}
						required
						min="1"
					/>
				</label>
				<label>
					Hit Die
					<Input
						name="hitDie"
						placeholder="Hit Die (e.g. d6)"
						value={formData.hitDie}
						onChange={handleChange}
					/>
				</label>

				<h2>Abilities</h2>
				{Object.keys(formData.abilities).map((ability) => (
					<label key={ability}>
						{ability.charAt(0).toUpperCase() + ability.slice(1)}
						<Input
							name={ability}
							type="number"
							value={formData.abilities[ability as keyof typeof formData.abilities]}
							onChange={handleAbilityChange}
							min="1"
							max="30"
						/>
					</label>
				))}

				<h2>Primary Abilities</h2>
				<label>
					Melee
					<Select
						name="primaryWeaponAbility"
						value={formData.primaryWeaponAbility}
						onChange={handleChange}
					>
						<option value=""></option>
						<option value="strength">Strength</option>
						<option value="dexterity">Dexterity</option>
						<option value="<constitution">Constitution</option>
						<option value="<intelligence">Intelligence</option>
						<option value="<wisdom">Wisdom</option>
						<option value="<charisma">Charisma</option>
					</Select>
				</label>
				<label>
					Spell
					<Select
						name="primarySpellAbility"
						value={formData.primarySpellAbility}
						onChange={handleChange}
					>
						<option value=""></option>
						<option value="strength">Strength</option>
						<option value="dexterity">Dexterity</option>
						<option value="<constitution">Constitution</option>
						<option value="<intelligence">Intelligence</option>
						<option value="<wisdom">Wisdom</option>
						<option value="<charisma">Charisma</option>
					</Select>
				</label>

				<h2>Proficiency</h2>
				<label>
					Proficiency Bonus
					<Input
						name="proficiencyBonus"
						type="number"
						placeholder="Proficiency Bonus"
						value={formData.proficiencyBonus}
						onChange={handleChange}
						min="2"
						max="6"
					/>
				</label>

				<h3>Arrays</h3>
				<ArrayInput<string>
					label="Proficient Skills"
					field="proficientSkills"
					value={formData.proficientSkills}
					addToArray={addToArray}
					removeFromArray={removeFromArray}
				/>
				<ArrayInput<string>
					label="Proficient Saving Throws"
					field="proficientSavingThrows"
					addToArray={addToArray}
					value={formData.proficientSavingThrows}
					removeFromArray={removeFromArray}
				/>
				<ArrayInput<Item>
					label="Items"
					field="items"
					addToArray={addToArray}
					isObject
					value={formData.items}
					removeFromArray={removeFromArray}
				/>
				<ArrayInput<Feature>
					label="Features"
					field="features"
					addToArray={addToArray}
					isObject
					value={formData.features}
					removeFromArray={removeFromArray}
				/>
				<ArrayInput<Spell>
					label="Spells"
					field="spells"
					addToArray={addToArray}
					isObject
					value={formData.spells}
					removeFromArray={removeFromArray}
				/>

				<Button type="submit">Create</Button>
			</form>
		</>
	);
};
