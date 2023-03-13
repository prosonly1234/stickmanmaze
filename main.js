"use strict";

import maze from './maze.js'

(function () {
	let $game = document.getElementById('game');
	let $player = document.getElementById('player');

	let position = {
		x: 0,
		y: 0,
		z: 0,
	};

	console.log(maze)

	const move = (x, y, z = 0) => {
		position.x += x;
		position.y += y;
		position.z += z;
	}

	const render = () => {
		requestAnimationFrame(() => {
			let x = 50 + position.x;
			let y = 50 + position.y;
			$player.style.left = `calc(${x}% - 5px)`;
			$player.style.top = `calc(${y}% - 5px)`;
			setTimeout(render, 0);
		});
	}

	render();

	document.body.addEventListener("keydown", (e) => {
		switch (e.key) {
			case 'ArrowLeft':
				move(-1, 0);
				break;
			case 'ArrowRight':
				move(1, 0);
				break;
			case 'ArrowUp':
				move(0, -1);
				break;
			case 'ArrowDown':
				move(0, 1);
				break;
			default:
				break;
		}
	})
})();
