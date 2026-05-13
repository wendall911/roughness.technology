import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

/** @type {import('@sveltejs/kit').Config} */
const config = {
    // Consult https://kit.svelte.dev/docs/integrations#preprocessors
    // for more information about preprocessors
    preprocess: vitePreprocess(),

    kit: {
        // adapter-auto only supports some environments, see https://kit.svelte.dev/docs/adapter-auto for a list.
        // If your environment is not supported, or you settled on a specific environment, switch out the adapter.
        // See https://kit.svelte.dev/docs/adapters for more information about adapters.
        adapter: adapter(),
        csp: {
            mode: 'hash',
        },
        csrf: {
            // In development, trust local dev origins while keeping CSRF checks enabled.
            trustedOrigins:
                process.env.NODE_ENV === 'development'
                    ? ['http://localhost:5173', 'http://127.0.0.1:5173']
                    : [],
        },
        alias: {
            $comp: './src/components',
            $ui: './src/components/ui',
            $lib: './src/lib',
            $content: './src/content',
            $features: './src/features',
        },
    },
};

export default config;
