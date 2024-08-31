async function fetchPokemon() {
    const pokemonName = document.getElementById('pokemonName').value.toLowerCase();
    if (!pokemonName) {
        alert('Please enter a Pokemon name');
        return;
    }

    try {
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`);
        if (!response.ok) {
            throw new Error('Pokémon not found');
        }
        const pokemonData = await response.json();
        document.getElementById('name').textContent = pokemonData.name.charAt(0).toUpperCase() + pokemonData.name.slice(1);
        document.getElementById('weight').textContent = `Weight: ${pokemonData.weight / 10} kg`;
        document.getElementById('photo').src = pokemonData.sprites.front_default;
        console.log(pokemonData)

        // Obtener y mostrar tipos del Pokémon
        const types = pokemonData.types.map(typeInfo => typeInfo.type.name).join(', ');
        document.getElementById('weight').textContent += `, Types: ${types}`;

        // Obtener información adicional usando el endpoint de habilidades
        const abilitiesResponse = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`);
        const abilitiesData = await abilitiesResponse.json();
        const abilities = abilitiesData.abilities.map(abilityInfo => abilityInfo.ability.name).join(', ');
        document.getElementById('weight').textContent += `, Abilities: ${abilities}`;

        // Obtener información del Pokémon usando el endpoint de especies
        const speciesResponse = await fetch(`https://pokeapi.co/api/v2/pokemon-species/${pokemonData.id}`);
        const speciesData = await speciesResponse.json();
        const habitat = speciesData.habitat ? speciesData.habitat.name : 'Unknown';
        document.getElementById('weight').textContent += `, Habitat: ${habitat}`;

    } catch (error) {
        alert(error.message);
    }
}
