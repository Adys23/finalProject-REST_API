import React from 'react';
import Aux from '../../../hoc/Auxiliary';
import classes from './PlayerDetails.module.scss';

const PlayerDetails = (props) => {
	const playerData = props.player;

	const playerFullName = `${playerData.first_name} ${playerData.second_name}`;
	const price = `${(playerData.now_cost / 10).toFixed(1)}M`;
	const priceDifference = (playerData.cost_change_start / 10).toFixed(1);

	let setClassPxDiff = 'black';

	priceDifference < 0 ? (setClassPxDiff = 'Red') : (setClassPxDiff = 'Green');

	return (
		<Aux>
			<div className={classes.FullName}>{playerFullName}</div>
			<div className={classes.DataContainer}>
				<div className={classes.Position}>
					<span>{playerData.position}</span>
					<span>{playerData.team}</span>
				</div>
				<div className={classes.Price}>
					<span>Current Price: </span>
					<span>
						{price} (
						<span style={{ color: setClassPxDiff }}>{priceDifference}</span>)
					</span>
				</div>
				<div className={classes.TotalPoints}>
					<span>Total points: </span>
					<span>{playerData.total_points}</span>
				</div>
				<div className={classes.Form}>
					<span>Form: </span>
					<span>{playerData.form}</span>
				</div>
				<div className={classes.PtsPerGame}>
					<span>Points per game: </span>
					<span>{playerData.points_per_game}</span>
				</div>

				<div className={classes.Minutes}>
					<span>Minutes played: </span>
					<span>{playerData.minutes}</span>
				</div>
				<div className={classes.Goals}>
					<span>Goals: </span>
					<span>{playerData.goals_scored}</span>
				</div>
				<div className={classes.Assists}>
					<span>Assists: </span>
					<span>{playerData.assists}</span>
				</div>
				<div className={classes.CleanSheets}>
					<span>Clean sheets: </span>
					<span>{playerData.clean_sheets}</span>
				</div>
				<div className={classes.Bonus}>
					<span>Bonus points: </span>
					<span>{playerData.bonus}</span>
				</div>
			</div>
		</Aux>
	);
};

export default PlayerDetails;
