
export class DataProvider {

    // pokeRgx = /infocard-cell-data">(\d+).+?\/pokedex\/(\w+).+?\/type\/(\w+).+?(<\/td>|\/type\/(\w+))/g;
    // source = "https://pokemondb.net/pokedex/all";    // Can't use due to CORS.
    source = "/pokelist.csv";
    cache: Array<PokemonDef> = [];

    private async retrieveData() {
        return fetch(this.source)
            .then(res => res.text())
            .then(body => {
                // const matched = [...body.matchAll(this.pokeRgx)];   // this was for pokemondb.net
                // for (const match of matched) {
                //     if (match.length > 2) {
                //         const id = match[1];
                //         const name = match[2];
                //         const type1 = match[3];
                //         let type2 = "";
                //         if (match[4].length > 6) type2 = match[5];

                //         this.cache.push(new PokemonDef(id, name, type1, type2));
                //     }
                //     match[1]
                // }
                this.cache = body.split('\n')
                        .map(line => line.split(','))
                        .map(sl => new PokemonDef(sl[0], sl[1], sl[2], sl[3]));
            });
    }

    private async getData(): Promise<Array<PokemonDef>> {
        if (this.cache.length == 0) {
            await this.retrieveData();
        }

        return this.cache;
    }
    
    public async doSearch(searchParam: string): Promise<Array<PokemonDef>> {
        let data = await this.getData();
        if (data.length == 0) return data;

        let filtered =  data.filter((poke) => 
            poke.id.includes(searchParam)
            || poke.name.includes(searchParam)
            || poke.type1.includes(searchParam)
            || poke.type2.includes(searchParam));

        return filtered;
    }

}

export class PokemonDef {
    id: string;
    name: string;
    type1: string;
    type2: string;
    
    constructor(id: string, name: string, type1: string, type2: string) {
        this.id = id;
        this.name = name;
        this.type1 = type1;
        this.type2 = type2
    }
}