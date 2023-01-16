//DECLARAMOS EL FORM
const formularioPokemon = document.getElementById("formulario__pokemon");

const escogerPokemon = (data) => {
    data.preventDefault();
    var pokemon = document.getElementById("input__pokemon").value;

    var pokeAPI = `https://pokeapi.co/api/v2/pokemon/${pokemon}`;
    fetch(pokeAPI).then(res =>{
        res.json().then(data =>{
            console.log(data)
        })
    })

    console.log(pokemon);
    formularioPokemon.reset();
}



//PREGUNTAR COMO PUEDO USAR LA VAR POKEMON EN OTRA FUNCION
//const generarPokeAPI = () =>{
//     var pokeAPI = `https://pokeapi.co/api/v2/pokemon/${pokemon}`;
//    fetch(pokeAPI).then(res =>{
//        res.json(),then(data =>{
//            console.log(data)
//            hydratePokemon(data);
//        })
//    })
//}

formularioPokemon.addEventListener("submit", escogerPokemon);