import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  private REST_API_SERVER_CLIENTES = "http://localhost:8080/clientes/";


  constructor(private httpClient: HttpClient) { }

  public getClientes() {
    return this.httpClient.get(this.REST_API_SERVER_CLIENTES)
  }
}
