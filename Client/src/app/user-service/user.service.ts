import { Injectable } from "@angular/core";
import { Http } from "@angular/http";
import { Observable } from "rxjs/Observable";
import "rxjs/add/operator/catch";
import "rxjs/add/operator/map";
import "rxjs/add/observable/throw";

@Injectable()
export class UserService {

  constructor(private http: Http) {
  }

  getUsers(): Observable<any[]> {
    return this.http.get('http://localhost:8080/api/employees')
      .map(response => response.json())
      .catch(error => Observable.throw(error.statusText));
  }

  addUser(user): Observable<any> {

    return this.http.post('http://localhost:8080/api/employees', user)
      .map(response => response.json())
      .catch(error => Observable.throw(error.statusText));
  }
}
