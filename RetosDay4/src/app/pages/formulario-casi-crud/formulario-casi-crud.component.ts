import { Component, OnInit } from '@angular/core';
import { Ciudad } from '../../models/ciudad';
import { CiudadService } from '../../shared/ciudad.service';

@Component({
  selector: 'formulario-casi-crud',
  templateUrl: './formulario-casi-crud.component.html',
  styleUrls: ['./formulario-casi-crud.component.scss']
})
export class FormularioCasiCrudComponent implements OnInit {
  public ciudades: Ciudad[];
  constructor(
    private ciudadService:CiudadService
  ) {
  this.ciudades = ciudadService.getAll();
  }

  ngOnInit(): void {
  }
  public sendAdd(data:any){
    const result: Ciudad = data;
    this.ciudadService.add(result);
    console.log(this.ciudadService);
    
  }

  public sendUpdate(data:any){
    let datas=data != "" ? data:undefined

    const result: Ciudad = datas;

    this.ciudadService.edit(result);
    console.log(this.ciudadService);
    
  }

  public sendDelete(codigo:string){
    this.ciudadService.delete(codigo);
    console.log(this.ciudadService);
    
  }
}
