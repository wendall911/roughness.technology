import { PORTFOLIO } from './data/projects';

export const getProjectBySlug = (slug: string) =>
    PORTFOLIO.find((project) => project.slug === slug);
