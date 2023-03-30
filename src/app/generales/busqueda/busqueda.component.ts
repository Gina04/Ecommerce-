import { ChangeDetectionStrategy, Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.component.html',
  styleUrls: ['./busqueda.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BusquedaComponent {
  productosEncontrados!:any;
  busqueda:string = ''; //asignacion de valor por defecto

  constructor(private http: HttpClient) {}

    buscarProductos(){
      console.log('Valor de la Búsqueda:', this.busqueda);
      this.http.get(`http://localhost:8095/productosPersonalizados/search/findByNombre?nombreProd=${this.busqueda}`)
      .subscribe((results:any)=>{
        this.productosEncontrados= results;

        console.log("Productos encontrados :)",this.productosEncontrados);
      }
      );


    }



}
