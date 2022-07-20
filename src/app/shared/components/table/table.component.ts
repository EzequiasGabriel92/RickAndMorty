import { Component, Input, OnInit } from '@angular/core';
import { ColumnMode } from '@swimlane/ngx-datatable';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {

  @Input() items$!: Observable<any[]>;
  @Input() columns!: any;

  ColumnMode = ColumnMode;
  constructor() { }

  ngOnInit(): void {
  }

}
