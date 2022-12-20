import { VisibilidadHeroComponentService } from './visibilidad-hero/visibilidad-hero-component.service';
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css'],
  changeDetection: ChangeDetectionStrategy.Default
})
export class HeroComponent implements OnInit{
  estaVisible: boolean;

  constructor(
    private visibilidadService:VisibilidadHeroComponentService
  ){
    this.estaVisible = true;
  }
  ngOnInit(): void {
    this.visibilidadService.cambioDeVisibilidad.subscribe((estaVisibleSegunService:boolean)=>{
      this.estaVisible = estaVisibleSegunService;
    });
  }
}
