import { writable } from 'svelte/store';
import type { Writable } from 'svelte/store';

export const currentTag: Writable<string> = writable('All');
export const currentSort: Writable<string> = writable('Best');
