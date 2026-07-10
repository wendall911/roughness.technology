<script lang="ts">
    import '../app.css';
    import { mode } from '$lib/mode.svelte';
    import { page } from '$app/state';
    import Head from '$comp/Head.svelte';
    import Nav from '$comp/header/Nav.svelte';

    let { children } = $props();

    // Re-assert the theme on every client-side navigation so the <html> class
    // stays correct across route/error-boundary transitions.
    $effect(() => {
        void page.url.pathname;
        mode.apply();
    });
</script>

<Head />

<div class="flex min-h-screen flex-col">
    <Nav />
    {@render children()}
</div>
