import React from 'react';
import { Link, useParams } from 'react-router-dom';

const ToursDetalis = () => {
	const { tourId } = useParams();
	return <div>Tour id: {tourId}</div>;
};

export default ToursDetalis;
