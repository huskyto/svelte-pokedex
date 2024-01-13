# Pokedex

Small Pokedex project using Svelte.

It started as a 24h challenged from a friend to learn Svelte and create a Pokedex-like app to his specifications.

IMPORTANT: This is not supposed to be used with any degree of seriousness, and was only made as a challenge and POC.

## Try it out!

1. Clone the repository.
2. Inside the cloned folder, run:

```bash
npm run dev -- --open
```

( Make sure you have the latest version of node and npm )

3. For now you can try manually entering the pokemon name or number in the url after 'pokedex'. For example:

```bash
localhost:0000/pokedex/pikachu
```

## Current Features.

As requested by my challenging friend.

- Retrieves information regarding the Pokemon and displays it.
- Retrieves an image to go along with it (when it wants to work > >)
- Kinda looks like a Pokedex.
- Speech synth for the description for MAXIMUM IMMERSION (kinda sucks, tbh).
- Search by id, name and types.

## Planed Features.

As requested by my challenging friend.

- Next / Prev.
- Toggle shiny version (requested later)

## Data sources

### https://pokeapi.co

It's the backbone of this project. Used to retrieve all information regarding the selected Pokemon.

### https://pokemondb.net/

Used a copy of their list of all pokemon to do the search.

### https://github.com/PokeAPI/sprites

For the pokemon sprites displayed.
