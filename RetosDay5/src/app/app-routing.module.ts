import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { MostrarDiscoComponent } from './pages/mostrar-disco/mostrar-disco.component';
import { OperaracionDiscoComponent } from './pages/operaracion-disco/operaracion-disco.component';


const routes: Routes = [
  {path: "home",component:AppComponent},
  {path: "mostrar-disco",component:MostrarDiscoComponent},
  {path: "operacion-disco",component:OperaracionDiscoComponent},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
