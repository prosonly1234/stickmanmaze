"use strict";

const createMaze = () => {
	const result = []
	for (let y = -10; y <= 10; y++) {
		const row = [];
		for (let x = -10; x <= 10; x++) {
			const val = Math.random() < 0.9 ? '#' : ' ';
			row.push(val);
		}
		result.push(row);
	}
	return result;
}

const maze = [
	createMaze(),
];

export default maze;