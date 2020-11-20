const apiURL = 'https://pokeapi.co/api/v2/pokemon';

const getPokemones = async () => {
  try {
    const res = await fetch(apiURL);
    const data = await res.json();
    pokemones = data.results;
    // pokemones.find
    console.log(data)
    map(pokemones);
    filter(pokemones);
  } catch (error) {
    console.log(error);
  }
};

getPokemones();

map = (pokemones) => {
  const pokemonesMapeados = pokemones.map(pokemon => `<li>${pokemon.name}</li>`).join('');
  console.log(pokemonesMapeados);
};

filter = (pokemones) => {
  // console.log(pokemones.find(pokemon => pokemon.name === "asd"))
  const pokemonesFiltrados = pokemones.filter(pokemon => pokemon.name === "ivysaur");
  console.log(pokemonesFiltrados);
};