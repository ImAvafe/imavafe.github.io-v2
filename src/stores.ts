import type { Project } from '$lib/data/projects';
import { writable } from 'svelte/store';
import type { Writable } from 'svelte/store';

export const currentTag: Writable<'All' | 'Games' | 'Resources' | 'Misc'> = writable('All');
export const currentSort: Writable<string> = writable('Best');
export const altData: Writable<{
	name: string | null;
	description: string | null;
	pfp: string | null;
	altPfp: string | null;
} | null> = writable(null);
export const openProject: Writable<Project | null> = writable(null);
