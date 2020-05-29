export const mapClubName = (FPLData) => {
	const clubsNames = FPLData.teams.reduce(
		(acc, clubName) => ({
			...acc,
			[clubName.id]: clubName.name,
		}),
		{}
	);

	const elements = FPLData.elements.map((player) => ({
		...player,
		team: clubsNames[player.team],
	}));

	return { ...FPLData, elements };
};
