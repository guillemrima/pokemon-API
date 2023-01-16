//DECLARAMOS EL FORM
const formularioPokemon = document.getElementById("formulario__pokemon");

const escogerPokemon = (data) => {
    data.preventDefault();
    var pokemon = document.getElementById("input__pokemon").value;
    console.log(pokemon);
    formularioPokemon.reset();
}

formularioPokemon.addEventListener("submit", escogerPokemon);