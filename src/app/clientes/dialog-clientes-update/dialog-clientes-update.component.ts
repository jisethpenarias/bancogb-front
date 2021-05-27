import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Cliente } from '../admin-clientes/admin-clientes.component';
import { TipoDocumento } from '../dialog-clientes/cliente-dialog.component';

@Component({
  selector: 'app-dialog-clientes-update',
  templateUrl: './dialog-clientes-update.component.html',
  styleUrls: ['./dialog-clientes-update.component.css']
})
export class DialogClientesUpdateComponent {

  tiposDocumentos: TipoDocumento[] = [
    {value: "CC", viewValue: "Cedula de Ciudadania"},
    {value: "TI", viewValue: "Tarjeta de Identidad"},
    {value: "CE", viewValue: "Cedula de Extranjeria"},
  ]

  constructor(
    public dialogRef: MatDialogRef<DialogClientesUpdateComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Cliente) {}

    onNoClick(): void {
      this.dialogRef.close();
    }
}
