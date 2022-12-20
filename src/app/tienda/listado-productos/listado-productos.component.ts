import { Component } from '@angular/core';

@Component({
  templateUrl: './listado-productos.component.html',
  styleUrls: ['./listado-productos.component.css']
})
//En vez de hardcodear una lista debo llamar una API/
export class ListadoProductosComponent {
resultados=[
  {
    nombreProducto: "Remera blanca básica",
    detalleProducto:"Foto Messi, espalda",
    precio: 2345
  },
  {
    nombreProducto: "Pantalon gris",
    detalleProducto:"Emoji smile, pierna izq",
    precio: 4567
  },
  {
    nombreProducto: "Gorra negra",
    detalleProducto:"Frase, en vicera",
    precio: 1000
  }

]

}
