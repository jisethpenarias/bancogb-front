import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { TipoCuenta } from '../cliente-consignacion/cliente-consignacion.component';

@Component({
  selector: 'app-cliente-retiro',
  templateUrl: './cliente-retiro.component.html',
  styleUrls: ['./cliente-retiro.component.css']
})
export class ClienteRetiroComponent implements OnInit {

  tiposCuentas: TipoCuenta[] = [
    {value: "CTA", viewValue: "Cuenta de ahorro"},
    {value: "CTA", viewValue: "CTA"},
    {value: "CDT", viewValue: "CDT"},
  ]


  cuentaNombre: string = ""
  valorRetiro: number = 0
  valorRetiroControl = new FormControl(0, [Validators.required, Validators.min(1000), Validators.max(1000000)])
  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
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
