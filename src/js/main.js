//import pokemons from "./data.js";

let pokemons = document.querySelector (".list-pokemons");
let nombrepokemons = [ "ivysaur", "venusaur", "Charmander" ];

pokemons.innerHTML = `

<article class="list-pokemons-item">
          <div class="list-pokemons-item-content">
            <img
              src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png"
              alt="pokemon-1"
            />
            <h3>
              Bulbasaur
              <span>gras</span>
            </h3>
          </div>
        </article>

        <article class="list-pokemons-item">
          <div class="list-pokemons-item-content">
            <img
              src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png"
              alt="pokemon-1"
            />
            <h3>
              Bulbasaur
              <span>gras</span>
            </h3>
          </div>
        </article>

        <article class="list-pokemons-item">
          <div class="list-pokemons-item-content">
            <img
              src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png"
              alt="pokemon-1"
            />
            <h3>
              Bulbasaur
              <span>gras</span>
            </h3>
          </div>
        </article>
        


`




//const pokemons = document.querySelector(".list-pokemons")
//const arrayList = ['item1', 'item2', 'item3']
//const template= document.querySelector("template-li").content
//const fragment = document.createDocumentFragment()

//arrayList.forEach (item=> {
  //  fragment +="";
    //<li class ="list">
      //  <b>Nombre:</b><span class ="text">$item</span>
    //</li>
//})

//list.innerHTML= fragment