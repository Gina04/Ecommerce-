import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { ProductosService } from 'src/app/tienda/productos/productos.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeaderComponent {



}
