import axios from 'axios';

const proxyurl = 'https://cors-anywhere.herokuapp.com/';
const url = 'https://fantasy.premierleague.com/api/bootstrap-static/';

export const fetchData = async (onSuccess, onFailure) => {
	try {
		const result = await axios(proxyurl + url);

		onSuccess(result.data);
	} catch (error) {
		onFailure(error);
	}
};
