import { Component } from 'react';
import Header from './components/header';
import Tours from './components/tours';
import './App.scss';
import clsx from 'clsx';

import { DARK, LIGHT } from 'constants';
import ToursHook from 'components/tours/ToursHook';

class App extends Component {
	state = {
		theme: DARK,
	};

	handleToggleTheme = () => {
		this.setState((state) => ({ theme: state.theme === DARK ? LIGHT : DARK }));
	};

	render() {
		const { theme } = this.state;
		return (
			<div
				className={clsx('app-container', {
					'dark-theme': theme === DARK,
					'light-theme': theme === LIGHT,
				})}>
				<Header theme={theme} onToggle={this.handleToggleTheme} />
				{/* <Tours theme={theme} /> */}
				<ToursHook theme={theme} />
			</div>
		);
	}
}

export default App;
