import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

import { SupplierDetailComponent } from './components/supplier/supplier-detail.component';

import { SharedModule } from "../../shared/shared.module"

@NgModule({
    declarations: [
        SupplierDetailComponent
    ],
    imports: [
      CommonModule,
      SharedModule,
      RouterModule.forChild([
        { path: 'SupplierDetail', component: SupplierDetailComponent },
      ])
    ]
  })
  export class MainModule { }
  