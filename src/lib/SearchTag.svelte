<script lang="ts">
    import LayoutGrid, { Cell } from '@smui/layout-grid';
    import { PokemonDef } from '$lib/DataProvider';

    export let pokemon: PokemonDef;
    export let searchText: string;
</script>

<LayoutGrid>
    <Cell span={1}>
        {#if pokemon.id.includes(searchText)}
            <p style="font-weight: bold;">{pokemon.id}</p>
        {:else}
            <p>{pokemon.id}</p>
        {/if}
    </Cell>
    <Cell span={5}>
        {#if pokemon.name.includes(searchText)}
            <p style="font-weight: bold;">{pokemon.name}</p>
        {:else}
            <p>{pokemon.name}</p>
        {/if}</Cell>
    <Cell span={3}>
        {#if pokemon.type1.includes(searchText)}
            <p style="font-weight: bold;">{pokemon.type1}</p>
        {:else}
            <p>{pokemon.type1}</p>
        {/if}</Cell>
    <Cell span={3}>
        {#if pokemon.type2.includes(searchText)}
            <p style="font-weight: bold;">{pokemon.type2}</p>
        {:else}
            <p>{pokemon.type2}</p>
        {/if}</Cell>
</LayoutGrid>

<style>
    p {
        margin: 0px;
        align-self: center;
    }
</style>