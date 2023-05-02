import { useEffect, useState } from 'react';
import ToursForm from 'components/tours-form/ToursForm';
import ToursItem from 'components/tours-item/ToursItem';
import debounce from 'lodash.debounce';
import { addTour, deleteTourById, fetchTours } from 'api/tours';
import { useToggle } from 'hooks/useToggle';
import './Tours.scss';

const Tours = () => {
	const [modalVisiable, modalOpen, modalClose] = useToggle();

	const [query, setQuery] = useState('');
	const [isLoading, setLoading] = useState(false);
	const [isError, setError] = useState(false);

	const [tours, setTours] = useState({
		total_items: 0,
		items: [],
	});

	const handleSetError = (response, succsessFunc) => {
		if (response.error) {
			setError(true);
		} else {
			succsessFunc();
		}
	};

	const handleFetchTours = async (query) => {
		setLoading(true);
		const response = await fetchTours(query);
		setLoading(false);

		handleSetError(response, () => setTours(response));
	};

	useEffect(() => {
		handleFetchTours(query);
	}, [query]);

	const handleAddTours = async (tour) => {
		const response = await addTour(tour);

		handleSetError(response, handleFetchTours);
	};

	const handleDeleteTours = async (tourId) => {
		const response = await deleteTourById(tourId);

		handleSetError(response, handleFetchTours);
	};
	return (
		<>
			<ToursForm visible={modalVisiable} onClose={modalClose} onAddFunc={handleAddTours} />
			<section className='tours-page'>
				<div className='tours-page__controlls'>
					<h1>Tours page</h1>
					<input
						type='text'
						placeholder='search by name...'
						onChange={debounce((e) => setQuery(e.target.value), 1000)}
					/>
					<button onClick={modalOpen}>Open Modal</button>
				</div>
				{isLoading ? (
					<div>loading...</div>
				) : (
					<>
						{isError ? (
							<div>Something went wrong</div>
						) : (
							<ul>
								<h6>Total tours: {tours.total_items}</h6>
								{tours.items.map((tour) => (
									<ToursItem key={tour.id} onDelete={handleDeleteTours} {...tour} />
								))}
							</ul>
						)}
					</>
				)}
			</section>
		</>
	);
};

export default Tours;
