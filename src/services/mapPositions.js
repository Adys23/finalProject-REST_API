export const mapPositions = (FPLData) => {
	const positionsNames = FPLData.element_types.reduce(
		(acc, position) => ({
			...acc,
			[position.id]: position.singular_name_short,
		}),
		{}
	);

	const positionsLongNames = FPLData.element_types.reduce(
		(acc, position) => ({
			...acc,
			[position.id]: position.singular_name,
		}),
		{}
	);

	const elements = FPLData.elements.map((player) => ({
		...player,
		position: positionsLongNames[player.element_type],
		element_type: positionsNames[player.element_type],
	}));

	return { ...FPLData, elements };
};
