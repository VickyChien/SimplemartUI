import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

import { AnnEditComponent } from './components/announce/ann-edit.component';
import { AnnQueryComponent } from './components/announce/ann-query.component';
import { AnnViewComponent } from './components/announce/ann-view.component';
import { ConEditComponent } from './components/contract/con-edit.component';
import { ConQueryComponent } from './components/contract/con-query.component';
import { ConViewComponent } from './components/contract/con-view.component';

import { SharedModule } from "../../shared/shared.module"

@NgModule({
  declarations: [
    AnnEditComponent,
    AnnQueryComponent,
    AnnViewComponent,
    ConEditComponent,
    ConQueryComponent,
    ConViewComponent,
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
    ])
  ]
})
export class SysFunModule { }
