
<script lang="ts">
    import { onMount } from "svelte";
    import { page } from '$app/stores'

    const pokeid = $page.params.pokeid;
    let pokemon = {
        id: -1,
        name: "undef"
    };
    let pokeExtra = {
        genera: ""
    }

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
                pokeExtra.genera = data.genera
                    .filter((gen: any) => gen.language.name === 'en')[0].genus;
            }).catch(error => {
                console.log(error);
                return [];
            });
    }
</script>

<h3>Selected Pokemon:</h3>

<p>Id: {pokemon.id}</p>
<p>Name: {pokemon.name}</p>
<p>Genre: {pokeExtra.genera}</p>
