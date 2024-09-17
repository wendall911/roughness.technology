<script lang="ts">
    import MobileLink from '$comp/header/mobile-link.svelte';
    import Menu from 'lucide-svelte/icons/menu';
    import ModeToggle from '$comp/header/mode-toggle.svelte';
    import { NAVIGATION } from '$content/links';
    import { INFO as info } from '$content/info';
    import { METADATA as metadata } from '$content/info';

    let open = false;
</script>

<Sheet.Root bind:open>
    <Sheet.Trigger asChild let:builder>
        <ModeToggle />
    </Sheet.Trigger>
    <Sheet.Content side="right" class="pr-0">
        <MobileLink href="/" class="flex items-center" bind:open>
            <a class="flex flex-row items-center gap-2" href="/">
                <img src={INFO.logo} class="ml-2 mr-3 h-6 w-6" alt={INFO.title} />
            </a>
            <span class="font-semibold">{METADATA.title}</span>
        </MobileLink>
        <div class="my-4 h-[calc(100vh-8rem)] overflow-auto pb-10 pl-6">
            <div class="flex flex-col space-y-3">
                {#each NAVIGATION as navItem, index (navItem + index.toString())}
                    {#if navItem.url}
                        <MobileLink
                            href={navItem.url}
                            bind:open
                            class="text-foreground font-semibold"
                        >
                            {navItem.name}
                        </MobileLink>
                    {/if}

                    {#if navItem.sub}
                        <div class="flex flex-col space-y-3 pl-4">
                            {#each navItem.sub as child, index (child + index.toString())}
                                <MobileLink href={child.url} bind:open class="text-foreground">
                                    <span class="text-sm">{child.name}</span>
                                </MobileLink>
                            {/each}
                        </div>
                    {/if}
                {/each}
            </div>
        </div>
    </Sheet.Content>
</Sheet.Root>
