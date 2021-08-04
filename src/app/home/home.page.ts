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
    {
      numero: '007',
      nome: 'Squirtle',
      foto: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/007.png',
      tipos: [
        'Water'
      ]
    },
    {
      numero: '012',
      nome: 'Butterfree',
      foto: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/012.png',
      tipos: [
        'Bug', 'Flying'
      ]
    },
    {
      numero: '016',
      nome: 'Pidgey',
      foto: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/016.png',
      tipos: [
        'Normal', 'Flying'
      ]
    },
    {
      numero: '023',
      nome: 'Ekans',
      foto: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/023.png',
      tipos: [
        'Poison'
      ]
    },
    {
      numero: '048',
      nome: 'Venonat',
      foto: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/048.png',
      tipos: [
        'Bug', 'Poison'
      ]
    },
    {
      numero: '052',
      nome: 'Meowth',
      foto: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/052.png',
      tipos: [
        'Normal'
      ]
    },


  ];

  constructor() {}

}
