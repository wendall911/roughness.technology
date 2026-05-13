<script lang="ts">
    import type { PageData } from './$types';

    export let data: PageData;
</script>

<main class="mx-4 my-12 flex max-w-5xl flex-col gap-8 self-center">
    <h1>Portfolio</h1>
    <p class="max-w-2xl">Browse project summaries and open each item for full details.</p>

    <section class="grid gap-4 sm:grid-cols-2">
        {#each data.projects as project (project.slug)}
            <article class="rounded border p-4">
                <h2 class="text-2xl">{project.name}</h2>
                <p class="text-sm opacity-80">{project.date}</p>
                <p>{project.description}</p>
                <!-- eslint-disable-next-line svelte/no-navigation-without-resolve -->
                <a class="font-semibold underline" href={`/portfolio/${project.slug}/`}>View details</a>
            </article>
        {/each}
    </section>
</main>
