import { Component, OnInit, Input } from '@angular/core';
import { HeaderComponent } from 'src/app/generales/header/header.component';
import { ProductosService } from '../productos/productos.service';

@Component({
  templateUrl: './listado-productos.component.html',
  styleUrls: ['./listado-productos.component.css'],
})
//En vez de hardcodear una lista debo llamar una API/
export class ListadoProductosComponent implements OnInit {
  @Input() productosResultados!: any;

  constructor(private productoService: ProductosService, ) {}

  //aca deberia pasarle al productosREsultados o la lista completa o el resultado de la
  //busqueda de productos
  ngOnInit(): void {
    this.productoService.productoPersonalizado().subscribe((producto: any) => {
      this.productosResultados = producto;
    });
  }
}
