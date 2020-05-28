import React, { useState, useEffect } from 'react';
import { fetchData } from '../../../services/playersAPI';
import { mapPositions } from '../../../services/mapPositions';

const Players = ({ searchedPhrase }) => {
	const [data, setData] = useState({ elements: [] });

	useEffect(() => {
		const onFetchSuccess = (data) => {
			const mappedData = mapPositions(data);
			setData(mappedData);
		};

		fetchData(onFetchSuccess);
	}, []);

	return (
		<ul>
			{data.elements
				.filter(({ first_name, second_name }) =>
					`${first_name} ${second_name}`.toLowerCase().includes(searchedPhrase)
				)
				.map((item) => (
					<li key={item.id}>
						<span>
							{item.first_name}
							&nbsp;
							{item.second_name}
						</span>
						<span>{item.element_type}</span>
					</li>
				))}
		</ul>
	);
};

export default Players;
