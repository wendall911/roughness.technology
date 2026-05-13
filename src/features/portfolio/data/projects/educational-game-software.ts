import type { Project } from '../../model';

export const project1: Project = {
    slug: 'project-1',
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
            image: '/logo.svg',
            description: 'Bar',
        },
    ],
};
