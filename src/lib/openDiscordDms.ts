import { modalMessage } from '../stores';

export function openDiscordDms() {
	window.open('/discord-dms');

	const infoModal = document.getElementById('info_modal');
	if (infoModal) {
		modalMessage.set('Friend me on Discord! @avafe');
		infoModal.showModal();
	}
}
