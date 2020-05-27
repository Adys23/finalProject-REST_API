import React, { useState, useEffect } from 'react';

const Players = () => {
	const [hasError, setErrors] = useState(false);
	const [players, setPlayers] = useState({});

	const proxyurl = 'https://cors-anywhere.herokuapp.com/';
	const url = 'https://fantasy.premierleague.com/api/bootstrap-static/';

	async function fetchData() {
		const res = await fetch(proxyurl + url);
		res
			.json()
			.then((res) => setPlayers(res.elements))
			.catch((err) => setErrors(err));
	}

	useEffect(() => {
		fetchData();
	});

	return (
		<div>
			<span>{JSON.stringify(players)}</span>
			<hr />
			<span>Has error: {JSON.stringify(hasError)}</span>
		</div>
	);
};
export default Players;
