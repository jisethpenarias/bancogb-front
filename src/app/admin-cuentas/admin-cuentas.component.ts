import { Component, OnInit } from '@angular/core';

export interface PeriodicElement {
  numeroCuenta: number;
  saldo: number;
  clienteID: number,
  tipoCuentaID: number
}

const ELEMENT_DATA: PeriodicElement[] = [
  {numeroCuenta: 1.0079, saldo: 100, clienteID: 1, tipoCuentaID: 2},
  {numeroCuenta: 1.0079, saldo: 100, clienteID: 1, tipoCuentaID: 2},
  {numeroCuenta: 1.0079, saldo: 100, clienteID: 1, tipoCuentaID: 2},
  {numeroCuenta: 1.0079, saldo: 100, clienteID: 1, tipoCuentaID: 2},
  {numeroCuenta: 1.0079, saldo: 100, clienteID: 1, tipoCuentaID: 2}
];

@Component({
  selector: 'app-admin-cuentas',
  templateUrl: './admin-cuentas.component.html',
  styleUrls: ['./admin-cuentas.component.css']
})
export class AdminCuentasComponent implements OnInit {

  displayedColumns: string[] = ['numeroCuenta', 'saldo', 'clienteID', 'tipoCuentaID'];
  columnsToDisplay: string[] = this.displayedColumns.slice();
  data: PeriodicElement[] = ELEMENT_DATA;

  constructor() { }

  ngOnInit(): void {
  }

}
