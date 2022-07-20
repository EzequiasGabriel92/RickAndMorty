import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableComponent } from './components/table/table.component';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    TableComponent
  ],
  imports: [
    CommonModule,
    NgxDatatableModule,
    RouterModule
  ],
  exports: [
    TableComponent
  ]
})
export class SharedModule { }
