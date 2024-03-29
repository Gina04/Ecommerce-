import { Injectable } from '@angular/core';

import {EventEmitter} from '@angular/core';
import { ProductoComponent } from 'src/app/tienda/listado-productos/producto/producto.component';

@Injectable({
  providedIn: 'root'
})
export class MainIdService {
  private id: string;
  cambioDeId: EventEmitter<string>;
  private productos: ProductoComponent[] = []; //productos del carrito

  constructor() {
    this.id ='hero-inicio';
    this.cambioDeId = new EventEmitter();
  }

  public getProductos(){
    return this.productos;
  }

  public getIdDefault(){
    return "hero-inicio";
  }

  public  setearIdHeroInicio(){
    this.id = "hero-inicio";
    this.notificarCambio();
  }

  public setearIdHeroCarrito(){
    this.id='hero-carrito';
    this.notificarCambio();
  }

  private notificarCambio(){
    this.cambioDeId.emit(this.id);
  }

  agregarProducto(producto: ProductoComponent) {
    this.productos.push(producto);
    console.log(this.productos);

  }

  sacarProducto(producto: ProductoComponent){
    this.productos = this.productos.filter(item => item !== producto);
    console.log(this.productos);
  }

}
