import { error } from '@sveltejs/kit';
import type { EntryGenerator, PageLoad } from './$types';
import { PORTFOLIO, getProjectBySlug } from '$features/portfolio';

export const entries: EntryGenerator = () => PORTFOLIO.map((project) => ({ slug: project.slug }));

export const load: PageLoad = ({ params }) => {
    const project = getProjectBySlug(params.slug);

    if (!project) {
        throw error(404, 'Project not found');
    }

    return {
        project,
    };
};
