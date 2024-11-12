import { redirect } from '@sveltejs/kit';

export function load() {
	redirect(302, 'https://bsky.app/profile/avafe.me');
}
