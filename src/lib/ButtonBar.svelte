<script lang="ts">
    import { afterUpdate } from 'svelte';
    import IconButton, { Icon } from '@smui/icon-button';
    import { DataProvider, PokemonDef } from '$lib/DataProvider';
    import { fade } from 'svelte/transition';

    export let pokemon: PokemonDef;
    export let frontOrBack = 0;
    export let defaultOrShiny = 0;
    const provider = DataProvider.getInstance();

    let hasPrev = false;
    let hasNext = false;

    afterUpdate(async () => {
        hasPrev = +pokemon.id > 1;
        let max = await provider.getData().then(data => Math.max(...data.map(p => +p.id)))
        hasNext = +pokemon.id < max;
    });

    async function gotoPrev() {
        window.location.href = `./${+pokemon.id - 1}`;
    }

    async function gotoNext() {
        window.location.href = `./${+pokemon.id + 1}`;
    }

    async function toggleShiny() {
        defaultOrShiny = 1 - defaultOrShiny;
    }

    function toggleBack() {
        frontOrBack = 1 - frontOrBack;
    }

</script>

{#if pokemon.name.length == 0}
    <div />
{:else}
    <div class="button-bar" transition:fade|global={{ delay: 500, duration: 800 }} >
        {#if hasPrev}
            <IconButton on:click={() => gotoPrev()}>
                <Icon class="material-icons">arrow_back_ios</Icon>
            </IconButton>
        {:else}
            <div />
        {/if}
        
        <IconButton on:click={() => toggleShiny()} pressed={defaultOrShiny}>
            <Icon class="material-icons icon-on" on>auto_awesome</Icon>
            <Icon class="material-icons">auto_awesome</Icon>
        </IconButton>
        
        <IconButton on:click={() => toggleBack()} pressed={frontOrBack}>
            <Icon class="material-icons icon-on" on>loop</Icon>
            <Icon class="material-icons">loop</Icon>
        </IconButton>

        {#if hasNext}
            <IconButton on:click={() => gotoNext()}>
                <Icon class="material-icons">arrow_forward_ios</Icon>
            </IconButton>
        {:else}
            <div />
        {/if}
    </div>
{/if}

<style>
    .button-bar {
        text-align: center;
        color: white;
    }
</style>
