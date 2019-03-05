import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DefaultLayoutComponent } from "./components/app/default-layout.component";

const routes: Routes = [
  {
    path: '', component: DefaultLayoutComponent,
    children: [
      { path: 'doc', loadChildren: './modules/doc/doc.module#DocModule' },
      { path: 'main', loadChildren: './modules/main/main.module#MainModule' },
      { path: 'app', loadChildren: './modules/application/application.module#ApplicationModule' },
      { path: 'invoice', loadChildren: './modules/invoice/invoice.module#InvoiceModule' },
      { path: 'sysfun', loadChildren: './modules/sysfun/sysfun.module#SysFunModule' },
    ],
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
