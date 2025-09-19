import { useState } from "react";
import { ThemeButton } from "./styled/Buttons";

export const ThemeBtn = () => {
	const [dark, setDark] = useState(false);

	const toggleTheme = () => {
		if (dark) {
			document.body.classList.remove("dark");
			setDark(false);
		} else {
			document.body.classList.add("dark");
			setDark(true);
		}
	};

	return (
		<>
			<ThemeButton className="theme-btn" onClick={toggleTheme}>
				{dark ? (
					<span className="material-symbols-outlined">brightness_5</span>
				) : (
					<span className="material-symbols-outlined">dark_mode</span>
				)}
			</ThemeButton>
		</>
	);
};
