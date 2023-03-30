import { VisibilidadHeroComponentService } from '../hero/visibilidad-hero/visibilidad-hero-component.service';
import { MainIdService } from '../main-id-service/main-id.service';
import { Component, Input, OnInit } from '@angular/core';
import { ProductoComponent } from 'src/app/tienda/listado-productos/producto/producto.component';
import { ListadoProductosComponent } from 'src/app/tienda/listado-productos/listado-productos.component';

@Component({
  templateUrl: './carrito.component.html',
  styleUrls: ['./carrito.component.css']
})

//aca debo tener la logica para mostras todos los datos que quiero mostrar
//en pantalla, como una Api Rest
export class CarritoComponent implements OnInit{
  productos!:any[];
  @Input() producto: any = null;
  constructor(
    private mainIdService:MainIdService,
    private visibilidadHeroService: VisibilidadHeroComponentService
  ){

  }

  ngOnInit(): void {
    this.mainIdService.setearIdHeroInicio();
    this.visibilidadHeroService.ocultarElHero();
    this.productos= this.mainIdService.getProductos();

  }

  //Implementar las funciones
  comprarProducto(){
    alert ("Su compra fue exitosa!")
  }

  sacarDeCarrito(producto: ProductoComponent){
     this.mainIdService.sacarProducto(producto);
  }


}
