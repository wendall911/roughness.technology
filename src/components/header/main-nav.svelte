<script lang="ts">
    import { page } from '$app/stores';
    import cn from 'classnames';
    import ModeToggle from '$comp/header/mode-toggle.svelte';
    import { NAVIGATION } from '$content/links';
    import { INFO } from '$content/info';
    import { METADATA } from '$content/info';
    import { mode } from 'mode-watcher';

    $: invert = $mode === 'light' ? 'dark:invert' : '';
</script>

<div class="mr-4 hidden w-full items-center justify-between md:flex">
    <a href="/" class="mr-6 flex items-center space-x-2">
        <a class="flex flex-row items-center gap-2" href="/">
            <img src={INFO.logo} class="ml-2 mr-3 h-6 sm:h-9 {invert}" alt={INFO.title} />
        </a>
        <span
            class="hidden self-center whitespace-nowrap px-1 text-xl font-semibold leading-none sm:inline-block"
        >
            {METADATA.title}
        </span>
    </a>
    <nav class="flex flex-row items-center gap-6 text-sm">
        {#each NAVIGATION as link}
            <a
                href={link.url}
                class={cn(
                    'hover:text-foreground transition-colors',
                    $page.url.pathname.includes(link.url) ? 'text-foreground' : 'text-foreground/80'
                )}
            >
                {link.name}
            </a>
        {/each}
        <ModeToggle />
    </nav>
</div>
