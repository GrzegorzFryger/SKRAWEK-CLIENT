import {Injectable} from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {Child} from '../../model/accounts/child';
import {Observable, throwError} from 'rxjs';
import {environment} from '../../../core/environment.dev';
import {AccountService} from './account.service';
import {catchError} from 'rxjs/operators';
import {SnackMessageHandlingService} from '../../../core/snack-message-handling/snack-message-handling.service';
import {Guardian} from '../../model/accounts/guardian';

const CHILD_NOT_FOUND_MESSAGE = 'Nie znaleziono dzieci';

@Injectable({
  providedIn: 'root'
})
export class GuardianService {
  public children: Observable<Array<Child>>;
  public userId: string;

  constructor(private http: HttpClient, private userService: AccountService,
              private errorHandlingService: SnackMessageHandlingService) {
    this.userService.currentUser.subscribe(user => {
      this.userId = user.id;
      this.children = this.findAllGuardianChildren(user.id);
    });
  }

  public findAllGuardianChildren(userId: string): Observable<Array<Child>> {
    return this.http.get<Array<Child>>(environment.apiUrls.account.guardian.findAllGuardianChildren + `${userId}` + '/children')
    .pipe(
      catchError(err => {
        this.errorHandlingService.error(CHILD_NOT_FOUND_MESSAGE);
        return throwError(err);
      }));
  }

  public getChildById(childID: string): Observable<Child> {
    return this.http.get<Child>(environment.apiUrls.account.child.getChildById + childID);
  }

  getAllGuardian(): Observable<Array<Guardian>> {
    return this.http.get<Array<Guardian>>(environment.apiUrls.account.guardian.guardians);
  }

  getCountGuardians(): Observable<number> {
    return this.http.get<number>(environment.apiUrls.account.guardian.count);
  }

  public findAllGuardians(childId: string): Observable<Array<Guardian>> {
    return this.http.get<Array<Guardian>>(environment.apiUrls.account.guardian.findAllGuardians + `${childId}`);
  }

  public createGuardian(guardian: Guardian): Observable<Guardian> {
    return this.http.post<Guardian>(environment.apiUrls.account.guardian.create, guardian);
  }

  public updateGuardian(guardian: Guardian): Observable<Guardian> {
    return this.http.put<Guardian>(environment.apiUrls.account.guardian.update, guardian);
  }
}
