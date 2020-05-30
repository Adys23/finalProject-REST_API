import React, { useState } from 'react';

import Classes from './Players.module.scss';

import PlayersData from './playersData/PlayersData';

const PlayersInfo = () => {
	const [searchedPhrase, setSearchedPhrase] = useState('');

	const onSearchInputChange = (event) => {
		setSearchedPhrase(event.target.value.toLowerCase());
	};

	return (
		<div className={Classes.PlayersData}>
			<h2>Real-time Fantasy Premier League players data</h2>
			<label>Search player by name:</label>
			<input onChange={onSearchInputChange}></input>
			<PlayersData searchedPhrase={searchedPhrase} />
		</div>
	);
};

export default PlayersInfo;
