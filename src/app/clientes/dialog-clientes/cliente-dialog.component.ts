import { Component, Inject } from "@angular/core";
import { MatDialogRef, MAT_DIALOG_DATA } from "@angular/material/dialog";
import { Cliente } from "../admin-clientes/admin-clientes.component";

export interface TipoDocumento {
  value: string,
  viewValue: string
}

@Component({
  selector: 'cliente-dialog',
  templateUrl: 'cliente-dialog.component.html',
  styleUrls: ['cliente-dialog.component.css']
})
export class ClienteDialog {
  tiposDocumentos: TipoDocumento[] = [
    {value: "CC", viewValue: "Cedula de Ciudadania"},
    {value: "TI", viewValue: "Tarjeta de Identidad"},
    {value: "CE", viewValue: "Cedula de Extranjeria"},
  ]
  constructor(
    public dialogRef: MatDialogRef<ClienteDialog>,
    @Inject(MAT_DIALOG_DATA) public data: Cliente) {}

  onNoClick(): void {
    this.dialogRef.close();
  }

}
