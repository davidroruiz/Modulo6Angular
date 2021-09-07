import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Ciudad } from '../../models/ciudad';
import { CiudadService } from '../../shared/ciudad.service';

@Component({
  selector: 'formulario-consultar',
  templateUrl: './formulario-consultar.component.html',
  styleUrls: ['./formulario-consultar.component.scss']
})
export class FormularioConsultarComponent implements OnInit {

  public ciudades: Ciudad[];
  public codigo : string;

  constructor(
    private ciudadService:CiudadService,
    private activatedRoute: ActivatedRoute
  ) {
  this.ciudades = ciudadService.getAll();
  this.codigo = this.activatedRoute.snapshot.params.codigo;
  }

  ngOnInit(): void {
  
  }

 public getCiudades(code:string){
   if(code){
    this.ciudades = [this.ciudadService.getOne(code)];
   }else{
    this.ciudades = this.ciudadService.getAll();
    console.log(this.ciudadService.getAll());
   }
   
   
 }

}
