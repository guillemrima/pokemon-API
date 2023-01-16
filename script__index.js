//DECLARAMOS EL FORM
const formularioPokemon = document.getElementById("formulario__pokemon");
const containerPokemonCards = document.getElementById("container__cards"); 
let pokemon;


const escogerPokemon = (data) => {
    data.preventDefault();
    pokemon = document.getElementById("input__pokemon").value;
    generarPokeAPI();
    formularioPokemon.reset();
}

const generarPokeAPI = () =>{
    var pokeAPI = `https://pokeapi.co/api/v2/pokemon/${pokemon}`;
    fetch(pokeAPI).then(res =>{
    res.json().then(data =>{
    console.log(data)
    createPokemonCard(data);
})
})
}

const createPokemonCard = (json) =>{
    const pokemonName = json.name;
    const pokemonType = json.types[0].type.name;
    const pokemonImage = json.sprites.front_default;

    console.log(pokemonName);
    console.log(pokemonType);
    console.log(pokemonImage);

    const pokemonCard = document.createElement("div");
    const pokemonCardImage = document.createElement("div");
    const pokemonCardInfo = document.createElement("div");
    const pokemonImageEl = document.createElement("img");
    const pokemonCardNameEl = document.createElement("h2");
    const pokemonCardTypeEl = document.createElement("p");

    pokemonCard.classList.add("pokemonCard");
    pokemonCardImage.classList.add("pokemonCardImage");
    pokemonCardInfo.classList.add("pokemonCardInfo");

    pokemonImageEl.src = pokemonImage;

    containerPokemonCards.appendChild(pokemonCard);
    pokemonCard.appendChild(pokemonCardImage);
    pokemonCard.appendChild(pokemonCardInfo);
    pokemonCardImage.appendChild(pokemonImageEl);
    pokemonCardInfo.appendChild(pokemonCardNameEl);
    pokemonCardInfo.appendChild(pokemonCardTypeEl);

    pokemonCardNameEl.innerHTML = pokemonName;
    pokemonCardTypeEl.innerHTML = pokemonType;
}





formularioPokemon.addEventListener("submit", escogerPokemon);