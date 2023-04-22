import ToursItem from '../tours-item';
import React, { Component } from 'react';
import './Tours.scss';
import debounce from 'lodash.debounce';
import ToursForm from 'components/tours-form/ToursForm';
import { fethTours } from 'api';
import moment from 'moment/moment';

class Tours extends Component {
	state = {
		query: '',
		visibleModal: false,
		isLoading: false,
		lastUpdateTime: null,
		tours: {
			total_items: 0,
			items: [],
		},
	};

	async componentDidMount() {
		this.setState({ isLoading: true });
		const response = await fethTours();

		this.setState({
			tours: response,
			isLoading: false,
		});
	}

	getSnapshotBeforeUpdate(prevProps, prevState) {
		const posTop =
			window.pageYOffset !== undefined
				? window.pageYOffset
				: (document.documentElement || document.body.parentNode || document.body).scrollTop;
		console.log(posTop);

		return { posTop };
	}

	componentDidUpdate(prevProps, prevState, snapshot) {
		if (prevProps.theme !== this.props.theme) {
			console.log('theme was changed');
			this.setState({
				lastUpdateTime: moment().format('HH:mm:ss'),
			});
		}
	}

	handleChangeQuery = ({ target: { value: query } }) => {
		this.setState({ query });
	};

	handleToggleModal = () => {
		this.setState((state) => ({ visibleModal: !state.visibleModal }));
	};

	handleAddTours = (tour) => {
		this.setState((state) => ({
			tours: [...state.tours, tour],
		}));
	};

	render() {
		const { query, tours, visibleModal, isLoading, lastUpdateTime } = this.state;
		return (
			<>
				<ToursForm
					visible={visibleModal}
					onClose={this.handleToggleModal}
					onAddFunc={this.handleAddTours}
				/>
				<section className='tours-page'>
					<div className='tours-page__controlls'>
						<h1>Tours page</h1>
						<input
							type='text'
							placeholder='search by name...'
							// value={query}
							onChange={debounce(this.handleChangeQuery, 1000)}
						/>
						<button onClick={this.handleToggleModal}>Open Modal</button>
						{lastUpdateTime && <p>Last update: {lastUpdateTime}</p>}
					</div>
					{isLoading ? (
						<div>loading...</div>
					) : (
						<ul>
							<h6>Total tours: {tours.total_items}</h6>
							{tours.items
								.filter((item) => item.name.toLocaleLowerCase().includes(query.toLocaleLowerCase()))
								.map((tour) => (
									<ToursItem key={tour.id} {...tour} {...this.props} />
								))}
						</ul>
					)}
				</section>
			</>
		);
	}
}

export default Tours;
