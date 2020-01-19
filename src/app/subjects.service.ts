import { Injectable } from '@angular/core';
// import { Subject } from 'rxjs';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SubjectsService {
// access_token:Subject<any>;
access_token : string;

  constructor () { }

  private user = new BehaviorSubject<string>("swamy");
  name = this.user.asObservable();

  editUser(newUser){
    this.user.next(newUser);
  }

}
