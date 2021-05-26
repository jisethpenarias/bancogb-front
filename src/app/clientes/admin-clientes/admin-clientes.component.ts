import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ClienteService } from '../../services/cliente.service';
import { ClienteDialog } from '../dialog-clientes/cliente-dialog.component';

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


@Component({
  selector: 'app-admin-clientes',
  templateUrl: './admin-clientes.component.html',
  styleUrls: ['./admin-clientes.component.css']
})
export class AdminClientesComponent implements OnInit {

  // displayedColumns: string[] = ['tipoDocumento', 'documento', 'primerNombre', 'segundoNombre', 'primerApellido', 'segundoApellido', 'celular', 'correo', 'direccion', 'No. '];
  displayedColumns: string[] = ['Nombre', 'Documento', 'Celular', 'Correo', 'Direccion', 'Acciones'];
  columnsToDisplay: string[] = this.displayedColumns.slice();
  data: Cliente[];

  constructor(private clientesService: ClienteService,
              private dialog: MatDialog) { }

  addCliente(): void {
    const dialogRef = this.dialog.open( ClienteDialog, {
      width: '250px',
      data: {}
  })
}

  //   const randomColumn = Math.floor(Math.random() * this.displayedColumns.length);
  //   this.columnsToDisplay.push(this.displayedColumns[randomColumn]);
  // }

  ngOnInit(): void {
    console.log('iniciando componente AdminClientesComponent')
    this.clientesService.getClientes().subscribe((clientes: Cliente[]) => {
      this.data = clientes;
    })
  }

}

