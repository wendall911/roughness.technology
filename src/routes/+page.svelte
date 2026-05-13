<script lang="ts">
    import { resolve } from '$app/paths';
    import Contacts from '$comp/Contacts.svelte';
    import { INFO } from '$content/info';
    import { METADATA } from '$content/info';
    import { PORTFOLIO } from '$features/portfolio/data/projects';
</script>

<main class="mx-4 my-12 flex max-w-5xl flex-col items-center gap-6 self-center">
    <article class="mb-8 flex flex-col gap-8">
        <div class="flex flex-col items-center self-center">
            <h1>{METADATA.title}</h1>
            <span class="text-lg">{METADATA.description}</span>
        </div>

        <p class="max-w-2xl">{INFO.overview}</p>
    </article>

    <article class="flex flex-col items-center gap-8" id="portfolio">
        <h2>Projects Portfolio</h2>
        <div class="flex w-full max-w-4xl flex-col gap-8">
            {#each PORTFOLIO as project (project.slug)}
                <section id={project.slug} class="rounded border p-5">
                    <header>
                        {#if project.logo}
                            <img
                                src={project.logo}
                                alt={project.name}
                                class="logo-img mb-3 h-16 object-contain"
                            />
                        {:else}
                            <h3>{project.name}</h3>
                        {/if}
                        <p class="text-sm opacity-80">{project.date}</p>
                        <p>{project.description}</p>
                    </header>

                    {#if project.sections.length}
                        <div class="mt-4">
                            <h4 class="text-xl font-semibold">{project.sections[0].name}</h4>
                            {#if project.sections[0].description}
                                <p>{project.sections[0].description}</p>
                            {/if}
                        </div>
                    {/if}

                    {#if project.slideshow?.length}
                        <div class="mt-4 grid gap-4 sm:grid-cols-2">
                            {#each project.slideshow.slice(0, 2) as image (image.image)}
                                <figure class="flex h-full flex-col rounded border p-3">
                                    <img
                                        src={image.image}
                                        alt={image.description}
                                        class="h-52 w-full rounded object-contain"
                                    />
                                    <figcaption class="pt-2 text-sm">
                                        {image.description}
                                    </figcaption>
                                </figure>
                            {/each}
                        </div>
                    {/if}

                    <a
                        class="mt-4 inline-block font-semibold underline"
                        href={resolve(`/portfolio/${project.slug}/`)}
                    >
                        View project details
                    </a>
                </section>
            {/each}
        </div>
    </article>

    <Contacts />

    <article class="mb-8 flex flex-col gap-8">
        <div class="flex flex-col items-center self-center">
            <h2>Privacy Policy</h2>
            <p class="my-2 max-w-2xl">
                Roughness Technology, LLC and it's developers take your privacy very seriously. We
                use no third-party analytics or advertising frameworks. Roughness Technology, LLC
                logs no information on you and has no interest in doing such.
            </p>
            <p class="font-semibold">
                Roughness Technology, LLC does not collect, transmit, distribute or sell your data.
            </p>
        </div>
    </article>
</main>
