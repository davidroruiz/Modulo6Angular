import { Component, OnInit } from '@angular/core';
import { Disco } from '../../models/disco';
import { DiscoService } from '../../shared/disco.service';

@Component({
  selector: 'app-mostrar-disco',
  templateUrl: './mostrar-disco.component.html',
  styleUrls: ['./mostrar-disco.component.css']
})
export class MostrarDiscoComponent implements OnInit {

  public disco: Disco[] = []

  constructor(private apiService: DiscoService) { }

  mostrarDisco(id:string)
  {
    let ids=Number(id);
    if(id){
      this.apiService.getDisco(ids).subscribe((data:any) => 
      {    
        console.log(data)
        this.disco = data;
      }   
      )
    }else{
      this.apiService.getDiscos().subscribe((data:any) => 
      {    
        console.log(data)
        this.disco = data;
      }   
      )
    }
    
  }  

  ngOnInit(): void {
  }

}
function data(data: any, any: any) {
  throw new Error('Function not implemented.');
}

