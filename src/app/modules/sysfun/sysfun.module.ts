import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

import { AnnEditComponent } from './components/announce/ann-edit.component';
import { AnnQueryComponent } from './components/announce/ann-query.component';
import { AnnViewComponent } from './components/announce/ann-view.component';

import { SharedModule } from "../../shared/shared.module"

@NgModule({
  declarations: [
    AnnEditComponent,
    AnnQueryComponent,
    AnnViewComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild([
      { path: 'AnnEdit', component: AnnEditComponent },
      { path: 'AnnQuery', component: AnnQueryComponent },
      { path: 'AnnView', component: AnnViewComponent },
    ])
  ]
})
export class SysFunModule { }
