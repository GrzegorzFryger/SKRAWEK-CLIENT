import {Component, Input, OnInit, Output} from '@angular/core';
import {Observable} from 'rxjs';
import {Guardian} from '../../../../data/model/accounts/guardian';

@Component({
  selector: 'app-guardians-child',
  templateUrl: './guardians-child.component.html',
  styleUrls: ['./guardians-child.component.scss']
})
export class GuardiansChildComponent implements OnInit {
  @Input() childGuardians: Observable<Array<Guardian>>;
  hover = false;

  constructor() { }

  ngOnInit(): void {
  }

  onHover($event: MouseEvent) {
    this.hover = $event.type === 'mouseover';
  }

}
