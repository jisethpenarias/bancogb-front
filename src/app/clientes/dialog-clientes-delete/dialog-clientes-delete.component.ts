import { Component, Inject} from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Cliente } from '../admin-clientes/admin-clientes.component';
import { TipoDocumento } from '../dialog-clientes/cliente-dialog.component';

@Component({
  selector: 'app-dialog-clientes-delete',
  templateUrl: './dialog-clientes-delete.component.html',
  styleUrls: ['./dialog-clientes-delete.component.css']
})
export class DialogClientesDeleteComponent {


  tiposDocumentos: TipoDocumento[] = [
    {value: "CC", viewValue: "Cedula de Ciudadania"},
    {value: "TI", viewValue: "Tarjeta de Identidad"},
    {value: "CE", viewValue: "Cedula de Extranjeria"},
  ]

  constructor(
    public dialogRef: MatDialogRef<DialogClientesDeleteComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Cliente) {}

    onNoClick(): void {
      this.dialogRef.close();
    }

}
