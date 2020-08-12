import {Component, EventEmitter, Input, OnDestroy, OnInit, Output, ViewChild} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {Observable, Subscription} from 'rxjs';
import {Child} from '../../data/model/accounts/child';
import {MatTableDataSource} from '@angular/material/table';
import {SelectionChange, SelectionModel} from '@angular/cdk/collections';
import {DataOutputList} from '../../data/model/data-output-list';
import {Guardian} from '../../data/model/accounts/guardian';
const pageLabelPL = 'Ilość rekordów na stronę';

@Component({
  selector: 'app-generic-list',
  templateUrl: './generic-list.component.html',
  styleUrls: ['./generic-list.component.scss']
})
export class GenericListComponent<T> implements OnInit, OnDestroy {
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: true}) sort: MatSort;
  @Input() dataSource: DataOutputList<T>;
  @Output() onToggleEvents: EventEmitter<Array<T>>;
  @Output() onClickEvents: EventEmitter<T>;

  public dataToDisplay: MatTableDataSource<T>;
  public columnsToDisplay: string[];
  public selectionObservable: Observable<SelectionChange<T>>;
  public selectionModel: SelectionModel<T>;

  protected sub: Subscription;

  constructor() {
    this.onToggleEvents = new EventEmitter<Array<T>>();
    this.onClickEvents =  new EventEmitter<T>();
    this.dataToDisplay = new MatTableDataSource();
    this.selectionModel = new SelectionModel<T>(true, []);
    this.selectionObservable = this.selectionModel.changed.asObservable();
  }

  ngOnInit(): void {
    this.sub = this.dataSource.data.subscribe(data => {
      this.dataToDisplay.data = data;
      this.columnsToDisplay = this.dataSource.columnToDisplay;
      this.dataToDisplay.sort = this.sort;
      this.dataToDisplay.paginator = this.paginator;
      this.dataToDisplay.paginator._intl.itemsPerPageLabel = pageLabelPL;
    });

    this.selectionObservable.subscribe((selections) =>
      this.onToggleEvents.emit(selections.source.selected)
    );
  }

  applyFilter(event: KeyboardEvent) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataToDisplay.filter = filterValue.trim().toLowerCase();
  }

  onClick(children: any) {
    this.onClickEvents.emit(children);
  }

  isAllSelected() {
    const numSelected = this.selectionModel.selected.length;
    const numRows = this.dataToDisplay.data.length;
    return numSelected === numRows;
  }

  masterToggle() {
    this.isAllSelected() ?
      this.selectionModel.clear() :
      this.dataToDisplay.data.forEach(row => this.selectionModel.select(row));
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }

}
