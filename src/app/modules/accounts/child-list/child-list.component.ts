import {Component, OnDestroy, OnInit, ViewEncapsulation} from '@angular/core';
import {Child} from '../../../data/model/accounts/child';
import {GenericListComponent} from '../../../shared/generic-list/generic-list.component';

const pageLabelPL = 'Ilość rekordów na stronę';

@Component({
  selector: 'app-child-list',
  templateUrl: './child-list.component.html',
  styleUrls: ['./child-list.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ChildListComponent extends GenericListComponent<Child> implements OnInit, OnDestroy {

  constructor() {
    super();
  }

  ngOnInit(): void {
    super.ngOnInit();
  }

  ngOnDestroy(): void {
    super.ngOnDestroy();
  }

}
