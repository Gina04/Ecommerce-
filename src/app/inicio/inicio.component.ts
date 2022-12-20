import { VisibilidadHeroComponentService } from './../generales/hero/visibilidad-hero/visibilidad-hero-component.service';
import { Component } from '@angular/core';
import { MainIdService } from '../generales/main-id-service/main-id.service';

@Component({
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent {

  constructor(
    private mainIdService:MainIdService,
    private visibilidadHeroService: VisibilidadHeroComponentService, 
  ){

  }
  ngOnInit(): void {
    this.mainIdService.setearIdHeroInicio();
    this.visibilidadHeroService.hacerVisibleElHero();
    
  }

}
