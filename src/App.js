import { createContext, useState } from 'react';
import Header from './components/header';
import Tours from 'components/tours/Tours';
import clsx from 'clsx';

import './App.scss';
import { useTheme, ThemeComponent } from 'hooks/useThemeContext';
import { DARK, LIGHT } from 'constants';

const App = () => {
	const { theme } = useTheme();

	return (
		<ThemeComponent>
			<div
				className={clsx('app-container', {
					'dark-theme': theme === DARK,
					'light-theme': theme === LIGHT,
				})}>
				<Header theme={theme} />
				<Tours theme={theme} />
			</div>
		</ThemeComponent>
	);
};

export default App;
