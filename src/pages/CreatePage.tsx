import { useState, type ChangeEvent, type FormEvent } from "react";
import { Button } from "../components/styled/Buttons";
import { Input, Select } from "../components/styled/Inputs";
import type { ArrayFields } from "../components/ArrayInput";
import type { Character } from "../models/Character";
import { CreateForm, FormSection } from "../components/styled/Wrappers";
import { SelectArrayInput } from "../components/SelectArrayInput";
import { ALL_SKILLS } from "../models/Skills";
import { ALL_SAVING_THROWS } from "../models/Abilities";
import { ObjectArrayInput } from "../components/ObjectArrayInput";

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

	const handleAbilityChange = (e: ChangeEvent<HTMLSelectElement>) => {
		const { name, value } = e.target;
		setFormData((prev) => ({
			...prev,
			abilities: { ...prev.abilities, [name]: parseInt(value, 10) },
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
			<CreateForm onSubmit={createNewCharacter}>
				<FormSection>
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
						<Select
							name="level"
							value={formData.level}
							onChange={(e) =>
								setFormData((prev) => ({
									...prev,
									level: parseInt(e.target.value, 10),
								}))
							}
						>
							{Array.from({ length: 20 }, (_, i) => i + 1)
								.reverse()
								.map((num) => (
									<option key={num} value={num}>
										{num}
									</option>
								))}
						</Select>
					</label>

					<label>
						Proficiency Bonus
						<Select
							name="proficiencyBonus"
							value={formData.proficiencyBonus}
							onChange={(e) =>
								setFormData((prev) => ({
									...prev,
									proficiencyBonus: parseInt(e.target.value, 10),
								}))
							}
						>
							{Array.from({ length: 5 }, (_, i) => i + 2)
								.reverse()
								.map((num) => (
									<option key={num} value={num}>
										{num}
									</option>
								))}
						</Select>
					</label>
				</FormSection>
				<FormSection>
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
				</FormSection>
				<FormSection>
					<h2>Abilities</h2>
					{Object.keys(formData.abilities).map((ability) => (
						<label key={ability}>
							{ability.charAt(0).toUpperCase() + ability.slice(1)}
							<Select
								name={ability}
								value={
									formData.abilities[ability as keyof typeof formData.abilities]
								}
								onChange={handleAbilityChange}
							>
								{Array.from({ length: 20 }, (_, i) => i + 1)
									.reverse()
									.map((num) => (
										<option key={num} value={num}>
											{num}
										</option>
									))}
							</Select>
						</label>
					))}
				</FormSection>
				<FormSection>
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
							<option value="constitution">Constitution</option>
							<option value="intelligence">Intelligence</option>
							<option value="wisdom">Wisdom</option>
							<option value="charisma">Charisma</option>
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
							<option value="constitution">Constitution</option>
							<option value="intelligence">Intelligence</option>
							<option value="wisdom">Wisdom</option>
							<option value="charisma">Charisma</option>
						</Select>
					</label>
				</FormSection>

				<SelectArrayInput
					label="Proficient Skills"
					value={formData.proficientSkills}
					options={ALL_SKILLS.map((s) => ({ name: s.name, label: s.name }))}
					addToArray={(val) => addToArray("proficientSkills", val)}
					removeFromArray={(i) => removeFromArray("proficientSkills", i)}
				/>

				<SelectArrayInput
					label="Proficient Saving Throws"
					value={formData.proficientSavingThrows}
					options={ALL_SAVING_THROWS}
					addToArray={(val) => addToArray("proficientSavingThrows", val)}
					removeFromArray={(i) => removeFromArray("proficientSavingThrows", i)}
				/>

				<ObjectArrayInput
					label="Items"
					value={formData.items}
					addToArray={(val) => addToArray("items", val)}
					removeFromArray={(i) => removeFromArray("items", i)}
				/>

				<ObjectArrayInput
					label="Features"
					value={formData.features}
					addToArray={(val) => addToArray("features", val)}
					removeFromArray={(i) => removeFromArray("features", i)}
				/>

				<ObjectArrayInput
					label="Spells"
					value={formData.spells}
					addToArray={(val) => addToArray("spells", val)}
					removeFromArray={(i) => removeFromArray("spells", i)}
				/>

				<Button type="submit">Create</Button>
			</CreateForm>
		</>
	);
};
