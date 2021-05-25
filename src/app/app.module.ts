import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavigationComponent } from './navigation/navigation.component';
import { DemoMaterialModule } from './material-module';
import { AdminClientesComponent } from './admin-clientes/admin-clientes.component';
import { AdminCuentasComponent } from './admin-cuentas/admin-cuentas.component';
import { AdminTipoCuentasComponent } from './admin-tipo-cuentas/admin-tipo-cuentas.component';
import { AdminTransaccionesComponent } from './admin-transacciones/admin-transacciones.component';
import { HttpClientModule } from '@angular/common/http';
@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    AdminClientesComponent,
    AdminCuentasComponent,
    AdminTipoCuentasComponent,
    AdminTransaccionesComponent
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
