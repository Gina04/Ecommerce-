import { Injectable } from '@angular/core';

import {EventEmitter} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MainIdService {
  private id: string;
  cambioDeId: EventEmitter<string>;

  constructor() {
    this.id ='hero-inicio';
    this.cambioDeId = new EventEmitter();
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
}
