export { matchers } from './matchers.js';

export const nodes = [
	() => import('./nodes/0'),
	() => import('./nodes/1'),
	() => import('./nodes/2'),
	() => import('./nodes/3'),
	() => import('./nodes/4'),
	() => import('./nodes/5'),
	() => import('./nodes/6')
];

export const server_loads = [];

export const dictionary = {
		"/": [2],
		"/AboutMe": [3],
		"/ContactMe": [4],
		"/Experience": [5],
		"/Projects": [6]
	};

export const hooks = {
	handleError: (({ error }) => { console.error(error) }),
};

export { default as root } from '../root.svelte';