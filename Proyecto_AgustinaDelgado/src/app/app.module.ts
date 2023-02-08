import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './Componentes/navbar/navbar.component';
import { BannerComponent } from './Componentes/banner/banner.component';
import { DescripComponent } from './Componentes/Sobre-mi/descrip/descrip.component';
import { EstudiosComponent } from './Componentes/Sobre-mi/estudios/estudios.component';
import { ExpComponent } from './Componentes/Sobre-mi/exp/exp.component';
import { HabilidadesComponent } from './Componentes/Sobre-mi/habilidades/habilidades.component';
import { ProyectosComponent } from './Componentes/proyectos/proyectos.component';
import { FooterComponent } from './Componentes/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    BannerComponent,
    DescripComponent,
    EstudiosComponent,
    ExpComponent,
    HabilidadesComponent,
    ProyectosComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
