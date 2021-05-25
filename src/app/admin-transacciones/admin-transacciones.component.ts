import { Component, OnInit } from '@angular/core';

export interface PeriodicElement {
  fecha: Date;
  tipoTransaccion: string;
  valor: number,
  numeroCuenta: number
}

const ELEMENT_DATA: PeriodicElement[] = [
  {fecha: new Date(), tipoTransaccion: "CTA", valor: 1, numeroCuenta: 2},
  {fecha: new Date(), tipoTransaccion: "CTA", valor: 1, numeroCuenta: 2},
  {fecha: new Date(), tipoTransaccion: "CTA", valor: 1, numeroCuenta: 2},
  {fecha: new Date(), tipoTransaccion: "CTA", valor: 1, numeroCuenta: 2},
  {fecha: new Date(), tipoTransaccion: "CTA", valor: 1, numeroCuenta: 2}
];

@Component({
  selector: 'app-admin-transacciones',
  templateUrl: './admin-transacciones.component.html',
  styleUrls: ['./admin-transacciones.component.css']
})
export class AdminTransaccionesComponent implements OnInit {

  displayedColumns: string[] = ['fecha', 'tipoTransaccion', 'valor', 'numeroCuenta'];
  columnsToDisplay: string[] = this.displayedColumns.slice();
  data: PeriodicElement[] = ELEMENT_DATA;

  constructor() { }

  ngOnInit(): void {
  }

}
