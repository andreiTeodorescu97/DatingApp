import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ReplaySubject } from 'rxjs';
import {map} from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { User } from '../_models/user';

@Injectable({
  providedIn: 'root'
})

//services are singleton
//data gets destroys only when application is closed down
//services are usually used for http requests

export class AccountService {

  baseUrl = environment.apiUrl;

  //buffer object, it will emit the last values inside it, it will store only one User (null/current user)
  private currentUserSource = new ReplaySubject<User>(1);
  currentUser$ = this.currentUserSource.asObservable();

  constructor(private http: HttpClient) { }

  login(model : any){
    return this.http.post(this.baseUrl + 'account/login', model).pipe(
      map((response: User) => {
        const user = response;
        if(user){
          this.setCurrentUser(user);
        }
      })
    );
  }

  register(model: any){
    return this.http.post(this.baseUrl + 'account/register', model).pipe(
      map((user : User) => {
        if(user){
          this.setCurrentUser(user);
        }
        /* return user; */
      })
    )
  }

  setCurrentUser(user: User){
    user.roles = [];
    const roles = this.getDecodedToken(user.token).role;
    /* we have only one role for one member */
    Array.isArray(roles) ? user.roles = roles : user.roles.push(roles);
    localStorage.setItem('user', JSON.stringify(user));
    this.currentUserSource.next(user);
  }

  logout(){
    localStorage.removeItem('user');
    this.currentUserSource.next(null);
  }

  getDecodedToken(token)
  {
    return JSON.parse(atob(token.split('.')[1]));
  }
}
