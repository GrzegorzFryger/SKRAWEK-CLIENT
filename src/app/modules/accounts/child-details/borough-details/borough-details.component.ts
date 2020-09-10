import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-borough-details',
  templateUrl: './borough-details.component.html',
  styleUrls: ['./borough-details.component.scss']
})
export class BoroughDetailsComponent implements OnInit {

  constructor(private fb: FormBuilder) {
  }

  ngOnInit(): void {

  }
}
