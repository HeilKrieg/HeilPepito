document.getElementById('search-button').addEventListener('click', async () => {
    const pokemonNumber = document.getElementById('pokemon-number').value;
    const pokemonInfo = document.getElementById('pokemon-info');

    pokemonInfo.innerHTML = '<p>Buscando...</p>';

    if (!pokemonNumber || pokemonNumber < 1) {
        pokemonInfo.innerHTML = '<p>Introduce un número válido.</p>';
        return;
    }

    try {
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonNumber}`);
        if (!response.ok) throw new Error('No se encontró el Pokémon');
        const pokemon = await response.json();

        pokemonInfo.innerHTML = `
            <img src="${pokemon.sprites.front_default}" alt="${pokemon.name}">
            <p><strong>${pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)}</strong></p>
            <p>Tipo: ${pokemon.types.map(type => type.type.name).join(', ')}</p>
        `;
    } catch (error) {
        pokemonInfo.innerHTML = '<p>No se encontró el Pokémon.</p>';
    }
});