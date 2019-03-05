import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

import { AnnEditComponent } from './components/announce/ann-edit.component';

import { SharedModule } from "../../shared/shared.module"

@NgModule({
  declarations: [
    AnnEditComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild([
      { path: 'AnnEdit', component: AnnEditComponent },
    ])
  ]
})
export class SysFunModule { }
