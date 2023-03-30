import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TiendaRoutingModule } from './tienda-routing.module';
import { ListadoProductosComponent } from './listado-productos/listado-productos.component';
import { ProductoComponent } from './listado-productos/producto/producto.component';
import { GeneralesModule } from '../generales/generales.module';


@NgModule({
  declarations: [
    ListadoProductosComponent,
            ProductoComponent,

  ],
  imports: [
    CommonModule,
    TiendaRoutingModule,
    GeneralesModule
  ]
})
export class TiendaModule { }

