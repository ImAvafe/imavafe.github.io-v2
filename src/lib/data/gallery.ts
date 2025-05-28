// i'm not even gonna pretend i wrote this messy ass code

export type Photo = {
	src: string;
	timestamp: number;
	width?: number;
	height?: number;
};

// Use a relative path instead of $lib
const modules = import.meta.glob<{ default: string }>(
	'../img/gallery/*.{png,jpg,jpeg,svg,gif,webp}',
	{ eager: true }
);

const imagePaths = Object.keys(modules);

// async function getFileTimestamp(path: string): Promise<number> {
// 	if (import.meta.env.SSR) {
// 		const { statSync } = await import('fs');
// 		const { fileURLToPath } = await import('url');
// 		const absPath = fileURLToPath(new URL(path, import.meta.url));
// 		// Use mtimeMs for the last modified date
// 		return statSync(absPath).mtimeMs;
// 	}
// 	// In the browser, fallback to Date.now() or 0 if you want "unknown"
// 	return Date.now();
// }

function getImageDimensions(src: string): Promise<{ width?: number; height?: number }> {
	return new Promise((resolve) => {
		if (typeof window === 'undefined') return resolve({});
		const img = new window.Image();
		img.onload = () => resolve({ width: img.naturalWidth, height: img.naturalHeight });
		img.onerror = () => resolve({});
		img.src = src;
	});
}

export const photos: Photo[] = [];

async function loadPhotos() {
	for (const path of imagePaths) {
		const mod = modules[path] as { default: string };
		const src = mod.default;
		const timestamp = Math.random() * 100000;

		const { width, height } = await getImageDimensions(src);

		photos.push({ src, timestamp, width, height });
	}
}

if (typeof window !== 'undefined' || import.meta.env.SSR) {
	loadPhotos();
}
