import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import {RouterModule} from '@angular/router';
import { HeroComponent } from './hero/hero.component';
import {HttpClientModule} from '@angular/common/http';




@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    HeroComponent,
  ],
  imports: [
    CommonModule,
    RouterModule, 
    HttpClientModule
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    HeroComponent,
  ]
})
export class GeneralesModule { }
