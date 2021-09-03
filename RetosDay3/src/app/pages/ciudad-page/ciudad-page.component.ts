import { Component, OnInit } from '@angular/core';
import { Ciudad } from '../../models/ciudad';
import { Clima } from '../../models/clima';

@Component({
  selector: 'ciudad-page',
  templateUrl: './ciudad-page.component.html',
  styleUrls: ['./ciudad-page.component.scss']
})
export class CiudadPageComponent implements OnInit {

 
public data: Ciudad |undefined;
public ciudades:Ciudad[]

  constructor() {
    this.ciudades = [
      { nombre: "Madrid", pais: "España", codigo: "MAD", clima: {temperatura:5, viento:5, precipitaciones: 10} },
      { nombre: "Cadiz", pais: "España", codigo: "CAD", clima: {temperatura:5, viento:5, precipitaciones: 10} },
      { nombre: "Somo", pais: "España", codigo: "SOM" , clima: {temperatura:5, viento:5, precipitaciones: 10} },
      { nombre: "Tarifa", pais: "España", codigo: "TAR" , clima: {temperatura:5, viento:5, precipitaciones: 10} },
      { nombre: "Sidney", pais: "Australia", codigo: "SID", clima: {temperatura:5, viento:5, precipitaciones: 10} },
  
  
    ]

    
   }

 
  public onCreateDatos=(
    nombre: HTMLInputElement,
    pais: HTMLInputElement,
    codigo: HTMLInputElement)=>{
      const nombreElement = nombre.value;
      const paisElement = pais.value;
      const codigoElement = codigo.value;
      
      let newCiudad={
        nombre: nombreElement,
        pais: paisElement, 
        codigo: codigoElement, 
        clima: {temperatura:5, viento:5, precipitaciones: 10} }

      this.ciudades.push(newCiudad)
      console.log(this.ciudades);
      
    }

    public datosFila(nombre:string | undefined ,pais:string|undefined ,codigo:string| undefined ,clima:any){
      this.data =  {
        nombre: nombre,
        pais: pais,
        codigo: codigo,
        clima: {temperatura:clima.temperatura, viento: clima.viento, precipitaciones: clima.precipitaciones}
      }

    }


  
  

  ngOnInit(): void {
  }

}
