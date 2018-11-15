import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor() {}
  isNameAvailable(name: string): Observable<boolean> {
    const unavailableNames = ['tom', 'tommy', 'dick', 'harry'];
    return of(unavailableNames.includes(name.toLowerCase()));
  }
}
