import { createContext, useContext, useState } from 'react';
import { DARK, LIGHT } from 'constants';

const ThemeContext = createContext(DARK);

const useTheme = () => useContext(ThemeContext);

const ThemeComponent = ({ children }) => {
	const [theme, setTheme] = useState(DARK);

	const onToggle = () => {
		setTheme((prevTheme) => (prevTheme === DARK ? LIGHT : DARK));
	};

	return <ThemeContext.Provider value={{ theme, onToggle }}>{children}</ThemeContext.Provider>;
};

export { useTheme, ThemeComponent };
