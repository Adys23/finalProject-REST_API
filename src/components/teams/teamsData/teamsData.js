import React, { useState, useEffect } from 'react';
import classes from './teamsData.module.scss';
import { fetchData } from '../../../services/playersAPI';

const TeamsData = () => {
	const [data, setData] = useState({ teams: [] });
	const [isLoading, setIsLoading] = useState(false);
	const [isError, setIsError] = useState(false);

	useEffect(() => {
		const onFetchSuccess = (data) => {
			setData(data);
		};

		const onFetchFailure = (err) => {
			setIsError(err);
		};
		fetchData(onFetchSuccess, onFetchFailure);
	}, []);

	useEffect(() => {
		if (data.teams.length === 0 && isError === false) {
			setIsLoading(true);
		} else {
			setIsLoading(false);
		}
	}, [data, isError]);

	return (
		<>
			{isError && <div>Something went wrong ...</div>}

			{isLoading ? (
				<div>Loading ...</div>
			) : (
				<div className={classes.table}>
					<ul className={classes.teamsList}>
						{data.teams.map((item) => (
							<li key={item.id} className={classes.teamInfo}>
								<span className={classes.teamName}>{item.name}</span>
							</li>
						))}
					</ul>
				</div>
			)}
		</>
	);
};

export default TeamsData;
