<script lang="ts">
    import LayoutGrid, { Cell } from '@smui/layout-grid';
    import SearchTag from '$lib/SearchTag.svelte'
    import { DataProvider, PokemonDef } from '$lib/DataProvider';
    import { goto } from '$app/navigation';
    import { slide } from 'svelte/transition';

	export let open = false;

    const provider = DataProvider.getInstance();
    let searchText = "";
    let searchResult: Array<PokemonDef> = [];

    async function doSearch() {
        searchResult = await provider.doSearch(searchText);
    }

    async function goToPage(target: PokemonDef) {
        window.location.href = `./${target.id}`;    // This works well, but feels hacky. idk.
            // TODO: check why I have to do this weird thing for it to work :/
        // goto('/dummy').then(
        //     () => goto(`/pokedex/${target.id}`, { replaceState: true, invalidateAll: true })
        // );
    }
</script>

<aside class="relative side-menu" class:open>
    <LayoutGrid class="menu-grid">
        <Cell span={12} class="quick-search-title-row">
            <div class="quick-search-title-div">
                <p>Quick Search</p>
            </div>
        </Cell>
        <Cell span={12}>
            <div class="search-description">
                <p>Search by name, id or type</p>
            </div>
        </Cell>
        <Cell span={12}>
            <div class="search-input">
                <input name="search-data" bind:value={searchText} type="search-data" on:input={doSearch}>
            </div>
        </Cell>
        <Cell span={12} class="search-result">
            <div>
                {#each searchResult as pokemon}
                    {#if searchResult.length > 20}
                        <button on:click={() => goToPage(pokemon)}>
                            <SearchTag pokemon={pokemon} searchText={searchText} />
                        </button>
                    {:else}
                        <button on:click={() => goToPage(pokemon)} transition:slide|global>
                            <SearchTag pokemon={pokemon} searchText={searchText} />
                        </button>
                    {/if}
                {/each}
            </div>
        </Cell>
    </LayoutGrid>
</aside>

<style>
	aside {
		left: -100%;
		transition: left 0.3s ease-in-out;
	}
	
	.open {
		left: 0
	}

    .relative {
        position: relative;
    }

    .side-menu {
        background-color: rgb(219, 219, 219);
        width: 30vw;
        height: 60vh;
        margin-bottom: -60vh;
        z-index: 10;
        filter: drop-shadow(2px 4px 6px black);
        margin-top: 15px;
        padding-left: 2px;
        padding-right: 2px;
    }

    .quick-search-title-div {
        background-color: black;
        font-size: 24px;
        color: white;
        height: 50px;
        margin-top: 15px;
    }
    .search-description {
        margin-top: 20px;
        margin-bottom: 10px;
        font-size: 18px;
    }
    .search-input input {
        font-size: 20px;
        text-align: center;
    }

    div {
        display: grid;
        text-align: center;
        margin: 5px;
    }

    p {
        margin: 0px;
        align-self: center;
    }
</style>