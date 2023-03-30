import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import {RouterModule} from '@angular/router';
import { HeroComponent } from './hero/hero.component';
import {HttpClientModule} from '@angular/common/http';
import { BusquedaComponent } from './busqueda/busqueda.component';
import { FormsModule } from '@angular/forms';







@NgModule({
    declarations: [
        HeaderComponent,
        FooterComponent,
        HeroComponent,
        BusquedaComponent
    ],
    exports: [
        HeaderComponent,
        FooterComponent,
        HeroComponent,
        BusquedaComponent
    ],
    imports: [
        CommonModule,
        RouterModule,
        HttpClientModule,
        FormsModule

    ]
})
export class GeneralesModule { }
