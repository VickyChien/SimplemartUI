import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

import { ShippingEditComponent } from './components/shipping-edit.component';
import { ShippingQueryComponent } from './components/shipping-query.component';
import { ShippingViewComponent } from './components/shipping-view.component';

import { SharedModule } from "../../shared/shared.module"

@NgModule({
  declarations: [
    ShippingEditComponent,
    ShippingQueryComponent,
    ShippingViewComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild([
      { path: 'ShippingEdit', component: ShippingEditComponent },
      { path: 'ShippingQuery', component: ShippingQueryComponent },
      { path: 'ShippingView', component: ShippingViewComponent },
    ])
  ]
})
export class ShippingModule { }
