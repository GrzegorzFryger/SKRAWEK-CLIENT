import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Observable} from 'rxjs';
import {Child} from '../../../../data/model/accounts/child';

@Component({
  selector: 'app-child-full-name-card',
  templateUrl: './child-full-name-card.component.html',
  styleUrls: ['./child-full-name-card.component.scss']
})
export class ChildFullNameCardComponent implements OnInit {
  @Input() childInput: Observable<Child>;
  @Output() editModeOutput = new EventEmitter<boolean>();

  constructor() {
  }

  ngOnInit(): void {
  }

  onEdit() {
    this.editModeOutput.emit(true);
  }

  onCancelForm() {
    this.editModeOutput.emit(false);
  }

  onSaveForm() {
    this.editModeOutput.emit(false);
  }

}
