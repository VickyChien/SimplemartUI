import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

import { AnnEditComponent } from './components/announce/ann-edit.component';
import { AnnQueryComponent } from './components/announce/ann-query.component';
import { AnnViewComponent } from './components/announce/ann-view.component';
import { ConEditComponent } from './components/contract/con-edit.component';
import { ConQueryComponent } from './components/contract/con-query.component';
import { ConViewComponent } from './components/contract/con-view.component';
import { QuoteInquiryComponent } from './components/quote/quote-inquiry.component';
import { QuoteQueryComponent } from './components/quote/quote-query.component';
import { QuoteBargainComponent } from './components/quote/quote-bargain.component';
import { QuoteBargainPurchaseComponent } from './components/quote/quote-bargain-purchase.component';
import { CgradeUploadComponent } from './components/cgrade/cgrade-upload.component';
import { CgradeQueryComponent } from './components/cgrade/cgrade-query.component';
import { CgradeViewComponent } from './components/cgrade/cgrade-view.component';

import { SharedModule } from "../../shared/shared.module"

@NgModule({
  declarations: [
    AnnEditComponent,
    AnnQueryComponent,
    AnnViewComponent,
    ConEditComponent,
    ConQueryComponent,
    ConViewComponent,
    QuoteInquiryComponent,
    QuoteQueryComponent,
    QuoteBargainComponent,
    QuoteBargainPurchaseComponent,
    CgradeUploadComponent,
    CgradeQueryComponent,
    CgradeViewComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild([
      { path: 'AnnEdit', component: AnnEditComponent },
      { path: 'AnnQuery', component: AnnQueryComponent },
      { path: 'AnnView', component: AnnViewComponent },
      { path: 'ConEdit', component: ConEditComponent },
      { path: 'ConQuery', component: ConQueryComponent },
      { path: 'ConView', component: ConViewComponent },
      { path: 'QuoteInquiry', component: QuoteInquiryComponent },
      { path: 'QuoteQuery', component: QuoteQueryComponent },
      { path: 'QuoteBargain', component: QuoteBargainComponent },
      { path: 'QuoteBargainPurchase', component: QuoteBargainPurchaseComponent },
      { path: 'CgradeUpload', component: CgradeUploadComponent },
      { path: 'CgradeQuery', component: CgradeQueryComponent },
      { path: 'CgradeView', component: CgradeViewComponent },
    ])
  ]
})
export class SysFunModule { }
