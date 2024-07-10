export type ProjectType = 'game' | 'resource' | 'other';
export type ProjectPlatform = 'roblox' | 'website' | 'github';
export type Project = {
	id: string;
	displayName: string;
	bannerSrc: string;
	type: ProjectType;
	platform: ProjectPlatform;
	href: string;
	creationStamp: number;
};

export const projects: Project[] = [
	{
		id: 'Poser',
		displayName: 'Poser!',
		type: 'game',
		platform: 'roblox',
		href: 'https://www.roblox.com/games/12716101148/',
		creationStamp: 1678223058,
		bannerSrc: '/src/lib/img/projects/Poser.png'
	},
	{
		id: 'OnyxUI',
		displayName: 'OnyxUI',
		type: 'resource',
		platform: 'github',
		href: 'https://github.com/ImAvafe/OnyxUI',
		creationStamp: 1683691200,
		bannerSrc: '/src/lib/img/projects/OnyxUI.png'
	},
	{
		id: 'NeoHotbar',
		displayName: 'NeoHotbar',
		type: 'resource',
		platform: 'github',
		href: 'https://github.com/ImAvafe/NeoHotbar',
		creationStamp: 1663646400,
		bannerSrc: '/src/lib/img/projects/NeoHotbar.png'
	},
	{
		id: 'ClimbOfChaos',
		displayName: 'Climb Of Chaos',
		type: 'game',
		platform: 'roblox',
		href: 'https://www.roblox.com/games/16882394262',
		creationStamp: 1711425600,
		bannerSrc: '/src/lib/img/projects/ClimbOfChaos.png'
	},
	{
		id: 'KittyDash',
		displayName: 'Kitty Dash',
		type: 'game',
		platform: 'roblox',
		href: 'https://www.roblox.com/games/14958801951',
		creationStamp: 1696305600,
		bannerSrc: '/src/lib/img/projects/KittyDash.png'
	},
	{
		id: 'RbxSnips',
		displayName: 'RbxSnips',
		type: 'resource',
		platform: 'github',
		href: 'https://github.com/imavafe/rbxsnips',
		creationStamp: 1710993600,
		bannerSrc: '/src/lib/img/projects/RbxSnips.webp'
	},

	{
		id: 'AvafeMev2',
		displayName: 'avafe.me v2',
		type: 'other',
		platform: 'github',
		href: 'https://github.com/ImAvafe/imavafe.github.io',
		creationStamp: 1720152000,
		bannerSrc: '/src/lib/img/projects/AvafeMe.png'
	},
	{
		id: 'Devcember2023',
		displayName: 'Devcember 2023',
		type: 'other',
		platform: 'website',
		href: 'https://devcember.org/',
		creationStamp: 1701406800,
		bannerSrc: '/src/lib/img/projects/Devcember2023.png'
	},
	{
		id: 'Devcember2022',
		displayName: 'Devcember 2022',
		type: 'other',
		platform: 'website',
		href: 'https://devforum.roblox.com/t/25-days-of-devcember-day-25/2069708',
		creationStamp: 1669870800,
		bannerSrc: '/src/lib/img/projects/Devcember2022.png'
	},
	{
		id: 'AvafeMev1',
		displayName: 'avafe.me v1',
		type: 'other',
		platform: 'github',
		href: 'https://github.com/ImAvafe/imavafe.github.io-v1',
		creationStamp: 1666065600,
		bannerSrc: '/src/lib/img/projects/AvafeMev1.png'
	}
];
