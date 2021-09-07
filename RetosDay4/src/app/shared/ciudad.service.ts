import { Injectable } from '@angular/core';
import { Ciudad } from '../models/ciudad';

@Injectable({
  providedIn: 'root'
})
export class CiudadService {
  public ciudades: Ciudad[];

  constructor() { 
    this.ciudades = [{
      nombre: "Madrid",
      pais: "España",
      codigo: "MAD"
    },
    {
      nombre: "Zamora",
      pais: "España",
      codigo: "ZAM"
    }
  ]
  }

  public getAll(): Ciudad[]{
    return this.ciudades;
    
  }

  public getOne(codigo:string): Ciudad{
    let i = this.ciudades.findIndex(one =>one.codigo == codigo)
   
   
    return this.ciudades[i]
  }

  public add (ciudad:Ciudad):boolean{

  
    this.ciudades.push(ciudad);

    
    console.log(this.ciudades);
    

    return true;
  }

  public edit(ciudad:Ciudad):boolean{
    let codigo: any = ciudad.codigo;
    console.log(codigo);
    console.log(ciudad);

    let i = this.ciudades.findIndex(e =>e.codigo==codigo)
    console.log(i);
    
    this.ciudades[i]=ciudad;
    return true;
  }
  
  public delete(codigo: string):boolean{
    let i = this.ciudades.findIndex(ciudad =>ciudad.codigo==codigo)
    this.ciudades.splice(i,1);
    return true;
  }

}
