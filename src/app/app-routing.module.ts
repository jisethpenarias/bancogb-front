import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminClientesComponent } from './clientes/admin-clientes/admin-clientes.component';
import { AdminCuentasComponent } from './admin-cuentas/admin-cuentas.component';
import { AdminTipoCuentasComponent } from './admin-tipo-cuentas/admin-tipo-cuentas.component';
import { AdminTransaccionesComponent } from './admin-transacciones/admin-transacciones.component';

const routes: Routes = [
  {path: 'admin-clientes',  component: AdminClientesComponent},
  {path: 'admin-cuentas',  component: AdminCuentasComponent},
  {path: 'admin-tipo-cuentas',  component: AdminTipoCuentasComponent},
  {path: 'admin-transacciones',  component: AdminTransaccionesComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
