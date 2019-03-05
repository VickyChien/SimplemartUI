import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

import { SupplierDetailComponent } from './components/supplier/supplier-detail.component';
import { SupplierEditComponent } from './components/supplier/supplier-edit.component';
import { SupplierValidComponent } from './components/supplier/supplier-valid.component';
import { SupplierQueryComponent } from './components/supplier/supplier-query.component';
import { GoodsEditComponent } from './components/goods/goods-edit.component';
import { GoodsSupplierEditComponent } from './components/goods/goods-supplier-edit.component';

import { SharedModule } from "../../shared/shared.module"

@NgModule({
    declarations: [
        SupplierDetailComponent,
        SupplierEditComponent,
        SupplierValidComponent,
        SupplierQueryComponent,
        GoodsEditComponent,
        GoodsSupplierEditComponent
    ],
    imports: [
      CommonModule,
      SharedModule,
      RouterModule.forChild([
        { path: 'SupplierDetail', component: SupplierDetailComponent },
        { path: 'SupplierEdit', component: SupplierEditComponent },
        { path: 'SupplierValid', component: SupplierValidComponent },
        { path: 'SupplierQuery', component: SupplierQueryComponent },
        { path: 'GoodsEdit', component: GoodsEditComponent },
        { path: 'GoodsSupplierEdit', component: GoodsSupplierEditComponent },
      ])
    ]
  })
  export class MainModule { }
  