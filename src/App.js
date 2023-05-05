import { ThemeComponent, useTheme } from 'hooks/useThemeContext';
import { NavLink, Route, Routes } from 'react-router-dom';

import Header from './components/header';
import Tours from 'components/tours/Tours';
import ToursDetalis from 'components/toursDetalis/TourDetalis';
import clsx from 'clsx';

import './App.scss';
import { DARK, LIGHT } from 'constants';
import Support from 'components/support/Support';
import ContactUs from 'components/contact-us/ContactUs';

const App = () => {
	const { theme } = useTheme();

	const routesName = [
		{ path: '/tours', label: 'Tours' },
		{ path: '/contact-us', label: 'Contact Us' },
		{ path: '/support', label: 'Support' },
	];

	return (
		<ThemeComponent>
			<div
				className={clsx('app-container', {
					'dark-theme': theme === DARK,
					'light-theme': theme === LIGHT,
				})}>
				<Header />

				<nav>
					{routesName.map((el, index) => (
						<NavLink to={el.path} key={index}>
							{el.label}
						</NavLink>
					))}
				</nav>

				<Routes>
					<Route path='/tours' element={<Tours />}>
						<Route path=':tourId' element={<ToursDetalis />} />
					</Route>

					{/* <Route path='/tours/:tourId' element={<ToursDetalis />} /> */}
					<Route path='/support' element={<Support />} />
					<Route path='/contact-us' element={<ContactUs />} />
					<Route path='*' element={<div>Not found</div>}></Route>
				</Routes>
			</div>
		</ThemeComponent>
	);
};

export default App;
