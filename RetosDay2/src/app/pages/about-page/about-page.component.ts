import { Component, OnInit } from '@angular/core';
import { Autor } from '../../models/autor';

@Component({
  selector: 'app-about-page',
  templateUrl: './about-page.component.html',
  styleUrls: ['./about-page.component.scss']
})
export class AboutPageComponent implements OnInit {

  public miAutor: Autor


  constructor() { 
    this.miAutor={
      nombre: 'David',
      apellido: 'Rodriguez',
      bibliografia: "La Buena Españita"
    }
  }

  ngOnInit(): void {
  }
   
  public saveAutor=(
    elementNombre:HTMLInputElement,
    elementApellido:HTMLInputElement,
    elementBibliografia:HTMLInputElement)=>{
      const nombre = elementNombre.value;
      const apellido = elementApellido.value;
      const bibliografia = elementBibliografia.value;

      this.miAutor = {
        nombre: (nombre!= "")? nombre: this.miAutor.nombre,
        apellido: (apellido!= "")? apellido: this.miAutor.apellido,
        bibliografia: (bibliografia!= "")? bibliografia: this.miAutor.bibliografia
      
      }

    }
 




  }
