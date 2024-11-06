<script lang="ts">
    import Contacts from '$comp/contacts.svelte';
    //import Portfolio from "$comp/portfolio.svelte";
    import { INFO } from '$content/info';
    import { METADATA } from '$content/info';
</script>

<main class="mx-4 my-12 flex max-w-5xl flex-col items-center gap-6 self-center">
    <article class="mb-8 flex flex-col gap-8">
        <div class="flex flex-col items-center self-center">
            <h1>{METADATA.title}</h1>
            <span class="text-lg">{METADATA.description}</span>
        </div>

        <p class="max-w-2xl">{INFO.overview}</p>

        <Contacts />
    </article>

    <article class="flex flex-col items-center gap-8" id="portfolio">
        <h2>Projects Portfolio</h2>

        <p class="font-semibold">Portfolio coming soon!</p>
    </article>

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
