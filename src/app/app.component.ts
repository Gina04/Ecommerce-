import { MainIdService } from './generales/main-id-service/main-id.service';
import { AfterViewInit, Component,ChangeDetectorRef } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit{
  title = 'ecommerce';
  idContainer!:string;


  constructor(
    private mainIdService: MainIdService, 
    private cdr: ChangeDetectorRef

    ){
    this.idContainer='hero-inicio';
  }
  ngAfterViewInit(): void {
    this.mainIdService.cambioDeId.subscribe((id:string)=>{
      this.idContainer = id;
      this.cdr.detectChanges();
    });
  }
}
