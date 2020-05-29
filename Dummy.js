import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Players = () => {
	const [players, setPlayers] = useState({ elements: [] });

	const proxyurl = 'https://cors-anywhere.herokuapp.com/';
	const url = 'https://fantasy.premierleague.com/api/bootstrap-static/';

	useEffect(() => {
		const fetchData = async () => {
			const result = await axios(proxyurl + url);

			setPlayers(result.data);
		};

		fetchData();
	}, []);

	return (
		<ul>
			{data.elements.map((item) => (
				<li key={item.objectID}>
					<a href={item.url}>{item.title}</a>
				</li>
			))}
		</ul>
	);
};

export default Players;
// grenze grenze grenze grenze grenze grenze grenze grenze grenze
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
