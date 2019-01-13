import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { SharedModule } from "../../shared/shared.module"

import { GoodsnewComponent } from "./components/goodsnew/goodsnew.component"
import { GoodsnewQueryComponent } from "./components/goodsnew/goodsnew-query.component"
import { GoodsnewViewComponent } from "./components/goodsnew/goodsnew-view.component"
import { GoodsnewSupplierComponent } from "./components/goodsnew/goodsnew-supplier.component"

@NgModule({
    declarations: [
        GoodsnewComponent,
        GoodsnewQueryComponent,
        GoodsnewViewComponent,
        GoodsnewSupplierComponent
    ],
    imports: [
        CommonModule,
        SharedModule,
        RouterModule.forChild([
            { path: 'GoodsNew', component: GoodsnewComponent },
            { path: 'GoodsNewQuery', component: GoodsnewQueryComponent },
            { path: 'GoodsNewView', component: GoodsnewViewComponent },
            { path: 'GoodsNewSupplier', component: GoodsnewSupplierComponent },
        ])
    ]
})
export class ApplicationModule {
}
