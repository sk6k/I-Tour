import { ReactComponent as LogoIcon } from 'assets/image/logo.svg';
import './Header.scss';

const Header = () => {
	return (
		<header>
			<LogoIcon id='logo' />
			<button>Theme:dark</button>
		</header>
	);
};

export default Header;
