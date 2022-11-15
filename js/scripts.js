let pokemonRepository = (function () {
    let pokemonList = [
        {
            name: 'Charmander', 
            height: 3, 
            types: 'fire'
        },
        {
            name:'Oddish', 
            height: 1, 
            types: ['grass','poison']
        },
        {
            name: 'Cleffa', 
            height: 2, 
            types: 'fairy'
        },
    ];

    function add(pokemon) {
        pokemonList.push(pokemon);
    }

    function getAll() {
        return pokemonList;
    }

    return {
        add: add,
        getAll: getAll
    };
})();

pokemonRepository.forEach(function getAll() {
    document.write('<br>' + pokemon.name + ' - Height: ' + pokemon.height +'<br>')
});
