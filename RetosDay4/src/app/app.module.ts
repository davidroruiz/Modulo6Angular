import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormularioCasiCrudComponent } from './pages/formulario-casi-crud/formulario-casi-crud.component';
import { FormularioConsultarComponent } from './pages/formulario-consultar/formulario-consultar.component';

@NgModule({
  declarations: [
    AppComponent,
    FormularioCasiCrudComponent,
    FormularioConsultarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
