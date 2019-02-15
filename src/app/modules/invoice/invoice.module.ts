import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

import { InvoiceQueryComponent } from './components/invoice-query.component';
import { InvoiceCreateComponent } from './components/invoice-create.component';

import { SharedModule } from "../../shared/shared.module"

@NgModule({
  declarations: [
    InvoiceQueryComponent,
    InvoiceCreateComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild([
      { path: 'InvoiceQuery', component: InvoiceQueryComponent },
      { path: 'InvoiceCreate', component: InvoiceCreateComponent },
    ])
  ]
})
  export class InvoiceModule { }
  