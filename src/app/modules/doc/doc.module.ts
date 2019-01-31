import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

import { OrderAccDateComponent } from './components/order-acc-date/order-acc-date.component';
import { OrderAccDateApplyComponent } from './components/order-acc-date/order-acc-date-apply.component';
import { OrderAccDateQueryComponent } from './components/order-acc-date/order-acc-date-query.component';
import { OrderDetailComponent } from './components/order/order-detail.component';
import { OrderQueryComponent } from './components/order/order-query.component';
import { OrderReturnDetailComponent } from './components/order-return/order-return-detail.component';
import { TestComponent } from './components/test/test.component';
import { TestSignComponent } from './components/test/test-sign.component';
import { TestViewSupplierComponent } from './components/test/test-view-supplier.component';
import { SharedModule } from "../../shared/shared.module"

@NgModule({
  declarations: [
    OrderAccDateComponent,
    OrderAccDateApplyComponent,
    OrderAccDateQueryComponent,
    OrderDetailComponent,
    OrderQueryComponent,
    OrderReturnDetailComponent,
    TestComponent,
    TestSignComponent,
    TestViewSupplierComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild([
      { path: 'OrderAccDateDetail', component: OrderAccDateComponent },
      { path: 'OrderAccDateApply', component: OrderAccDateApplyComponent },
      { path: 'OrderAccDateQuery', component: OrderAccDateQueryComponent },
      { path: 'OrderDetail', component: OrderDetailComponent },
      { path: 'OrderQuery', component: OrderQueryComponent },
      { path: 'OrderReturnDetail', component: OrderReturnDetailComponent },
      { path: 'Test', component: TestComponent },
      { path: 'TestSign', component: TestSignComponent },
      { path: 'TestViewSupplier', component: TestViewSupplierComponent }
    ])
  ]
})
export class DocModule { }
