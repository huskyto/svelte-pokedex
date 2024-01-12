
<script lang="ts">
    import { onMount } from "svelte";
    import { page } from '$app/stores';
    import LayoutGrid, { Cell } from '@smui/layout-grid';
    import DataRow from '$lib/DataRow.svelte';
    import Header from "$lib/Header.svelte";
    import GeneraRow from "$lib/GeneraRow.svelte";
    import DescriptionRow from "$lib/DescriptionRow.svelte";

    const pokeid = $page.params.pokeid;
    const imgRe = /archives.bulbagarden.net\/media\/upload\/.+?.png(?!\/)/g;

    let pokemon = {
        id: "",
        idpad: "",
        name: "",
        genera: "",
        weight: "",
        height: "",
        description: "...",
        color: "",
        shape: "",
        type1: "",
        type2: "",
        imgUrl: ""
    };

    onMount(async () => {
        fetch(`https://pokeapi.co/api/v2/pokemon/${pokeid}/`)
            .then(response => response.json())
            .then(data => {
                pokemon.name = capitalize(data.name);
                pokemon.id = data.id;
                pokemon.idpad = ("0000" + data.id).slice(-4);

                let height = (data.height * 0.1).toString();
                height = height.slice(0, (height.indexOf(".")) + 3);
                pokemon.height = height + " m";

                let weight = (data.weight * 0.1).toString();
                weight = weight.slice(0, (weight.indexOf(".")) + 3);
                pokemon.weight = weight + " kg";

                let t1 = data.types[0].type.name;
                pokemon.type1 = capitalize(t1);

                if (data.types.length > 1) {
                    let t2 = data.types[1].type.name;
                    pokemon.type2 = capitalize(t2);
                }

                getExtra(data.species.url);
                getImageLink();
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

                pokemon.description = data.flavor_text_entries
                    .filter((fl: any) => fl.language.name === 'en').pop().flavor_text;

                pokemon.color = capitalize(data.color.name);
                pokemon.shape = capitalize(data.shape.name);
            }).catch(error => {
                console.log(error);
                return [];
            });
    }

    function capitalize(str: string): string {
        return str.charAt(0).toUpperCase() + str.slice(1);
    }

    async function getImageLink() {
        fetch(`https://bulbapedia.bulbagarden.net/wiki/${pokemon.name}_(Pok%C3%A9mon)`) // Skip CORS... sometimes
            .then(r => 
                fetch(`https://bulbapedia.bulbagarden.net/wiki/File:${pokemon.idpad}${pokemon.name}.png`)
                    .then(res => res.text())
                    .then(body => {
                        const matched = body.match(imgRe);
                        if (matched) {
                            pokemon.imgUrl = "https://" + matched[0];
                        }
                    })
                )
    }
</script>

<LayoutGrid class="main-grid">
    <Cell span={6} class="image-holder">
        <!-- Picture section -->
        <img class="poke-image" src={pokemon.imgUrl} alt="{pokemon.name}... hopefully" />
    </Cell>
    <Cell span={6}>
        <!-- Data section -->
        <LayoutGrid>
            <Header id={pokemon.id.toString()} name={pokemon.name} />
            <GeneraRow genera={pokemon.genera} />

            <Cell span={12} class="data-table">
                <LayoutGrid>
                    <DataRow name="Type 1" value={pokemon.type1} />
                    {#if pokemon.type2.length > 0}
                        <DataRow name="Type 2" value={pokemon.type2} />
                    {/if}
                    <DataRow name="Height" value={pokemon.height} />
                    <DataRow name="Weight" value={pokemon.weight} />
                    <DataRow name="Color" value={pokemon.color} />
                    <DataRow name="Shape" value={pokemon.shape} />
                </LayoutGrid>
            </Cell>

            <DescriptionRow description={pokemon.description} />
        </LayoutGrid>
    </Cell>
</LayoutGrid>

<style>
    .poke-image {
        width: -webkit-fill-available;
    }
</style>
