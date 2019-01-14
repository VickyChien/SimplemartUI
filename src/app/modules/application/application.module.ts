import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { SharedModule } from "../../shared/shared.module"

import { GoodsnewComponent } from "./components/goodsnew/goodsnew.component"
import { GoodsnewQueryComponent } from "./components/goodsnew/goodsnew-query.component"
import { GoodsnewViewComponent } from "./components/goodsnew/goodsnew-view.component"
import { GoodsnewSupplierComponent } from "./components/goodsnew/goodsnew-supplier.component"
import { GoodsnewExcelComponent } from "./components/goodsnew/goodsnew-excel.component"

@NgModule({
    declarations: [
        GoodsnewComponent,
        GoodsnewQueryComponent,
        GoodsnewViewComponent,
        GoodsnewSupplierComponent,
        GoodsnewExcelComponent
    ],
    imports: [
        CommonModule,
        SharedModule,
        RouterModule.forChild([
            { path: 'GoodsNew', component: GoodsnewComponent },
            { path: 'GoodsNewQuery', component: GoodsnewQueryComponent },
            { path: 'GoodsNewView', component: GoodsnewViewComponent },
            { path: 'GoodsNewSupplier', component: GoodsnewSupplierComponent },
            { path: 'GoodsNewExcel', component: GoodsnewExcelComponent },
        ])
    ]
})
export class ApplicationModule {
}
