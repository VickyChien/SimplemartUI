import { NgModule } from "@angular/core";
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// primeNG UI
//import { DataTableModule } from 'primeng/components/datatable/datatable';
import { TableModule } from 'primeng/components/table/table';
import { SharedModule as PSharedModule } from 'primeng/components/common/shared';
import { PaginatorModule } from 'primeng/components/paginator/paginator';
import { CalendarModule } from 'primeng/calendar';
import { FileUploadModule } from 'primeng/fileupload';
import { DialogModule } from 'primeng/components/dialog/dialog';
import { OrderListModule } from 'primeng/components/orderlist/orderlist';
import { RadioButtonModule } from 'primeng/radiobutton';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { KeyFilterModule } from 'primeng/keyfilter';
import { CheckboxModule } from 'primeng/checkbox';
import { PanelModule } from 'primeng/panel';
import { AutoCompleteModule } from 'primeng/autocomplete';
import { TabViewModule } from 'primeng/tabview';
import { CardModule } from 'primeng/card';
import { PickListModule } from 'primeng/picklist';

@NgModule({
  imports: [
    CommonModule,
    DialogModule,
    OrderListModule
  ],
  exports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    //DataTableModule,
    TableModule,
    PSharedModule,
    PaginatorModule,
    DialogModule,
    OrderListModule,
    CalendarModule,
    FileUploadModule,
    RadioButtonModule,
    InputTextareaModule,
    KeyFilterModule,
    CheckboxModule,
    AutoCompleteModule,
    PanelModule,
    TabViewModule,
    CardModule,
    PickListModule,
  ],
  declarations: [
   
  ],
  providers: [
  ]
})
export class SharedModule {

}
