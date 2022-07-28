import { Component, OnInit } from '@angular/core';
import { ServicesService } from '../services.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
})
export class Tab1Page implements OnInit {
  constructor(public pokemonService: ServicesService) {}

  ngOnInit() {
    this.pokemonService.buscarTodosPokemon().subscribe((dados) => {
      console.log(dados);
    });
  }
}
