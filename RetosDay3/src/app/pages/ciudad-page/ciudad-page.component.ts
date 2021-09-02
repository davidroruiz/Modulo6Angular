import { Component, OnInit } from '@angular/core';
import { Ciudad } from '../../models/ciudad';
import { Clima } from '../../models/clima';

@Component({
  selector: 'ciudad-page',
  templateUrl: './ciudad-page.component.html',
  styleUrls: ['./ciudad-page.component.scss']
})
export class CiudadPageComponent implements OnInit {

  ciudades: Ciudad[] = [
    { nombre: "Madrid", pais: "España", codigo: "MAD" },
    { nombre: "Cadiz", pais: "España", codigo: "CAD"},
    { nombre: "Somo", pais: "España", codigo: "SOM" },
    { nombre: "Tarifa", pais: "España", codigo: "TAR" },
    { nombre: "Sidney", pais: "Australia", codigo: "SID"},


  ]

 

 
  public onCreateDatos=(
    nombre: HTMLInputElement,
    pais: HTMLInputElement,
    codigo: HTMLInputElement)=>{
      const nombreElement = nombre.value;
      const paisElement = pais.value;
      const codigoElement = codigo.value;
      
      let newCiudad={nombre: nombreElement,pais: paisElement, codigo: codigoElement}

      this.ciudades.push(newCiudad)
      console.log(this.ciudades);
      
    }

    clickAll(){
      this.ciudades;
    }
  constructor() { }

  ngOnInit(): void {
  }

}
