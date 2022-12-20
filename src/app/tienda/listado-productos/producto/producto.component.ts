import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styleUrls: ['./producto.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProductoComponent {
 @Input() producto: any = null;

 //llamo al back y le paso el id del producto => this.producto.id

 respuestaAlClick(){
 alert('boton presionado'); 
 }
}
