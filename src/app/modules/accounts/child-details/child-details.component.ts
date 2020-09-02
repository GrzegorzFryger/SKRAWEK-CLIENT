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
  form: FormGroup;
  readOnly = true;
  childGuardians: Observable<Array<Guardian>>;

  genderTypes: GenderType[] = [
    {value: 'MALE', viewValue: 'Chłopiec'},
    {value: 'FEMALE', viewValue: 'Dziewczynka'}
  ];

  constructor(private childSelectSharedService: ChildSelectSharedService, private fb: FormBuilder, private guardianService: GuardianService) {
    this.child = this.childSelectSharedService.selectedChild;

  }

  ngOnInit(): void {


    this.child.subscribe(child => {
      this.childGuardians = this.guardianService.findAllGuardians(child.id);

      this.form = this.fb.group({
        name: [child.name, []],
        surname: [child.surname, []],
        gender: [child.gender, []],
        pesel: [child.pesel, []],
        dateOfBirth: [child.dateOfBirth, []],
        postalCode: [child.postalCode, [Validators.required]],
        city: [child.city, [Validators.required]],
        streetNumber: [child.streetNumber, [Validators.required]],
        startDate: [child.startDate, [Validators.required]],
        endDate: [child.endDate, [Validators.required]],
        group: [child.group, [Validators.required]]
      });
    });


  }

}
