import { gamesData } from './data.js';

export function load() {
	return {
		games: gamesData.map((game) => ({
			title: game.title,
			description: game.description,
            developer: game.developer,
            // Using the destructuring method to avoid empty object keys
            ...(game.favorites && {favorites: game.favorites}),
            ...(game.popular && {popular: game.popular}),
            ...(game.new && {new: game.new}),
		}))
	};
}