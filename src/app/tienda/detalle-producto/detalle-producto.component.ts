import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { VisibilidadHeroComponentService } from 'src/app/generales/hero/visibilidad-hero/visibilidad-hero-component.service';
import { MainIdService } from 'src/app/generales/main-id-service/main-id.service';

@Component({
  templateUrl: './detalle-producto.component.html',
  styleUrls: ['./detalle-producto.component.css']
})
export class DetalleProductoComponent implements OnInit {

  constructor(
    private mainIdService: MainIdService,
    private visibilidadHeroService: VisibilidadHeroComponentService,


  ){}

  ngOnInit(): void {
    this.mainIdService.setearIdHeroInicio();
    this.visibilidadHeroService.ocultarElHero();

  }

}
