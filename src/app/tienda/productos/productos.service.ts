import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ProductoComponent } from '../listado-productos/producto/producto.component';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {
  productoBuscado!: String

  constructor(private http: HttpClient) { }


  public productoPersonalizado(){
    return this.http.get('http://localhost:8095/productosPersonalizados');
  }

  //este servicio me retorna los productos encontrados en la busqueda
  //public buscarProductoPersonalizado(nombreProducto:String):Observable<any[]>{
    //return this.http.get<any[]>('http://localhost:8095/productosPersonalizados/search/findByNombre?nombreProd=nombreProducto');
  //}




}
