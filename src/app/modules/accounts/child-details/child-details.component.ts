import { Component, OnInit } from '@angular/core';
import {ChildSelectSharedService} from '../shared/child-select-shared.service';
import {Observable} from 'rxjs';
import {Child} from '../../../data/model/accounts/child';

@Component({
  selector: 'app-child-details',
  templateUrl: './child-details.component.html',
  styleUrls: ['./child-details.component.scss']
})
export class ChildDetailsComponent implements OnInit {
  child: Observable<Child>;

  constructor(private childSelectSharedService: ChildSelectSharedService) {
    this.child = this.childSelectSharedService.selectedChild;
  }

  ngOnInit(): void {
  }

}
