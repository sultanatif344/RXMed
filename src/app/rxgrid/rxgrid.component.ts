import { Fta } from './../shared/models/fta';
import { RxSearchComponent } from './../rxsearch/rxsearch.component';
import { Component, OnInit, Input } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-rxgrid',
  templateUrl: './rxgrid.component.html',
  styleUrls: ['./rxgrid.component.scss']
})

export class RxgridComponent implements OnInit {
  tableColumns: string[] = ['productDescription', 'tier', 'formularyRestriction'];

  tableData: MatTableDataSource<Fta>;
  constructor() { }

 

  @Input() gridDataSource: Fta[];

  ngOnInit() {
  }
}
