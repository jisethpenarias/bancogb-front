import { Component, OnInit } from '@angular/core';
import { ClienteService } from '../services/cliente.service';

export interface Cliente {
  tipoDocumento: string;
  documento: number;
  primerNombre: string;
  segundoNombre: string;
  primerApellido: string;
  segundoApellido: string;
  celular: number;
  correo: string;
  direccion: string;
}

/*
const ELEMENT_DATA: Cliente[] = [
  {tipoDocumento: 'CC', numDocumento: 1.0079, nombre: 'Jiseth', segundoNombre: "", primerApellido: "Pena", segundoApellido: "Arias", celular: 3007515544, correoElectronico: "jpena@asdfa.com", direccion: "calle 23, 2020"},
  {tipoDocumento: 'CC', numDocumento: 1.0079, nombre: 'Jiseth', segundoNombre: "", primerApellido: "Pena", segundoApellido: "Arias", celular: 3007515544, correoElectronico: "jpena@asdfa.com", direccion: "calle 23, 2020"},
  {tipoDocumento: 'CC', numDocumento: 1.0079, nombre: 'Jiseth', segundoNombre: "", primerApellido: "Pena", segundoApellido: "Arias", celular: 3007515544, correoElectronico: "jpena@asdfa.com", direccion: "calle 23, 2020"},
  {tipoDocumento: 'CC', numDocumento: 1.0079, nombre: 'Jiseth', segundoNombre: "", primerApellido: "Pena", segundoApellido: "Arias", celular: 3007515544, correoElectronico: "jpena@asdfa.com", direccion: "calle 23, 2020"},
  {tipoDocumento: 'CC', numDocumento: 1.0079, nombre: 'Jiseth', segundoNombre: "", primerApellido: "Pena", segundoApellido: "Arias", celular: 3007515544, correoElectronico: "jpena@asdfa.com", direccion: "calle 23, 2020"}
];
*/

@Component({
  selector: 'app-admin-clientes',
  templateUrl: './admin-clientes.component.html',
  styleUrls: ['./admin-clientes.component.css']
})
export class AdminClientesComponent implements OnInit {

  displayedColumns: string[] = ['tipoDocumento', 'documento', 'primerNombre', 'segundoNombre', 'primerApellido', 'segundoApellido', 'celular', 'correo', 'direccion'];
  columnsToDisplay: string[] = this.displayedColumns.slice();
  data: Cliente[];

  constructor(private clientesService: ClienteService) { }

  addCliente() {
    const randomColumn = Math.floor(Math.random() * this.displayedColumns.length);
    this.columnsToDisplay.push(this.displayedColumns[randomColumn]);
  }

  ngOnInit(): void {
    console.log('iniciando componente AdminClientesComponent')
    this.clientesService.getClientes().subscribe((clientes: Cliente[]) => {
      console.log(clientes);
      this.data = clientes;
    })
  }

}
