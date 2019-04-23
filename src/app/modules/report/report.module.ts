import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

import { ReportPdfComponent } from './components/report-pdf.component';

import { SharedModule } from "../../shared/shared.module"

@NgModule({
  declarations: [
    ReportPdfComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild([
      { path: 'ReportPdf', component: ReportPdfComponent },
    ])
  ]
})
export class ReportModule { }
