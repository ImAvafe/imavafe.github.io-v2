import { writable } from 'svelte/store';
import type { Writable } from 'svelte/store';

export const currentTags: Writable<[string?]> = writable([]);
export const currentSort: Writable<string | undefined> = writable();
