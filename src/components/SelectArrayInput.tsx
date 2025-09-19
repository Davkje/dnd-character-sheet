import { useState } from "react";
import { Button, ListButton } from "./styled/Buttons";
import { FormSection } from "./styled/Wrappers";
import { Select } from "./styled/Inputs";
import { FormLi, FormUl } from "./styled/Lists";

interface Option {
  name: string;
  label: string;
}

interface SelectArrayInputProps {
  label: string;
  value: string[];
  options: Option[];
  addToArray: (value: string) => void;
  removeFromArray?: (index: number) => void;
}

export const SelectArrayInput = ({
  label,
  value,
  options,
  addToArray,
  removeFromArray,
}: SelectArrayInputProps) => {
  const [selected, setSelected] = useState("");

  const handleAdd = () => {
    if (!selected) return;
    if (value.includes(selected)) return; // undvik dubbletter
    addToArray(selected);
    setSelected("");
  };

  return (
    <FormSection>
      <h2>{label}</h2>
      <Select value={selected} onChange={(e) => setSelected(e.target.value)}>
        <option value=""></option>
        {options.map((opt) => (
          <option key={opt.name} value={opt.name}>
            {opt.label}
          </option>
        ))}
      </Select>
      <Button type="button" onClick={handleAdd}>
        Add
      </Button>

      {value.length > 0 && (
        <FormUl>
          {value.map((v, i) => (
            <FormLi key={i}>
              <p className="cap">{v}</p>
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
