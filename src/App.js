import Header from './components/header';
import Tours from './components/tours';
import './App.scss';

const App = () => {
	return (
		<div className='app-container'>
			<Header />
			<Tours />
		</div>
	);
};

export default App;
