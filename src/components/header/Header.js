import { ReactComponent as LogoIcon } from 'assets/image/logo.svg';
import './Header.scss';

const Header = (props) => {
	console.log('render', props);
	return (
		<header>
			<LogoIcon id='logo' />
			<button onClick={props.onToggle}>Theme:{props.theme}</button>
		</header>
	);
};

export default Header;
