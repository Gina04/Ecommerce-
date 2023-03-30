import { NgModule} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GeneralesModule } from './generales/generales.module';
import { InicioComponent } from './inicio/inicio.component';
import { CarritoComponent } from './generales/carrito/carrito.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { TiendaModule } from './tienda/tienda.module';



@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    CarritoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    GeneralesModule,
    FormsModule,
    HttpClientModule,
    TiendaModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
