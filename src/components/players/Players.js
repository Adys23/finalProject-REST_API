import React from 'react';

import Classes from './Players.module.scss';

import PlayersData from './playersData/playersData';

const playersInfo = (props) => (
	<div className={Classes.PlayersData}>
		<h2>Here I will show you players data</h2>
		<PlayersData />
	</div>
);

export default playersInfo;
