import {Component, Input, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Child} from '../../../../data/model/accounts/child';
import {Observable} from 'rxjs';

interface GenderType {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-child-form',
  templateUrl: './child-form.component.html',
  styleUrls: ['./child-form.component.scss']
})
export class ChildFormComponent implements OnInit {
  @Input() child: Observable<Child>;
  @Input() readOnly: boolean;
  form: FormGroup;

  genderTypes: GenderType[] = [
    {value: 'MALE', viewValue: 'Chłopiec'},
    {value: 'FEMALE', viewValue: 'Dziewczynka'}
  ];

  constructor(private fb: FormBuilder) {
  }

  ngOnInit(): void {
    this.child.subscribe(child => {
      this.form = this.fb.group({
        name: [child.name, [Validators.required]],
        surname: [child.surname, []],
        gender: [child.gender, []],
        pesel: [child.pesel, []],
        dateOfBirth: [child.dateOfBirth, []],
        postalCode: [child.postalCode, [Validators.required]],
        city: [child.city, [Validators.required]],
        streetNumber: [child.streetNumber, [Validators.required]],
        status: ['', []],
        startDate: [child.startDate, [Validators.required]],
        endDate: [child.endDate, [Validators.required]],
        group: [child.group, [Validators.required]],
        commentsAdministration: ['', [Validators.required]],
        commentsMeals: ['', [Validators.required]],
        commentsOthers: ['', [Validators.required]],
      });
    });
  }

  public hasError = (controlName: string, errorName: string) => {
    return this.form.controls[controlName].hasError(errorName);
  }

}
