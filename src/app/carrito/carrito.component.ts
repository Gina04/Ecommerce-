import { VisibilidadHeroComponentService } from './../generales/hero/visibilidad-hero/visibilidad-hero-component.service';
import { MainIdService } from './../generales/main-id-service/main-id.service';
import { Component, OnInit } from '@angular/core';

@Component({
  templateUrl: './carrito.component.html',
  styleUrls: ['./carrito.component.css']
})

//aca debo tener la logica para mostras todos los datos que quiero mostrar
//en pantalla, como una Api Rest
export class CarritoComponent implements OnInit{

  constructor(
    private mainIdService:MainIdService,
    private visibilidadHeroService: VisibilidadHeroComponentService
  ){

  }
  ngOnInit(): void {
    this.mainIdService.setearIdHeroInicio();
    this.visibilidadHeroService.ocultarElHero();
    
  }

}
