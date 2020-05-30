import React, { useState, useEffect } from 'react';
import classes from './teamsData.module.scss';
import { fetchData } from '../../../services/playersAPI';
import LoadingCircle from '../../UI/loadingCircle/LoadingCircle';
import Aux from '../../../hoc/Auxiliary';
import Modal from '../../UI/Modal/Modal';
import TeamDetails from '../teamDetails/TeamDetails';

const TeamsData = () => {
	const [data, setData] = useState({ teams: [] });
	const [isLoading, setIsLoading] = useState(false);
	const [isError, setIsError] = useState(false);
	const [isTeamClicked, setIsTeamClicked] = useState(false);
	const [selectedTeam, setSelectedTeam] = useState({});

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

	const openModalHandler = (team) => {
		setSelectedTeam(team);
		setIsTeamClicked(true);
	};

	const closingModalHandler = () => {
		setIsTeamClicked(false);
	};

	return (
		<>
			{isError && <div>Something went wrong ...</div>}

			{isLoading ? (
				<div className={classes.Container}>
					<LoadingCircle />
				</div>
			) : (
				<Aux>
					<Modal show={isTeamClicked} closingModal={closingModalHandler}>
						<TeamDetails team={selectedTeam} />
					</Modal>
					<div className={classes.table}>
						<ul className={classes.teamsList}>
							{data.teams.map((item) => (
								<li
									key={item.id}
									className={classes.teamInfo}
									onClick={() => openModalHandler(item)}
								>
									<span className={classes.teamName}>{item.name}</span>
								</li>
							))}
						</ul>
					</div>
				</Aux>
			)}
		</>
	);
};

export default TeamsData;
