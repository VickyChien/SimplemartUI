import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { SharedModule } from "../../shared/shared.module"

import { GoodsnewComponent } from "./components/goodsnew/goodsnew.component"
import { GoodsnewQueryComponent } from "./components/goodsnew/goodsnew-query.component"
import { GoodsnewViewComponent } from "./components/goodsnew/goodsnew-view.component"
import { GoodsnewSupplierComponent } from "./components/goodsnew/goodsnew-supplier.component"
import { GoodsnewExcelComponent } from "./components/goodsnew/goodsnew-excel.component"
import { GoodsPriceComponent } from "./components/goodsprice/goodsprice.component"
import { GoodsPriceViewComponent } from "./components/goodsprice/goodsprice-view.component"
import { GoodsPriceQueryComponent } from "./components/goodsprice/goodsprice-query.component"
import { GoodsPriceSupplierComponent } from "./components/goodsprice/goodsprice-supplier.component"
import { GoodsPriceBatchViewComponent } from "./components/goodspricebatch/goodspricebatch-view.component"
import { GoodsPriceBatchUploadComponent } from "./components/goodspricebatch/goodspricebatch-upload.component"
import { GoodsPriceBatchSignComponent } from "./components/goodspricebatch/goodspricebatch-sign.component"

@NgModule({
    declarations: [
        GoodsnewComponent,
        GoodsnewQueryComponent,
        GoodsnewViewComponent,
        GoodsnewSupplierComponent,
        GoodsnewExcelComponent,
        GoodsPriceComponent,
        GoodsPriceViewComponent,
        GoodsPriceQueryComponent,
        GoodsPriceSupplierComponent,
        GoodsPriceBatchViewComponent,
        GoodsPriceBatchUploadComponent,
        GoodsPriceBatchSignComponent
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
            { path: 'GoodsPrice', component: GoodsPriceComponent },
            { path: 'GoodsPriceView', component: GoodsPriceViewComponent },
            { path: 'GoodsPriceQuery', component: GoodsPriceQueryComponent },
            { path: 'GoodsPriceSupplier', component: GoodsPriceSupplierComponent },
            { path: 'GoodsPriceBatchView', component: GoodsPriceBatchViewComponent },
            { path: 'GoodsPriceBatchUpload', component: GoodsPriceBatchUploadComponent },
            { path: 'GoodsPriceBatchSign', component: GoodsPriceBatchSignComponent },
        ])
    ]
})
export class ApplicationModule {
}
