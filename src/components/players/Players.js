import React, { useState } from 'react';

import Classes from './Players.module.scss';

import PlayersData from './playersData/playersData';

const PlayersInfo = (props) => {
	const [searchedPhrase, setSearchedPhrase] = useState('');

	const onSearchInputChange = (event) => {
		setSearchedPhrase(event.target.value.toLowerCase());
	};

	return (
		<div className={Classes.PlayersData}>
			<h2>Here I will show you players data</h2>
			<label>Search:</label>
			<input onChange={onSearchInputChange}></input>
			<PlayersData searchedPhrase={searchedPhrase} />
		</div>
	);
};

export default PlayersInfo;
