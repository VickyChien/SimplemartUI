import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

import { InvoiceQueryComponent } from './components/invoice-query.component';
import { InvoiceCreateComponent } from './components/invoice-create.component';
import { InvoiceViewComponent } from './components/invoice-view.component';
import { InvoiceConfirmComponent } from './components/invoice-confirm.component';
import { InvoiceDisShortageComponent } from './components/invoice-disshortage.component';
import { InvoiceReportComponent } from './components/invoice-report.component';

import { SharedModule } from "../../shared/shared.module"

@NgModule({
  declarations: [
    InvoiceQueryComponent,
    InvoiceCreateComponent,
    InvoiceViewComponent,
    InvoiceConfirmComponent,
    InvoiceDisShortageComponent,
    InvoiceReportComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild([
      { path: 'InvoiceQuery', component: InvoiceQueryComponent },
      { path: 'InvoiceCreate', component: InvoiceCreateComponent },
      { path: 'InvoiceView', component: InvoiceViewComponent },
      { path: 'InvoiceConfirm', component: InvoiceConfirmComponent },
      { path: 'InvoiceDisShortage', component: InvoiceDisShortageComponent },
      { path: 'InvoiceReport', component: InvoiceReportComponent },
    ])
  ]
})
  export class InvoiceModule { }
  