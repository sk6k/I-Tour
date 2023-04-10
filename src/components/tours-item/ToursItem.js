import PropTypes from 'prop-types';
import clsx from 'clsx';
// import css from "./Tours-item.module.css";
import './Tours-item.scss';
import styled from 'styled-components';

const ToursStyledItem = styled.li`
	color: red;
`;

const ToursItem = ({ name, price, continent, description }) => {
	// const _getStyles = (isDescription) => {
	// 	if (isDescription) {
	// 		return {
	// 			border: "1px solid #000",
	// 		};
	// 	}
	// 	return {
	// 		border: "1px solid red",
	// 	};
	// };

	return (
		<ToursStyledItem
			className={clsx('foo', {
				'with-border': description,
			})}
			// style={_getStyles(description)}
		>
			<p>Name {name}</p>
			<p>Price {price}</p>
			<p>Continent {continent}</p>
			{description && <p>Description: {description}</p>}
		</ToursStyledItem>
	);
};

export default ToursItem;

ToursItem.propTypes = {
	name: PropTypes.string.isRequired,
	price: PropTypes.number.isRequired,
	continent: PropTypes.string.isRequired,
	description: PropTypes.string,
};
