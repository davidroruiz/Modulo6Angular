import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Disco } from '../models/disco';


@Injectable({
  providedIn: 'root'
})
export class DiscoService 
{

  private url = "http://localhost:3000/discos";

  //public disco: Disco;
  
  constructor(private http: HttpClient) { }

  getDisco(id:number)
  {
    return this.http.get(this.url + "/" + id)
  }

  getDiscos()
  {
    return this.http.get(this.url + "/")
  }

  postDisco(newDisco: Disco)
  {
    return this.http.post(this.url, newDisco)
  }

  putDisco(newDisco: any)
  {
    console.log(newDisco);
    
    return this.http.put(this.url, newDisco)

  }

  delDisco(id:any)
  {
    console.log(id);
    const httpOptions = {headers: new HttpHeaders({ 'Content-Type': 'application/json' }), body: id}
    //const httpOptions = {headers: null, body: id}
    return this.http.delete(this.url, httpOptions)
  }

}
