import {Injectable} from '@angular/core';
import {Headers, Http, Response} from '@angular/http';
import {Observable} from "rxjs/Rx";
import {isUndefined} from "util";
@Injectable()
export class AuthenticationService {
  private authUrl = 'http://52.32.22.194:8080/FinalPro/auth';
  private headers = new Headers({'Content-Type': 'application/json'})

  constructor(private http: Http) {
  }

  login(username: string, password: string): Observable<boolean> {
    return this.http.post(this.authUrl, JSON.stringify({
      username: username,
      password: password
    }), {headers: this.headers})
      .map((response: Response) => {
        // login successful if there's a jwt token in the response
        let token = response.json() && response.json().token;
        if (token) {
          // store username and jwt token in local storage to keep user logged in between page refreshes
          localStorage.setItem('currentUser', JSON.stringify({username: username, token: token}));
          let student = response.json().student;
          console.log(student);
          localStorage.setItem('userDetails', JSON.stringify(student));
          // return true to indicate successful login
          return true;
        } else {
          // return false to indicate failed login
          return false;
        }
      }).catch((error: any) => Observable.throw(error.json().error || 'Server error'));
  }

  getToken(): string {
    var currentUser = JSON.parse(localStorage.getItem('currentUser'));
    var token = currentUser && currentUser.token;
    return token ? token : "";
  }

  logout(): void {
    // clear token remove user from local storage to log user out
    localStorage.removeItem('currentUser');
    localStorage.removeItem('userDetails');
  }

  getCurrentUser() {
    let details = localStorage.getItem('userDetails');
    if (details == null || details.length == 0) {
      return null;
    }
    return JSON.parse(localStorage.getItem('userDetails'));
  }

  hasRole(role: string): boolean {
    let user: any = this.getCurrentUser();

    if (user) {
      let roleList:string[] = role.split(",");
      for(let j = 0;j < roleList.length;j++) {
        let authList = user.authorities;
        let userRole = 'ROLE_' + roleList[j].trim().toUpperCase();
        for (let i = 0; i < authList.length; i++) {
          if (authList[i].name == userRole) {
            return true;
          }
        }
      }
      

    }
    return false;
  }

  notHasRole(role: string): boolean {
    let user: any = this.getCurrentUser();

    if (user) {
      let roleList:string[] = role.split(",");
      for(let j = 0;j < roleList.length;j++) {
        let authList = user.authorities;
        let userRole = 'ROLE_' + roleList[j].trim().toUpperCase();
        for (let i = 0; i < authList.length; i++) {
          if (authList[i].name == userRole) {
            return false;
          }
        }
      }


    }
    return true;
  }
}
