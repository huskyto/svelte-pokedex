# Pokedex

Small Pokedex project using Svelte.

It started as a 24h challenged from a friend to learn Svelte and create a Pokedex-like app to his specifications.

IMPORTANT: This is not supposed to be used with any degree of seriousness, and was only made as a challenge and POC.

The challenge came from RoyMG (thanks for the challenge, it was fun!). Go check his repos:

https://github.com/RoyMG

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
- Next / Prev buttons.
- Toggle shiny version (requested later).

## Planed Features.

As requested by my challenging friend.

- Nothing more to do!

## Data sources

### https://pokeapi.co

It's the backbone of this project. Used to retrieve all information regarding the selected Pokemon, as well as the sprites.

### https://pokemondb.net/

Used a copy of their list of all pokemon to do the search.


## Personal stats

The challenge was to do as much of this project as possible in 24 hours; however, I was only able to work in relatively small pockets of time, which ended up being spread along three days.

This first one, which took about 5 hours included:

- Learning basic Svelte and going through part of the tutorial.
- Layout the app.
- Implement style from reference.
- Retrieve the data from pokeapi.co.
- Add text-to-voice to the description.

The second one, which was about 3 hours included:

- Update image source so it worked consistently.
- Add quick search side menu.
- Get the pokemons information for the search (I list it as its own thing because this took most of my time)

Since those two together are about 8 hours, I would consider it a fair substitute for a day, and the original 24h challenge.

However, I still wanteded to add a couple more things, even if they didn't count for the original challenge. They took about an additional 3 hours.

- Next/Prev buttons.
- Shiny toggle.
- Add some animations.
- Fix the navigation. Again.
