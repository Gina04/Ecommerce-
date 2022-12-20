import { Injectable, EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class VisibilidadHeroComponentService {
  cambioDeVisibilidad: EventEmitter<boolean>;
  private componenteHeroEstaVisible= true;

  constructor() {
    this.cambioDeVisibilidad = new EventEmitter();
   }

   public hacerVisibleElHero(){
    this.componenteHeroEstaVisible=true;
    this.notificarCambio();
   }

   public ocultarElHero(){
    this.componenteHeroEstaVisible= false;
    this.notificarCambio();

   }

   private notificarCambio(){
    this.cambioDeVisibilidad.emit(this.componenteHeroEstaVisible);
   }

}
