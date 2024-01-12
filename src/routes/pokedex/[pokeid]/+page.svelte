
<script lang="ts">
    import { onMount } from "svelte";
    import { page } from '$app/stores';
    import LayoutGrid, { Cell } from '@smui/layout-grid';
    import DataRow from '$lib/DataRow.svelte';
    import Header from "$lib/Header.svelte";
    import GeneraRow from "$lib/GeneraRow.svelte";
    import DescriptionRow from "$lib/DescriptionRow.svelte";

    const pokeid = $page.params.pokeid;
    let pokemon = {
        id: -1,
        name: "undef",
        genera: "",
        description: "..."
    };

    onMount(async () => {
        fetch(`https://pokeapi.co/api/v2/pokemon/${pokeid}/`)
            .then(response => response.json())
            .then(data => {
                pokemon.name = data.name.charAt(0).toUpperCase() + data.name.slice(1);
                pokemon.id = data.id;

                getExtra(data.species.url);
            }).catch(error => {
                console.log(error);
                return [];
            });
    });

    async function getExtra(url: string) {
        fetch(url)
            .then(response => response.json())
            .then(data => {
                pokemon.genera = data.genera
                    .filter((gen: any) => gen.language.name === 'en')[0].genus;
            }).catch(error => {
                console.log(error);
                return [];
            });
    }
</script>

<LayoutGrid class="main-grid">
    <Cell span={6}>
        <!-- Picture section -->
    </Cell>
    <Cell span={6}>
        <!-- Data section -->
        <LayoutGrid>
            <Header id={pokemon.id.toString()} name={pokemon.name} />
            <GeneraRow genera={pokemon.genera} />

            <Cell span={12} class="data-table">
                <LayoutGrid>
                    <DataRow name="Id" value={pokemon.id.toString()} />
                    <DataRow name="Name" value={pokemon.name} />
                    <DataRow name="Genera" value={pokemon.genera} />
                </LayoutGrid>
            </Cell>

            <DescriptionRow description={pokemon.description} />
        </LayoutGrid>
    </Cell>
</LayoutGrid>

<h3>Selected Pokemon:</h3>

<p>Id: {pokemon.id}</p>
<p>Name: {pokemon.name}</p>
<p>Genre: {pokemon.genera}</p>
