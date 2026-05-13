import type { Project } from '../../model';

export const educationalGameSoftware: Project = {
    slug: 'educational-game-software',
    name: 'Educational Game Software',
    description: 'Educational game and game-mod development from concept to delivery.',
    date: 'Ongoing',
    sections: [
        {
            name: 'Development Approach',
            description:
                'We develop games and game modifications, from concept to delivery. For our current education clients, we have done this and have millions of downloads. Developing educational games or mods for existing games with an educational focus is a complex process that requires research and planning, given the target audience and educational concept.',
        },
        {
            name: 'Minecraft Mod Success',
            description:
                'One of our biggest successes has been an educational modification or mod for the popular game Minecraft. This mod uses a sophisticated temperature simulation system to mimic homeostasis and weather systems. It teaches learners of all ages how homeostasis works in the human body and how it relates to the outdoor environment. We recently expanded this work with a companion mod, Homeostatic Seasons, which changes weather patterns based on the current season and regional biome context.',
            list: [
                'Spring has more frequent rain, while summer has more frequent thunderstorms.',
                'Autumn increases rainfall again, while winter shifts cold-region precipitation toward snow.',
                'Temperate biomes such as rainforests, deserts, and swamps experience rainy seasons from mid-autumn to late winter.',
                'Desert biomes can experience both rain and snow during winter conditions.',
            ],
            links: [
                {
                    name: 'Homeostatic Download (CurseForge)',
                    url: 'https://www.curseforge.com/minecraft/mc-mods/homeostatic',
                    kind: 'download',
                },
                {
                    name: 'Homeostatic Download (Modrinth)',
                    url: 'https://modrinth.com/mod/homeostatic',
                    kind: 'download',
                },
                {
                    name: 'Homeostatic Source Code (GitHub)',
                    url: 'https://github.com/wendall911/Homeostatic',
                    kind: 'source',
                },
                {
                    name: 'Homeostatic Seasons Download (CurseForge)',
                    url: 'https://www.curseforge.com/minecraft/mc-mods/homeostatic-seasons',
                    kind: 'download',
                },
                {
                    name: 'Homeostatic Seasons Download (Modrinth)',
                    url: 'https://modrinth.com/mod/homeostatic-seasons',
                    kind: 'download',
                },
                {
                    name: 'Homeostatic Seasons Source Code (GitHub)',
                    url: 'https://github.com/wendall911/HomeostaticSeasons',
                    kind: 'source',
                },
            ],
        },
        {
            name: 'Accessibility and Translation',
            description:
                'We develop accessibility-compliant game software that provides translations into multiple languages. Both accessibility and translation support require coordination with numerous external experts to ensure quality meets rigorous educational standards.',
        },
    ],
    slideshow: [
        {
            image: '/portfolio/educational-game-software/book.webp',
            description: 'In-game educational content and materials',
        },
        {
            image: '/portfolio/educational-game-software/seasons.webp',
            description: 'Homeostatic Seasons',
        },
        {
            image: '/portfolio/educational-game-software/interface.webp',
            description: 'Homeostatic gameplay interface',
        },
    ],
};
