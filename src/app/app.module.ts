import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavigationComponent } from './navigation/navigation.component';
import { DemoMaterialModule } from './material-module';
import { AdminClientesComponent } from './clientes/admin-clientes/admin-clientes.component';
import { AdminCuentasComponent } from './admin-cuentas/admin-cuentas.component';
import { AdminTipoCuentasComponent } from './admin-tipo-cuentas/admin-tipo-cuentas.component';
import { AdminTransaccionesComponent } from './admin-transacciones/admin-transacciones.component';
import { HttpClientModule } from '@angular/common/http';
import { ClienteDialog } from './clientes/dialog-clientes/cliente-dialog.component';
import { DialogClientesUpdateComponent } from './clientes/dialog-clientes-update/dialog-clientes-update.component';
import { DialogClientesDeleteComponent } from './clientes/dialog-clientes-delete/dialog-clientes-delete.component';
@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    AdminClientesComponent,
    AdminCuentasComponent,
    AdminTipoCuentasComponent,
    AdminTransaccionesComponent,
    ClienteDialog,
    DialogClientesUpdateComponent,
    DialogClientesDeleteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    DemoMaterialModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
