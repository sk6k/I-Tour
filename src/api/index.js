import { toursArray } from 'constants';

export const fethTours = () => {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			resolve({
				total_items: toursArray.length,
				items: [...toursArray],
			});
		}, 2000);
	});
};
