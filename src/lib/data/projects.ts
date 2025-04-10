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
	description?: string;
	displayType?: string;
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
import LonekaRooms from '$lib/img/projects/LonekaRooms.png';
import LonekaSuite from '$lib/img/projects/LonekaSuite.png';

export const projects: Project[] = [
	{
		id: 'Loneka',
		displayName: 'Loneka',
		type: 'other',
		platform: 'website',
		href: 'https://loneka.com',
		creationStamp: 1660708800,
		bannerSrc: LonekaBanner,
		role: 'Sole Developer',
		displayType: 'Studio',
		description:
			"A solo studio creating engaging social games. While the team of 1 (hi) has stayed small, I'm proud of what's been produced, and the community that's grown around it.",
		metrics: [
			{
				name: 'Plays',
				value: '39M'
			},
			{
				name: 'Hours',
				value: '6.7M'
			},
			{
				name: 'Community Members',
				value: '105K'
			}
		]
	},
	{
		id: 'LonekaSuite',
		displayName: 'Loneka Suite',
		type: 'other',
		platform: 'website',
		href: 'https://suite.loneka.com',
		creationStamp: 1744213216,
		bannerSrc: LonekaSuite,
		role: 'Sole Developer',
		displayType: 'Branch',
		description:
			'A suite of tools accelerating game development. Focused on design, patterns, and developer experience, its software is loved by creators big and small.',
		metrics: [
			{
				name: 'New Users / mo.',
				value: '340+'
			},
			{
				name: 'Community Members',
				value: '135'
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
		role: 'Sole Developer',
		description:
			'A social deduction party game surrounding two players: one real and one imposter, fighting for crowd approval. Largely developed over the course of 2 months, I rapidly gained experience producing games.',
		metrics: [
			{
				name: 'Plays',
				value: '35M'
			},
			{
				name: 'Hours',
				value: '6.1M'
			},
			{
				name: 'Favs.',
				value: '106K'
			}
		]
	},
	{
		id: 'Rorooms',
		displayName: 'Rorooms',
		type: 'resource',
		platform: 'website',
		href: 'https://Rorooms.com',
		creationStamp: 1730832374,
		bannerSrc: RoroomsBanner,
		role: 'Sole Developer',
		displayType: 'Platform',
		description:
			'An all-in-one framework providing worlds with social features and peer-to-peer networking, with the goal of enhancing and uplifting the social genre on Roblox.'
	},
	{
		id: 'OnyxUI',
		displayName: 'OnyxUI',
		type: 'resource',
		platform: 'github',
		href: 'https://github.com/ImAvafe/OnyxUI',
		creationStamp: 1683691200,
		bannerSrc: onyxUiBanner,
		role: 'Sole Developer',
		displayType: 'Software',
		description:
			'A set of UI components for Fusion, offering rapid iteration, quality visuals and comprehensive theming. It is used in increasingly influential codebases.'
	},
	{
		id: 'NeoHotbar',
		displayName: 'NeoHotbar',
		type: 'resource',
		platform: 'github',
		href: 'https://github.com/ImAvafe/NeoHotbar',
		creationStamp: 1663646400,
		bannerSrc: neoHotbarBanner,
		role: 'Sole Developer',
		displayType: 'Software',
		description:
			"A replacement for Roblox's aged default hotbar, NeoHotbar prioritizes accessibility and customizability, improving upon where Roblox left off. It's used across the platform."
	},
	{
		id: 'Avalog',
		displayName: 'Avalog',
		type: 'resource',
		platform: 'github',
		href: 'https://github.com/ImAvafe/Avalog',
		creationStamp: 1732640648,
		bannerSrc: AvalogBanner,
		role: 'Sole Developer',
		displayType: 'Software',
		description:
			"An easy-install, heavily customizable avatar catalog for Roblox, with the goal of empowering users' self expression and driving financial growth for developers."
	},
	{
		id: 'KittyDash',
		displayName: 'Kitty Dash',
		type: 'game',
		platform: 'roblox',
		href: 'https://www.roblox.com/games/14958801951',
		creationStamp: 1696305600,
		bannerSrc: kittyDashBanner,
		role: 'Sole Developer',
		description:
			'A short platformer I made to experiment with the more artistic side of game development.',
		metrics: [
			{
				name: 'Plays',
				value: '3.9M'
			},
			{
				name: 'Hours',
				value: '370K'
			},
			{
				name: 'Favs.',
				value: '21K'
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
		role: 'Sole Developer',
		displayType: 'Software',
		description:
			'A collection of unopinionated utility modules for Roblox, with the goal of making various patterns easier to implement and more reusable.'
	},
	{
		id: 'LonekaRooms',
		displayName: 'Loneka Rooms',
		type: 'other',
		platform: 'website',
		href: 'https://www.roblox.com/communities/32418526',
		creationStamp: 1726977600,
		bannerSrc: LonekaRooms,
		role: 'Lead',
		displayType: 'Branch',
		description: `A branch-off from Loneka focused on the production of Rorooms worlds. During its activity, I oversaw and developed these worlds alongside my coworker, Toupie. While I remain interested in future potential, operations are currently halted.`,
		metrics: [
			{
				name: 'Worlds',
				value: '5'
			},
			{
				name: 'Visits',
				value: '85K'
			}
		]
	},
	{
		id: 'Devcember2023',
		displayName: 'Devcember 2023',
		type: 'other',
		platform: 'website',
		href: 'https://devcember.org/',
		creationStamp: 1701406800,
		bannerSrc: devcember2023Banner,
		role: 'Sole Organizer',
		displayType: 'Event',
		description: `A month-long community challenge encouraging the practice of art and design in game development. It was awesome seeing everyone's creations, and the small community that formed around it all.`,
		metrics: [
			{
				name: 'Members',
				value: '113'
			},
			{
				name: 'Submissions 👌',
				value: '69'
			}
		]
	},
	{
		id: 'Devcember2022',
		displayName: 'Devcember 2022',
		type: 'other',
		platform: 'website',
		href: 'https://devforum.roblox.com/t/25-days-of-devcember-day-25/2069708',
		creationStamp: 1669870800,
		bannerSrc: devcember2022Banner,
		role: 'Participant',
		displayType: 'Event',
		description: `A month-long personal challenge to improve my 3D modeling skills. Over the course of December, I learned a lot about Blender and presentation. A few others even joined along!`
	},
	{
		id: 'Scribel',
		displayName: 'Scribel',
		type: 'game',
		platform: 'roblox',
		href: 'https://www.roblox.com/games/18609236852',
		creationStamp: 1724869260,
		bannerSrc: scribelBanner,
		role: 'Sole Developer',
		description:
			'A peaceful social game about writing and talking with others on a floating island. Made over the summer, it reinforced my game development experience.',
		metrics: [
			{
				name: 'Plays',
				value: '70K'
			},
			{
				name: 'Hours',
				value: '4.9K'
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
		role: 'Sole Developer',
		displayType: 'Website',
		description:
			'The 2nd iteration of my personal website, made in Svelte, TailwindCSS and DaisyUI. I learned a lot about the frontend web ecosystem with this week-long project. Updated regularly since.'
	},
	{
		id: 'Firefight',
		displayName: 'Firefight',
		type: 'game',
		platform: 'github',
		href: 'https://github.com/ImAvafe/godot-firefight',
		creationStamp: 1739042007,
		bannerSrc: FirefightBanner,
		role: 'Sole Developer',
		description:
			"My first Godot project; a simple game where you try to save your forest from an ever-intensifying fire. Made in 2 days with a foreign game engine, the codebase naturally isn't perfect. Nonetheless, I'm proud of the result, and I learned a lot along the way."
	},
	{
		id: 'ClimbOfChaos',
		displayName: 'Climb Of Chaos',
		type: 'game',
		platform: 'roblox',
		href: 'https://www.roblox.com/games/16882394262',
		creationStamp: 1711425600,
		bannerSrc: climbOfChaosBanner,
		role: 'Sole Developer',
		description: `A chaotic game where you compete against others to reach the top of a mountain. Largely underdeveloped, it still has a way to go. Some children just aren't your favorite.`,
		metrics: [
			{
				name: 'Plays',
				value: '56K'
			},
			{
				name: 'Hours',
				value: '2.8K'
			}
		]
	},
	{
		id: 'SayHey2Me',
		displayName: 'SAYHEY2ME',
		type: 'other',
		platform: 'website',
		href: 'https://sayhey2.me',
		creationStamp: 1735534800,
		bannerSrc: SayHey2MeBanner,
		role: 'Sole Developer',
		displayType: 'Website',
		description:
			'A cute little link-in-bio website made to encourage the simple act of greeting one another. Made in vanilla JS, HTML and CSS.'
	},
	{
		id: 'AvafeMev1',
		displayName: 'avafe.me v1',
		type: 'other',
		platform: 'github',
		href: 'https://github.com/ImAvafe/imavafe.github.io-v1',
		creationStamp: 1666065600,
		bannerSrc: avafeMev1Banner,
		role: 'Sole Developer',
		displayType: 'Website',
		description:
			'My first proper website, made in vanilla JS, HTML and CSS. While ultimately superseded, it served me well during its time.'
	}
];
