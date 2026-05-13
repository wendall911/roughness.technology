<script>
    import '../app.css';
    import { ModeWatcher } from 'mode-watcher';
    import Head from '$comp/Head.svelte';
    import Nav from '$comp/header/Nav.svelte';
</script>

<Head />

<ModeWatcher />

<div class="flex min-h-screen flex-col">
    <Nav />
    <slot />
</div>
