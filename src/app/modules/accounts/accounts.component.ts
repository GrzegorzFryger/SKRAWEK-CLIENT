import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {ChildService} from '../../data/service/accounts/child.service';
import {Child} from '../../data/model/accounts/child';
import {Observable, ReplaySubject} from 'rxjs';
import {NavigationEnd, Router, RouterEvent} from '@angular/router';
import {filter} from 'rxjs/operators';
import {Location} from '@angular/common';
import {Guardian} from '../../data/model/accounts/guardian';
import {GuardianService} from '../../data/service/accounts/guardian.service';
import {DataOutputList} from '../../data/model/data-output-list';

@Component({
  selector: 'app-accounts',
  templateUrl: './accounts.component.html',
  styleUrls: ['./accounts.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class AccountsComponent implements OnInit {

  /** Children data */
  public childColumnsToDisplay: string[] = ['select', 'no', 'name', 'surname', 'gender', 'pesel', 'dateOfBirth', 'startDate', 'endDate'];
  public children: Array<Child> = new Array<Child>();
  public childrenOutput: DataOutputList<Child>;
  private childrenSub: ReplaySubject<Array<Child>>;
  /** ------------- */

  /** Guardians data */
  public guardiansColumnsToDisplay: string[] = ['name', 'surname', 'phone', 'email'];
  public guardians: Array<Guardian> = new Array<Guardian>();
  public guardiansOutput: DataOutputList<Guardian>;
  private guardiansSub: ReplaySubject<Array<Guardian>>;
  /** ------------- */

  public currentRoute = '/accounts';

  constructor(private childService: ChildService,
              private guardianService: GuardianService,
              private router: Router,
              private location: Location) {
    this.childrenSub = new ReplaySubject<Array<Child>>(1);

    this.childrenOutput = {
      data: this.childrenSub.asObservable(),
      columnToDisplay: this.childColumnsToDisplay.filter(x => x !== 'select'),
    };

    this.guardiansSub = new ReplaySubject<Array<Guardian>>(1);

    this.guardiansOutput = {
      data: this.guardiansSub.asObservable(),
      columnToDisplay: this.guardiansColumnsToDisplay.filter(x => x !== 'select'),
    };
  }

  ngOnInit(): void {
    this.childService.getAllChildren().subscribe(
      resp => {
        this.childrenSub.next(resp);
      },
      error => {
      },
      () => {
        // ON COMPLETE
      }
    );

    this.guardianService.getAllGuardian().subscribe(
      resp => {
        console.log(resp);
        this.guardiansSub.next(resp);
      },
        error => {
        console.log(error);
        },
        () => {
          // ON COMPLETE
        }
    );

    this.router.events.pipe(filter(event => event instanceof NavigationEnd)).subscribe((event: RouterEvent) => {
      console.log(event);
      this.currentRoute = event.url;
    });

  }

  /** Children output */
  onSelectChildEvent($event: Array<Child>) {
    console.log('Select + ' + $event);

  }

  onClickChildEvent($event: Child) {
    console.log('onClikc' + $event);
    this.router.navigate(['/accounts/child']);
  }

  /** ------------- */

  /** Guardians output */
  onSelectGuardianEvent($event: Array<Guardian>) {
    console.log('Select + ' + $event);

  }

  onClickGuardianEvent($event: Guardian) {
    console.log('onClikc' + $event);
    this.router.navigate(['/accounts/child']);
  }

  /** ------------- */

  onBackButton() {
    this.location.back();
  }

}
