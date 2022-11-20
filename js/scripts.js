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

    function addListItem(pokemon) {
        let ul = document.querySelector('.pokemon');
        let listItem = document.createElement('li');
        let button = document.createElement('button');
        button.innerText = pokemon.name;
        button.classList.add('button-style');
        listItem.appendChild(button);
        ul.appendChild(listItem);
    }

    return {
        add: add,
        getAll: getAll,
        addListItem: addListItem,
    };
})();

pokemonRepository.getAll().forEach(function (pokemon) {
        pokemonRepository.addListItem(pokemon);
});

