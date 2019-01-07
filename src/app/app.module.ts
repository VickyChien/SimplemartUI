import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './components/app/app.component';
import { DefaultLayoutComponent } from './components/app/default-layout.component';
import { SharedModule } from './shared/shared.module';

// primeNG UI
import { DataTableModule } from 'primeng/components/datatable/datatable';
import { TableModule } from 'primeng/components/table/table';
import { GrowlModule } from 'primeng/components/growl/growl';
import { SharedModule as PSharedModule } from 'primeng/components/common/shared';
import { PaginatorModule } from 'primeng/components/paginator/paginator';
import { CalendarModule } from 'primeng/calendar';
import { FileUploadModule } from 'primeng/components/fileupload/fileupload';
import { DropdownModule } from 'primeng/dropdown';
import { CheckboxModule } from 'primeng/checkbox';
import { DialogModule } from 'primeng/dialog';


@NgModule({
  declarations: [
    AppComponent,
    DefaultLayoutComponent
    
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    FormsModule,
    DataTableModule,
    TableModule,
    GrowlModule,
    PSharedModule,
    PaginatorModule,
    FileUploadModule,
    DropdownModule,
    CheckboxModule,
    CalendarModule,
    DialogModule,
    AppRoutingModule,
    SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
