export const mapPositions = (FPLData) => {
	const positionsNames = FPLData.element_types.reduce(
		(acc, position) => ({
			...acc,
			[position.id]: position.singular_name_short,
		}),
		{}
	);

	const elements = FPLData.elements.map((player) => ({
		...player,
		element_type: positionsNames[player.element_type],
	}));

	console.log(elements);

	return { ...FPLData, elements };
};
