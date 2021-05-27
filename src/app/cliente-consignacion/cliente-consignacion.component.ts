import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';


export interface TipoCuenta {
  value: string,
  viewValue: string
}

@Component({
  selector: 'app-cliente-consignacion',
  templateUrl: './cliente-consignacion.component.html',
  styleUrls: ['./cliente-consignacion.component.css']
})
export class ClienteConsignacionComponent implements OnInit {
  tiposCuentas: TipoCuenta[] = [
    {value: "CTA", viewValue: "Cuenta de ahorro"},
    {value: "CTA", viewValue: "CTA"},
    {value: "CDT", viewValue: "CDT"},
  ]

  disponible: number = 0
  cuentaNombre: string = ""
  valorConsignacion: number = 0
  valorConsignacionControl = new FormControl(0, [Validators.required, Validators.min(1000), Validators.max(1000000)])
  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.disponible = this.activatedRoute.snapshot.params.disponible;
    this.cuentaNombre = this.activatedRoute.snapshot.params.cuenta;
  }

  getErrorMessage() {
    if(this.valorConsignacionControl.hasError('required')){
      return 'Debe introducir un valor de consignacion';
    }

    if(this.valorConsignacionControl.hasError('min') || this.valorConsignacionControl.hasError('max')) {
      return 'El valor de consignacion indicado es incorrecto';
    }
    return '';
  }

}
