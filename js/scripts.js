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
 
for (let i = 0; i < pokemonList.length; i++) {
    if (pokemonList[i].height < 2) {
        document.write('<br>' + pokemonList[i].name + ' (height: 1) ' + '<br>');
    }else if (pokemonList[i].height > 2) {
        document.write('<br>' + pokemonList[i].name + ' (height: 3) -Wow! That\'s big! ' + '<br>');
    }else {
        document.write('<br>' + pokemonList[i].name + ' (height: 2) ' + '<br>');
    }
}
