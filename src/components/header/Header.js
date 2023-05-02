import { ReactComponent as LogoIcon } from 'assets/image/logo.svg';
import { useTheme } from 'hooks/useThemeContext';
import './Header.scss';

const Header = () => {
	const { onToggle, theme } = useTheme();

	return (
		<header>
			<LogoIcon id='logo' />
			<button onClick={onToggle}>Theme:{theme}</button>
		</header>
	);
};

export default Header;
