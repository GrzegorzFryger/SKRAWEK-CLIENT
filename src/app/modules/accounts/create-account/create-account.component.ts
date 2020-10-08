import {Component, OnInit} from '@angular/core';
import {CdkStepper} from '@angular/cdk/stepper';
import {CustomStepperComponent} from '../custom-stepper/custom-stepper.component';

@Component({
  selector: 'app-create-account',
  templateUrl: './create-account.component.html',
  styleUrls: ['./create-account.component.scss'],
})
export class CreateAccountComponent implements OnInit {

  selectedTab: string;

  constructor() {
    this.selectedTab = 'child';
  }

  ngOnInit(): void {
  }

  onSelectTab(type: string) {
    this.selectedTab = type;
  }
}
