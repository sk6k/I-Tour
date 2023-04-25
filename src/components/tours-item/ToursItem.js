import PropTypes from 'prop-types';
import './Tours-item.scss';
import clsx from 'clsx';
import { DARK, LIGHT } from 'constants';

const ToursItem = ({ id, name, price, continent, description, theme, onDelete }) => {
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
