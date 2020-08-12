import {Observable} from 'rxjs';

export interface DataOutputList<T> {
  data: Observable<Array<T>>;
  columnToDisplay: Array<string>;
}
