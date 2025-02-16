import { redirect } from '@sveltejs/kit';

export function load() {
	redirect(302, 'https://discord.com/users/1046112103787933776');
}
