import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-cliente-consulta-saldo',
  templateUrl: './cliente-consulta-saldo.component.html',
  styleUrls: ['./cliente-consulta-saldo.component.css']
})
export class ClienteConsultaSaldoComponent implements OnInit {

  cuentas: {nombre: string, cuentaNumero: string, saldo: number}[] = [
    {
      "nombre": "Cuenta de Ahorros",
      "cuentaNumero": "xxxxxxxxx85",
      "saldo": 100000
    },
    {
      "nombre": "CDT",
      "cuentaNumero": "xxxxxxxxx20",
      "saldo": 99999
    },
    {
      "nombre": "Cuenta Corriente",
      "cuentaNumero": "xxxxxxx7789",
      "saldo": 88888
    }
  ]

  disponible: number = 0
  cuentaNombre: string = ""
  valorRetiro: number = 0
  valorRetiroControl = new FormControl(0, [Validators.required, Validators.min(1000), Validators.max(1000000)])
  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.disponible = this.activatedRoute.snapshot.params.disponible;
    this.cuentaNombre = this.activatedRoute.snapshot.params.cuenta;
  }

  retirar() {
    console.log(this.valorRetiro)
  }

  getErrorMessage() {
    if(this.valorRetiroControl.hasError('required')){
      return 'Debe introducir un valor de retiro';
    }

    if(this.valorRetiroControl.hasError('min') || this.valorRetiroControl.hasError('max')) {
      return 'El valor de retiro indicado es incorrecto';
    }
    return '';
  }

}
