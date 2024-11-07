import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EventService {

  private showSignInSource = new BehaviorSubject<boolean>(false);
  showSignIn$ = this.showSignInSource.asObservable();

  setShowSignIn(value: boolean) {
    this.showSignInSource.next(value);
  }

}
