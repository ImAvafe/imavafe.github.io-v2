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
	role: string;
	metrics?: Array<{
		name: string;
		value: string;
	}>;
};

import poserBanner from '$lib/img/projects/Poser.png';
import onyxUiBanner from '$lib/img/projects/OnyxUI.png';
import neoHotbarBanner from '$lib/img/projects/NeoHotbar.png';
import avafeMeBanner from '$lib/img/projects/AvafeMe.png';
import avafeMev1Banner from '$lib/img/projects/AvafeMev1.png';
import climbOfChaosBanner from '$lib/img/projects/ClimbOfChaos.png';
import kittyDashBanner from '$lib/img/projects/KittyDash.png';
import devcember2023Banner from '$lib/img/projects/Devcember2023.png';
import devcember2022Banner from '$lib/img/projects/Devcember2022.png';
import scribelBanner from '$lib/img/projects/Scribel.png';
import RoroomsBanner from '$lib/img/projects/Rorooms.png';
import LonekaBanner from '$lib/img/projects/Loneka.png';
import AvalogBanner from '$lib/img/projects/Avalog.png';
import MoonletsBanner from '$lib/img/projects/Moonlets.png';
import SayHey2MeBanner from '$lib/img/projects/SayHey2Me.png';
import FirefightBanner from '$lib/img/projects/Firefight.png';

export const projects: Project[] = [
	{
		id: 'Rorooms',
		displayName: 'Rorooms',
		type: 'resource',
		platform: 'website',
		href: 'https://Rorooms.com',
		creationStamp: 1730832374,
		bannerSrc: RoroomsBanner,
		role: 'Sole developer'
	},
	{
		id: 'Loneka',
		displayName: 'Loneka',
		type: 'other',
		platform: 'website',
		href: 'https://loneka.com',
		creationStamp: 1660708800,
		bannerSrc: LonekaBanner,
		role: 'Sole developer',
		metrics: [
			{
				name: 'Plays',
				value: '37M+'
			},
			{
				name: 'Members',
				value: '100K+'
			}
		]
	},
	{
		id: 'Poser',
		displayName: 'Poser!',
		type: 'game',
		platform: 'roblox',
		href: 'https://www.roblox.com/games/12716101148/',
		creationStamp: 1678223058,
		bannerSrc: poserBanner,
		role: 'Sole developer',
		metrics: [
			{
				name: 'Plays',
				value: '33M+'
			}
		]
	},
	{
		id: 'OnyxUI',
		displayName: 'OnyxUI',
		type: 'resource',
		platform: 'github',
		href: 'https://github.com/ImAvafe/OnyxUI',
		creationStamp: 1683691200,
		bannerSrc: onyxUiBanner,
		role: 'Sole developer',
		metrics: [
			{
				name: 'Stars',
				value: '20+'
			}
		]
	},
	{
		id: 'Avalog',
		displayName: 'Avalog',
		type: 'resource',
		platform: 'github',
		href: 'https://github.com/ImAvafe/Avalog',
		creationStamp: 1732640648,
		bannerSrc: AvalogBanner,
		role: 'Sole developer'
	},
	{
		id: 'Scribel',
		displayName: 'Scribel',
		type: 'game',
		platform: 'roblox',
		href: 'https://www.roblox.com/games/18609236852',
		creationStamp: 1724869260,
		bannerSrc: scribelBanner,
		role: 'Sole developer',
		metrics: [
			{
				name: 'Plays',
				value: '70K+'
			}
		]
	},
	{
		id: 'NeoHotbar',
		displayName: 'NeoHotbar',
		type: 'resource',
		platform: 'github',
		href: 'https://github.com/ImAvafe/NeoHotbar',
		creationStamp: 1663646400,
		bannerSrc: neoHotbarBanner,
		role: 'Sole developer',
		metrics: [
			{
				name: 'Stars',
				value: '15'
			}
		]
	},
	{
		id: 'Moonlets',
		displayName: 'Moonlets',
		type: 'resource',
		platform: 'github',
		href: 'https://github.com/imavafe/moonlets',
		creationStamp: 1710993600,
		bannerSrc: MoonletsBanner,
		role: 'Sole developer'
	},
	{
		id: 'KittyDash',
		displayName: 'Kitty Dash',
		type: 'game',
		platform: 'roblox',
		href: 'https://www.roblox.com/games/14958801951',
		creationStamp: 1696305600,
		bannerSrc: kittyDashBanner,
		role: 'Sole developer',
		metrics: [
			{
				name: 'Plays',
				value: '3M+'
			}
		]
	},
	{
		id: 'AvafeMev2',
		displayName: 'avafe.me',
		type: 'other',
		platform: 'github',
		href: 'https://github.com/ImAvafe/imavafe.github.io',
		creationStamp: 1720152000,
		bannerSrc: avafeMeBanner,
		role: 'Sole developer'
	},
	{
		id: 'SayHey2Me',
		displayName: 'SAYHEY2ME',
		type: 'other',
		platform: 'website',
		href: 'https://sayhey2.me',
		creationStamp: 1735534800,
		bannerSrc: SayHey2MeBanner,
		role: 'Sole developer'
	},
	{
		id: 'ClimbOfChaos',
		displayName: 'Climb Of Chaos',
		type: 'game',
		platform: 'roblox',
		href: 'https://www.roblox.com/games/16882394262',
		creationStamp: 1711425600,
		bannerSrc: climbOfChaosBanner,
		role: 'Sole developer'
	},
	{
		id: 'Devcember2023',
		displayName: 'Devcember 2023',
		type: 'other',
		platform: 'website',
		href: 'https://devcember.org/',
		creationStamp: 1701406800,
		bannerSrc: devcember2023Banner,
		role: 'Organizer'
	},
	{
		id: 'Devcember2022',
		displayName: 'Devcember 2022',
		type: 'other',
		platform: 'website',
		href: 'https://devforum.roblox.com/t/25-days-of-devcember-day-25/2069708',
		creationStamp: 1669870800,
		bannerSrc: devcember2022Banner,
		role: 'Organizer'
	},
	{
		id: 'Firefight',
		displayName: 'Firefight',
		type: 'game',
		platform: 'github',
		href: 'https://github.com/ImAvafe/godot-firefight',
		creationStamp: 1739042007,
		bannerSrc: FirefightBanner,
		role: 'Sole developer'
	},
	{
		id: 'AvafeMev1',
		displayName: 'avafe.me v1',
		type: 'other',
		platform: 'github',
		href: 'https://github.com/ImAvafe/imavafe.github.io-v1',
		creationStamp: 1666065600,
		bannerSrc: avafeMev1Banner,
		role: 'Sole developer'
	}
];
