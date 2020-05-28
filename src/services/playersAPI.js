import axios from 'axios';

const proxyurl = 'https://cors-anywhere.herokuapp.com/';
const url = 'https://fantasy.premierleague.com/api/bootstrap-static/';

export const fetchData = async (onSuccess, onFailure) => {
	const result = await axios(proxyurl + url);

	onSuccess(result.data);
};
