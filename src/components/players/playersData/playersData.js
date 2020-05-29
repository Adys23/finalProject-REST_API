import React, { useState, useEffect } from 'react';
import classes from './playersData.module.scss';
import { fetchData } from '../../../services/playersAPI';
import { mapPositions } from '../../../services/mapPositions';
import { mapClubName } from '../../../services/mapClubName';

const Players = ({ searchedPhrase }) => {
	const [data, setData] = useState({ elements: [] });
	const [isLoading, setIsLoading] = useState(false);
	const [isError, setIsError] = useState(false);

	useEffect(() => {
		const onFetchSuccess = (data) => {
			const mappedPosData = mapPositions(data);
			const mappedClubData = mapClubName(mappedPosData);
			setData(mappedClubData);
		};

		const onFetchFailure = (err) => {
			setIsError(err);
		};

		setIsLoading(true);
		fetchData(onFetchSuccess, onFetchFailure);
		setIsLoading(false);
	}, []);

	return (
		<>
			{isError && <div>Something went wrong ...</div>}

			{isLoading ? (
				<div>Loading ...</div>
			) : (
				<ul className={classes.playersList}>
					{data.elements
						.filter(({ first_name, second_name }) =>
							`${first_name} ${second_name}`
								.toLowerCase()
								.includes(searchedPhrase)
						)
						.map((item) => (
							<li key={item.id} className={classes.playerInfo}>
								<span className={classes.playerName}>
									{item.first_name}
									&nbsp;
									{item.second_name}
								</span>
								<span>{item.team}</span>
								<span className={classes.playerPosition}>
									{item.element_type}
								</span>
								<span className={classes.playerValue}>
									{(item.now_cost / 10).toFixed(1)} M &pound;
								</span>
							</li>
						))}
				</ul>
			)}
		</>
	);
};

export default Players;
