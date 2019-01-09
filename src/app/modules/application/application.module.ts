import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { SharedModule } from "../../shared/shared.module"

import { GoodsnewComponent } from "./components/goodsnew/goodsnew.component"
import { GoodsnewQueryComponent } from "./components/goodsnew/goodsnew-query.component"

@NgModule({
    declarations: [
        GoodsnewComponent,
        GoodsnewQueryComponent
    ],
    imports: [
        CommonModule,
        SharedModule,
        RouterModule.forChild([
            { path: 'GoodsNew', component: GoodsnewComponent },
            { path: 'GoodsNewQuery', component: GoodsnewQueryComponent },
        ])
    ]
})
export class ApplicationModule {
}
