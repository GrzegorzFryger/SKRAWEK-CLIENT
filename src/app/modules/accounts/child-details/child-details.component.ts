import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {ChildSelectSharedService} from '../shared/child-select-shared.service';
import {Observable} from 'rxjs';
import {Child} from '../../../data/model/accounts/child';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {GuardianService} from '../../../data/service/accounts/guardian.service';
import {Guardian} from '../../../data/model/accounts/guardian';

interface GenderType {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-child-details',
  templateUrl: './child-details.component.html',
  styleUrls: ['./child-details.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ChildDetailsComponent implements OnInit {
  child: Observable<Child>;
  childGuardians: Observable<Array<Guardian>>;
  readOnlyForm = true;
  hover = false;

  constructor(private childSelectSharedService: ChildSelectSharedService,
              private fb: FormBuilder,
              private guardianService: GuardianService) {
    this.child = this.childSelectSharedService.selectedChild;

  }

  ngOnInit(): void {
    this.child.subscribe(child => {
      this.childGuardians = this.guardianService.findAllGuardians(child.id);
    });

  }

  onHover($event: MouseEvent) {
    this.hover = $event.type === 'mouseover';
  }

  onEdit() {
    this.readOnlyForm = false;
  }

  onCancelForm() {
    this.readOnlyForm = true;
  }

  onSaveForm() {
    this.readOnlyForm = true;
  }
}
