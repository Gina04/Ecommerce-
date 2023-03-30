import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { MainIdService } from 'src/app/generales/main-id-service/main-id.service';

@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styleUrls: ['./producto.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductoComponent {
  @Input() producto: any = null;

  constructor(private carritoServicio: MainIdService) {}

  agregarAlCarrito() {
    this.carritoServicio.agregarProducto(this.producto);
  }


}
