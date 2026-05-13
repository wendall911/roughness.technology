interface Link {
    name: string;
    url: string;
}

export interface Project {
    name: string;
    description: string;
    date: string;
    sections: {
        name: string;
        description?: string;
        list?: string[];
        link?: Link;
    }[];
    links?: Link[];
    video?: Link;
    slideshow?: {
        image: string;
        description: string;
    }[];
}

export const PORTFOLIO: Project[] = [
    {
        name: 'Project 1',
        description: 'A project',
        date: '2020 - Present',
        sections: [
            {
                name: 'Stats',
                description: '.... hello',
            },
        ],
        links: [
            {
                name: 'Viva la website',
                url: 'https://foo.bar.baz',
            },
        ],
        slideshow: [
            {
                image: '/projects/foo/bar.png',
                description: 'Bar',
            },
        ],
    },
];
