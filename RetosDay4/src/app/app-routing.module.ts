import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormularioCasiCrudComponent } from './pages/formulario-casi-crud/formulario-casi-crud.component';
import { FormularioConsultarComponent } from './pages/formulario-consultar/formulario-consultar.component';

const routes: Routes = [
  {path: "formulario-casi-crud",component:FormularioCasiCrudComponent},
  {path: "formulario-casi-crud/:codigo",component:FormularioCasiCrudComponent},
  {path: "formulario-consultar",component:FormularioConsultarComponent},
  {path: "formulario-consultar/:codigo",component:FormularioConsultarComponent},
  {path: "**", redirectTo: "formulario-casi-crud", pathMatch: "full"}

];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
