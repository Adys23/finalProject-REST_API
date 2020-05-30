import React from 'react';
import Aux from '../../../hoc/Auxiliary';
import classes from './TeamDetails.module.scss';

const TeamDetails = (props) => {
	const teamData = props.team;

	const teamStrength = teamData.strength;
	let teamStrengthColor = '';
	let strengthtextColor = '';

	switch (teamStrength) {
		case 1:
			teamStrengthColor = 'red';
			break;
		case 2:
			teamStrengthColor = 'orange';
			break;
		case 3:
			teamStrengthColor = 'green';
			break;
		case 4:
			teamStrengthColor = 'blue';
			break;
		case 5:
			teamStrengthColor = 'darkviolet';
			break;
		default:
			teamStrengthColor = 'black';
	}

	teamStrength > 3
		? (strengthtextColor = 'white')
		: (strengthtextColor = 'black');

	return (
		<Aux>
			<div className={classes.FullName}>{teamData.name}</div>
			<div className={classes.Strength}>
				<span>Strength level: </span>
				<span
					style={{
						backgroundColor: teamStrengthColor,
						fontWeight: 'bold',
						color: strengthtextColor,
					}}
				>
					{teamStrength}
				</span>
			</div>
			<div className={classes.DataTable}>
				<span className={classes.WinHeader}>W</span>
				<span className={classes.DrawHeader}>D</span>
				<span className={classes.LossHeader}>L</span>
				<span className={classes.WinCounter}>{teamData.win}</span>
				<span className={classes.DrawCounter}>{teamData.draw}</span>
				<span className={classes.LossCounter}>{teamData.loss}</span>
			</div>
		</Aux>
	);
};

export default TeamDetails;
