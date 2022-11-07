let pokemonList = [
    {name: 'Charmander', height: 3, types: 'fire'},
    {name:'Oddish', height: 1, types: ['grass','poison']},
    {name: 'Cleffa', height: 2, types: 'fairy'},
];
 
for (let i = 0; i < pokemonList.length; i++) {
    if (pokemonList[i].height < 2) {
        document.write(pokemonList[i].name + ' (height: 1) ');
    }else if (pokemonList[i].height > 2) {
        document.write(pokemonList[i].name + ' (height: 3) ');
    }else {
        document.write(pokemonList[i].name + ' (height: 2) ');
    }
}
