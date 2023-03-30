import { CarritoComponent } from './generales/carrito/carrito.component';
import { InicioComponent } from './inicio/inicio.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetalleProductoComponent } from './tienda/detalle-producto/detalle-producto.component';

const routes: Routes = [
  {path:'', component: InicioComponent},
  {path:'carrito', component: CarritoComponent},
  {path: 'tienda', loadChildren: () => import('./tienda/tienda.module').then(m => m.TiendaModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
