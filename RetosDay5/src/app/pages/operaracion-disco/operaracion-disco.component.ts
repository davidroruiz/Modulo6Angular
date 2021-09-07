import { Component, OnInit } from '@angular/core';
import { Disco } from 'src/app/models/disco';
import { DiscoService } from 'src/app/shared/disco.service';

@Component({
  selector: 'app-operaracion-disco',
  templateUrl: './operaracion-disco.component.html',
  styleUrls: ['./operaracion-disco.component.css']
})
export class OperaracionDiscoComponent implements OnInit {

  //public message:string

  constructor(private apiService: DiscoService) 
  { 
    //let mensagges=Number(this.message);
  }


  insertarDisco(titulo:string, interprete: string, anyoPublicacion:string)
  {
    this.apiService.postDisco(new Disco(0,titulo,interprete, anyoPublicacion))
    .subscribe((data:any) =>
    {
      console.log(data);
      if (data != "-1")
        alert("Se ha insertado el disco con id: " + data)
      else
        alert("Error al insertar al disco");

    })

  } 

  actualizarDisco(id:string,titulo:string, interprete: string, anyoPublicacion:string)
  {
    let tit=titulo != "" ? titulo:undefined
    let int=interprete != "" ? interprete:undefined
    let anyo=anyoPublicacion != "" ? anyoPublicacion:undefined

    this.apiService.putDisco({
      "id":id,
      "titulo":tit,
      "interprete":int,
      "anyoPublicacion":anyo

    }).subscribe((data:any) =>
    {
      console.log(data);
      if (data != "-1")
        alert("Se ha actualizar el disco con id: " + data)
      else
        alert("Error al actualizar al disco");

    })

  } 

  eliminarDisco(id:string)
  {
    this.apiService.delDisco({"id":id})
    .subscribe((data) =>
    {
      console.log(data);
      if (data != "-1")
      alert("Se ha eliminado el disco con id: " + data)
    else
      alert("Error al eliminar al disco");

    })

  } 

  ngOnInit(): void {
  }

}
