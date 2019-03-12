import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

import { SupplierDetailComponent } from './components/supplier/supplier-detail.component';
import { SupplierEditComponent } from './components/supplier/supplier-edit.component';
import { SupplierValidComponent } from './components/supplier/supplier-valid.component';
import { SupplierQueryComponent } from './components/supplier/supplier-query.component';
import { GoodsEditComponent } from './components/goods/goods-edit.component';
import { GoodsSupplierEditComponent } from './components/goods/goods-supplier-edit.component';
import { GoodsSupplierViewComponent } from './components/goods/goods-supplier-view.component';
import { GoodsEditSignViewComponent } from './components/goods/goods-edit-signview.component';
import { GoodsViewComponent } from './components/goods/goods-view.component';

import { SharedModule } from "../../shared/shared.module"

@NgModule({
    declarations: [
        SupplierDetailComponent,
        SupplierEditComponent,
        SupplierValidComponent,
        SupplierQueryComponent,
        GoodsEditComponent,
        GoodsSupplierEditComponent,
        GoodsSupplierViewComponent,
        GoodsEditSignViewComponent,
        GoodsViewComponent
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
        { path: 'GoodsSupplierView', component: GoodsSupplierViewComponent },
        { path: 'GoodsEditSignView', component: GoodsEditSignViewComponent },
        { path: 'GoodsView', component: GoodsViewComponent },
      ])
    ]
  })
  export class MainModule { }
  