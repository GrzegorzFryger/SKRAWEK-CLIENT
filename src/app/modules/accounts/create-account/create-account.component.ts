import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

interface GenderType {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-create-account',
  templateUrl: './create-account.component.html',
  styleUrls: ['./create-account.component.scss'],
})
export class CreateAccountComponent implements OnInit {

  selectedTab: string;
  form: FormGroup;
  value: any;

  genderTypes: GenderType[] = [
    {value: 'MALE', viewValue: 'Chłopiec'},
    {value: 'FEMALE', viewValue: 'Dziewczynka'}
  ];
  readOnly = false;


  constructor(private fb: FormBuilder) {
    this.selectedTab = 'child';
  }

  ngOnInit(): void {

    this.form = this.fb.group({
      name: ['', [Validators.required]],
      surname: ['', []],
      gender: ['', []],
      pesel: ['', []],
      dateOfBirth: ['', []],
      postalCode: ['', [Validators.required]],
      city: ['', [Validators.required]],
      streetNumber: ['', [Validators.required]],
      status: ['', []],
      startDate: ['', [Validators.required]],
      endDate: ['', [Validators.required]],
      group: ['', [Validators.required]],
      commentsAdministration: ['', [Validators.required]],
      commentsMeals: ['', [Validators.required]],
      commentsOthers: ['', [Validators.required]],
    });

    this.form.valueChanges.subscribe(val => {
      this.value = val;
      console.log(val);
    });

  }

  onSelectTab(type: string) {
    this.selectedTab = type;
  }
}
