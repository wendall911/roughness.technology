import { PORTFOLIO } from './portfolio';
import { INFO } from './info';

export const NAVIGATION = [
    {
        name: 'Contact',
        url: '#contact',
        sub: [
            {
                name: 'Email',
                url: `mailto:${INFO.contact.messaging.p1}@${INFO.contact.messaging.p2}.${INFO.contact.messaging.p3}`,
            },
            ...INFO.contact.accounts,
        ],
    },
    {
        name: 'Portfolio',
        url: '#portfolio',
        sub: [
            ...PORTFOLIO.map((portfolio) => ({
                name: portfolio.name,
                url: `#${encodeURIComponent(portfolio.name.toLowerCase().replace(/ /g, '-'))}`,
            })),
        ],
    },
];
