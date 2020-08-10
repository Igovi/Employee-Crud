import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http'
import { map } from 'rxjs/operators';
import { Employee } from './employee';

@Injectable({
  providedIn: 'root'
})
export class FuncionarioService {

  funcionariosUrl = 'http://dummy.restapiexample.com/api/v1/employees'
  deleteUrl = 'http://dummy.restapiexample.com/api/v1/delete/'
  AddUrl =  'http://dummy.restapiexample.com/api/v1/create'

  httpOptions ={
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

  constructor(private http: HttpClient) { }

  listar(){
    return this.http.get<Employee[]>(`${this.funcionariosUrl}`).pipe(map(res => res.data));
  }
  criarFuncionario(empPost: any){
    return this.http.post(`${this.AddUrl}`,JSON.stringify(empPost));
}

deletar(id){
  return this.http.delete(`${this.deleteUrl} ${id}`);
}
}
