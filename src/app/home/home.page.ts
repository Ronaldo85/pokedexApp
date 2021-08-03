import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  //array de pokemons
  // [] => representa um array (lista)
  // {} => representa um objeto (item)
  listaPokemon = [
    {
      numero: '004',
      nome: 'Charmander',
      foto: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/004.png',
      tipos: [
        'Fire'
      ]
    },
    {
      numero: '025',
      nome: 'Pikachu',
      foto: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/025.png',
      tipos: [
        'Eletric'
      ]
    },
    {
      numero: '119',
      nome: 'Seaking',
      foto: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/119.png',
      tipos: [
        'Water'
      ]
    },
    {
      numero: '123',
      nome: 'Scyther',
      foto: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/123.png',
      tipos: [
        'Bug', 'Flying'
      ]
    },

  ];

  constructor() {}

}
