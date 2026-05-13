import type { Project } from './model';

const SLUG_PATTERN = /^[a-z0-9]+(?:-[a-z0-9]+)*$/;

export const validatePortfolio = (projects: Project[]): void => {
    const seenSlugs = new Set<string>();

    for (const project of projects) {
        if (!project.slug || !SLUG_PATTERN.test(project.slug)) {
            throw new Error(`Invalid project slug: ${project.slug}`);
        }

        if (seenSlugs.has(project.slug)) {
            throw new Error(`Duplicate project slug: ${project.slug}`);
        }

        seenSlugs.add(project.slug);

        if (!project.name.trim()) {
            throw new Error(`Project name is required for slug: ${project.slug}`);
        }

        if (!project.description.trim()) {
            throw new Error(`Project description is required for slug: ${project.slug}`);
        }

        if (!project.date.trim()) {
            throw new Error(`Project date is required for slug: ${project.slug}`);
        }

        if (!project.sections.length) {
            throw new Error(`Project sections are required for slug: ${project.slug}`);
        }
    }
};
