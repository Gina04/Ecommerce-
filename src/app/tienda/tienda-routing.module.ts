import { ListadoProductosComponent } from './listado-productos/listado-productos.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetalleProductoComponent } from './detalle-producto/detalle-producto.component';


const routes: Routes = [
  {path:'', component:ListadoProductosComponent},
  {path: 'detalle-producto/:id', component: DetalleProductoComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TiendaRoutingModule { }
