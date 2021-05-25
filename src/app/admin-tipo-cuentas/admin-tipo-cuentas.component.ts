import { Component, OnInit } from '@angular/core';


export interface PeriodicElement {
  nombreCuenta: string;
  tasa: number;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {nombreCuenta: 'CC', tasa: 1.0079},
  {nombreCuenta: 'CC', tasa: 1.0079},
  {nombreCuenta: 'CC', tasa: 1.0079},
  {nombreCuenta: 'CC', tasa: 1.0079},
  {nombreCuenta: 'CC', tasa: 1.0079}
];

@Component({
  selector: 'app-admin-tipo-cuentas',
  templateUrl: './admin-tipo-cuentas.component.html',
  styleUrls: ['./admin-tipo-cuentas.component.css']
})
export class AdminTipoCuentasComponent implements OnInit {

  displayedColumns: string[] = ['nombreCuenta', 'tasa'];
  columnsToDisplay: string[] = this.displayedColumns.slice();
  data: PeriodicElement[] = ELEMENT_DATA;

  constructor() { }

  ngOnInit(): void {
  }

}
