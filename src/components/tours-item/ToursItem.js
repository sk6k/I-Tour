import PropTypes from 'prop-types';
import './Tours-item.scss';
import clsx from 'clsx';
import { DARK, LIGHT } from 'constants';
import { useTheme } from 'hooks/useThemeContext';
import { Link, Outlet, useParams } from 'react-router-dom';

const ToursItem = ({ id, name, price, continent, description, onDelete }) => {
	const { theme } = useTheme();

	const { tourId } = useParams();

	return (
		<li
			className={clsx('tours-item', {
				'dark-theme': theme === LIGHT,
				'light-theme': theme === DARK,
			})}>
			<p>Name {name}</p>
			<p>Price {price}</p>
			<p>Continent {continent}</p>
			{description && <p>Description: {description}</p>}
			<button
				onClick={() => {
					onDelete(id);
				}}>
				Delete
			</button>
			<Link to={`/tours/${id}`}>More</Link>

			{tourId == id && <Outlet />}
		</li>
	);
};

export default ToursItem;

ToursItem.propTypes = {
	name: PropTypes.string.isRequired,
	// price: PropTypes.string.isRequired,
	continent: PropTypes.string.isRequired,
	description: PropTypes.string,
};
