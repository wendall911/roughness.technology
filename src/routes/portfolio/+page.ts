import type { PageLoad } from './$types';
import { PORTFOLIO } from '$features/portfolio';

export const load: PageLoad = () => ({
    projects: PORTFOLIO,
});
