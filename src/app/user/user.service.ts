import { Injectable } from '@angular/core';
import { Observable, Observer, of, TeardownLogic } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor() {}
  isNameAvailable(name: string): Observable<boolean> {
    return of(getUnavailableNamesList().includes(name.toLowerCase()));
  }
  getUnAvailableNames(): Observable<string> {
    return new Observable<string>(getUnavailableNamesLogic);
  }
}
function getUnavailableNamesLogic(observer: Observer<string>): TeardownLogic {
  const unavailableNames = getUnavailableNamesList();
  unavailableNames.forEach(name => {
    observer.next(name);
  });
  observer.complete();
  return { unsubscribe() {} };
}
function getUnavailableNamesList() {
  return ['tom', 'tommy', 'dick', 'harry'];
}
