import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

import { InvoiceQueryComponent } from './components/invoice-query.component';

import { SharedModule } from "../../shared/shared.module"

@NgModule({
  declarations: [
    InvoiceQueryComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild([
      { path: 'InvoiceQuery', component: InvoiceQueryComponent },
    ])
  ]
})
  export class InvoiceModule { }
  