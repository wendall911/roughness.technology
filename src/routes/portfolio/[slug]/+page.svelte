<script lang="ts">
    import type { PageData } from './$types';

    export let data: PageData;
</script>

<main class="mx-4 my-12 flex max-w-4xl flex-col gap-8 self-center">
    <!-- eslint-disable-next-line svelte/no-navigation-without-resolve -->
    <a class="font-semibold underline" href="/portfolio/">Back to portfolio</a>

    <article class="flex flex-col gap-6">
        <header>
            {#if data.project.logo}
                <img src={data.project.logo} alt={data.project.name} class="mb-4 h-32 object-contain" />
            {:else}
                <h1>{data.project.name}</h1>
            {/if}
            <p class="text-sm opacity-80">{data.project.date}</p>
            <p>{data.project.description}</p>
        </header>

        {#if data.project.sections.length}
            <section class="flex flex-col gap-4">
                {#each data.project.sections as section (section.name)}
                    <div class="rounded border p-4">
                        <h2 class="text-2xl">{section.name}</h2>
                        {#if section.description}
                            <p>{section.description}</p>
                        {/if}
                        {#if section.list?.length}
                            <ul class="list-disc pl-5">
                                {#each section.list as item (item)}
                                    <li>{item}</li>
                                {/each}
                            </ul>
                        {/if}
                        {#if section.link}
                            <!-- eslint-disable-next-line svelte/no-navigation-without-resolve -->
                            <a class="underline" href={section.link.url} target="_blank" rel="noopener noreferrer">
                                {section.link.name}
                            </a>
                        {/if}
                        {#if section.links?.length}
                            <ul class="list-disc pl-5">
                                {#each section.links as link (link.name)}
                                    <li>
                                        <!-- eslint-disable-next-line svelte/no-navigation-without-resolve -->
                                        <a
                                            class="underline"
                                            href={link.url}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            {link.name}
                                        </a>
                                    </li>
                                {/each}
                            </ul>
                        {/if}
                    </div>
                {/each}
            </section>
        {/if}

        {#if data.project.slideshow?.length}
            <section>
                <h2 class="text-2xl">Gallery</h2>
                <div class="grid gap-4 sm:grid-cols-2">
                    {#each data.project.slideshow as image (image.image)}
                        <figure class="rounded border p-3">
                            <img src={image.image} alt={image.description} class="h-auto w-full" />
                            <figcaption class="pt-2 text-sm">{image.description}</figcaption>
                        </figure>
                    {/each}
                </div>
            </section>
        {/if}
    </article>
</main>
