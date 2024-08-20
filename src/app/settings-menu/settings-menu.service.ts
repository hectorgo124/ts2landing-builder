import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SettingsMenuService {

  constructor() { }

  private resetSubject = new Subject<void>();

  resetAction$ = this.resetSubject.asObservable();

  fireReset() {
    this.resetSubject.next();
  }
}
