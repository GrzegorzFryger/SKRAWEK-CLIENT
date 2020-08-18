import {Injectable} from '@angular/core';
import {AsyncSubject, Observable, ReplaySubject, Subject} from 'rxjs';
import {Child} from '../../../data/model/accounts/child';

@Injectable({
  providedIn: 'root'
})
export class ChildSelectSharedService {

  private selectedChildObservable: Observable<Child>;
  private childSelectSubject: ReplaySubject<Child>;

  constructor() {
    console.log('create shared service')
    this.childSelectSubject = new ReplaySubject<Child>(1);
    this.selectedChildObservable = this.childSelectSubject.asObservable();
  }

  selectChild(selected: Child): void {
    this.childSelectSubject.next(selected);
  }

  get selectedChild(): Observable<Child> {
    return this.selectedChildObservable;
  }
}
