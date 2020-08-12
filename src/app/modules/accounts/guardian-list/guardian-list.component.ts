import {Component, OnDestroy, OnInit} from '@angular/core';
import {GenericListComponent} from '../../../shared/generic-list/generic-list.component';
import {Child} from '../../../data/model/accounts/child';
import {Guardian} from '../../../data/model/accounts/guardian';

@Component({
  selector: 'app-guardian-list',
  templateUrl: './guardian-list.component.html',
  styleUrls: ['./guardian-list.component.scss']
})
export class GuardianListComponent extends GenericListComponent<Guardian> implements OnInit, OnDestroy  {

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
