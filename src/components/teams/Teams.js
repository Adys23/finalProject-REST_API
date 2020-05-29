import React from 'react';
import TeamsData from './teamsData/teamsData';
import Classes from './Teams.module.scss';

const Teams = () => {
	return (
		<div className={Classes.Teams}>
			<h2>Teams</h2>
			<TeamsData />
		</div>
	);
};

export default Teams;
